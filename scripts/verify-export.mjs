/**
 * Post-build sanity check for the static export in ./out:
 *   1. every internal link/image/asset reference resolves to a real file
 *   2. every JSON-LD block parses and has a @type
 * Run after `next build`: node scripts/verify-export.mjs
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const OUT = resolve("out");
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const errors = [];

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) yield* htmlFiles(path);
    else if (entry.endsWith(".html")) yield path;
  }
}

function targetExists(url) {
  let path = url.split(/[#?]/)[0];
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  if (path === "") path = "/";
  const file = join(OUT, path);
  return (
    existsSync(file) ||
    existsSync(join(file, "index.html")) ||
    existsSync(`${file.replace(/\/$/, "")}.html`)
  );
}

let pages = 0;
for (const file of htmlFiles(OUT)) {
  pages++;
  const html = readFileSync(file, "utf8");

  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const url = match[1];
    if (url.startsWith("//")) continue;
    if (!targetExists(url)) {
      errors.push(`${file}: broken internal reference ${url}`);
    }
  }

  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      const data = JSON.parse(match[1]);
      if (!data["@type"]) errors.push(`${file}: JSON-LD missing @type`);
    } catch {
      errors.push(`${file}: invalid JSON-LD`);
    }
  }
}

if (!existsSync(join(OUT, "sitemap.xml"))) errors.push("missing sitemap.xml");
if (!existsSync(join(OUT, "robots.txt"))) errors.push("missing robots.txt");

if (errors.length) {
  console.error(`✗ verify-export failed (${errors.length} issue(s)):`);
  for (const err of [...new Set(errors)]) console.error(`  - ${err}`);
  process.exit(1);
}
console.log(`✓ verify-export: ${pages} pages OK - links, JSON-LD, sitemap, robots`);
