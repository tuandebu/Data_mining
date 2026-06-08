from __future__ import annotations

import logging
from pathlib import Path

import pandas as pd

LOGGER = logging.getLogger(__name__)


def write_table(df: pd.DataFrame, path: str | Path, index: bool = False) -> Path:
    """Write a dataframe, preferring Parquet but falling back to pickle/CSV.

    The codebase uses .parquet paths in scripts because server runs should install pyarrow.
    This fallback keeps the pipeline usable in minimal environments.
    """
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.suffix == ".parquet":
        try:
            df.to_parquet(path, index=index)
            return path
        except Exception as exc:
            fallback = path.with_suffix(path.suffix + ".pkl")
            LOGGER.warning("Parquet write failed for %s (%s). Falling back to %s", path, exc, fallback)
            df.to_pickle(fallback)
            # Also write CSV for quick inspection.
            df.to_csv(path.with_suffix(".csv"), index=index)
            return fallback
    if path.suffix == ".pkl":
        df.to_pickle(path)
    elif path.suffix == ".csv":
        df.to_csv(path, index=index)
    else:
        df.to_pickle(path)
    return path


def read_table(path: str | Path) -> pd.DataFrame:
    path = Path(path)
    candidates = [path]
    if path.suffix == ".parquet":
        candidates.extend([path.with_suffix(path.suffix + ".pkl"), path.with_suffix(".csv")])
    for candidate in candidates:
        if not candidate.exists():
            continue
        if candidate.suffix == ".parquet":
            try:
                return pd.read_parquet(candidate)
            except Exception as exc:
                LOGGER.warning("Parquet read failed for %s: %s", candidate, exc)
                continue
        if candidate.suffix == ".pkl":
            return pd.read_pickle(candidate)
        if candidate.suffix == ".csv":
            return pd.read_csv(candidate)
    raise FileNotFoundError(f"Could not read table from {path} or fallbacks")
