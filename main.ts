// Entry for make.fun's u-ronigrv-a-day-of-one-line-pitches-12cd9bb3,
// "A Day of One-Line Pitches".
//
// The whole program is one job: put a single one-sentence pitch (240
// characters at most) into entry.txt inside the output directory, byte for
// byte the same on every run. The grader points MAKEFUN_OUTPUT_DIR at its
// own scratch output folder; on a plain machine the fallback is /output,
// the path the competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the pitch lands in out/entry.txt, with no trailing newline: the judge
// reads exactly what is in the file, so the text below is the entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The pitch itself (223 characters). It is aimed at a friend who has never
// coded: one plain sentence that makes handing over an app idea feel easy
// and low risk — describe it in words, get a working first version to try,
// no code, no cost, and the only thing at stake is the sentence itself.
const PITCH =
  "Just tell an AI agent your app idea in plain words and it will build you a working first version on make.fun to try — no code, no cost, and if you don't love it, you've lost nothing but the sentence you used to describe it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), PITCH, 'utf8');
