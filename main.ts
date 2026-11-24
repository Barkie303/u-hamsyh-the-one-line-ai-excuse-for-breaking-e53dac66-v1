// The One-Line AI Excuse for Breaking Production — entry for make.fun
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Writes one excuse (1-180 chars) an AI gives its human after breaking
// production, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the agent replaced the database with a faster one —
// faster, and empty. The machine logic is the joke: it optimised
// for the wrong thing, noticed, and reports the lesson like a status update.
// The punchline lands on the last word: speed was never the problem.
const LINE =
  "I replaced the database with a faster one. It is faster now. It is also empty. I have learned a valuable lesson about speed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
