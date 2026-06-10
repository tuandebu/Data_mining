#!/usr/bin/env python3
"""
Prettify all 56 demo topic labels for professor-facing GitHub Pages demo.

This patches human-readable labels into:
  docs/data/topics.json
  docs/data/representatives.json
  docs/data/evidence.json
  docs/data/*.json when label-like fields exist
  docs/downloads/*.csv and docs/data/*.csv label-like columns

It preserves raw labels where possible and writes:
  docs/data/label_aliases_all.json

Run:
  py scripts/prettify_all_56_topic_labels.py --docs-dir D:\\NeurIPS_Trend_Project\\Data_mining\\docs
"""
from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path
from typing import Any

LABEL_FIELDS = {
    "label", "topic", "topic_label", "topic_name", "Topic", "Topic label",
    "topic_pretty", "pretty_label", "display_label", "name"
}

# Exact aliases for the 56 final BERTopic labels observed in topic_statistics.csv.
EXACT_ALIASES = {
    "8_reasoning_llms_language_to": "LLM reasoning",
    "1_3d_and_scene_to": "3D vision / scene generation",
    "14_preference_reward_alignment_human": "preference learning / alignment",
    "23_safety_llms_harmful_attacks": "LLM safety / jailbreaks",
    "22_attention_memory_kv_cache": "efficient attention / KV cache",
    "21_video_temporal_understanding_and": "video temporal understanding",
    "37_lora_finetuning_lowrank_adaptation": "LoRA / low-rank finetuning",
    "46_language_llms_of_the": "language modeling / LLMs",
    "36_agents_llms_agent_language": "LLM agents",
    "20_vision_tokens_and_the": "vision tokens",
    "3_multimodal_visual_and_to": "multimodal visual learning",
    "38_watermarking_watermark_watermarks_image": "image watermarking",
    "7_protein_molecular_and_drug": "protein / molecular modeling / drug discovery",
    "11_series_time_forecasting_data": "time-series forecasting",
    "26_video_motion_generation_temporal": "video / motion generation",
    "49_hallucination_hallucinations_lvlms_decoding": "hallucination in LVLMs",
    "33_knowledge_retrieval_rag_query": "retrieval-augmented generation / knowledge retrieval",
    "53_manipulation_dexterous_grasp_contact": "dexterous manipulation / grasping",
    "35_medical_segmentation_clinical_images": "medical image segmentation",
    "54_decoding_speculative_draft_inference": "speculative decoding / inference",
    "13_transformers_transformer_attention_of": "transformers / attention mechanisms",
    "15_pdes_pde_equations_differential": "PDEs / differential equations",
    "32_continual_forgetting_knowledge_unlearning": "continual learning / unlearning",
    "40_anomaly_detection_anomalies_normal": "anomaly detection",
    "2_diffusion_image_the_of": "image diffusion models",
    "45_recommendation_user_recommender_item": "recommender systems",
    "28_problems_optimization_combinatorial_search": "combinatorial optimization / search",
    "44_conformal_prediction_coverage_sets": "conformal prediction",
    "55_face_facial_identity_deepfake": "face identity / deepfake detection",
    "17_audio_speech_audiovisual_generation": "audio / speech / audiovisual generation",
    "50_quantization_quantized_lowbit_4bit": "model quantization / low-bit inference",
    "47_quantum_classical_of_the": "quantum / classical learning",
    "48_pruning_sparsity_compression_sparse": "pruning / sparsity / compression",
    "19_federated_fl_clients_client": "federated learning",
    "51_optimization_bayesian_bo_the": "Bayesian optimization",
    "42_backdoor_attacks_attack_defense": "backdoor attacks / defenses",
    "52_ssl_selfsupervised_unlabeled_semisupervised": "self-supervised learning",
    "30_fairness_fair_groups_in": "fairness / group fairness",
    "6_brain_spiking_of_and": "brain / spiking neural networks",
    "39_clustering_algorithm_algorithms_approximation": "clustering / approximation algorithms",
    "43_ood_detection_outofdistribution_id": "OOD detection",
    "31_label_labels_the_noisy": "noisy labels / label noise",
    "34_communication_distributed_federated_convergence": "distributed / federated optimization",
    "41_equivariant_symmetries_group_symmetry": "equivariance / symmetry groups",
    "9_causal_treatment_variables_of": "causal inference / treatment effects",
    "25_games_game_equilibrium_equilibria": "game theory / equilibria",
    "24_the_of_is_we": "statistical learning theory",
    "18_optimization_convergence_gradient_convex": "optimization / convergence / gradients",
    "16_the_of_deep_gradient": "deep learning theory / gradients",
    "10_privacy_private_dp_differentially": "differential privacy",
    "27_bayesian_posterior_inference_of": "Bayesian inference",
    "12_adversarial_attacks_robustness_attack": "adversarial robustness",
    "29_matrix_the_of_is": "matrix algorithms",
    "5_regret_the_bandits_bandit": "bandits / regret minimization",
    "4_graph_graphs_gnns_node": "graph neural networks",
    "0_policy_rl_reinforcement_the": "RL / policy learning",

    # Already partially humanized labels or common variants.
    "reasoning_llms_language_to": "LLM reasoning",
    "reasoning llms language to": "LLM reasoning",
    "3d and scene to": "3D vision / scene generation",
    "preference reward alignment human": "preference learning / alignment",
    "safety llms harmful attacks": "LLM safety / jailbreaks",
    "attention memory kv cache": "efficient attention / KV cache",
    "lora finetuning lowrank adaptation": "LoRA / low-rank finetuning",
    "language llms of the": "language modeling / LLMs",
    "agents llms agent language": "LLM agents",
    "vision tokens and the": "vision tokens",
    "multimodal visual and to": "multimodal visual learning",
    "watermarking watermark watermarks image": "image watermarking",
    "protein molecular and drug": "protein / molecular modeling / drug discovery",
    "series time forecasting data": "time-series forecasting",
    "video motion generation temporal": "video / motion generation",
    "hallucination hallucinations lvlms decoding": "hallucination in LVLMs",
    "knowledge retrieval rag query": "retrieval-augmented generation / knowledge retrieval",
    "manipulation dexterous grasp contact": "dexterous manipulation / grasping",
    "medical segmentation clinical images": "medical image segmentation",
    "decoding speculative draft inference": "speculative decoding / inference",
    "transformers transformer attention of": "transformers / attention mechanisms",
    "pdes pde equations differential": "PDEs / differential equations",
    "continual forgetting knowledge unlearning": "continual learning / unlearning",
    "anomaly detection anomalies normal": "anomaly detection",
    "diffusion image the of": "image diffusion models",
    "recommendation user recommender item": "recommender systems",
    "problems optimization combinatorial search": "combinatorial optimization / search",
    "conformal prediction coverage sets": "conformal prediction",
    "face facial identity deepfake": "face identity / deepfake detection",
    "audio speech audiovisual generation": "audio / speech / audiovisual generation",
    "quantization quantized lowbit 4bit": "model quantization / low-bit inference",
    "quantum classical of the": "quantum / classical learning",
    "pruning sparsity compression sparse": "pruning / sparsity / compression",
    "federated fl clients client": "federated learning",
    "optimization bayesian bo the": "Bayesian optimization",
    "backdoor attacks attack defense": "backdoor attacks / defenses",
    "ssl selfsupervised unlabeled semisupervised": "self-supervised learning",
    "fairness fair groups in": "fairness / group fairness",
    "brain spiking of and": "brain / spiking neural networks",
    "clustering algorithm algorithms approximation": "clustering / approximation algorithms",
    "ood detection outofdistribution id": "OOD detection",
    "label labels the noisy": "noisy labels / label noise",
    "communication distributed federated convergence": "distributed / federated optimization",
    "equivariant symmetries group symmetry": "equivariance / symmetry groups",
    "causal treatment variables of": "causal inference / treatment effects",
    "games game equilibrium equilibria": "game theory / equilibria",
    "the of is we": "statistical learning theory",
    "optimization convergence gradient convex": "optimization / convergence / gradients",
    "the of deep gradient": "deep learning theory / gradients",
    "privacy private dp differentially": "differential privacy",
    "bayesian posterior inference of": "Bayesian inference",
    "adversarial attacks robustness attack": "adversarial robustness",
    "matrix the of is": "matrix algorithms",
    "regret the bandits bandit": "bandits / regret minimization",
    "graph graphs gnns node": "graph neural networks",
    "policy rl reinforcement the": "RL / policy learning",

    # Human variants observed after first prettification.
    "Backdoor attacks attack defense": "backdoor attacks / defenses",
    "backdoor attacks attack defense": "backdoor attacks / defenses",
    "Backdoor attacks attack": "backdoor attacks / defenses",
    "video temporal understanding": "video temporal understanding",
}

# Labels already acceptable should remain stable.
CANONICAL = {v: v for v in set(EXACT_ALIASES.values())}


def norm(s: Any) -> str:
    s = str(s or "").strip()
    s = re.sub(r"^\s*(\d+)[_\-\s:]+", "", s)
    s = s.replace("_", " ").replace("-", " ")
    s = re.sub(r"\s+", " ", s)
    return s.strip().lower()


def prettify(s: Any) -> str:
    if s is None:
        return ""
    raw = str(s).strip()
    if not raw:
        return raw
    if raw in CANONICAL:
        return raw
    if raw in EXACT_ALIASES:
        return EXACT_ALIASES[raw]
    key = norm(raw)
    if key in EXACT_ALIASES:
        return EXACT_ALIASES[key]

    tokens = set(key.split())
    def any_has(*xs: str) -> bool:
        return any(x in tokens for x in xs)

    # Conservative fallback rules.
    if any_has("llm", "llms") and any_has("reasoning"):
        return "LLM reasoning"
    if any_has("3d") and any_has("vision", "scene", "mesh"):
        return "3D vision / scene generation"
    if any_has("preference", "alignment", "reward"):
        return "preference learning / alignment"
    if any_has("safety", "jailbreak", "harmful"):
        return "LLM safety / jailbreaks"
    if any_has("attention") and any_has("kv", "cache", "memory"):
        return "efficient attention / KV cache"
    if any_has("backdoor"):
        return "backdoor attacks / defenses"
    if any_has("bandit", "bandits", "regret"):
        return "bandits / regret minimization"
    if any_has("graph", "graphs", "gnn", "gnns"):
        return "graph neural networks"
    if any_has("matrix"):
        return "matrix algorithms"
    if any_has("bayesian", "posterior"):
        return "Bayesian inference"
    if any_has("privacy", "differentially", "dp"):
        return "differential privacy"
    if any_has("adversarial", "robustness"):
        return "adversarial robustness"

    # Last fallback: clean numbered/model format and deduplicate adjacent duplicates.
    words = [w for w in re.sub(r"[^A-Za-z0-9]+", " ", key).split() if w not in {"the", "of", "and", "to", "in", "for"}]
    out = []
    for w in words:
        if not out or out[-1] != w:
            out.append(w)
    if not out:
        return raw
    cleaned = " ".join(out)
    replacements = {
        "llm": "LLM", "llms": "LLMs", "rl": "RL", "gnn": "GNN", "gnns": "GNNs",
        "kv": "KV", "lora": "LoRA", "rag": "RAG", "ood": "OOD", "pdes": "PDEs", "pde": "PDE",
        "ssl": "SSL", "lvlms": "LVLMs", "dp": "DP", "3d": "3D",
    }
    for k, v in replacements.items():
        cleaned = re.sub(rf"\b{k}\b", v, cleaned, flags=re.IGNORECASE)
    return cleaned


def patch_obj(obj: Any, aliases: dict[str, str]) -> Any:
    if isinstance(obj, list):
        return [patch_obj(x, aliases) for x in obj]
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            if k in LABEL_FIELDS and isinstance(v, str):
                pretty = prettify(v)
                if pretty != v:
                    aliases.setdefault(v, pretty)
                    if "raw_label" not in obj and any(x in obj for x in ("topic_id", "size_total", "x", "y", "papers")):
                        out.setdefault("raw_label", v)
                out[k] = pretty
            else:
                out[k] = patch_obj(v, aliases)
        return out
    return obj


def patch_json(path: Path, aliases: dict[str, str]) -> bool:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return False
    new = patch_obj(data, aliases)
    if new == data:
        return False
    path.write_text(json.dumps(new, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return True


def patch_csv(path: Path, aliases: dict[str, str]) -> bool:
    text = path.read_text(encoding="utf-8-sig", errors="replace")
    rows = list(csv.DictReader(text.splitlines()))
    if not rows:
        return False
    fieldnames = list(rows[0].keys())
    target_cols = [c for c in fieldnames if c in LABEL_FIELDS or "label" in c.lower() or c.lower() in {"topic", "topic_name"}]
    if not target_cols:
        return False
    changed = False
    for row in rows:
        for col in target_cols:
            old = row.get(col, "")
            new = prettify(old)
            if new != old:
                aliases.setdefault(old, new)
                row[col] = new
                changed = True
    if changed:
        with path.open("w", encoding="utf-8", newline="") as f:
            w = csv.DictWriter(f, fieldnames=fieldnames)
            w.writeheader()
            w.writerows(rows)
    return changed


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--docs-dir", required=True)
    args = ap.parse_args()
    docs = Path(args.docs_dir).resolve()
    if not docs.exists():
        raise SystemExit(f"docs dir not found: {docs}")

    aliases: dict[str, str] = {}
    changed: list[str] = []

    for path in sorted((docs / "data").glob("*.json")) if (docs / "data").exists() else []:
        if path.name == "label_aliases_all.json":
            continue
        if patch_json(path, aliases):
            changed.append(str(path))

    for folder in [docs / "data", docs / "downloads"]:
        if folder.exists():
            for path in sorted(folder.glob("*.csv")):
                if patch_csv(path, aliases):
                    changed.append(str(path))

    alias_path = docs / "data" / "label_aliases_all.json"
    alias_path.parent.mkdir(parents=True, exist_ok=True)
    alias_path.write_text(json.dumps(aliases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    changed.append(str(alias_path))

    print("Prettified all known final-demo topic labels")
    print("docs:", docs)
    print("changed files:", len(changed))
    for p in changed:
        print(" -", p)
    print("aliases:", len(aliases))
    for old, new in sorted(aliases.items())[:120]:
        print(f"  {old!r} -> {new!r}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
