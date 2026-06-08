from __future__ import annotations

import argparse
import logging
from pathlib import Path
from urllib.parse import quote_plus

import numpy as np
import pandas as pd

from .table_io import read_table, write_table

from .config import ensure_dir, load_config, setup_logging

LOGGER = logging.getLogger(__name__)


def load_topic_info(path: str | Path | None) -> pd.DataFrame | None:
    if path is None:
        return None
    p = Path(path)
    if p.is_dir():
        p = p / "topic_info.csv"
    return pd.read_csv(p) if p.exists() else None


def label_lookup(topic_info: pd.DataFrame | None) -> dict[int, str]:
    if topic_info is None:
        return {}
    topic_col = "Topic" if "Topic" in topic_info.columns else "topic_id" if "topic_id" in topic_info.columns else None
    if topic_col is None:
        return {}
    labels = {}
    for _, row in topic_info.iterrows():
        try:
            tid = int(row[topic_col])
        except Exception:
            continue
        for col in ["Name", "topic_label", "TopWords", "Representation"]:
            if col in topic_info.columns and pd.notna(row.get(col)):
                labels[tid] = str(row[col])
                break
    return labels


def semantic_scholar_url(title: str) -> str:
    return "https://www.semanticscholar.org/search?q=" + quote_plus(str(title))


def select_representatives(df: pd.DataFrame, cfg: dict) -> pd.DataFrame:
    rep_cfg = cfg.get("representatives", {})
    top_k = int(rep_cfg.get("top_k_per_topic", 5))
    sort_cols = []
    ascending = []
    if rep_cfg.get("prefer_high_probability", True) and "topic_prob" in df.columns:
        sort_cols.append("topic_prob")
        ascending.append(False)
    if rep_cfg.get("use_rating_tiebreak", True) and "avg_rating" in df.columns:
        sort_cols.append("avg_rating")
        ascending.append(False)
    sort_cols.extend(["year", "title"])
    ascending.extend([False, True])

    rows = []
    for topic_id, g in df.groupby("topic_id"):
        g2 = g.sort_values(sort_cols, ascending=ascending).head(top_k)
        for rank, (_, row) in enumerate(g2.iterrows(), 1):
            rows.append(
                {
                    "topic_id": int(topic_id),
                    "topic_label": row.get("topic_label", str(topic_id)),
                    "rank": rank,
                    "paper_id": row["paper_id"],
                    "year": int(row["year"]) if pd.notna(row.get("year")) else None,
                    "title": row.get("title", ""),
                    "decision": row.get("decision", row.get("decision_raw", "")),
                    "avg_rating": row.get("avg_rating", np.nan),
                    "avg_rating_z_year": row.get("avg_rating_z_year", np.nan),
                    "topic_prob": row.get("topic_prob", np.nan),
                    "openreview_url": row.get("openreview_url", f"https://openreview.net/forum?id={row['paper_id']}"),
                    "semantic_scholar_search_url": semantic_scholar_url(row.get("title", "")),
                }
            )
    return pd.DataFrame(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description="Select representative papers per topic.")
    parser.add_argument("--papers", required=True)
    parser.add_argument("--topics", required=True)
    parser.add_argument("--topic-info", default=None)
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "representatives.log")
    cfg = load_config(args.config)
    papers = read_table(args.papers)
    topics = pd.read_csv(args.topics)
    topic_info = load_topic_info(args.topic_info)
    labels = label_lookup(topic_info)

    base_papers = papers.drop(columns=[c for c in ["topic_id", "topic_prob"] if c in papers.columns])
    df = base_papers.merge(topics, on="paper_id", how="inner")
    df = df[df["is_accepted"]].copy() if "is_accepted" in df.columns else df.copy()
    df["topic_id"] = df["topic_id"].astype(int)
    exclude = set(cfg.get("trend", {}).get("exclude_topics", [-1]))
    if cfg.get("trend", {}).get("exclude_topic_zero", False):
        exclude.add(0)
    df = df[~df["topic_id"].isin(exclude)].copy()
    if "topic_label" not in df.columns:
        df["topic_label"] = df["topic_id"].map(labels).fillna(df["topic_id"].astype(str))
    if "openreview_url" not in df.columns:
        df["openreview_url"] = "https://openreview.net/forum?id=" + df["paper_id"].astype(str)

    reps = select_representatives(df, cfg)
    reps.to_csv(out_dir / "representative_papers.csv", index=False)
    LOGGER.info("Saved representatives to %s", out_dir / "representative_papers.csv")


if __name__ == "__main__":
    main()
