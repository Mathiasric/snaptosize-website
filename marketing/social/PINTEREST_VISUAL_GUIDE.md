# SnapToSize — Pinterest Visual Guide
**Lest av:** Social Media Content Creator, Ideator, Scripter
**Regel:** Alle Pinterest-pins skal bestå scroll-stopp-testen (se sjekkliste nederst) FØR de publiseres.

---

## Hva som faktisk stopper folk i Pinterest-feeden

Pinterest-brukere scroller raskt. En pin har 0,3 sekunder på å stoppe dem. Det som stopper:

1. **Sterk visuell kontrast** — mørk vs lys, rød vs grønn, kaos vs orden
2. **Stort tall eller bold statement** — "1 upload → 70 filer" i stor font
3. **Gjenkjennelig smertepunkt** — "Sender du kunder til konkurrenten?" trigger Etsy-selgere
4. **Ekte bevis** — app-skjermbilder, filmapper, faktiske filnavn > abstrakt design

---

## Gemini-prompt-mal for Pinterest (alltid bruk denne strukturen)

```
SCENE: [Svært spesifikk situasjon en Etsy-selger kjenner seg igjen i]
PROBLEM SYNLIG: [Det smertefulle — feil filstørrelse, for få varianter, manuell jobb, DPI-feil]
LØSNING SYNLIG: [SnapToSize-appskjerm, ZIP-mappe, "1 upload"-øyeblikk]
TEKST I BILDET: [Maks 8 ord, stor skrift, høy kontrast — dette er hooken]
STIL: Ren studio-belysning med høy kontrast ELLER dramatisk mørk med teal/lilla glød
FORMAT: Vertikal 1000×1500px, tekst øverst 40% og CTA nederst 20%
IKKE: Generiske rammer på vegger uten Etsy-selger-kontekst. Ikke stockfoto-estetikk.
```

---

## De 5 beste Pinterest-konseptene for SnapToSize

### 1. Mappekaos-kontrasten ⭐⭐⭐⭐⭐
**Gemini-prompt:**
```
Photorealistic split image, 1000x1500px vertical.
LEFT HALF (before): Cluttered MacBook desktop screenshot showing a chaotic Downloads folder 
with files named "8x10_FINAL_v3_copy.jpg", "12x18_maybe.psd", "print_size_attempt2.jpg" — 
47 files, overwhelming, red "not organized" feeling. Warm dim light, stressed vibe.
RIGHT HALF (after): Clean, minimal folder called "SnapToSize_Packs/" showing 5 neat ZIP files: 
"2-3_Ratio_Pack.zip", "3-4_Ratio_Pack.zip", "4-5_Ratio_Pack.zip", "ISO_Pack.zip", "Extras.zip".
Fresh, cool teal accent light, organized, calm.
TEXT OVERLAY top-center: "Stop the chaos." in bold white 72px, 
below in teal: "1 upload → 5 organized packs"
CTA bottom: solid teal pill button "Try free at app.snaptosize.com"
No watermarks. Photorealistic UI elements.
```

### 2. Kjøperen som forsvant ⭐⭐⭐⭐⭐
**Gemini-prompt:**
```
Photorealistic mockup of an Etsy product listing page on a laptop screen, 1000x1500px vertical.
The listing shows a beautiful wall art print. The "Select size" dropdown is open showing only: 
"8×10", "11×14" — visibly missing common sizes like 5×7, 12×18, A4.
A chat bubble from "Buyer" says: "Do you have 12×18? Can't find it."
The seller's reply is empty/unsent — frozen in anxiety.
Bold text overlay at top in white: "Missing sizes = missing sales"
Below in red-orange: "Every size you don't offer is a sale you lose."
CTA at bottom: teal pill "28 sizes from 1 upload · SnapToSize"
Dark, dramatic background with slight red vignette on left (problem side).
```

### 3. 60-sekunders bevis ⭐⭐⭐⭐
**Gemini-prompt:**
```
Clean product showcase, 1000x1500px vertical, dark #0B0B12 background.
Top: Laptop screen showing SnapToSize upload interface — simple, clean app UI, 
one image being uploaded "artwork.png". Upload progress: 100%. 
Middle: Arrow pointing down, labeled "60 seconds"
Bottom: 5 ZIP file icons in a row, each with teal label:
"2:3 Pack (7 sizes)", "3:4 Pack (5 sizes)", "4:5 Pack (5 sizes)", "ISO Pack (5 sizes)", "Extras (6 sizes)"
Below the ZIPs: "28 print-ready JPEGs · 300 DPI · Etsy-ready"
Bold headline top: "60 seconds." in white 90px
Subtext: "28 Etsy-ready files." in teal 40px
Purple/teal glow orbs in background. Clean, premium SaaS aesthetic.
```

### 4. DPI-angsten ⭐⭐⭐⭐
**Gemini-prompt:**
```
Close-up comparison of two printed photos held up against a neutral light background, 1000x1500px.
LEFT: A printed 8x10 photo that is visibly pixelated, blurry, muddy colors — clearly a bad print.
Small red label in corner: "72 DPI"
RIGHT: Same image printed sharply, crisp details, vibrant colors, professional quality.
Small green label in corner: "300 DPI"
Bold text overlay at top: "This is what 72 DPI looks like when printed."
Below in white: "SnapToSize always outputs 300 DPI. Every size. Automatically."
CTA bottom: teal button "Stop guessing · app.snaptosize.com"
Natural studio lighting on prints, hands holding them, realistic.
```

### 5. Størrelsesuniverset (visuell ratio-grid) ⭐⭐⭐
**Gemini-prompt:**
```
Clean infographic design, 1000x1500px vertical, dark #0B0B12 background with subtle teal glow.
Title at top in bold white: "Which sizes do your buyers want?"
Subtitle: "All of them. Here's what you're missing."
Visual grid of rectangles in correct proportions:
- Row 1: Three rectangles labeled 4×6, 8×12, 16×24 in teal (2:3 ratio)
- Row 2: Three rectangles labeled 6×8, 12×16, 18×24 in purple (3:4 ratio)  
- Row 3: Three rectangles labeled 8×10, 16×20, 24×30 in blue (4:5 ratio)
- Row 4: Two squares labeled A4, A3 in emerald (ISO)
Each rectangle has the size printed clearly inside it.
Bottom CTA: Bold teal button "1 upload → all of these · SnapToSize"
Clean, minimal, data-visualization aesthetic. No photos.
```

---

## React/Playwright-pins — Primærverktøy for produktbevis

**Mål: 2 React-pins per dag.** Bytt artwork-mappe daglig, samme template.

### NeonPackShowcase (primær template)
**Fil:** `app-next/app/social-slides/_components/NeonPackShowcase.tsx`
**Format:** Mørk bakgrunn (#0B0B12), teal/lilla neon-glow, ekte kunst i 5 ratio-rammer

```tsx
// Bytt artwork prop for ny pin — ingen andre endringer nødvendig
<NeonPackShowcase artwork="bunny" name="Bunny Sketch" ratio="pinterest" />
<NeonPackShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
```

**Screenshot-kommando:**
```bash
cd app-next && node screenshot-neon.js
# Screenshotter alle registrerte NeonPackShowcase-elementer
```

**Tilgjengelige artworks:**
- `fox` — blyant-skisse, krem bg → ren og profesjonell
- `bunny` — vintage olje, blomster → varm og fargerik ⭐ høy engagement
- `deer` — vintage olje, rik palett → blikkfang
- `songbirds` — blyant-skisse, minimalist → elegant
- `misty_lake` — monokrom landskap → dramatisk ⭐ sterkest kontrast
- `salmon`, `neutral_abstract`, `minimalist_abstract`, `into_the_light_abstarct`, `landscape_abstract`

**Andre React-templates:**
- `W15DpiCheatSheet` — "300 DPI" stor header, formel, 10 størrelser → cheat sheet-pins
- `W15FoxPackShowcase` — lys varm bakgrunn, ekte kunst i 5 rammer → alternativt lyst format
- `BeforeAfter` — rød X → teal frames, real poppies artwork
- `StatsCard`, `NumberHighlight` — tall-fokusert

**React-pin fungerer best for:**
- ✅ **Produktbevis** — "1 upload → 5 ratio-packs" med ekte Etsy-kunstverk
- ✅ **Cheat sheets** folk lagrer for å slå opp (300 DPI-tabellen)
- ✅ **Before/After** med skarp kontrast og konkrete tall
- ✅ **Tall-stats** med stor typografi ("28" som hero-element)
- ❌ **Aldri:** Mørk bakgrunn + liste med liten tekst uten visuell hook

---

## QA-sjekkliste: Bestå alle 3 for å publisere

Svar JA på minst 3 av 5 før en pin godkjennes:

- [ ] Ville en Etsy-selger stoppe scrollingen for dette? (gut check)
- [ ] Er ett smertepunkt eller løsning synlig innen 2 sekunder?
- [ ] Er primærteksten lesbar på mobil i thumbnail-størrelse (150×225px)?
- [ ] Er SnapToSize-vinkelen tydelig uten å lese beskrivelsen?
- [ ] Er det visuell kontrast — mørk/lys, kaos/orden, rød/grønn?

Består den ikke → kast og prøv et annet konsept fra listen over.

---

## Hva vi ALDRI gjør

- Generiske rom med rammer på veggen uten Etsy-selger-kontekst
- Stockfoto-estetikk uten produktreferanse
- Mørk bakgrunn + tekstrader uten visuell hook
- "Pretty but pointless" — vakre bilder uten pain/solution-arc
- Størrelseslister uten å vise *hvorfor* du trenger dem alle

---

*Sist oppdatert: 2026-04-11 (LESSON-088)*
