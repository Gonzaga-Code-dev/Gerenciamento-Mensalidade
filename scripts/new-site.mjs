// Cria um site novo a partir do template.
// Uso: npm run new <slug> ["Nome do Negócio"]
import { cpSync, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [slug, ...nameParts] = process.argv.slice(2);
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('Uso: npm run new <slug> ["Nome do Negócio"]  (slug em minúsculas, com hífens)');
  process.exit(1);
}

const name =
  nameParts.join(" ").trim() ||
  slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
const target = join("sites", slug);

if (existsSync(target)) {
  console.error(`Já existe: ${target}`);
  process.exit(1);
}

cpSync(join("templates", "next-site"), target, { recursive: true });

const textFile = /\.(ts|tsx|json|md|css|mjs|svg)$/;
(function replace(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) replace(path);
    else if (textFile.test(entry)) {
      const content = readFileSync(path, "utf8");
      const next = content.replaceAll("__SLUG__", slug).replaceAll("__NAME__", name);
      if (next !== content) writeFileSync(path, next);
    }
  }
})(target);

console.log(`Criado: ${target}`);
console.log(`1. Preencha ${target}/BRIEFING.md`);
console.log(`2. npm install && npm run dev ${slug}`);
