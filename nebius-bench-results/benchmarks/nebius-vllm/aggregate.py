#!/usr/bin/env python3
"""Aggregate vLLM serving benchmark JSON results into raw throughput metrics."""
import json
import os
import re
from pathlib import Path

import pandas as pd

BENCH_DIR = Path(os.environ.get("BENCH_DIR", Path.home() / "bench")).expanduser()
RESULTS_DIR = Path(os.environ.get("RESULTS_DIR", BENCH_DIR / "results")).expanduser()
OUT_CSV = Path(os.environ.get("OUT_CSV", BENCH_DIR / "speed_bench_metrics.csv")).expanduser()

SUBSETS = {
    "throughput_1k": {"approx_isl": 1024},
    "throughput_2k": {"approx_isl": 2048},
    "throughput_8k": {"approx_isl": 8192},
    "throughput_16k": {"approx_isl": 16384},
    "throughput_32k": {"approx_isl": 32768},
    "cache65k": {"approx_isl": 65536},
    "cache131k": {"approx_isl": 131072},
    "cache256k": {"approx_isl": 255488},
}

ROW_RE = re.compile(r"^speed_(?P<subset>throughput_\d+k)_c(?P<concurrency>\d+)\.json$")
KV_ROW_RE = re.compile(r"^kv_(?P<subset>cache\d+k)_c(?P<concurrency>\d+)\.json$")


def load(path: Path) -> dict:
    with path.open() as f:
        return json.load(f)


def metric(data: dict, key: str, default: float = 0) -> float:
    value = data.get(key)
    return default if value is None else value


def rounded(value: float, digits: int = 2) -> float:
    return round(float(value), digits)


def average_tokens(data: dict, total_key: str) -> float:
    completed = int(data.get("completed") or 0)
    if completed <= 0:
        return 0.0
    return metric(data, total_key) / completed


def main() -> None:
    rows = []
    paths = sorted(list(RESULTS_DIR.glob("speed_*.json")) + list(RESULTS_DIR.glob("kv_*.json")))
    for path in paths:
        match = ROW_RE.match(path.name) or KV_ROW_RE.match(path.name)
        if not match:
            continue

        subset = match.group("subset")
        concurrency = int(match.group("concurrency"))
        data = load(path)
        completed = int(data.get("completed") or 0)
        failed = int(data.get("failed") or 0)
        num_prompts = int(data.get("num_prompts") or completed + failed)
        duration = metric(data, "duration")
        request_tps = metric(data, "request_throughput")
        meta = data.get("metadata") or {}
        benchmark_profile = data.get("benchmark_profile") or meta.get("benchmark_profile") or ""
        output_len = int(meta.get("output_len") or data.get("output_len") or 0)
        if output_len == 0 and completed > 0:
            output_len = round(average_tokens(data, "total_output_tokens"))
        spec = SUBSETS[subset]

        rows.append(
            {
                "subset": subset,
                "dataset": "random_cache_stress" if path.name.startswith("kv_") else "speed_bench",
                "benchmark_profile": benchmark_profile,
                "approx_isl": spec["approx_isl"],
                "output_len": output_len,
                "concurrency": concurrency,
                "num_prompts": num_prompts,
                "successful_requests": completed,
                "failed_requests": failed,
                "success_rate": rounded(completed / max(num_prompts, 1), 4),
                "duration_s": rounded(duration, 2),
                "request_throughput_rps": rounded(request_tps, 3),
                "input_tps": rounded(metric(data, "total_input_tokens") / max(duration, 1e-9), 1),
                "output_tps": rounded(metric(data, "output_throughput"), 1),
                "total_tps": rounded(metric(data, "total_token_throughput"), 1),
                "peak_output_tps": rounded(metric(data, "max_output_tokens_per_s"), 1),
                "peak_concurrent_requests": rounded(metric(data, "max_concurrent_requests"), 1),
                "avg_input_tokens_per_request": rounded(average_tokens(data, "total_input_tokens"), 1),
                "avg_output_tokens_per_request": rounded(average_tokens(data, "total_output_tokens"), 1),
                "ttft_mean_ms": rounded(metric(data, "mean_ttft_ms"), 1),
                "ttft_p50_ms": rounded(metric(data, "median_ttft_ms"), 1),
                "ttft_p95_ms": rounded(metric(data, "p95_ttft_ms"), 1),
                "ttft_p99_ms": rounded(metric(data, "p99_ttft_ms"), 1),
                "tpot_mean_ms": rounded(metric(data, "mean_tpot_ms"), 2),
                "tpot_p50_ms": rounded(metric(data, "median_tpot_ms"), 2),
                "tpot_p95_ms": rounded(metric(data, "p95_tpot_ms"), 2),
                "tpot_p99_ms": rounded(metric(data, "p99_tpot_ms"), 2),
                "itl_p50_ms": rounded(metric(data, "median_itl_ms"), 2),
                "itl_p95_ms": rounded(metric(data, "p95_itl_ms"), 2),
                "itl_p99_ms": rounded(metric(data, "p99_itl_ms"), 2),
                "e2el_p50_ms": rounded(metric(data, "median_e2el_ms"), 1),
                "e2el_p95_ms": rounded(metric(data, "p95_e2el_ms"), 1),
                "e2el_p99_ms": rounded(metric(data, "p99_e2el_ms"), 1),
                "source_json": str(path),
            }
        )

    if not rows:
        print("No vLLM benchmark result JSON files found in", RESULTS_DIR)
        return

    df = pd.DataFrame(rows).sort_values(["dataset", "approx_isl", "concurrency"])
    OUT_CSV.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(OUT_CSV, index=False)
    print(f"Wrote {OUT_CSV} ({len(df)} rows)")

    print("\n=== Raw Throughput Frontier ===")
    for subset, group in df.groupby("subset", sort=False):
        group = group.sort_values("concurrency")
        successful = group[group["successful_requests"] > 0]
        approx_isl = int(group["approx_isl"].iloc[0])
        dataset = group["dataset"].iloc[0]
        if successful.empty:
            print(f"  {subset:15s} {dataset:19s} isl~{approx_isl:<6d} no successful runs")
            continue

        best_output = successful.loc[successful["output_tps"].idxmax()]
        best_request = successful.loc[successful["request_throughput_rps"].idxmax()]
        lowest_first_token = successful.loc[successful["ttft_p95_ms"].idxmin()]
        failure_rate = 1 - float(best_output["success_rate"])

        print(
            f"  {subset:15s} {dataset:19s} isl~{approx_isl:<6d} "
            f"peak_out_c={int(best_output['concurrency']):>4d} "
            f"out_tps={best_output['output_tps']:>8.1f} "
            f"req_s={best_output['request_throughput_rps']:>6.2f} "
            f"p95_first_token={best_output['ttft_p95_ms']:>8.1f}ms "
            f"p95_token_time={best_output['tpot_p95_ms']:>6.2f}ms "
            f"fail_rate={failure_rate:>5.1%}"
        )
        if int(lowest_first_token["concurrency"]) != int(best_output["concurrency"]):
            print(
                f"  {'':15s} {'':19s} {'':10s} "
                f"lowest_p95_first_token_c={int(lowest_first_token['concurrency'])} "
                f"p95_first_token={lowest_first_token['ttft_p95_ms']:.1f}ms; "
                f"max_req_s_c={int(best_request['concurrency'])} "
                f"req_s={best_request['request_throughput_rps']:.2f}"
            )


if __name__ == "__main__":
    main()
