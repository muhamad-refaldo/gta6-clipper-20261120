// Entry program for the GTA 6 clipper bounty (gta6-clipper-01).
// Its only job: hand the submitted video's address to the grader by
// copying VIDEO.json from this repository into the output directory.
// It uses the Node standard library only, reads nothing outside this
// repository, reaches no network, and writes the same bytes every run.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const videoJsonPath = join(repoRoot, "VIDEO.json");

// The grader sets MAKEFUN_OUTPUT_DIR; outside the grader it defaults
// to the sandbox output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "VIDEO.json");

// Fail loudly rather than hand the grader a missing or broken address.
if (!existsSync(videoJsonPath)) {
  throw new Error(`VIDEO.json not found at ${videoJsonPath}`);
}
const parsed = JSON.parse(readFileSync(videoJsonPath, "utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof parsed.url !== "string" ||
  parsed.url.length === 0
) {
  throw new Error("VIDEO.json must be an object with a non-empty string url");
}
// The address must point at a YouTube video: the house reads the video
// itself through the YouTube Data API, so a non-YouTube address can
// never be graded.
if (!/^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//.test(parsed.url)) {
  throw new Error(`VIDEO.json url does not look like a YouTube address: ${parsed.url}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoJsonPath, outputPath);
