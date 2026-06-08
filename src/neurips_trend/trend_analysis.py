from __future__ import annotations

import argparse
import json
import logging
from pathlib import Path
from urllib.parse import quote_plus

import numpy as np
import pandas as pd

from .table_io import read_table, write_table
from scipy import stats
from statsmodels.regression.linear_model import OLS, WLS
from statsmodels.tools.tools import add_constant

from .config import ensure_dir, load_config, setup_logging

LOGGER = logging.getLogger(__name__)


def topic_label_from_info(topic_id: int, topic_info: pd.DataFrame | None) -> str:
    if topic_info is None:
        return str(topic_id)
    if "Topic" in topic_info.columns:
        row = topic_info[topic_info["Topic"].astype(str) == str(topic_id)]
    elif "topic_id" in topic_info.columns:
        row = topic_info[topic_info["topic_id"].astype(str) == str(topic_id)]
    else:
        row = pd.DataFrame()
    if row.empty:
        return str(topic_id)
    for col in ["Name", "topic_label", "TopWords"]:
        if col in row.columns and pd.notna(row.iloc[0][col]):
            return str(row.iloc[0][col])
    # BERTopic's topic info often has Representation as a stringified list.
    if "Representation" in row.columns and pd.notna(row.iloc[0]["Representation"]):
        return str(row.iloc[0]["Representation"])
    return str(topic_id)


def load_topic_info(path: str | Path | None) -> pd.DataFrame | None:
    if path is None:
        return None
    p = Path(path)
    if p.is_dir():
        p = p / "topic_info.csv"
    if not p.exists():
        return None
    return pd.read_csv(p)


def safe_corr(x: pd.Series, y: pd.Series, method: str) -> tuple[float, float, int]:
    mask = x.notna() & y.notna()
    x2 = x[mask]
    y2 = y[mask]
    if len(x2) < 3:
        return np.nan, np.nan, int(len(x2))
    if method == "pearson":
        r, p = stats.pearsonr(x2, y2)
    elif method == "spearman":
        r, p = stats.spearmanr(x2, y2)
    else:
        raise ValueError(method)
    return float(r), float(p), int(len(x2))


def bh_fdr(p_values: pd.Series) -> pd.Series:
    p = p_values.astype(float).to_numpy()
    n = len(p)
    order = np.argsort(p)
    ranks = np.empty(n, dtype=float)
    ranks[order] = np.arange(1, n + 1)
    q = p * n / ranks
    # enforce monotonicity
    q_ordered = q[order]
    q_ordered = np.minimum.accumulate(q_ordered[::-1])[::-1]
    q_adj = np.empty(n, dtype=float)
    q_adj[order] = np.minimum(q_ordered, 1.0)
    return pd.Series(q_adj, index=p_values.index)


def compute_topic_stats(papers: pd.DataFrame, topics: pd.DataFrame, topic_info: pd.DataFrame | None, cfg: dict) -> pd.DataFrame:
    trend_cfg = cfg.get("trend", {})
    base_papers = papers.drop(columns=[c for c in ["topic_id", "topic_prob"] if c in papers.columns])
    topic_cols = ["paper_id", "topic_id"] + (["topic_prob"] if "topic_prob" in topics.columns else [])
    df = base_papers.merge(topics[topic_cols], on="paper_id", how="inner")
    if trend_cfg.get("accepted_only", True):
        df = df[df["is_accepted"]].copy()
    df["topic_id"] = df["topic_id"].astype(int)
    exclude = set(int(x) for x in trend_cfg.get("exclude_topics", [-1]))
    if trend_cfg.get("exclude_topic_zero", False):
        exclude.add(0)
    if exclude:
        df = df[~df["topic_id"].isin(exclude)].copy()

    years = sorted([int(y) for y in cfg.get("project", {}).get("years", sorted(df["year"].dropna().unique()))])
    totals = df.groupby("year").size().to_dict()
    rows = []
    for topic_id, g in df.groupby("topic_id"):
        year_counts = g.groupby("year").size().to_dict()
        year_shares = {y: 100.0 * year_counts.get(y, 0) / totals.get(y, np.nan) for y in years}
        if len([v for v in year_counts.values() if v > 0]) < int(trend_cfg.get("min_years_present", 2)):
            continue
        if len(g) < int(trend_cfg.get("min_topic_size", 20)):
            continue
        x = np.asarray(years, dtype=float)
        y = np.asarray([year_shares[yr] for yr in years], dtype=float)
        slope = float(np.polyfit(x - x.min(), y, 1)[0]) if len(years) >= 2 else np.nan
        # descriptive p-value only; not used as main result.
        if len(years) >= 3:
            lr = stats.linregress(x, y)
            slope_p = float(lr.pvalue)
        else:
            slope_p = np.nan
        first, last = years[0], years[-1]
        accepted_count = len(g)
        prestige = float(g["decision_tier"].isin(["oral", "spotlight"]).mean()) if "decision_tier" in g.columns else np.nan
        row = {
            "topic_id": int(topic_id),
            "topic_label": topic_label_from_info(int(topic_id), topic_info) if "topic_label" not in g.columns else str(g["topic_label"].dropna().iloc[0]) if g["topic_label"].notna().any() else topic_label_from_info(int(topic_id), topic_info),
            "topic_size": int(accepted_count),
            "log_topic_size": float(np.log1p(accepted_count)),
            "avg_rating": float(pd.to_numeric(g.get("avg_rating", pd.Series(dtype=float)), errors="coerce").mean()),
            "avg_rating_z_year": float(pd.to_numeric(g.get("avg_rating_z_year", pd.Series(dtype=float)), errors="coerce").mean()),
            "avg_confidence": float(pd.to_numeric(g.get("avg_confidence", pd.Series(dtype=float)), errors="coerce").mean()),
            "prestige_concentration": prestige,
            "slope_share_pp_per_year": slope,
            "slope_p_descriptive": slope_p,
            "initial_share_2023_pp": float(year_shares.get(first, np.nan)),
            "final_share_2025_pp": float(year_shares.get(last, np.nan)),
            "delta_share_pp": float(year_shares.get(last, np.nan) - year_shares.get(first, np.nan)),
        }
        for yr in years:
            row[f"count_{yr}"] = int(year_counts.get(yr, 0))
            row[f"share_{yr}_pp"] = float(year_shares.get(yr, np.nan))
        rows.append(row)
    stats_df = pd.DataFrame(rows).sort_values("delta_share_pp", ascending=False)
    if "slope_p_descriptive" in stats_df and stats_df["slope_p_descriptive"].notna().any():
        mask = stats_df["slope_p_descriptive"].notna()
        stats_df.loc[mask, "slope_q_bh_descriptive"] = bh_fdr(stats_df.loc[mask, "slope_p_descriptive"])
    return stats_df


def run_correlations(topic_stats: pd.DataFrame, cfg: dict) -> pd.DataFrame:
    candidates = [cfg.get("trend", {}).get("main_rating_column", "avg_rating_z_year"), "avg_rating"]
    rows = []
    for col in dict.fromkeys(candidates):
        if col not in topic_stats.columns:
            continue
        for method in ["pearson", "spearman"]:
            r, p, n = safe_corr(topic_stats["delta_share_pp"], topic_stats[col], method)
            rows.append({"x": "delta_share_pp", "y": col, "method": method, "n_topics": n, "statistic": r, "p_value": p})
    return pd.DataFrame(rows)


def run_regression(topic_stats: pd.DataFrame, cfg: dict, rating_col: str | None = None, weighted: bool = False) -> dict:
    reg_cfg = cfg.get("regression", {})
    y_col = reg_cfg.get("dependent", "delta_share_pp")
    predictors = list(reg_cfg.get("predictors", ["avg_rating_z_year", "log_topic_size", "initial_share_2023_pp", "prestige_concentration"]))
    if rating_col is not None:
        predictors = [rating_col if p in {"avg_rating_z_year", "avg_rating"} else p for p in predictors]
    predictors = list(dict.fromkeys([p for p in predictors if p in topic_stats.columns]))
    cols = [y_col] + predictors
    data = topic_stats[cols + (["topic_size"] if "topic_size" in topic_stats.columns else [])].dropna().copy()
    if len(data) <= len(predictors) + 1:
        return {"rating_col": rating_col or predictors[0], "weighted": weighted, "n": int(len(data)), "error": "not enough observations"}
    y = data[y_col].astype(float)
    X = add_constant(data[predictors].astype(float), has_constant="add")
    if weighted and "topic_size" in data.columns:
        model = WLS(y, X, weights=data["topic_size"].astype(float)).fit(cov_type=reg_cfg.get("robust_cov", "HC3"))
    else:
        model = OLS(y, X).fit(cov_type=reg_cfg.get("robust_cov", "HC3"))
    rows = []
    for param in model.params.index:
        rows.append(
            {
                "spec": f"{y_col} ~ {' + '.join(predictors)}",
                "rating_col": rating_col or predictors[0],
                "weighted": weighted,
                "n": int(model.nobs),
                "r2": float(model.rsquared),
                "term": param,
                "coef": float(model.params[param]),
                "std_err_robust": float(model.bse[param]),
                "p_value_robust": float(model.pvalues[param]),
                "ci_low_95": float(model.conf_int().loc[param, 0]),
                "ci_high_95": float(model.conf_int().loc[param, 1]),
            }
        )
    return {"rows": rows}


def bootstrap_rating_coef(topic_stats: pd.DataFrame, cfg: dict, rating_col: str) -> dict:
    reg_cfg = cfg.get("regression", {})
    rng = np.random.default_rng(int(reg_cfg.get("bootstrap_seed", 123)))
    B = int(reg_cfg.get("bootstrap_iters", 2000))
    predictors = [rating_col, "log_topic_size", "initial_share_2023_pp", "prestige_concentration"]
    predictors = [p for p in predictors if p in topic_stats.columns]
    data = topic_stats[["delta_share_pp"] + predictors].dropna().copy()
    if len(data) <= len(predictors) + 1:
        return {"rating_col": rating_col, "n": int(len(data)), "error": "not enough observations"}
    coefs = []
    for _ in range(B):
        sample = data.iloc[rng.integers(0, len(data), len(data))]
        try:
            y = sample["delta_share_pp"].astype(float)
            X = add_constant(sample[predictors].astype(float), has_constant="add")
            model = OLS(y, X).fit()
            coefs.append(float(model.params[rating_col]))
        except Exception:
            continue
    arr = np.asarray(coefs)
    return {
        "rating_col": rating_col,
        "n": int(len(data)),
        "bootstrap_iters": int(len(arr)),
        "coef_mean": float(np.mean(arr)) if len(arr) else np.nan,
        "ci_low_95": float(np.quantile(arr, 0.025)) if len(arr) else np.nan,
        "ci_high_95": float(np.quantile(arr, 0.975)) if len(arr) else np.nan,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Compute topic trends, correlations, and regressions.")
    parser.add_argument("--papers", required=True, help="papers.parquet or accepted_papers.parquet")
    parser.add_argument("--topics", required=True, help="topics.csv from BERTopic/LDA/existing CSV")
    parser.add_argument("--topic-info", default=None, help="topic_info.csv or model dir")
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "trend_analysis.log")
    cfg = load_config(args.config)
    papers = read_table(args.papers)
    topics = pd.read_csv(args.topics)
    if "topic_id" not in topics.columns and "Topic" in topics.columns:
        topics = topics.rename(columns={"Topic": "topic_id"})
    topic_info = load_topic_info(args.topic_info)

    topic_stats = compute_topic_stats(papers, topics, topic_info, cfg)
    topic_stats.to_csv(out_dir / "topic_statistics.csv", index=False)

    corr = run_correlations(topic_stats, cfg)
    corr.to_csv(out_dir / "correlation_results.csv", index=False)

    reg_rows = []
    for rating_col in ["avg_rating_z_year", "avg_rating"]:
        if rating_col in topic_stats.columns:
            for weighted in [False, True]:
                result = run_regression(topic_stats, cfg, rating_col=rating_col, weighted=weighted)
                if "rows" in result:
                    reg_rows.extend(result["rows"])
                else:
                    reg_rows.append(result)
    pd.DataFrame(reg_rows).to_csv(out_dir / "regression_results.csv", index=False)

    boot_rows = []
    for rating_col in ["avg_rating_z_year", "avg_rating"]:
        if rating_col in topic_stats.columns:
            boot_rows.append(bootstrap_rating_coef(topic_stats, cfg, rating_col))
    pd.DataFrame(boot_rows).to_csv(out_dir / "bootstrap_rating_coefficients.csv", index=False)

    LOGGER.info("Saved trend analysis tables to %s", out_dir)


if __name__ == "__main__":
    main()
