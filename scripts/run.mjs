// Roda um script do npm em um site específico.
// Uso: npm run dev <slug>  |  npm run build <slug>  |  npm run lint <slug>
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";

const [script, slug] = process.argv.slice(2);
const sites = existsSync("sites") ? readdirSync("sites") : [];

if (!slug || !sites.includes(slug)) {
  console.error(`Uso: npm run ${script} <site>\nSites: ${sites.join(", ") || "(nenhum)"}`);
  process.exit(1);
}

const result = spawnSync("npm", ["run", script, "-w", `sites/${slug}`], {
  stdio: "inherit",
  shell: process.platform === "win32",
});
process.exit(result.status ?? 1);
