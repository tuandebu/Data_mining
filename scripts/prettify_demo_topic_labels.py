#!/usr/bin/env python3
"""
Prettify topic labels in the GitHub Pages demo.

Purpose
-------
BERTopic-style labels can be keyword strings such as:
  "Games game equilibrium equilibria"
  "Clustering algorithm algorithms approximation"

For a professor-facing demo, those should be displayed as human-readable labels:
  "game theory / equilibria"
  "clustering / approximation algorithms"

This script patches:
  docs/data/topics.json
  docs/data/representatives.json
  docs/data/evidence.json
  docs/downloads/*.csv
  docs/data/*.csv, if present

It preserves the original label in `raw_label` where possible and writes an audit file:
  docs/data/label_aliases.json
"""

from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path
from typing import Any

LABEL_COLUMNS = {
    "label",
    "topic",
    "topic_label",
    "topic_name",
    "Topic",
    "Topic label",
    "topic_pretty",
    "pretty_label",
}

# Exact overrides for labels seen in the final report/demo or common BERTopic keyword labels.
EXACT_OVERRIDES = {
    # Rising / LLM-related
    "llm reasoning": "LLM reasoning",
    "reasoning llms language to": "LLM reasoning",
    "reasoning llms language": "LLM reasoning",
    "3d and scene to": "3D vision / scene generation",
    "3d vision scene generation": "3D vision / scene generation",
    "3d vision / scene generation": "3D vision / scene generation",
    "preference reward alignment human": "preference learning / alignment",
    "preference learning alignment": "preference learning / alignment",
    "preference learning / alignment": "preference learning / alignment",
    "safety llms harmful attacks": "LLM safety / jailbreaks",
    "llm safety jailbreaks": "LLM safety / jailbreaks",
    "llm safety / jailbreaks": "LLM safety / jailbreaks",
    "attention memory kv cache": "efficient attention / KV cache",
    "efficient attention kv cache": "efficient attention / KV cache",
    "efficient attention / kv cache": "efficient attention / KV cache",
    "lora finetuning lowrank adaptation": "LoRA / low-rank finetuning",
    "lora low-rank finetuning": "LoRA / low-rank finetuning",
    "lora / low-rank finetuning": "LoRA / low-rank finetuning",
    "language llms of the": "language modeling / LLMs",
    "llm agents": "LLM agents",
    "vision tokens": "vision tokens",

    # Declining / classical / theory
    "policy rl reinforcement the": "RL / policy learning",
    "rl policy learning": "RL / policy learning",
    "rl / policy learning": "RL / policy learning",
    "graph graphs gnns node": "graph neural networks",
    "graph neural networks": "graph neural networks",
    "regret the bandits bandit": "bandits / regret minimization",
    "bandits regret minimization": "bandits / regret minimization",
    "bandits / regret minimization": "bandits / regret minimization",
    "matrix the of is": "matrix algorithms",
    "matrix algorithms": "matrix algorithms",
    "adversarial attacks robustness attack": "adversarial robustness",
    "adversarial attacks robustness": "adversarial robustness",
    "adversarial robustness": "adversarial robustness",
    "privacy private dp differentially": "differential privacy",
    "differential privacy": "differential privacy",
    "bayesian posterior inference of": "Bayesian inference",
    "bayesian inference": "Bayesian inference",
    "statistical learning theory": "statistical learning theory",
    "games game equilibrium equilibria": "game theory / equilibria",
    "game theory equilibria": "game theory / equilibria",
    "clustering algorithm algorithms approximation": "clustering / approximation algorithms",
    "clustering approximation algorithms": "clustering / approximation algorithms",
    "optimization convergence gradient convex": "optimization / convergence / gradients",
    "the of deep gradient": "deep learning theory / gradients",
    "deep learning theory": "deep learning theory",
    "recommender systems": "recommender systems",
    "hallucination hallucinations": "hallucination in LVLMs",
    "hallucination hallucinations l": "hallucination in LVLMs",
    "backdoor attacks fake detection": "backdoor attacks / fake detection",
    "dexterous manipulation": "dexterous manipulation / robotics",
}


def normalize_label(label: str) -> str:
    """Normalize a label for matching."""
    s = str(label or "").strip()
    # Drop common numeric prefix: "29_matrix_the_of_is" -> "matrix the of is"
    s = re.sub(r"^\s*\d+[\s_\-:]+", "", s)
    s = s.replace("_", " ").replace("-", " ")
    s = s.replace("&", " and ")
    s = re.sub(r"[^\w\s/]+", " ", s)
    s = re.sub(r"\s+", " ", s).strip().lower()
    return s


def dedup_adjacent_words(s: str) -> str:
    words = s.split()
    out = []
    for w in words:
        if not out or out[-1].lower() != w.lower():
            out.append(w)
    return " ".join(out)


def title_acronyms(s: str) -> str:
    """Keep preferred acronyms uppercase while leaving most labels sentence-case."""
    replacements = {
        "llm": "LLM",
        "llms": "LLMs",
        "rl": "RL",
        "gnn": "GNN",
        "gnns": "GNNs",
        "kv": "KV",
        "lora": "LoRA",
        "lvmls": "LVLMs",
        "lvlms": "LVLMs",
        "dp": "DP",
        "3d": "3D",
        "tf idf": "TF-IDF",
    }
    out = s
    for k, v in replacements.items():
        out = re.sub(rf"\b{re.escape(k)}\b", v, out, flags=re.IGNORECASE)
    return out


def humanize_label(label: Any) -> str:
    if label is None:
        return ""
    original = str(label).strip()
    if not original:
        return original

    key = normalize_label(original)
    if key in EXACT_OVERRIDES:
        return EXACT_OVERRIDES[key]

    # Keyword-based rules for labels not covered by exact overrides.
    tokens = set(key.split())
    joined = " ".join(tokens)

    def has(*words: str) -> bool:
        return all(w in tokens for w in words)

    def any_has(*words: str) -> bool:
        return any(w in tokens for w in words)

    if any_has("reasoning") and any_has("llm", "llms", "language"):
        return "LLM reasoning"
    if any_has("3d", "scene") and any_has("vision", "generation", "mesh"):
        return "3D vision / scene generation"
    if any_has("preference", "reward", "alignment"):
        return "preference learning / alignment"
    if any_has("safety", "jailbreak", "harmful"):
        return "LLM safety / jailbreaks"
    if any_has("attention", "memory") and any_has("kv", "cache"):
        return "efficient attention / KV cache"
    if any_has("lora", "lowrank", "low") and any_has("finetuning", "adaptation", "rank"):
        return "LoRA / low-rank finetuning"
    if any_has("video", "temporal"):
        return "video temporal understanding"
    if any_has("privacy", "private", "differentially", "dp"):
        return "differential privacy"
    if any_has("bayesian", "posterior"):
        return "Bayesian inference"
    if any_has("bandit", "bandits", "regret"):
        return "bandits / regret minimization"
    if any_has("graph", "graphs", "gnn", "gnns", "node"):
        return "graph neural networks"
    if any_has("policy", "reinforcement") and any_has("rl", "policy", "reinforcement"):
        return "RL / policy learning"
    if any_has("matrix"):
        return "matrix algorithms"
    if any_has("adversarial", "robustness", "attack", "attacks"):
        return "adversarial robustness"
    if any_has("statistical") and any_has("learning"):
        return "statistical learning theory"
    if any_has("game", "games", "equilibrium", "equilibria"):
        return "game theory / equilibria"
    if any_has("clustering", "cluster") and any_has("algorithm", "algorithms", "approximation"):
        return "clustering / approximation algorithms"
    if any_has("optimization", "convergence", "convex"):
        return "optimization / convergence / gradients"
    if any_has("deep", "gradient"):
        return "deep learning theory / gradients"
    if any_has("hallucination", "hallucinations"):
        return "hallucination in LVLMs"

    # Generic cleanup fallback.
    cleaned = normalize_label(original)
    cleaned = dedup_adjacent_words(cleaned)
    cleaned = title_acronyms(cleaned)
    return cleaned


def patch_json_obj(obj: Any, alias_map: dict[str, str]) -> Any:
    """Recursively patch topic labels in JSON-like objects."""
    if isinstance(obj, list):
        return [patch_json_obj(x, alias_map) for x in obj]

    if isinstance(obj, dict):
        new = {}
        for k, v in obj.items():
            if k in {"label", "topic_label", "topic_name", "topic"} and isinstance(v, str):
                pretty = humanize_label(v)
                if pretty != v:
                    alias_map.setdefault(v, pretty)
                    # Preserve original only if this object looks like a topic/representative/point record.
                    if "raw_label" not in obj and any(key in obj for key in ("topic_id", "papers", "x", "y", "size_total")):
                        new["raw_label"] = v
                new[k] = pretty
            else:
                new[k] = patch_json_obj(v, alias_map)
        return new

    return obj


def patch_json_file(path: Path, alias_map: dict[str, str], dry_run: bool) -> bool:
    data = json.loads(path.read_text(encoding="utf-8"))
    patched = patch_json_obj(data, alias_map)
    if patched == data:
        return False
    if not dry_run:
        path.write_text(json.dumps(patched, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return True


def patch_csv_file(path: Path, alias_map: dict[str, str], dry_run: bool) -> bool:
    raw = path.read_text(encoding="utf-8-sig", errors="replace")
    sample = raw[:4096]
    try:
        dialect = csv.Sniffer().sniff(sample)
    except csv.Error:
        dialect = csv.excel

    rows = list(csv.DictReader(raw.splitlines(), dialect=dialect))
    if not rows:
        return False

    fieldnames = rows[0].keys()
    target_cols = [c for c in fieldnames if c in LABEL_COLUMNS]
    if not target_cols:
        return False

    changed = False
    for row in rows:
        for col in target_cols:
            old = row.get(col, "")
            new = humanize_label(old)
            if new != old:
                alias_map.setdefault(old, new)
                row[col] = new
                changed = True

    if changed and not dry_run:
        with path.open("w", encoding="utf-8", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=list(fieldnames))
            writer.writeheader()
            writer.writerows(rows)

    return changed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--docs-dir", required=True, help="Path to GitHub Pages docs directory")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    docs = Path(args.docs_dir).resolve()
    if not docs.exists():
        raise SystemExit(f"docs directory not found: {docs}")

    data_dir = docs / "data"
    downloads_dir = docs / "downloads"

    alias_map: dict[str, str] = {}
    changed_files: list[str] = []

    for path in [
        data_dir / "topics.json",
        data_dir / "representatives.json",
        data_dir / "evidence.json",
    ]:
        if path.exists() and patch_json_file(path, alias_map, args.dry_run):
            changed_files.append(str(path))

    # Patch any extra JSON in data dir if it contains label fields.
    for path in sorted(data_dir.glob("*.json")) if data_dir.exists() else []:
        if path.name in {"topics.json", "representatives.json", "evidence.json", "label_aliases.json"}:
            continue
        try:
            if patch_json_file(path, alias_map, args.dry_run):
                changed_files.append(str(path))
        except Exception:
            # Some JSON files may not need processing; keep script conservative.
            pass

    for folder in [data_dir, downloads_dir]:
        if not folder.exists():
            continue
        for path in sorted(folder.glob("*.csv")):
            if patch_csv_file(path, alias_map, args.dry_run):
                changed_files.append(str(path))

    aliases_path = data_dir / "label_aliases.json"
    if not args.dry_run:
        aliases_path.write_text(json.dumps(alias_map, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        changed_files.append(str(aliases_path))

    print("Prettified topic labels.")
    print(f"docs dir: {docs}")
    print(f"changed files: {len(changed_files)}")
    for f in changed_files:
        print(f"  - {f}")

    if alias_map:
        print("\nLabel aliases:")
        for old, new in sorted(alias_map.items()):
            print(f"  {old!r} -> {new!r}")
    else:
        print("\nNo label changes needed.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
