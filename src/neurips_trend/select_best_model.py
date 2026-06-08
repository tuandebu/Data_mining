from __future__ import annotations

import argparse
import json
import logging
from pathlib import Path

import numpy as np
import pandas as pd

from .config import ensure_dir, load_config, setup_logging

LOGGER = logging.getLogger(__name__)


def compute_score(row: pd.Series, cfg: dict) -> float:
    sel = cfg["bertopic"].get("selection", {})
    weights = sel.get("score_weights", {})
    score = 0.0
    for key, weight in weights.items():
        val = row.get(key, np.nan)
        if pd.notna(val):
            score += float(weight) * float(val)
    return score


def main() -> None:
    parser = argparse.ArgumentParser(description="Select the best BERTopic run from grid metrics.")
    parser.add_argument("--models-root", required=True)
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "select_best_model.log")
    cfg = load_config(args.config)
    metrics_path = Path(args.models_root) / "grid_metrics.csv"
    df = pd.read_csv(metrics_path)
    df = df[df["model_id"].notna()].copy()

    sel = cfg["bertopic"].get("selection", {})
    min_topics = sel.get("min_topics", 0)
    max_topics = sel.get("max_topics", 10**9)
    max_outlier_rate = sel.get("max_outlier_rate", 1.0)
    filtered = df[
        (df["n_topics"] >= min_topics)
        & (df["n_topics"] <= max_topics)
        & (df["outlier_rate"] <= max_outlier_rate)
    ].copy()
    if filtered.empty:
        LOGGER.warning("No models passed filters; selecting from all successful models")
        filtered = df.copy()
    filtered["selection_score"] = filtered.apply(lambda row: compute_score(row, cfg), axis=1)
    filtered = filtered.sort_values("selection_score", ascending=False)
    best = filtered.iloc[0].to_dict()

    filtered.to_csv(out_dir / "ranked_models.csv", index=False)
    (out_dir / "best_model.json").write_text(json.dumps(best, indent=2), encoding="utf-8")
    LOGGER.info("Best model: %s score=%.4f", best.get("model_id"), best.get("selection_score"))


if __name__ == "__main__":
    main()
