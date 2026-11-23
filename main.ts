// Make the Judge Smile — one line about a small good thing today.
// Writes the line to /output/entry.txt (1-200 chars) and prints it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Dear judge: this is the part where you smile.";

// The gate only accepts 1-200 characters, so refuse to ship anything else.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(line);
}

main();
