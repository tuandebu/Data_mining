#!/usr/bin/env python3
"""
Build GitHub Pages demo JSON artifacts from server CSV outputs.

Typical input files from server:
  topic_statistics.csv
  correlation_results.csv
  regression_results.csv
Optional but recommended:
  representative_papers.csv
  topic_year_to_year_decomposition_all.csv
  transition_level_data.csv
  transition_level_results.csv
  trajectory_type_counts.csv

Usage from repo root:
  python scripts/build_demo_from_server_csv.py \
    --csv-dir D:/NeurIPS_Trend_Project/server_csv \
    --docs-dir D:/NeurIPS_Trend_Project/Data_mining/docs

This script updates:
  docs/data/*.json
  docs/downloads/*.csv
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

KNOWN_LABELS = {
    "8_reasoning_llms_language_to": "LLM reasoning",
    "1_3d_and_scene_to": "3D vision / scene generation",
    "14_preference_reward_alignment_human": "preference learning / alignment",
    "23_safety_llms_harmful_attacks": "LLM safety / jailbreaks",
    "22_attention_memory_kv_cache": "efficient attention / KV cache",
    "21_video_temporal_understanding_and": "video temporal understanding",
    "37_lora_finetuning_lowrank_adaptation": "LoRA / low-rank finetuning",
    "0_policy_rl_reinforcement_the": "RL / policy learning",
    "4_graph_graphs_gnns_node": "graph neural networks",
    "5_regret_the_bandits_bandit": "bandits / regret minimization",
    "29_matrix_the_of_is": "matrix algorithms",
    "12_adversarial_attacks_robustness_attack": "adversarial robustness",
    "27_bayesian_posterior_inference_of": "Bayesian inference",
    "10_privacy_private_dp_differentially": "differential privacy",
    "24_the_of_is_we": "statistical learning theory",
    "25_games_game_equilibrium_equilib": "game theory / equilibria",
}


def clean_label(raw: Any) -> str:
    s = str(raw or "").strip()
    if s in KNOWN_LABELS:
        return KNOWN_LABELS[s]
    # Drop leading numeric topic id: 12_foo_bar -> foo_bar
    parts = s.split("_", 1)
    if len(parts) == 2 and parts[0].isdigit():
        s = parts[1]
    s = s.replace("_", " ").strip()
    # Light cleanup for common fragments
    replacements = {
        "llms": "LLMs",
        "gnns": "GNNs",
        "lora": "LoRA",
        "rl": "RL",
        "kv": "KV",
        "dp": "DP",
    }
    words = []
    for w in s.split():
        words.append(replacements.get(w.lower(), w))
    label = " ".join(words)
    return label[:1].upper() + label[1:] if label else "Unnamed topic"


def keywords_from_label(raw: Any, limit: int = 6) -> list[str]:
    s = str(raw or "")
    if "_" in s:
        parts = s.split("_")
        if parts and parts[0].isdigit():
            parts = parts[1:]
    else:
        parts = s.split()
    stop = {"the", "of", "to", "and", "is", "in", "for", "with", "a", "an"}
    kws = []
    for p in parts:
        p = p.strip().lower()
        if not p or p in stop or p.isdigit():
            continue
        if p not in kws:
            kws.append(p)
    return kws[:limit]


def finite_or_none(x: Any) -> Any:
    try:
        if pd.isna(x):
            return None
    except Exception:
        pass
    if isinstance(x, (float, np.floating)):
        if not math.isfinite(float(x)):
            return None
        return float(x)
    if isinstance(x, (int, np.integer)):
        return int(x)
    return x


def clean_json(obj: Any) -> Any:
    if isinstance(obj, dict):
        return {str(k): clean_json(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [clean_json(v) for v in obj]
    return finite_or_none(obj)


def write_json(path: Path, obj: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(clean_json(obj), indent=2, ensure_ascii=False), encoding="utf-8")


def read_csv_if_exists(path: Path) -> pd.DataFrame | None:
    return pd.read_csv(path) if path.exists() else None


def find_tables_dir(csv_dir: Path) -> Path:
    candidates = [csv_dir, csv_dir / "tables", csv_dir / "artifacts_full" / "tables", csv_dir / "report_ready_outputs" / "tables"]
    for c in candidates:
        if (c / "topic_statistics.csv").exists():
            return c
    raise FileNotFoundError(f"Cannot find topic_statistics.csv under {csv_dir}")


def trajectory(d23: float, d24: float) -> str:
    eps = 1e-9
    if d23 > eps and d24 > eps:
        return "consistent growth"
    if d23 < -eps and d24 < -eps:
        return "consistent decline"
    if d23 > eps and abs(d24) <= 0.20:
        return "early growth / plateau"
    if d23 > eps and d24 < -eps:
        return "spike then reversal"
    if d23 < -eps and d24 > eps:
        return "rebound"
    if abs(d23) <= 0.20 and d24 > eps:
        return "late growth"
    if abs(d23) <= 0.20 and d24 < -eps:
        return "late decline"
    return "stable"


def build_topic_frame(tables: Path) -> pd.DataFrame:
    topic_stats = pd.read_csv(tables / "topic_statistics.csv")
    decompo = read_csv_if_exists(tables / "topic_year_to_year_decomposition_all.csv")

    if decompo is not None:
        df = decompo.copy()
        # normalize column names expected below
        rename = {
            "delta_net_pp": "delta_23_25_pct_points",
            "delta_share_pp": "delta_share_pp",
            "delta_23_24_pp": "delta_23_24_pct_points",
            "delta_24_25_pp": "delta_24_25_pct_points",
            "share_2023_pp": "share_2023_pp",
            "share_2024_pp": "share_2024_pp",
            "share_2025_pp": "share_2025_pp",
            "topic_size": "topic_size",
        }
        df = df.rename(columns=rename)
        if "clean_topic_label" not in df.columns:
            df["clean_topic_label"] = df["topic_label"].map(clean_label)
    else:
        df = topic_stats.copy()
        df["clean_topic_label"] = df["topic_label"].map(clean_label)
        df["delta_23_24_pct_points"] = df["share_2024_pp"] - df["share_2023_pp"]
        df["delta_24_25_pct_points"] = df["share_2025_pp"] - df["share_2024_pp"]
        df["delta_23_25_pct_points"] = df.get("delta_share_pp", df["share_2025_pp"] - df["share_2023_pp"])
        df["trajectory_type"] = [trajectory(a, b) for a, b in zip(df["delta_23_24_pct_points"], df["delta_24_25_pct_points"])]

    # Fill required columns from topic_statistics if missing
    stat_by_id = topic_stats.set_index("topic_id")
    for col in ["count_2023", "count_2024", "count_2025", "share_2023_pp", "share_2024_pp", "share_2025_pp", "avg_rating", "avg_rating_z_year", "prestige_concentration"]:
        if col not in df.columns and col in topic_stats.columns:
            df[col] = df["topic_id"].map(stat_by_id[col])
    if "topic_size" not in df.columns and "topic_size" in topic_stats.columns:
        df["topic_size"] = df["topic_id"].map(stat_by_id["topic_size"])
    if "trajectory_type" not in df.columns:
        df["trajectory_type"] = [trajectory(a, b) for a, b in zip(df["delta_23_24_pct_points"], df["delta_24_25_pct_points"])]
    return df


def topic_interpretation(row: pd.Series) -> str:
    label = row["clean_topic_label"]
    dnet = float(row["delta_23_25_pct_points"])
    tr = row.get("trajectory_type", trajectory(row["delta_23_24_pct_points"], row["delta_24_25_pct_points"]))
    if dnet > 0:
        return f"{label} increased its relative footprint in accepted NeurIPS papers. Trajectory type: {tr}."
    if dnet < 0:
        return f"{label} declined in relative accepted-paper share. This is not an acceptance-rate or field-collapse claim. Trajectory type: {tr}."
    return f"{label} is approximately stable in relative accepted-paper share."


def build_topics_json(topic_df: pd.DataFrame) -> dict[str, Any]:
    topics = []
    for _, r in topic_df.sort_values("delta_23_25_pct_points", ascending=False).iterrows():
        raw_label = r.get("topic_label", r.get("clean_topic_label", ""))
        label = r.get("clean_topic_label") or clean_label(raw_label)
        topic = {
            "topic_id": int(r["topic_id"]),
            "label": label,
            "raw_label": raw_label,
            "size_total": int(r.get("topic_size", r.get("size_total", 0)) or 0),
            "keywords": keywords_from_label(raw_label),
            "years": {
                "2023": {"accepted_count": int(r.get("count_2023", 0) or 0), "accepted_share_pct": float(r.get("share_2023_pp", 0) or 0)},
                "2024": {"accepted_count": int(r.get("count_2024", 0) or 0), "accepted_share_pct": float(r.get("share_2024_pp", 0) or 0)},
                "2025": {"accepted_count": int(r.get("count_2025", 0) or 0), "accepted_share_pct": float(r.get("share_2025_pp", 0) or 0)},
            },
            "delta_23_24_pct_points": float(r.get("delta_23_24_pct_points", 0) or 0),
            "delta_24_25_pct_points": float(r.get("delta_24_25_pct_points", 0) or 0),
            "delta_23_25_pct_points": float(r.get("delta_23_25_pct_points", r.get("delta_share_pp", 0)) or 0),
            "z_rating": float(r.get("avg_rating_z_year", 0) or 0),
            "avg_rating": float(r.get("avg_rating", 0) or 0),
            "prestige_concentration": finite_or_none(r.get("prestige_concentration", None)),
            "trajectory_type": str(r.get("trajectory_type", "unspecified")),
        }
        topic["interpretation"] = topic_interpretation(pd.Series({**r.to_dict(), "clean_topic_label": label}))
        topics.append(topic)
    return {"topics": topics}


def fit_line(points: list[dict[str, Any]], x_key: str = "x", y_key: str = "y") -> dict[str, Any]:
    xs = np.array([float(p[x_key]) for p in points], dtype=float)
    ys = np.array([float(p[y_key]) for p in points], dtype=float)
    ok = np.isfinite(xs) & np.isfinite(ys)
    xs, ys = xs[ok], ys[ok]
    if len(xs) < 2:
        return {"x_grid": [], "y_hat": []}
    coef = np.polyfit(xs, ys, 1)
    x_grid = np.linspace(xs.min(), xs.max(), 50)
    y_hat = coef[0] * x_grid + coef[1]
    return {"x_grid": x_grid.tolist(), "y_hat": y_hat.tolist(), "slope": float(coef[0]), "intercept": float(coef[1])}


def get_corr(corr: pd.DataFrame | None, method: str, y: str = "avg_rating_z_year") -> tuple[Any, Any]:
    if corr is None:
        return None, None
    m = corr[(corr["method"].str.lower() == method.lower()) & (corr["y"] == y)]
    if m.empty:
        return None, None
    row = m.iloc[0]
    return finite_or_none(row.get("statistic")), finite_or_none(row.get("p_value"))


def get_reg_coef(reg: pd.DataFrame | None, term: str = "avg_rating_z_year", weighted: bool = False) -> tuple[Any, Any]:
    if reg is None:
        return None, None
    m = reg[(reg["term"] == term)]
    if "weighted" in m.columns:
        m = m[m["weighted"].astype(str).str.lower().isin([str(weighted).lower()])]
    if m.empty:
        return None, None
    row = m.iloc[0]
    return finite_or_none(row.get("coef")), finite_or_none(row.get("p_value_robust"))


def build_evidence_json(tables: Path, topic_df: pd.DataFrame) -> dict[str, Any]:
    corr = read_csv_if_exists(tables / "correlation_results.csv")
    reg = read_csv_if_exists(tables / "regression_results.csv")
    trans_data = read_csv_if_exists(tables / "transition_level_data.csv")
    trans_results = read_csv_if_exists(tables / "transition_level_results.csv")

    endpoint_points = []
    for _, r in topic_df.iterrows():
        endpoint_points.append({
            "topic_id": int(r["topic_id"]),
            "label": r.get("clean_topic_label") or clean_label(r.get("topic_label")),
            "x": float(r.get("delta_23_25_pct_points", r.get("delta_share_pp", 0)) or 0),
            "y": float(r.get("avg_rating_z_year", 0) or 0),
            "size": int(r.get("topic_size", 0) or 0),
        })
    pearson, pearson_p = get_corr(corr, "pearson")
    spearman, spearman_p = get_corr(corr, "spearman")
    beta, beta_p = get_reg_coef(reg)
    wbeta, wbeta_p = get_reg_coef(reg, weighted=True)

    if trans_data is not None:
        transition_points = []
        for _, r in trans_data.iterrows():
            transition_points.append({
                "topic_id": int(r["topic_id"]),
                "label": r.get("clean_topic_label") or clean_label(r.get("topic_label", "")),
                "transition": str(r["transition"]).replace("_to_", "→"),
                "x": float(r.get("growth_pp", 0) or 0),
                "y": float(r.get("avg_rating_z_year", 0) or 0),
                "size": int(r.get("topic_size", 0) or 0),
            })
    else:
        transition_points = []
        for _, r in topic_df.iterrows():
            label = r.get("clean_topic_label") or clean_label(r.get("topic_label"))
            for trans, delta_col in [("2023→2024", "delta_23_24_pct_points"), ("2024→2025", "delta_24_25_pct_points")]:
                transition_points.append({
                    "topic_id": int(r["topic_id"]),
                    "label": label,
                    "transition": trans,
                    "x": float(r.get(delta_col, 0) or 0),
                    "y": float(r.get("avg_rating_z_year", 0) or 0),
                    "size": int(r.get("topic_size", 0) or 0),
                })

    tstats: dict[str, Any] = {}
    if trans_results is not None:
        def pick(name: str, rating_col: str = "avg_rating_z_year"):
            m = trans_results[(trans_results["analysis"] == name) & (trans_results["rating_col"] == rating_col)]
            if m.empty:
                return None, None
            row = m.iloc[0]
            return finite_or_none(row.get("stat_or_coef")), finite_or_none(row.get("p_value"))
        tstats["pearson_r"], tstats["pearson_p"] = pick("transition_pearson")
        tstats["spearman_rho"], tstats["spearman_p"] = pick("transition_spearman")
        tstats["regression_coef"], tstats["regression_p"] = pick("transition_ols")
        # names vary; fallback to controlled/weighted rows
        if tstats.get("regression_coef") is None:
            for name in ["transition_regression", "transition_controlled_ols", "transition_ols_hc3"]:
                tstats["regression_coef"], tstats["regression_p"] = pick(name)
                if tstats["regression_coef"] is not None:
                    break
        for name in ["transition_weighted_ols", "weighted_transition_ols", "transition_weighted_regression"]:
            tstats["weighted_regression_coef"], tstats["weighted_regression_p"] = pick(name)
            if tstats["weighted_regression_coef"] is not None:
                break

    return {
        "endpoint": {
            "points": endpoint_points,
            "fit": fit_line(endpoint_points),
            "stats": {
                "pearson_r": pearson,
                "pearson_p": pearson_p,
                "spearman_rho": spearman,
                "spearman_p": spearman_p,
                "regression_coef": beta,
                "regression_p": beta_p,
                "weighted_regression_coef": wbeta,
                "weighted_regression_p": wbeta_p,
            },
        },
        "transition": {
            "points": transition_points,
            "fit": fit_line(transition_points),
            "stats": tstats,
        }
    }


def build_representatives(tables: Path, topic_df: pd.DataFrame) -> dict[str, Any]:
    reps = read_csv_if_exists(tables / "representative_papers.csv")
    output = []
    label_by_id = dict(zip(topic_df["topic_id"], topic_df.get("clean_topic_label", topic_df["topic_label"].map(clean_label))))
    if reps is None:
        for tid, label in label_by_id.items():
            output.append({"topic_id": int(tid), "label": label, "papers": []})
        return {"representatives": output}
    for tid, group in reps.sort_values(["topic_id", "rank"]).groupby("topic_id"):
        papers = []
        for _, r in group.head(5).iterrows():
            papers.append({
                "rank": int(r.get("rank", len(papers) + 1) or len(papers) + 1),
                "title": str(r.get("title", "Untitled paper")),
                "year": int(r.get("year", 0) or 0),
                "openreview_url": str(r.get("openreview_url", "")),
                "semantic_scholar_search_url": str(r.get("semantic_scholar_search_url", "")),
                "decision_tier": str(r.get("decision", r.get("decision_tier", ""))),
                "avg_rating": finite_or_none(r.get("avg_rating")),
                "avg_rating_z": finite_or_none(r.get("avg_rating_z_year")),
                "topic_prob": finite_or_none(r.get("topic_prob")),
            })
        output.append({"topic_id": int(tid), "label": label_by_id.get(tid, clean_label(group.iloc[0].get("topic_label", ""))), "papers": papers})
    return {"representatives": output}


def build_summary(topic_df: pd.DataFrame, evidence: dict[str, Any]) -> dict[str, Any]:
    accepted_by_year = {
        "2023": int(topic_df["count_2023"].sum()) if "count_2023" in topic_df else 3218,
        "2024": int(topic_df["count_2024"].sum()) if "count_2024" in topic_df else 4035,
        "2025": int(topic_df["count_2025"].sum()) if "count_2025" in topic_df else 5286,
    }
    return {
        "project_title": "NeurIPS Review-Guided Trend Mining",
        "subtitle": "Accepted-corpus topic trends, review signals, and representative-paper validation for NeurIPS 2023–2025",
        "public_records_total": 13171,
        "accepted_papers_total": int(sum(accepted_by_year.values())),
        "accepted_by_year": accepted_by_year,
        "public_rejected_total": 632,
        "topics_total": int(topic_df.shape[0]),
        "repo_url": "https://github.com/tuandebu/Data_mining",
        "hf_dataset_url": "https://huggingface.co/datasets/tuandebu/data_mining/tree/main",
        "report_pdf_url": "./report/Trend.pdf",
        "validity_banner_title": "Accepted-corpus analysis only",
        "validity_banner_text": "Public rejected submissions on OpenReview are incomplete. The demo reports accepted-paper share and review–trend association, not topic-level acceptance rates.",
        "headline_finding": evidence["endpoint"].get("stats", {}),
        "downloads": {
            "topic_statistics_csv": "./downloads/topic_statistics.csv",
            "representatives_csv": "./downloads/representative_papers.csv",
            "correlation_csv": "./downloads/correlation_results.csv",
            "regression_csv": "./downloads/regression_results.csv",
            "evidence_json": "./data/evidence.json",
        }
    }


def build_model_diagnostics() -> dict[str, Any]:
    return {
        "models": [
            {"model": "MiniLM selected, pre-reduction", "topics": 56, "outlier_rate": 0.345, "largest": 0.067, "diversity": 0.945, "c_npmi": 0.144, "c_v": 0.740},
            {"model": "Selected BERTopic + reduction", "topics": 56, "outlier_rate": 0.000, "largest": 0.082, "diversity": 0.518, "c_npmi": 0.177, "c_v": 0.733},
            {"model": "LDA TF-IDF, K=30", "topics": 30, "outlier_rate": 0.000, "largest": 0.062, "diversity": 0.763, "c_npmi": 0.042, "c_v": 0.526},
        ],
        "stability": [
            {"comparison": "MiniLM–MiniLM", "nmi": 0.733, "ari": 0.533},
            {"comparison": "SPECTER2–SPECTER2", "nmi": 0.727, "ari": 0.542},
            {"comparison": "MiniLM–SPECTER2", "nmi": 0.497, "ari": 0.220},
            {"comparison": "LDA–MiniLM", "nmi": 0.340, "ari": 0.064},
            {"comparison": "LDA–SPECTER2", "nmi": 0.331, "ari": 0.052},
        ]
    }


def copy_downloads(tables: Path, downloads: Path) -> None:
    downloads.mkdir(parents=True, exist_ok=True)
    for p in tables.glob("*.csv"):
        shutil.copy2(p, downloads / p.name)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--csv-dir", required=True, help="Folder containing server CSV files or artifacts_full/tables")
    parser.add_argument("--docs-dir", required=True, help="Path to repo docs folder")
    args = parser.parse_args()

    tables = find_tables_dir(Path(args.csv_dir))
    docs = Path(args.docs_dir)
    data_dir = docs / "data"
    downloads_dir = docs / "downloads"

    topic_df = build_topic_frame(tables)
    topics_json = build_topics_json(topic_df)
    reps_json = build_representatives(tables, topic_df)
    evidence_json = build_evidence_json(tables, topic_df)
    summary_json = build_summary(topic_df, evidence_json)

    # trajectory counts from file or compute
    tc = read_csv_if_exists(tables / "trajectory_type_counts.csv")
    if tc is None:
        tc = topic_df["trajectory_type"].value_counts().reset_index()
        tc.columns = ["trajectory_type", "n_topics"]
    trajectory_json = {"trajectory_counts": tc.to_dict(orient="records")}

    write_json(data_dir / "topics.json", topics_json)
    write_json(data_dir / "representatives.json", reps_json)
    write_json(data_dir / "evidence.json", evidence_json)
    write_json(data_dir / "summary.json", summary_json)
    write_json(data_dir / "model_diagnostics.json", build_model_diagnostics())
    write_json(data_dir / "trajectory_counts.json", trajectory_json)

    copy_downloads(tables, downloads_dir)
    print(f"Updated demo data in: {data_dir}")
    print(f"Copied CSV downloads to: {downloads_dir}")
    print("Open docs/index.html through a local server or GitHub Pages to test.")


if __name__ == "__main__":
    main()
