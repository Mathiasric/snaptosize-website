/**
 * improve-candidates.mjs — ranks EXISTING pages for IMPROVE work.
 *
 * Replaces the manual session-start triage (validate-pages × content-gaps ×
 * git-log edit-date). Joins three sources into one ranked list:
 *   1. marketing/seo-optimizer/striking-distance.json — per-page GSC
 *      (impressions, position, ctr, ctr_gap). Scoped to position 5–15 = the
 *      movable sweet spot (page 1–2). Pages ranking 30+ won't appear here.
 *   2. validate-pages.mjs — per-page compliance issues (run + parsed).
 *   3. git log — file edit date → the GSC-lag guard (don't re-edit a page
 *      touched <30 days ago; GSC needs weeks to reflect a change).
 *
 * Usage (from app-next/):
 *   node scripts/improve-candidates.mjs            # top lag-safe candidates
 *   node scripts/improve-candidates.mjs --all      # include recently-edited (WAIT) pages
 *   node scripts/improve-candidates.mjs --n=25     # show N rows
 *
 * Highest-leverage pick = top lag-safe row that ALSO has compliance warns
 * (weak CTR + fixable structure = a lever you can actually pull).
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");            // app-next
const repoRoot = join(root, "..");
const marketingDir = join(root, "app", "(marketing)");

const LAG_DAYS = 30;
// non-content / index routes — real GSC traffic but not standard IMPROVE targets
const EXCLUDE = new Set(["sizes", "guide", "pricing", "producthunt", "ref", "social-slides"]);
const showAll = process.argv.includes("--all");
const nArg = process.argv.find((a) => a.startsWith("--n="));
const N = nArg ? Number(nArg.split("=")[1]) || 15 : 15;

// 1. per-page GSC (striking distance)
let sd;
try {
  sd = JSON.parse(
    readFileSync(join(repoRoot, "marketing", "seo-optimizer", "striking-distance.json"), "utf8"),
  );
} catch (e) {
  console.error("Cannot read striking-distance.json — run the GSC pull first.", e.message);
  process.exit(2);
}

// 2. compliance map — run validate-pages.mjs and parse its text output
const compliance = new Map();
try {
  const out = execFileSync("node", ["scripts/validate-pages.mjs"], { cwd: root }).toString();
  const lines = out.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s{2}([a-z0-9-]+)\s*$/);
    if (m && lines[i + 1] && /(ERR|WARN):/.test(lines[i + 1])) {
      compliance.set(m[1], lines[i + 1].trim());
    }
  }
} catch {
  /* validate-pages exits 0 in report mode; ignore */
}

// 3. edit-date / lag guard
function editInfo(slug) {
  const p = join(marketingDir, slug, "page.tsx");
  let date = "";
  try {
    date = execFileSync("git", ["log", "-1", "--format=%cs", "--", p], { cwd: repoRoot })
      .toString()
      .trim();
  } catch {
    /* file may be untracked */
  }
  if (!date) return { date: "?", days: Infinity, safe: true };
  const days = Math.round((Date.now() - new Date(date + "T00:00:00Z").getTime()) / 864e5);
  return { date, days, safe: days >= LAG_DAYS };
}

const rows = sd.pages.filter((p) => !EXCLUDE.has(p.slug)).map((p) => {
  const potential = Math.round((p.impressions * (p.ctr_gap || 0)) / 100);
  const ei = editInfo(p.slug);
  const comp = compliance.get(p.slug) || "";
  return {
    slug: p.slug,
    imp: p.impressions,
    pos: p.position,
    ctr: p.ctr_pct,
    potential,
    days: ei.days,
    safe: ei.safe,
    comp,
    hasWarns: /(ERR|WARN):/.test(comp),
  };
});

const ranked = rows
  .filter((r) => showAll || r.safe)
  .sort((a, b) => b.potential - a.potential || (b.hasWarns ? 1 : 0) - (a.hasWarns ? 1 : 0));

const gen = (sd.generated || "").slice(0, 10);
const pad = (s, n) => String(s).padEnd(n);

console.log(`\nIMPROVE candidates — ranked by potential extra clicks  (GSC striking-distance ${gen}, pos 5–15)`);
console.log(
  `Lag guard: pages edited <${LAG_DAYS}d ago ${showAll ? "shown (WAIT)" : "hidden — use --all to see them"}. ${ranked.length} candidate(s).\n`,
);
console.log(
  "  " + pad("slug", 42) + pad("imp", 7) + pad("pos", 6) + pad("ctr%", 6) + pad("~clk", 7) + pad("edited", 12) + "compliance",
);
console.log("  " + "-".repeat(95));
for (const r of ranked.slice(0, showAll ? ranked.length : N)) {
  const edited = r.days === Infinity ? "untracked" : `${r.days}d${r.safe ? "" : " WAIT"}`;
  console.log(
    "  " +
      pad(r.slug, 42) +
      pad(r.imp, 7) +
      pad(Number(r.pos).toFixed(1), 6) +
      pad(r.ctr, 6) +
      pad("+" + r.potential, 7) +
      pad(edited, 12) +
      (r.comp || "clean"),
  );
}
console.log(
  "\nTip: top lag-safe row WITH compliance warns = highest-leverage IMPROVE (weak CTR + fixable structure).",
);
console.log("Note: only surfaces pos 5–15 pages. Deeper pages (pos 20+) need content-gaps.json.\n");
