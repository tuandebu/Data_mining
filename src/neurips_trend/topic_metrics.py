from __future__ import annotations

import logging
from collections import Counter
from typing import Iterable

import numpy as np
import pandas as pd

LOGGER = logging.getLogger(__name__)


def topic_diversity(topics_words: list[list[str]], top_k: int = 10) -> float:
    words: list[str] = []
    for topic in topics_words:
        words.extend(topic[:top_k])
    if not words:
        return float("nan")
    return len(set(words)) / len(words)


def tokenized_docs(texts: Iterable[str]) -> list[list[str]]:
    return [str(t).split() for t in texts]


def compute_gensim_coherence(
    texts: Iterable[str],
    topics_words: list[list[str]],
    coherence: str = "c_npmi",
) -> float:
    try:
        from gensim.corpora import Dictionary
        from gensim.models import CoherenceModel
    except Exception as exc:
        LOGGER.warning("Gensim unavailable; coherence skipped: %s", exc)
        return float("nan")

    tokenized = tokenized_docs(texts)
    topics_words = [[w for w in topic if isinstance(w, str) and w] for topic in topics_words if topic]
    if not topics_words or not tokenized:
        return float("nan")
    dictionary = Dictionary(tokenized)
    dictionary.filter_extremes(no_below=3, no_above=0.8)
    try:
        cm = CoherenceModel(topics=topics_words, texts=tokenized, dictionary=dictionary, coherence=coherence)
        return float(cm.get_coherence())
    except Exception as exc:
        LOGGER.warning("Coherence failed: %s", exc)
        return float("nan")


def summarize_topic_assignments(topics: np.ndarray | pd.Series) -> dict[str, float | int]:
    arr = np.asarray(topics)
    n = len(arr)
    if n == 0:
        return {"n_docs": 0, "n_topics": 0, "outlier_rate": np.nan, "largest_topic_share": np.nan}
    counts = Counter(arr.tolist())
    non_outlier = {k: v for k, v in counts.items() if int(k) != -1}
    n_topics = len(non_outlier)
    outlier_rate = counts.get(-1, 0) / n
    largest_topic_share = max(non_outlier.values()) / n if non_outlier else np.nan
    return {
        "n_docs": int(n),
        "n_topics": int(n_topics),
        "outlier_rate": float(outlier_rate),
        "largest_topic_share": float(largest_topic_share),
    }


def top_words_from_bertopic(topic_model, topic_ids: Iterable[int], top_n: int = 10) -> list[list[str]]:
    topics_words: list[list[str]] = []
    for topic_id in topic_ids:
        if int(topic_id) == -1:
            continue
        words_scores = topic_model.get_topic(int(topic_id)) or []
        topics_words.append([w for w, _ in words_scores[:top_n]])
    return topics_words


def top_words_from_matrix(components: np.ndarray, feature_names: list[str], top_n: int = 10) -> list[list[str]]:
    topics_words = []
    for row in components:
        idx = np.argsort(row)[::-1][:top_n]
        topics_words.append([feature_names[i] for i in idx])
    return topics_words
