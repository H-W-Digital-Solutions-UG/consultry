#!/usr/bin/env bash
# Setup and operate the Nebius H200 vLLM benchmark environment.
#
# Intended usage on the Nebius VM:
#   ./setup_nebius_vllm_bench.sh setup
#   ./setup_nebius_vllm_bench.sh start-server
#   ./setup_nebius_vllm_bench.sh wait-ready
#   ./setup_nebius_vllm_bench.sh start-sweep
#   ./setup_nebius_vllm_bench.sh aggregate
#   ./setup_nebius_vllm_bench.sh collect
set -euo pipefail

MODEL_ID="${MODEL_ID:-Qwen/Qwen3.6-27B-FP8}"
SERVED_MODEL_NAME="${SERVED_MODEL_NAME:-qwen3.6-27b-fp8}"
VENV_DIR="${VENV_DIR:-$HOME/vllm-bench}"
BENCH_DIR="${BENCH_DIR:-$HOME/bench}"
RESULTS_DIR="${RESULTS_DIR:-$BENCH_DIR/results}"
SERVER_LOG="${SERVER_LOG:-$HOME/vllm-server.log}"
PORT="${PORT:-8000}"
HOST="${HOST:-0.0.0.0}"
BASE_URL="${BASE_URL:-http://127.0.0.1:$PORT}"
GPU_MEMORY_UTILIZATION="${GPU_MEMORY_UTILIZATION:-0.92}"
SERVER_SESSION="${SERVER_SESSION:-vllm}"
BENCH_SESSION="${BENCH_SESSION:-bench}"
MIN_DRIVER_VERSION="${MIN_DRIVER_VERSION:-550}"
MIN_GPU_MEMORY_MIB="${MIN_GPU_MEMORY_MIB:-140000}"
MIN_FREE_DISK_MIB="${MIN_FREE_DISK_MIB:-102400}"
MIN_AVAILABLE_RAM_MIB="${MIN_AVAILABLE_RAM_MIB:-102400}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

fail() {
  echo "[FAIL] $*" >&2
  exit 1
}

note() {
  echo "[INFO] $*"
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fail "Missing required command: $1"
}

version_ge() {
  local actual="$1"
  local minimum="$2"
  [[ "$(printf '%s\n%s\n' "$minimum" "$actual" | sort -V | head -n1)" == "$minimum" ]]
}

usage() {
  cat <<EOF
Usage: $(basename "$0") <command>

Commands:
  preflight       Verify this is a valid single-H200 Nebius target. Installs nothing.
  install         Install OS packages, create $VENV_DIR, and install vLLM >= 0.19.0.
  write-scripts   Copy SPEED-Bench vLLM scripts into $BENCH_DIR.
  download        Optional HF login via HF_TOKEN, then pre-download $MODEL_ID.
  setup           Run preflight, install, write-scripts, and download.
  start-server    Start vLLM in a detached tmux session named "$SERVER_SESSION".
  wait-ready      Poll $BASE_URL/v1/models until the server is ready.
  start-sweep     Start the benchmark sweep in detached tmux session "$BENCH_SESSION".
  run-sweep       Run the benchmark sweep in the current shell.
  aggregate       Run aggregate.py and save stdout to $BENCH_DIR/aggregate_stdout.txt.
  status          Show tmux sessions, /v1/models if ready, and nvidia-smi.
  collect         Print the deliverables requested in the benchmark handoff.

Environment overrides:
  HF_TOKEN=...                  Hugging Face token, used by download if set.
  GPU_MEMORY_UTILIZATION=0.88   Retry server launch with lower memory utilization.
  PORT=8000                     vLLM server port.
EOF
}

show_verification_commands() {
  note "Raw verification output follows."
  nvidia-smi
  nvcc --version 2>/dev/null || echo "no nvcc, ok"
  python3 --version
  df -h /
  free -h
}

preflight() {
  [[ "$(uname -s)" == "Linux" ]] || fail "This must run on the Nebius Ubuntu VM, not $(uname -s)."
  [[ -r /etc/os-release ]] || fail "Cannot read /etc/os-release to verify Ubuntu version."
  # shellcheck disable=SC1091
  source /etc/os-release
  [[ "${ID:-}" == "ubuntu" ]] || fail "Expected Ubuntu 22.04 LTS or 24.04 LTS, found ${PRETTY_NAME:-unknown OS}."
  [[ "${VERSION_ID:-}" == "22.04" || "${VERSION_ID:-}" == "24.04" ]] || fail "Expected Ubuntu 22.04 LTS or 24.04 LTS, found ${PRETTY_NAME:-unknown OS}."

  need_cmd nvidia-smi
  need_cmd python3
  need_cmd df
  need_cmd free
  need_cmd awk
  need_cmd sort

  show_verification_commands

  local gpu_count
  gpu_count="$(nvidia-smi --query-gpu=name --format=csv,noheader | sed '/^$/d' | wc -l | tr -d ' ')"
  [[ "$gpu_count" == "1" ]] || fail "Expected exactly 1 GPU, found $gpu_count."

  local gpu_name gpu_memory_mib driver_version
  gpu_name="$(nvidia-smi --query-gpu=name --format=csv,noheader | head -n1)"
  gpu_memory_mib="$(nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits | head -n1 | tr -d ' ')"
  driver_version="$(nvidia-smi --query-gpu=driver_version --format=csv,noheader | head -n1 | tr -d ' ')"

  [[ "$gpu_name" == *"H200"* ]] || fail "Expected an NVIDIA H200, found: $gpu_name."
  [[ "$gpu_memory_mib" =~ ^[0-9]+$ ]] || fail "Could not parse GPU memory from nvidia-smi: $gpu_memory_mib."
  (( gpu_memory_mib >= MIN_GPU_MEMORY_MIB )) || fail "Expected >= ${MIN_GPU_MEMORY_MIB} MiB HBM, found ${gpu_memory_mib} MiB."
  version_ge "$driver_version" "$MIN_DRIVER_VERSION" || fail "Expected NVIDIA driver >= $MIN_DRIVER_VERSION, found $driver_version."

  python3 - <<'PY'
import sys
major, minor = sys.version_info[:2]
if major != 3 or not (10 <= minor <= 12):
    raise SystemExit(f"Expected Python 3.10-3.12, found {major}.{minor}")
PY

  local free_disk_mib available_ram_mib
  free_disk_mib="$(df -Pm / | awk 'NR==2 {print $4}')"
  available_ram_mib="$(free -m | awk '/^Mem:/ {print $7}')"
  [[ "$free_disk_mib" =~ ^[0-9]+$ ]] || fail "Could not parse free disk space."
  [[ "$available_ram_mib" =~ ^[0-9]+$ ]] || fail "Could not parse available RAM."
  (( free_disk_mib >= MIN_FREE_DISK_MIB )) || fail "Expected >= ${MIN_FREE_DISK_MIB} MiB free on /, found ${free_disk_mib} MiB."
  (( available_ram_mib >= MIN_AVAILABLE_RAM_MIB )) || fail "Expected >= ${MIN_AVAILABLE_RAM_MIB} MiB available RAM, found ${available_ram_mib} MiB."

  note "Preflight passed: single H200, driver $driver_version, ${gpu_memory_mib} MiB HBM."
}

install_deps() {
  preflight

  note "Installing OS packages."
  sudo apt-get update
  sudo apt-get install -y python3-venv build-essential git tmux jq curl

  note "Creating Python venv at $VENV_DIR."
  if [[ ! -d "$VENV_DIR" ]]; then
    python3 -m venv "$VENV_DIR"
  fi

  # shellcheck disable=SC1091
  source "$VENV_DIR/bin/activate"

  note "Installing Python packages into the venv."
  pip install --upgrade pip wheel setuptools
  pip install "vllm>=0.19.0" "huggingface_hub[cli]" pandas numpy datasets tiktoken

  python - <<'PY'
import re
import vllm

parts = tuple(int(x) for x in re.findall(r"\d+", vllm.__version__)[:3])
parts = parts + (0,) * (3 - len(parts))
if parts < (0, 19, 0):
    raise SystemExit(f"vLLM must be >= 0.19.0, found {vllm.__version__}")
print("vllm", vllm.__version__)
PY
  vllm bench serve --help | head -5
}

write_scripts() {
  mkdir -p "$BENCH_DIR" "$RESULTS_DIR"

  [[ -f "$SCRIPT_DIR/run_sweep.sh" ]] || fail "Missing companion file: $SCRIPT_DIR/run_sweep.sh"
  [[ -f "$SCRIPT_DIR/aggregate.py" ]] || fail "Missing companion file: $SCRIPT_DIR/aggregate.py"

  cp "$SCRIPT_DIR/run_sweep.sh" "$BENCH_DIR/run_sweep.sh"
  cp "$SCRIPT_DIR/aggregate.py" "$BENCH_DIR/aggregate.py"
  chmod +x "$BENCH_DIR/run_sweep.sh" "$BENCH_DIR/aggregate.py"

  note "Installed benchmark scripts:"
  ls -l "$BENCH_DIR/run_sweep.sh" "$BENCH_DIR/aggregate.py"
}

download_weights() {
  [[ -d "$VENV_DIR" ]] || fail "Venv not found at $VENV_DIR. Run install first."
  # shellcheck disable=SC1091
  source "$VENV_DIR/bin/activate"

  if [[ -n "${HF_TOKEN:-}" ]]; then
    note "HF_TOKEN is set; logging in to Hugging Face CLI."
    if command -v hf >/dev/null 2>&1; then
      hf auth login --token "$HF_TOKEN"
    else
      huggingface-cli login --token "$HF_TOKEN"
    fi
  else
    note "HF_TOKEN is not set; attempting public download."
  fi

  if command -v hf >/dev/null 2>&1; then
    hf download "$MODEL_ID"
  else
    huggingface-cli download "$MODEL_ID"
  fi

  local cache_dir="$HOME/.cache/huggingface/hub/models--${MODEL_ID/\//--}"
  if [[ -d "$cache_dir" ]]; then
    du -sh "$cache_dir"
  else
    note "Model cache directory not found at $cache_dir; download command completed, but cache layout may differ."
  fi
}

setup_all() {
  install_deps
  write_scripts
  download_weights
  note "Setup complete. Next: $0 start-server && $0 wait-ready && $0 start-sweep"
}

server_command() {
  printf '%q ' \
    vllm serve "$MODEL_ID" \
    --port "$PORT" \
    --host "$HOST" \
    --tensor-parallel-size 1 \
    --max-model-len 262144 \
    --kv-cache-dtype auto \
    --dtype auto \
    --gpu-memory-utilization "$GPU_MEMORY_UTILIZATION" \
    --enable-prefix-caching \
    --reasoning-parser qwen3 \
    --trust-remote-code \
    --language-model-only \
    --served-model-name "$SERVED_MODEL_NAME"
}

start_server() {
  [[ -d "$VENV_DIR" ]] || fail "Venv not found at $VENV_DIR. Run setup first."
  need_cmd tmux

  if tmux has-session -t "$SERVER_SESSION" 2>/dev/null; then
    fail "tmux session '$SERVER_SESSION' already exists. Attach with: tmux a -t $SERVER_SESSION"
  fi

  local cmd
  cmd="$(server_command)"

  note "Starting vLLM in detached tmux session '$SERVER_SESSION'. Log: $SERVER_LOG"
  tmux new-session -d -s "$SERVER_SESSION" \
    "bash -lc 'source \"$VENV_DIR/bin/activate\" && $cmd 2>&1 | tee \"$SERVER_LOG\"'"
  note "Attach with: tmux a -t $SERVER_SESSION"
}

wait_ready() {
  need_cmd curl
  need_cmd jq

  note "Waiting for $BASE_URL/v1/models."
  local deadline=$((SECONDS + 3600))
  until curl -sf "$BASE_URL/v1/models" >/dev/null; do
    if [[ -f "$SERVER_LOG" ]] && grep -Eqi 'CUDA out of memory|OOM|CUDA error|RuntimeError' "$SERVER_LOG"; then
      echo "[WARN] Found error-looking lines in $SERVER_LOG:" >&2
      grep -Ein 'CUDA out of memory|OOM|CUDA error|RuntimeError' "$SERVER_LOG" | tail -20 >&2
    fi
    (( SECONDS < deadline )) || fail "Timed out waiting for vLLM after 1 hour."
    echo "waiting for vLLM..."
    sleep 5
  done
  echo "vLLM is ready."
  curl -s "$BASE_URL/v1/models" | jq .
}

run_sweep() {
  [[ -x "$BENCH_DIR/run_sweep.sh" ]] || fail "Missing $BENCH_DIR/run_sweep.sh. Run write-scripts first."
  wait_ready
  # shellcheck disable=SC1091
  source "$VENV_DIR/bin/activate"
  bash "$BENCH_DIR/run_sweep.sh"
}

start_sweep() {
  [[ -x "$BENCH_DIR/run_sweep.sh" ]] || fail "Missing $BENCH_DIR/run_sweep.sh. Run write-scripts first."
  need_cmd tmux

  if tmux has-session -t "$BENCH_SESSION" 2>/dev/null; then
    fail "tmux session '$BENCH_SESSION' already exists. Attach with: tmux a -t $BENCH_SESSION"
  fi

  wait_ready
  note "Starting benchmark sweep in detached tmux session '$BENCH_SESSION'."
  tmux new-session -d -s "$BENCH_SESSION" \
    "bash -lc 'source \"$VENV_DIR/bin/activate\" && bash \"$BENCH_DIR/run_sweep.sh\" 2>&1 | tee \"$BENCH_DIR/run_sweep.log\"'"
  note "Attach with: tmux a -t $BENCH_SESSION"
}

aggregate_results() {
  [[ -x "$BENCH_DIR/aggregate.py" ]] || fail "Missing $BENCH_DIR/aggregate.py. Run write-scripts first."
  # shellcheck disable=SC1091
  source "$VENV_DIR/bin/activate"
  python "$BENCH_DIR/aggregate.py" | tee "$BENCH_DIR/aggregate_stdout.txt"
}

status() {
  echo "=== tmux ==="
  tmux ls 2>/dev/null || true
  echo
  echo "=== models ==="
  curl -sf "$BASE_URL/v1/models" | jq . || echo "vLLM is not ready at $BASE_URL"
  echo
  echo "=== nvidia-smi ==="
  nvidia-smi || true
}

collect() {
  local csv="$BENCH_DIR/speed_bench_capacity.csv"
  local aggregate_stdout="$BENCH_DIR/aggregate_stdout.txt"
  local wallclock="$BENCH_DIR/run_sweep_wallclock.txt"
  local idle_snapshot="$BENCH_DIR/nvidia-smi_idle_before_sweep.txt"
  local peak_snapshot="$BENCH_DIR/nvidia-smi_peak_during_sweep.txt"
  local after_snapshot="$BENCH_DIR/nvidia-smi_after_sweep.txt"
  local gpu_log="$BENCH_DIR/nvidia-smi_during_sweep.log"

  echo "=== speed_bench_capacity.csv ==="
  if [[ -f "$csv" ]]; then
    cat "$csv"
  else
    echo "missing: $csv"
  fi

  echo
  echo "=== aggregate.py stdout ==="
  if [[ -f "$aggregate_stdout" ]]; then
    cat "$aggregate_stdout"
  else
    echo "missing: $aggregate_stdout"
  fi

  echo
  echo "=== last 50 lines of $SERVER_LOG ==="
  if [[ -f "$SERVER_LOG" ]]; then
    tail -50 "$SERVER_LOG"
  else
    echo "missing: $SERVER_LOG"
  fi

  echo
  echo "=== nvidia-smi idle before sweep ==="
  if [[ -f "$idle_snapshot" ]]; then
    cat "$idle_snapshot"
  else
    echo "missing: $idle_snapshot"
  fi

  echo
  echo "=== nvidia-smi peak during sweep ==="
  if [[ -f "$peak_snapshot" ]]; then
    cat "$peak_snapshot"
  else
    echo "missing: $peak_snapshot"
  fi

  echo
  echo "=== nvidia-smi after sweep ==="
  if [[ -f "$after_snapshot" ]]; then
    cat "$after_snapshot"
  else
    echo "missing: $after_snapshot"
  fi

  echo
  echo "=== nvidia-smi samples during sweep (tail) ==="
  if [[ -f "$gpu_log" ]]; then
    tail -120 "$gpu_log"
  else
    echo "missing: $gpu_log"
  fi

  echo
  echo "=== run_sweep.sh wallclock ==="
  if [[ -f "$wallclock" ]]; then
    cat "$wallclock"
  else
    echo "missing: $wallclock"
  fi
}

main() {
  local command="${1:-}"
  case "$command" in
    preflight) preflight ;;
    install) install_deps ;;
    write-scripts) write_scripts ;;
    download) download_weights ;;
    setup) setup_all ;;
    start-server) start_server ;;
    wait-ready) wait_ready ;;
    start-sweep) start_sweep ;;
    run-sweep) run_sweep ;;
    aggregate) aggregate_results ;;
    status) status ;;
    collect) collect ;;
    -h|--help|help|"") usage ;;
    *) usage; fail "Unknown command: $command" ;;
  esac
}

main "$@"
