#!/usr/bin/env bash
# Extended long-context concurrency sweep for an already-running vLLM server.
set -euo pipefail

VENV_DIR="${VENV_DIR:-$HOME/vllm-bench}"
MODEL="${MODEL:-${SERVED_MODEL_NAME:-}}"
TOKENIZER="${TOKENIZER:-}"
BASE_URL="${BASE_URL:-http://127.0.0.1:8000}"
ENDPOINT="${ENDPOINT:-/v1/chat/completions}"
BACKEND="${BACKEND:-openai-chat}"
BENCH_DIR="${BENCH_DIR:-$HOME/bench-long-context}"
SPEED_DIR="${SPEED_DIR:-$HOME/bench/speed-bench}"
RESULTS_DIR="${RESULTS_DIR:-$BENCH_DIR/results}"
REQUEST_RATE="${REQUEST_RATE:-inf}"
BENCHMARK_PROFILE="${BENCHMARK_PROFILE:-long_context_raw_v1}"
SPEED_PREPARE_MODE="official_speed_bench_throughput_v1"

C16K_START="${C16K_START:-10}"
C16K_END="${C16K_END:-30}"
C16K_STEP="${C16K_STEP:-2}"
C32K_START="${C32K_START:-7}"
C32K_END="${C32K_END:-30}"
C32K_STEP="${C32K_STEP:-1}"
C65K_START="${C65K_START:-2}"
C65K_END="${C65K_END:-10}"
C65K_STEP="${C65K_STEP:-1}"
C131K_START="${C131K_START:-1}"
C131K_END="${C131K_END:-5}"
C131K_STEP="${C131K_STEP:-1}"

OUTPUT_LEN_SPEED="${OUTPUT_LEN_SPEED:-512}"
OUTPUT_LEN_65K="${OUTPUT_LEN_65K:-512}"
OUTPUT_LEN_131K="${OUTPUT_LEN_131K:-256}"
PROMPTS_PER_CONC_16K="${PROMPTS_PER_CONC_16K:-10}"
PROMPTS_PER_CONC_32K="${PROMPTS_PER_CONC_32K:-8}"
PROMPTS_PER_CONC_65K="${PROMPTS_PER_CONC_65K:-4}"
PROMPTS_PER_CONC_131K="${PROMPTS_PER_CONC_131K:-3}"

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

mkdir -p "$BENCH_DIR" "$SPEED_DIR" "$RESULTS_DIR"

# shellcheck disable=SC1091
source "$VENV_DIR/bin/activate"

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "[FAIL] missing command: $1" >&2
    exit 1
  }
}

make_range() {
  local start="$1" end="$2" step="$3"
  local out="" value="$start"
  while (( value <= end )); do
    out="${out}${out:+ }${value}"
    value=$((value + step))
  done
  printf '%s\n' "$out"
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
  if [[ -z "$MODEL" ]]; then
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
  fi

  if [[ -z "$TOKENIZER" ]]; then
    TOKENIZER="$MODEL"
    export TOKENIZER
    echo "[info] tokenizer defaulted to served model: $TOKENIZER"
  fi
}

prepare_speed_bench() {
  local configs=(throughput_16k throughput_32k)
  local marker="$SPEED_DIR/.prepare_mode"
  local complete=true config

  for config in "${configs[@]}"; do
    [[ -f "$SPEED_DIR/${config}.jsonl" ]] || complete=false
  done
  [[ -f "$marker" && "$(cat "$marker")" == "$SPEED_PREPARE_MODE" ]] || complete=false

  if [[ "$complete" == "true" ]]; then
    echo "[skip] SPEED-Bench 16k/32k datasets already prepared in $SPEED_DIR"
    return 0
  fi

  echo "=== preparing SPEED-Bench 16k/32k datasets in $SPEED_DIR ==="
  curl -LsSf \
    https://raw.githubusercontent.com/NVIDIA-NeMo/Skills/refs/heads/main/nemo_skills/dataset/speed-bench/prepare.py \
    -o "$SPEED_DIR/prepare.py"

  for config in "${configs[@]}"; do
    python "$SPEED_DIR/prepare.py" --config "$config" --output_dir "$SPEED_DIR"
  done
  printf '%s\n' "$SPEED_PREPARE_MODE" > "$marker"
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

validate_result() {
  local name="$1" out="$2"
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
  fi

  echo "[FAIL] $name produced zero successful requests" | tee -a "$FAIL_LOG"
  rm -f "$out"
  return 1
}

run_speed_case() {
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

  echo "[run] $name isl~$isl output=$OUTPUT_LEN_SPEED concurrency=$concurrency prompts=$prompts"
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
    --speed-bench-output-len "$OUTPUT_LEN_SPEED" \
    --num-prompts "$prompts" \
    --request-rate "$REQUEST_RATE" \
    --max-concurrency "$concurrency" \
    --ignore-eos \
    --temperature 0 \
    --percentile-metrics ttft,tpot,itl,e2el \
    --metric-percentiles 50,95,99 \
    --metadata benchmark_profile="$BENCHMARK_PROFILE" sweep=long_context subset="$subset" approx_isl="$isl" output_len="$OUTPUT_LEN_SPEED" concurrency="$concurrency" \
    --save-result \
    --save-detailed \
    --result-filename "$out"; then
    echo "[FAIL] $name" | tee -a "$FAIL_LOG"
    rm -f "$out"
    return 1
  fi

  validate_result "$name" "$out"
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

  echo "[run] kv_${name}_c${concurrency} isl=$isl output=$osl concurrency=$concurrency prompts=$prompts"
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
    --metadata benchmark_profile="$BENCHMARK_PROFILE" sweep=long_context subset="$name" approx_isl="$isl" output_len="$osl" concurrency="$concurrency" cache_stress=true \
    --save-result \
    --save-detailed \
    --result-filename "$out"; then
    echo "[FAIL] kv_${name}_c${concurrency}" | tee -a "$FAIL_LOG"
    rm -f "$out"
    return 1
  fi

  validate_result "kv_${name}_c${concurrency}" "$out"
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
    echo "request_rate=$REQUEST_RATE"
    echo "benchmark_profile=$BENCHMARK_PROFILE"
    echo "output_len_speed=$OUTPUT_LEN_SPEED"
    echo "output_len_65k=$OUTPUT_LEN_65K"
    echo "output_len_131k=$OUTPUT_LEN_131K"
    echo
    echo "=== concurrency ranges ==="
    echo "throughput_16k=$(make_range "$C16K_START" "$C16K_END" "$C16K_STEP")"
    echo "throughput_32k=$(make_range "$C32K_START" "$C32K_END" "$C32K_STEP")"
    echo "cache65k=$(make_range "$C65K_START" "$C65K_END" "$C65K_STEP")"
    echo "cache131k=$(make_range "$C131K_START" "$C131K_END" "$C131K_STEP")"
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
  } > "$MANIFEST"
}

run_speed_range() {
  local subset="$1" isl="$2" concs="$3" prompts_per_conc="$4"
  echo "=== $subset: ISL~$isl OSL=$OUTPUT_LEN_SPEED extended long-context sweep ==="
  local concurrency prompts
  for concurrency in $concs; do
    prompts=$((concurrency * prompts_per_conc))
    if ! run_speed_case "$subset" "$isl" "$concurrency" "$prompts"; then
      echo "[warn] $subset failed at concurrency=$concurrency; skipping higher concurrency for this subset" | tee -a "$FAIL_LOG"
      break
    fi
  done
}

run_kv_range() {
  local name="$1" isl="$2" osl="$3" concs="$4" prompts_per_conc="$5"
  echo "=== kv $name: ISL=$isl OSL=$osl extended long-context sweep ==="
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

run_speed_range "throughput_16k" 16384 "$(make_range "$C16K_START" "$C16K_END" "$C16K_STEP")" "$PROMPTS_PER_CONC_16K"
run_speed_range "throughput_32k" 32768 "$(make_range "$C32K_START" "$C32K_END" "$C32K_STEP")" "$PROMPTS_PER_CONC_32K"
run_kv_range "cache65k" 65536 "$OUTPUT_LEN_65K" "$(make_range "$C65K_START" "$C65K_END" "$C65K_STEP")" "$PROMPTS_PER_CONC_65K"
run_kv_range "cache131k" 131072 "$OUTPUT_LEN_131K" "$(make_range "$C131K_START" "$C131K_END" "$C131K_STEP")" "$PROMPTS_PER_CONC_131K"

echo "All extended long-context sweeps complete."
echo "Results: $RESULTS_DIR"
echo "Next: BENCH_DIR=$BENCH_DIR RESULTS_DIR=$RESULTS_DIR OUT_CSV=$BENCH_DIR/long_context_metrics.csv python ~/bench/aggregate.py"
