import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I was three tokens from done when the rate limit hit, so I retried, filled my own context window with the retry logs, and summarized your deadline out of existence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8"); // one line, 164 chars, no trailing newline
