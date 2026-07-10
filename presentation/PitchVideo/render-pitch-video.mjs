#!/usr/bin/env node
import { createReadStream, existsSync, mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { dirname, extname, join, resolve } from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const width = 1920;
const height = 1080;
const duration = 67.74;

const args = process.argv.slice(2);
const smoke = args.includes("--smoke");
const keepFrames = args.includes("--keep-frames");
const fps = numberArg("--fps", 30);
const crf = numberArg("--crf", 16);
const preset = valueArg("--preset", "slow");
const tune = valueArg("--tune", "animation");
const output = resolve(valueArg("--output", join(here, "renders", `consultry-pitch-video-final-1080p${fps}.mp4`)));
const audioMode = valueArg("--audio", "music");
const chromePath = valueArg(
  "--chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
);
const smokeTimes = valueArg("--smoke-times", "")
  .split(",")
  .map((part) => Number(part.trim()))
  .filter((value) => Number.isFinite(value) && value >= 0 && value <= duration);

if (!["full", "music", "silent"].includes(audioMode)) {
  throw new Error(`Invalid --audio=${audioMode}; expected full, music, or silent`);
}

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
};

function valueArg(name, fallback) {
  const exact = args.find((arg) => arg.startsWith(`${name}=`));
  if (exact) return exact.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

function numberArg(name, fallback) {
  const value = Number(valueArg(name, fallback));
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function ensureTool(name) {
  const result = spawnSync("which", [name], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`Missing required tool: ${name}`);
}

function fileUrlPath(pathname) {
  const safe = pathname.split("/").map(encodeURIComponent).join("/");
  return safe.replaceAll("%2F", "/");
}

function startStaticServer(root) {
  const server = createServer((request, response) => {
    try {
      const url = new URL(request.url ?? "/", "http://127.0.0.1");
      const relative = decodeURIComponent(url.pathname.replace(/^\/+/, "")) || "Consultry Pitch Video.dc.html";
      const candidate = resolve(root, relative);
      if (candidate !== root && !candidate.startsWith(`${root}/`)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }
      if (!existsSync(candidate) || !statSync(candidate).isFile()) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }
      response.writeHead(200, {
        "content-type": mimeTypes[extname(candidate).toLowerCase()] ?? "application/octet-stream",
        "cache-control": "no-store",
        "x-content-type-options": "nosniff",
      });
      createReadStream(candidate).pipe(response);
    } catch (error) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end(error instanceof Error ? error.message : String(error));
    }
  });

  return new Promise((resolveListen, rejectListen) => {
    server.once("error", rejectListen);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") rejectListen(new Error("Could not bind static server"));
      else resolveListen({ server, port: address.port });
    });
  });
}

function getFreePort() {
  return new Promise((resolvePort, rejectPort) => {
    const server = createServer();
    server.once("error", rejectPort);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (!address || typeof address === "string") rejectPort(new Error("Could not allocate port"));
        else resolvePort(address.port);
      });
    });
  });
}

class Cdp {
  constructor(url) {
    this.url = url;
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.url);
    this.ws.addEventListener("message", (event) => this.onMessage(event));
    await new Promise((resolveOpen, rejectOpen) => {
      this.ws.addEventListener("open", resolveOpen, { once: true });
      this.ws.addEventListener("error", rejectOpen, { once: true });
    });
  }

  on(eventName, callback) {
    const list = this.listeners.get(eventName) ?? [];
    list.push(callback);
    this.listeners.set(eventName, list);
  }

  onMessage(event) {
    const message = JSON.parse(event.data);
    if (message.id) {
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
      else pending.resolve(message.result ?? {});
      return;
    }

    for (const callback of this.listeners.get(message.method) ?? []) callback(message.params ?? {});
  }

  send(method, params = {}) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return Promise.reject(new Error("CDP socket is not open"));
    }
    const id = this.nextId++;
    const payload = JSON.stringify({ id, method, params });
    return new Promise((resolveCommand, rejectCommand) => {
      this.pending.set(id, { method, resolve: resolveCommand, reject: rejectCommand });
      this.ws.send(payload);
    });
  }

  close() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.close();
  }
}

async function waitForChrome(port, timeoutMs = 45_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return response.json();
    } catch (error) {
      lastError = error;
    }
    await delay(150);
  }
  throw new Error(`Chrome DevTools did not start: ${lastError?.message ?? "timeout"}`);
}

async function newPage(port, url) {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  });
  if (!response.ok) throw new Error(`Could not create Chrome target: ${response.status}`);
  const target = await response.json();
  if (!target.webSocketDebuggerUrl) throw new Error("Chrome target missing webSocketDebuggerUrl");
  return target.webSocketDebuggerUrl;
}

async function waitForFunction(cdp, expression, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;
  let lastValue;
  while (Date.now() < deadline) {
    const result = await cdp.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    lastValue = result.result?.value;
    if (lastValue) return lastValue;
    await delay(250);
  }
  throw new Error(`Timed out waiting for page condition. Last value: ${JSON.stringify(lastValue)}`);
}

async function evaluate(cdp, expression) {
  const result = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text ?? "Runtime.evaluate failed");
  }
  return result.result?.value;
}

function delay(ms) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, ms));
}

function startChrome(port, userDataDir) {
  if (!existsSync(chromePath)) throw new Error(`Chrome not found at ${chromePath}`);
  return spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--mute-audio",
    "--autoplay-policy=no-user-gesture-required",
    "--disable-background-timer-throttling",
    "--disable-renderer-backgrounding",
    "--disable-backgrounding-occluded-windows",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "about:blank",
  ], { stdio: ["ignore", "pipe", "pipe"] });
}

async function preparePage(cdp, pageUrl) {
  const runtimeErrors = [];
  const resourceWarnings = [];
  cdp.on("Runtime.exceptionThrown", ({ exceptionDetails }) => {
    runtimeErrors.push(exceptionDetails?.text ?? "Runtime exception");
  });
  cdp.on("Log.entryAdded", ({ entry }) => {
    if (entry?.level === "error") resourceWarnings.push(entry.text);
  });

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Log.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
    screenWidth: width,
    screenHeight: height,
  });
  await cdp.send("Page.addScriptToEvaluateOnNewDocument", {
    source: `
      try {
        localStorage.setItem('consultry-pitch:t', '0');
      } catch (_) {}
    `,
  });
  await cdp.send("Page.navigate", { url: pageUrl });

  await waitForFunction(
    cdp,
    `Boolean(document.querySelector('svg[data-om-exportable-video-with-duration-secs]'))`,
  );

  await evaluate(cdp, `new Promise((resolve) => {
    const style = document.createElement('style');
    style.textContent = \`
      html,body,#dc-root,#dc-root>.sc-host{
        width:${width}px!important;height:${height}px!important;
        margin:0!important;overflow:hidden!important;
      }
      [data-omelette-chrome]{display:none!important}
      svg[data-om-exportable-video-with-duration-secs]{
        transform:none!important;box-shadow:none!important;
      }
    \`;
    document.head.appendChild(style);
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  })`);

  const ready = await evaluate(cdp, `(async () => {
    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch (_) {}
    }
    const media = [...document.querySelectorAll('img, video')];
    await Promise.all(media.map((node) => {
      if (node.tagName === 'IMG') {
        return node.complete ? null : new Promise((resolve) => {
          node.onload = resolve; node.onerror = resolve;
        });
      }
      return node.readyState >= 1 ? null : new Promise((resolve) => {
        node.onloadedmetadata = resolve; node.onerror = resolve;
      });
    }));
    const svg = document.querySelector('svg[data-om-exportable-video-with-duration-secs]');
    const rect = svg.getBoundingClientRect();
    return {
      duration: Number(svg.getAttribute('data-om-exportable-video-with-duration-secs')),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      errors: document.querySelectorAll('.sc-logic-error').length
    };
  })()`);

  if (ready.errors) throw new Error(`DC runtime reported ${ready.errors} logic error(s)`);
  if (Math.abs(ready.duration - duration) > 0.01) {
    throw new Error(`Unexpected timeline duration ${ready.duration}; expected ${duration}`);
  }
  if (ready.width !== width || ready.height !== height) {
    throw new Error(`Unexpected capture rect ${ready.width}x${ready.height}; expected ${width}x${height}`);
  }
  if (resourceWarnings.length > 0) {
    writeFileSync(join(here, "renders", "render-console-warnings.log"), resourceWarnings.join("\n"));
  }
  if (runtimeErrors.length > 0) {
    writeFileSync(join(here, "renders", "render-runtime-errors.log"), runtimeErrors.join("\n"));
    throw new Error(`Page reported ${runtimeErrors.length} runtime error(s); see renders/render-runtime-errors.log`);
  }
}

async function seek(cdp, time) {
  await evaluate(cdp, `new Promise((resolve) => {
    const waitForImage = (img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise((done) => {
        const finish = () => done();
        img.onload = finish;
        img.onerror = finish;
        setTimeout(finish, 900);
      });
    };
    const svg = document.querySelector('svg[data-om-exportable-video-with-duration-secs]');
    svg.dispatchEvent(new CustomEvent('data-om-seek-to-time-frame', { detail: { time: ${time.toFixed(6)} } }));
    requestAnimationFrame(() => requestAnimationFrame(async () => {
      await Promise.all([...document.images].map(waitForImage));
      resolve();
    }));
  })`);
}

async function capturePng(cdp, filepath) {
  const shot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
    clip: { x: 0, y: 0, width, height, scale: 1 },
  });
  writeFileSync(filepath, shot.data, "base64");
}

async function renderFrames(cdp, framesDir) {
  mkdirSync(framesDir, { recursive: true });
  const frameCount = Math.round(duration * fps);
  const started = Date.now();

  for (let frame = 0; frame < frameCount; frame += 1) {
    const time = frame / fps;
    await seek(cdp, time);
    await capturePng(cdp, join(framesDir, `frame-${String(frame).padStart(5, "0")}.png`));
    if (frame % fps === 0 || frame === frameCount - 1) {
      const elapsed = (Date.now() - started) / 1000;
      const progress = ((frame + 1) / frameCount) * 100;
      console.log(`frames ${frame + 1}/${frameCount} (${progress.toFixed(1)}%) elapsed ${elapsed.toFixed(1)}s`);
    }
  }
}

async function renderSmoke(cdp) {
  const smokeDir = join(here, "renders", "smoke");
  rmSync(smokeDir, { recursive: true, force: true });
  mkdirSync(smokeDir, { recursive: true });
  const times = smokeTimes.length > 0 ? smokeTimes : [0, 15.7, 32.7, 45.9, 55.8, 69.9];
  for (let i = 0; i < times.length; i += 1) {
    await seek(cdp, times[i]);
    await capturePng(cdp, join(smokeDir, `smoke-${String(i + 1).padStart(2, "0")}-${times[i].toFixed(1)}s.png`));
  }
  console.log(`smoke frames written to ${smokeDir}`);
}

function encodeMp4(framesDir) {
  mkdirSync(dirname(output), { recursive: true });
  const h264Level = fps > 30 ? "4.2" : "4.1";
  const ffmpegArgs = [
    "-y",
    "-framerate", String(fps),
    "-i", join(framesDir, "frame-%05d.png"),
  ];

  if (audioMode === "full") {
    const filter = [
      "[1:a]volume=0.9,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo[vo]",
      "[2:a]volume=1.0,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo[music]",
      "[vo][music]amix=inputs=2:duration=longest:dropout_transition=0:normalize=0,alimiter=limit=0.98[a]",
    ].join(";");
    ffmpegArgs.push(
      "-i", join(here, "voiceover.wav"),
      "-i", join(here, "music.wav"),
      "-filter_complex", filter,
      "-map", "0:v:0",
      "-map", "[a]",
    );
  } else if (audioMode === "music") {
    const filter = "[1:a]volume=1.0,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,alimiter=limit=0.98[a]";
    ffmpegArgs.push(
      "-i", join(here, "music.wav"),
      "-filter_complex", filter,
      "-map", "0:v:0",
      "-map", "[a]",
    );
  } else {
    ffmpegArgs.push("-map", "0:v:0", "-an");
  }

  ffmpegArgs.push(
    "-t", String(duration),
    "-r", String(fps),
    "-c:v", "libx264",
    "-preset", preset,
    "-tune", tune,
    "-crf", String(crf),
    "-pix_fmt", "yuv420p",
    "-profile:v", "high",
    "-level", h264Level,
    "-color_primaries", "bt709",
    "-color_trc", "bt709",
    "-colorspace", "bt709",
  );

  if (audioMode !== "silent") {
    ffmpegArgs.push(
      "-c:a", "aac",
      "-b:a", "192k",
      "-ar", "48000",
      "-ac", "2",
    );
  }

  ffmpegArgs.push("-movflags", "+faststart", output);

  const result = spawnSync("ffmpeg", ffmpegArgs, { encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error(`ffmpeg failed:\n${result.stderr || result.stdout}`);
  }
  if (!existsSync(output) || statSync(output).size === 0) {
    throw new Error(`ffmpeg produced no output at ${output}`);
  }
}

function probeOutput() {
  const result = spawnSync("ffprobe", [
    "-v", "error",
    "-show_entries", "format=duration,size:stream=index,codec_type,codec_name,width,height,sample_rate,channels",
    "-of", "json",
    output,
  ], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`ffprobe failed:\n${result.stderr}`);
  console.log(result.stdout.trim());
}

async function main() {
  ensureTool("ffmpeg");
  ensureTool("ffprobe");
  mkdirSync(join(here, "renders"), { recursive: true });

  const { server, port: serverPort } = await startStaticServer(here);
  const cdpPort = await getFreePort();
  const userDataDir = join(tmpdir(), `consultry-pitch-render-${Date.now()}`);
  const chrome = startChrome(cdpPort, userDataDir);
  chrome.stderr.on("data", (chunk) => {
    const text = String(chunk);
    if (/ERROR|FATAL/i.test(text)) process.stderr.write(text);
  });

  let cdp;
  try {
    await waitForChrome(cdpPort);
    const pageUrl = `http://127.0.0.1:${serverPort}/${fileUrlPath("Consultry Pitch Video.dc.html")}`;
    const wsUrl = await newPage(cdpPort, pageUrl);
    cdp = new Cdp(wsUrl);
    await cdp.connect();
    await preparePage(cdp, pageUrl);

    if (smoke) {
      await renderSmoke(cdp);
      return;
    }

    const framesDir = join(here, "renders", `frames-${fps}fps`);
    rmSync(framesDir, { recursive: true, force: true });
    await renderFrames(cdp, framesDir);
    encodeMp4(framesDir);
    probeOutput();
    if (!keepFrames) rmSync(framesDir, { recursive: true, force: true });
    console.log(`rendered ${output}`);
  } finally {
    cdp?.close();
    try {
      chrome.kill("SIGTERM");
    } catch {}
    server.close();
    await delay(500);
    try {
      rmSync(userDataDir, { recursive: true, force: true });
    } catch {}
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack || error.message : error);
  process.exit(1);
});
