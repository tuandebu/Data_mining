# NeurIPS Review-Guided Trend Mining Pipeline

Production-ready server code for the COMP4040 final project:

> Mine how research topics evolve within accepted NeurIPS papers (2023--2025) and how topic growth relates to peer-review signals.

This repository intentionally **does not estimate topic-level acceptance rates**. Paper Copilot / conference statistics are used only for global acceptance-rate context. At topic level, the pipeline reports:

- normalized accepted-paper share,
- endpoint share change from 2023 to 2025,
- year-normalized reviewer scores,
- oral/spotlight concentration among accepted papers,
- correlation and regression evidence for review--trend association,
- qualitative validation via representative papers.

## Expected input

The code supports either:

1. Your original zip file:

```text
neurips_data.zip
├── neurips_data/neurips_topics.csv
└── neurips_data/output_neurips2023/NeurIPS_2023/json/*.json
└── neurips_data/output_neurips2024/NeurIPS_2024/json/*.json
└── neurips_data/output_neurips2025/NeurIPS_2025/json/*.json
```

2. An extracted directory with the same structure.
3. A CSV with columns similar to your current `neurips_topics.csv`.

## Quick start: use your existing topic assignments

This is the fastest path to corrected tables and figures before office hours.

```bash
conda env create -f environment.yml
conda activate neurips-trend

bash scripts/run_existing_topics.sh \
  /path/to/neurips_data.zip \
  artifacts_existing
```

Outputs:

```text
artifacts_existing/
├── data/papers.parquet
├── data/reviews.parquet
├── data/accepted_papers.parquet
├── tables/topic_statistics.csv
├── tables/correlation_results.csv
├── tables/regression_results.csv
├── tables/representative_papers.csv
└── figures/*.png
```

## Full server run: embeddings + BERTopic grid + baselines

```bash
bash scripts/run_full_server.sh \
  /path/to/neurips_data.zip \
  artifacts_full \
  configs/server_default.yaml
```

This runs:

1. data preparation,
2. MiniLM + SPECTER2 embeddings,
3. BERTopic grid search,
4. model selection,
5. outlier reduction,
6. LDA baseline,
7. model evaluation,
8. trend/correlation/regression analysis,
9. representative paper selection,
10. figures.

## Recommended server command

Use `tmux` or `screen`:

```bash
tmux new -s neurips
bash scripts/run_full_server.sh /path/to/neurips_data.zip artifacts_full configs/server_default.yaml 2>&1 | tee run.log
```

For SLURM clusters, edit `scripts/slurm_full_run.sbatch`.

## Repository structure

```text
configs/
  server_default.yaml        # all experiment settings
scripts/
  run_existing_topics.sh     # corrected analysis using current topic csv
  run_full_server.sh         # full pipeline
  slurm_full_run.sbatch      # optional batch job
src/neurips_trend/
  config.py                  # config loading and logging
  text.py                    # text cleaning
  data_prepare.py            # parse OpenReview JSON / CSV into parquet
  embeddings.py              # MiniLM/SPECTER2 embedding generation
  bertopic_grid.py           # BERTopic grid search
  select_best_model.py       # choose model by coherence/diversity/outlier score
  reduce_outliers.py         # BERTopic outlier reassignment
  lda_baseline.py            # LDA baseline
  evaluate_topics.py         # coherence/diversity/stability
  trend_analysis.py          # topic trend + correlation/regression
  representatives.py         # representative papers for qualitative validation
  figures.py                 # final plots
  run_all.py                 # Python orchestrator, optional
```

## Core methodological choices

- Main corpus: accepted NeurIPS papers only.
- Public rejected submissions are retained for sanity checks but not used to estimate acceptance rates.
- Reviewer score is normalized by year before main association analysis.
- Trend is endpoint accepted-paper share change, `share_2025 - share_2023`, with yearly slope reported descriptively.
- Main quantitative result: topic-level correlation/regression between accepted-paper share change and reviewer score.
- Main qualitative validation: representative papers per topic.

## Notes

- The first full run can take hours depending on server hardware.
- If SPECTER2 download is blocked, set `enabled: false` for `specter2` in `configs/server_default.yaml`.
- If BERTopic runs are too slow, reduce the grid size and seed list.
