from __future__ import annotations

import argparse
import json
import logging
import re
import zipfile
from pathlib import Path
from typing import Any, Iterable, Iterator

import numpy as np
import pandas as pd

from .table_io import read_table, write_table
from tqdm import tqdm

from .config import ensure_dir, load_config, setup_logging
from .text import clean_and_lemmatize

LOGGER = logging.getLogger(__name__)

RATING_RE = re.compile(r"^\s*([0-9]+(?:\.[0-9]+)?)")
YEAR_RE = re.compile(r"20(23|24|25)")


def parse_numeric(value: Any) -> float | None:
    if value is None or (isinstance(value, float) and np.isnan(value)):
        return None
    if isinstance(value, (int, float, np.integer, np.floating)):
        return float(value)
    m = RATING_RE.search(str(value))
    if not m:
        return None
    try:
        return float(m.group(1))
    except ValueError:
        return None


def parse_year_from_path(path: str) -> int | None:
    m = YEAR_RE.search(path)
    if not m:
        return None
    return int("20" + m.group(1))


def normalize_decision(decision: Any) -> tuple[str, str, bool]:
    raw = "" if decision is None else str(decision).strip()
    low = raw.lower()
    if "reject" in low:
        return raw, "reject", False
    if "withdraw" in low:
        return raw, "withdrawn", False
    if "desk" in low:
        return raw, "desk_reject", False
    if "oral" in low:
        return raw, "oral", True
    if "spotlight" in low:
        return raw, "spotlight", True
    if "poster" in low:
        return raw, "poster", True
    if "accept" in low:
        return raw, "accept", True
    return raw, "unknown", False


def value_from_content(value: Any) -> Any:
    """OpenReview sometimes stores {'value': x}; user crawl stores direct strings."""
    if isinstance(value, dict) and "value" in value:
        return value["value"]
    return value


def parse_review(review: dict[str, Any], paper_id: str, year: int | None) -> dict[str, Any]:
    get = lambda *names: next((review.get(n) for n in names if n in review), None)
    rating = parse_numeric(value_from_content(get("Rating", "rating", "recommendation")))
    confidence = parse_numeric(value_from_content(get("Confidence", "confidence")))
    return {
        "paper_id": paper_id,
        "year": year,
        "review_id": value_from_content(get("Review ID", "id", "review_id")),
        "rating": rating,
        "confidence": confidence,
        "summary": value_from_content(get("Summary", "summary")),
        "strengths": value_from_content(get("Strengths", "strengths")),
        "weaknesses": value_from_content(get("Weaknesses", "weaknesses")),
        "questions": value_from_content(get("Questions", "questions")),
        "soundness": value_from_content(get("Soundness", "soundness")),
        "presentation": value_from_content(get("Presentation", "presentation")),
        "contribution": value_from_content(get("Contribution", "contribution")),
    }


def iter_json_payloads(input_path: Path) -> Iterator[tuple[str, dict[str, Any]]]:
    if input_path.is_file() and input_path.suffix.lower() == ".zip":
        with zipfile.ZipFile(input_path) as z:
            json_names = [n for n in z.namelist() if n.endswith(".json") and "/json/" in n]
            for name in tqdm(json_names, desc="Reading JSON from zip"):
                try:
                    yield name, json.loads(z.read(name))
                except Exception as exc:
                    LOGGER.warning("Skipping invalid JSON %s: %s", name, exc)
    elif input_path.is_dir():
        json_files = [p for p in input_path.rglob("*.json") if "/json/" in str(p).replace("\\", "/")]
        for path in tqdm(json_files, desc="Reading JSON files"):
            try:
                yield str(path), json.loads(path.read_text(encoding="utf-8"))
            except Exception as exc:
                LOGGER.warning("Skipping invalid JSON %s: %s", path, exc)
    else:
        raise FileNotFoundError(f"Expected zip file or directory, got {input_path}")


def find_existing_topics_csv(input_path: Path) -> Path | None:
    if input_path.is_file() and input_path.suffix.lower() == ".csv":
        return input_path
    if input_path.is_dir():
        candidates = list(input_path.rglob("neurips_topics.csv"))
        return candidates[0] if candidates else None
    return None


def read_topics_csv_from_zip(input_path: Path) -> pd.DataFrame | None:
    if not (input_path.is_file() and input_path.suffix.lower() == ".zip"):
        return None
    with zipfile.ZipFile(input_path) as z:
        matches = [n for n in z.namelist() if n.endswith("neurips_topics.csv")]
        if not matches:
            return None
        LOGGER.info("Found existing topic CSV in zip: %s", matches[0])
        with z.open(matches[0]) as f:
            return pd.read_csv(f)


def normalize_existing_topics_df(df: pd.DataFrame, cfg: dict[str, Any]) -> tuple[pd.DataFrame, pd.DataFrame]:
    required = {"paper_id", "year", "title", "abstract", "decision"}
    missing = required - set(df.columns)
    if missing:
        raise ValueError(f"Existing topic CSV missing required columns: {sorted(missing)}")

    papers = df.copy()
    decisions = papers["decision"].map(normalize_decision)
    papers["decision_raw"] = [x[0] for x in decisions]
    papers["decision_type"] = [x[1] for x in decisions]
    papers["is_accepted"] = [x[2] for x in decisions]
    papers["decision_tier"] = papers["decision_type"].where(papers["is_accepted"], papers["decision_type"])
    papers["num_reviews"] = pd.to_numeric(papers.get("num_reviews", np.nan), errors="coerce")
    papers["avg_rating"] = pd.to_numeric(papers.get("avg_rating", np.nan), errors="coerce")
    if "avg_confidence" not in papers.columns:
        papers["avg_confidence"] = np.nan

    text_cfg = cfg.get("text", {})
    custom_stopwords = text_cfg.get("custom_stopwords", [])
    if "text_clean" not in papers.columns:
        source = papers.get("text_lemma", papers.get("text_combined", papers["title"].fillna("") + " " + papers["abstract"].fillna("")))
        papers["text_clean"] = [
            clean_and_lemmatize(x, use_spacy=text_cfg.get("use_spacy", False), spacy_model=text_cfg.get("spacy_model", "en_core_web_sm"), custom_stopwords=custom_stopwords)
            for x in tqdm(source, desc="Cleaning existing CSV text")
        ]
    if "text_combined" not in papers.columns:
        papers["text_combined"] = papers["title"].fillna("") + " " + papers["abstract"].fillna("")

    papers["openreview_url"] = "https://openreview.net/forum?id=" + papers["paper_id"].astype(str)

    reviews = pd.DataFrame(columns=["paper_id", "year", "review_id", "rating", "confidence"])
    return papers, reviews


def build_from_json(input_path: Path, cfg: dict[str, Any]) -> tuple[pd.DataFrame, pd.DataFrame]:
    paper_rows: list[dict[str, Any]] = []
    review_rows: list[dict[str, Any]] = []
    text_cfg = cfg.get("text", {})
    custom_stopwords = text_cfg.get("custom_stopwords", [])

    for source_path, payload in iter_json_payloads(input_path):
        paper_id = str(payload.get("paper_id") or payload.get("id") or Path(source_path).stem)
        year = payload.get("year") or parse_year_from_path(source_path)
        if year is not None:
            year = int(year)

        decision_raw, decision_type, is_accepted = normalize_decision(payload.get("Decision") or payload.get("decision"))
        reviews = payload.get("reviews") or []
        parsed_reviews = [parse_review(r, paper_id, year) for r in reviews if isinstance(r, dict)]
        review_rows.extend(parsed_reviews)
        ratings = [r["rating"] for r in parsed_reviews if r.get("rating") is not None]
        confidences = [r["confidence"] for r in parsed_reviews if r.get("confidence") is not None]

        title = value_from_content(payload.get("title") or payload.get("Title")) or ""
        abstract = value_from_content(payload.get("abstract") or payload.get("Abstract")) or ""
        text_combined = f"{title} {abstract}".strip()
        text_clean = clean_and_lemmatize(
            text_combined,
            use_spacy=text_cfg.get("use_spacy", False),
            spacy_model=text_cfg.get("spacy_model", "en_core_web_sm"),
            custom_stopwords=custom_stopwords,
        )

        paper_rows.append(
            {
                "paper_id": paper_id,
                "year": year,
                "title": title,
                "abstract": abstract,
                "keywords": payload.get("keywords"),
                "primary_area": payload.get("primary_area"),
                "subject_areas": payload.get("subject_areas"),
                "decision": decision_raw,
                "decision_raw": decision_raw,
                "decision_type": decision_type,
                "decision_tier": decision_type,
                "is_accepted": is_accepted,
                "num_reviews": len(parsed_reviews),
                "avg_rating": float(np.mean(ratings)) if ratings else np.nan,
                "avg_confidence": float(np.mean(confidences)) if confidences else np.nan,
                "text_combined": text_combined,
                "text_clean": text_clean,
                "openreview_url": f"https://openreview.net/forum?id={paper_id}",
            }
        )

    papers = pd.DataFrame(paper_rows)
    reviews = pd.DataFrame(review_rows)
    return papers, reviews


def add_year_normalized_scores(papers: pd.DataFrame, reviews: pd.DataFrame) -> tuple[pd.DataFrame, pd.DataFrame]:
    papers = papers.copy()
    reviews = reviews.copy()

    if not reviews.empty and "rating" in reviews.columns:
        reviews["rating"] = pd.to_numeric(reviews["rating"], errors="coerce")
        year_stats = reviews.groupby("year")["rating"].agg(["mean", "std"]).rename(columns={"mean": "year_rating_mean", "std": "year_rating_std"})
        reviews = reviews.merge(year_stats, left_on="year", right_index=True, how="left")
        reviews["rating_z_year"] = (reviews["rating"] - reviews["year_rating_mean"]) / reviews["year_rating_std"].replace(0, np.nan)
        paper_z = reviews.groupby("paper_id")["rating_z_year"].mean().rename("avg_rating_z_year")
        papers = papers.merge(paper_z, left_on="paper_id", right_index=True, how="left")
    else:
        papers["avg_rating"] = pd.to_numeric(papers.get("avg_rating", np.nan), errors="coerce")
        year_stats = papers.groupby("year")["avg_rating"].agg(["mean", "std"]).rename(columns={"mean": "year_rating_mean", "std": "year_rating_std"})
        papers = papers.merge(year_stats, left_on="year", right_index=True, how="left")
        papers["avg_rating_z_year"] = (papers["avg_rating"] - papers["year_rating_mean"]) / papers["year_rating_std"].replace(0, np.nan)

    if "avg_rating_z_year" not in papers.columns:
        papers["avg_rating_z_year"] = np.nan
    return papers, reviews


def write_outputs(papers: pd.DataFrame, reviews: pd.DataFrame, out_dir: Path) -> None:
    ensure_dir(out_dir)
    write_table(papers, out_dir / "papers.parquet", index=False)
    write_table(reviews, out_dir / "reviews.parquet", index=False)
    write_table(papers[papers["is_accepted"]], out_dir / "accepted_papers.parquet", index=False)
    papers.to_csv(out_dir / "papers.csv", index=False)
    reviews.to_csv(out_dir / "reviews.csv", index=False)
    papers[papers["is_accepted"]].to_csv(out_dir / "accepted_papers.csv", index=False)

    summary = {
        "total_public_records": int(len(papers)),
        "accepted_records": int(papers["is_accepted"].sum()),
        "public_rejected_records": int((papers["decision_type"] == "reject").sum()),
        "by_year": papers.groupby("year").size().astype(int).to_dict(),
        "accepted_by_year": papers[papers["is_accepted"]].groupby("year").size().astype(int).to_dict(),
    }
    (out_dir / "dataset_summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    LOGGER.info("Dataset summary: %s", summary)


def main() -> None:
    parser = argparse.ArgumentParser(description="Prepare NeurIPS OpenReview records into paper/review tables.")
    parser.add_argument("--input", required=True, help="Path to neurips_data.zip, extracted data directory, or neurips_topics.csv")
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--config", required=True)
    parser.add_argument("--prefer-existing-topic-csv", action="store_true", help="Use neurips_topics.csv if present; fastest path for existing analysis.")
    args = parser.parse_args()

    out_dir = Path(args.out_dir)
    setup_logging(out_dir / "prepare_data.log")
    cfg = load_config(args.config)
    input_path = Path(args.input)

    papers: pd.DataFrame
    reviews: pd.DataFrame
    existing = None
    if args.prefer_existing_topic_csv:
        existing = read_topics_csv_from_zip(input_path)
        if existing is None:
            csv_path = find_existing_topics_csv(input_path)
            if csv_path is not None:
                LOGGER.info("Using existing topic CSV: %s", csv_path)
                existing = pd.read_csv(csv_path)
    if existing is not None:
        papers, reviews = normalize_existing_topics_df(existing, cfg)
    else:
        papers, reviews = build_from_json(input_path, cfg)

    papers, reviews = add_year_normalized_scores(papers, reviews)
    write_outputs(papers, reviews, out_dir)


if __name__ == "__main__":
    main()
