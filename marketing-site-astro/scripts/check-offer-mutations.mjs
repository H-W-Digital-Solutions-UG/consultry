/** Targeted regression evidence, not an exhaustive mutation-coverage report. */
import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { spawn } from "node:child_process";

const modelUrl = new URL("../src/content/offer-demo.ts", import.meta.url);
const testUrl = new URL("../src/content/offer-demo.test.mjs", import.meta.url);
const [originalModel, originalTests] = await Promise.all([
  readFile(modelUrl, "utf8"),
  readFile(testUrl, "utf8"),
]);
const localeDependencies = await Promise.all(['locale.ts', 'offer.ts', 'offer.test.mjs'].map(async name => [name, await readFile(new URL(`../src/i18n/${name}`, import.meta.url), 'utf8')]));

const mutations = [
  {
    name: "analysis price drifts",
    from: 'fee: "3.200 € netto"',
    to: 'fee: "3.900 € netto"',
  },
  {
    name: "implementation duration drifts",
    from: 'duration: "3 Wochen"',
    to: 'duration: "6 Wochen"',
  },
  {
    name: "implementation expands beyond one pilot",
    from: '"Einen kleinen Workflow-Piloten gemeinsam auswählen und umsetzen"',
    to: '"Zwei kleine Workflow-Piloten gemeinsam auswählen und umsetzen"',
  },
  {
    name: "ERP replacement exclusion disappears",
    from: '  "Vollständiger ERP-Ersatz",\n',
    to: "",
  },
  {
    name: "note bound allows an extra character",
    from: ".slice(0, 600)",
    to: ".slice(0, 601)",
  },
  {
    name: "custom empty-note validation is bypassed",
    from: 'if (input.scope === "custom" && !note.trim())',
    to: 'if (input.scope === "custom" && false)',
  },
  {
    name: "custom scope invents a price",
    from: 'fee: "Noch zu klären"',
    to: 'fee: "1.000 € netto"',
  },
  {
    name: "Markdown note fence loses injection protection",
    from: "Math.max(3, longestRun + 1)",
    to: "3",
  },
];

function executeTests(directory) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [
      "--experimental-strip-types",
      "--test",
      "--test-reporter=tap",
      `${directory}/content/offer-demo.test.mjs`,
      `${directory}/i18n/offer.test.mjs`,
    ], { cwd: directory, stdio: ["ignore", "pipe", "pipe"] });
    let output = "";
    child.stdout.setEncoding("utf8").on("data", (chunk) => { output += chunk; });
    child.stderr.setEncoding("utf8").on("data", (chunk) => { output += chunk; });
    child.on("error", reject);
    child.on("close", (code, signal) => resolve({ code, signal, output }));
  });
}

async function runIsolated(model) {
  // Only these exact mkdtemp-created directories are ever written or removed.
  const directory = await mkdtemp(`${tmpdir()}/consultry-offer-mutation-`);
  try {
    await Promise.all([mkdir(`${directory}/content`), mkdir(`${directory}/i18n`)]);
    await Promise.all([
      writeFile(`${directory}/content/offer-demo.ts`, model, { flag: "wx" }),
      writeFile(`${directory}/content/offer-demo.test.mjs`, originalTests, { flag: "wx" }),
      ...localeDependencies.map(([name, source]) => writeFile(`${directory}/i18n/${name}`, source, { flag: 'wx' })),
    ]);
    return await executeTests(directory);
  } finally {
    await rm(directory, { recursive: true, force: false });
  }
}

function tapCount(output, label) {
  const match = output.match(new RegExp(`^# ${label} (\\d+)$`, "m"));
  return match ? Number(match[1]) : null;
}

const baseline = await runIsolated(originalModel);
const baselineTests = tapCount(baseline.output, "tests");
if (baseline.code !== 0 || baseline.signal || !baselineTests || tapCount(baseline.output, "fail") !== 0) {
  process.stderr.write(baseline.output);
  throw new Error("The isolated baseline must pass before running any mutations.");
}
process.stdout.write(`Baseline: ${baselineTests} tests passed.\n`);

let detected = 0;
for (const mutation of mutations) {
  if (originalModel.split(mutation.from).length !== 2) {
    throw new Error(`Mutation anchor must occur exactly once: ${mutation.name}`);
  }
  // Every mutant starts from the original, never from another mutated copy.
  const result = await runIsolated(originalModel.replace(mutation.from, mutation.to));
  const failures = tapCount(result.output, "fail");
  const assertions = [...result.output.matchAll(/^\s+code: 'ERR_ASSERTION'$/gm)].length;
  const compileOrLoadFailure = /SyntaxError|ERR_MODULE_NOT_FOUND|ERR_UNKNOWN_FILE_EXTENSION|ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX|ERR_INVALID_TYPESCRIPT_SYNTAX/.test(result.output);
  if (result.code !== 1 || result.signal || !failures || failures !== assertions ||
      tapCount(result.output, "tests") !== baselineTests ||
      tapCount(result.output, "cancelled") !== 0 || compileOrLoadFailure) {
    process.stderr.write(result.output);
    throw new Error(`Mutation must be rejected by assertions, not compilation or infrastructure: ${mutation.name}`);
  }
  detected += 1;
  process.stdout.write(`Detected: ${mutation.name} (${failures} assertion failure${failures === 1 ? "" : "s"}).\n`);
}

// A concurrent real-source edit must not be mistaken for this harness's result.
const [currentModel, currentTests] = await Promise.all([
  readFile(modelUrl, "utf8"),
  readFile(testUrl, "utf8"),
]);
if (currentModel !== originalModel || currentTests !== originalTests) {
  throw new Error("Source or tests changed during the run; repeat against the current files.");
}
process.stdout.write(`Targeted mutation check: ${detected}/${mutations.length} detected. Source files unchanged; temporary copies removed.\n`);
