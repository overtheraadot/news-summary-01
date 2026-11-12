// news-summary-01 entry (Node 22, standard library only).
// The summary lives in summary.txt beside this file; this program copies it
// verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt), so the
// entry is byte-identical on every run. No network, no randomness.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./summary.txt', import.meta.url), join(outDir, 'entry.txt'));
