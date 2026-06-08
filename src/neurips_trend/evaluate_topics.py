from __future__ import annotations

import argparse
import json
import logging
from pathlib import Path
from typing import Iterable

import numpy as np
import pandas as pd
from sklearn.metrics import adjusted_rand_score, normalized_mutual_info_score

from .config import ensure_dir, setup_logging

LOGGER = logging.getLogger(__name__)


def load_metrics(model_dir: Path) -> dict:
    metrics_path = model_dir / "metrics.json"
    if metrics_path.exists():
        return json.loads(metrics_path.read_text(encoding="utf-8"))
    topics_path = model_dir / "topics.csv"
    if not topics_path.exists():
        return {}
    topics = pd.read_csv(topics_path)["topic_id"]
    from .topic_metrics import summarize_topic_assignments

    return summarize_topic_assignments(topics)


def collect_model_dirs(root: Path) -> list[Path]:
    if (root / "topics.csv").exists():
        return [root]
    return [p for p in root.rglob("topics.csv") if p.parent.is_dir()]


def pairwise_stability(model_dirs: list[Path], out_path: Path) -> None:
    rows = []
    topic_tables = []
    for d in model_dirs:
        try:
            df = pd.read_csv(d / "topics.csv")[["paper_id", "topic_id"]].rename(columns={"topic_id": d.name})
            topic_tables.append((d.name, df))
        except Exception:
            continue
    for i in range(len(topic_tables)):
        name_i, df_i = topic_tables[i]
        for j in range(i + 1, len(topic_tables)):
            name_j, df_j = topic_tables[j]
            merged = df_i.merge(df_j, on="paper_id", how="inner")
            if len(merged) < 10:
                continue
            labels_i = merged[name_i].astype(int)
            labels_j = merged[name_j].astype(int)
            rows.append(
                {
                    "model_i": name_i,
                    "model_j": name_j,
                    "n_common": int(len(merged)),
                    "nmi": float(normalized_mutual_info_score(labels_i, labels_j)),
                    "ari": float(adjusted_rand_score(labels_i, labels_j)),
                }
            )
    pd.DataFrame(rows).to_csv(out_path, index=False)


def main() -> None:
    parser = argparse.ArgumentParser(description="Collect topic-model evaluation metrics and stability.")
    parser.add_argument("--models-root", required=True, nargs="+", help="One or more model roots")
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "evaluate_topics.log")
    all_rows = []
    all_model_dirs = []
    for root_str in args.models_root:
        root = Path(root_str)
        for path in collect_model_dirs(root):
            model_dir = path if path.is_dir() else path.parent
            metrics = load_metrics(model_dir)
            if metrics:
                metrics["path"] = str(model_dir)
                metrics.setdefault("model_id", model_dir.name)
                all_rows.append(metrics)
                all_model_dirs.append(model_dir)
    pd.DataFrame(all_rows).to_csv(out_dir / "model_evaluation_summary.csv", index=False)
    pairwise_stability(all_model_dirs, out_dir / "pairwise_stability.csv")
    LOGGER.info("Saved evaluation summary to %s", out_dir)


if __name__ == "__main__":
    main()
