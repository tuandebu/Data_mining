#!/usr/bin/env bash
set -euo pipefail

RAW_INPUT=${1:?"Usage: bash scripts/run_existing_topics.sh /path/to/neurips_data.zip OUT_DIR [CONFIG]"}
OUT_DIR=${2:?"Missing OUT_DIR"}
CONFIG=${3:-configs/server_default.yaml}

export PYTHONPATH="$(pwd)/src:${PYTHONPATH:-}"
mkdir -p "$OUT_DIR"

python -m neurips_trend.data_prepare \
  --input "$RAW_INPUT" \
  --out-dir "$OUT_DIR/data" \
  --config "$CONFIG" \
  --prefer-existing-topic-csv

python -m neurips_trend.export_existing_topics \
  --papers "$OUT_DIR/data/papers.parquet" \
  --out-dir "$OUT_DIR/existing_topics"

python -m neurips_trend.trend_analysis \
  --papers "$OUT_DIR/data/papers.parquet" \
  --topics "$OUT_DIR/existing_topics/topics.csv" \
  --topic-info "$OUT_DIR/existing_topics/topic_info.csv" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/tables"

python -m neurips_trend.representatives \
  --papers "$OUT_DIR/data/papers.parquet" \
  --topics "$OUT_DIR/existing_topics/topics.csv" \
  --topic-info "$OUT_DIR/existing_topics/topic_info.csv" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/tables"

python -m neurips_trend.figures \
  --topic-stats "$OUT_DIR/tables/topic_statistics.csv" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/figures"

echo "Done. Outputs are in $OUT_DIR"
