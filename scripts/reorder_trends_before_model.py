#!/usr/bin/env python3
"""Move the Trends/Topic movement section before the Model section in a GitHub Pages demo.

Usage:
  python reorder_trends_before_model.py --docs-dir D:\\NeurIPS_Trend_Project\\Data_mining\\docs --version 10

The script:
  1. Reads docs/index.html as UTF-8
  2. Moves <section id="trends">...</section> before <section id="model">...</section>
  3. Moves the navbar Trends link before the Model link
  4. Adds/updates a cache-busting query on app.js/demo_data.js if present
  5. Writes a docs/build_version.txt file
"""
from __future__ import annotations

import argparse
import datetime as dt
import re
from pathlib import Path


def section_bounds(html: str, section_id: str) -> tuple[int, int]:
    start_match = re.search(rf'<section\s+id=["\']{re.escape(section_id)}["\'][^>]*>', html, flags=re.I)
    if not start_match:
        raise RuntimeError(f'Cannot find <section id="{section_id}">')
    start = start_match.start()

    # Sections in this demo are top-level siblings. End at the next top-level section or before </main>.
    next_match = re.search(r'<section\s+id=["\'][^"\']+["\'][^>]*>', html[start_match.end():], flags=re.I)
    if next_match:
        end = start_match.end() + next_match.start()
    else:
        main_end = html.find('</main>', start_match.end())
        if main_end == -1:
            raise RuntimeError(f'Cannot find end of section {section_id}: no next section and no </main>')
        end = main_end
    return start, end


def move_trends_before_model(html: str) -> tuple[str, bool]:
    model_start, model_end = section_bounds(html, 'model')
    trends_start, trends_end = section_bounds(html, 'trends')

    if trends_start < model_start:
        return html, False

    before = html[:model_start]
    model_block = html[model_start:model_end]
    middle = html[model_end:trends_start]
    trends_block = html[trends_start:trends_end]
    after = html[trends_end:]

    # Keep one clean separator. The previous middle spacing is preserved after the moved model block.
    new_html = before + trends_block.rstrip() + "\n\n" + model_block.rstrip() + middle + after
    return new_html, True


def move_nav_trends_before_model(html: str) -> tuple[str, bool]:
    # Swap whole anchor tags if href="#model" appears before href="#trends".
    a_model = re.search(r'<a\b(?=[^>]*href=["\']#model["\'])[^>]*>.*?</a>', html, flags=re.I | re.S)
    a_trends = re.search(r'<a\b(?=[^>]*href=["\']#trends["\'])[^>]*>.*?</a>', html, flags=re.I | re.S)
    if not a_model or not a_trends:
        return html, False
    if a_trends.start() < a_model.start():
        return html, False

    model_tag = a_model.group(0)
    trends_tag = a_trends.group(0)
    # Recompute safely by positions.
    before = html[:a_model.start()]
    between = html[a_model.end():a_trends.start()]
    after = html[a_trends.end():]
    new_html = before + trends_tag + between + model_tag + after
    return new_html, True


def update_script_versions(html: str, version: str) -> str:
    # Replace existing v=... for known app scripts, or append ?v=version.
    def repl(match: re.Match[str]) -> str:
        src = match.group(1)
        if '?v=' in src:
            src = re.sub(r'\?v=[^"\']*', f'?v={version}', src)
        elif '&v=' in src:
            src = re.sub(r'&v=[^"\']*', f'&v={version}', src)
        else:
            src = src + f'?v={version}'
        return f'src="{src}"'

    return re.sub(
        r'src="([^"\']*(?:app|demo_data)\.js(?:\?v=[^"\']*)?)"',
        repl,
        html,
        flags=re.I,
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--docs-dir', required=True, help='Path to the docs folder')
    parser.add_argument('--version', default='10', help='Cache-busting version string')
    args = parser.parse_args()

    docs = Path(args.docs_dir).resolve()
    index = docs / 'index.html'
    if not index.exists():
        raise SystemExit(f'Cannot find {index}')

    html = index.read_text(encoding='utf-8')

    html, moved_section = move_trends_before_model(html)
    html, moved_nav = move_nav_trends_before_model(html)
    html = update_script_versions(html, args.version)

    # Write UTF-8 without BOM.
    index.write_text(html, encoding='utf-8')

    stamp = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    (docs / 'build_version.txt').write_text(
        f'Build version: {stamp}\nOrder: trends before model\nVersion: {args.version}\n',
        encoding='utf-8',
    )

    print(f'Updated: {index}')
    print(f'Moved section: {moved_section}')
    print(f'Moved nav link: {moved_nav}')
    print('Expected order: validity -> pipeline -> trends -> model -> evidence -> topics -> reproducibility')


if __name__ == '__main__':
    main()
