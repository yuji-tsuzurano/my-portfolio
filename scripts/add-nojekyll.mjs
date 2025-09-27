import { promises as fs } from "node:fs";
import { join } from "node:path";

// Ensure out/.nojekyll exists to prevent GitHub Pages (Jekyll) from ignoring the _next directory
const outDir = join(process.cwd(), "out");
const nojekyllPath = join(outDir, ".nojekyll");

await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(nojekyllPath, "");
console.log(`[postexport] Created ${nojekyllPath}`);
