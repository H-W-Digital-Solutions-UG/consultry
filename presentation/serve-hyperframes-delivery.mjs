#!/usr/bin/env node
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const host = "127.0.0.1";
const defaultPort = 4179;
const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const explicitPortIndex = args.indexOf("--port");
const requestedPort =
  explicitPortIndex >= 0 && args[explicitPortIndex + 1]
    ? Number(args[explicitPortIndex + 1])
    : Number(process.env.PORT ?? defaultPort);

const files = {
  review: "consultry-hyperframes-review.html",
  winProjects: "consultry-hyperframes-video/renders/consultry-hyperframes-google-voice.mp4",
  winProjects720p: "consultry-hyperframes-video/renders/consultry-hyperframes-google-voice-720p.mp4",
  secondBrain: "consultry-hyperframes-second-brain-video/renders/consultry-hyperframes-second-brain-google-voice.mp4",
};

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function urlFor(port, file) {
  return `http://${host}:${port}/${file}`;
}

function assertServedFilesExist() {
  const missing = Object.values(files).filter((file) => !existsSync(resolve(here, file)));
  if (missing.length > 0) {
    throw new Error(`Missing served file(s): ${missing.join(", ")}`);
  }
}

function toSafePath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relativePath = decoded === "/" ? files.review : decoded.replace(/^\/+/, "");
  const candidate = resolve(here, normalize(relativePath));
  const insideRoot = candidate === here || candidate.startsWith(`${here}${sep}`);
  return insideRoot ? candidate : null;
}

function printUrls(port) {
  console.log(`Consultry HyperFrames delivery server`);
  console.log(`Review page: ${urlFor(port, files.review)}`);
  console.log(`Win Projects MP4: ${urlFor(port, files.winProjects)}`);
  console.log(`Win Projects 720p MP4: ${urlFor(port, files.winProjects720p)}`);
  console.log(`Second Brain MP4: ${urlFor(port, files.secondBrain)}`);
}

function listen(server, port) {
  return new Promise((resolveListen, rejectListen) => {
    function onError(error) {
      server.off("listening", onListening);
      rejectListen(error);
    }

    function onListening() {
      server.off("error", onError);
      resolveListen();
    }

    server.once("error", onError);
    server.once("listening", onListening);
    server.listen(port, host);
  });
}

async function start() {
  assertServedFilesExist();

  if (checkOnly) {
    printUrls(requestedPort);
    return;
  }

  const server = createServer((request, response) => {
    try {
      const safePath = toSafePath(new URL(request.url ?? "/", `http://${host}`).pathname);
      if (!safePath || !existsSync(safePath) || !statSync(safePath).isFile()) {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "content-type": mimeTypes[extname(safePath).toLowerCase()] ?? "application/octet-stream",
        "x-content-type-options": "nosniff",
      });
      createReadStream(safePath).pipe(response);
    } catch (error) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end(error instanceof Error ? error.message : "Server error");
    }
  });

  let port = requestedPort;
  for (let attempts = 0; attempts < 25; attempts += 1) {
    try {
      await listen(server, port);
      printUrls(port);
      console.log("Press Ctrl+C to stop.");
      return;
    } catch (error) {
      if (error?.code !== "EADDRINUSE") throw error;
      port += 1;
    }
  }

  throw new Error(`Could not find an open local port starting at ${requestedPort}`);
}

start().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
