/**
 * Smart video renderer — automatically selects fresh images from image-pool.json.
 *
 * Logic:
 *   1. Rotates between portrait_slideshow → info_reveal → hybrid_punch
 *   2. Hooks rotate sequentially (tracked in pool) — never repeats until full cycle
 *   3. Images have a 14-day cooldown — never reuses recently posted content
 *   4. Falls back to least-recently-used if pool runs low
 *   5. Warns when fewer than 3 fresh images remain per template type
 *
 * Usage:
 *   cd marketing/remotion && npx tsx render-next-video.ts
 *
 * To add new images:
 *   1. Copy image to marketing/remotion/public/
 *   2. Add entry to image-pool.json "images" array
 *   3. Run this script — it will pick fresh images automatically
 */

import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import * as path from "path";
import * as fs from "fs";

const POOL_PATH = path.resolve(__dirname, "image-pool.json");
const ENTRY_POINT = path.resolve(__dirname, "src/index.ts");
const CONTENT_BASE = path.resolve(__dirname, "../social/content/tiktok");
const IMAGE_COOLDOWN_DAYS = 14;

// ─── Hook options per template type ─────────────────────────────────────────

const PORTRAIT_HOOKS = [
  {
    hook: "Still Resizing\nby Hand?",
    hookSub: "Every Etsy seller needs to see this.",
    cta: "Try Free Today",
    ctaSub: "One upload. 70 files. snaptosize.com",
    tag: "Etsy Seller Tips",
  },
  {
    hook: "Which Frame Size\nFor Which Room?",
    hookSub: "Etsy sellers — your buyers want all of these.",
    cta: "Every Room. One Upload.",
    ctaSub: "70 files · 60 seconds · snaptosize.com",
    tag: "Wall Art Sizes",
  },
  {
    hook: "EU Buyers Want\nDifferent Sizes",
    hookSub: "Are your listings ready for international buyers?",
    cta: "Cover Every Market",
    ctaSub: "US + EU sizes. One upload. snaptosize.com",
    tag: "Etsy Global Selling",
  },
  {
    hook: "Your Buyers Are\nLeaving Empty-Handed",
    hookSub: "Here's the fix every smart Etsy seller uses.",
    cta: "Stop Losing Sales",
    ctaSub: "One upload. Every size. snaptosize.com",
    tag: "Etsy Tips",
  },
  {
    hook: "One Upload.\nEvery Ratio.",
    hookSub: "Portrait, square, landscape — all covered in 60 seconds.",
    cta: "Start For Free",
    ctaSub: "snaptosize.com",
    tag: "Etsy Seller Tips",
  },
];

const HYBRID_PUNCH_HOOKS = [
  {
    hook: "You're Only\nOffering One Size.",
    hookSub: "Your buyers want three. You're losing the others.",
    proofLabel: "8×10 · 11×14 · 16×20\nAll from one upload.",
    mechanism: "One Upload.\n70 Files.",
    cta: "Fix It Free",
    ctaSub: "60 seconds · 300 DPI · snaptosize.com",
    tag: "Etsy Seller Tips",
  },
  {
    hook: "This is What\nFile Chaos Costs.",
    hookSub: "Every missed size is a missed sale.",
    proofLabel: "Before vs. after SnapToSize.",
    mechanism: "One Click.\nEvery Size.",
    cta: "Stop the Chaos",
    ctaSub: "Try free → snaptosize.com",
    tag: "Etsy Tips",
  },
  {
    hook: "Resizing\nManually?",
    hookSub: "Top Etsy sellers stopped doing this years ago.",
    proofLabel: "5 ratio packs · 70 files · 60 seconds.",
    mechanism: "Upload Once.\nSell Every Size.",
    cta: "Start For Free",
    ctaSub: "snaptosize.com",
    tag: "Digital Downloads",
  },
  {
    hook: "Buyers Left\nWithout Buying.",
    hookSub: "Wrong size. You didn't have it. Sale gone.",
    proofLabel: "8×10, A4, 50×70 — every market covered.",
    mechanism: "Every Size.\nZero Extra Work.",
    cta: "Cover Every Buyer",
    ctaSub: "70 files · 60 seconds · snaptosize.com",
    tag: "Etsy Seller Tips",
  },
];

const INFO_REVEAL_HOOKS = [
  {
    hook: "Sizes Your Buyers\nActually Search For",
    hookSub: "Etsy sellers — stop guessing.",
    cta: "Every Size.\nOne Upload.",
    ctaSub: "70 files · 60 seconds · 300 DPI",
    tag: "Etsy Seller Tips",
  },
  {
    hook: "Save This Size Guide",
    hookSub: "Every Etsy seller needs these numbers.",
    cta: "Generate All Sizes\nIn 60 Seconds",
    ctaSub: "One upload → snaptosize.com",
    tag: "Print Size Guide",
  },
  {
    hook: "Stop Losing Sales\nOver Sizes",
    hookSub: "Here's exactly what buyers want.",
    cta: "One Upload.\nEvery Buyer Covered.",
    ctaSub: "70 files · snaptosize.com",
    tag: "Etsy Tips",
  },
  {
    hook: "1 Design.\n70 Files.",
    hookSub: "Here's how smart sellers do it.",
    cta: "Try It Free",
    ctaSub: "snaptosize.com",
    tag: "Etsy Seller Tips",
  },
];

// ─── Types ───────────────────────────────────────────────────────────────────

type TemplateType = "portrait_slideshow" | "info_reveal" | "hybrid_punch";

interface PoolImage {
  file: string;
  category: "pain" | "lifestyle" | "product" | "aspirational" | "educational";
  template_type: TemplateType;
  times_used: number;
  last_used: string | null;
  source: string;
}

interface Pool {
  last_rendered: string;
  last_template: TemplateType;
  last_hook_indices: Record<string, number>;
  images: PoolImage[];
  available_to_add: unknown[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function daysSince(dateStr: string | null): number {
  if (!dateStr) return 9999;
  return (Date.now() - new Date(dateStr).getTime()) / 86400000;
}

function pickFreshest(
  images: PoolImage[],
  count: number,
  excludeFiles: string[]
): PoolImage[] {
  const candidates = images.filter((img) => !excludeFiles.includes(img.file));

  // Prefer images outside the cooldown window
  const cooled = candidates.filter(
    (img) => daysSince(img.last_used) >= IMAGE_COOLDOWN_DAYS
  );

  const pool = cooled.length >= count ? cooled : candidates; // fall back if pool is small

  if (cooled.length < count) {
    console.warn(
      `  ⚠ Only ${cooled.length} cooled-down images available (need ${count}), using least-recently-used fallback`
    );
  }

  return pool
    .sort((a, b) => {
      if (a.times_used !== b.times_used) return a.times_used - b.times_used;
      const aDate = a.last_used ?? "2000-01-01";
      const bDate = b.last_used ?? "2000-01-01";
      return aDate < bDate ? -1 : 1;
    })
    .slice(0, count);
}

// Sequential hook rotation — advances index per template, wraps around
function pickHook<T extends { hook: string }>(
  hooks: T[],
  template: string,
  pool: Pool
): T {
  const lastIndex = pool.last_hook_indices[template] ?? -1;
  const nextIndex = (lastIndex + 1) % hooks.length;
  pool.last_hook_indices[template] = nextIndex;
  return hooks[nextIndex];
}

function warnPoolHealth(
  allImages: PoolImage[],
  template: TemplateType,
  usedFiles: string[]
) {
  const remaining = allImages
    .filter((i) => i.template_type === template)
    .filter((i) => !usedFiles.includes(i.file))
    .filter((i) => daysSince(i.last_used) >= IMAGE_COOLDOWN_DAYS).length;
  if (remaining < 3) {
    console.warn(
      `  ⚠ Only ${remaining} fresh ${template} images left — add more to image-pool.json`
    );
  } else {
    console.log(`  ✓ ${remaining} fresh images still available for next ${template}`);
  }
}

// Default slide labels + text per category for PortraitSlideshow
const CATEGORY_SLIDE_TEXT: Record<
  PoolImage["category"],
  { label: string; text: string }
> = {
  pain: {
    label: "The Problem",
    text: "Missing sizes = missing sales. Every buyer you can't serve is lost revenue.",
  },
  lifestyle: {
    label: "What Buyers Want",
    text: "Every room needs the right frame size — buyers search for specific sizes.",
  },
  aspirational: {
    label: "Every Buyer Covered",
    text: "8×10, 11×14, 16×24 — every size, 300 DPI, ready for any frame.",
  },
  product: {
    label: "One Upload Fixes It",
    text: "Upload once → 70 files across 5 ratio packs → 60 seconds.",
  },
  educational: {
    label: "Know Your Sizes",
    text: "The sizes buyers search for — and how to offer all of them.",
  },
};

// ─── Portrait Slideshow selection ────────────────────────────────────────────

function buildPortraitSlides(images: PoolImage[]): {
  slides: { image: string; label: string; text: string }[];
  usedFiles: string[];
} {
  const pain = images.filter((i) => i.category === "pain");
  const lifestyle = images.filter((i) => i.category === "lifestyle");
  const aspirational = images.filter((i) => i.category === "aspirational");
  const product = images.filter((i) => i.category === "product");

  const used: string[] = [];

  const painPick = pickFreshest(pain, 1, used);
  used.push(...painPick.map((i) => i.file));

  const lifestylePick = pickFreshest(lifestyle, 1, used);
  used.push(...lifestylePick.map((i) => i.file));

  const aspirationalPick = pickFreshest(aspirational, 1, used);
  used.push(...aspirationalPick.map((i) => i.file));

  const productPick = pickFreshest(product, 1, used);
  used.push(...productPick.map((i) => i.file));

  const slides = [...painPick, ...lifestylePick, ...aspirationalPick, ...productPick]
    .filter(Boolean)
    .map((img) => ({
      image: img.file,
      ...CATEGORY_SLIDE_TEXT[img.category],
    }));

  return { slides, usedFiles: used };
}

// ─── InfoReveal selection ─────────────────────────────────────────────────────

function buildInfoRevealSlides(images: PoolImage[]): {
  slides: string[];
  usedFiles: string[];
} {
  const educational = images.filter((i) => i.category === "educational");
  const pain = images.filter((i) => i.category === "pain");

  const used: string[] = [];

  const educationalPick = pickFreshest(educational, 3, used);
  used.push(...educationalPick.map((i) => i.file));

  const painPick = pickFreshest(pain, 1, used);
  used.push(...painPick.map((i) => i.file));

  // Pain slide first for hook, then educational
  const slides = [...painPick, ...educationalPick]
    .filter(Boolean)
    .map((i) => i.file);

  return { slides, usedFiles: used };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const pool: Pool = JSON.parse(fs.readFileSync(POOL_PATH, "utf-8"));

  // Migrate: add last_hook_indices if missing (older pool files)
  if (!pool.last_hook_indices) {
    pool.last_hook_indices = {};
  }

  const ROTATION: TemplateType[] = ["portrait_slideshow", "info_reveal", "hybrid_punch"];
  const lastIndex = ROTATION.indexOf(pool.last_template);
  const nextTemplate = ROTATION[(lastIndex + 1) % ROTATION.length];

  console.log(`\nTemplate: ${nextTemplate}`);

  const today = new Date().toISOString().split("T")[0];
  const folderName = `${today}-auto-${nextTemplate.replace(/_/g, "-")}`;

  let compositionId: string;
  let props: Record<string, unknown>;
  let usedFiles: string[] = [];
  let theme: string;

  if (nextTemplate === "hybrid_punch") {
    const availableImages = pool.images.filter(
      (i) => i.template_type === "hybrid_punch"
    );

    if (availableImages.length < 1) {
      console.error("No hybrid_punch images in pool. Add entries with template_type: hybrid_punch.");
      process.exit(1);
    }

    const [proofPick] = pickFreshest(availableImages, 1, []);
    usedFiles = [proofPick.file];

    const hookConfig = pickHook(HYBRID_PUNCH_HOOKS, "hybrid_punch", pool);
    theme = "sunset";
    compositionId = "HybridPunch";
    props = {
      hook: hookConfig.hook,
      hookSub: hookConfig.hookSub,
      proofImage: proofPick.file,
      proofLabel: hookConfig.proofLabel,
      mechanism: hookConfig.mechanism,
      cta: hookConfig.cta,
      ctaSub: hookConfig.ctaSub,
      theme,
      tag: hookConfig.tag,
    };
    console.log(`Hook [${pool.last_hook_indices["hybrid_punch"]}/${HYBRID_PUNCH_HOOKS.length}]: ${hookConfig.hook.replace("\n", " ")}`);
    console.log(`Proof image: ${proofPick.file} (${daysSince(proofPick.last_used).toFixed(0)}d ago)`);
    warnPoolHealth(pool.images, "hybrid_punch", usedFiles);
  } else {
    const availableImages = pool.images.filter(
      (i) => i.template_type === nextTemplate
    );

    if (availableImages.length < 3) {
      console.error(`Not enough images for ${nextTemplate}. Add more to image-pool.json.`);
      process.exit(1);
    }

    const { slides, usedFiles: used } =
      nextTemplate === "portrait_slideshow"
        ? buildPortraitSlides(availableImages)
        : buildInfoRevealSlides(availableImages);

    usedFiles = used;

    if (slides.length < 3) {
      console.error("Could not build enough slides. Check image-pool.json categories.");
      process.exit(1);
    }

    console.log(`Selected slides:`);
    slides.forEach((s) => {
      const file = typeof s === "string" ? s : (s as { image: string }).image;
      const img = availableImages.find((i) => i.file === file);
      const age = img ? `${daysSince(img.last_used).toFixed(0)}d ago` : "new";
      console.log(`  • ${file} (${age})`);
    });

    const hookConfig =
      nextTemplate === "portrait_slideshow"
        ? pickHook(PORTRAIT_HOOKS, "portrait_slideshow", pool)
        : pickHook(INFO_REVEAL_HOOKS, "info_reveal", pool);

    const hookIdx = pool.last_hook_indices[nextTemplate];
    const hookTotal = nextTemplate === "portrait_slideshow" ? PORTRAIT_HOOKS.length : INFO_REVEAL_HOOKS.length;
    console.log(`Hook [${hookIdx}/${hookTotal}]: ${hookConfig.hook.replace("\n", " ")}`);

    theme = nextTemplate === "portrait_slideshow" ? "coral" : "midnight";
    compositionId = nextTemplate === "portrait_slideshow" ? "PortraitSlideshow" : "InfoReveal";
    props =
      nextTemplate === "portrait_slideshow"
        ? {
            hook: hookConfig.hook,
            hookSub: (hookConfig as typeof PORTRAIT_HOOKS[0]).hookSub,
            slides,
            cta: hookConfig.cta,
            ctaSub: (hookConfig as typeof PORTRAIT_HOOKS[0]).ctaSub,
            theme,
            tag: (hookConfig as typeof PORTRAIT_HOOKS[0]).tag,
          }
        : {
            hook: hookConfig.hook,
            hookSub: (hookConfig as typeof INFO_REVEAL_HOOKS[0]).hookSub,
            slides,
            cta: hookConfig.cta,
            ctaSub: (hookConfig as typeof INFO_REVEAL_HOOKS[0]).ctaSub,
            theme,
            tag: (hookConfig as typeof INFO_REVEAL_HOOKS[0]).tag,
          };

    warnPoolHealth(pool.images, nextTemplate, usedFiles);
  }

  // Render
  console.log("\nBundling Remotion project...");
  const bundled = await bundle({ entryPoint: ENTRY_POINT });

  const outDir = path.join(CONTENT_BASE, folderName);
  fs.mkdirSync(outDir, { recursive: true });
  const outputPath = path.join(outDir, "video.mp4");

  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
    inputProps: props,
  });

  console.log(`\nRendering ${folderName}...`);
  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: "h264",
    outputLocation: outputPath,
  });

  // Update pool
  pool.images = pool.images.map((img) => {
    if (usedFiles.includes(img.file)) {
      return { ...img, times_used: img.times_used + 1, last_used: today };
    }
    return img;
  });
  pool.last_rendered = today;
  pool.last_template = nextTemplate;

  fs.writeFileSync(POOL_PATH, JSON.stringify(pool, null, 2));

  // Save metadata
  fs.writeFileSync(
    path.join(outDir, "metadata.json"),
    JSON.stringify(
      {
        title: (props.hook as string).replace("\n", " "),
        composition: compositionId,
        slides: props.slides ?? [props.proofImage],
        hook: props.hook,
        cta: props.cta,
        theme,
        tool_used: "remotion+auto-pool",
        rendered_at: new Date().toISOString(),
      },
      null,
      2
    )
  );

  console.log(`\n✓ Done: ${outputPath}`);
  console.log(`  Pool updated — run again for next template in rotation.`);
}

main().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
