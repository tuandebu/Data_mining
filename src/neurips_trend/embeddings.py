from __future__ import annotations

import argparse
import json
import logging
from pathlib import Path
from typing import Any

import numpy as np
import pandas as pd

from .table_io import read_table, write_table
import torch
from tqdm import tqdm

from .config import ensure_dir, load_config, setup_logging

LOGGER = logging.getLogger(__name__)


def resolve_device(device_cfg: str) -> str:
    if device_cfg == "auto":
        return "cuda" if torch.cuda.is_available() else "cpu"
    if device_cfg == "cuda" and not torch.cuda.is_available():
        LOGGER.warning("CUDA requested but unavailable; falling back to CPU")
        return "cpu"
    return device_cfg


def encode_sentence_transformer(
    texts: list[str],
    model_name: str,
    device: str,
    batch_size: int,
    normalize_embeddings: bool,
) -> np.ndarray:
    from sentence_transformers import SentenceTransformer

    model = SentenceTransformer(model_name, device=device)
    embeddings = model.encode(
        texts,
        batch_size=batch_size,
        convert_to_numpy=True,
        normalize_embeddings=normalize_embeddings,
        show_progress_bar=True,
    )
    return embeddings.astype(np.float32)


def mean_pool(last_hidden_state: torch.Tensor, attention_mask: torch.Tensor) -> torch.Tensor:
    mask = attention_mask.unsqueeze(-1).expand(last_hidden_state.size()).float()
    summed = torch.sum(last_hidden_state * mask, dim=1)
    counts = torch.clamp(mask.sum(dim=1), min=1e-9)
    return summed / counts


def encode_hf_auto(
    texts: list[str],
    model_name: str,
    device: str,
    batch_size: int,
    max_length: int,
    fp16: bool,
    normalize_embeddings: bool,
) -> np.ndarray:
    from transformers import AutoModel, AutoTokenizer

    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModel.from_pretrained(model_name)
    model.to(device)
    model.eval()
    if fp16 and device.startswith("cuda"):
        model.half()

    outputs: list[np.ndarray] = []
    with torch.no_grad():
        for start in tqdm(range(0, len(texts), batch_size), desc=f"Embedding {model_name}"):
            batch = texts[start : start + batch_size]
            encoded = tokenizer(
                batch,
                padding=True,
                truncation=True,
                max_length=max_length,
                return_tensors="pt",
            ).to(device)
            result = model(**encoded)
            pooled = mean_pool(result.last_hidden_state, encoded["attention_mask"])
            if normalize_embeddings:
                pooled = torch.nn.functional.normalize(pooled, p=2, dim=1)
            outputs.append(pooled.float().cpu().numpy())
    return np.vstack(outputs).astype(np.float32)


def run_embedding_model(
    texts: list[str],
    model_key: str,
    model_cfg: dict[str, Any],
    global_cfg: dict[str, Any],
    out_dir: Path,
    paper_ids: list[str],
) -> None:
    device = resolve_device(global_cfg.get("device", "auto"))
    batch_size = int(global_cfg.get("batch_size", 64))
    max_length = int(global_cfg.get("max_length", 512))
    fp16 = bool(global_cfg.get("fp16", True))
    normalize = bool(global_cfg.get("normalize_embeddings", True))

    name = model_cfg["name"]
    backend = model_cfg.get("backend", "sentence_transformer")
    LOGGER.info("Embedding model=%s backend=%s device=%s", name, backend, device)

    if backend == "sentence_transformer":
        emb = encode_sentence_transformer(texts, name, device, batch_size, normalize)
    elif backend == "hf_auto":
        emb = encode_hf_auto(texts, name, device, batch_size, max_length, fp16, normalize)
    else:
        raise ValueError(f"Unknown embedding backend: {backend}")

    model_dir = ensure_dir(out_dir / model_key)
    np.save(model_dir / "embeddings.npy", emb)
    pd.DataFrame({"paper_id": paper_ids, "row_index": np.arange(len(paper_ids))}).to_csv(model_dir / "paper_index.csv", index=False)
    (model_dir / "metadata.json").write_text(
        json.dumps({"model_key": model_key, "model_name": name, "backend": backend, "shape": list(emb.shape)}, indent=2),
        encoding="utf-8",
    )
    LOGGER.info("Saved embeddings: %s shape=%s", model_dir, emb.shape)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate MiniLM/SPECTER2 embeddings for accepted papers.")
    parser.add_argument("--input", required=True, help="accepted_papers.parquet")
    parser.add_argument("--config", required=True)
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--model", default=None, help="Optional single model key to run")
    args = parser.parse_args()

    out_dir = ensure_dir(args.out_dir)
    setup_logging(out_dir / "embeddings.log")
    cfg = load_config(args.config)
    df = read_table(args.input)
    text_col = cfg.get("text", {}).get("source_column", "text_clean")
    if text_col not in df.columns:
        raise ValueError(f"Text column not found: {text_col}")

    min_chars = int(cfg.get("text", {}).get("min_chars", 50))
    texts = df[text_col].fillna("").astype(str).tolist()
    too_short = sum(len(t) < min_chars for t in texts)
    if too_short:
        LOGGER.warning("%d documents shorter than min_chars=%d", too_short, min_chars)
    paper_ids = df["paper_id"].astype(str).tolist()

    emb_cfg = cfg["embedding"]
    for model_key, model_cfg in emb_cfg["models"].items():
        if args.model and model_key != args.model:
            continue
        if not model_cfg.get("enabled", True):
            continue
        run_embedding_model(texts, model_key, model_cfg, emb_cfg, out_dir, paper_ids)


if __name__ == "__main__":
    main()
