#!/usr/bin/env bash
#SBATCH --job-name=neurips-trend
#SBATCH --output=logs/neurips-trend-%j.out
#SBATCH --error=logs/neurips-trend-%j.err
#SBATCH --partition=gpu
#SBATCH --gres=gpu:1
#SBATCH --cpus-per-task=16
#SBATCH --mem=64G
#SBATCH --time=12:00:00

set -euo pipefail
mkdir -p logs

# Edit these paths.
RAW_INPUT=${RAW_INPUT:-/path/to/neurips_data.zip}
OUT_DIR=${OUT_DIR:-artifacts_full}
CONFIG=${CONFIG:-configs/server_default.yaml}

source ~/.bashrc
conda activate neurips-trend
bash scripts/run_full_server.sh "$RAW_INPUT" "$OUT_DIR" "$CONFIG"
