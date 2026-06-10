#!/usr/bin/env python3
"""
Restore / add confidence bands around the linear-fit line in the GitHub Pages demo.

What it does:
1. Reads docs/data/evidence.json
2. Computes an OLS mean-prediction confidence band for endpoint and transition evidence
3. Writes fit.x_grid, fit.y_hat, fit.ci_low, fit.ci_high back to evidence.json
4. Patches docs/assets/js/app.js so the band is rendered under the points with visible bounds

Usage, from repo root:
  py scripts/restore_evidence_confidence_band.py --docs-dir D:\\NeurIPS_Trend_Project\\Data_mining\\docs
"""

from __future__ import annotations

import argparse
import json
import math
import re
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional


def finite_float(x: Any) -> Optional[float]:
    try:
        v = float(x)
    except (TypeError, ValueError):
        return None
    if not math.isfinite(v):
        return None
    return v


def linspace(lo: float, hi: float, n: int = 120) -> List[float]:
    if n <= 1 or lo == hi:
        return [lo]
    step = (hi - lo) / (n - 1)
    return [lo + i * step for i in range(n)]


def compute_fit_band(points: Iterable[Dict[str, Any]], grid_n: int = 120) -> Optional[Dict[str, Any]]:
    """Compute simple OLS y ~ x with an approximate 95% mean-prediction CI."""
    xs: List[float] = []
    ys: List[float] = []

    for p in points:
        x = finite_float(p.get("x"))
        y = finite_float(p.get("y"))
        if x is not None and y is not None:
            xs.append(x)
            ys.append(y)

    n = len(xs)
    if n < 3:
        return None

    xbar = sum(xs) / n
    ybar = sum(ys) / n
    sxx = sum((x - xbar) ** 2 for x in xs)
    if sxx <= 0:
        return None

    sxy = sum((x - xbar) * (y - ybar) for x, y in zip(xs, ys))
    slope = sxy / sxx
    intercept = ybar - slope * xbar

    residuals = [y - (intercept + slope * x) for x, y in zip(xs, ys)]
    dof = max(n - 2, 1)
    mse = sum(r * r for r in residuals) / dof

    # Use 1.96 as a stable approximation. With n=56/112 this is effectively the same for demo purposes.
    tcrit = 1.96

    # Pad grid very slightly so the band spans the chart better.
    lo = min(xs)
    hi = max(xs)
    pad = (hi - lo) * 0.02 if hi > lo else 0.1
    grid = linspace(lo - pad, hi + pad, grid_n)

    y_hat: List[float] = []
    ci_low: List[float] = []
    ci_high: List[float] = []

    for x0 in grid:
        yh = intercept + slope * x0
        se_mean = math.sqrt(max(0.0, mse * (1.0 / n + ((x0 - xbar) ** 2) / sxx)))
        lo_ci = yh - tcrit * se_mean
        hi_ci = yh + tcrit * se_mean
        y_hat.append(yh)
        ci_low.append(lo_ci)
        ci_high.append(hi_ci)

    return {
        "x_grid": grid,
        "y_hat": y_hat,
        "ci_low": ci_low,
        "ci_high": ci_high,
        "slope": slope,
        "intercept": intercept,
        "ci_method": "OLS mean-prediction 95% confidence band, computed from displayed points",
        "n_points": n,
    }


def sanitize_for_json(obj: Any) -> Any:
    """Replace NaN/Inf by None recursively so browser JSON.parse never fails."""
    if isinstance(obj, dict):
        return {k: sanitize_for_json(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [sanitize_for_json(v) for v in obj]
    if isinstance(obj, float):
        return obj if math.isfinite(obj) else None
    return obj


def patch_evidence_json(docs_dir: Path) -> None:
    evidence_path = docs_dir / "data" / "evidence.json"
    if not evidence_path.exists():
        raise FileNotFoundError(f"Missing evidence.json: {evidence_path}")

    data = json.loads(evidence_path.read_text(encoding="utf-8"))
    patched = []

    for mode in ("endpoint", "transition"):
        ev = data.get(mode)
        if not isinstance(ev, dict):
            continue
        points = ev.get("points") or []
        fit = compute_fit_band(points)
        if fit:
            old_fit = ev.get("fit") if isinstance(ev.get("fit"), dict) else {}
            # Preserve any extra fields from old fit, but overwrite the rendered band arrays.
            old_fit.update(fit)
            ev["fit"] = old_fit
            ev["has_confidence_band"] = True
            patched.append((mode, fit["n_points"], fit["slope"]))
        else:
            ev["has_confidence_band"] = False

    evidence_path.write_text(
        json.dumps(sanitize_for_json(data), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"Updated confidence bands in: {evidence_path}")
    for mode, n, slope in patched:
        print(f"  {mode}: n={n}, slope={slope:.6g}")


RENDER_EVIDENCE_FUNCTION = r'''function renderEvidence(){
  const mode = state.evidenceMode;
  const ev = state.evidence[mode];
  const pts = ev.points || [];
  const data = [];

  // Draw the confidence band first so points and the fit line remain visually dominant.
  if(ev.fit && Array.isArray(ev.fit.x_grid) && Array.isArray(ev.fit.ci_high) && Array.isArray(ev.fit.ci_low)){
    data.push({
      x: ev.fit.x_grid,
      y: ev.fit.ci_low,
      type: 'scatter',
      mode: 'lines',
      line: {width: 1, color: 'rgba(37,99,235,.22)', dash: 'dot'},
      showlegend: false,
      hoverinfo: 'skip',
      name: '95% CI lower'
    });
    data.push({
      x: ev.fit.x_grid,
      y: ev.fit.ci_high,
      type: 'scatter',
      mode: 'lines',
      fill: 'tonexty',
      fillcolor: 'rgba(37,99,235,.16)',
      line: {width: 1, color: 'rgba(37,99,235,.22)', dash: 'dot'},
      name: '95% confidence band',
      hoverinfo: 'skip'
    });
  }

  if(mode === 'transition'){
    for(const tr of ['2023→2024','2024→2025']){
      const subset = pts.filter(p=>p.transition===tr);
      data.push(traceFor(subset, tr, tr==='2023→2024'?'circle':'triangle-up'));
    }
  } else {
    data.push(traceFor(pts, 'Topics', 'circle'));
  }

  if(ev.fit && Array.isArray(ev.fit.x_grid) && Array.isArray(ev.fit.y_hat)){
    data.push({
      x: ev.fit.x_grid,
      y: ev.fit.y_hat,
      type: 'scatter',
      mode: 'lines',
      line: {color:'#111827',width:2.5,dash:'dash'},
      name:'Linear fit'
    });
  }

  const xTitle = mode === 'endpoint' ? 'Accepted-paper share change, 2025−2023 (percentage points)' : 'Adjacent-year accepted-paper share change (percentage points)';
  Plotly.newPlot('evidenceChart', data, {
    margin:{l:70,r:30,t:25,b:70},
    xaxis:{title:xTitle,zeroline:true,zerolinewidth:1,zerolinecolor:'#94a3b8'},
    yaxis:{title:'Year-normalized reviewer rating',zeroline:true,zerolinewidth:1,zerolinecolor:'#94a3b8'},
    legend:{orientation:'h',y:-.2}, hovermode:'closest'
  }, {displayModeBar:false, responsive:true});
  $('evidenceChart').on('plotly_click', e=>{
    const id=e.points?.[0]?.customdata?.[0];
    if(id!==undefined){state.selectedTopicId=Number(id); renderInspector(state.selectedTopicId); $('topics').scrollIntoView({behavior:'smooth'});}
  });
  renderEvidenceStats();
}
'''


def patch_app_js(docs_dir: Path) -> None:
    app_path = docs_dir / "assets" / "js" / "app.js"
    if not app_path.exists():
        raise FileNotFoundError(f"Missing app.js: {app_path}")
    text = app_path.read_text(encoding="utf-8")

    pattern = re.compile(r"function renderEvidence\(\)\{.*?\n\}\n\s*function traceFor", re.DOTALL)
    replacement = RENDER_EVIDENCE_FUNCTION + "\nfunction traceFor"
    new_text, n = pattern.subn(replacement, text, count=1)
    if n != 1:
        print("Warning: could not replace renderEvidence(); app.js may already be patched or has a different structure.")
    else:
        app_path.write_text(new_text, encoding="utf-8")
        print(f"Patched evidence chart renderer in: {app_path}")


def bump_index_cache(docs_dir: Path, version: str) -> None:
    index_path = docs_dir / "index.html"
    if not index_path.exists():
        return
    html = index_path.read_text(encoding="utf-8")
    html = re.sub(r"assets/js/app\.js\?v=[^\"']+", f"assets/js/app.js?v={version}", html)
    html = re.sub(r"assets/js/app\.js(?!\?v=)", f"assets/js/app.js?v={version}", html)
    index_path.write_text(html, encoding="utf-8")
    print(f"Bumped app.js cache version in: {index_path}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--docs-dir", required=True, help="Path to the docs folder in the GitHub Pages repo")
    ap.add_argument("--version", default="bandfix", help="Cache-busting version tag for app.js")
    args = ap.parse_args()

    docs_dir = Path(args.docs_dir).expanduser().resolve()
    if not docs_dir.exists():
        raise FileNotFoundError(f"docs-dir not found: {docs_dir}")

    patch_evidence_json(docs_dir)
    patch_app_js(docs_dir)
    bump_index_cache(docs_dir, args.version)
    print("Done. Test locally, then commit docs/data/evidence.json, docs/assets/js/app.js, and docs/index.html.")


if __name__ == "__main__":
    main()
