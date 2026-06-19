# SnapToSize — Modes Reference

The canonical reference for SnapToSize's 4 export modes: what each is, what it does, who
it's for, and **how to talk about it** (positive, situation-based, never framing the
trade-off as a flaw). Source of truth for marketing copy, SEO pages, in-app copy, and
product decisions. Last updated: 2026-06-19 (Perfect Fit launch).

> Companion: `marketing/CONTENT_REFERENCE.md` (sizes, ratios, CTAs) · app launch record:
> `snaptosize-app/docs/superpowers/plans/2026-06-19-launch-and-roadmap.md`

---

## The mental model (read this first)

Every mode is one point on two axes:

- **Scope** — how much you get out: **one size** / **a ratio pack** / **your custom set**.
- **Method** — how the image is fit to the size: **Resize** (scale the whole image, keep
  every pixel of the composition) vs **Crop** (reframe to a new shape around your subject).

Three modes **Resize** (keep the whole image); one mode — **Perfect Fit** — **Crops**
(reframes to a new shape). This is the "Fill vs Frame" distinction. It's the single most
important idea for explaining the product, and the reason the bar puts Size Packs and
Perfect Fit next to each other.

**Golden framing rule:** describe each mode by *what it's good for*, never by what it
*can't* do. The modes aren't better/worse — they're for different situations. Never imply
one mode distorts or another is "the fix." (Same rule as our warning copy: geometry/
situation is the reason, the tool is always the hero.)

---

## 1. Size Packs — the hero (71% of all exports)

**Route:** `/app/packs` · **Worker mode:** `pack` · **Quota bucket:** Pack (free 2/day, shared)

**What it is:** Upload one image, get a full pack of standard Etsy print sizes in one ratio
family (2×3, 3×4, 4×5, ISO/A-series, or Common Sizes), each delivered as its own ZIP.

**What it does:** A clean, full-detail resize (Lanczos) to every size in the chosen ratio.
Keeps your entire composition — nothing cropped away. Portrait orientation.

**What it brings:** *Completeness + speed.* One upload → every size a buyer expects, in
under 30 seconds, vs 1–3 hours doing it by hand in Photoshop/Canva. This is the core promise.

**Who it's for:** Etsy print sellers whose art is already the right shape, listing a piece
across all its print sizes. The default for ~7 of 10 sessions.

**How to talk about it (positive):**
- "Upload once. Get every Etsy print size, full detail preserved."
- "Keeps your whole composition — perfect for abstract art, patterns, and detailed pieces
  where every part matters."
- "All the sizes a buyer expects, one upload, ready to list."
- ❌ Never: "can't reframe to other ratios," "only portrait." Frame the strength, not the bound.

**SEO intent:** "Etsy print size pack," "resize art to all Etsy sizes," "bulk print size generator."

---

## 2. Perfect Fit — the differentiator / wedge (launched 2026-06-19)

**Route:** `/app/perfect-fit` · **Worker mode:** `crop` · **Quota bucket:** Pack (free 2/day, shared)

**What it is:** Upload one image, drag to frame your subject, and get a ratio pack **cropped**
to fit — distortion-free — in portrait **or** landscape.

**What it does:** A focal crop. Instead of scaling, it reframes the image to the target
aspect ratio by cropping around the subject you choose, so nothing is stretched or squished.
You control what stays in frame (live preview before export).

**What it brings:** *Control + precision when the shape changes.* When your art needs a
**different shape** than the original (e.g., a 2:3 piece you also want as 4:5), Perfect Fit
crops to the new ratio with **you deciding the framing** (live preview). Because it crops
rather than scales, proportions stay exact — so it's **made for highly detailed art**.
**No rival offers this** — it's the ownable wedge.

> ⚠️ **The wedge is control/precision, NOT "distortion-free."** Size Packs uses a Lanczos
> *force-resize* that stretches slightly when input ratio ≠ pack ratio (verified vs real
> outputs — subtle, detail-preserving, fine for most art). So "distortion-free" is NOT true
> of the whole product, and using it as the *contrast* between modes is both false and
> self-damaging. See `tasks/lessons.md` LESSON-100 + [[feedback_warning_copy_tone]].

**Who it's for:** Sellers reframing detailed art into new ratios; cross-platform creators
(e.g., a Pinterest 2:3 → Instagram 4:5 reframe). Anyone burned by stretched/squished output
from generic tools.

**How to talk about it (positive):**
- Lead with **control + precision + made-for-detailed-art**: "Reframe your art to any ratio,
  you choose what stays in frame." / "Made for detailed work, framed exactly how you want it."
- "distortion-free crop" is a **SEO search term only** — keep it in titles/meta/FAQ/keywords
  (it's what people google, and it's true of Perfect Fit's crop *in isolation*). Do **not**
  make it the loud on-page message, a fear narrative, or a contrast with our own modes.
- ❌ Never imply Size Packs/Quick Export distort, and never run a "stretched → looks wrong"
  villain beat. The enemy, if named at all, is *external* (a generic resizer deciding the
  framing for you, or slow manual Photoshop), kept light, never pointed at our tools.
- Frame the mode split as **scale-to-fit (Size Packs: fast, full detail, right for most art)**
  vs **crop-to-frame with control (Perfect Fit: detailed art + ratio changes)** — both good.

**SEO intent (highest opportunity — ownable, low competition):** "crop art to print size
without distortion," "reframe art to different aspect ratio," "distortion-free image resize
for print."

---

## 3. Quick Export — the utility (19% of exports)

**Route:** `/app/quick-export` · **Worker mode:** `single` · **Quota bucket:** Quick (free 5/day)

**What it is:** Upload one image, pick **one** size (portrait / landscape / square + ratio +
size), get a single print-ready JPG. No pack, no ZIP.

**What it does:** A straight, full-detail resize to the one size you pick. Supports all
orientations.

**What it brings:** *Speed for a single need.* When you only want one file at one size —
fastest path, no bundle.

**Who it's for:** One-off resizes; cross-platform single images; anyone who needs just one
size right now.

**How to talk about it (positive):**
- "One image, one size, ready in seconds."
- "Pick your size, get a single print-ready JPG."

**SEO intent:** "resize image to [size] for print," "single image print size resizer."

---

## 4. My Packs — retention / convenience (10% of exports)

**Route:** `/app/my-packs` · **Worker mode:** `custom` · **Quota bucket:** Pack (free 2/day) ·
**Storage:** free 1 saved pack, Pro up to 10

**What it is:** Save your own custom set of sizes (or start from a template: Etsy
Bestsellers / Square / Landscape), then one-click export any artwork to that saved set.

**What it does:** Resize to a user-defined collection of sizes, with the pack's saved
orientation. Has a hard orientation-mismatch guard (blocks export if the image orientation
doesn't match the saved pack — see warning-copy rules).

**What it brings:** *Save once, reuse forever.* For repeat sellers with a consistent size
mix — drop in new art, get the same set every time.

**Who it's for:** Established sellers with a settled list of sizes; power users.

**How to talk about it (positive):**
- "Save your go-to sizes once. New art in, ready-to-list ZIP out — one click."
- "Your own size set, always ready."

**SEO intent:** "save custom print size set," "reusable Etsy size template."

---

## Plan / quota behavior (all modes)

- **Free:** 5 Quick exports/day + **2 Pack exports/day shared across Size Packs, My Packs,
  AND Perfect Fit** (not per-mode). Everything watermarked. 2 concurrent jobs.
- **Pro:** Unlimited, no watermark, 7 concurrent jobs.
- The watermark is the primary free→pro conversion lever; copy is honest value-framing
  ("clean, sell-ready files"), on-pattern with Canva/video tools/remove.bg.

---

## Where we sit vs competitors (summary — full detail in `docs/COMPETITOR_LANDSCAPE.md`)

- Generic resizers (Soona, IMResizer, Instasize, PixelBatch) do **commodity single resize**.
- Few do the **pack** model (Bulk Mockup is a Photoshop *plugin*, not SaaS).
- **None** do **distortion-free focal-crop to every Etsy size** — that's Perfect Fit.
- On *sizing*, SnapToSize is the most complete option. Adjacent gaps rivals fill: **mockups**
  (biggest), **batch**. Those are separate product bets, not sizing.

---

## One-line positioning per mode (for quick reuse)

- **Size Packs:** Every Etsy size from one upload, full detail kept.
- **Perfect Fit:** Reframe your art to any ratio with full control, made for detailed work.
- **Quick Export:** One image, one size, in seconds.
- **My Packs:** Your saved size set, ready in one click.
