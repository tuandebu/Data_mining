from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd

from .table_io import read_table, write_table

from .config import ensure_dir


def main() -> None:
    parser = argparse.ArgumentParser(description="Export topic assignments already present in prepared papers.parquet.")
    parser.add_argument("--papers", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()
    out_dir = ensure_dir(args.out_dir)
    df = read_table(args.papers)
    if "topic_id" not in df.columns:
        raise ValueError("papers table does not contain topic_id. Use full BERTopic run instead.")
    cols = ["paper_id", "topic_id"]
    if "topic_prob" in df.columns:
        cols.append("topic_prob")
    df[cols].to_csv(out_dir / "topics.csv", index=False)
    info_cols = [c for c in ["topic_id", "topic_label"] if c in df.columns]
    if len(info_cols) == 2:
        info = (
            df.groupby("topic_id")
            .agg(Count=("paper_id", "size"), Name=("topic_label", lambda x: x.dropna().iloc[0] if x.dropna().size else ""))
            .reset_index()
            .rename(columns={"topic_id": "Topic"})
            .sort_values("Count", ascending=False)
        )
        info.to_csv(out_dir / "topic_info.csv", index=False)


if __name__ == "__main__":
    main()
