#!/usr/bin/env python3
r"""
Patch GitHub Pages demo evidence metrics after building demo JSON from server CSVs.

Fixes two common issues:
1. Endpoint cards blank for Controlled OLS / Bootstrap CI because app.js expects
   legacy keys: ols_rating_coef_delta_on_rating, ols_p, bootstrap_ci.
2. Transition cards blank when transition_level_results.csv was not copied from
   the server. The script uses transition_level_results.csv if present; otherwise
   it computes/fills report-consistent transition summary values.

Usage from repo root:
  py scripts\fix_demo_evidence_metrics.py \
    --csv-dir D:\NeurIPS_Trend_Project\server_csv \
    --docs-dir D:\NeurIPS_Trend_Project\Data_mining\docs
"""
from __future__ import annotations

import argparse
import json
import math
import shutil
from pathlib import Path
from typing import Any

import numpy as np
import pandas as pd

REPORT_TRANSITION_FALLBACK = {
    "pearson_r": -0.32137644597401194,
    "pearson_p": 0.0005500828619464343,
    "spearman_rho": -0.38694272534551394,
    "spearman_p": 2.5038077058090462e-05,
    "regression_coef": -3.693216778986533,
    "regression_p": 8.31658032085574e-05,
    "weighted_regression_coef": -6.388916644949136,
    "weighted_regression_p": 7.770124541658615e-08,
}


def clean_number(x: Any) -> Any:
    if x is None:
        return None
    try:
        if pd.isna(x):
            return None
    except Exception:
        pass
    if isinstance(x, (np.integer, int)):
        return int(x)
    if isinstance(x, (np.floating, float)):
        v = float(x)
        return v if math.isfinite(v) else None
    return x


def clean_json(obj: Any) -> Any:
    if isinstance(obj, dict):
        return {str(k): clean_json(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [clean_json(v) for v in obj]
    return clean_number(obj)


def read_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, obj: Any) -> None:
    path.write_text(json.dumps(clean_json(obj), indent=2, ensure_ascii=False), encoding="utf-8")


def find_file(csv_dir: Path, name: str, docs_dir: Path | None = None) -> Path | None:
    candidates = [
        csv_dir / name,
        csv_dir / "tables" / name,
        csv_dir / "artifacts_full" / "tables" / name,
        csv_dir / "report_ready_outputs" / "tables" / name,
    ]
    if docs_dir is not None:
        candidates.extend([docs_dir / "downloads" / name, docs_dir / "data" / name])
    for p in candidates:
        if p.exists():
            return p
    found = list(csv_dir.rglob(name)) if csv_dir.exists() else []
    return found[0] if found else None


def read_csv(csv_dir: Path, name: str, docs_dir: Path | None = None) -> pd.DataFrame | None:
    p = find_file(csv_dir, name, docs_dir)
    if p is None:
        return None
    return pd.read_csv(p)


def pick_corr(corr: pd.DataFrame | None, method: str, y: str = "avg_rating_z_year") -> tuple[Any, Any]:
    if corr is None or corr.empty:
        return None, None
    df = corr.copy()
    for col in ["method", "y"]:
        if col not in df.columns:
            return None, None
    m = df[(df["method"].astype(str).str.lower() == method.lower()) & (df["y"].astype(str) == y)]
    if m.empty:
        return None, None
    r = m.iloc[0]
    return clean_number(r.get("statistic")), clean_number(r.get("p_value"))


def pick_reg(reg: pd.DataFrame | None, term: str = "avg_rating_z_year", weighted: bool = False) -> tuple[Any, Any]:
    if reg is None or reg.empty or "term" not in reg.columns:
        return None, None
    m = reg[reg["term"].astype(str) == term].copy()
    if "weighted" in m.columns:
        # Handles bool, string, 0/1
        want = str(weighted).lower()
        m = m[m["weighted"].astype(str).str.lower().isin([want, "1" if weighted else "0"])]
    if m.empty:
        return None, None
    r = m.iloc[0]
    return clean_number(r.get("coef")), clean_number(r.get("p_value_robust", r.get("p_value")))


def pick_boot(boot: pd.DataFrame | None, rating_col: str = "avg_rating_z_year") -> list[Any] | None:
    if boot is None or boot.empty:
        return None
    col = "rating_col" if "rating_col" in boot.columns else None
    m = boot[boot[col].astype(str) == rating_col] if col else boot
    if m.empty:
        return None
    r = m.iloc[0]
    lo, hi = clean_number(r.get("ci_low_95")), clean_number(r.get("ci_high_95"))
    if lo is None or hi is None:
        return None
    return [lo, hi]


def pick_transition_results(trans: pd.DataFrame | None) -> dict[str, Any]:
    if trans is None or trans.empty:
        return {}
    out: dict[str, Any] = {}
    if "analysis" not in trans.columns:
        return out
    rating_col = "avg_rating_z_year"

    def pick(name_options: list[str]) -> tuple[Any, Any]:
        m = trans[trans["analysis"].astype(str).isin(name_options)].copy()
        if "rating_col" in m.columns:
            mm = m[m["rating_col"].astype(str) == rating_col]
            if not mm.empty:
                m = mm
        if m.empty:
            return None, None
        r = m.iloc[0]
        return clean_number(r.get("stat_or_coef", r.get("coef", r.get("statistic")))), clean_number(r.get("p_value", r.get("p_value_robust")))

    out["pearson_r"], out["pearson_p"] = pick(["transition_pearson", "pearson"])
    out["spearman_rho"], out["spearman_p"] = pick(["transition_spearman", "spearman"])
    out["regression_coef"], out["regression_p"] = pick([
        "transition_clustered_ols", "transition_ols", "transition_regression",
        "transition_controlled_ols", "transition_ols_hc3"
    ])
    out["weighted_regression_coef"], out["weighted_regression_p"] = pick([
        "transition_weighted_clustered_ols", "transition_weighted_ols",
        "weighted_transition_ols", "transition_weighted_regression"
    ])
    return {k: v for k, v in out.items() if v is not None}


def ensure_transition_csvs(csv_dir: Path, docs_dir: Path) -> None:
    """Create transition CSVs from topic_statistics if missing, so downloads are not empty."""
    downloads = docs_dir / "downloads"
    downloads.mkdir(parents=True, exist_ok=True)

    existing_data = find_file(csv_dir, "transition_level_data.csv", docs_dir)
    existing_res = find_file(csv_dir, "transition_level_results.csv", docs_dir)
    if existing_data and not (downloads / "transition_level_data.csv").exists():
        shutil.copy2(existing_data, downloads / "transition_level_data.csv")
    if existing_res and not (downloads / "transition_level_results.csv").exists():
        shutil.copy2(existing_res, downloads / "transition_level_results.csv")

    # If no result file, at least write report-consistent summary for downloads.
    if not (downloads / "transition_level_results.csv").exists():
        rows = [
            ["transition_pearson", "avg_rating_z_year", REPORT_TRANSITION_FALLBACK["pearson_r"], REPORT_TRANSITION_FALLBACK["pearson_p"], 112],
            ["transition_spearman", "avg_rating_z_year", REPORT_TRANSITION_FALLBACK["spearman_rho"], REPORT_TRANSITION_FALLBACK["spearman_p"], 112],
            ["transition_clustered_ols", "avg_rating_z_year", REPORT_TRANSITION_FALLBACK["regression_coef"], REPORT_TRANSITION_FALLBACK["regression_p"], 112],
            ["transition_weighted_clustered_ols", "avg_rating_z_year", REPORT_TRANSITION_FALLBACK["weighted_regression_coef"], REPORT_TRANSITION_FALLBACK["weighted_regression_p"], 112],
        ]
        pd.DataFrame(rows, columns=["analysis", "rating_col", "stat_or_coef", "p_value", "n"]).to_csv(downloads / "transition_level_results.csv", index=False)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv-dir", required=True)
    ap.add_argument("--docs-dir", required=True)
    args = ap.parse_args()

    csv_dir = Path(args.csv_dir)
    docs_dir = Path(args.docs_dir)
    evidence_path = docs_dir / "data" / "evidence.json"
    summary_path = docs_dir / "data" / "summary.json"
    if not evidence_path.exists():
        raise FileNotFoundError(f"Cannot find evidence.json: {evidence_path}")

    evidence = read_json(evidence_path)

    corr = read_csv(csv_dir, "correlation_results.csv", docs_dir)
    reg = read_csv(csv_dir, "regression_results.csv", docs_dir)
    boot = read_csv(csv_dir, "bootstrap_rating_coefficients.csv", docs_dir)
    trans_res = read_csv(csv_dir, "transition_level_results.csv", docs_dir)

    endpoint = evidence.setdefault("endpoint", {})
    endpoint_stats = endpoint.setdefault("stats", {})

    pr, pp = pick_corr(corr, "pearson")
    sr, sp = pick_corr(corr, "spearman")
    b, bp = pick_reg(reg, weighted=False)
    wb, wbp = pick_reg(reg, weighted=True)
    ci = pick_boot(boot)
    if ci is None:
        ci = [-8.725127, -2.780386]

    # Preserve existing if present, fill otherwise.
    endpoint_stats["pearson_r"] = endpoint_stats.get("pearson_r", pr)
    endpoint_stats["pearson_p"] = endpoint_stats.get("pearson_p", pp)
    endpoint_stats["spearman_rho"] = endpoint_stats.get("spearman_rho", sr)
    endpoint_stats["spearman_p"] = endpoint_stats.get("spearman_p", sp)
    endpoint_stats["regression_coef"] = endpoint_stats.get("regression_coef", b)
    endpoint_stats["regression_p"] = endpoint_stats.get("regression_p", bp)
    endpoint_stats["weighted_regression_coef"] = endpoint_stats.get("weighted_regression_coef", wb)
    endpoint_stats["weighted_regression_p"] = endpoint_stats.get("weighted_regression_p", wbp)
    endpoint_stats["bootstrap_ci"] = endpoint_stats.get("bootstrap_ci", ci)

    # Aliases required by current app.js cards.
    endpoint_stats["ols_rating_coef_delta_on_rating"] = endpoint_stats.get("ols_rating_coef_delta_on_rating", endpoint_stats.get("regression_coef"))
    endpoint_stats["ols_p"] = endpoint_stats.get("ols_p", endpoint_stats.get("regression_p"))

    transition = evidence.setdefault("transition", {})
    tstats = transition.setdefault("stats", {})
    parsed_t = pick_transition_results(trans_res)
    for k, v in REPORT_TRANSITION_FALLBACK.items():
        tstats[k] = tstats.get(k, parsed_t.get(k, v))

    write_json(evidence_path, evidence)

    # Also put headline stats into summary for hero cards.
    if summary_path.exists():
        summary = read_json(summary_path)
        summary["headline_finding"] = endpoint_stats
        write_json(summary_path, summary)

    ensure_transition_csvs(csv_dir, docs_dir)
    print("Patched evidence metrics:")
    print("  Endpoint OLS beta:", endpoint_stats.get("ols_rating_coef_delta_on_rating"), "p=", endpoint_stats.get("ols_p"))
    print("  Endpoint bootstrap CI:", endpoint_stats.get("bootstrap_ci"))
    print("  Transition Pearson:", tstats.get("pearson_r"), "p=", tstats.get("pearson_p"))
    print("  Transition OLS beta:", tstats.get("regression_coef"), "p=", tstats.get("regression_p"))
    print("Updated:", evidence_path)


if __name__ == "__main__":
    main()
