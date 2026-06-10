import csv
import json
from pathlib import Path

ROOT = Path("docs")

ALIASES = {
    "Backdoor attacks attack defense": "backdoor attacks / defenses",
    "backdoor attacks attack defense": "backdoor attacks / defenses",
    "Backdoor attacks attack": "backdoor attacks / defenses",
    "backdoor attacks attack": "backdoor attacks / defenses",
}

def fix_string(s: str) -> str:
    return ALIASES.get(s, s)

def walk(x):
    if isinstance(x, dict):
        return {k: walk(v) for k, v in x.items()}
    if isinstance(x, list):
        return [walk(v) for v in x]
    if isinstance(x, str):
        return fix_string(x)
    return x

# Patch JSON files
for path in list((ROOT / "data").glob("*.json")):
    data = json.loads(path.read_text(encoding="utf-8"))
    fixed = walk(data)
    path.write_text(json.dumps(fixed, ensure_ascii=False, indent=2), encoding="utf-8")

# Patch CSV files
for path in list((ROOT / "downloads").glob("*.csv")) + list((ROOT / "data").glob("*.csv")):
    rows = []
    changed = False
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f)
        for row in reader:
            new_row = [fix_string(cell) for cell in row]
            if new_row != row:
                changed = True
            rows.append(new_row)

    if changed:
        with path.open("w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            writer.writerows(rows)

print("Patched backdoor label.")
