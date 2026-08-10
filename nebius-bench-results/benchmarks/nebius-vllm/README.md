# Nebius H200 vLLM SPEED-Bench

Simple serving benchmark for `Qwen/Qwen3.6-27B-FP8` on one Nebius H200.

Primary benchmark:

- Server: `vllm serve`
- Load generator: `vllm bench serve`
- Dataset: NVIDIA `SPEED-Bench` throughput buckets
- Output: `~/bench/speed_bench_metrics.csv`

SPEED-Bench makes sense here because it uses semantic prompts bucketed by input
length instead of random token prompts. That is a better fit for realistic
serving throughput and concurrency testing.

This is now a raw industry-style serving benchmark: it reports request
throughput, input/output token throughput, first-token latency, per-token
latency, inter-token latency, end-to-end latency, and failures. It does not use
our custom pricing/SLA goodput thresholds.

## Copy To VM

From your local machine:

```bash
scp -r benchmarks/nebius-vllm <user>@<nebius-ip>:~/
ssh <user>@<nebius-ip>
cd ~/nebius-vllm
chmod +x *.sh *.py
```

## 1. Preflight

Run this on the Nebius VM:

```bash
nvidia-smi
nvcc --version 2>/dev/null || echo "no nvcc, ok"
python3 --version
df -h /
free -h
```

Stop if:

- GPU is not a single H200
- NVIDIA driver is below 550
- Python is not 3.10-3.12
- free disk is below 100 GB
- available RAM is below 100 GB

## 2. Install

```bash
sudo apt-get update
sudo apt-get install -y python3-venv build-essential git tmux jq curl

python3 -m venv ~/vllm-bench
source ~/vllm-bench/bin/activate

pip install --upgrade pip wheel setuptools
pip install "vllm>=0.19.0" "huggingface_hub[cli]" pandas numpy datasets tiktoken

python -c "import vllm; print('vllm', vllm.__version__)"
vllm bench serve --help | head -20
```

## 3. Hugging Face Login And Model Download

If your HF token is needed:

```bash
read -rsp "HF_TOKEN: " HF_TOKEN
echo
huggingface-cli login --token "$HF_TOKEN"
unset HF_TOKEN
```

Download the model:

```bash
huggingface-cli download Qwen/Qwen3.6-27B-FP8
du -sh ~/.cache/huggingface/hub/models--Qwen--Qwen3.6-27B-FP8
```

## 4. Start vLLM

```bash
tmux new -s vllm
source ~/vllm-bench/bin/activate

vllm serve Qwen/Qwen3.6-27B-FP8 \
  --host 0.0.0.0 \
  --port 8000 \
  --tensor-parallel-size 1 \
  --max-model-len 262144 \
  --kv-cache-dtype auto \
  --dtype auto \
  --gpu-memory-utilization 0.92 \
  --enable-prefix-caching \
  --reasoning-parser qwen3 \
  --trust-remote-code \
  --language-model-only \
  --served-model-name Qwen/Qwen3.6-27B-FP8 \
  2>&1 | tee ~/vllm-server.log
```

Detach: `Ctrl-b d`

Reattach:

```bash
tmux a -t vllm
```

## 5. Wait Until Ready

From another SSH shell:

```bash
until curl -sf http://127.0.0.1:8000/v1/models >/dev/null; do
  echo "waiting for vLLM..."
  sleep 5
done

curl -s http://127.0.0.1:8000/v1/models | jq .
nvidia-smi
```

## 6. Install Benchmark Scripts

```bash
mkdir -p ~/bench
cp ~/nebius-vllm/run_sweep.sh ~/bench/run_sweep.sh
cp ~/nebius-vllm/run_long_context_sweep.sh ~/bench/run_long_context_sweep.sh
cp ~/nebius-vllm/aggregate.py ~/bench/aggregate.py
cp ~/nebius-vllm/run_vllm_official_dashboard_bench.sh ~/bench/run_vllm_official_dashboard_bench.sh
chmod +x ~/bench/run_sweep.sh ~/bench/run_long_context_sweep.sh ~/bench/aggregate.py ~/bench/run_vllm_official_dashboard_bench.sh
```

## 7. Run SPEED-Bench Sweep

```bash
tmux new -s bench
source ~/vllm-bench/bin/activate
bash ~/bench/run_sweep.sh 2>&1 | tee ~/bench/run_sweep.log
```

The script will:

- prepare only SPEED-Bench throughput files into `~/bench/speed-bench`
- run throughput buckets: `1k`, `2k`, `8k`, `16k`, `32k`
- run synthetic KV-cache stress points: `65k`, `131k`, `256k`
- sweep concurrency per bucket
- save resumable JSON results into `~/bench/results`
- record GPU snapshots and wallclock time
- avoid custom `--goodput` thresholds; all latency and throughput fields are raw measurements
- stamp result JSONs with `benchmark_profile=raw_vllm_metrics_v1`; older custom-goodput JSONs are rerun instead of skipped

Default generated output length is `512` tokens. Override if needed:

```bash
OUTPUT_LEN=1024 bash ~/bench/run_sweep.sh
```

The benchmark uses the OpenAI chat endpoint by default:

```bash
BACKEND=openai-chat ENDPOINT=/v1/chat/completions bash ~/bench/run_sweep.sh
```

If you intentionally start a completions-only server, override it:

```bash
BACKEND=vllm ENDPOINT=/v1/completions bash ~/bench/run_sweep.sh
```

## 8. Aggregate

```bash
python ~/bench/aggregate.py | tee ~/bench/aggregate_stdout.txt
```

Main output:

```bash
cat ~/bench/speed_bench_metrics.csv
```

The console prints:

```text
=== Raw Throughput Frontier ===
```

Use the printed frontier as the first read:

- `peak_out_c` is the tested concurrency with the highest measured output-token throughput.
- `out_tps` is generated tokens per second.
- `req_s` is completed requests per second at that same point.
- `p95_first_token` is p95 time to first token.
- `p95_token_time` is p95 time per generated token after the first token.
- `fail_rate` is the failed-request share for that run.

Rows with `dataset=speed_bench` are realistic semantic throughput tests.
Rows with `dataset=random_cache_stress` are synthetic long-context cache
pressure tests used to verify the 256k serving configuration.

The script uses NVIDIA-NeMo's official SPEED-Bench `prepare.py` resolver for
the throughput splits only:

```text
throughput_1k
throughput_2k
throughput_8k
throughput_16k
throughput_32k
```

If you changed dataset access or want a clean re-prepare:

```bash
rm -rf ~/bench/speed-bench
```

## 9. Optional MoE Comparison Run

Use this after the dense `Qwen/Qwen3.6-27B-FP8` run if you want a direct
throughput/concurrency comparison against the MoE model. This writes to
separate files under `~/bench-moe`, so it does not overwrite the dense results
in `~/bench`.

Download the MoE FP8 checkpoint first:

```bash
source ~/vllm-bench/bin/activate
huggingface-cli download Qwen/Qwen3.6-35B-A3B-FP8
du -sh ~/.cache/huggingface/hub/models--Qwen--Qwen3.6-35B-A3B-FP8
```

Stop the currently running dense server:

```bash
pkill -f "vllm serve" || true
pkill -f "APIServer" || true
pkill -f "EngineCore" || true
sleep 5
nvidia-smi
```

Start the MoE server without tmux:

```bash
source ~/vllm-bench/bin/activate

nohup vllm serve Qwen/Qwen3.6-35B-A3B-FP8 \
  --host 0.0.0.0 \
  --port 8000 \
  --tensor-parallel-size 1 \
  --max-model-len 262144 \
  --kv-cache-dtype auto \
  --dtype auto \
  --gpu-memory-utilization 0.92 \
  --enable-prefix-caching \
  --reasoning-parser qwen3 \
  --trust-remote-code \
  --language-model-only \
  --served-model-name Qwen/Qwen3.6-35B-A3B-FP8 \
  > ~/vllm-server-moe.log 2>&1 &
```

Wait for readiness and smoke-test the served model id:

```bash
until curl -sf http://127.0.0.1:8000/v1/models >/dev/null; do
  echo "waiting for MoE vLLM..."
  sleep 5
done

curl -s http://127.0.0.1:8000/v1/models | jq .

curl -s http://127.0.0.1:8000/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{"model":"Qwen/Qwen3.6-35B-A3B-FP8","messages":[{"role":"user","content":"Say ok"}],"max_tokens":16}' | jq .
```

Run the same sweep into separate MoE result files:

```bash
mkdir -p ~/bench-moe/results

MODEL='Qwen/Qwen3.6-35B-A3B-FP8' \
TOKENIZER='Qwen/Qwen3.6-35B-A3B-FP8' \
BENCH_DIR="$HOME/bench-moe" \
SPEED_DIR="$HOME/bench/speed-bench" \
RESULTS_DIR="$HOME/bench-moe/results" \
BACKEND=openai-chat \
ENDPOINT=/v1/chat/completions \
bash ~/bench/run_sweep.sh 2>&1 | tee ~/bench-moe/run_sweep_moe.log
```

Aggregate the MoE results separately:

```bash
BENCH_DIR="$HOME/bench-moe" \
RESULTS_DIR="$HOME/bench-moe/results" \
OUT_CSV="$HOME/bench-moe/speed_bench_metrics_moe.csv" \
python ~/bench/aggregate.py | tee ~/bench-moe/aggregate_stdout_moe.txt

cat ~/bench-moe/speed_bench_metrics_moe.csv
cat ~/bench-moe/aggregate_stdout_moe.txt
```

## 10. MoE FP8 KV-Cache Rerun

Use this when you specifically want the MoE FP8 model with FP8 KV cache instead
of the default `--kv-cache-dtype auto` BF16 KV cache. This is a separate run
under `~/bench-moe-kvfp8`, so it does not mix with the previous MoE results.

The official Qwen3.6 MoE FP8 checkpoint is:

```text
Qwen/Qwen3.6-35B-A3B-FP8
```

Start the server:

```bash
pkill -f "vllm serve" || true
pkill -f "APIServer" || true
pkill -f "EngineCore" || true
sleep 5
nvidia-smi

source ~/vllm-bench/bin/activate

nohup vllm serve Qwen/Qwen3.6-35B-A3B-FP8 \
  --host 0.0.0.0 \
  --port 8000 \
  --tensor-parallel-size 1 \
  --max-model-len 262144 \
  --kv-cache-dtype fp8 \
  --dtype auto \
  --gpu-memory-utilization 0.92 \
  --enable-prefix-caching \
  --reasoning-parser qwen3 \
  --trust-remote-code \
  --language-model-only \
  --served-model-name Qwen/Qwen3.6-35B-A3B-FP8 \
  --speculative-config '{"method":"qwen3_next_mtp","num_speculative_tokens":2}' \
  > ~/vllm-server-moe-kvfp8.log 2>&1 &
```

Wait and smoke test:

```bash
until curl -sf http://127.0.0.1:8000/v1/models >/dev/null; do
  echo "waiting for MoE KV-FP8 vLLM..."
  sleep 5
done

curl -s http://127.0.0.1:8000/v1/models | jq .
grep -E "kv_cache_dtype|quantization|max_seq_len|Using max model len|speculative" ~/vllm-server-moe-kvfp8.log | tail -40

curl -s http://127.0.0.1:8000/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{"model":"Qwen/Qwen3.6-35B-A3B-FP8","messages":[{"role":"user","content":"Say ok"}],"max_tokens":16,"temperature":0}' | jq .
```

Run the raw vLLM benchmark:

```bash
mkdir -p ~/bench-moe-kvfp8/results

MODEL='Qwen/Qwen3.6-35B-A3B-FP8' \
TOKENIZER='Qwen/Qwen3.6-35B-A3B-FP8' \
BENCH_DIR="$HOME/bench-moe-kvfp8" \
SPEED_DIR="$HOME/bench/speed-bench" \
RESULTS_DIR="$HOME/bench-moe-kvfp8/results" \
BENCHMARK_PROFILE="raw_vllm_metrics_v1_qwen36_35b_a3b_fp8_kvfp8" \
BACKEND=openai-chat \
ENDPOINT=/v1/chat/completions \
bash ~/bench/run_sweep.sh 2>&1 | tee ~/bench-moe-kvfp8/run_sweep_moe_kvfp8.log
```

Aggregate:

```bash
BENCH_DIR="$HOME/bench-moe-kvfp8" \
RESULTS_DIR="$HOME/bench-moe-kvfp8/results" \
OUT_CSV="$HOME/bench-moe-kvfp8/speed_bench_metrics_moe_kvfp8.csv" \
python ~/bench/aggregate.py | tee ~/bench-moe-kvfp8/aggregate_stdout_moe_kvfp8.txt
```

## 11. Extended Long-Context Sweep

Use this after the regular FP8-KV run to find the actual long-context
concurrency edge. It writes to `~/bench-long-context-kvfp8`, so it does not mix
with the baseline result files.

Default ranges:

```text
16k:  C10, C12, C14, ... C30
32k:  C7, C8, C9, ... C30
65k:  C2, C3, C4, ... C10
131k: C1, C2, C3, C4, C5
```

Run:

```bash
mkdir -p ~/bench-long-context-kvfp8/results

MODEL='Qwen/Qwen3.6-35B-A3B-FP8' \
TOKENIZER='Qwen/Qwen3.6-35B-A3B-FP8' \
BENCH_DIR="$HOME/bench-long-context-kvfp8" \
SPEED_DIR="$HOME/bench/speed-bench" \
RESULTS_DIR="$HOME/bench-long-context-kvfp8/results" \
BENCHMARK_PROFILE="long_context_raw_v1_qwen36_35b_a3b_fp8_kvfp8" \
BACKEND=openai-chat \
ENDPOINT=/v1/chat/completions \
bash ~/bench/run_long_context_sweep.sh 2>&1 | tee ~/bench-long-context-kvfp8/run_long_context_sweep.log
```

The 16k upper bound defaults to `30` because the requested max was only
specified for 32k/65k/131k. Override it if needed:

```bash
C16K_END=40 bash ~/bench/run_long_context_sweep.sh
```

Aggregate:

```bash
BENCH_DIR="$HOME/bench-long-context-kvfp8" \
RESULTS_DIR="$HOME/bench-long-context-kvfp8/results" \
OUT_CSV="$HOME/bench-long-context-kvfp8/long_context_metrics_kvfp8.csv" \
python ~/bench/aggregate.py | tee ~/bench-long-context-kvfp8/aggregate_stdout_long_context_kvfp8.txt
```

Copy MoE results back to your local machine:

```bash
mkdir -p ./nebius-bench-results/moe

scp -i ~/.ssh/id_rsa -r \
  jules@89.169.97.116:~/bench-moe/results \
  ./nebius-bench-results/moe/

scp -i ~/.ssh/id_rsa \
  jules@89.169.97.116:~/bench-moe/speed_bench_metrics_moe.csv \
  jules@89.169.97.116:~/bench-moe/aggregate_stdout_moe.txt \
  jules@89.169.97.116:~/bench-moe/run_sweep_moe.log \
  jules@89.169.97.116:~/bench-moe/benchmark_manifest.txt \
  jules@89.169.97.116:~/bench-moe/run_sweep_wallclock.txt \
  'jules@89.169.97.116:~/bench-moe/nvidia-smi*.txt' \
  jules@89.169.97.116:~/bench-moe/nvidia-smi_during_sweep.log \
  ./nebius-bench-results/moe/
```

## 12. Local dashboard

After copying the dense and MoE result folders locally, generate a static
dashboard:

```bash
python3 benchmarks/nebius-vllm/create_dashboard.py
```

Open:

```text
nebius-bench-results/dashboard/index.html
```

The dashboard is self-contained and embeds the current CSV and JSON result
fields. Re-run the command after copying newer results.

## 13. Optional vLLM Official Dashboard Runner

This uses vLLM's own `.buildkite/performance-benchmarks` dashboard pipeline
against the already-running server. It writes to a separate directory and does
not set any SLA environment variables unless you explicitly provide them.

```bash
MODEL='Qwen/Qwen3.6-35B-A3B-FP8' \
TOKENIZER='Qwen/Qwen3.6-35B-A3B-FP8' \
RUN_NAME='qwen36-35b-a3b-fp8-raw' \
bash ~/bench/run_vllm_official_dashboard_bench.sh
```

## 14. Deliverables

Collect:

```bash
cat ~/bench/speed_bench_metrics.csv
cat ~/bench/aggregate_stdout.txt
tail -50 ~/vllm-server.log
cat ~/bench/nvidia-smi_idle_before_sweep.txt
cat ~/bench/nvidia-smi_peak_during_sweep.txt
cat ~/bench/nvidia-smi_after_sweep.txt
cat ~/bench/run_sweep_wallclock.txt
```

Useful status checks:

```bash
ls -lh ~/bench/results
grep -Ei "OOM|CUDA error|RuntimeError" ~/vllm-server.log | tail -50
nvidia-smi
```

## Notes

Keep these fixed for the dense baseline benchmark:

- model: `Qwen/Qwen3.6-27B-FP8`
- served name: `Qwen/Qwen3.6-27B-FP8`
- KV cache dtype: `auto`
- max model length: `262144`
- primary tool: `vllm bench serve`

If vLLM exits with CUDA OOM during model load, retry once with:

```bash
tmux kill-session -t vllm
GPU_MEMORY_UTILIZATION=0.88 vllm serve Qwen/Qwen3.6-27B-FP8 \
  --host 0.0.0.0 \
  --port 8000 \
  --tensor-parallel-size 1 \
  --max-model-len 262144 \
  --kv-cache-dtype auto \
  --dtype auto \
  --gpu-memory-utilization 0.88 \
  --enable-prefix-caching \
  --reasoning-parser qwen3 \
  --trust-remote-code \
  --language-model-only \
  --served-model-name Qwen/Qwen3.6-27B-FP8 \
  2>&1 | tee ~/vllm-server.log
```

AIPerf is intentionally not part of this first benchmark. Use it later as a
secondary cross-check.
