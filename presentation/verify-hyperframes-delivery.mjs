#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const full = process.argv.includes("--full");
const manifestRelativePath = "presentation/hyperframes-delivery-manifest.json";
const failures = [];

function fail(message) {
  failures.push(message);
  console.error(`✗ ${message}`);
}

function ok(message) {
  console.log(`✓ ${message}`);
}

function abs(relativePath) {
  return resolve(root, relativePath);
}

function loadManifest() {
  if (!existsSync(abs(manifestRelativePath))) {
    console.error(`Missing ${manifestRelativePath}`);
    process.exit(1);
  }

  try {
    return JSON.parse(readFileSync(abs(manifestRelativePath), "utf8"));
  } catch (error) {
    console.error(`Could not parse ${manifestRelativePath}: ${error.message}`);
    process.exit(1);
  }
}

const manifest = loadManifest();
const videos = Array.isArray(manifest.videos) ? manifest.videos : [];
const requiredPackageFiles = [manifestRelativePath, ...(manifest.requiredFiles ?? [])];
const brandAssets = Array.isArray(manifest.brandAssets) ? manifest.brandAssets : [];

function assertExists(relativePath) {
  if (!existsSync(abs(relativePath))) {
    fail(`Missing ${relativePath}`);
    return false;
  }
  return true;
}

function ffprobe(relativePath, entries) {
  try {
    const output = execFileSync(
      "ffprobe",
      ["-v", "error", "-show_entries", entries, "-of", "json", abs(relativePath)],
      { encoding: "utf8" },
    );
    return JSON.parse(output);
  } catch (error) {
    fail(`ffprobe failed for ${relativePath}: ${error.message}`);
    return null;
  }
}

function assertStreamDimensions(relativePath, expectedWidth, expectedHeight, label) {
  if (!Number.isFinite(expectedWidth) || !Number.isFinite(expectedHeight)) {
    fail(`${label} missing expected dimensions`);
    return;
  }

  const image = ffprobe(relativePath, "stream=codec_type,codec_name,width,height");
  const stream = image?.streams?.[0];
  if (!stream) return;
  if (stream.width !== expectedWidth || stream.height !== expectedHeight) {
    fail(`${label} expected ${expectedWidth}x${expectedHeight}, got ${stream.width}x${stream.height}`);
    return;
  }
  ok(`${label} ${stream.width}x${stream.height}`);
}

function verifyRequiredFiles() {
  let missing = 0;
  for (const file of requiredPackageFiles) {
    if (!assertExists(file)) missing += 1;
  }

  if (missing === 0) ok("delivery docs and review files present");
}

function assertNear(actual, expected, tolerance, label) {
  if (!Number.isFinite(actual)) {
    fail(`${label} missing numeric value`);
    return;
  }

  if (Math.abs(actual - expected) > tolerance) {
    fail(`${label} expected ${expected}, got ${actual}`);
    return;
  }
  ok(`${label} ${actual.toFixed(3)}`);
}

function expectation(video, key) {
  return {
    ...(manifest.expected?.[key] ?? {}),
    ...(video.expected?.[key] ?? {}),
  };
}

function videoLabel(video) {
  return video.name ?? video.id ?? "Unnamed video";
}

function collectHtmlLocalRefs(relativePath, label) {
  if (!assertExists(relativePath)) return null;
  const html = readFileSync(abs(relativePath), "utf8");
  const htmlDir = dirname(abs(relativePath));
  const refs = [];
  const attrPattern = /\b(?:href|src|poster)="([^"]+)"/g;
  let match;
  while ((match = attrPattern.exec(html))) {
    const ref = match[1];
    if (/^(https?:|mailto:|data:|#)/.test(ref)) continue;
    refs.push(ref);
  }

  let missing = 0;
  for (const ref of refs) {
    if (!existsSync(resolve(htmlDir, ref))) {
      missing += 1;
      fail(`${label} missing local ref: ${ref}`);
    }
  }
  if (missing === 0) ok(`${label} local refs ${refs.length}/0 missing`);
  return { html, refs };
}

function manifestPathToHtmlRef(manifestPath, htmlPath) {
  return relative(dirname(abs(htmlPath)), abs(manifestPath)).replaceAll("\\", "/");
}

function verifyHtmlLocalRefs(relativePath, label) {
  collectHtmlLocalRefs(relativePath, label);
}

function verifyBrandAssets() {
  if (brandAssets.length === 0) {
    fail("Manifest has no brandAssets");
    return;
  }

  let missing = 0;
  for (const asset of brandAssets) {
    if (!assertExists(asset)) {
      missing += 1;
      continue;
    }

    const body = readFileSync(abs(asset), "utf8");
    if (!body.includes("<svg")) {
      fail(`Brand asset is not SVG: ${asset}`);
      missing += 1;
    }
  }

  if (missing === 0) ok(`brand assets ${brandAssets.length}/0 missing`);
}

function verifyReviewPage() {
  const review = manifest.review?.page;
  if (!review) {
    fail("Manifest missing review.page");
    return;
  }

  const reviewData = collectHtmlLocalRefs(review, "review page");
  if (!reviewData) return;

  const expectedRefs = new Set();
  if (manifest.review?.brandAsset) expectedRefs.add(manifestPathToHtmlRef(manifest.review.brandAsset, review));
  for (const video of videos) {
    expectedRefs.add(manifestPathToHtmlRef(video.mp4, review));
    expectedRefs.add(manifestPathToHtmlRef(video.posterFrame, review));
    expectedRefs.add(manifestPathToHtmlRef(video.contactSheet, review));
    expectedRefs.add(manifestPathToHtmlRef(video.sourceHtml, review));
    expectedRefs.add(manifestPathToHtmlRef(video.script, review));
    expectedRefs.add(manifestPathToHtmlRef(video.speakerTimeline, review));
    expectedRefs.add(manifestPathToHtmlRef(video.storyboard, review));
  }

  let missingExpectedRef = 0;
  for (const expectedRef of expectedRefs) {
    if (!reviewData.refs.includes(expectedRef)) {
      missingExpectedRef += 1;
      fail(`Review page does not reference manifest asset: ${expectedRef}`);
    }
  }
  if (missingExpectedRef === 0) ok(`review page manifest refs ${expectedRefs.size}/0 missing`);

  const expectedMp4Refs = new Set(videos.map((video) => manifestPathToHtmlRef(video.mp4, review)));
  const reviewMp4Refs = reviewData.refs.filter((ref) => ref.endsWith(".mp4"));
  const uniqueReviewMp4Refs = new Set(reviewMp4Refs);
  let unexpectedMp4Ref = 0;
  for (const ref of uniqueReviewMp4Refs) {
    if (!expectedMp4Refs.has(ref)) fail(`Review page references non-manifest MP4: ${ref}`);
    unexpectedMp4Ref += expectedMp4Refs.has(ref) ? 0 : 1;
  }
  if (unexpectedMp4Ref === 0 && uniqueReviewMp4Refs.size === expectedMp4Refs.size) {
    ok(`review page final MP4 refs ${uniqueReviewMp4Refs.size}/${expectedMp4Refs.size}`);
  }

  let draftRefCount = 0;
  for (const draftArtifact of manifest.nonFinalDraftArtifacts ?? []) {
    const draftRef = manifestPathToHtmlRef(draftArtifact, review).replace(/\/$/, "");
    for (const ref of reviewData.refs) {
      if (ref === draftRef || ref.startsWith(`${draftRef}/`)) {
        draftRefCount += 1;
        fail(`Review page references non-final artifact: ${ref}`);
      }
    }
  }
  if (draftRefCount === 0) ok("review page non-final refs 0");
}

function verifyReviewScreenshot() {
  const screenshot = manifest.review?.screenshot;
  if (!screenshot) {
    fail("Manifest missing review.screenshot");
    return;
  }

  assertStreamDimensions(
    screenshot,
    manifest.review?.screenshotWidth,
    manifest.review?.screenshotHeight,
    "review screenshot",
  );
}

function verifyServeScript() {
  const result = spawnSync("npm", ["run", "serve:check"], { cwd: here, encoding: "utf8" });
  if (result.error) {
    fail(`serve:check failed: ${result.error.message}`);
    return;
  }

  if (result.status !== 0) {
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    fail("serve:check failed");
    return;
  }

  const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  const expectedLines = ["Review page:", "Win Projects MP4:", "Win Projects 720p MP4:", "Second Brain MP4:"];
  const missingLines = expectedLines.filter((line) => !output.includes(line));
  if (missingLines.length > 0) {
    fail(`serve:check missing output: ${missingLines.join(", ")}`);
    return;
  }

  ok("serve script check");
}

function verifyMp4Metadata(relativePath, expected, label, tolerance) {
  const data = ffprobe(
    relativePath,
    "format=duration,size:stream=index,codec_type,codec_name,width,height,r_frame_rate,duration",
  );
  if (!data) return;

  const videoStream = data.streams?.find((stream) => stream.codec_type === "video");
  const audioStream = data.streams?.find((stream) => stream.codec_type === "audio");
  if (!videoStream) fail(`${label} missing video stream`);
  if (!audioStream) fail(`${label} missing audio stream`);

  if (videoStream) {
    if (videoStream.codec_name !== expected.codec) fail(`${label} video codec expected ${expected.codec}, got ${videoStream.codec_name}`);
    if (videoStream.width !== expected.width || videoStream.height !== expected.height) fail(`${label} expected ${expected.width}x${expected.height}, got ${videoStream.width}x${videoStream.height}`);
    if (videoStream.r_frame_rate !== expected.fps) fail(`${label} expected ${expected.fps} fps, got ${videoStream.r_frame_rate}`);
  }

  if (audioStream && audioStream.codec_name !== expected.audioCodec) {
    fail(`${label} audio codec expected ${expected.audioCodec}, got ${audioStream.codec_name}`);
  }

  assertNear(Number(data.format?.duration), expected.duration, tolerance, `${label} duration`);
  ok(`${label} media metadata`);
}

function verifyRenditions(video, durationTolerance) {
  const renditions = Array.isArray(video.renditions) ? video.renditions : [];
  for (const rendition of renditions) {
    const label = `${videoLabel(video)} ${rendition.label ?? "rendition"}`;
    const requiredFields = ["mp4", "width", "height", "codec", "fps", "audioCodec", "duration"];
    let missingField = false;
    for (const field of requiredFields) {
      if (rendition[field] === undefined || rendition[field] === "") {
        fail(`${label} missing manifest field ${field}`);
        missingField = true;
      }
    }
    if (missingField) continue;
    if (!assertExists(rendition.mp4)) continue;
    verifyMp4Metadata(rendition.mp4, rendition, label, durationTolerance);
  }
}

function verifyVideo(video) {
  const name = videoLabel(video);
  const requiredFields = [
    "projectDir",
    "mp4",
    "posterFrame",
    "contactSheet",
    "sourceHtml",
    "voiceover",
    "script",
    "speakerTimeline",
    "storyboard",
    "duration",
    "voiceoverDuration",
  ];
  let missingField = false;
  for (const field of requiredFields) {
    if (video[field] === undefined || video[field] === "") {
      fail(`${name} missing manifest field ${field}`);
      missingField = true;
    }
  }
  if (missingField) return;

  for (const path of [
    video.projectDir,
    video.mp4,
    video.posterFrame,
    video.contactSheet,
    video.sourceHtml,
    video.voiceover,
    video.script,
    video.speakerTimeline,
    video.storyboard,
  ]) {
    assertExists(path);
  }

  const expectedVideo = expectation(video, "video");
  const expectedPoster = expectation(video, "posterFrame");
  const expectedContactSheet = expectation(video, "contactSheet");
  const expectedVoiceover = expectation(video, "voiceover");
  const durationTolerance = video.durationTolerance ?? manifest.expected?.durationTolerance ?? 0.08;

  verifyMp4Metadata(video.mp4, { ...expectedVideo, duration: video.duration }, name, durationTolerance);

  assertStreamDimensions(video.posterFrame, expectedPoster.width, expectedPoster.height, `${name} poster`);
  assertStreamDimensions(video.contactSheet, expectedContactSheet.width, expectedContactSheet.height, `${name} contact sheet`);

  const voiceover = ffprobe(video.voiceover, "format=duration,size:stream=index,codec_type,codec_name,duration");
  const voiceoverStream = voiceover?.streams?.find((stream) => stream.codec_type === "audio");
  if (!voiceoverStream) {
    fail(`${name} voiceover missing audio stream`);
  } else {
    if (voiceoverStream.codec_name !== expectedVoiceover.codec) fail(`${name} voiceover expected ${expectedVoiceover.codec}, got ${voiceoverStream.codec_name}`);
    assertNear(Number(voiceover.format?.duration), video.voiceoverDuration, durationTolerance, `${name} voiceover duration`);
  }

  verifyRenditions(video, durationTolerance);
  verifyHtmlLocalRefs(video.sourceHtml, `${name} source HTML`);
}

function verifyFullProjectCheck(video) {
  const cwd = abs(video.projectDir);
  const result = spawnSync("npm", ["run", "check"], { cwd, encoding: "utf8" });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);

  const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  const warningDetected =
    output.includes("⚠") ||
    /\b[1-9]\d*\s+warning(?:s|\(s\))\b/i.test(output) ||
    /Could not read the duration/i.test(output);

  if (result.error) {
    fail(`${videoLabel(video)} npm run check failed: ${result.error.message}`);
    return;
  }

  if (result.status !== 0) {
    fail(`${videoLabel(video)} npm run check failed`);
  } else if (warningDetected) {
    fail(`${videoLabel(video)} npm run check emitted warnings`);
  } else {
    ok(`${videoLabel(video)} npm run check without warnings`);
  }
}

console.log("Consultry HyperFrames delivery verification");
verifyRequiredFiles();
verifyBrandAssets();
verifyReviewPage();
verifyReviewScreenshot();
verifyServeScript();
if (videos.length === 0) fail("Manifest has no videos");
for (const video of videos) verifyVideo(video);

if (full) {
  for (const video of videos) verifyFullProjectCheck(video);
} else {
  console.log("ℹ use --full to also run each HyperFrames npm run check");
}

if (failures.length > 0) {
  console.error(`\n${failures.length} verification failure(s).`);
  process.exit(1);
}

console.log("\nDelivery package looks consistent.");
