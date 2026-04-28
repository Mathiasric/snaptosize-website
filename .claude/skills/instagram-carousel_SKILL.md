---
name: instagram-carousel
description: Create Instagram carousel posts for SnapToSize — multi-slide 1080×1350 React components with Gemini backgrounds, hook copy, and captions. Use this skill whenever the user wants to create an Instagram carousel, a new slide series, social media slides, or asks about Instagram content production for SnapToSize. Always activate before building any new EC0x or carousel component.
---

# Instagram Carousel Production

Creates high-converting Instagram carousels at bestapp.ai quality level. Each carousel = new React component file + Playwright screenshots + caption.

## Quality Bar

Before shipping, mentally compare to bestapp.ai's carousels:
- Slide 1 hook stops the scroll instantly — would *you* swipe?
- Real product or data on slide 3–4, not just text
- Clear single CTA on the last slide
- Every slide has a reason to exist and a reason to swipe to the next

If any slide is "meh", it's a reason for someone to stop swiping. Cut or redesign it.

---

## Step 1 — Topic Brief

Define in one sentence: **who** this is for, **what pain** it addresses, **what the payoff** is.

```
Brief: Etsy sellers → losing sales to missing sizes → SnapToSize generates 70 files automatically
```

The brief is the north star. Every slide copy decision traces back to it.

---

## Step 2 — Pick an Archetype

Rotate archetypes — never post two of the same type in a row.

| # | Type | Hook pattern | When to use | Gemini bg? |
|---|------|-------------|-------------|-----------|
| **A** | Pain/Hook | "Buyers leave when X. They never tell you." | Weekly conversion push | Yes — moody/dark |
| **B** | Educational numbered | "5 things every Etsy seller should know" | Awareness + saves | No — bold typo |
| **C** | Before / After reveal | Split panel: chaos → clarity | Showing transformation | No — split layout |
| **D** | Data bomb | Big stat → implication → fix | Engagement bait | Yes — cinematic |
| **E** | Process walkthrough | Step-by-step with app screenshot | Product demo + trust | Partial — app on slide 3+ |

---

## Step 3 — Slide Plan (5–7 slides)

Standard 5-slide structure that works for archetypes A, D, E:

| Slide | Role | Goal |
|-------|------|------|
| 1 | **Hook** | Stop the scroll. One bold claim. |
| 2 | **Reality** | Make the pain real. Show the moment they lose. |
| 3 | **Scale** | Quantify the problem. Numbers > words. |
| 4 | **Fix** | Show the product. Real screenshot > mockup. |
| 5 | **CTA** | One action. "Comment X" or "Link in bio." |

For archetype B (educational): slides 2–4 become tip 1, tip 2, tip 3.
For archetype C (before/after): slide 2 = before, slide 3 = after.

Add a slide 6 only if there's a strong follow CTA ("Follow for more size guides").

---

## Step 4 — Hook Writing

Write 3 hook candidates for slide 1 before committing. Test the strongest.

**Hook formulas that work:**
- `"[Buyers/Customers] [do X]. [They never tell you why.]"` — silent loss
- `"The [small thing] costing you sales every day."` — specific, tangible
- `"[Big number] vs [small number]. Which seller are you?"` — identity + data
- `"You'll never know which [sale/buyer] you just lost."` — FOMO + mystery

**Rules:**
- First 125 characters = what Instagram shows before "more" — hook must land there
- No questions as hooks ("Do you know how many sizes...") — statements outperform
- The pain word (leave, lose, miss, wrong) carries the emotional weight

---

## Step 5 — Gemini Background (Archetypes A + D)

Use Gemini for slide 1 background when the topic benefits from imagery. Text overlay goes in React.

**Prompt structure:**
```
[Subject relevant to the pain]. [Setting/mood description].

Multiple [relevant objects at dramatically different scales] — [small example], [medium], [large].
[Material/style description of objects].
Strong teal/cyan backlighting (#2DD4BF) creating dramatic edge glow on 2-3 [objects].
80% of the scene is deep shadow and darkness.

CRITICAL: No text anywhere. No people. No hands. No logos.
Aspect ratio: 4:5 portrait (taller than wide).
Background: near-black (#07070E).
Mood: premium dark editorial photography, dramatic, mysterious.
Quality: hyper-detailed, photorealistic, professional commercial photography.
```

**Model:** `gemini-3-pro-image-preview` via REST API (see `generate-slide1-bg.js` for reference script pattern)

**After generation:**
1. Copy image to `app-next/public/assets/[slug]-slide01-bg.png`
2. Use as `backgroundImage` in React with overlay: `linear-gradient(180deg, rgba(7,7,14,0.72) 0%, rgba(7,7,14,0.55) 45%, rgba(7,7,14,0.78) 100%)`
3. Wrap all content in `position: relative; zIndex: 1` so it renders above overlay

---

## Step 6 — React Component

### File naming
- Component: `app-next/app/social-slides/_components/EtsyCarousel0X.tsx`
- Screenshot script: `app-next/screenshot-ec0X.js`
- Output dir: `marketing/social/content/instagram/[YYYY-MM-DD]-[slug]/`

### Component skeleton

```tsx
"use client";

const W = 1080;
const H = 1350;
const TEAL   = "#2DD4BF";
const PURPLE = "#A78BFA";
const RED    = "#F87171";
const BG     = "#07070E";

// Shared atoms — copy from EC01 or reuse
function GlowOrb(...) { ... }
function Badge(...) { ... }
function SlideFooter() {
  return (
    <div style={{ textAlign:"center", paddingBottom:28,
      color:"rgba(255,255,255,0.28)", fontSize:22, fontFamily:"monospace" }}>
      snaptosize.com
    </div>
  );
}

export function EC0XSlide01() {
  return (
    <section id="ec0X-slide-01" style={{
      width: W, height: H,
      // Gemini bg if archetype A/D:
      backgroundImage: "url('/assets/[slug]-slide01-bg.png')",
      backgroundSize: "cover", backgroundPosition: "center",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay (Gemini bg only) */}
      <div style={{ position:"absolute", inset:0, zIndex:0,
        background:"linear-gradient(180deg,rgba(7,7,14,.72) 0%,rgba(7,7,14,.55) 45%,rgba(7,7,14,.78) 100%)"
      }} />
      {/* All content needs position:relative, zIndex:1 */}
      ...
    </section>
  );
}
```

### Visual elements to rotate across carousels

| Element | Code pattern | Use for |
|---------|-------------|---------|
| Contrast block (6–8 vs 40+) | Two adjacent divs, red/teal borders | Scale slides |
| Size grid | CSS grid, teal cells = covered, grey = missing | Coverage visualization |
| Step list | Numbered rows, last one in red | Buyer journey, process |
| App screenshot | `<img src="/assets/app-screenshot-*.png">` with browser chrome bar | Fix slide |
| DM mockup | Styled chat bubble | CTA slide |
| Big stat | 180px+ number, color accent | Data bomb slide |
| Glow orbs | `GlowOrb` component | Depth, atmosphere on all slides |

### Typography scale (1080px canvas)

| Use | Size | Weight |
|-----|------|--------|
| Main headline | 80–96px | 900 |
| Sub-headline | 44–52px | 400 |
| Supporting copy | 38–44px | 400–500 |
| Labels/badges | 24px | 700 |
| Footer | 22px | 400 |

---

## Step 7 — Screenshot Script

Base on `screenshot-ec01.js`. Update IDs and filenames:

```js
await page.goto(BASE, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForSelector('#ec0X-slide-01', { timeout: 15000 }); // required — hot reload delay

await shot('ec0X-slide-01', 'slide-01-hook.png',    'Slide 1 — Hook');
await shot('ec0X-slide-02', 'slide-02-[name].png',  'Slide 2 — [Name]');
// ...
```

Run: `node screenshot-ec0X.js` — requires dev server on port 3033.

**Critical:** Without `waitForSelector`, all slides show MISSING if hot reload hasn't completed.

---

## Step 8 — Add to page.tsx

In `app-next/app/social-slides/page.tsx`, import and render:

```tsx
import { EC0XSlide01, EC0XSlide02, ... } from "./_components/EtsyCarousel0X";
// Inside <main>:
<EC0XSlide01 />
<EC0XSlide02 />
```

---

## Step 9 — Quality Gate

**Product data check (run before building):**
- [ ] All sizes, pack names, and counts are from `marketing/CONTENT_REFERENCE.md` — never invent
- [ ] Pack names are exact: "2:3 Ratio", "3:4 Ratio", "4:5 Ratio", "ISO A-Series", "Extras" — not "Large Format" or similar
- [ ] If showing a partial size list, add a "+ X more sizes" indicator
- [ ] If showing portrait sizes only, note "Landscape + square also available via Quick Export"

**Default CTA:** "Comment FREE → 30 days Pro" (DM mockup with promo code). Only deviate if a real lead magnet exists.

**Visual check:**
- [ ] Slide 1: does the headline land in < 5 seconds without context?
- [ ] Slide 2–3: is the pain *felt*, not just stated?
- [ ] Slide 4: is there a real product screenshot (not text mockup)?
- [ ] Slide 5: is there exactly one CTA?
- [ ] All slides: is "snaptosize.com" visible in footer?
- [ ] No slide is filler — every slide either deepens pain or pushes toward action

---

## Step 10 — Caption

**Formula:**
```
[Hook line — same energy as slide 1, fits before "more"]

[1–2 lines deepening the pain or the insight]

Swipe to see [what they'll discover] →

↓

Comment [WORD] below and I'll DM you [the offer].
[What the offer does in one line.]

[Scarcity/urgency if applicable. E.g. "50 codes only. Expires [date]."]
```

**Hashtag strategy** (post in first comment, not caption body):
- 5 niche tags: `#EtsyDigitalDownload #PrintableWallArt #EtsyPrintables #DigitalDownload #PrintableArt`
- 8 mid tags: `#EtsySeller #EtsyTips #SellOnEtsy #EtsyBusiness #EtsyShop #EtsySuccess #EtsyMarketing #EtsyGrowth`
- 5 broad tags: `#WallArtPrint #ArtPrints #HomeDecorPrint #WallArtDecor #PrintOnDemand`

---

## Active Carousels

| ID | Slug | Topic | Status |
|----|------|-------|--------|
| EC01 | `2026-04-27-etsy-carousel-01` | Buyers leave when size isn't listed | Done — ready to post |
| EC02 | `2026-04-28-frame-sizes` | A4 ≠ 8×10 — international frame size mismatch | Done — ready to post |

Next ID: **EC03**

---

## Carousel Topic Bank

Ideas approved for future use (rotate archetypes):

| Topic | Archetype | Hook candidate |
|-------|-----------|---------------|
| Etsy SEO + size titles | B | "The 3 words missing from your Etsy listing title" |
| Print DPI confusion | B | "Your file is 300 DPI. Your buyer still got a blurry print." |
| Frame vs. print sizing | D | "83% of print sizes don't match standard frames. Here's why." |
| Upload chaos → organized | C | Before: 12 Photoshop files. After: 1 ZIP, 70 files. |
| Seasonal sizes (gallery walls) | E | "Gallery wall season is coming. Are your sizes ready?" |
| "What buyers actually search for" | A | "Buyers don't search '8x10'. Here's what they type." |