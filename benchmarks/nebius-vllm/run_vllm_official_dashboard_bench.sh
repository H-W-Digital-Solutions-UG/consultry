#!/usr/bin/env bash
# Run vLLM's official performance-dashboard benchmark pipeline against an
# already-running vLLM OpenAI server.
#
# This intentionally writes to a separate output directory and does not touch
# the SPEED-Bench sweep results.
set -euo pipefail

VENV_DIR="${VENV_DIR:-$HOME/vllm-bench}"
MODEL="${MODEL:-${SERVED_MODEL_NAME:-}}"
TOKENIZER="${TOKENIZER:-$MODEL}"
RUN_NAME="${RUN_NAME:-}"
VLLM_SRC_DIR="${VLLM_SRC_DIR:-$HOME/vllm-official-src}"
VLLM_REF="${VLLM_REF:-main}"
OFFICIAL_BENCH_DIR="${OFFICIAL_BENCH_DIR:-$HOME/vllm-official-bench}"
REMOTE_HOST="${REMOTE_HOST:-127.0.0.1}"
REMOTE_PORT="${REMOTE_PORT:-8000}"
BACKEND="${BACKEND:-openai-chat}"
ENDPOINT="${ENDPOINT:-/v1/chat/completions}"
DATASET_NAME="${DATASET_NAME:-sharegpt}"
DATASET_PATH="${DATASET_PATH:-./ShareGPT_V3_unfiltered_cleaned_split.json}"
QPS_LIST_JSON="${QPS_LIST_JSON:-[\"inf\"]}"
MAX_CONCURRENCY_LIST_JSON="${MAX_CONCURRENCY_LIST_JSON:-[1,4,8,16,32,64,128,256]}"
PROMPTS_PER_CONCURRENCY="${PROMPTS_PER_CONCURRENCY:-20}"
MIN_NUM_PROMPTS="${MIN_NUM_PROMPTS:-20}"
MAX_NUM_PROMPTS="${MAX_NUM_PROMPTS:-5120}"
SLA_TTFT_MS="${SLA_TTFT_MS:-}"
SLA_TPOT_MS="${SLA_TPOT_MS:-}"
ENABLE_ADAPTIVE_CONCURRENCY="${ENABLE_ADAPTIVE_CONCURRENCY:-0}"
ADAPTIVE_MAX_PROBES="${ADAPTIVE_MAX_PROBES:-8}"
ADAPTIVE_MAX_CONCURRENCY="${ADAPTIVE_MAX_CONCURRENCY:-1024}"

if [[ -z "$MODEL" ]]; then
  echo "Set MODEL, for example:" >&2
  echo "  MODEL='Qwen/Qwen3.6-35B-A3B-FP8' RUN_NAME=moe bash $0" >&2
  exit 1
fi

if [[ -z "$RUN_NAME" ]]; then
  RUN_NAME="$(
    printf '%s' "$MODEL" |
      tr '/:[:upper:]' '--[:lower:]' |
      sed -E 's/[^a-z0-9._-]+/-/g; s/^-+|-+$//g'
  )"
fi

RUN_DIR="$OFFICIAL_BENCH_DIR/$RUN_NAME"
LOG_FILE="$RUN_DIR/run.log"
MANIFEST="$RUN_DIR/manifest.txt"
SERVING_JSON_NAME="serving-consultry-${RUN_NAME}.json"
EMPTY_JSON_NAME="empty-consultry.json"

mkdir -p "$RUN_DIR"

# shellcheck disable=SC1091
source "$VENV_DIR/bin/activate"

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "[FAIL] missing command: $1" >&2
    exit 1
  }
}

need_cmd git
need_cmd jq
need_cmd curl
need_cmd python

python -m pip install -q --upgrade pandas tabulate psutil regex plotly xlsxwriter openpyxl

if [[ ! -d "$VLLM_SRC_DIR/.git" ]]; then
  git clone https://github.com/vllm-project/vllm.git "$VLLM_SRC_DIR"
fi

git -C "$VLLM_SRC_DIR" fetch --depth 1 origin "$VLLM_REF" || true
git -C "$VLLM_SRC_DIR" checkout "$VLLM_REF"

TESTS_DIR="$VLLM_SRC_DIR/.buildkite/performance-benchmarks/tests"
mkdir -p "$TESTS_DIR"

cat > "$TESTS_DIR/$EMPTY_JSON_NAME" <<'JSON'
[]
JSON

jq -n \
  --arg test_name "serving_${RUN_NAME}_sharegpt" \
  --arg model "$MODEL" \
  --arg tokenizer "$TOKENIZER" \
  --arg backend "$BACKEND" \
  --arg endpoint "$ENDPOINT" \
  --arg dataset_name "$DATASET_NAME" \
  --arg dataset_path "$DATASET_PATH" \
  --argjson qps_list "$QPS_LIST_JSON" \
  --argjson max_concurrency_list "$MAX_CONCURRENCY_LIST_JSON" \
  '[
    {
      test_name: $test_name,
      qps_list: $qps_list,
      max_concurrency_list: $max_concurrency_list,
      server_parameters: {
        model: $model,
        tensor_parallel_size: 1
      },
      client_parameters: {
        model: $model,
        served_model_name: $model,
        tokenizer: $tokenizer,
        backend: $backend,
        endpoint: $endpoint,
        dataset_name: $dataset_name,
        dataset_path: $dataset_path,
        temperature: 0,
        ignore_eos: true,
        percentile_metrics: "ttft,tpot,itl,e2el",
        metric_percentiles: "50,95,99"
      }
    }
  ]' > "$TESTS_DIR/$SERVING_JSON_NAME"

curl -sf "http://${REMOTE_HOST}:${REMOTE_PORT}/v1/models" > "$RUN_DIR/server_models.json"

rm -rf "$VLLM_SRC_DIR/benchmarks/results"

{
  echo "started_at=$(date -Is)"
  echo "model=$MODEL"
  echo "tokenizer=$TOKENIZER"
  echo "run_name=$RUN_NAME"
  echo "vllm_ref=$VLLM_REF"
  echo "vllm_src_dir=$VLLM_SRC_DIR"
  echo "remote_host=$REMOTE_HOST"
  echo "remote_port=$REMOTE_PORT"
  echo "backend=$BACKEND"
  echo "endpoint=$ENDPOINT"
  echo "dataset_name=$DATASET_NAME"
  echo "qps_list=$QPS_LIST_JSON"
  echo "max_concurrency_list=$MAX_CONCURRENCY_LIST_JSON"
  echo "prompts_per_concurrency=$PROMPTS_PER_CONCURRENCY"
  [[ -n "$SLA_TTFT_MS" ]] && echo "sla_ttft_ms=$SLA_TTFT_MS"
  [[ -n "$SLA_TPOT_MS" ]] && echo "sla_tpot_ms=$SLA_TPOT_MS"
  echo
  echo "=== installed vllm ==="
  python - <<'PY'
import vllm
print(vllm.__version__)
PY
  echo
  echo "=== server models ==="
  cat "$RUN_DIR/server_models.json"
  echo
  echo
  echo "=== generated serving json ==="
  cat "$TESTS_DIR/$SERVING_JSON_NAME"
} > "$MANIFEST"

echo "[run] vLLM official performance benchmark wrapper"
echo "[run] model=$MODEL"
echo "[run] output=$RUN_DIR"

(
  cd "$VLLM_SRC_DIR"
  env_args=(
    "HF_TOKEN=${HF_TOKEN:-hf_dummy_for_remote_server}"
    "REMOTE_HOST=$REMOTE_HOST"
    "REMOTE_PORT=$REMOTE_PORT"
    "SERVING_JSON=$SERVING_JSON_NAME"
    "LATENCY_JSON=$EMPTY_JSON_NAME"
    "STARTUP_JSON=$EMPTY_JSON_NAME"
    "THROUGHPUT_JSON=$EMPTY_JSON_NAME"
    "PROMPTS_PER_CONCURRENCY=$PROMPTS_PER_CONCURRENCY"
    "MIN_NUM_PROMPTS=$MIN_NUM_PROMPTS"
    "MAX_NUM_PROMPTS=$MAX_NUM_PROMPTS"
    "ENABLE_ADAPTIVE_CONCURRENCY=$ENABLE_ADAPTIVE_CONCURRENCY"
    "ADAPTIVE_MAX_PROBES=$ADAPTIVE_MAX_PROBES"
    "ADAPTIVE_MAX_CONCURRENCY=$ADAPTIVE_MAX_CONCURRENCY"
    "VLLM_COMPARE_DISABLE_EXCEL=${VLLM_COMPARE_DISABLE_EXCEL:-1}"
  )
  [[ -n "$SLA_TTFT_MS" ]] && env_args+=("SLA_TTFT_MS=$SLA_TTFT_MS")
  [[ -n "$SLA_TPOT_MS" ]] && env_args+=("SLA_TPOT_MS=$SLA_TPOT_MS")
  env "${env_args[@]}" bash .buildkite/performance-benchmarks/scripts/run-performance-benchmarks.sh
) 2>&1 | tee "$LOG_FILE"

cp -a "$VLLM_SRC_DIR/benchmarks/results" "$RUN_DIR/results"
find "$VLLM_SRC_DIR" -maxdepth 1 \
  \( -name 'perf_comparison.html' -o -name 'perf_comparison.xlsx' -o -name 'perf_comparison_*' \) \
  -exec cp -a {} "$RUN_DIR/" \; 2>/dev/null || true

{
  echo "ended_at=$(date -Is)"
  echo "results_dir=$RUN_DIR/results"
  echo "benchmark_results_json=$RUN_DIR/results/benchmark_results.json"
  echo "benchmark_results_md=$RUN_DIR/results/benchmark_results.md"
  echo "perf_comparison_html=$RUN_DIR/perf_comparison.html"
} >> "$MANIFEST"

echo
echo "Done."
echo "Results: $RUN_DIR"
echo "Main JSON: $RUN_DIR/results/benchmark_results.json"
echo "Main Markdown: $RUN_DIR/results/benchmark_results.md"
