from __future__ import annotations

import argparse
import logging
from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats

from .config import ensure_dir, load_config, setup_logging

LOGGER = logging.getLogger(__name__)


def short_label(label: str, max_len: int = 34) -> str:
    s = str(label)
    return s if len(s) <= max_len else s[: max_len - 1] + "…"


def scatter_review_trend(topic_stats: pd.DataFrame, out_path: Path, rating_col: str, max_labels: int = 14, dpi: int = 220) -> None:
    df = topic_stats.dropna(subset=["delta_share_pp", rating_col]).copy()
    if df.empty:
        LOGGER.warning("No data for scatter figure")
        return
    sizes = 30 + 270 * np.sqrt(df["topic_size"] / df["topic_size"].max())
    fig, ax = plt.subplots(figsize=(8.0, 5.2))
    ax.scatter(df["delta_share_pp"], df[rating_col], s=sizes, alpha=0.65, edgecolor="black", linewidth=0.4)
    x = df["delta_share_pp"].to_numpy(float)
    y = df[rating_col].to_numpy(float)
    if len(df) >= 3:
        slope, intercept, r, p, _ = stats.linregress(x, y)
        xs = np.linspace(x.min(), x.max(), 100)
        ax.plot(xs, intercept + slope * xs, linestyle="--", linewidth=1.5, label=f"fit: r={r:.2f}, p={p:.3g}")
        ax.legend(frameon=False)
    ax.axvline(0, linestyle=":", linewidth=1)
    ax.axhline(df[rating_col].mean(), linestyle=":", linewidth=1)
    ax.set_xlabel("Accepted-paper share change, 2025 - 2023 (percentage points)")
    ylabel = "Year-normalized reviewer rating" if rating_col == "avg_rating_z_year" else "Average reviewer rating"
    ax.set_ylabel(ylabel)
    ax.set_title("Review--trend association across NeurIPS topics")

    # Label most extreme topics by absolute delta and rating deviation.
    df["label_score"] = df["delta_share_pp"].abs().rank(pct=True) + (df[rating_col] - df[rating_col].mean()).abs().rank(pct=True)
    for _, row in df.sort_values("label_score", ascending=False).head(max_labels).iterrows():
        ax.annotate(short_label(row["topic_label"]), (row["delta_share_pp"], row[rating_col]), fontsize=7, xytext=(3, 3), textcoords="offset points")
    fig.tight_layout()
    fig.savefig(out_path, dpi=dpi, bbox_inches="tight")
    plt.close(fig)


def heatmap_topic_shares(topic_stats: pd.DataFrame, out_path: Path, dpi: int = 220, top_n: int = 15) -> None:
    share_cols = [c for c in topic_stats.columns if c.startswith("share_") and c.endswith("_pp")]
    if not share_cols:
        return
    df = topic_stats.copy()
    df["abs_delta"] = df["delta_share_pp"].abs()
    df = df.sort_values("abs_delta", ascending=False).head(top_n)
    data = df[share_cols].to_numpy(float)
    fig, ax = plt.subplots(figsize=(7.5, max(4.0, 0.28 * len(df))))
    im = ax.imshow(data, aspect="auto")
    ax.set_yticks(np.arange(len(df)))
    ax.set_yticklabels([short_label(x, 42) for x in df["topic_label"]], fontsize=7)
    ax.set_xticks(np.arange(len(share_cols)))
    ax.set_xticklabels([c.replace("share_", "").replace("_pp", "") for c in share_cols])
    ax.set_title("Normalized accepted-paper share by year")
    cbar = fig.colorbar(im, ax=ax)
    cbar.set_label("Share of accepted papers (%)")
    fig.tight_layout()
    fig.savefig(out_path, dpi=dpi, bbox_inches="tight")
    plt.close(fig)


def bar_rising_declining(topic_stats: pd.DataFrame, out_path: Path, dpi: int = 220, k: int = 8) -> None:
    rising = topic_stats.sort_values("delta_share_pp", ascending=False).head(k)
    declining = topic_stats.sort_values("delta_share_pp", ascending=True).head(k)
    df = pd.concat([declining, rising], axis=0).drop_duplicates("topic_id")
    df = df.sort_values("delta_share_pp")
    fig, ax = plt.subplots(figsize=(8.0, max(4.0, 0.32 * len(df))))
    ax.barh([short_label(x, 44) for x in df["topic_label"]], df["delta_share_pp"])
    ax.axvline(0, linewidth=1)
    ax.set_xlabel("Accepted-paper share change, 2025 - 2023 (percentage points)")
    ax.set_title("Fastest rising and declining topics")
    fig.tight_layout()
    fig.savefig(out_path, dpi=dpi, bbox_inches="tight")
    plt.close(fig)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate final project figures.")
    parser.add_argument("--topic-stats", required=True)
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "figures.log")
    cfg = load_config(args.config)
    fig_cfg = cfg.get("figures", {})
    dpi = int(fig_cfg.get("dpi", 220))
    max_labels = int(fig_cfg.get("max_labels", 14))
    stats_df = pd.read_csv(args.topic_stats)

    scatter_review_trend(stats_df, out_dir / "review_trend_scatter_year_normalized.png", "avg_rating_z_year", max_labels, dpi)
    if "avg_rating" in stats_df.columns:
        scatter_review_trend(stats_df, out_dir / "review_trend_scatter_raw_rating.png", "avg_rating", max_labels, dpi)
    heatmap_topic_shares(stats_df, out_dir / "topic_share_heatmap.png", dpi=dpi)
    bar_rising_declining(stats_df, out_dir / "rising_declining_topics.png", dpi=dpi)
    LOGGER.info("Saved figures to %s", out_dir)


if __name__ == "__main__":
    main()
