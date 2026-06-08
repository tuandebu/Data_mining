from __future__ import annotations

import argparse
import json
import logging
import shutil
from pathlib import Path

import numpy as np
import pandas as pd

from .table_io import read_table, write_table

from .config import ensure_dir, load_config, setup_logging
from .topic_metrics import compute_gensim_coherence, summarize_topic_assignments, topic_diversity, top_words_from_bertopic

LOGGER = logging.getLogger(__name__)


def main() -> None:
    parser = argparse.ArgumentParser(description="Apply BERTopic outlier reduction to selected model.")
    parser.add_argument("--input", required=True, help="accepted_papers.parquet")
    parser.add_argument("--models-root", required=True, help="BERTopic grid directory")
    parser.add_argument("--selection", required=True, help="best_model.json")
    parser.add_argument("--embeddings-dir", required=True)
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "reduce_outliers.log")
    cfg = load_config(args.config)
    best = json.loads(Path(args.selection).read_text(encoding="utf-8"))
    model_id = best["model_id"]
    embedding_model = best["embedding_model"]
    source_model_dir = Path(args.models_root) / model_id
    target_model_dir = ensure_dir(out_dir / "best")

    from bertopic import BERTopic

    df = read_table(args.input)
    docs = df[cfg.get("text", {}).get("source_column", "text_clean")].fillna("").astype(str).tolist()
    paper_ids = df["paper_id"].astype(str).tolist()
    topics_df = pd.read_csv(source_model_dir / "topics.csv")
    topics = topics_df["topic_id"].astype(int).tolist()
    embeddings = np.load(Path(args.embeddings_dir) / embedding_model / "embeddings.npy")
    topic_model = BERTopic.load(str(source_model_dir / "model"))

    strategy = cfg["bertopic"].get("outlier_reduction", {}).get("strategy", "embeddings")
    LOGGER.info("Reducing outliers with strategy=%s", strategy)
    new_topics = topic_model.reduce_outliers(docs, topics, strategy=strategy, embeddings=embeddings)
    topic_model.update_topics(docs, topics=new_topics)

    new_topics_arr = np.asarray(new_topics)
    pd.DataFrame({"paper_id": paper_ids, "topic_id": new_topics_arr, "topic_prob": topics_df.get("topic_prob", np.nan)}).to_csv(
        target_model_dir / "topics.csv", index=False
    )
    topic_model.get_topic_info().to_csv(target_model_dir / "topic_info.csv", index=False)
    topic_model.save(str(target_model_dir / "model"), serialization="pickle")

    topic_ids = sorted([int(t) for t in set(new_topics_arr) if int(t) != -1])
    topic_words = top_words_from_bertopic(topic_model, topic_ids, top_n=10)
    summary = summarize_topic_assignments(new_topics_arr)
    summary.update({"source_model_id": model_id, "embedding_model": embedding_model, "outlier_strategy": strategy})
    summary["topic_diversity"] = topic_diversity(topic_words, top_k=10)
    summary["coherence_npmi"] = compute_gensim_coherence(docs, topic_words, coherence="c_npmi")
    summary["coherence_cv"] = compute_gensim_coherence(docs, topic_words, coherence="c_v")
    (target_model_dir / "metrics.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")

    # Keep original best artifacts for comparison.
    shutil.copy2(source_model_dir / "topics.csv", target_model_dir / "topics_before_outlier_reduction.csv")
    LOGGER.info("Saved reduced model to %s", target_model_dir)


if __name__ == "__main__":
    main()
