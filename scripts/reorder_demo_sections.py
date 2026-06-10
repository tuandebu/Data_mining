#!/usr/bin/env python3
"""
Reorder GitHub Pages demo sections so the Topic Movement section appears
immediately after Model Selection / Assignment Stability.

Usage:
  py scripts/reorder_demo_sections.py --docs-dir D:\\NeurIPS_Trend_Project\\Data_mining\\docs

It modifies only docs/index.html and keeps all docs/data outputs intact.
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path


def find_section(text: str, section_id: str) -> tuple[int, int, str]:
    pattern = re.compile(
        rf"(?P<section>\n?\s*<section\s+id=\"{re.escape(section_id)}\"[\s\S]*?</section>)",
        re.IGNORECASE,
    )
    m = pattern.search(text)
    if not m:
        raise RuntimeError(f"Cannot find <section id=\"{section_id}\"> in index.html")
    return m.start("section"), m.end("section"), m.group("section").strip()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--docs-dir", required=True, help="Path to docs directory")
    parser.add_argument("--version", default="7", help="Cache-busting version for app.js")
    args = parser.parse_args()

    docs_dir = Path(args.docs_dir)
    index_path = docs_dir / "index.html"
    if not index_path.exists():
        raise FileNotFoundError(f"index.html not found: {index_path}")

    text = index_path.read_text(encoding="utf-8")

    model_start, model_end, model_block = find_section(text, "model")
    trends_start, trends_end, trends_block = find_section(text, "trends")

    # Remove both blocks from the original text, regardless of their current order.
    spans = sorted([(model_start, model_end), (trends_start, trends_end)], reverse=True)
    base = text
    for start, end in spans:
        base = base[:start] + base[end:]

    # Insert model + trends at the earliest original location among the two sections.
    insert_at = min(model_start, trends_start)
    # Because we removed text after original positions, recompute insertion point by locating
    # the section that comes before model/trends in this demo: pipeline. If present, insert after it.
    try:
        _, pipeline_end, _ = find_section(base, "pipeline")
        insert_at = pipeline_end
    except RuntimeError:
        # Fall back to original earliest position, adjusted roughly by clamping.
        insert_at = min(insert_at, len(base))

    new_pair = "\n\n  " + model_block + "\n\n  " + trends_block + "\n"
    text2 = base[:insert_at] + new_pair + base[insert_at:]

    # Ensure navbar order is Model then Trends.
    nav_model = '<li class="nav-item"><a class="nav-link" href="#model">Model</a></li>'
    nav_trends = '<li class="nav-item"><a class="nav-link" href="#trends">Trends</a></li>'
    text2 = text2.replace(nav_trends + "\n        " + nav_model, nav_model + "\n        " + nav_trends)

    # Cache bust app.js.
    text2 = re.sub(r"app\.js\?v=[0-9A-Za-z_.-]+", f"app.js?v={args.version}", text2)
    text2 = re.sub(r"app\.js(?!\?v=)", f"app.js?v={args.version}", text2)

    index_path.write_text(text2, encoding="utf-8")
    print(f"Updated section order in: {index_path}")
    print("New order: Pipeline -> Model selection / Assignment stability -> Topic movement")
    print(f"Set app.js cache-busting version to v={args.version}")


if __name__ == "__main__":
    main()
