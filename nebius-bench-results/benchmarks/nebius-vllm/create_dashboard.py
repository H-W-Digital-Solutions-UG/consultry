#!/usr/bin/env python3
"""Build a self-contained HTML dashboard for the Nebius vLLM benchmark results."""
from __future__ import annotations

import csv
import html
import json
import math
import re
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[2]
RESULTS_ROOT = REPO_ROOT / "nebius-bench-results"
DENSE_ROOT = RESULTS_ROOT / "nebius-bench-results-qwen36_27b-dense"
MOE_ROOT = RESULTS_ROOT / "moe"
OUT_DIR = RESULTS_ROOT / "dashboard"
OUT_HTML = OUT_DIR / "index.html"

RUNS = {
    "dense": {
        "label": "Dense 27B FP8",
        "short_label": "Dense",
        "model": "Qwen/Qwen3.6-27B-FP8",
        "root": DENSE_ROOT,
        "csv": DENSE_ROOT / "speed_bench_metrics.csv",
        "legacy_csv": DENSE_ROOT / "speed_bench_capacity.csv",
        "color": "#3157d5",
    },
    "moe": {
        "label": "MoE 35B-A3B FP8",
        "short_label": "MoE",
        "model": "Qwen/Qwen3.6-35B-A3B-FP8",
        "root": MOE_ROOT,
        "csv": MOE_ROOT / "speed_bench_metrics_moe.csv",
        "legacy_csv": MOE_ROOT / "speed_bench_capacity_moe.csv",
        "color": "#0d956b",
    },
}

WORKLOAD_ORDER = [
    "throughput_1k",
    "throughput_2k",
    "throughput_8k",
    "throughput_16k",
    "throughput_32k",
    "cache65k",
    "cache131k",
    "cache256k",
]

WORKLOAD_LABELS = {
    "throughput_1k": "SPEED 1k",
    "throughput_2k": "SPEED 2k",
    "throughput_8k": "SPEED 8k",
    "throughput_16k": "SPEED 16k",
    "throughput_32k": "SPEED 32k",
    "cache65k": "Cache 65k",
    "cache131k": "Cache 131k",
    "cache256k": "Cache 256k",
}

PLANNING_ASSUMPTIONS = {
    "report_a_safe": 20,
    "report_break_even_seats": 153,
    "seat_revenue_eur": 79,
    "dev_attach_rate": 0.20,
    "fixed_monthly_cost_eur": 8857,
    "committed_h200_monthly_eur": 1418,
    "burst_65_window_eur": 132,
    "burst_30_window_eur": 197,
    "burst_25_window_eur": 66,
    "dev_gpu_window_eur": 394,
    "dev_slots_per_h200": 10,
}

MIX_SCENARIOS = {
    "Short-chat heavy": {
        "description": "Mostly normal chat and short consulting context.",
        "weights": {"throughput_1k": 0.65, "throughput_2k": 0.25, "throughput_8k": 0.08, "throughput_16k": 0.02},
    },
    "Reasonable mixed": {
        "description": "Balanced daily consulting traffic with some RAG and agent context.",
        "weights": {"throughput_1k": 0.50, "throughput_2k": 0.25, "throughput_8k": 0.15, "throughput_16k": 0.10},
    },
    "Long-context heavy": {
        "description": "Document-heavy usage where 8k and 16k prompts are common.",
        "weights": {"throughput_1k": 0.35, "throughput_2k": 0.25, "throughput_8k": 0.25, "throughput_16k": 0.15},
    },
    "Includes 32k lane": {
        "description": "Normal mixed traffic with a small amount of 32k interactive context.",
        "weights": {"throughput_1k": 0.50, "throughput_2k": 0.25, "throughput_8k": 0.15, "throughput_16k": 0.05, "throughput_32k": 0.05},
    },
}


def as_number(value: str) -> Any:
    if value == "":
        return None
    try:
        if "." not in value and "e" not in value.lower():
            return int(value)
        return float(value)
    except ValueError:
        return value


def resolve_json_path(run_key: str, source_json: str) -> Path:
    source = Path(source_json)
    name = source.name
    root = RUNS[run_key]["root"]
    return root / "results" / name


def average_output_len(detail: dict[str, Any], fallback: Any) -> float:
    completed = detail.get("completed") or 0
    output_tokens = detail.get("total_output_tokens") or 0
    if completed and output_tokens:
        return round(output_tokens / completed, 1)
    try:
        return float(fallback or 0)
    except (TypeError, ValueError):
        return 0.0


def load_rows(run_key: str) -> list[dict[str, Any]]:
    run = RUNS[run_key]
    csv_path = run["csv"]
    if not csv_path.exists():
        csv_path = run["legacy_csv"]
    if not csv_path.exists():
        raise FileNotFoundError(csv_path)

    rows: list[dict[str, Any]] = []
    with csv_path.open(newline="") as f:
        for raw in csv.DictReader(f):
            row = {k: as_number(v) for k, v in raw.items()}
            detail_path = resolve_json_path(run_key, str(raw["source_json"]))
            detail: dict[str, Any] = {}
            if detail_path.exists():
                with detail_path.open() as jf:
                    detail = json.load(jf)

            failed = int(detail.get("failed") or 0)
            num_prompts = int(detail.get("num_prompts") or row.get("successful_requests") or 0)
            completed = int(detail.get("completed") or row.get("successful_requests") or 0)
            success_rate = row.get("success_rate")
            if success_rate is None:
                success_rate = completed / max(num_prompts, 1)
            error_samples = detail.get("errors") or []
            nonempty_errors = [str(e) for e in error_samples if str(e).strip()]

            row.update(
                {
                    "run_key": run_key,
                    "run_label": run["label"],
                    "run_short_label": run["short_label"],
                    "model": run["model"],
                    "color": run["color"],
                    "workload_label": WORKLOAD_LABELS.get(str(row["subset"]), str(row["subset"])),
                    "is_speed": str(row["subset"]).startswith("throughput_"),
                    "detail_json": str(detail_path.relative_to(REPO_ROOT)),
                    "failed_requests": failed,
                    "num_prompts": num_prompts,
                    "completed_requests": completed,
                    "success_rate": success_rate,
                    "average_output_len": average_output_len(detail, row.get("output_len")),
                    "has_failures": failed > 0,
                    "error_sample": nonempty_errors[0][:240] if nonempty_errors else "",
                }
            )
            rows.append(row)
    return rows


def capacity_by_workload(rows: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    summary: dict[str, dict[str, Any]] = {}
    for subset in WORKLOAD_ORDER:
        grp = sorted(
            [r for r in rows if r["subset"] == subset],
            key=lambda r: int(r["concurrency"]),
        )
        successful = [r for r in grp if int(r.get("completed_requests") or r.get("successful_requests") or 0) > 0]
        best_output = max(successful, key=lambda r: float(r.get("output_tps") or 0), default=None)
        best_request = max(successful, key=lambda r: float(r.get("request_throughput_rps") or 0), default=None)
        summary[subset] = {
            "capacity_concurrency": int(best_output["concurrency"]) if best_output else 0,
            "capacity_output_tps": float(best_output["output_tps"]) if best_output else 0.0,
            "capacity_first_token_p95_ms": float(best_output["ttft_p95_ms"]) if best_output else 0.0,
            "best_output_concurrency": int(best_output["concurrency"]) if best_output else 0,
            "best_output_tps": float(best_output["output_tps"]) if best_output else 0.0,
            "best_request_concurrency": int(best_request["concurrency"]) if best_request else 0,
            "best_request_rps": float(best_request["request_throughput_rps"]) if best_request else 0.0,
        }
    return summary


def parse_key_values(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    if not path.exists():
        return values
    for line in path.read_text(errors="replace").splitlines():
        if "=" in line and not line.startswith("==="):
            key, value = line.split("=", 1)
            values[key.strip()] = value.strip()
    return values


def parse_nvidia_smi_memory(path: Path) -> dict[str, Any]:
    text = path.read_text(errors="replace") if path.exists() else ""
    match = re.search(r"(\d+)MiB\s*/\s*(\d+)MiB", text)
    if not match:
        return {}
    used, total = map(int, match.groups())
    return {
        "used_mib": used,
        "total_mib": total,
        "used_gib": round(used / 1024, 1),
        "total_gib": round(total / 1024, 1),
        "pct": round(used / total * 100, 1),
    }


def effective_mixed_sessions(caps: dict[str, dict[str, Any]], weights: dict[str, float]) -> dict[str, Any]:
    missing = [
        subset
        for subset, weight in weights.items()
        if weight > 0 and float(caps.get(subset, {}).get("capacity_output_tps") or 0) <= 0
    ]
    denominator = 0.0
    for subset, weight in weights.items():
        output_tps = float(caps.get(subset, {}).get("capacity_output_tps") or 0)
        if output_tps > 0:
            denominator += weight / output_tps
    mixed_output_tps = 1 / denominator if denominator else 0.0
    return {
        "effective_sessions": round(mixed_output_tps, 1),
        "contractable": not missing,
        "zero_capacity_workloads": missing,
    }


def monthly_shared_profit(seats: int, a_safe: float) -> float:
    p = PLANNING_ASSUMPTIONS
    revenue = p["seat_revenue_eur"] * seats
    dev_seats = p["dev_attach_rate"] * seats
    committed = max(1, math.ceil((0.05 * seats) / (0.90 * a_safe)))
    burst_65 = max(0, math.ceil((0.65 * seats) / a_safe) - committed)
    burst_30 = max(0, math.ceil((0.30 * seats) / a_safe) - committed)
    burst_25 = max(0, math.ceil((0.25 * seats) / a_safe) - committed)
    dev_gpu = math.ceil((0.455 * dev_seats) / p["dev_slots_per_h200"])
    cost = (
        p["fixed_monthly_cost_eur"]
        + committed * p["committed_h200_monthly_eur"]
        + burst_65 * p["burst_65_window_eur"]
        + burst_30 * p["burst_30_window_eur"]
        + burst_25 * p["burst_25_window_eur"]
        + dev_gpu * p["dev_gpu_window_eur"]
    )
    return revenue - cost


def break_even_seats(a_safe: float, max_seats: int = 10_000) -> int | None:
    if a_safe <= 0:
        return None
    for seats in range(1, max_seats + 1):
        if monthly_shared_profit(seats, a_safe) >= 0:
            return seats
    return None


def estimate_comparison(capacity: dict[str, dict[str, dict[str, Any]]]) -> list[dict[str, Any]]:
    rows = []
    for scenario, spec in MIX_SCENARIOS.items():
        row = {
            "scenario": scenario,
            "description": spec["description"],
            "weights": spec["weights"],
        }
        for run_key in RUNS:
            result = effective_mixed_sessions(capacity[run_key], spec["weights"])
            sessions = float(result["effective_sessions"])
            row[run_key] = {
                **result,
                "vs_report": 0,
                "break_even_seats": None,
            }
        rows.append(row)
    return rows


def build_payload() -> dict[str, Any]:
    rows = []
    for key in RUNS:
        rows.extend(load_rows(key))

    rows.sort(
        key=lambda r: (
            WORKLOAD_ORDER.index(str(r["subset"])) if str(r["subset"]) in WORKLOAD_ORDER else 99,
            int(r["concurrency"]),
            0 if r["run_key"] == "dense" else 1,
        )
    )

    by_run = {key: capacity_by_workload([r for r in rows if r["run_key"] == key]) for key in RUNS}
    manifest = parse_key_values(MOE_ROOT / "benchmark_manifest.txt")
    wallclock = parse_key_values(MOE_ROOT / "run_sweep_wallclock.txt")

    dense_failures = [
        r
        for r in rows
        if r["run_key"] == "dense" and int(r.get("failed_requests") or 0) > 0
    ]
    moe_failures = [
        r for r in rows if r["run_key"] == "moe" and int(r.get("failed_requests") or 0) > 0
    ]

    estimates = estimate_comparison(by_run)

    return {
        "generated_from": str(RESULTS_ROOT.relative_to(REPO_ROOT)),
        "runs": {
            key: {
                "label": value["label"],
                "short_label": value["short_label"],
                "model": value["model"],
                "color": value["color"],
            }
            for key, value in RUNS.items()
        },
        "workload_order": WORKLOAD_ORDER,
        "workload_labels": WORKLOAD_LABELS,
        "rows": rows,
        "capacity": by_run,
        "metadata": {
            "planning_assumptions": PLANNING_ASSUMPTIONS,
            "estimate_comparison": estimates,
            "moe_manifest": manifest,
            "moe_wallclock": wallclock,
            "moe_idle_gpu": parse_nvidia_smi_memory(MOE_ROOT / "nvidia-smi_idle_before_sweep.txt"),
            "moe_peak_gpu": parse_nvidia_smi_memory(MOE_ROOT / "nvidia-smi_peak_during_sweep.txt"),
            "dense_failures": dense_failures,
            "moe_failures": moe_failures,
        },
    }


def render_html(payload: dict[str, Any]) -> str:
    data_json = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    title = "Nebius H200 vLLM Benchmark Dashboard"
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)}</title>
  <style>
    :root {{
      color-scheme: light;
      --bg: #f6f7f9;
      --surface: #ffffff;
      --surface-2: #eef2f5;
      --line: #d9dee6;
      --line-strong: #b8c1cc;
      --text: #1e242c;
      --muted: #66707d;
      --dense: #3157d5;
      --dense-soft: #dfe6ff;
      --moe: #0d956b;
      --moe-soft: #dcf4ec;
      --warn: #c86b12;
      --bad: #b42318;
      --good: #0f7b58;
      --shadow: 0 16px 40px rgba(25, 35, 55, 0.08);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      background: var(--bg);
      color: var(--text);
    }}
    .shell {{
      width: min(1500px, calc(100% - 32px));
      margin: 0 auto;
      padding: 24px 0 48px;
    }}
    .topbar {{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
      padding: 22px 0 18px;
      border-bottom: 1px solid var(--line);
    }}
    h1, h2, h3, p {{ margin: 0; }}
    h1 {{
      font-size: 30px;
      line-height: 1.15;
      font-weight: 740;
    }}
    h2 {{
      font-size: 18px;
      line-height: 1.2;
      font-weight: 720;
    }}
    h3 {{
      font-size: 14px;
      line-height: 1.25;
      font-weight: 720;
    }}
    .subtitle {{
      max-width: 900px;
      color: var(--muted);
      margin-top: 8px;
      font-size: 14px;
      line-height: 1.5;
    }}
    .pills {{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;
      min-width: 320px;
    }}
    .pill {{
      display: inline-flex;
      align-items: center;
      min-height: 30px;
      padding: 6px 10px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--surface);
      color: #364151;
      font-size: 12px;
      white-space: nowrap;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 14px;
      margin-top: 16px;
    }}
    .panel {{
      grid-column: span 6;
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      min-width: 0;
    }}
    .panel.wide {{ grid-column: 1 / -1; }}
    .panel.third {{ grid-column: span 4; }}
    #kpis .panel.third {{ grid-column: span 3; }}
    .panel-header {{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      padding: 16px 18px 10px;
      border-bottom: 1px solid var(--line);
    }}
    .panel-body {{ padding: 16px 18px 18px; }}
    .muted {{ color: var(--muted); }}
    .small {{ font-size: 12px; line-height: 1.45; }}
    .kpi {{
      display: grid;
      gap: 8px;
      min-height: 132px;
      padding: 16px;
    }}
    .kpi-title {{
      color: var(--muted);
      font-size: 12px;
      font-weight: 680;
      text-transform: uppercase;
    }}
    .kpi-value {{
      font-size: 28px;
      line-height: 1.1;
      font-weight: 780;
    }}
    .kpi-pair {{
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }}
    .model-chip {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 28px;
      padding: 5px 9px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: #fff;
      font-size: 12px;
      font-weight: 640;
    }}
    .model-chip::before {{
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: currentColor;
    }}
    .model-chip.dense {{ color: var(--dense); }}
    .model-chip.moe {{ color: var(--moe); }}
    .frontier {{
      display: grid;
      grid-template-columns: repeat(8, minmax(132px, 1fr));
      gap: 10px;
      overflow-x: auto;
      padding-bottom: 2px;
    }}
    .frontier-step {{
      position: relative;
      min-height: 142px;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: linear-gradient(180deg, #fff, #f7f9fb);
    }}
    .frontier-step:not(:last-child)::after {{
      content: "";
      position: absolute;
      top: 50%;
      right: -10px;
      width: 10px;
      border-top: 1px solid var(--line-strong);
    }}
    .frontier-context {{
      font-weight: 760;
      font-size: 13px;
      margin-bottom: 10px;
    }}
    .frontier-row {{
      display: flex;
      justify-content: space-between;
      gap: 8px;
      font-size: 12px;
      margin-top: 8px;
    }}
    .frontier-row b {{ font-size: 14px; }}
    .lift {{
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid var(--line);
      color: var(--good);
      font-weight: 720;
      font-size: 12px;
    }}
    .chart-wrap {{
      min-height: 360px;
      width: 100%;
    }}
    svg.chart {{
      display: block;
      width: 100%;
      height: 360px;
      overflow: visible;
    }}
    .legend {{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      flex-wrap: wrap;
    }}
    .legend-item {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--muted);
      font-size: 12px;
    }}
    .swatch {{
      width: 10px;
      height: 10px;
      border-radius: 2px;
      background: var(--dense);
    }}
    .swatch.moe {{ background: var(--moe); }}
    .controls {{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
    }}
    .segmented {{
      display: inline-flex;
      flex-wrap: wrap;
      gap: 2px;
      padding: 3px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface-2);
    }}
    button.segment {{
      min-height: 30px;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: #425066;
      padding: 6px 9px;
      font: inherit;
      font-size: 12px;
      font-weight: 650;
      cursor: pointer;
    }}
    button.segment.active {{
      background: #fff;
      color: var(--text);
      box-shadow: 0 1px 2px rgba(10, 20, 30, 0.08);
    }}
    .table-tools {{
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
      padding: 14px 18px;
      border-bottom: 1px solid var(--line);
    }}
    input[type="search"] {{
      min-width: 240px;
      min-height: 34px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 7px 10px;
      background: #fff;
      color: var(--text);
      font: inherit;
      font-size: 13px;
    }}
    .table-scroll {{
      max-height: 560px;
      overflow: auto;
    }}
    table {{
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      font-size: 12px;
      min-width: 1120px;
    }}
    th, td {{
      text-align: right;
      padding: 9px 10px;
      border-bottom: 1px solid var(--line);
      white-space: nowrap;
    }}
    th:first-child, td:first-child,
    th:nth-child(2), td:nth-child(2) {{
      text-align: left;
    }}
    thead th {{
      position: sticky;
      top: 0;
      z-index: 2;
      background: #f8fafc;
      color: #526071;
      font-weight: 720;
      border-bottom: 1px solid var(--line-strong);
    }}
    tbody tr:hover td {{ background: #f9fbfc; }}
    .status {{
      display: inline-flex;
      align-items: center;
      min-height: 23px;
      padding: 4px 7px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 720;
      border: 1px solid transparent;
    }}
    .status.pass {{
      color: var(--good);
      background: #e5f5ef;
      border-color: #b8e1d2;
    }}
    .status.fail {{
      color: var(--bad);
      background: #fde8e5;
      border-color: #fac5be;
    }}
    .note-list {{
      display: grid;
      gap: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
    }}
    .note-list li {{
      padding: 10px 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #fff;
      line-height: 1.45;
      font-size: 13px;
    }}
    .analysis-grid {{
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 16px;
    }}
    .conclusion-lead {{
      font-size: 17px;
      line-height: 1.45;
      font-weight: 660;
      max-width: 980px;
    }}
    .insight-grid {{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      margin-top: 14px;
    }}
    .insight {{
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #fff;
      padding: 12px;
      min-height: 126px;
    }}
    .insight strong {{
      display: block;
      font-size: 13px;
      margin-bottom: 7px;
    }}
    .insight p {{
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
    }}
    .estimate-table {{
      width: 100%;
      min-width: 0;
      border-collapse: separate;
      border-spacing: 0;
      font-size: 12px;
    }}
    .estimate-table th,
    .estimate-table td {{
      white-space: normal;
      text-align: left;
      vertical-align: top;
      padding: 9px 10px;
    }}
    .estimate-table td:not(:first-child),
    .estimate-table th:not(:first-child) {{
      text-align: right;
    }}
    .estimate-table .scenario-cell {{
      min-width: 165px;
    }}
    .estimate-table .subline {{
      color: var(--muted);
      display: block;
      font-size: 11px;
      line-height: 1.35;
      margin-top: 3px;
    }}
    .decision-list {{
      display: grid;
      gap: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
    }}
    .decision-list li {{
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #fff;
      padding: 11px 12px;
      font-size: 13px;
      line-height: 1.45;
    }}
    .decision-list b {{
      display: block;
      margin-bottom: 4px;
    }}
    .axis text, .tick text {{
      fill: #6b7583;
      font-size: 11px;
    }}
    .axis line, .axis path, .gridline {{
      stroke: #d8dee7;
      stroke-width: 1;
    }}
    .target-line {{
      stroke: var(--warn);
      stroke-dasharray: 5 4;
      stroke-width: 1.4;
    }}
    .chart-label {{
      fill: #455164;
      font-size: 11px;
      font-weight: 650;
    }}
    .empty-state {{
      display: grid;
      place-items: center;
      min-height: 240px;
      color: var(--muted);
      border: 1px dashed var(--line-strong);
      border-radius: 8px;
    }}
    @media (max-width: 1000px) {{
      .topbar {{ flex-direction: column; }}
      .pills {{ justify-content: flex-start; min-width: 0; }}
      .panel, .panel.third {{ grid-column: 1 / -1; }}
      #kpis .panel.third {{ grid-column: span 6; }}
      .analysis-grid {{ grid-template-columns: 1fr; }}
      .insight-grid {{ grid-template-columns: 1fr; }}
      .frontier {{ grid-template-columns: repeat(4, minmax(132px, 1fr)); }}
    }}
    @media (max-width: 640px) {{
      .shell {{ width: min(100% - 20px, 1500px); padding-top: 12px; }}
      h1 {{ font-size: 24px; }}
      #kpis .panel.third {{ grid-column: 1 / -1; }}
      .frontier {{ grid-template-columns: repeat(2, minmax(132px, 1fr)); }}
      .chart-wrap, svg.chart {{ height: 330px; min-height: 330px; }}
      input[type="search"] {{ width: 100%; min-width: 0; }}
    }}
  </style>
</head>
<body>
  <main class="shell">
    <header class="topbar">
      <div>
        <h1>Nebius H200 vLLM Benchmark</h1>
        <p class="subtitle">Qwen3.6 dense FP8 versus Qwen3.6 MoE FP8 on one NVIDIA H200. The dashboard now uses raw vLLM serving metrics: peak output-token throughput, request throughput, first-token latency, per-token latency, end-to-end latency, and failures.</p>
      </div>
      <div class="pills" id="meta-pills"></div>
    </header>

    <section class="grid" id="kpis"></section>

    <section class="grid">
      <article class="panel wide">
        <div class="panel-header">
          <div>
            <h2>Executive Comparison</h2>
            <p class="muted small">What the benchmark means for serving architecture and pricing assumptions.</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="analysis-grid">
            <div>
              <p class="conclusion-lead" id="executive-lead"></p>
              <div class="insight-grid" id="executive-insights"></div>
            </div>
            <ul class="decision-list" id="decision-list"></ul>
          </div>
        </div>
      </article>

      <article class="panel wide">
        <div class="panel-header">
          <div>
            <h2>Estimate Check</h2>
            <p class="muted small">The pricing report assumed 20 active mixed-consulting sessions per H200. This table compares that planning variable with a raw peak-output concurrency proxy under several workload mixes.</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="table-scroll">
            <table class="estimate-table">
              <thead>
                <tr>
                  <th>Workload mix</th>
                  <th>Dense mixed tok/s</th>
                  <th>Dense pricing readout</th>
                  <th>MoE mixed tok/s</th>
                  <th>MoE pricing readout</th>
                  <th>Readout</th>
                </tr>
              </thead>
              <tbody id="estimate-table"></tbody>
            </table>
          </div>
        </div>
      </article>

      <article class="panel wide">
        <div class="panel-header">
          <div>
            <h2>Workload Interpretation</h2>
            <p class="muted small">How to map the measured workloads into product lanes.</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="insight-grid" id="workload-interpretation"></div>
        </div>
      </article>

      <article class="panel wide">
        <div class="panel-header">
          <div>
            <h2>Raw Throughput Frontier</h2>
            <p class="muted small">Tested concurrency with the highest measured output-token throughput.</p>
          </div>
          <div class="legend">
            <span class="legend-item"><span class="swatch"></span>Dense 27B FP8</span>
            <span class="legend-item"><span class="swatch moe"></span>MoE 35B-A3B FP8</span>
          </div>
        </div>
        <div class="panel-body">
          <div class="frontier" id="frontier"></div>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h2>Peak-Output Concurrency</h2>
            <p class="muted small">Concurrency at the highest measured generated-token throughput.</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="chart-wrap"><svg class="chart" id="capacity-chart" role="img" aria-label="Capacity bar chart"></svg></div>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h2>Peak Output Throughput</h2>
            <p class="muted small">Generated tokens per second at the peak-output point.</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="chart-wrap"><svg class="chart" id="capacity-output-chart" role="img" aria-label="Output throughput bar chart"></svg></div>
        </div>
      </article>

      <article class="panel wide">
        <div class="panel-header">
          <div>
            <h2>Concurrency Curves</h2>
            <p class="muted small" id="curve-caption"></p>
          </div>
          <div class="controls">
            <div class="segmented" id="workload-tabs"></div>
            <div class="segmented" id="metric-tabs"></div>
          </div>
        </div>
        <div class="panel-body">
          <div class="chart-wrap"><svg class="chart" id="curve-chart" role="img" aria-label="Concurrency curve chart"></svg></div>
        </div>
      </article>

      <article class="panel third">
        <div class="panel-header"><h2>What Changed</h2></div>
        <div class="panel-body">
          <ul class="note-list" id="finding-notes"></ul>
        </div>
      </article>
      <article class="panel third">
        <div class="panel-header"><h2>Run Health</h2></div>
        <div class="panel-body">
          <ul class="note-list" id="health-notes"></ul>
        </div>
      </article>
      <article class="panel third">
        <div class="panel-header"><h2>GPU Snapshot</h2></div>
        <div class="panel-body">
          <ul class="note-list" id="gpu-notes"></ul>
        </div>
      </article>

      <article class="panel wide">
        <div class="panel-header">
          <div>
            <h2>All Benchmark Rows</h2>
            <p class="muted small">Aggregate CSV fields with failure counts from the JSON result files.</p>
          </div>
        </div>
        <div class="table-tools">
          <div class="segmented" id="table-model-tabs"></div>
          <input id="table-search" type="search" placeholder="Filter workload, model, or result file">
        </div>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Workload</th>
                <th>Model</th>
                <th>Input tokens</th>
                <th>Concurrency</th>
                <th>Good requests</th>
                <th>Success rate</th>
                <th>Output tok/s</th>
                <th>First token p95</th>
                <th>Token time p95</th>
                <th>End-to-end p95</th>
                <th>Failed</th>
                <th>Result JSON</th>
              </tr>
            </thead>
            <tbody id="result-table"></tbody>
          </table>
        </div>
      </article>
    </section>
  </main>

  <script id="bench-data" type="application/json">{data_json}</script>
  <script>
    const DATA = JSON.parse(document.getElementById("bench-data").textContent);
    const state = {{
      workload: "throughput_1k",
      metric: "ttft_p95_ms",
      tableModel: "all",
      query: ""
    }};

    const metrics = {{
      ttft_p95_ms: {{ label: "First token p95", unit: "ms", target: null, lowerIsBetter: true }},
      tpot_p95_ms: {{ label: "Token time p95", unit: "ms", target: null, lowerIsBetter: true }},
      output_tps: {{ label: "Output tok/s", unit: "tok/s", target: null, lowerIsBetter: false }},
      request_throughput_rps: {{ label: "Requests/s", unit: "req/s", target: null, lowerIsBetter: false }}
    }};

    const fmt = (n, digits = 0) => {{
      const value = Number(n || 0);
      if (!Number.isFinite(value)) return "0";
      return value.toLocaleString(undefined, {{ maximumFractionDigits: digits, minimumFractionDigits: digits }});
    }};
    const pct = n => `${{fmt(Number(n || 0) * 100, 1)}}%`;
    const byRun = run => DATA.rows.filter(r => r.run_key === run);
    const workloadLabel = subset => DATA.workload_labels[subset] || subset;
    const cap = (run, subset) => DATA.capacity[run][subset] || {{}};
    const capValue = (run, subset, key) => Number((cap(run, subset) || {{}})[key] || 0);
    const liftLabel = (dense, moe) => {{
      if (dense === 0 && moe > 0) return `opens C${{moe}}`;
      if (dense === 0 && moe === 0) return "no data";
      return `${{fmt(moe / dense, 1)}}x peak C`;
    }};

    function escapeHtml(value) {{
      return String(value ?? "").replace(/[&<>"']/g, ch => ({{
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
      }}[ch]));
    }}

    function setupMeta() {{
      const meta = DATA.metadata || {{}};
      const manifest = meta.moe_manifest || {{}};
      const wallclock = meta.moe_wallclock || {{}};
      const peak = meta.moe_peak_gpu || {{}};
      const pills = [
        "1x NVIDIA H200",
        manifest.vllm ? `vLLM ${{manifest.vllm}}` : "vLLM",
        `${{DATA.rows.length}} result rows`,
        wallclock.elapsed_hms ? `MoE sweep ${{wallclock.elapsed_hms}}` : "MoE sweep",
        peak.used_gib ? `Peak GPU ${{peak.used_gib}} GiB` : "GPU captured"
      ];
      document.getElementById("meta-pills").innerHTML = pills.map(p => `<span class="pill">${{escapeHtml(p)}}</span>`).join("");
    }}

    function setupKpis() {{
      const cards = [
        ["SPEED 1k peak C", "throughput_1k"],
        ["SPEED 2k peak C", "throughput_2k"],
        ["SPEED 8k peak C", "throughput_8k"],
        ["Long-cache peak", "cache65k"]
      ].map(([title, subset]) => {{
        const d = capValue("dense", subset, "capacity_concurrency");
        const m = capValue("moe", subset, "capacity_concurrency");
        const out = subset === "cache65k"
          ? `Dense C0 · MoE C${{m}} at 65k`
          : `Dense C${{d}} · MoE C${{m}}`;
        const value = subset === "cache65k" ? "MoE only" : liftLabel(d, m);
        return `
          <article class="panel third">
            <div class="kpi">
              <div class="kpi-title">${{escapeHtml(title)}}</div>
              <div class="kpi-value">${{escapeHtml(value)}}</div>
              <div class="kpi-pair">
                <span class="model-chip dense">Dense</span>
                <span class="model-chip moe">MoE</span>
              </div>
              <p class="muted small">${{escapeHtml(out)}}</p>
            </div>
          </article>`;
      }}).join("");
      document.getElementById("kpis").innerHTML = cards;
    }}

    function setupFrontier() {{
      const html = DATA.workload_order.map(subset => {{
        const d = capValue("dense", subset, "capacity_concurrency");
        const m = capValue("moe", subset, "capacity_concurrency");
        const denseOut = capValue("dense", subset, "capacity_output_tps");
        const moeOut = capValue("moe", subset, "capacity_output_tps");
        return `
          <div class="frontier-step">
            <div class="frontier-context">${{escapeHtml(workloadLabel(subset))}}</div>
            <div class="frontier-row"><span class="model-chip dense">Dense</span><b>C${{d}}</b></div>
            <div class="frontier-row"><span class="model-chip moe">MoE</span><b>C${{m}}</b></div>
            <div class="lift">${{escapeHtml(liftLabel(d, m))}}</div>
            <p class="muted small">${{fmt(denseOut)}} vs ${{fmt(moeOut)}} output tok/s</p>
          </div>`;
      }}).join("");
      document.getElementById("frontier").innerHTML = html;
    }}

    function setupExecutiveComparison() {{
      const report = DATA.metadata.planning_assumptions || {{}};
      const reportSafe = Number(report.report_a_safe || 20);
      const reportBreakEven = Number(report.report_break_even_seats || 153);
      const dense1k = capValue("dense", "throughput_1k", "capacity_concurrency");
      const moe1k = capValue("moe", "throughput_1k", "capacity_concurrency");
      const dense8k = capValue("dense", "throughput_8k", "capacity_concurrency");
      const moe8k = capValue("moe", "throughput_8k", "capacity_concurrency");
      const mixed = (DATA.metadata.estimate_comparison || []).find(r => r.scenario === "Reasonable mixed");
      const denseMixed = mixed?.dense?.effective_sessions || 0;
      const moeMixed = mixed?.moe?.effective_sessions || 0;

      document.getElementById("executive-lead").textContent =
        `The benchmark changes the baseline architecture decision: dense 27B FP8 is the slower serving baseline on this H200, while MoE 35B-A3B FP8 provides much higher raw concurrency and output throughput under the same benchmark shape. The pricing report's ${{reportSafe}} active-sessions-per-H200 assumption should now be treated as a planning proxy, not as a measured benchmark result.`;

      const insights = [
        [
          "Throughput is workload-dependent",
          `Short chat is not the same product as long-context RAG. MoE reaches C${{moe1k}} at 1k but only C${{capValue("moe", "throughput_32k", "capacity_concurrency")}} at 32k.`
        ],
        [
          "Dense breaks the shared-H200 plan",
          `Dense reaches peak-output C${{dense1k}} at 1k and C${{dense8k}} at 8k. A reasonable mixed workload scores around ${{fmt(denseMixed, 1)}} output tok/s under this raw throughput proxy.`
        ],
        [
          "MoE preserves the economics",
          `MoE lands near ${{fmt(moeMixed, 1)}} mixed output tok/s, or ${{fmt(moeMixed / Math.max(denseMixed, 0.001), 1)}}x dense. Convert this to seats only after choosing a product latency policy.`
        ]
      ];
      document.getElementById("executive-insights").innerHTML = insights.map(([title, body]) => `
        <div class="insight">
          <strong>${{escapeHtml(title)}}</strong>
          <p>${{escapeHtml(body)}}</p>
        </div>`).join("");

      const decisions = [
        [
          "Baseline model",
          "Use Qwen3.6-35B-A3B-FP8 MoE as the serving baseline for shared H200 economics. Treat dense 27B FP8 as a low-concurrency reference, not the financial baseline."
        ],
        [
          "Product lanes",
          "Expose 1k-16k as the normal shared lane. Put 32k into a controlled long-context lane, and keep 65k+ as premium, queued, or dedicated capacity."
        ],
        [
          "Conservative caveat",
          "The MoE run used MTP speculative decoding but did not enable prefix caching. Repeated system prompts, tool schemas, and workspace context should make production traffic better than this cold-prefix benchmark."
        ]
      ];
      document.getElementById("decision-list").innerHTML = decisions.map(([title, body]) => `
        <li><b>${{escapeHtml(title)}}</b>${{escapeHtml(body)}}</li>`).join("");
    }}

    function formatBreakEven(value) {{
      if (!value) return "no break-even";
      return `~${{fmt(value)}} seats`;
    }}

    function setupEstimateTable() {{
      const report = DATA.metadata.planning_assumptions || {{}};
      const reportSafe = Number(report.report_a_safe || 20);
      const rows = DATA.metadata.estimate_comparison || [];
      document.getElementById("estimate-table").innerHTML = rows.map(row => {{
        const dense = row.dense || {{}};
        const moe = row.moe || {{}};
        const denseSessions = Number(dense.effective_sessions || 0);
        const moeSessions = Number(moe.effective_sessions || 0);
        const denseContract = dense.contractable !== false;
        const moeContract = moe.contractable !== false;
        const readout = denseContract
          ? `MoE gives ${{fmt(moeSessions / Math.max(denseSessions, 0.001), 1)}}x effective mixed output throughput.`
          : `Dense has no measured peak point for ${{(dense.zero_capacity_workloads || []).map(workloadLabel).join(", ")}}.`;
        return `
          <tr>
            <td class="scenario-cell">
              <b>${{escapeHtml(row.scenario)}}</b>
              <span class="subline">${{escapeHtml(row.description)}}</span>
            </td>
            <td>
              ${{fmt(denseSessions, 1)}}
              <span class="subline">harmonic weighted output tok/s</span>
            </td>
            <td>
              raw metric only
              <span class="subline">choose latency policy before seat mapping</span>
            </td>
            <td>
              ${{fmt(moeSessions, 1)}}
              <span class="subline">harmonic weighted output tok/s</span>
            </td>
            <td>
              raw metric only
              <span class="subline">not an SLA capacity number</span>
            </td>
            <td>${{escapeHtml(readout)}}</td>
          </tr>`;
      }}).join("");
    }}

    function setupWorkloadInterpretation() {{
      const items = [
        [
          "Default shared lane",
          `SPEED 1k and 2k behave like normal chat and lightweight consulting. MoE peaks at C${{capValue("moe", "throughput_1k", "capacity_concurrency")}} and C${{capValue("moe", "throughput_2k", "capacity_concurrency")}}, so this lane is the strongest candidate for shared-seat economics.`
        ],
        [
          "Agentic and RAG lane",
          `8k and 16k are where retrieval, tool context, and document excerpts start to matter. MoE peaks at C${{capValue("moe", "throughput_8k", "capacity_concurrency")}} and C${{capValue("moe", "throughput_16k", "capacity_concurrency")}}; dense peaks much lower.`
        ],
        [
          "Deep-context lane",
          `32k+ should not be treated as normal interactive shared capacity. MoE can do low concurrency; dense is weak in the 32k and cache-stress ranges.`
        ],
        [
          "The bottleneck",
          "The failing metric is mostly first-token time, meaning prompt prefill. Token generation after the first token remains fast enough in most rows."
        ],
        [
          "Optimization path",
          "Enable prefix caching, deduplicate tool schemas and policy text, compress retrieved context, and route 32k+ requests through separate concurrency limits."
        ],
        [
          "What this does not prove",
          "This is a serving benchmark. It does not measure answer quality, hallucination rate, tool success rate, or customer-specific accuracy."
        ]
      ];
      document.getElementById("workload-interpretation").innerHTML = items.map(([title, body]) => `
        <div class="insight">
          <strong>${{escapeHtml(title)}}</strong>
          <p>${{escapeHtml(body)}}</p>
        </div>`).join("");
    }}

    function svgEl(id) {{
      const svg = document.getElementById(id);
      const box = svg.getBoundingClientRect();
      const width = Math.max(640, Math.floor(box.width || 900));
      const height = Math.max(320, Math.floor(box.height || 360));
      svg.setAttribute("viewBox", `0 0 ${{width}} ${{height}}`);
      return {{ svg, width, height }};
    }}

    function drawGroupedBars(id, valueKey, titleFormatter) {{
      const {{ svg, width, height }} = svgEl(id);
      const margin = {{ top: 24, right: 22, bottom: 78, left: 58 }};
      const plotW = width - margin.left - margin.right;
      const plotH = height - margin.top - margin.bottom;
      const items = DATA.workload_order.map(subset => ({{
        subset,
        label: workloadLabel(subset),
        dense: capValue("dense", subset, valueKey),
        moe: capValue("moe", subset, valueKey)
      }}));
      const maxY = Math.max(1, ...items.flatMap(d => [d.dense, d.moe])) * 1.16;
      const band = plotW / items.length;
      const barW = Math.max(10, Math.min(28, band * 0.25));
      let out = "";
      for (let i = 0; i <= 4; i++) {{
        const y = margin.top + plotH - (plotH * i / 4);
        const val = maxY * i / 4;
        out += `<line class="gridline" x1="${{margin.left}}" x2="${{width - margin.right}}" y1="${{y}}" y2="${{y}}"></line>`;
        out += `<text class="chart-label" text-anchor="end" x="${{margin.left - 8}}" y="${{y + 4}}">${{fmt(val)}}</text>`;
      }}
      items.forEach((d, i) => {{
        const cx = margin.left + band * i + band / 2;
        [["dense", d.dense, "var(--dense)", -barW / 1.8], ["moe", d.moe, "var(--moe)", barW / 1.8]].forEach(([key, val, color, offset]) => {{
          const h = val <= 0 ? 0 : Math.max(2, plotH * val / maxY);
          const x = cx + offset - barW / 2;
          const y = margin.top + plotH - h;
          out += `<rect x="${{x}}" y="${{y}}" width="${{barW}}" height="${{h}}" rx="3" fill="${{color}}"></rect>`;
          if (val > 0) out += `<text class="chart-label" text-anchor="middle" x="${{x + barW / 2}}" y="${{Math.max(13, y - 6)}}">${{titleFormatter(val)}}</text>`;
        }});
        out += `<text class="chart-label" text-anchor="end" transform="translate(${{cx - 4}},${{height - 20}}) rotate(-35)">${{escapeHtml(d.label)}}</text>`;
      }});
      out += `<line class="axis" x1="${{margin.left}}" x2="${{width - margin.right}}" y1="${{margin.top + plotH}}" y2="${{margin.top + plotH}}"></line>`;
      svg.innerHTML = out;
    }}

    function setupTabs() {{
      const workloadTabs = DATA.workload_order.map(subset => `<button class="segment${{subset === state.workload ? " active" : ""}}" data-workload="${{subset}}">${{escapeHtml(workloadLabel(subset))}}</button>`).join("");
      document.getElementById("workload-tabs").innerHTML = workloadTabs;
      document.getElementById("workload-tabs").onclick = e => {{
        const btn = e.target.closest("button[data-workload]");
        if (!btn) return;
        state.workload = btn.dataset.workload;
        setupTabs();
        drawCurve();
      }};

      const metricTabs = Object.entries(metrics).map(([key, m]) => `<button class="segment${{key === state.metric ? " active" : ""}}" data-metric="${{key}}">${{escapeHtml(m.label)}}</button>`).join("");
      document.getElementById("metric-tabs").innerHTML = metricTabs;
      document.getElementById("metric-tabs").onclick = e => {{
        const btn = e.target.closest("button[data-metric]");
        if (!btn) return;
        state.metric = btn.dataset.metric;
        setupTabs();
        drawCurve();
      }};
    }}

    function drawCurve() {{
      const {{ svg, width, height }} = svgEl("curve-chart");
      const metric = metrics[state.metric];
      const rows = DATA.rows.filter(r => r.subset === state.workload);
      const concs = [...new Set(rows.map(r => Number(r.concurrency)))].sort((a, b) => a - b);
      const values = rows.map(r => Number(r[state.metric] || 0));
      const targetValue = metric.target ? Math.max(...rows.map(r => Number(metric.target(r) || 0))) : 0;
      const maxY = Math.max(1, targetValue, ...values) * 1.14;
      const margin = {{ top: 26, right: 28, bottom: 52, left: 72 }};
      const plotW = width - margin.left - margin.right;
      const plotH = height - margin.top - margin.bottom;
      const xFor = c => margin.left + (concs.length === 1 ? plotW / 2 : plotW * concs.indexOf(c) / (concs.length - 1));
      const yFor = v => margin.top + plotH - plotH * v / maxY;
      let out = "";
      for (let i = 0; i <= 4; i++) {{
        const val = maxY * i / 4;
        const y = yFor(val);
        out += `<line class="gridline" x1="${{margin.left}}" x2="${{width - margin.right}}" y1="${{y}}" y2="${{y}}"></line>`;
        out += `<text class="chart-label" text-anchor="end" x="${{margin.left - 8}}" y="${{y + 4}}">${{fmt(val)}}</text>`;
      }}
      if (targetValue > 0) {{
        const y = yFor(targetValue);
        out += `<line class="target-line" x1="${{margin.left}}" x2="${{width - margin.right}}" y1="${{y}}" y2="${{y}}"></line>`;
        out += `<text class="chart-label" text-anchor="start" x="${{margin.left + 8}}" y="${{y - 7}}">target ${{fmt(targetValue)}} ${{metric.unit}}</text>`;
      }}
      concs.forEach(c => {{
        const x = xFor(c);
        out += `<line class="axis" x1="${{x}}" x2="${{x}}" y1="${{margin.top + plotH}}" y2="${{margin.top + plotH + 5}}"></line>`;
        out += `<text class="chart-label" text-anchor="middle" x="${{x}}" y="${{height - 20}}">C${{c}}</text>`;
      }});

      ["dense", "moe"].forEach(run => {{
        const runRows = rows.filter(r => r.run_key === run).sort((a, b) => Number(a.concurrency) - Number(b.concurrency));
        const color = run === "dense" ? "var(--dense)" : "var(--moe)";
        const points = runRows.map(r => [xFor(Number(r.concurrency)), yFor(Number(r[state.metric] || 0)), r]);
        if (!points.length) return;
        out += `<polyline fill="none" stroke="${{color}}" stroke-width="2.4" points="${{points.map(p => `${{p[0]}},${{p[1]}}`).join(" ")}}"></polyline>`;
        points.forEach(([x, y, r]) => {{
          out += `<circle cx="${{x}}" cy="${{y}}" r="4.5" fill="${{color}}" stroke="${{color}}" stroke-width="2"></circle>`;
        }});
      }});
      out += `<line class="axis" x1="${{margin.left}}" x2="${{width - margin.right}}" y1="${{margin.top + plotH}}" y2="${{margin.top + plotH}}"></line>`;
      svg.innerHTML = out;
      const label = workloadLabel(state.workload);
      document.getElementById("curve-caption").textContent = `${{label}}: ${{metric.label}} by tested concurrency. These are raw vLLM measurements without custom SLA targets.`;
    }}

    function setupTableControls() {{
      const tabs = [
        ["all", "All"],
        ["dense", "Dense"],
        ["moe", "MoE"]
      ].map(([key, label]) => `<button class="segment${{key === state.tableModel ? " active" : ""}}" data-model="${{key}}">${{label}}</button>`).join("");
      document.getElementById("table-model-tabs").innerHTML = tabs;
      document.getElementById("table-model-tabs").onclick = e => {{
        const btn = e.target.closest("button[data-model]");
        if (!btn) return;
        state.tableModel = btn.dataset.model;
        setupTableControls();
        renderTable();
      }};
      const search = document.getElementById("table-search");
      search.oninput = e => {{
        state.query = e.target.value.toLowerCase();
        renderTable();
      }};
    }}

    function renderTable() {{
      const q = state.query;
      const rows = DATA.rows.filter(r => {{
        if (state.tableModel !== "all" && r.run_key !== state.tableModel) return false;
        if (!q) return true;
        return [r.workload_label, r.run_label, r.detail_json, r.model].join(" ").toLowerCase().includes(q);
      }});
      document.getElementById("result-table").innerHTML = rows.map(r => {{
        return `
          <tr>
            <td>${{escapeHtml(r.workload_label)}}</td>
            <td><span class="model-chip ${{r.run_key}}">${{escapeHtml(r.run_short_label)}}</span></td>
            <td>${{fmt(r.approx_isl)}}</td>
            <td>C${{fmt(r.concurrency)}}</td>
            <td>${{fmt(r.completed_requests)}} / ${{fmt(r.num_prompts)}}</td>
            <td><span class="status ${{Number(r.success_rate || 0) >= 0.99 ? "pass" : "fail"}}">${{pct(r.success_rate)}}</span></td>
            <td>${{fmt(r.output_tps, 1)}}</td>
            <td>${{fmt(r.ttft_p95_ms, 1)}} ms</td>
            <td>${{fmt(r.tpot_p95_ms, 2)}} ms</td>
            <td>${{fmt(r.e2el_p95_ms, 1)}} ms</td>
            <td>${{fmt(r.failed_requests)}}</td>
            <td>${{escapeHtml(r.detail_json)}}</td>
          </tr>`;
      }}).join("");
    }}

    function setupNotes() {{
      const d1 = capValue("dense", "throughput_1k", "capacity_concurrency");
      const m1 = capValue("moe", "throughput_1k", "capacity_concurrency");
      const d32 = capValue("dense", "throughput_32k", "capacity_concurrency");
      const m32 = capValue("moe", "throughput_32k", "capacity_concurrency");
      const moe32c2 = DATA.rows.find(r => r.run_key === "moe" && r.subset === "throughput_32k" && Number(r.concurrency) === 2);
      const dense32c2 = DATA.rows.find(r => r.run_key === "dense" && r.subset === "throughput_32k" && Number(r.concurrency) === 2);
      const notes = [
        `At SPEED 1k, MoE peak-output concurrency is C${{m1}} while dense is C${{d1}}. That is the largest clean serving jump in the run.`,
        `At SPEED 32k, MoE peak-output concurrency is C${{m32}}. At C2, first-token p95 is ${{fmt(moe32c2?.ttft_p95_ms, 1)}} ms for MoE versus ${{fmt(dense32c2?.ttft_p95_ms, 1)}} ms for dense.`,
        "The decode side is not the main bottleneck. The failures are mostly from first-token prefill latency at longer inputs and higher concurrency."
      ];
      document.getElementById("finding-notes").innerHTML = notes.map(n => `<li>${{escapeHtml(n)}}</li>`).join("");

      const denseFailures = DATA.metadata.dense_failures || [];
      const moeFailures = DATA.metadata.moe_failures || [];
      const health = [
        `Dense failed requests appear in ${{denseFailures.length}} aggregate row: ${{denseFailures.length ? denseFailures.map(r => `${{r.workload_label}} C${{r.concurrency}} (${{r.failed_requests}} failed)`).join(", ") : "none"}}.`,
        `MoE failed requests: ${{moeFailures.length ? moeFailures.map(r => `${{r.workload_label}} C${{r.concurrency}} (${{r.failed_requests}} failed)`).join(", ") : "none in copied results"}}.`,
        `Both result sets contain ${{byRun("dense").length}} dense rows and ${{byRun("moe").length}} MoE rows.`
      ];
      document.getElementById("health-notes").innerHTML = health.map(n => `<li>${{escapeHtml(n)}}</li>`).join("");

      const idle = DATA.metadata.moe_idle_gpu || {{}};
      const peak = DATA.metadata.moe_peak_gpu || {{}};
      const wallclock = DATA.metadata.moe_wallclock || {{}};
      const manifest = DATA.metadata.moe_manifest || {{}};
      const gpu = [
        `MoE model served as ${{manifest.model || "Qwen/Qwen3.6-35B-A3B-FP8"}} on ${{manifest.backend || "openai-chat"}}.`,
        idle.used_gib ? `Idle server memory before sweep: ${{idle.used_gib}} GiB of ${{idle.total_gib}} GiB.` : "Idle GPU memory snapshot was not copied for the dense run.",
        peak.used_gib ? `Peak sweep snapshot: ${{peak.used_gib}} GiB used, ${{peak.pct}}% of H200 memory, with 100% GPU utilization.` : "Peak GPU snapshot unavailable.",
        wallclock.elapsed_hms ? `MoE sweep wallclock: ${{wallclock.elapsed_hms}}.` : "MoE sweep wallclock unavailable."
      ];
      document.getElementById("gpu-notes").innerHTML = gpu.map(n => `<li>${{escapeHtml(n)}}</li>`).join("");
    }}

    function redraw() {{
      drawGroupedBars("capacity-chart", "capacity_concurrency", v => `C${{fmt(v)}}`);
      drawGroupedBars("capacity-output-chart", "capacity_output_tps", v => fmt(v));
      drawCurve();
    }}

    setupMeta();
    setupKpis();
    setupExecutiveComparison();
    setupEstimateTable();
    setupWorkloadInterpretation();
    setupFrontier();
    setupTabs();
    setupTableControls();
    setupNotes();
    renderTable();
    redraw();
    window.addEventListener("resize", () => window.requestAnimationFrame(redraw));
  </script>
</body>
</html>
"""


def main() -> None:
    payload = build_payload()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    OUT_HTML.write_text(render_html(payload), encoding="utf-8")
    print(f"Wrote {OUT_HTML}")


if __name__ == "__main__":
    main()
