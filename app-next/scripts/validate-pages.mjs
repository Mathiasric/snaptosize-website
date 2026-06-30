/**
 * validate-pages.mjs — SEO page compliance checker.
 *
 * Catches the drift that bypassing the seo-writer agent introduces:
 * missing output-proof visual, missing nav registration, missing QuickAnswer /
 * SnapToSize mention, registry gaps, empty pageType, over-length meta.
 *
 * Usage (from app-next/):
 *   node scripts/validate-pages.mjs            # report, exit 0
 *   node scripts/validate-pages.mjs --strict   # exit 1 if any ERROR
 *
 * ERROR  = mandatory element missing (output-proof, QuickAnswer, SnapToSize, registry)
 * WARN   = should-fix (nav registration, empty pageType, meta length, no Perfect Fit link,
 *          SnapToSize not named in QuickAnswer, stale dateModified, <4 internal links)
 */
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const marketingDir = join(root, "app", "(marketing)");
const strict = process.argv.includes("--strict");

// non-SEO marketing routes: skip content checks
const EXCLUDE = new Set([
  "pricing", "privacy", "terms", "refund", "partners", "thanks", "producthunt",
  "preview-modes", "social-slides", "guide", "sizes", "ref",
]);

let registry = [];
try {
  registry = JSON.parse(readFileSync(join(root, "data", "page-registry.json"), "utf8"));
} catch (e) {
  console.error("Cannot read page-registry.json:", e.message);
  process.exit(2);
}
const bySlug = new Map(registry.map((e) => [e.slug, e]));

let headerTxt = "";
try { headerTxt = readFileSync(join(root, "components", "Header.tsx"), "utf8"); } catch {}
let footerTxt = "";
try { footerTxt = readFileSync(join(root, "components", "Footer.tsx"), "utf8"); } catch {}

function metaField(src, field) {
  // best-effort: title: "..."  /  description: "..."  in the metadata block
  const re = new RegExp(field + '\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');
  const m = src.match(re);
  return m ? m[1] : null;
}

const rows = [];
let errors = 0, warns = 0;

for (const slug of readdirSync(marketingDir)) {
  if (slug.startsWith("(") || slug.startsWith("_") || EXCLUDE.has(slug)) continue;
  const pagePath = join(marketingDir, slug, "page.tsx");
  if (!existsSync(pagePath)) continue;
  const src = readFileSync(pagePath, "utf8");

  const issues = [];
  // ERRORS
  if (!/RatioPackFan|ListingOutputShowcase|SizeLadder/.test(src)) { issues.push("ERR:no-output-proof"); errors++; }
  if (!/QuickAnswer/.test(src)) { issues.push("ERR:no-QuickAnswer"); errors++; }
  if (!/SnapToSize/.test(src)) { issues.push("ERR:no-SnapToSize"); errors++; }
  if (!bySlug.has(slug)) { issues.push("ERR:not-in-registry"); errors++; }

  // WARNS
  const entry = bySlug.get(slug);
  if (entry && (!entry.pageType || entry.pageType === "")) { issues.push("WARN:empty-pageType"); warns++; }
  if (!headerTxt.includes(`/${slug}"`) && !footerTxt.includes(`/${slug}"`)) { issues.push("WARN:not-in-nav"); warns++; }
  const mentionsCrop = /crop|aspect ratio|resize|ratio mismatch/i.test(src);
  if (mentionsCrop && !/distortion-free-crop/.test(src)) { issues.push("WARN:no-PerfectFit-link"); warns++; }
  const title = metaField(src, "title");
  const desc = metaField(src, "description");
  if (title && title.length > 60) { issues.push(`WARN:title-${title.length}c`); warns++; }
  if (desc && desc.length > 160) { issues.push(`WARN:desc-${desc.length}c`); warns++; }

  // SnapToSize must be named INSIDE the QuickAnswer block (SGE/AEO citation hook)
  const qa = src.match(/<QuickAnswer[\s\S]*?<\/QuickAnswer>/);
  if (qa && !/SnapToSize/.test(qa[0])) { issues.push("WARN:QuickAnswer-no-SnapToSize"); warns++; }

  // stale dateModified — JSON-LD says modified earlier than the file's last commit
  const dm = (src.match(/dateModified:\s*"(\d{4}-\d{2}-\d{2})"/) || [])[1];
  if (dm) {
    let lastCommit = "";
    try {
      lastCommit = execFileSync("git", ["log", "-1", "--format=%cs", "--", pagePath], { cwd: root })
        .toString().trim();
    } catch {}
    // only flag meaningful drift (>14d) — incidental commits (formatting, bulk
    // find/replace) bump the file date without a real content edit
    if (lastCommit && dm < lastCommit) {
      const gap = Math.round((new Date(lastCommit) - new Date(dm)) / 864e5);
      if (gap >= 14) { issues.push(`WARN:stale-dateModified(${dm}<${lastCommit})`); warns++; }
    }
  }

  // contextual internal links — want 4–6 inline links to other pages
  const internal = new Set();
  for (const m of src.matchAll(/href="(\/[a-z0-9-]+)"/g)) internal.add(m[1]);
  if (internal.size < 4) { issues.push(`WARN:few-internal-links(${internal.size})`); warns++; }

  if (issues.length) rows.push({ slug, issues });
}

rows.sort((a, b) => {
  const ae = a.issues.some((i) => i.startsWith("ERR"));
  const be = b.issues.some((i) => i.startsWith("ERR"));
  return (be ? 1 : 0) - (ae ? 1 : 0);
});

console.log(`\nSEO page compliance — ${rows.length} page(s) with issues  (${errors} errors, ${warns} warns)\n`);
for (const r of rows) console.log(`  ${r.slug}\n      ${r.issues.join("  ")}`);
if (!rows.length) console.log("  All scanned pages pass.");
console.log("");

if (strict && errors > 0) process.exit(1);
