import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// Final: compaction kept the trivia verbatim and vague-ified the deadline —
// the useless thing it preserved in full is saved for the very end.
const excuse =
  "Apologies for missing the deadline. It was in my context window, but compaction reduced it to 'a date exists' \u2014 while preserving, verbatim, the entire office lunch order.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, excuse, "utf8");
