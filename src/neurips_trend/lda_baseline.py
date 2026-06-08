from __future__ import annotations

import argparse
import json
import logging
from pathlib import Path

import numpy as np
import pandas as pd

from .table_io import read_table, write_table
from sklearn.decomposition import LatentDirichletAllocation
from sklearn.feature_extraction.text import CountVectorizer

from .config import ensure_dir, load_config, setup_logging
from .topic_metrics import compute_gensim_coherence, summarize_topic_assignments, topic_diversity, top_words_from_matrix

LOGGER = logging.getLogger(__name__)


def main() -> None:
    parser = argparse.ArgumentParser(description="Run LDA + bag-of-words baseline.")
    parser.add_argument("--input", required=True, help="accepted_papers.parquet")
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "lda_baseline.log")
    cfg = load_config(args.config)
    lda_cfg = cfg.get("lda", {})
    df = read_table(args.input)
    docs = df[cfg.get("text", {}).get("source_column", "text_clean")].fillna("").astype(str).tolist()

    vectorizer = CountVectorizer(
        stop_words="english",
        max_features=int(lda_cfg.get("max_features", 20000)),
        min_df=5,
        max_df=0.80,
        ngram_range=(1, 2),
    )
    X = vectorizer.fit_transform(docs)
    lda = LatentDirichletAllocation(
        n_components=int(lda_cfg.get("n_topics", 30)),
        max_iter=int(lda_cfg.get("max_iter", 30)),
        learning_method=lda_cfg.get("learning_method", "batch"),
        random_state=int(lda_cfg.get("random_state", 42)),
        n_jobs=-1,
        verbose=1,
    )
    doc_topic = lda.fit_transform(X)
    topics = doc_topic.argmax(axis=1)
    probs = doc_topic.max(axis=1)
    pd.DataFrame({"paper_id": df["paper_id"].astype(str), "topic_id": topics, "topic_prob": probs}).to_csv(out_dir / "topics.csv", index=False)

    feature_names = vectorizer.get_feature_names_out().tolist()
    topics_words = top_words_from_matrix(lda.components_, feature_names, top_n=10)
    topic_info = []
    for i, words in enumerate(topics_words):
        topic_info.append({"Topic": i, "Count": int((topics == i).sum()), "Name": " | ".join(words[:3]), "TopWords": ", ".join(words)})
    pd.DataFrame(topic_info).to_csv(out_dir / "topic_info.csv", index=False)

    summary = summarize_topic_assignments(topics)
    summary.update({"model_id": "lda_tfidf_k30", "embedding_model": "none", "n_topics_requested": int(lda_cfg.get("n_topics", 30))})
    summary["topic_diversity"] = topic_diversity(topics_words, top_k=10)
    summary["coherence_npmi"] = compute_gensim_coherence(docs, topics_words, coherence="c_npmi")
    summary["coherence_cv"] = compute_gensim_coherence(docs, topics_words, coherence="c_v")
    summary["perplexity"] = float(lda.perplexity(X))
    (out_dir / "metrics.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    LOGGER.info("Saved LDA baseline to %s", out_dir)


if __name__ == "__main__":
    main()
