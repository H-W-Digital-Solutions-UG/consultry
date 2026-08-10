#!/usr/bin/env bash
# Simple SPEED-Bench concurrency benchmark using vLLM's online serving benchmark.
set -euo pipefail

VENV_DIR="${VENV_DIR:-$HOME/vllm-bench}"
MODEL="${MODEL:-${SERVED_MODEL_NAME:-}}"
TOKENIZER="${TOKENIZER:-Qwen/Qwen3.6-27B-FP8}"
BASE_URL="${BASE_URL:-http://127.0.0.1:8000}"
ENDPOINT="${ENDPOINT:-/v1/chat/completions}"
BACKEND="${BACKEND:-openai-chat}"
BENCH_DIR="${BENCH_DIR:-$HOME/bench}"
SPEED_DIR="${SPEED_DIR:-$BENCH_DIR/speed-bench}"
RESULTS_DIR="${RESULTS_DIR:-$BENCH_DIR/results}"
OUTPUT_LEN="${OUTPUT_LEN:-512}"
REQUEST_RATE="${REQUEST_RATE:-inf}"
SPEED_PREPARE_MODE="official_speed_bench_throughput_v1"
BENCHMARK_PROFILE="${BENCHMARK_PROFILE:-raw_vllm_metrics_v1}"

FAIL_LOG="$RESULTS_DIR/failures.log"
MANIFEST="$BENCH_DIR/benchmark_manifest.txt"
WALLCLOCK_FILE="$BENCH_DIR/run_sweep_wallclock.txt"
GPU_IDLE="$BENCH_DIR/nvidia-smi_idle_before_sweep.txt"
GPU_PEAK="$BENCH_DIR/nvidia-smi_peak_during_sweep.txt"
GPU_AFTER="$BENCH_DIR/nvidia-smi_after_sweep.txt"
GPU_LOG="$BENCH_DIR/nvidia-smi_during_sweep.log"
START_EPOCH="$(date +%s)"
START_ISO="$(date -Is)"
GPU_MONITOR_PID=""

# Format:
# subset|approx_isl|concurrency_list|prompts_per_concurrency
WORKLOADS=(
  "throughput_1k|1024|1 4 8 16 32 64 128 256|20"
  "throughput_2k|2048|1 4 8 16 32 64 128|20"
  "throughput_8k|8192|1 2 4 8 16 32|12"
  "throughput_16k|16384|1 2 4 8 16|10"
  "throughput_32k|32768|1 2 4 8|8"
)

# SPEED-Bench throughput buckets currently top out at 32k. These synthetic
# cache-pressure cases validate the 256k serving configuration explicitly.
# Format:
# name|input_tokens|output_tokens|concurrency_list|prompts_per_concurrency
KV_WORKLOADS=(
  "cache65k|65536|512|1 2 4|4"
  "cache131k|131072|256|1 2|3"
  "cache256k|255488|128|1|2"
)

mkdir -p "$BENCH_DIR" "$SPEED_DIR" "$RESULTS_DIR"

# shellcheck disable=SC1091
source "$VENV_DIR/bin/activate"

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "[FAIL] missing command: $1" >&2
    exit 1
  }
}

finish() {
  local status=$?
  local elapsed
  elapsed=$(($(date +%s) - START_EPOCH))

  {
    echo "status=$status"
    echo "started_at=$START_ISO"
    echo "ended_at=$(date -Is)"
    echo "elapsed_seconds=$elapsed"
    printf 'elapsed_hms=%02d:%02d:%02d\n' "$((elapsed / 3600))" "$(((elapsed % 3600) / 60))" "$((elapsed % 60))"
  } > "$WALLCLOCK_FILE"

  if [[ -n "$GPU_MONITOR_PID" ]]; then
    kill "$GPU_MONITOR_PID" >/dev/null 2>&1 || true
    wait "$GPU_MONITOR_PID" >/dev/null 2>&1 || true
  fi

  nvidia-smi > "$GPU_AFTER" 2>&1 || true
}
trap finish EXIT

wait_ready() {
  local deadline=$((SECONDS + 1800))
  until curl -sf "$BASE_URL/v1/models" >/dev/null; do
    (( SECONDS < deadline )) || {
      echo "[FAIL] vLLM not ready at $BASE_URL after 30 minutes" >&2
      exit 1
    }
    echo "waiting for vLLM at $BASE_URL..."
    sleep 5
  done
}

detect_model() {
  if [[ -n "$MODEL" ]]; then
    return 0
  fi

  MODEL="$(
    python - "$BASE_URL" <<'PY'
import json
import sys
import urllib.request

base_url = sys.argv[1].rstrip("/")
with urllib.request.urlopen(f"{base_url}/v1/models", timeout=10) as response:
    data = json.load(response)
models = data.get("data") or []
if not models:
    raise SystemExit("No models returned by /v1/models")
print(models[0]["id"])
PY
  )"
  export MODEL
  echo "[info] auto-detected served model: $MODEL"
}

prepare_speed_bench() {
  local configs=(throughput_1k throughput_2k throughput_8k throughput_16k throughput_32k)
  local marker="$SPEED_DIR/.prepare_mode"
  local complete=true
  local config
  for config in "${configs[@]}"; do
    [[ -f "$SPEED_DIR/${config}.jsonl" ]] || complete=false
  done
  [[ -f "$marker" && "$(cat "$marker")" == "$SPEED_PREPARE_MODE" ]] || complete=false

  if [[ "$complete" == "true" ]]; then
    echo "[skip] SPEED-Bench dataset already prepared in $SPEED_DIR"
    return 0
  fi

  echo "=== preparing SPEED-Bench throughput datasets in $SPEED_DIR ==="
  for config in "${configs[@]}"; do
    rm -f "$SPEED_DIR/${config}.jsonl"
  done

  curl -LsSf \
    https://raw.githubusercontent.com/NVIDIA-NeMo/Skills/refs/heads/main/nemo_skills/dataset/speed-bench/prepare.py \
    -o "$SPEED_DIR/prepare.py"

  for config in "${configs[@]}"; do
    if [[ -f "$SPEED_DIR/${config}.jsonl" ]]; then
      echo "[skip] $config"
      continue
    fi
    python "$SPEED_DIR/prepare.py" --config "$config" --output_dir "$SPEED_DIR"
  done
  printf '%s\n' "$SPEED_PREPARE_MODE" > "$marker"
}

write_manifest() {
  {
    echo "started_at=$START_ISO"
    echo "model=$MODEL"
    echo "tokenizer=$TOKENIZER"
    echo "base_url=$BASE_URL"
    echo "endpoint=$ENDPOINT"
    echo "backend=$BACKEND"
    echo "speed_dir=$SPEED_DIR"
    echo "output_len=$OUTPUT_LEN"
    echo "request_rate=$REQUEST_RATE"
    echo "benchmark_profile=$BENCHMARK_PROFILE"
    echo
    echo "=== vllm ==="
    python - <<'PY'
import vllm
print(vllm.__version__)
PY
    echo
    echo "=== server models ==="
    curl -s "$BASE_URL/v1/models" || true
    echo
    echo
    echo "=== gpu ==="
    nvidia-smi --query-gpu=name,driver_version,memory.total --format=csv || true
    echo
    echo "=== workloads ==="
    printf '%s\n' "${WORKLOADS[@]}"
    echo
    echo "=== kv_cache_workloads ==="
    printf '%s\n' "${KV_WORKLOADS[@]}"
  } > "$MANIFEST"
}

start_gpu_monitor() {
  local peak_score=-1
  nvidia-smi > "$GPU_IDLE" 2>&1 || true
  {
    while true; do
      echo "===== $(date -Is) ====="
      nvidia-smi || true

      local memory_used gpu_util score
      read -r memory_used gpu_util < <(
        nvidia-smi --query-gpu=memory.used,utilization.gpu --format=csv,noheader,nounits |
          awk -F, 'NR==1 {gsub(/ /, ""); print $1, $2}'
      )
      if [[ "${memory_used:-}" =~ ^[0-9]+$ && "${gpu_util:-}" =~ ^[0-9]+$ ]]; then
        score=$((gpu_util * 1000000 + memory_used))
        if (( score > peak_score )); then
          peak_score="$score"
          nvidia-smi > "$GPU_PEAK" 2>&1 || true
        fi
      fi

      sleep 30
    done
  } > "$GPU_LOG" 2>&1 &
  GPU_MONITOR_PID="$!"
}

result_has_success() {
  local path="$1"
  python - "$path" "$BENCHMARK_PROFILE" <<'PY'
import json
import sys

with open(sys.argv[1]) as f:
    data = json.load(f)
expected_profile = sys.argv[2]
completed = int(data.get("completed") or 0)
profile = data.get("benchmark_profile") or (data.get("metadata") or {}).get("benchmark_profile")
raise SystemExit(0 if completed > 0 and profile == expected_profile else 1)
PY
}

run_case() {
  local subset="$1" isl="$2" concurrency="$3" prompts="$4"
  local name="speed_${subset}_c${concurrency}"
  local out="$RESULTS_DIR/${name}.json"

  if [[ -s "$out" ]]; then
    if result_has_success "$out"; then
      echo "[skip] $name"
      return 0
    fi
    echo "[rerun] $name is missing current benchmark profile or had zero successful requests"
    rm -f "$out"
  fi

  echo "[run] $name isl~$isl output=$OUTPUT_LEN concurrency=$concurrency prompts=$prompts"
  if ! vllm bench serve \
    --backend "$BACKEND" \
    --base-url "$BASE_URL" \
    --endpoint "$ENDPOINT" \
    --model "$MODEL" \
    --served-model-name "$MODEL" \
    --tokenizer "$TOKENIZER" \
    --dataset-name speed_bench \
    --dataset-path "$SPEED_DIR" \
    --speed-bench-dataset-subset "$subset" \
    --speed-bench-output-len "$OUTPUT_LEN" \
    --num-prompts "$prompts" \
    --request-rate "$REQUEST_RATE" \
    --max-concurrency "$concurrency" \
    --ignore-eos \
    --temperature 0 \
    --percentile-metrics ttft,tpot,itl,e2el \
    --metric-percentiles 50,95,99 \
    --metadata benchmark_profile="$BENCHMARK_PROFILE" subset="$subset" approx_isl="$isl" output_len="$OUTPUT_LEN" concurrency="$concurrency" \
    --save-result \
    --save-detailed \
    --result-filename "$out"; then
    echo "[FAIL] $name" | tee -a "$FAIL_LOG"
    rm -f "$out"
    return 1
  fi

  if python - "$out" <<'PY'
import json
import sys

path = sys.argv[1]
with open(path) as f:
    data = json.load(f)
completed = int(data.get("completed") or 0)
failed = int(data.get("failed") or 0)
if completed == 0:
    raise SystemExit(f"{path}: all requests failed; failed={failed}")
PY
  then
    return 0
  else
    echo "[FAIL] $name produced zero successful requests" | tee -a "$FAIL_LOG"
    rm -f "$out"
    return 1
  fi
}

run_kv_case() {
  local name="$1" isl="$2" osl="$3" concurrency="$4" prompts="$5"
  local out="$RESULTS_DIR/kv_${name}_c${concurrency}.json"

  if [[ -s "$out" ]]; then
    if result_has_success "$out"; then
      echo "[skip] kv_${name}_c${concurrency}"
      return 0
    fi
    echo "[rerun] kv_${name}_c${concurrency} is missing current benchmark profile or had zero successful requests"
    rm -f "$out"
  fi

  echo "[run] kv_${name}_c${concurrency} isl=$isl osl=$osl concurrency=$concurrency prompts=$prompts"
  if ! vllm bench serve \
    --backend "$BACKEND" \
    --base-url "$BASE_URL" \
    --endpoint "$ENDPOINT" \
    --model "$MODEL" \
    --served-model-name "$MODEL" \
    --tokenizer "$TOKENIZER" \
    --dataset-name random \
    --random-input-len "$isl" \
    --random-output-len "$osl" \
    --num-prompts "$prompts" \
    --request-rate "$REQUEST_RATE" \
    --max-concurrency "$concurrency" \
    --ignore-eos \
    --temperature 0 \
    --percentile-metrics ttft,tpot,itl,e2el \
    --metric-percentiles 50,95,99 \
    --metadata benchmark_profile="$BENCHMARK_PROFILE" subset="$name" approx_isl="$isl" output_len="$osl" concurrency="$concurrency" cache_stress=true \
    --save-result \
    --save-detailed \
    --result-filename "$out"; then
    echo "[FAIL] kv_${name}_c${concurrency}" | tee -a "$FAIL_LOG"
    rm -f "$out"
    return 1
  fi

  if python - "$out" <<'PY'
import json
import sys

path = sys.argv[1]
with open(path) as f:
    data = json.load(f)
completed = int(data.get("completed") or 0)
failed = int(data.get("failed") or 0)
if completed == 0:
    raise SystemExit(f"{path}: all requests failed; failed={failed}")
PY
  then
    return 0
  else
    echo "[FAIL] kv_${name}_c${concurrency} produced zero successful requests" | tee -a "$FAIL_LOG"
    rm -f "$out"
    return 1
  fi
}

warmup() {
  local marker="$RESULTS_DIR/warmup_skipped.json"
  [[ -f "$marker" ]] && {
    echo "[skip] warmup"
    return 0
  }

  echo "=== warmup ==="
  vllm bench serve \
    --backend "$BACKEND" \
    --base-url "$BASE_URL" \
    --endpoint "$ENDPOINT" \
    --model "$MODEL" \
    --served-model-name "$MODEL" \
    --tokenizer "$TOKENIZER" \
    --dataset-name speed_bench \
    --dataset-path "$SPEED_DIR" \
    --speed-bench-dataset-subset throughput_1k \
    --speed-bench-output-len 128 \
    --num-prompts 24 \
    --request-rate inf \
    --max-concurrency 4 \
    --temperature 0 \
    --ignore-eos >/dev/null || true

  cat > "$marker" <<EOF
{
  "name": "warmup",
  "skipped_from_aggregate": true,
  "created_at": "$(date -Is)"
}
EOF
}

run_workload() {
  local row="$1"
  local subset isl concs prompts_per_conc
  IFS='|' read -r subset isl concs prompts_per_conc <<< "$row"

  echo "=== $subset: ISL~$isl OSL=$OUTPUT_LEN raw throughput/latency ==="
  local concurrency prompts
  for concurrency in $concs; do
    prompts=$((concurrency * prompts_per_conc))
    if ! run_case "$subset" "$isl" "$concurrency" "$prompts"; then
      echo "[warn] $subset failed at concurrency=$concurrency; skipping higher concurrency for this subset" | tee -a "$FAIL_LOG"
      break
    fi
  done
}

run_kv_workload() {
  local row="$1"
  local name isl osl concs prompts_per_conc
  IFS='|' read -r name isl osl concs prompts_per_conc <<< "$row"

  echo "=== kv $name: ISL=$isl OSL=$osl raw throughput/latency ==="
  local concurrency prompts
  for concurrency in $concs; do
    prompts=$((concurrency * prompts_per_conc))
    if ! run_kv_case "$name" "$isl" "$osl" "$concurrency" "$prompts"; then
      echo "[warn] kv $name failed at concurrency=$concurrency; skipping higher concurrency for this cache workload" | tee -a "$FAIL_LOG"
      break
    fi
  done
}

need_cmd curl
need_cmd nvidia-smi
need_cmd vllm

wait_ready
detect_model
prepare_speed_bench
write_manifest
start_gpu_monitor
warmup

for row in "${WORKLOADS[@]}"; do
  run_workload "$row"
done

for row in "${KV_WORKLOADS[@]}"; do
  run_kv_workload "$row"
done

echo "All SPEED-Bench vLLM sweeps complete."
echo "Results: $RESULTS_DIR"
echo "Next: python $BENCH_DIR/aggregate.py"
