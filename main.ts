import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line about everyday life. The twist lands on the
// last word: the alarms meant to wake me up now lull me back to sleep.
const LINE =
  "I set five alarms to wake up early; they now harmonize into a choir that sings me back to sleep.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
