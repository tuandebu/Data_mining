#!/usr/bin/env bash
set -euo pipefail

RAW_INPUT=${1:?"Usage: bash scripts/run_full_server.sh /path/to/neurips_data.zip OUT_DIR [CONFIG]"}
OUT_DIR=${2:?"Missing OUT_DIR"}
CONFIG=${3:-configs/server_default.yaml}

export PYTHONPATH="$(pwd)/src:${PYTHONPATH:-}"
mkdir -p "$OUT_DIR"

python -m neurips_trend.data_prepare \
  --input "$RAW_INPUT" \
  --out-dir "$OUT_DIR/data" \
  --config "$CONFIG"

python -m neurips_trend.embeddings \
  --input "$OUT_DIR/data/accepted_papers.parquet" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/embeddings"

python -m neurips_trend.bertopic_grid \
  --input "$OUT_DIR/data/accepted_papers.parquet" \
  --embeddings-dir "$OUT_DIR/embeddings" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/models"

python -m neurips_trend.select_best_model \
  --models-root "$OUT_DIR/models" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/selection"

python -m neurips_trend.reduce_outliers \
  --input "$OUT_DIR/data/accepted_papers.parquet" \
  --models-root "$OUT_DIR/models" \
  --selection "$OUT_DIR/selection/best_model.json" \
  --embeddings-dir "$OUT_DIR/embeddings" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/models_reduced"

python -m neurips_trend.lda_baseline \
  --input "$OUT_DIR/data/accepted_papers.parquet" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/lda"

python -m neurips_trend.evaluate_topics \
  --models-root "$OUT_DIR/models" "$OUT_DIR/models_reduced" "$OUT_DIR/lda" \
  --out-dir "$OUT_DIR/eval"

python -m neurips_trend.trend_analysis \
  --papers "$OUT_DIR/data/papers.parquet" \
  --topics "$OUT_DIR/models_reduced/best/topics.csv" \
  --topic-info "$OUT_DIR/models_reduced/best/topic_info.csv" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/tables"

python -m neurips_trend.representatives \
  --papers "$OUT_DIR/data/papers.parquet" \
  --topics "$OUT_DIR/models_reduced/best/topics.csv" \
  --topic-info "$OUT_DIR/models_reduced/best/topic_info.csv" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/tables"

python -m neurips_trend.figures \
  --topic-stats "$OUT_DIR/tables/topic_statistics.csv" \
  --config "$CONFIG" \
  --out-dir "$OUT_DIR/figures"

echo "Done. Full outputs are in $OUT_DIR"
