# React Pinterest Template Pattern

How to build strong React templates that combine **real photography** + **structured data visualization**, like `Top5SizesShowcase.tsx` (W20-P16).

These templates beat pure-Gemini pins when the value is **comparison, ranking, or data** — because typography is pixel-perfect and numbers are real product data, not hallucinated.

---

## When to use this pattern (vs Gemini)

| Goal | Tool |
|------|------|
| Lifestyle / aspirational room mockup | **Gemini** photoreal |
| Editorial comparison + stat callout | **Gemini** editorial |
| Ranked list / data with real numbers | **React template** |
| Bar charts, pricing tables, before/after data | **React template** |
| Anything where text must be perfectly legible | **React template** |

---

## The 5-block recipe

Every strong React Pinterest template follows the same vertical structure:

```
┌─────────────────────────┐
│  1. PHOTO HERO STRIP    │  ← real photo, 30% of pin height
│     + teal pill label   │
├─────────────────────────┤
│  2. EDITORIAL HEADLINE  │  ← Playfair serif, 1 idea, italic accent
│     + 1-line subhead    │
├─────────────────────────┤
│  3. DATA BLOCK          │  ← bars / cards / table — main payload
│     5–7 rows max        │
├─────────────────────────┤
│  4. INSIGHT or CTA      │  ← 1 line "why this matters"
├─────────────────────────┤
│  5. FOOTER              │  ← snaptosize.com pill
└─────────────────────────┘
```

**Hard rules:**
- Pinterest is **1000×1500** (2:3). Always.
- Off-white background `#FAFAF7` (never pure white) — photographic feel
- Charcoal text `#0F0F0F` / `#4A4A4A` — never pure black
- One teal accent `#2DD4BF` — chips, bars, underlines only
- One italic word in the headline = serif personality (`actually`, `really`, `every`)
- Whitespace > content. If it feels tight, reduce content.

---

## Image sources

Real photos beat Gemini-generated for templates because they're 100% accurate and free of artifacts.

| Folder | Use for |
|--------|---------|
| `app-next/public/assets/most-popular-sizes-room.jpg` | Hero strip — gallery wall |
| `app-next/public/assets/listings/<artwork>/` | Real frame mockups (deer, fox, owl, botanical, etc.) |
| `app-next/public/assets/Composition_Pictures/` | Lifestyle compositions |
| Recent Gemini outputs in `marketing/social/content/pinterest/<slug>/` | Reuse a strong Gemini photo as hero strip |

**Pattern:** crop a real photo to a horizontal strip (200–500px tall), put a gradient fade to the background color at the bottom, place a small teal label pill on top.

---

## Skeleton (copy-paste starting point)

```tsx
/* <ComponentName> — Pinterest pin: <one-line description>
   Pinterest 1000×1500 (2:3). Real photo + structured data.
*/

const DATA = [
  // 5–7 items max
];

export default function ComponentName() {
  return (
    <div style={{
      width: 1000, height: 1500, background: "#FAFAF7", color: "#1A1A1A",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif",
      display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      {/* 1. PHOTO HERO STRIP */}
      <div style={{
        position: "relative", height: 460, width: "100%",
        backgroundImage: "url('/assets/most-popular-sizes-room.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(250,250,247,1) 100%)" }} />
        <div style={{ position: "absolute", top: 36, left: 40,
          background: "#2DD4BF", color: "#0B2522",
          fontSize: 18, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
          padding: "8px 16px", borderRadius: 999 }}>
          LABEL HERE
        </div>
      </div>

      {/* 2. EDITORIAL HEADLINE */}
      <div style={{ padding: "12px 60px 0" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
          fontSize: 64, fontWeight: 600, lineHeight: 1.05, letterSpacing: -1.5, margin: 0,
        }}>
          One idea, <span style={{ fontStyle: "italic" }}>one</span> italic word.
        </h1>
        <p style={{ marginTop: 14, fontSize: 22, color: "#4A4A4A", lineHeight: 1.35 }}>
          One-line subhead that frames the data below.
        </p>
      </div>

      {/* 3. DATA BLOCK — bars / cards / rows */}
      <div style={{ padding: "28px 60px 0", flex: 1 }}>
        {DATA.map((d, i) => (
          <div key={i}>{/* row layout */}</div>
        ))}
      </div>

      {/* 4. INSIGHT + 5. FOOTER */}
      <div style={{
        padding: "10px 60px 32px", borderTop: "1px solid #E5E5DF",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 14 }}>One-line insight.</div>
          <div style={{ fontSize: 15, color: "#6B6B6B", marginTop: 4 }}>
            One sentence on what SnapToSize does about it.
          </div>
        </div>
        <div style={{
          background: "#0F0F0F", color: "#FAFAF7", padding: "14px 22px",
          borderRadius: 999, fontSize: 16, fontWeight: 700,
        }}>
          snaptosize.com
        </div>
      </div>
    </div>
  );
}
```

---

## Build & screenshot workflow

1. **Build the component** in `app-next/app/social-slides/_components/<Name>.tsx`
2. **Register** in `app-next/app/social-slides/page.tsx`:
   ```tsx
   <div id="<kebab-id>" data-testid="<kebab-id>"><ComponentName /></div>
   ```
3. **Verify dev server** is running (`npm run dev` in `app-next/`, port often 3098 — check log)
4. **Screenshot** with this script (replace ID + slug):
   ```js
   // app-next/screenshot-<id>.js
   const { chromium } = require('playwright');
   (async () => {
     const browser = await chromium.launch();
     const ctx = await browser.newContext({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 2 });
     const page = await ctx.newPage();
     await page.goto('http://localhost:3098/social-slides', { waitUntil: 'networkidle' });
     const el = await page.$('#<kebab-id>');
     await page.waitForTimeout(2000);
     const out = 'C:/dev/snaptosize-website/marketing/social/content/pinterest/<slug>/<slug>.png';
     require('fs').mkdirSync(require('path').dirname(out), { recursive: true });
     await el.screenshot({ path: out });
     await browser.close();
   })();
   ```
5. **Run:** `cd app-next && node screenshot-<id>.js`
6. **Visual QA:** open the PNG. Rate against the checklist below. Re-iterate component if <9/10.

---

## QA checklist (rate 1–10, ship if ≥9)

- [ ] Reads clearly at Pinterest **thumbnail** size (zoom out to 25%)
- [ ] Real photo (not Gemini-generated as hero, unless reusing a known-good Gemini)
- [ ] One headline, one idea, one italic accent
- [ ] All numbers are **real product data** (from CONTENT_REFERENCE.md or live pages — never invented %s)
- [ ] Teal `#2DD4BF` used **only** for: 1 pill label, bars, ≤2 underlines
- [ ] Off-white `#FAFAF7` background (not pure white)
- [ ] No more than 5–7 data rows
- [ ] Footer has `snaptosize.com` in a black pill
- [ ] No emojis, no clipart, no stock-photo vibes
- [ ] Whitespace feels generous, not crammed

---

## Approved templates so far

| Component | Layout | Hero photo source |
|-----------|--------|-------------------|
| `Top5SizesShowcase.tsx` | photo + 5 ranked bars + price | `most-popular-sizes-room.jpg` |

Add new templates here as they're built. Each new template should reuse the 5-block structure and live in `app-next/app/social-slides/_components/`.
