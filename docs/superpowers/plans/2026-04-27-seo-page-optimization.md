# SEO Page Optimization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Forbedre 12 underytende SEO-sider på snaptosize.com — bedre SERP-snippets, sterkere SnapToSize-posisjonering above-the-fold, og minst ett visuelt element per side.

**Architecture:** Én side ferdigstilles komplett (audit → fix → validate → commit) før neste starter. Pulje 1 og 4 får full behandling inkl. Firecrawl konkurrentanalyse. Pulje 2 og 3 får moderat behandling (tittel/meta + visuelt + above-fold hook). Alle visuelle elementer er enten React template-screenshots (Playwright) eller Gemini lifestyle-bilder.

**Tech Stack:** Next.js 14 TSX, Playwright (screenshots + OG), Firecrawl MCP (konkurrentresearch), Gemini API (lifestyle-bilder), `npx next build` (verifikasjon)

---

## Regler som aldri brytes

- Bruk kun størrelser og features fra `marketing/CONTENT_REFERENCE.md`
- CTA-lenker alltid med `?source=seo_[slug]&kind=guide`
- Aldri fjern eksisterende innhold — legg til og forbedre
- Aldri påstå features som ikke finnes (ingen batch upload, ingen direkte Etsy-integrasjon)
- Playwright screenshots: `fullPage: false`, viewport 1440×900 desktop + 390×844 mobil
- `npx next build` må passere uten feil før commit

---

## Felles verktøyoppsett

### Dev server
```bash
cd app-next && npx next dev --port 3000
```
Behold kjørende gjennom hele arbeidsøkten. Sider live på `http://localhost:3000/[slug]`.

### Playwright screenshot-kommando (desktop)
```javascript
// Kjør via: node -e "..."
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/[slug]', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: '[slug]-before-desktop.png', fullPage: false });
  await browser.close();
})();
```

### Playwright screenshot-kommando (mobil)
```javascript
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000/[slug]', { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({ path: '[slug]-before-mobile.png', fullPage: false });
```

### React template → bilde workflow
1. Legg til ny slide i `app-next/app/social-slides/page.tsx`
2. Screenshot slide via Playwright på `http://localhost:3000/social-slides`
3. Crop til riktig dimensjon (1080×1080 eller 1200×630)
4. Lagre til `app-next/public/assets/[slug]-visual.png`
5. Fjern den temporære sliden fra page.tsx

---

## PULJE 1 — Konverteringssider (Full behandling)

### Task 1.1: Audit og konkurrentanalyse — `/snaptosize-vs-canva`

**Files:**
- Read: `app-next/app/(marketing)/snaptosize-vs-canva/page.tsx`

- [ ] **Les nøkkelseksjoner i gjeldende side**

```bash
grep -n 'title\|description\|h1\|h2\|SnapToSize\|FinalCTA\|ContextualCTA\|QuickAnswer' \
  'app-next/app/(marketing)/snaptosize-vs-canva/page.tsx' | head -60
```

Dokumenter: nåværende tittel, H1-tekst, antall CTAs, har siden visuelt element?

- [ ] **Playwright screenshot nåværende tilstand**

```javascript
// Lagre som: snaptosize-vs-canva-before-desktop.png og -mobile.png
// Se felles verktøyoppsett over
```

Vurder: Er SnapToSize synlig without scrolling? Er hero-seksjonen sterk?

- [ ] **Firecrawl topp 3 konkurrenter**

Søk etter: `"canva vs snaptosize"` og `"canva alternative for etsy printables"`. Firecrawl de 2-3 sidene som rangerer #1-3. Dokumenter:
- Hva dekker de som vi ikke gjør?
- Hvilken CTA-strategi bruker de?
- Er det tabeller, sammenligningsmatriser, eller testimonials?

- [ ] **Identifiser gaps og lag fiksliste**

Skriv en kort liste (3-5 punkter) med konkrete endringer som trengs. Eksempel:
- [ ] Tittel svar ikke direkte på "canva vs snaptosize" — endre til "[ny tittel]"
- [ ] Hero har ingen SnapToSize-posisjonering above fold
- [ ] Mangler sammenligningstabell (konkurrenter har det)
- [ ] Ingen visuelt element

---

### Task 1.2: Implementer fixes — `/snaptosize-vs-canva`

**Files:**
- Modify: `app-next/app/(marketing)/snaptosize-vs-canva/page.tsx`

- [ ] **Oppdater title og meta description**

Finn `export const metadata: Metadata = {` øverst i filen.

Ny tittel-regel: Svar direkte på søket, ikke still spørsmål. Eksempel:
```typescript
title: "SnapToSize vs Canva for Etsy Printables: Which One Handles All Sizes? (2026)",
description: "Canva resizes one image at a time — SnapToSize generates all 30 Etsy print sizes from one upload. Compare features, workflow, and output quality.",
```

- [ ] **Styrk above-fold SnapToSize-hook**

Finn hero-seksjonen (rundt `<h1>`). Legg til en subline direkte under H1 hvis mangler:
```tsx
<p className="text-lg text-foreground-60 mt-3 max-w-2xl">
  Canva is a design tool. SnapToSize is a print-size tool. 
  One upload → 30 sizes, 5 ratio ZIPs, 300 DPI — ready for Etsy in seconds.
</p>
```

- [ ] **Legg til sammenligningstabell hvis mangler**

Dersom siden mangler en strukturert sammenligning, legg til etter første seksjon:
```tsx
{/* --- Comparison Table --- */}
<div className="overflow-x-auto">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="border-b border-border">
        <th className="text-left py-3 pr-6 font-semibold">Feature</th>
        <th className="text-left py-3 pr-6 font-semibold text-accent-light">SnapToSize</th>
        <th className="text-left py-3 font-semibold text-foreground-60">Canva</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-border">
      {[
        ["Resize for all Etsy ratios", "✅ All 5 ratios, 30 sizes", "❌ One at a time"],
        ["No cropping", "✅ Stretch-only, full artwork", "❌ Auto-crop changes composition"],
        ["Organized ZIP packs", "✅ Professional naming, under 20MB", "❌ Manual download"],
        ["300 DPI guaranteed", "✅ Every file", "⚠️ Depends on export settings"],
        ["Design skills needed", "✅ None", "⚠️ Learning curve"],
        ["Time per listing", "✅ Seconds", "❌ 30–90 minutes"],
      ].map(([feature, snap, canva]) => (
        <tr key={feature}>
          <td className="py-3 pr-6 text-foreground-60">{feature}</td>
          <td className="py-3 pr-6 text-accent-light font-medium">{snap}</td>
          <td className="py-3 text-foreground-60">{canva}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

- [ ] **Legg til React template visuelt element**

Velg `PainSolutionSlide` eller `BeforeAfter` fra social-slides. Legg til som ny slide i `app-next/app/social-slides/page.tsx`:
```tsx
<BeforeAfter
  before={{ label: "With Canva", description: "Resize each size manually, export one at a time, rename files yourself. 45–90 min per design." }}
  after={{ label: "With SnapToSize", description: "Upload once → 30 sizes, 5 ZIP packs, professional naming. Under 30 seconds." }}
/>
```
Screenshot (1080×1080), lagre til `public/assets/vs-canva-workflow-visual.png`. Fjern slide fra page.tsx.

Embed i siden:
```tsx
<div className="my-8">
  <Image
    src="/assets/vs-canva-workflow-visual.png"
    alt="SnapToSize vs Canva workflow comparison"
    width={1080}
    height={1080}
    className="rounded-xl w-full max-w-2xl mx-auto"
  />
</div>
```

- [ ] **Verifiser build og ta after-screenshot**

```bash
cd app-next && npx next build 2>&1 | tail -20
```
Forventet: `✓ Compiled successfully`

Ta Playwright screenshot desktop + mobil. Sammenlign med before-screenshots.
Sjekk: SnapToSize synlig uten scroll? Sammenligningstabell tydelig? Visuelt element på plass?

- [ ] **Commit**

```bash
git add app-next/app/(marketing)/snaptosize-vs-canva/page.tsx
git add app-next/public/assets/vs-canva-workflow-visual.png
git commit -m "seo: strengthen snaptosize-vs-canva — comparison table, above-fold hook, visual"
```

---

### Task 1.3: Audit og konkurrentanalyse — `/snaptosize-vs-photoshop`

**Files:**
- Read: `app-next/app/(marketing)/snaptosize-vs-photoshop/page.tsx`

- [ ] **Les nøkkelseksjoner**

```bash
grep -n 'title\|description\|h1\|h2\|SnapToSize\|FinalCTA\|position' \
  'app-next/app/(marketing)/snaptosize-vs-photoshop/page.tsx' | head -60
```

Merk: Siden har pos 4.8 men bare 11 impressions — tyder på keyword-mismatch. Finn ut hva slags søkeord siden faktisk prøver å rangere for.

- [ ] **Playwright screenshot nåværende tilstand**

Desktop + mobil, lagre som `snaptosize-vs-photoshop-before-*.png`

- [ ] **Firecrawl konkurrentanalyse**

Søk: `"photoshop alternative etsy sellers"` og `"resize art for etsy without photoshop"`. Firecrawl topp 2-3. Konkluder: Er vi etter feil søkeord? Hva rangerer #1?

- [ ] **Identifiser keyword-strategi**

Dersom analysen viser at vi jagter feil søkeord (f.eks. "snaptosize vs photoshop" som ingen søker), vurder å pivotere tittelen mot `"photoshop alternative for etsy sellers"` eller `"resize etsy art without photoshop"`.

Dokumenter konklusjon og ny tittelstrategi.

---

### Task 1.4: Implementer fixes — `/snaptosize-vs-photoshop`

**Files:**
- Modify: `app-next/app/(marketing)/snaptosize-vs-photoshop/page.tsx`

- [ ] **Oppdater title og meta basert på keyword-funn fra Task 1.3**

Eksempel hvis vi pivoterer mot "without photoshop":
```typescript
title: "How to Resize Art for Etsy Without Photoshop (2026) — Free Alternative",
description: "No Photoshop needed. Upload once, get all 30 Etsy print sizes at 300 DPI — organized ZIP packs ready to sell. SnapToSize does it in seconds.",
```

- [ ] **Styrk above-fold med "no design skills" messaging**

Legg til under H1:
```tsx
<p className="text-lg text-foreground-60 mt-3 max-w-2xl">
  Photoshop costs $55/month and takes years to learn. 
  SnapToSize generates all 30 Etsy print sizes from one upload — no design skills, no software.
</p>
```

- [ ] **Legg til sammenligningstabell Photoshop vs SnapToSize**

Samme mønster som vs-canva-tabellen over. Rader:
- Cost per month: SnapToSize = gratis/lav vs Photoshop = $55/mnd
- Learning curve: ingen vs år
- Time per listing: sekunder vs 30-90 min
- Batch resizing: automatisk vs manuelt
- Etsy ZIP packs: automatisk vs manuelt

- [ ] **Legg til WorkflowSteps visuelt**

Legg til i social-slides, screenshot (1200×630), lagre `public/assets/vs-photoshop-workflow-visual.png`.

```tsx
<WorkflowSteps steps={[
  { step: "1", label: "Upload artwork", detail: "Any format — PNG, TIFF, WebP, JPG" },
  { step: "2", label: "SnapToSize processes", detail: "All 30 sizes at 300 DPI, no cropping" },
  { step: "3", label: "Download ZIP packs", detail: "5 ratio packs, under 20MB each" },
  { step: "4", label: "Upload to Etsy", detail: "Professional naming, ready to sell" },
]} />
```

- [ ] **Verifiser build og ta after-screenshot**

```bash
cd app-next && npx next build 2>&1 | tail -20
```

- [ ] **Commit**

```bash
git add app-next/app/(marketing)/snaptosize-vs-photoshop/page.tsx
git add app-next/public/assets/vs-photoshop-workflow-visual.png
git commit -m "seo: pivot snaptosize-vs-photoshop to 'without photoshop' keyword + visual"
```

---

### Task 1.5: Audit, fix og validering — `/how-to-sell-printables-on-etsy-without-photoshop`

**Files:**
- Read: `app-next/app/(marketing)/how-to-sell-printables-on-etsy-without-photoshop/page.tsx`
- Modify: samme fil

- [ ] **Les nøkkelseksjoner**

```bash
grep -n 'title\|description\|h1\|h2\|SnapToSize\|FinalCTA\|above\|hero' \
  'app-next/app/(marketing)/how-to-sell-printables-on-etsy-without-photoshop/page.tsx' | head -60
```

- [ ] **Playwright screenshot nåværende tilstand** (desktop + mobil)

- [ ] **Oppdater title og meta**

Nåværende søkeintensjon: "sell printables without photoshop" — brukeren vil ha en guide, ikke bare en tool-pitch. Tittelen bør love konkrete steg:
```typescript
title: "How to Sell Printables on Etsy Without Photoshop: Step-by-Step (2026)",
description: "You don't need Photoshop to sell printables on Etsy. Here's exactly how to create, resize, and package print-ready files — free tools included.",
```

- [ ] **Styrk above-fold med pain-first hook**

Finn H1 + første paragraf. Sett inn et pain-first statement tidlig:
```tsx
<p className="text-foreground-60 text-lg mb-6">
  Most tutorials assume you have Photoshop. You don&apos;t need it. 
  Here&apos;s how to go from artwork to Etsy-ready print files — 
  including all 30 standard sizes — without spending a dollar on design software.
</p>
```

- [ ] **Verifiser at SnapToSize introduseres som løsning i seksjon 1 (ikke seksjon 5+)**

Les innholdsstrukturen. Dersom SnapToSize ikke nevnes før halvveis: legg til en ContextualCTA etter første seksjon:
```tsx
<ContextualCTA
  heading="Skip the manual steps"
  description="SnapToSize handles resizing, naming, and ZIP packing automatically. Upload once, download all 30 sizes."
  buttonText="Try SnapToSize Free"
  appUrl="https://app.snaptosize.com/app/quick-export?source=seo_without-photoshop&kind=guide"
/>
```

- [ ] **Legg til PainSolutionSlide visuelt**

Social slide → screenshot → `public/assets/without-photoshop-visual.png` → embed i siden.

- [ ] **Build + after-screenshot + commit**

```bash
git add app-next/app/(marketing)/how-to-sell-printables-on-etsy-without-photoshop/page.tsx
git add app-next/public/assets/without-photoshop-visual.png
git commit -m "seo: strengthen without-photoshop page — pain hook, early SnapToSize, visual"
```

---

## PULJE 2 — Størrelses-sider batch A (Moderat behandling)

*For disse sidene: ingen Firecrawl. Kun tittel/meta + above-fold hook + Gemini lifestyle-bilde.*

### Task 2.1: `/etsy-watercolor-print-sizes`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-watercolor-print-sizes/page.tsx`

- [ ] **Les metadata og hero-seksjon**

```bash
grep -n 'title\|description\|h1\|QuickAnswer\|hero\|ContextualCTA\|Image\|img' \
  'app-next/app/(marketing)/etsy-watercolor-print-sizes/page.tsx' | head -40
```

Sjekk: Har siden allerede et bilde/visuelt element? Har den QuickAnswer?

- [ ] **Playwright screenshot nåværende tilstand** (desktop + mobil)

- [ ] **Oppdater title og meta**

Nåværende problem: pos 6.5, 55 imp, 0 klikk. Tittelen gir ikke grunn til å klikke.
```typescript
title: "Etsy Watercolor Print Sizes: Exact Pixels for Every Standard Frame (2026)",
description: "Watercolor art needs the right dimensions to sell. Get exact pixel sizes for 5×7, 8×10, 11×14, A4 and more — plus the ratio that works best for watercolor.",
```

- [ ] **Generer Gemini lifestyle-bilde hvis siden mangler visuelt**

Kjør Gemini image generation script (se `app-next/generate-slide1-bg.js` som mønster):
```javascript
// Prompt for watercolor side:
const prompt = "A bright Scandinavian living room with framed watercolor botanical prints on a white wall. Natural light, linen couch, no text visible. Professional interior photography style.";
// Lagre til: app-next/public/assets/watercolor-room-mockup.jpg
```

Embed i hero-seksjonen:
```tsx
<div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
  <Image
    src="/assets/watercolor-room-mockup.jpg"
    alt="Framed watercolor prints on a living room wall"
    fill
    className="object-cover"
    priority
  />
</div>
```

- [ ] **Legg til above-fold SnapToSize-hook**

Under QuickAnswer-komponenten (eller H1), legg til:
```tsx
<p className="text-sm text-foreground-60 mt-4">
  Need all sizes at once?{" "}
  <a href="https://app.snaptosize.com/app/quick-export?source=seo_watercolor-print-sizes&kind=guide"
     className="text-accent-light hover:underline">
    SnapToSize generates all 30 print sizes from one upload — 300 DPI, organized ZIPs.
  </a>
</p>
```

- [ ] **Build + after-screenshot + commit**

```bash
git add app-next/app/(marketing)/etsy-watercolor-print-sizes/page.tsx
git add app-next/public/assets/watercolor-room-mockup.jpg
git commit -m "seo: watercolor sizes — title, Gemini lifestyle image, above-fold SnapToSize hook"
```

---

### Task 2.2: `/etsy-nursery-wall-art-sizes`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-nursery-wall-art-sizes/page.tsx`

- [ ] **Les metadata og hero-seksjon**

```bash
grep -n 'title\|description\|h1\|QuickAnswer\|Image\|img\|ContextualCTA' \
  'app-next/app/(marketing)/etsy-nursery-wall-art-sizes/page.tsx' | head -40
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Oppdater title og meta**

```typescript
title: "Etsy Nursery Wall Art Sizes: What Sells Best in Kids' Rooms (2026)",
description: "The most popular nursery print sizes on Etsy are 8×10, 5×7, and A4. Get exact pixels, frame compatibility, and multi-size pack strategy for nursery sellers.",
```

- [ ] **Generer Gemini lifestyle-bilde**

```javascript
const prompt = "A soft pastel nursery room with framed children's wall art above a white crib. Warm lighting, gentle colors, no text on the prints. Professional interior photo.";
// Lagre til: app-next/public/assets/nursery-wall-art-room.jpg
```

Embed i hero på samme måte som watercolor.

- [ ] **Above-fold SnapToSize-hook** — samme mønster som Task 2.1, tilpass tekst til nursery-kontekst.

- [ ] **Build + after-screenshot + commit**

```bash
git add app-next/app/(marketing)/etsy-nursery-wall-art-sizes/page.tsx
git add app-next/public/assets/nursery-wall-art-room.jpg
git commit -m "seo: nursery wall art sizes — title, lifestyle image, above-fold hook"
```

---

### Task 2.3: `/etsy-quote-wall-art-sizes`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-quote-wall-art-sizes/page.tsx`

- [ ] **Les metadata og hero-seksjon**

```bash
grep -n 'title\|description\|h1\|QuickAnswer\|Image\|img\|ContextualCTA' \
  'app-next/app/(marketing)/etsy-quote-wall-art-sizes/page.tsx' | head -40
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Oppdater title og meta**

Pos 5.8 = topp 6. Brukere klikker ikke — tittelen gir ikke "dette er for meg" signal:
```typescript
title: "Etsy Quote Print Sizes: Best Dimensions for Typography Wall Art (2026)",
description: "Quote prints sell best as 8×10, 5×7, and A4. Get exact pixel dimensions and learn which ratio works for landscape vs portrait quote designs.",
```

- [ ] **Legg til SizeComparison React template som visuelt**

Legg til i social-slides/page.tsx, screenshot:
```tsx
<SizeComparison
  sizes={[
    { label: "5×7", pixels: "1500×2100", ratio: "5:7", popular: false },
    { label: "8×10", pixels: "2400×3000", ratio: "4:5", popular: true },
    { label: "11×14", pixels: "3300×4200", ratio: "11:14", popular: false },
    { label: "A4", pixels: "2480×3508", ratio: "ISO", popular: true },
  ]}
/>
```
Lagre til `public/assets/quote-print-sizes-visual.png`.

- [ ] **Above-fold hook** — samme mønster som Task 2.1.

- [ ] **Build + after-screenshot + commit**

```bash
git add app-next/app/(marketing)/etsy-quote-wall-art-sizes/page.tsx
git add app-next/public/assets/quote-print-sizes-visual.png
git commit -m "seo: quote wall art sizes — title, SizeComparison visual, above-fold hook"
```

---

## PULJE 3 — Størrelses-sider batch B (Moderat behandling)

*Samme workflow som Pulje 2 — moderat tilnærming per side.*

### Task 3.1: `/etsy-a5-print-size`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-a5-print-size/page.tsx`

- [ ] **Les metadata og sjekk visuelt element**

```bash
grep -n 'title\|description\|h1\|Image\|img\|ContextualCTA\|QuickAnswer' \
  'app-next/app/(marketing)/etsy-a5-print-size/page.tsx' | head -40
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Oppdater title og meta**

A5 = 1748×2480 px. Tittelen bør love eksakt verdi:
```typescript
title: "A5 Print Size for Etsy: 1748×2480 px at 300 DPI + ISO Chart (2026)",
description: "A5 is 1748×2480 pixels at 300 DPI. Perfect for greeting cards and small prints. Full ISO size chart — A6, A5, A4, A3 — for Etsy sellers.",
```

- [ ] **Visuelt element hvis mangler** — bruk SizeComparison med ISO A-serien (A6, A5, A4, A3, A2).

- [ ] **Above-fold SnapToSize-hook** — nevn at A5 + alle ISO-størrelser genereres fra én upload.

- [ ] **Build + after-screenshot + commit**

```bash
git commit -m "seo: a5 print size — pixel-first title, ISO chart visual, above-fold hook"
```

---

### Task 3.2: `/etsy-vintage-art-print-sizes`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-vintage-art-print-sizes/page.tsx`

- [ ] **Les metadata og sjekk visuelt**

```bash
grep -n 'title\|description\|h1\|Image\|img\|ContextualCTA' \
  'app-next/app/(marketing)/etsy-vintage-art-print-sizes/page.tsx' | head -40
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Oppdater title og meta**

```typescript
title: "Etsy Vintage Art Print Sizes: Best Dimensions for Antique & Retro Prints (2026)",
description: "Vintage prints sell best in 8×10, 11×14, and 16×20. Discover exact pixel dimensions, paper ratios, and how to package vintage art packs for Etsy buyers.",
```

- [ ] **Generer Gemini lifestyle-bilde (vintage-stil)**

```javascript
const prompt = "An elegant vintage-styled room with antique botanical and map prints framed on a warm-toned wall. Dark wood frames, warm ambient lighting, no text visible. Editorial interior photography.";
// Lagre til: app-next/public/assets/vintage-art-room-mockup.jpg
```

- [ ] **Above-fold hook** — tilpass til vintage-kontekst.

- [ ] **Build + after-screenshot + commit**

```bash
git commit -m "seo: vintage art sizes — title, vintage lifestyle image, above-fold hook"
```

---

### Task 3.3: `/etsy-photography-print-sizes`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-photography-print-sizes/page.tsx`

- [ ] **Les metadata og sjekk visuelt**

```bash
grep -n 'title\|description\|h1\|Image\|img\|ContextualCTA\|ratio' \
  'app-next/app/(marketing)/etsy-photography-print-sizes/page.tsx' | head -40
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Oppdater title og meta**

Photography-sider rangerer på "photography print sizes etsy" — brukere vil ha konkrete svar raskt:
```typescript
title: "Etsy Photography Print Sizes: 3:2 Ratio Guide for Camera Images (2026)",
description: "Camera photos are 3:2 ratio — most Etsy print sizes aren't. Learn exact pixel dimensions and how to adapt your photography for 8×10, 11×14, A4, and more.",
```

- [ ] **Legg til RatioSplitShowcase visuelt** (3:2 vs 4:5 vs ISO visual)

Legg til i social-slides, screenshot, embed i siden.

- [ ] **Above-fold hook** — fokus på camera ratio-problemet som SnapToSize løser.

- [ ] **Build + after-screenshot + commit**

```bash
git commit -m "seo: photography print sizes — camera ratio title, RatioSplit visual, hook"
```

---

## PULJE 4 — Svak rangering (Full behandling)

### Task 4.1: Audit og konkurrentanalyse — `/etsy-gallery-wall-print-sizes`

**Files:**
- Read: `app-next/app/(marketing)/etsy-gallery-wall-print-sizes/page.tsx`

- [ ] **Les nøkkelseksjoner**

```bash
grep -n 'title\|description\|h1\|h2\|Image\|ContextualCTA\|FinalCTA' \
  'app-next/app/(marketing)/etsy-gallery-wall-print-sizes/page.tsx' | head -60
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Firecrawl konkurrentanalyse**

Søk: `"gallery wall print sizes"` og `"etsy gallery wall art sizes"`. Firecrawl topp 3. Dokumenter:
- Hva tilbyr konkurrentene av gallerivegg-spesifikk info? (kombinasjonsguider, arrangement-tips, størrelse-kombinasjoner)
- Pos 17 betyr vi mangler noe vesentlig — hva er det?

- [ ] **Identifiser konkrete gaps og lag fiksliste**

---

### Task 4.2: Implementer fixes — `/etsy-gallery-wall-print-sizes`

**Files:**
- Modify: `app-next/app/(marketing)/etsy-gallery-wall-print-sizes/page.tsx`

- [ ] **Oppdater title og meta basert på konkurrentfunn**

Gallery wall-søkere vil typisk ha kombinasjonsguider. Eksempel:
```typescript
title: "Etsy Gallery Wall Print Sizes: How to Mix 8×10, 5×7, and 4×6 (2026)",
description: "The best gallery wall mix on Etsy: one large (16×20), two medium (8×10), two small (5×7). Get exact pixels for every size plus frame-matching tips.",
```

- [ ] **Legg til innholdsseksjon om kombinasjonsanbefalinger** hvis mangler

Dette er typisk gap vs konkurrenter — de gir konkrete gallery wall-oppsett:
```tsx
<h2 className="text-2xl md:text-3xl font-bold mb-6">
  Popular Gallery Wall Combinations
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {[
    { name: "Classic 3-piece", sizes: "16×20 + 8×10 + 5×7", ratios: "Mix of 4:5 and 5:7" },
    { name: "Symmetric 5-piece", sizes: "11×14 (×1) + 8×10 (×2) + 5×7 (×2)", ratios: "All portrait" },
    { name: "Linear row", sizes: "5×7 (×4) or 4×6 (×5)", ratios: "Consistent ratio" },
    { name: "Statement wall", sizes: "24×36 (×1) + 11×14 (×2)", ratios: "2:3 family" },
  ].map(combo => (
    <Card key={combo.name} className="p-5">
      <h3 className="font-semibold mb-1">{combo.name}</h3>
      <p className="text-sm text-foreground-60">{combo.sizes}</p>
      <p className="text-xs text-foreground-40 mt-1">{combo.ratios}</p>
    </Card>
  ))}
</div>
```

- [ ] **Legg til W15GalleryWall React template som visuelt**

```tsx
// Legg til i social-slides/page.tsx, screenshot 1200×630
// Lagre til: public/assets/gallery-wall-sizes-visual.png
```

- [ ] **Build + after-screenshot + commit**

```bash
git commit -m "seo: gallery wall sizes — combination guide, visual, title targeting pos 17→8"
```

---

### Task 4.3: Audit, fix og validering — `/etsy-square-print-sizes`

**Files:**
- Read + Modify: `app-next/app/(marketing)/etsy-square-print-sizes/page.tsx`

- [ ] **Les nøkkelseksjoner**

```bash
grep -n 'title\|description\|h1\|h2\|square\|1:1\|Image\|ContextualCTA' \
  'app-next/app/(marketing)/etsy-square-print-sizes/page.tsx' | head -50
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Firecrawl konkurrentanalyse**

Søk: `"etsy square print sizes"`. Pos 12.2 — vi er nær side 1 men ikke der. Identifiser hva som mangler.

- [ ] **Oppdater title og meta**

Square-brukere søker ofte Instagram-format, canvas prints, record covers:
```typescript
title: "Etsy Square Print Sizes: 1:1 Ratio Guide for Instagram & Canvas Prints (2026)",
description: "Square prints on Etsy: 8×8, 10×10, 12×12, 16×16 at 300 DPI. Perfect for Instagram art, record covers, and canvas prints. Get exact pixels for every size.",
```

- [ ] **Legg til bruksområde-seksjon** (Instagram art, canvas, record sleeves) hvis mangler.

- [ ] **Visuelt element** — RatioSplitShowcase med 1:1 kvadratformat eller SizeComparison med kvadratstørrelser.

- [ ] **Build + after-screenshot + commit**

```bash
git commit -m "seo: square print sizes — Instagram angle, use cases, visual, title"
```

---

### Task 4.4: Audit, fix og validering — `/print-sizes-at-300-dpi`

**Files:**
- Read + Modify: `app-next/app/(marketing)/print-sizes-at-300-dpi/page.tsx`

- [ ] **Les nøkkelseksjoner**

```bash
grep -n 'title\|description\|h1\|h2\|Image\|ContextualCTA\|FinalCTA' \
  'app-next/app/(marketing)/print-sizes-at-300-dpi/page.tsx' | head -50
```

- [ ] **Playwright screenshot** (desktop + mobil)

- [ ] **Firecrawl konkurrentanalyse**

Søk: `"print sizes at 300 dpi"`. Pos 13.4 — svak. Identifiser hva topp-sidene tilbyr.

- [ ] **Oppdater title og meta**

Tittelen er for generisk. Spesifiser Etsy-konteksten tydelig:
```typescript
title: "Print Sizes at 300 DPI for Etsy: Complete Pixel Chart (2026)",
description: "Every standard Etsy print size at 300 DPI — from 4×6 to 24×36. Exact pixels, download format, and how to generate all sizes from one upload.",
```

- [ ] **Legg til komplett pikseltabell** (alle 30 størrelser) hvis mangler. Hentet fra `marketing/CONTENT_REFERENCE.md`.

- [ ] **Legg til W15DpiCheatSheet React template som visuelt**

```tsx
// Screenshot 1200×630
// Lagre til: public/assets/print-sizes-300dpi-chart.png
```

- [ ] **Build + after-screenshot + commit**

```bash
git commit -m "seo: print-sizes-at-300-dpi — Etsy-specific title, full pixel table, DPI visual"
```

---

## Avsluttende validering

### Task 5: Full gjennomgang etter alle 12 sider

- [ ] **Kjør full build**

```bash
cd app-next && npx next build 2>&1 | tail -30
```
Forventet: ingen TypeScript-feil, ingen manglende imports.

- [ ] **Playwright-serie: screenshot alle 12 sider desktop + mobil**

Kjør for hver side og lagre som `[slug]-final-desktop.png` og `[slug]-final-mobile.png`.

- [ ] **Kvalitetssjekk per side (manuell)**

For hver side, verifiser:
- [ ] SnapToSize synlig above-the-fold (ingen scrolling nødvendig)
- [ ] Minst ett visuelt element finnes
- [ ] Tittel svarer direkte på søkeintensjonen
- [ ] CTA-lenker har korrekt `?source=seo_[slug]&kind=guide` format

- [ ] **Oppdater statussporing i spec**

Oppdater `docs/superpowers/specs/2026-04-27-seo-page-optimization.md` — merk alle sider som ✅ Ferdig.

- [ ] **Push til remote**

```bash
git push
```

---

## Statusoversikt (oppdateres underveis)

| Side | Pulje | Status |
|------|-------|--------|
| `/snaptosize-vs-canva` | 1 | ✅ |
| `/snaptosize-vs-photoshop` | 1 | ✅ |
| `/how-to-sell-printables-on-etsy-without-photoshop` | 1 | ✅ |
| `/etsy-watercolor-print-sizes` | 2 | ✅ |
| `/etsy-nursery-wall-art-sizes` | 2 | ✅ |
| `/etsy-quote-wall-art-sizes` | 2 | ✅ |
| `/etsy-a5-print-size` | 3 | ✅ |
| `/etsy-vintage-art-print-sizes` | 3 | ✅ |
| `/etsy-photography-print-sizes` | 3 | ✅ |
| `/etsy-gallery-wall-print-sizes` | 4 | ⏳ |
| `/etsy-square-print-sizes` | 4 | ⏳ |
| `/print-sizes-at-300-dpi` | 4 | ⏳ |
