from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


def run(cmd: list[str]) -> None:
    print("\n$ " + " ".join(cmd), flush=True)
    subprocess.run(cmd, check=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="Python orchestrator for full pipeline.")
    parser.add_argument("--input", required=True)
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--config", required=True)
    parser.add_argument("--existing-topics", action="store_true")
    args = parser.parse_args()

    out = Path(args.out_dir)
    data = out / "data"
    if args.existing_topics:
        run([sys.executable, "-m", "neurips_trend.data_prepare", "--input", args.input, "--out-dir", str(data), "--config", args.config, "--prefer-existing-topic-csv"])
        existing = out / "existing_topics"
        run([sys.executable, "-m", "neurips_trend.export_existing_topics", "--papers", str(data / "papers.parquet"), "--out-dir", str(existing)])
        run([sys.executable, "-m", "neurips_trend.trend_analysis", "--papers", str(data / "papers.parquet"), "--topics", str(existing / "topics.csv"), "--topic-info", str(existing / "topic_info.csv"), "--config", args.config, "--out-dir", str(out / "tables")])
        run([sys.executable, "-m", "neurips_trend.representatives", "--papers", str(data / "papers.parquet"), "--topics", str(existing / "topics.csv"), "--topic-info", str(existing / "topic_info.csv"), "--config", args.config, "--out-dir", str(out / "tables")])
        run([sys.executable, "-m", "neurips_trend.figures", "--topic-stats", str(out / "tables" / "topic_statistics.csv"), "--config", args.config, "--out-dir", str(out / "figures")])
        return

    # Full server pipeline.
    run([sys.executable, "-m", "neurips_trend.data_prepare", "--input", args.input, "--out-dir", str(data), "--config", args.config])
    run([sys.executable, "-m", "neurips_trend.embeddings", "--input", str(data / "accepted_papers.parquet"), "--config", args.config, "--out-dir", str(out / "embeddings")])
    run([sys.executable, "-m", "neurips_trend.bertopic_grid", "--input", str(data / "accepted_papers.parquet"), "--embeddings-dir", str(out / "embeddings"), "--config", args.config, "--out-dir", str(out / "models")])
    run([sys.executable, "-m", "neurips_trend.select_best_model", "--models-root", str(out / "models"), "--config", args.config, "--out-dir", str(out / "selection")])
    run([sys.executable, "-m", "neurips_trend.reduce_outliers", "--input", str(data / "accepted_papers.parquet"), "--models-root", str(out / "models"), "--selection", str(out / "selection" / "best_model.json"), "--embeddings-dir", str(out / "embeddings"), "--config", args.config, "--out-dir", str(out / "models_reduced")])
    run([sys.executable, "-m", "neurips_trend.lda_baseline", "--input", str(data / "accepted_papers.parquet"), "--config", args.config, "--out-dir", str(out / "lda")])
    run([sys.executable, "-m", "neurips_trend.evaluate_topics", "--models-root", str(out / "models"), str(out / "models_reduced"), str(out / "lda"), "--out-dir", str(out / "eval")])
    run([sys.executable, "-m", "neurips_trend.trend_analysis", "--papers", str(data / "papers.parquet"), "--topics", str(out / "models_reduced" / "best" / "topics.csv"), "--topic-info", str(out / "models_reduced" / "best" / "topic_info.csv"), "--config", args.config, "--out-dir", str(out / "tables")])
    run([sys.executable, "-m", "neurips_trend.representatives", "--papers", str(data / "papers.parquet"), "--topics", str(out / "models_reduced" / "best" / "topics.csv"), "--topic-info", str(out / "models_reduced" / "best" / "topic_info.csv"), "--config", args.config, "--out-dir", str(out / "tables")])
    run([sys.executable, "-m", "neurips_trend.figures", "--topic-stats", str(out / "tables" / "topic_statistics.csv"), "--config", args.config, "--out-dir", str(out / "figures")])


if __name__ == "__main__":
    main()
