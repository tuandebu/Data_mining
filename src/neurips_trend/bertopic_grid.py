from __future__ import annotations

import argparse
import itertools
import json
import logging
from pathlib import Path
from typing import Any

import numpy as np
import pandas as pd

from .table_io import read_table, write_table
from tqdm import tqdm

from .config import ensure_dir, load_config, set_seed, setup_logging
from .topic_metrics import compute_gensim_coherence, summarize_topic_assignments, topic_diversity, top_words_from_bertopic

LOGGER = logging.getLogger(__name__)


def build_model(cfg: dict[str, Any], seed: int, n_neighbors: int, n_components: int, min_cluster_size: int, min_samples: int):
    from bertopic import BERTopic
    from hdbscan import HDBSCAN
    from sklearn.feature_extraction.text import CountVectorizer
    from umap import UMAP
    try:
        from bertopic.vectorizers import ClassTfidfTransformer
    except Exception:
        ClassTfidfTransformer = None

    vector_cfg = cfg["bertopic"].get("vectorizer", {})
    ngram_range = tuple(vector_cfg.get("ngram_range", [1, 2]))
    vectorizer = CountVectorizer(
        stop_words="english",
        min_df=vector_cfg.get("min_df", 5),
        max_df=vector_cfg.get("max_df", 0.80),
        ngram_range=ngram_range,
    )
    ctfidf_model = None
    if ClassTfidfTransformer is not None:
        ctfidf_model = ClassTfidfTransformer(
            reduce_frequent_words=cfg["bertopic"].get("class_tfidf", {}).get("reduce_frequent_words", True)
        )

    umap_model = UMAP(
        n_neighbors=n_neighbors,
        n_components=n_components,
        metric="cosine",
        random_state=seed,
        low_memory=cfg["bertopic"].get("low_memory", True),
    )
    hdbscan_model = HDBSCAN(
        min_cluster_size=min_cluster_size,
        min_samples=min_samples,
        metric="euclidean",
        cluster_selection_method="eom",
        prediction_data=True,
    )
    return BERTopic(
        embedding_model=None,
        umap_model=umap_model,
        hdbscan_model=hdbscan_model,
        vectorizer_model=vectorizer,
        ctfidf_model=ctfidf_model,
        calculate_probabilities=cfg["bertopic"].get("calculate_probabilities", False),
        verbose=False,
    )


def config_product(grid_cfg: dict[str, Any]) -> list[dict[str, int]]:
    keys = ["seeds", "umap_n_neighbors", "umap_n_components", "hdbscan_min_cluster_size", "hdbscan_min_samples"]
    values = [grid_cfg[k] for k in keys]
    configs = []
    for seed, nn, nc, mcs, ms in itertools.product(*values):
        configs.append(
            {
                "seed": int(seed),
                "umap_n_neighbors": int(nn),
                "umap_n_components": int(nc),
                "hdbscan_min_cluster_size": int(mcs),
                "hdbscan_min_samples": int(ms),
            }
        )
    return configs


def run_one(
    docs: list[str],
    paper_ids: list[str],
    embeddings: np.ndarray,
    cfg: dict[str, Any],
    model_key: str,
    params: dict[str, int],
    out_root: Path,
) -> dict[str, Any]:
    set_seed(params["seed"])
    model_id = (
        f"{model_key}_seed{params['seed']}_nn{params['umap_n_neighbors']}"
        f"_nc{params['umap_n_components']}_mcs{params['hdbscan_min_cluster_size']}_ms{params['hdbscan_min_samples']}"
    )
    model_dir = ensure_dir(out_root / model_id)
    LOGGER.info("Running BERTopic config: %s", model_id)

    topic_model = build_model(
        cfg,
        params["seed"],
        params["umap_n_neighbors"],
        params["umap_n_components"],
        params["hdbscan_min_cluster_size"],
        params["hdbscan_min_samples"],
    )
    topics, probs = topic_model.fit_transform(docs, embeddings)
    topics_arr = np.asarray(topics)

    pd.DataFrame(
        {
            "paper_id": paper_ids,
            "topic_id": topics_arr,
            "topic_prob": np.nan if probs is None else np.asarray(probs).max(axis=1) if getattr(probs, "ndim", 0) == 2 else probs,
        }
    ).to_csv(model_dir / "topics.csv", index=False)

    info = topic_model.get_topic_info()
    info.to_csv(model_dir / "topic_info.csv", index=False)
    topic_model.save(str(model_dir / "model"), serialization="pickle")

    topic_ids = sorted([int(t) for t in set(topics_arr) if int(t) != -1])
    topic_words = top_words_from_bertopic(topic_model, topic_ids, top_n=10)
    summary = summarize_topic_assignments(topics_arr)
    summary.update(params)
    summary.update({"model_id": model_id, "embedding_model": model_key})
    summary["topic_diversity"] = topic_diversity(topic_words, top_k=10)
    summary["coherence_npmi"] = compute_gensim_coherence(docs, topic_words, coherence="c_npmi")
    summary["coherence_cv"] = compute_gensim_coherence(docs, topic_words, coherence="c_v")
    (model_dir / "metrics.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    return summary


def main() -> None:
    parser = argparse.ArgumentParser(description="Run BERTopic grid search with precomputed embeddings.")
    parser.add_argument("--input", required=True, help="accepted_papers.parquet")
    parser.add_argument("--embeddings-dir", required=True, help="Directory containing model_key/embeddings.npy")
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--model", default=None, help="Optional embedding model key")
    parser.add_argument("--limit", type=int, default=None, help="Debug: limit number of configs")
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "bertopic_grid.log")
    cfg = load_config(args.config)
    df = read_table(args.input)
    docs = df[cfg.get("text", {}).get("source_column", "text_clean")].fillna("").astype(str).tolist()
    paper_ids = df["paper_id"].astype(str).tolist()

    grid = config_product(cfg["bertopic"]["grid"])
    if args.limit:
        grid = grid[: args.limit]

    all_summaries: list[dict[str, Any]] = []
    emb_root = Path(args.embeddings_dir)
    model_dirs = [p for p in emb_root.iterdir() if p.is_dir() and (p / "embeddings.npy").exists()]
    for model_dir in model_dirs:
        model_key = model_dir.name
        if args.model and args.model != model_key:
            continue
        embeddings = np.load(model_dir / "embeddings.npy")
        if len(embeddings) != len(docs):
            raise ValueError(f"Embedding row count mismatch for {model_key}: {len(embeddings)} vs {len(docs)}")
        for params in tqdm(grid, desc=f"BERTopic grid {model_key}"):
            try:
                all_summaries.append(run_one(docs, paper_ids, embeddings, cfg, model_key, params, out_dir))
            except Exception as exc:
                LOGGER.exception("Config failed for %s %s: %s", model_key, params, exc)
                failed = dict(params)
                failed.update({"model_id": None, "embedding_model": model_key, "error": str(exc)})
                all_summaries.append(failed)

    pd.DataFrame(all_summaries).to_csv(out_dir / "grid_metrics.csv", index=False)
    LOGGER.info("Saved grid metrics: %s", out_dir / "grid_metrics.csv")


if __name__ == "__main__":
    main()
