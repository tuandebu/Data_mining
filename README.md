# NeurIPS Review-Guided Trend Mining Pipeline

**COMP4040: Data Mining and Big Data Analytics — Final Project**

[![Dataset](https://img.shields.io/badge/HuggingFace-dataset-yellow)](https://huggingface.co/datasets/tuandebu/data_mining/tree/main)
[![Project](https://img.shields.io/badge/COMP4040-Data%20Mining-blue)]()
[![Topic Modeling](https://img.shields.io/badge/BERTopic-UMAP%2FHDBSCAN-green)]()

This repository contains the code for our final project:

> **Research Trend Analysis of NeurIPS Papers (2023–2025): A Review-Guided Topic Mining Study**

We mine how research topics evolve within **accepted NeurIPS papers** from 2023 to 2025, and we analyze how topic movement relates to peer-review signals such as reviewer ratings and oral/spotlight concentration.

The accompanying dataset and report-ready outputs are hosted separately on Hugging Face:

**Hugging Face dataset:**  
https://huggingface.co/datasets/tuandebu/data_mining/tree/main

**WEB DEMO**

[https://tuandebu.github.io/Data_mining/#repro](https://tuandebu.github.io/Data_mining/#top)

---

## 1. Project Summary

This is a data-mining / text-mining project built around an accepted-corpus analysis of NeurIPS papers.

The pipeline includes:

- OpenReview data parsing
- text cleaning and preprocessing
- MiniLM and SPECTER2 scientific-document embeddings
- UMAP dimensionality reduction
- HDBSCAN clustering
- BERTopic topic modeling
- BERTopic outlier reduction
- LDA TF-IDF baseline
- topic coherence, diversity, outlier-rate, and stability evaluation
- topic trend analysis across 2023, 2024, and 2025
- correlation and regression analysis with reviewer scores
- transition-level robustness checks
- representative-paper selection for qualitative validation

Main research question:

> Among accepted NeurIPS papers, which topics are rising or declining from 2023 to 2025, and how do these trends relate to reviewer ratings and accepted-paper decision tiers?

---

## 2. Important Validity Correction

This project **does not estimate topic-level acceptance rates**.

Rejected NeurIPS submissions are not fully visible on OpenReview because rejected authors may choose whether their papers and reviews are public. Therefore, the true topic-level acceptance rate would require hidden rejected papers:

```text
alpha_c = A_c / (A_c + R_public_c + R_hidden_c)
```

where `R_hidden_c` is unobserved.

Because this denominator is incomplete, the final analysis uses only identifiable accepted-corpus quantities:

- normalized accepted-paper share
- adjacent-year topic movement
- year-normalized reviewer rating
- oral/spotlight concentration among accepted papers
- representative papers for topic validation

Paper Copilot / conference statistics are used only for global NeurIPS selectivity context, **not** for topic-level acceptance-rate estimation.

---

## 3. Dataset

The analysis uses public OpenReview records from NeurIPS 2023–2025.

| Year | Public records | Accepted | Public rejected |
|---|---:|---:|---:|
| 2023 | 3,395 | 3,218 | 177 |
| 2024 | 4,236 | 4,035 | 201 |
| 2025 | 5,540 | 5,286 | 254 |
| **Total** | **13,171** | **12,539** | **632** |

The main analysis set is the **12,539 accepted papers**.

The 632 public rejected records are retained only for transparency and sanity checks. They are not used as an acceptance-rate denominator.

---

## 4. Data Availability

The raw and report-ready data are hosted outside GitHub:

```text
https://huggingface.co/datasets/tuandebu/data_mining/tree/main
```

The GitHub repository is intentionally code-only so that the submitted code remains lightweight and does not include large raw data, model checkpoints, embeddings, or external libraries.

The Hugging Face dataset may contain:

```text
raw OpenReview crawl outputs
processed topic CSV files
report-ready tables
figures
representative-paper outputs
experiment logs
```

---

## 5. Main Results

### 5.1 Model Selection

The final selected model is an outlier-reduced BERTopic model.

| Model | Topics | Outlier rate | c-NPMI | c_v |
|---|---:|---:|---:|---:|
| MiniLM selected, pre-reduction | 56 | 0.345 | 0.144 | 0.740 |
| Selected BERTopic + reduction | 56 | 0.000 | 0.177 | 0.733 |
| LDA TF-IDF, K=30 | 30 | 0.000 | 0.042 | 0.526 |

The selected BERTopic model improves substantially over the LDA baseline on coherence.

### 5.2 Topic Trends

The fastest-rising accepted-paper topics include:

- LLM reasoning
- 3D vision / scene generation
- preference learning / alignment
- LLM safety / jailbreaks
- efficient attention / KV cache

The strongest declining accepted-paper topics include:

- RL / policy learning
- graph neural networks
- bandits / regret minimization
- matrix algorithms
- adversarial robustness

The final analysis decomposes topic movement into:

```text
2023 -> 2024
2024 -> 2025
2025 - 2023 net movement
```

This prevents the report from relying only on an endpoint difference.

### 5.3 Review–Trend Association

The main empirical finding is a negative association between topic growth and year-normalized reviewer rating.

| Analysis | Result |
|---|---:|
| Endpoint Pearson correlation | r = -0.384, p = 0.00346 |
| Endpoint Spearman correlation | rho = -0.471, p = 2.46e-04 |
| Controlled OLS coefficient | beta = -5.903, p = 2.53e-04 |
| Bootstrap 95% CI | [-8.73, -2.78] |
| Transition-level Pearson correlation | r = -0.321, p = 5.50e-04 |
| Transition-level regression | beta = -3.69, p = 8.32e-05 |

Interpretation:

> Topic growth and reviewer evaluation are related but distinct signals. Fast-growing accepted-paper topics are not necessarily the highest-rated topics, while several mature theoretical or classical areas receive higher ratings but decline in relative accepted-paper share.

---

## 6. Repository Structure

```text
configs/
  server_default.yaml        # full experiment configuration
  debug_small.yaml           # smaller debug configuration

scripts/
  run_existing_topics.sh     # fast run using existing topic assignments
  run_full_server.sh         # full server pipeline
  slurm_full_run.sbatch      # optional SLURM batch job

src/neurips_trend/
  __init__.py
  config.py                  # config loading and logging
  text.py                    # text cleaning utilities
  data_prepare.py            # parse OpenReview JSON / CSV into parquet files
  embeddings.py              # MiniLM / SPECTER2 embedding generation
  topic_metrics.py           # coherence and topic-quality utilities
  bertopic_grid.py           # BERTopic grid search
  select_best_model.py       # choose best model by evaluation metrics
  reduce_outliers.py         # BERTopic outlier reassignment
  lda_baseline.py            # LDA baseline
  evaluate_topics.py         # coherence, diversity, stability evaluation
  trend_analysis.py          # topic trend + correlation/regression analysis
  representatives.py         # representative papers for qualitative validation
  figures.py                 # final plots
  export_existing_topics.py  # export existing topic CSV assignments
  run_all.py                 # optional Python orchestrator
  table_io.py                # safe table saving utilities

docs/
  methodological_notes.md

environment.yml
requirements.txt
pyproject.toml
README.md
```

---

## 7. Installation

Create the conda environment:

```bash
conda env create -f environment.yml
conda activate neurips-trend
```

Install the package in editable mode:

```bash
pip install -e .
```

Check the environment:

```bash
python - <<'PY'
import torch
import pandas as pd
import sklearn
import bertopic
import hdbscan
import umap
import sentence_transformers

print("Environment OK")
print("Torch:", torch.__version__)
print("CUDA available:", torch.cuda.is_available())
if torch.cuda.is_available():
    print("GPU:", torch.cuda.get_device_name(0))
PY
```

---

## 8. Expected Input Format

The code expects either a local data directory or a zip file downloaded from the project dataset.

### Option A: Download from Hugging Face

Dataset link:

```text
https://huggingface.co/datasets/tuandebu/data_mining/tree/main
```

Using `huggingface-cli`:

```bash
pip install -U huggingface_hub

huggingface-cli download tuandebu/data_mining \
  --repo-type dataset \
  --local-dir data_mining_hf
```

Using Git LFS:

```bash
git lfs install
git clone https://huggingface.co/datasets/tuandebu/data_mining data_mining_hf
```

Then use the downloaded directory as input to the pipeline.

### Option B: Use a zip file

```text
neurips_data.zip
├── neurips_data/neurips_topics.csv
├── neurips_data/output_neurips2023/NeurIPS_2023/json/*.json
├── neurips_data/output_neurips2024/NeurIPS_2024/json/*.json
└── neurips_data/output_neurips2025/NeurIPS_2025/json/*.json
```

### Option C: Use an extracted directory

```text
neurips_data/
├── neurips_topics.csv
├── output_neurips2023/
├── output_neurips2024/
└── output_neurips2025/
```

---

## 9. Quick Run: Existing Topic Assignments

This is the fastest path if the downloaded dataset already contains `neurips_topics.csv`.

From a Hugging Face-downloaded directory:

```bash
bash scripts/run_existing_topics.sh \
  /path/to/data_mining_hf \
  artifacts_existing \
  configs/server_default.yaml
```

From a zip file:

```bash
bash scripts/run_existing_topics.sh \
  /path/to/neurips_data.zip \
  artifacts_existing \
  configs/server_default.yaml
```

Expected outputs:

```text
artifacts_existing/
├── data/
│   ├── papers.parquet
│   ├── reviews.parquet
│   └── accepted_papers.parquet
├── existing_topics/
│   ├── topics.csv
│   └── topic_info.csv
├── tables/
│   ├── topic_statistics.csv
│   ├── correlation_results.csv
│   ├── regression_results.csv
│   └── representative_papers.csv
└── figures/
    └── *.png
```

---

## 10. Full Server Run

Use this when regenerating embeddings, BERTopic grid search, outlier reduction, the LDA baseline, evaluation tables, and figures.

From a Hugging Face-downloaded directory:

```bash
bash scripts/run_full_server.sh \
  /path/to/data_mining_hf \
  artifacts_full \
  configs/server_default.yaml
```

From a zip file:

```bash
bash scripts/run_full_server.sh \
  /path/to/neurips_data.zip \
  artifacts_full \
  configs/server_default.yaml
```

The full pipeline runs:

1. data preparation
2. MiniLM and SPECTER2 embedding generation
3. BERTopic grid search
4. best-model selection
5. BERTopic outlier reduction
6. LDA TF-IDF baseline
7. coherence / diversity / stability evaluation
8. topic trend analysis
9. correlation and regression analysis
10. representative-paper selection
11. figure generation

Expected outputs:

```text
artifacts_full/
├── data/
├── embeddings/
├── models/
├── models_reduced/
├── lda/
├── eval/
├── tables/
└── figures/
```

---

## 11. Recommended Long-Run Command

For long server jobs, use `tmux`:

```bash
tmux new -s neurips-trend
```

Then run:

```bash
mkdir -p logs
bash scripts/run_full_server.sh \
  /path/to/neurips_data.zip \
  artifacts_full \
  configs/server_default.yaml 2>&1 | tee logs/full_run.log
```

Detach from tmux:

```text
Ctrl-b d
```

Reattach:

```bash
tmux attach -t neurips-trend
```

---

## 12. SLURM Usage

For a SLURM cluster, edit:

```text
scripts/slurm_full_run.sbatch
```

Then submit:

```bash
sbatch scripts/slurm_full_run.sbatch
```

---

## 13. Report-Ready Outputs

After the full run, the files most relevant for the final report are:

```text
artifacts_full/tables/topic_statistics.csv
artifacts_full/tables/correlation_results.csv
artifacts_full/tables/regression_results.csv
artifacts_full/tables/representative_papers.csv
artifacts_full/eval/*.csv
artifacts_full/figures/*.png
```

For a compact report package:

```bash
mkdir -p report_ready_outputs/tables report_ready_outputs/figures report_ready_outputs/eval report_ready_outputs/logs

cp -r artifacts_full/tables/*.csv report_ready_outputs/tables/ 2>/dev/null || true
cp -r artifacts_full/figures/*.png report_ready_outputs/figures/ 2>/dev/null || true
cp -r artifacts_full/eval/*.csv report_ready_outputs/eval/ 2>/dev/null || true

conda env export --no-builds > report_ready_outputs/environment.lock.yml
python -m pip freeze > report_ready_outputs/pip_freeze.txt

tar -czf report_ready_outputs.tar.gz report_ready_outputs
```

---

## 14. Reproducing the Final Report's Transition Analysis

The final report also includes adjacent-year transition analysis:

```text
2023 -> 2024
2024 -> 2025
```

These results can be regenerated from:

```text
artifacts_full/tables/topic_statistics.csv
```

or downloaded directly from the Hugging Face report-ready outputs:

```text
https://huggingface.co/datasets/tuandebu/data_mining/tree/main
```

The key transition-level files are:

```text
topic_year_to_year_decomposition_top20.csv
transition_level_data.csv
transition_level_results.csv
trajectory_type_counts.csv
adjacent_year_decomposition_bars.png
transition_review_association.png
```

---

## 15. Reproducibility Notes

The final report results are generated from server-run artifacts.

For reproducibility, we keep:

```text
environment.lock.yml
pip_freeze.txt
server result checksums
logs/full_run.log
report-ready CSV files
report-ready figures
```

The full artifact archive may include embeddings, model checkpoints, and processed parquet files, but those are intentionally excluded from the code repository because they are too large for course submission.

---

## 16. What Is Not Included in This GitHub Repository

This repository intentionally does not include large data artifacts.

Excluded from GitHub/code zip:

```text
raw OpenReview crawl data
large model checkpoints
cached embeddings
processed parquet files
full experiment backup archives
external Python libraries
```

These data artifacts are hosted separately on Hugging Face:

```text
https://huggingface.co/datasets/tuandebu/data_mining/tree/main
```

This keeps the GitHub repository lightweight and compatible with the COMP4040 final-project submission rule that code zips should not include data or libraries and should remain under the size limit.

---

## 17. Main Figures Produced

The pipeline produces report figures such as:

```text
model_selection_tradeoff.png
stability_summary.png
rising_declining_topics.png
topic_share_heatmap.png
review_trend_scatter_year_normalized.png
review_trend_scatter_raw_rating.png
```

Additional transition-analysis figures may be generated from `topic_statistics.csv`, including:

```text
adjacent_year_decomposition_bars.png
transition_review_association.png
transition_quadrant_scatter.png
```

---

## 18. Methodological Summary

This project should be interpreted as:

```text
accepted-corpus trend mining
```

not:

```text
submitted-paper acceptance-rate estimation
```

The final analysis asks:

```text
Given accepted NeurIPS papers, how did topic share change over time, and how do those changes relate to review signals?
```

The project does not claim:

```text
This topic has a higher acceptance rate.
Reviewers are biased against emerging topics.
A three-year trend proves long-term field decline.
```

Instead, it claims:

```text
Topic movement in accepted-paper share is negatively associated with reviewer rating, and this association remains under robustness checks.
```

---

## 19. Team Contributions

| Member | Contribution |
|---|---|
| Nguyen Pham Tuan Anh | OpenReview data pipeline and preprocessing |
| Tran Hung Dat | Embedding generation, BERTopic grid search, outlier reduction, model evaluation |
| Tran Ho Chi Thanh | Trend statistics, correlation/regression analysis, transition analysis, visualization, qualitative validation, report writing |
| All members | Acceptance-rate correction, interpretation review, final report checking |

---

## 20. Troubleshooting

### CUDA is not detected

Check:

```bash
python - <<'PY'
import torch
print(torch.__version__)
print(torch.cuda.is_available())
PY
```

If CUDA is unavailable, either install CUDA-enabled PyTorch or set the config to CPU mode if supported by your setup.

### SPECTER2 download fails

Disable SPECTER2 in `configs/server_default.yaml`:

```yaml
embedding:
  models:
    specter2:
      enabled: false
```

### BERTopic grid search is too slow

Reduce the grid in `configs/server_default.yaml`:

```yaml
bertopic:
  grid:
    seeds: [42]
    umap_n_neighbors: [15]
    umap_n_components: [10]
    hdbscan_min_cluster_size: [30, 60]
    hdbscan_min_samples: [10]
```

### c-TF-IDF vectorizer error

If BERTopic fails with a vectorizer `max_df` / `min_df` error, reduce `min_df`:

```yaml
bertopic:
  vectorizer:
    min_df: 1
    max_df: 0.80
```

---

ive-paper validation.
