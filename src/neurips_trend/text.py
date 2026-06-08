from __future__ import annotations

import html
import re
from functools import lru_cache
from typing import Iterable

LATEX_RE = re.compile(r"(\$[^$]*\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\\[a-zA-Z]+\*?(?:\[[^\]]*\])?(?:\{[^}]*\})?)")
URL_RE = re.compile(r"https?://\S+|www\.\S+")
CITE_RE = re.compile(r"\[[0-9,\s\-]+\]|\([A-Z][A-Za-z]+ et al\.,? \d{4}\)")
NON_ALPHA_NUM_RE = re.compile(r"[^\w\s\-/+]", re.UNICODE)
WS_RE = re.compile(r"\s+")


def normalize_whitespace(text: str) -> str:
    return WS_RE.sub(" ", text).strip()


def clean_text_basic(text: object, lowercase: bool = True) -> str:
    if text is None:
        return ""
    text = html.unescape(str(text))
    text = LATEX_RE.sub(" ", text)
    text = URL_RE.sub(" ", text)
    text = CITE_RE.sub(" ", text)
    text = text.replace("\n", " ").replace("\t", " ")
    text = NON_ALPHA_NUM_RE.sub(" ", text)
    text = normalize_whitespace(text)
    return text.lower() if lowercase else text


@lru_cache(maxsize=4)
def _load_spacy(model_name: str):
    import spacy

    return spacy.load(model_name, disable=["parser", "ner", "textcat"])


def clean_and_lemmatize(
    text: object,
    *,
    use_spacy: bool = False,
    spacy_model: str = "en_core_web_sm",
    custom_stopwords: Iterable[str] | None = None,
) -> str:
    text = clean_text_basic(text, lowercase=True)
    if not text:
        return ""
    custom = set(custom_stopwords or [])
    if not use_spacy:
        # Lightweight fallback: keep text cleaned but not lemmatized.
        tokens = [tok for tok in text.split() if tok not in custom and len(tok) > 1]
        return " ".join(tokens)

    nlp = _load_spacy(spacy_model)
    doc = nlp(text)
    tokens: list[str] = []
    for tok in doc:
        lemma = tok.lemma_.lower().strip()
        if not lemma or lemma == "-pron-":
            lemma = tok.text.lower().strip()
        if tok.is_stop or tok.is_punct or tok.like_num or len(lemma) <= 1:
            continue
        if lemma in custom:
            continue
        tokens.append(lemma)
    return " ".join(tokens)
