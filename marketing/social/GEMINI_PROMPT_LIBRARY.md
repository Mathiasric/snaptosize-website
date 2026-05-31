# SnapToSize — Gemini Prompt Library

**Lest av:** Social Media Content Creator Agent, Ideator Agent
**Autoritet:** Dette er primærkilden for alle Gemini-prompts. PINTEREST_VISUAL_GUIDE.md gjelder fortsatt for konseptvalg og QA. Denne filen gir de ferdige promptene.

## ⚠️ BRUKSREGEL — PROMPTS ER TEMPLATES, IKKE FERDIGE PROMPTS

Hver prompt i dette biblioteket er et **konsept-template**, ikke en ferdig gjenbrukbar prompt.
Samme prompt brukt to ganger gir nesten identiske bilder — det er ikke akseptabelt.

**Hver batch MÅ endre:**
- Artwork-tema (botanical → abstract → coastal → geometric → etc.)
- Komposisjonsvariasjon (split-screen → fan → step-flow → infographic → etc.)
- Fargeaksentuering (teal dominant → white dominant → dark dominant)
- Spesifikk hook-tekst og headlines (aldri kopier eksakt fra en tidligere batch)

**Cooldown:** Hvert konsept bør ha minst 4 ukers pause før det brukes igjen.
Se cooldown-tabellen under GJENBRUKSREGLER for sporet historikk.

---

## FAKTA-REGEL — Hent alle tall fra CONTENT_REFERENCE.md (LESSON-091)

**Alle produkt-tall i Gemini-bilder og metadata MÅ matche `marketing/CONTENT_REFERENCE.md` ordrett. Aldri improviser.**

Før du skriver eller redigerer en prompt, verifiser disse kanoniske tallene:

| Fakta | Korrekt verdi | Aldri bruk |
|-------|---------------|------------|
| Pris månedlig | `$11.99/mo` | `$9/mo`, `$10/mo` |
| Pris årlig | `$97/year` eller `$8.08/mo yearly` | andre tall |
| Rabatt yearly vs monthly | `save 33%` | `save 50%`, `save 20%` |
| Total files fra 1 upload | `up to 70 files` | `100 files`, `50 files` |
| Sizes i packs (total) | `28 sizes in packs` | `30 sizes`, `25 sizes` |
| 2:3 Ratio Pack | 7 sizes | ikke oppdikt per-pack tall |
| 3:4 Ratio Pack | 5 sizes | — |
| 4:5 Ratio Pack | 5 sizes | — |
| ISO Pack (A-series) | `A5, A4, A3, A2, A1, A0` (6 sizes) | `A4-A0`, `+18 sizes` |
| Extras Pack | 6 sizes | — |
| DPI | `300 DPI` | `72 DPI`, `150 DPI` på output |
| Input formats | `PNG · JPG · WebP` | `PDF` (ikke støttet) |
| Output format | `JPG/JPEG` (auto under 20MB ZIP) | — |

**Marketing-språk (CONTENT_REFERENCE rule):**
- Led med "70 files" eller "30+ sizes" — aldri "28 sizes" som hovedtall (undersells)
- Nevn "portrait & landscape" når relevant (verdi-multiplier)
- "Packs + Quick Export = ett produkt, én upload" — aldri split som to features

**Hver ny prompt MÅ ha en `CRITICAL FACTS`-seksjon bakt i prompt-teksten** som låser tallene for Gemini-modellen. Se PROMPT 7 og 8 for mønster.

---

## FILOSOFI — Direct Marketing Generation

Gemini skal generere **ferdig marketingmateriell** — ikke lifestyle-foto som trenger overlay etterpå.

**Feil tilnærming (overlay-avhengig):**
> "Woman at desk with laptop" → legg på tekst etterpå

**Riktig tilnærming (alt bakt inn):**
> Generer et bilde der SnapToSize-branding, produkttall, og hook-tekst er en naturlig del av komposisjonen — som om en profesjonell designer lagde det.

Gemini håndterer bold typografi, farger, UI-mockups, og compositing. Begrensningen er bare prompten.

---

## OBLIGATORISKE KRAV — ALLE PROMPTS

Alle Gemini-bilder MÅ inneholde disse elementene **bakt direkte inn i bildet**:

| Element | Krav |
|---------|------|
| **Hook-tekst** | Bold, stor, teal (#2DD4BF) eller hvit — øverste 20% av bildet |
| **SnapToSize-URL** | `app.snaptosize.com` synlig — i nettleser, teal pill, eller badge |
| **Produkttall** | "70 files", "300 DPI", "5 packs" — alltid "70 files", aldri "28" |
| **Etsy-selger-kontekst** | Konkret detalj: ZIP-pakkenavn, ratio-navn, filnavn, ordreantall |
| **Tekst-safe bunn** | Bunn 10% kan ha en teal pill: `snaptosize.com · Free to start` |

**QA-test:** Dekk all tekst i bildet. Skjønner du at det er SnapToSize og hva det løser? Nei = regen.

**Seller-first test:** Fjern alle SnapToSize-referanser fra hooken. Løser bildet fortsatt et reelt selger-problem eller gir det konkret verdi? Nei → omskriv hooken. SnapToSize er løsningen som avsløres i caption — ikke hero i selve bildet. Unntaket: aspirational-livsstil der produktresultatet ER poenget (etsy-notifications, the-clean-zip).

**Educational exception:** Reference-content (print-size-reference, frame-size-match, ratio-cropping-education) trenger ikke `app.snaptosize.com` synlig i selve bildet. URL-pill er valgfri — SnapToSize nevnes i caption/Pinterest-beskrivelse. Referanseinnhold konverterer via save → return visit, ikke direkte klikk.

---

## TEKNISKE INNSTILLINGER

```python
# Bruk gemini-3-pro-image-preview (høyeste kvalitet, tenker før generering)
# Fallback: gemini-3.1-flash-image-preview (raskere, litt billigere)
# IKKE bruk imagen-4.0-generate-001 — gir svakere resultater
response = client.models.generate_content(
    model="gemini-3-pro-image-preview",
    contents=PROMPT,
    config=types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"],
    ),
)
# Hent bilde fra response
for part in response.candidates[0].content.parts:
    if hasattr(part, "inline_data") and part.inline_data and part.inline_data.mime_type.startswith("image/"):
        img = Image.open(io.BytesIO(part.inline_data.data))
        img = img.resize((1000, 1500), Image.LANCZOS)  # Pinterest
        # img = img.resize((1080, 1350), Image.LANCZOS)  # Instagram
        img.save("output.png", "PNG")
```

**Ikke bruk overlay-script etterpå** — prompten genererer ferdig marketingmateriell med branding bakt inn.

---

## METADATA-BESKRIVELSE — Pinterest & Instagram

### Pinterest description (søkeoptimalisert — ALLE pins)

Pinterest er en søkemotor. Beskrivelsen er indexert som keywords. Bruk alltid denne strukturen:

```
[Linje 1: Verdi-setning — hva spesifike størrelser/data pinnen dekker]
[Linje 2: Eksplisitte størrelser listet: 24×36, 20×30, 18×24, 16×20, 12×16, 11×14, 8×12, 8×10, 5×7, A4, A3, A2 ...]
[Linje 3: Etsy-relevans — hvorfor disse størrelsene betyr noe for digital download-selgere]
[Linje 4: SnapToSize-kobling — 1 setning maks]
[Linje 5: CTA: "Save this guide →" eller "Try free → app.snaptosize.com"]
```

**Eksempel (fra best-performing pin):**
```
Everything Etsy wall art sellers need to know about print sizes and ratios.
Sizes covered: 24×36, 20×30, 18×24, 16×20, 12×16, 11×14, 8×12, 8×10, 5×7, A4, A3, A2, A1 — all at 300 DPI.
These are the exact sizes Etsy buyers search for. Include all of them to avoid refund requests.
SnapToSize generates all 5 ratio packs from a single upload — no Photoshop needed.
Try free → app.snaptosize.com
```

**Tittel-formula for størrelses-pins:** "Complete Guide: ..." eller "All [N] Sizes ..."
- "Complete Guide: Etsy Print Sizes for Wall Art Sellers"
- "All 28 Print Sizes for Your Etsy Digital Downloads"

**Tittel for lifestyle-pins:** Fordel-first, kort. "One Upload → 70 Print-Ready Files"

**Tags:** Alltid minst 2 størrelses-spesifikke tags: `etsy print sizes`, `print size guide`, `digital download sizes`, `wall art sizes`, og spesifikke som `8x10 print`, `A4 print`.

**Lengde:** 150–300 tegn (Pinterest viser ~150 før "mer").

---

### Instagram caption (discovery + social)

```
[Linje 1: Hook — vises i feed-preview FØR "mer" — må stå alene som scroll-stopper]

[2-3 linjer med verdi, linjeskift for lesbarhet]

#etsyseller #digitaldownloads #printsizes #wallart #etsydigital
```

- Maks 5 hashtags (alltid på slutten)
- CTA: "Link in bio → snaptosize.com"
- Pain/before-after fungerer bra her
- Aldri kopier Pinterest-beskrivelsen direkte — Instagram er ikke søk

---

## PROMPT 1 — DPI-angsten: Before/After split (300-dpi-makrokvalitet)

**Hook:** "Print shop rejected it. Again."
**Scroll-stopp:** Etsy-selgere gjenkjenner umiddelbart avvisningsfrykt

```
Photorealistic marketing image, vertical portrait format, 9:16.

LAYOUT: Clean split-panel composition on a light cream background.
TOP 20%: Dark navy bar (#0B0B12). Bold teal text (#2DD4BF), large:
  "Gallery quality. Every single size."
Smaller white text below: "300 DPI · 70 files · Etsy-ready"

MIDDLE 70%: Two printed botanical wall art prints side by side, slight drop shadow.
LEFT PANEL — label "Before" in small red text above:
  The print appears visibly pixelated — jagged flower petal edges, muddy colors,
  visible pixel blocks. A red sticky note reads: "Print shop rejected — too low res".
RIGHT PANEL — label "After" in small teal text above:
  Same artwork, razor-sharp, vibrant true colors, crisp ink texture visible.
  Small teal badge in corner: "300 DPI ✓"
Thin teal vertical line (#2DD4BF) between panels.

BOTTOM 10%: Rounded teal pill button, white text: "app.snaptosize.com · Free to start"

Photorealistic, DSLR studio lighting, no people.
```

---

## PROMPT 2 — Størrelses-referanse: Kanoniske Etsy print-størrelser (print-size-reference)

**Konsept-ID:** `print-size-reference`
**Hook:** "The print sizes every Etsy buyer looks for — and the exact pixels at 300 DPI."
**Scroll-stopp:** Reference-innhold selgere bookmarker og returnerer til. Høyest save-rate på Pinterest.
**Innholdstype:** Utdanning-first. SnapToSize nevnes bare i URL-pill og caption — ikke som produkt-hero.

**Pinterest keywords:** etsy print sizes, print size guide, 300 dpi pixel dimensions, etsy digital download sizes, wall art print sizes

```
Clean educational reference poster, vertical portrait format 2:3 (1000×1500px).

BACKGROUND: Warm cream (#F7F3EE) — not dark SaaS aesthetic. This is a seller's reference guide.

TOP 15%:
  Small teal label (#2DD4BF), monospace uppercase: "ETSY PRINT SIZE GUIDE"
  Bold dark heading (#1A1A1A), large: "Every size your buyers search for"
  Thin teal divider line.

MAIN CHART (middle 70%):
  Two-column table, clean minimal borders.
  Left column header: "PRINT SIZE" (dark, bold)
  Right column header: "PIXELS AT 300 DPI" (dark, bold)

  Row 1:  4×6"      |  1200 × 1800 px
  Row 2:  5×7"      |  1500 × 2100 px
  Row 3:  8×10"     |  2400 × 3000 px
  Row 4:  11×14"    |  3300 × 4200 px
  Row 5:  16×20"    |  4800 × 6000 px
  Row 6:  18×24"    |  5400 × 7200 px
  Row 7:  24×36"    |  7200 × 10800 px
  Thin divider line
  Row 8:  A4         |  2480 × 3508 px
  Row 9:  A3         |  3508 × 4961 px
  Row 10: A2         |  4961 × 7016 px

  Each row alternates cream and very slightly warmer white. Size column left-aligned, pixel column right-aligned.
  Small note below table, grey italic: "* Portrait. Landscape = swap width/height."

BOTTOM 15%:
  Teal highlight strip: "All at 300 DPI · JPG · Etsy-ready"
  Small teal pill (optional): "app.snaptosize.com"

Style: Reference poster aesthetic — warm, readable, like a well-designed cheat sheet. Not SaaS-dark.
No people. No UI chrome. Clean typographic chart only.
```

**Variasjoner (bytt per batch):**
- Bakgrunn/tone: cream (#F7F3EE) → warm white → soft sage (#EEF2EE)
- Chart-stil: bordered rows → lined separators → alternating card rows
- Hook: "Save this." / "Bookmark this for your next listing." / "Your buyers are searching these exact sizes right now."

---

## PROMPT 3 — Mappekaos: Chaos vs Organization (folder-chaos)

**Hook:** "70 sizes. Zero chaos."
**Scroll-stopp:** Universell smerte for alle Etsy-selgere

```
Photorealistic marketing split image, vertical portrait format, 9:16.

TOP 18%: Dark navy bar. Bold text:
  White: "1 upload."
  Teal (#2DD4BF): "70 files. Every ratio."
  Smaller grey: "Sound familiar? There's a better way."

LEFT HALF — "Before" label top left in red:
  MacBook screenshot, dark frustrated mood.
  Downloads folder showing file names:
    "8x10_FINAL_v3_copy.jpg"
    "12x18_maybe.psd"
    "print_REAL_final.jpg"
    "FINAL_copy2.jpg"
  47 files total visible. Red warning badge: "Buyer complained — missing size"
  Cluttered, overwhelming, dim lighting.

RIGHT HALF — "After" label top right in teal:
  Clean bright Finder window.
  Five organized folders with teal ZIP icons (ALL 5 packs must be visible):
    "2:3 Pack — 7 files ✓"
    "3:4 Pack — 5 files ✓"
    "4:5 Pack — 5 files ✓"
    "ISO Pack — 5 files ✓"
    "Extras — 6 files ✓"
  Clean, satisfying, bright lighting.
  Small text: "Generated by SnapToSize · app.snaptosize.com"

BOTTOM 10%: Teal pill: "app.snaptosize.com · Organize everything · Free"

Teal vertical divider line between halves.
Photorealistic screen mockup aesthetic, DSLR.
```

---

## PROMPT 4 — Livsstil: Tidrike selgeren (livsstil-den-tidrike-selgeren)

**Hook:** "She uploads once. Gets paid every time."
**Scroll-stopp:** Aspirational + konkret resultat

```
Photorealistic lifestyle marketing photo, vertical portrait format, 9:16.

TOP 22%: Soft dark navy gradient overlay on photo background. Bold text:
  White large: "She uploads once."
  Teal large (#2DD4BF): "Gets paid every time."
  Smaller grey: "SnapToSize · app.snaptosize.com"

SCENE (remaining 78%): Bright Scandinavian home studio, warm morning light.
  Woman in early 30s, relaxed, leaning back in chair, smiling.
  Laptop screen clearly shows app.snaptosize.com dashboard:
    Text visible: "Botanical Series — 70 files ready"
    Stats row visible: "4 packs downloaded today · $247 earned"
  Behind her: wall with 3 framed art prints (5×7, 8×10, 11×14).
  On desk: coffee, sketchbook, small plant. White walls, wood tones.

Bottom of image, subtle teal pill: "app.snaptosize.com · Free to start"

Photorealistic, warm aspirational lifestyle aesthetic. No stock-photo feel.
The SnapToSize dashboard text must be legible at full image size.
```

---

## PROMPT 5 — Kjøperen som forsvant: Etsy listing (missing-buyer)

**Hook:** "They wanted 8×10. You only had 5×7."
**Scroll-stopp:** Direct pain — mister salg de ikke vet om

```
Photorealistic marketing mockup, vertical portrait format, 9:16.

TOP 20%: Dark navy bar. Bold text:
  White: "They wanted 8×10."
  Teal (#2DD4BF): "You only had 5×7."
  Small grey: "Etsy sellers lose sales they never see"

MIDDLE 50%: Laptop screen, depth-of-field photography.
  Etsy product listing page for a botanical wall art print.
  "Select size" dropdown OPEN, showing only: "5×7" and "8×12"
  Red highlight around missing sizes. Chat bubble from "Buyer123":
    "Do you have this in 8×10? Or A4?"
  No reply visible — notification badge says "2 unanswered"

LOWER 25%: Same listing, transformed.
  Size dropdown now shows full list:
    "5×7 · 8×10 · 11×14 · 12×18 · A4 · A3 · +22 more sizes"
  Small teal text overlay: "Fixed with app.snaptosize.com · 1 upload"
  Green "In stock" badge visible.

BOTTOM 5%: Teal pill: "app.snaptosize.com · All sizes · Free to start"

Photorealistic UI mockup, shallow depth of field.
```

---

## PROMPT 6 — Frame-match: IKEA + standard rammer (frame-size-match)

**Konsept-ID:** `frame-size-match`
**Hook:** "IKEA Ribba frames take these exact print sizes — and most Etsy sellers don't stock them."
**Scroll-stopp:** Kjøpere kjøper ramme FØR de kjøper print. Selgere som vet dette konverterer bedre.
**Innholdstype:** Utdanning-first. Konkret problem: selgere vet ikke hvilke størrelser som passer rammer.

**Pinterest keywords:** ikea ribba frame print sizes, what size print fits ikea frame, standard frame sizes, etsy print sizes for frames, 12x16 print size

```
Clean educational reference visual, vertical portrait format 2:3 (1000×1500px).

BACKGROUND: Warm off-white (#F5F0EB). Frame-guide editorial aesthetic — not SaaS-dark.

TOP 15%:
  Teal label (#2DD4BF), monospace uppercase: "FRAME SIZING GUIDE"
  Bold dark heading: "Which prints fit IKEA Ribba"
  Thin teal divider.

SECTION A — "IKEA Ribba" (bold label, upper middle area):
  Three simple outlined frame rectangles, proportionally sized, side by side:
  [5×7 rectangle]    [8×10 rectangle]    [12×16 rectangle]
  Below each frame:
  "RIBBA 5×7"        "RIBBA 8×10"        "RIBBA 12×16"
  Small grey text:
  "stock 5×7 prints" "stock 8×10 prints" "stock 12×16 prints"

  Teal callout box, slightly below:
  "12×16 is IKEA's most popular size — and the most missed size on Etsy."

SECTION B — "Standard US frames" (bold label):
  Clean two-column list:
  "4×6 frame   →   4×6 print"
  "5×7 frame   →   5×7 print"
  "8×10 frame  →   8×10 print"
  "11×14 frame →   11×14 print"
  "16×20 frame →   16×20 print"

BOTTOM 10%:
  Small grey text: "Offer all 5 → never lose a buyer who already has the frame."
  Optional teal pill: "app.snaptosize.com · Generate all sizes free"

Style: Interior design reference guide aesthetic. Warm, readable. Frame outlines are simple line-art, not photos.
```

**Variasjoner:**
- Frame focus: IKEA Ribba only → IKEA Ribba + Hovsta → IKEA + Michaels US standard
- Artwork in frames: Show a small botanical thumbnail inside each frame rectangle (variation B)
- Hook: "12×16 is IKEA Ribba's most popular frame. Do you sell that size?" / "Buyers buy the frame first. These prints fit."

---

## PROMPT 7 — Photoshop-fella: "$60/mo you don't need" (photoshop-trap)

**Hook:** "Never opened Photoshop? Never have to."
**Scroll-stopp:** Tar bort intimideringen — direkte på ICP-insight (2026-04-21: "Primary ICP has likely never opened Photoshop and never will")
**Konverteringsvinkel:** Konkurrent-positioning + prisanker — $60/mo Photoshop vs $11.99/mo (eller $8.08/mo yearly) SnapToSize
**FAKTA (fra CONTENT_REFERENCE — må brukes eksakt):** $11.99/mo eller $97/year ($8.08/mo) · 28 sizes i packs (2:3=7, 3:4=5, 4:5=5, ISO=5, Extras=6) · opp til 70 files totalt med Quick Export

```
Clean split-screen marketing graphic, vertical portrait format, 2:3 ratio (1000×1500 canvas).
Dark premium background (#0B0B12) with subtle teal glow orbs in top-left and bottom-right corners.

TOP 10%: Bold editorial headline across full width, centered:
  Line 1 (white, large sans-serif, 96pt): "Never opened Photoshop?"
  Line 2 (teal #2DD4BF, italic, 96pt): "Never have to."

LEFT HALF (45% width, starts 12% from top):
  Panel tilted 2° clockwise, slightly desaturated, cold blue grading.
  Top red bar (#DC2626), white text: "$60/month · steep learning curve"
  Center: Realistic Photoshop desktop UI fragment — dark grey interface with
    Tools panel on left (lasso, magic wand, etc), Layers panel on right showing
    8 stacked layers, Image Size dialog box OPEN with fields:
      "Resolution: 72 pixels/inch" (highlighted red)
      "Resample: Bicubic Automatic" (highlighted red)
      "Constrain Proportions" checkbox (uncertain hover state)
    3 yellow sticky notes stuck to screen edge:
      "what's bicubic??"
      "300 vs 72 DPI?"
      "aspect ratio — LOCKED or not??"
    Cursor hovering nervously over OK button.
  Bottom: Grey clock icon + text "1–3 hours per artwork"

RIGHT HALF (55% width, starts 12% from top):
  Panel upright, crisp, with teal glow border (2px #2DD4BF at 40% opacity).
  Top teal bar (#2DD4BF), white text: "$11.99/month · drag and drop"
  Small grey caption under bar: "or $97/year · save 33%"
  Center: SnapToSize app mockup — clean minimal UI, dark card background:
    Large drop-zone with dashed teal border, centered icon of upload arrow:
      "Drop your artwork here" (white, 28pt)
      "PNG · JPG · WebP" (teal, 14pt)
    Below drop-zone, vertical list of 5 pack rows, all with teal checkmark:
      ✓ 2:3 Ratio Pack
      ✓ 3:4 Ratio Pack
      ✓ 4:5 Ratio Pack
      ✓ ISO Pack (A-series)
      ✓ Extras Pack
    Thin divider, then small teal caption centered:
      "28 sizes in packs · up to 70 files with Quick Export"
    Solid teal button at bottom: "Resize All · 30 seconds"
  Bottom: Teal checkmark + "70 print-ready files · Etsy-ready · No Photoshop needed"

BOTTOM 7%: Centered teal rounded pill (border-radius 999px), white text:
  "app.snaptosize.com · Free to start"
  Subtle teal glow behind pill.

Style: Premium editorial SaaS ad. Graphic design aesthetic.
NO stock photo people. NO generic icons — real UI elements only.
NO invented size counts per pack (real counts only if any are shown).
Typography: Inter or similar modern sans-serif, bold for headlines, monospace for technical terms.
High contrast, sharp edges, no gradients except on teal accents.
```

---

## PROMPT 8 — Internasjonal oppvåkning: A-series unlocked (international-unlock)

**Hook:** "Your Etsy shop just went global."
**Scroll-stopp:** Growth-vinkel — ISO-sizes låser opp EU/UK/AU/APAC-kjøpere selgere ikke visste de mistet
**Konverteringsvinkel:** Scale/revenue (ikke bare time-save) — ISO Pack = nye markeder
**FAKTA (fra CONTENT_REFERENCE):** ISO Pack = 5 sizes (A4, A3, A2, A1, A0) · alle 300 DPI · del av pakken man får med 1 upload · opp til 70 files totalt med Quick Export

```
Photorealistic marketing composition, vertical portrait format, 2:3 ratio (1000×1500 canvas).
Premium deep navy background (#0A0F1E) with soft warm gold accent lighting from upper-right.

TOP 15%: Bold editorial headline, centered:
  Line 1 (white, serif or modern sans, 88pt): "Your Etsy shop"
  Line 2 (teal-to-gold gradient, italic bold, 88pt): "just went global."
  Small grey subtitle (20pt): "ISO paper sizes unlocked · A4 · A3 · A2 · A1 · A0"

CENTER 58%: Layered isometric composition, three zones.

  LEFT ZONE (30% width): Floating stack of printed posters rising diagonally.
    Each poster shows a real-looking botanical or abstract art print, with
    crisp size label visible in lower corner of each:
      Bottom: A4 (210×297 mm) — cream textured paper
      Middle-bottom: A3 (297×420 mm) — bright white
      Middle-top: A2 (420×594 mm) — warm white
      Top: A1 (594×841 mm) — slight shadow falling off
    Posters float upward with subtle parallax, rotated 2-4° each.
    Soft shallow depth of field — bottom poster crisp, top slightly soft.

  CENTER ZONE (40% width): Teal/gold dotted world map silhouette (flat, graphic).
    Arcing dotted lines connect pulsing teal dots at these cities:
      New York → London → Paris → Berlin → Stockholm → Sydney → Tokyo
    Above Europe, small italic text (grey, 16pt):
      "A-series: standard in 150+ countries"
    Small gold pulse rings expanding from each city dot.

  RIGHT ZONE (30% width): Realistic Etsy listing card mockup (bright white).
    Product thumbnail: same botanical print shown in posters.
    "Select size" dropdown OPEN with clear hierarchy:
      ▢ 5×7 in (US standard)
      ▢ 8×10 in (US standard)
      ✓ A4 (EU · UK · AU · APAC)  ← highlighted teal row
      ✓ A3 (EU · UK · AU · APAC)  ← highlighted teal row
      ✓ A2 (EU · UK · AU · APAC)  ← highlighted teal row
    Below dropdown, green success chip: "✓ Now shipping worldwide"
    Small grey text below: "ISO Pack added — same upload, same file"

LOWER 20%: Three stat cards, equal width, dark cards (#151A26) with teal top border:
  Card 1 (large teal number): "A5–A0" / small white: "ISO sizes" / small grey: "built in"
  Card 2 (large white number): "150+" / small teal: "countries" / small grey: "use A-series"
  Card 3 (large teal number): "70" / small white: "print-ready files" / small grey: "from 1 upload"

BOTTOM 7%: Centered teal rounded pill with soft gold glow behind:
  White text: "app.snaptosize.com · ISO Pack · Unlock global buyers"

Style: Premium business magazine aesthetic, editorial photography quality.
NO people, NO emoji globes — real flat-graphic world map silhouette only.
Typography: modern serif for main headline, clean sans-serif for data and stats.
Color palette: deep navy base, teal (#2DD4BF) primary, warm gold (#F5C97A) accent only.
Subtle grain texture for premium print-magazine feel.
```

---

## PROMPT 9 — Søndagshelvete: 3 timer du aldri får igjen (sunday-afternoon)

**Hook:** "3 hours of your Sunday. Gone. Again."
**Scroll-stopp:** Visceral tidssmerte — Etsy-selgere bruker helg på manuelt arbeid og vet det
**Konverteringsvinkel:** Emosjonell tidsreturn — "get your life back" er sterkere enn "faster tool"

```
Cinematic photorealistic marketing image, vertical portrait format, 2:3 ratio (1000×1500 canvas).
Diagonal split composition: cold blue (upper-left) transitioning to warm golden (lower-right).
Feels like a premium brand campaign, not a stock photo.

TOP 13%: Bold headline on semi-transparent dark bar across full width:
  Line 1 (white, large bold sans, 78pt): "3 hours of your Sunday."
  Line 2 (teal #2DD4BF, italic, 78pt, with thin teal underline): "Gone. Again."

CENTER 60%: Two-panel cinematic diagonal split.

  UPPER-LEFT PANEL (the pain — ~55% of center zone):
    Overhead top-down shot of a home office desk at late Sunday afternoon.
    Cold blue color grading, overcast window light.
    Laptop open showing file manager: chaotic folder grid with 40+ folders labeled:
      "5x7_final", "5x7_FINAL_use_this", "8x10_v2", "8x10_v3_fixed",
      "11x14", "print_ready_MAYBE", "16x20_needs_check", "A4_EU", "ratios_old"...
    Half-drunk coffee mug (cold), a few crumpled post-it notes with crossed-out
    size dimensions. Edge of a wall clock visible, hands at 4:47 PM.
    Subtle motion blur on a hand moving the mouse cursor.
    Small red overlay pill, top-right of panel: "Still resizing..."
    Desk surface cool blue-grey.

  LOWER-RIGHT PANEL (the fix — ~45% of center zone):
    Same desk, sunlit golden warmth. Clean, uncluttered.
    Laptop shows SnapToSize confirmation screen (clean dark UI):
      Large teal checkmark icon at top
      "Done · 2:24 PM" (teal, bold)
      "70 files · 5 packs · Etsy-ready" (white)
      Download button glowing teal at bottom
    Fresh full coffee mug steaming softly.
    Open book face-down beside laptop (implying: user moved on with their day).
    Warm golden afternoon light streaming from right edge.
    Small teal pill, top-right of panel: "Sunday reclaimed."
    Desk surface warm honey tone.

  DIAGONAL DIVIDER: Sharp but organic — like a light edge, with
    subtle teal-gold pixel shimmer along the seam.

LOWER 20%: Bold centered positioning statement on teal-tinted dark card:
  Large teal serif quote-mark ornament "
  White text, italic serif (54pt): "Upload once. Get your Sunday back."
  Small grey italic caption below (16pt): "That's the whole point of SnapToSize."
  Subtle teal underline across the statement.

BOTTOM 7%: Centered teal rounded pill, white text:
  "app.snaptosize.com · 30 seconds · free to start"
  Soft teal glow behind pill.

Style: Cinematic color grading (cold blue → warm gold diagonal).
Premium ad campaign quality, editorial storytelling.
Photorealistic with shallow depth of field and subtle film grain.
NO visible human faces (keeps it universal — focus on objects and environment).
NO testimonial attribution — "Upload once, get your Sunday back" reads as a brand promise, not a customer quote.
Typography: bold sans-serif for headline, elegant italic serif for positioning statement.
```

---

## PROMPT 10 — Størrelses-guiden: Pack breakdown infographic (size-guide-infographic)

**Hook:** Varieres per kjøring — se alternativer under
**Scroll-stopp:** Etsy-selgere som ikke vet hvilke størrelser de mangler — konkret, actionbar data

**KRITISK: Hvert kjøring MÅ endre følgende (ellers identiske resultater):**
- **Artwork-tema:** Velg ETT: `[botanical-prints]` / `[geometric-abstract]` / `[coastal-landscape]` / `[celestial-night-sky]` / `[minimalist-line-art]` / `[anime-illustration]` / `[watercolor-florals]` / `[vintage-map-art]`
- **Komposisjon:** Velg ETT alternativ fra listen i prompten
- **Fargeaksentuering:** `[teal-dominant]` / `[white-dominant]` / `[dark-card-contrast]` / `[warm-amber-accent]`
- **Hook-tekst:** Velg ETT fra disse (IKKE kopier fra tidligere kjøringer):
  - "28 sizes. 5 packs. 1 upload."
  - "Every print size your buyers will ever ask for."
  - "Stop losing sales to missing sizes."
  - "Your buyers want 8×10. And A4. And 20×30. Here's all of them."
  - "The complete Etsy print size list — all 28."
  - "One ZIP. Five ratios. Every size covered."

```
Photorealistic marketing infographic, vertical portrait format, 9:16, 1000×1500px.
Artwork context: [SUBSTITUTE: artwork-theme from list above — the art shown is [ARTWORK_THEME] style digital art. Show it as background texture, subtle watermark, or small preview panels]

COMPOSITION (choose ONE and execute it fully — rotate each run):
  Option A — Five Pack Cards: Five vertical cards side by side, one per ratio pack. Each card shows pack name, ratio badge, and bullet list of sizes. Cards overlap slightly, teal top-edge glow on the "active" card.
  Option B — Grid infographic: Clean 5-row table, alternating dark/light rows. Columns: PACK NAME | RATIO | SIZES | FILES. Artwork thumbnail preview in rightmost column.
  Option C — Stacked reveal: Vertical stack of 5 horizontal "shelf" panels, collapsing from top. Pack name on left, sizes listed horizontally on right. Visual impression of organized ZIPs stacking.
  Option D — Radial hub: Center circle shows "1 upload → 70 files". Five spokes radiate outward, each ending in a pack card showing its sizes. Clean, minimal lines.
  Option E — Before/after column split: LEFT column shows chaotic filename list (artwork_resized_v3_FINAL.jpg etc). RIGHT column shows clean pack structure: 2-3-ratio/, 4-5-ratio/, iso-a-series/ with file counts. Hook text divides the two sides.

HOOK TEXT (top 20% of image, bold sans-serif, [COLOR_ACCENT]):
  "[SUBSTITUTE: hook text chosen above]"
  Subline (smaller, white/grey): "Included in every SnapToSize export. 300 DPI. Etsy-ready."

FIVE PACK DATA — render ALL of these exactly (never invent sizes):

  ┌─ 2:3 RATIO — Most Common Wall Art (7 sizes) ─────────────────┐
  │  4×6 · 6×9 · 8×12 · 10×15 · 12×18 · 16×24 · 20×30          │
  └──────────────────────────────────────────────────────────────┘

  ┌─ 3:4 RATIO — Classic Photo Frame (5 sizes) ──────────────────┐
  │  6×8 · 9×12 · 12×16 · 15×20 · 18×24                         │
  └──────────────────────────────────────────────────────────────┘

  ┌─ 4:5 RATIO — Traditional Art / 8×10 (5 sizes) ──────────────┐
  │  8×10 · 12×15 · 16×20 · 20×25 · 24×30                       │
  └──────────────────────────────────────────────────────────────┘

  ┌─ ISO A-SERIES — International Standard (5 sizes) ────────────┐
  │  A5 · A4 · A3 · A2 · A1                                      │
  └──────────────────────────────────────────────────────────────┘

  ┌─ EXTRAS — Common Sizes (6 sizes) ────────────────────────────┐
  │  5×7 · 8.5×11 · 11×14 · 11×17 · 13×19 · 20×24               │
  └──────────────────────────────────────────────────────────────┘

BELOW THE PACK DATA — value summary panel (teal or dark card):
  Bold white stat: "Up to 70 files from 1 upload"
  Subtext (smaller): "Portrait · Landscape · Square · Large Format — all at 300 DPI"
  Note: 70 files = 28 pack sizes × portrait + landscape, plus square and oversized via Quick Export

BOTTOM 8%: Teal rounded pill, white text:
  "app.snaptosize.com · Free to start"

CRITICAL FACTS (never deviate):
  - Pack count: exactly 5 packs
  - Total pack sizes: exactly 28
  - Marketing number: "up to 70 files" (portrait + landscape + square + large format)
  - "30+ sizes" acceptable shorthand
  - NEVER say "100 files", "50 files", "29 sizes"
  - DPI: 300 DPI (never 72, never 150)
  - Output format: JPG/JPEG
  - URL: app.snaptosize.com

Style: [SUBSTITUTE: color accent from list above].
Clean, editorial infographic aesthetic — think Canva Pro meets Dribbble data visualization.
High contrast, legible at thumbnail size (Pinterest grid).
No human faces.
Typography: bold condensed sans-serif for headlines, monospace or clean sans for size listings.
```

---

## PROMPT 13 — Ratio-forklaring: Samme kunst, tre beskjæringer (ratio-cropping-education)

**Konsept-ID:** `ratio-cropping-education`
**Hook:** "This is what 'ratio' actually means for your art — and why you need all three."
**Scroll-stopp:** Ratio-forvirring er #1 spørsmål fra nye Etsy-selgere. Dette besvarer det visuelt.
**Innholdstype:** Utdanning-first. Selgere forstår ikke hvorfor de trenger flere ratio-packs — dette viser det.

**Pinterest keywords:** print ratios explained, etsy print ratios, 2x3 vs 4x5, portrait vs square print, what is print ratio

```
Clean educational split visual, vertical portrait format 2:3 (1000×1500px).

BACKGROUND: Soft neutral (#F4F1ED) — warm, editorial.

TOP 15%:
  Teal label (#2DD4BF), monospace uppercase: "PRINT RATIOS EXPLAINED"
  Bold dark heading: "Same design — three different crops"
  Thin teal divider.

MAIN VISUAL (middle 70%):
  Three print rectangles arranged vertically with spacing, each showing the SAME botanical artwork
  but cropped/fitted to a different ratio. Each rectangle is outlined with a thin dark border.

  RECTANGLE 1 — Tall portrait (2:3 ratio):
    Label above: "2:3 RATIO"
    Example sizes below: "4×6 · 8×12 · 12×18 · 20×30 · 24×36"
    Artwork crops: Shows a tall vertical slice — full height of the plant, narrow width.

  RECTANGLE 2 — Square-ish portrait (4:5 ratio):
    Label above: "4:5 RATIO"
    Example sizes below: "4×5 · 8×10 · 16×20"
    Artwork crops: Slightly wider — more of the composition shows.

  RECTANGLE 3 — Almost square (1:1 or 5:4 landscape):
    Label above: "SQUARE (1:1)"
    Example sizes below: "8×8 · 10×10 · 12×12"
    Artwork: Wide crop — shows much more horizontal space, tallest elements cut off.

  Below all three, a teal callout box:
  "Upload one file. Get all three ratios. No cropping, no distortion."

BOTTOM 10%:
  Small grey text: "Buyers frame in every ratio. Stock all three — or lose the sale."
  Optional teal pill: "app.snaptosize.com · All 5 ratios, one upload"

Style: Educational diagram aesthetic. Clean, warm. Artwork in rectangles should look like real botanical prints.
Composition should clearly show how the SAME artwork appears different at each ratio — this is the educational point.
```

**Variasjoner:**
- Artwork-tema: botanical → abstract geometric → landscape photo
- Layout: Vertical stack → side-by-side three columns (for landscape ratios)
- Hook: "Why the same design needs 5 different files on Etsy." / "Your buyers shop in every ratio. Are you stocking all three?"

---

## GJENBRUKSREGLER

**Analytics-notat (oppdatert W23 2026-05-31):** Buffer API returnerer 0 stats for alle poster — aldri fungert. Sjekk performance manuelt: Pinterest Analytics (pinterest.com/analytics) ukentlig for saves + impressions. Logg funnene under hvert konsept ved gjenbruk. Måleparameter for suksess: saves > 20 per pin innen 30 dager.

| Konsept | Cooldown | Sist brukt |
|---------|----------|------------|
| folder-chaos | 4 uker | W19 (22.04) — KLAR |
| missing-buyer | 4 uker | W19 (22.04) — KLAR |
| dpi-comparison (gammel) | 4 uker | W18 (30.04) — KLAR |
| en-til-mange | 4 uker | W22 (12.05) — Variation B: sage linen flat-lay, 5 ratio-pack cards fanning from MacBook Air (Midnight), wildflower botanical thumbnail on cards, "1 upload. Every size she'll ever frame." hook — KLAR ~09.06 |
| canva-limitation | 4 uker | W22 (12.05) — Variation A: iMac split-screen Canva resize dialog (left) vs SnapToSize 5-pack export dashboard (right), "Canva resizes. SnapToSize exports every Etsy size." hook — KLAR ~09.06 |
| galleryvegg-ratioene | 4 uker | W20 (27.04) — KLAR |
| livsstil-den-tidrike-selgeren | 4 uker | W20 (02.05) — KLAR |
| bestseller-butikken | 4 uker | W20 (27.04) |
| de-5-premium-pakkene | 4 uker | W17 |
| quote-selgeren | 4 uker | W17 |
| det-globale-rekkevidden-iso | 4 uker | W17 |
| 300-dpi-makrokvalitet | 4 uker | W18b |
| en-upload-enkelheten | 4 uker | W18b |
| stats-visual | 4 uker | W19 (21.04) |
| photoshop-trap | 4 uker | W19 (23.04) |
| international-unlock | 4 uker | W19 (23.04) |
| sunday-afternoon | 4 uker | W19 (24.04) |
| size-guide-infographic | 4 uker | W20 (02.05) — Option D radial hub, celestial-night-sky, dark-card-contrast, "70 sizes · vertical/landscape/square" hook |
| bedroom-gallery-mixed-sizes | 4 uker | W20 (03.05) — warm Scandi-bohemian bedroom corner, three-frame cluster (8×10/11×14/16×20) of same botanical, terracotta+cream+ochre+sage palette, "Framed in three sizes. Uploaded once." hook |
| craft-flatlay-export-ready | 4 uker | W20 (03.05) — top-down flat-lay, sage-grey linen surface, MacBook showing SnapToSize export dashboard with 5 packs/28 sizes, three printed botanicals + eucalyptus + coffee, "From one file — every size she'll frame." hook |
| etsy-notifications-tonight | 4 uker | W22 (10.05) — Variation A: iPhone 15 Pro on charcoal bedspread, 3 Etsy sale notifications (Portland/London/Melbourne), warm lamp 22:14, "What happens when you stock every size." hook |
| the-clean-zip | 4 uker | W22 (10.05) — Variation A: MacBook Pro Space Black on white marble, Finder List View showing 5 clean ZIP packs (2-3/3-4/4-5/ISO/Extras), "This is what your buyers see." hook |

**Klare nå (W23 — 2026-05-31):** `folder-chaos` · `missing-buyer` · `dpi-comparison` · `galleryvegg-ratioene` · `livsstil-den-tidrike-selgeren` · `bestseller-butikken` · `bedroom-gallery-mixed-sizes` · `craft-flatlay-export-ready` · `sunday-afternoon` · `photoshop-trap` · `international-unlock` · `size-guide-infographic` · `print-size-reference` (NY) · `frame-size-match` (NY) · `ratio-cropping-education` (NY)

**Klar ~09.06:** `en-til-mange` · `canva-limitation` · `etsy-notifications-tonight` · `the-clean-zip`

**Neste batch — prioritér:** Start med de 3 nye konseptene (print-size-reference, frame-size-match, ratio-cropping-education) for å validere seller-education-first-retningen. Kjør maks 4 pins/uke, ikke 7+.

---

## KONSEPT 11 — "Tonight's Etsy Notifications" (etsy-notifications-tonight)

**Hook:** "What happens when you stock every size."
**Scroll-stopp:** Selgere ser konkrete salgs-notifikasjoner fra UK + US + AU — direkte bevis for at ISO-støtte = internasjonal omsetning
**Variation system:** Endre notifikasjon-tidspunkt, selger-art (pastell-botanical / abstract / geometric), og rombelysning mellom bruk

### Variation A (W22 — brukt 10.05.2026)
Setting: Mørkt soverom, iPhone på sengeteppet, varm lampebelysning fra siden (temperatur 2700K)
Art direction: Moody, intimate — ser ut som virkelig screenshottet av en fornøyd selger klokken 22

```
Photorealistic marketing image, vertical 2:3 portrait format (1000×1500px).

SCENE: A woman's hand holds an iPhone 15 Pro (Natural Titanium, black frame) against a dark charcoal bedspread. The phone screen shows iOS 17 Notification Center in Dark Mode. Time displayed at top: 22:14. Battery 73%.

NOTIFICATION 1 (topmost, Etsy app icon):
  Header: "Etsy · New order"
  Body text: "Sarah M. ordered 2-3 Ratio Pack · Portland, OR · $7.99"
  Timestamp: "11 min ago"

NOTIFICATION 2 (middle, Etsy app icon):
  Header: "Etsy · New order"
  Body text: "James H. ordered ISO A-Series Pack · London, UK · £6.99"
  Timestamp: "34 min ago"

NOTIFICATION 3 (bottom, Etsy app icon):
  Header: "Etsy · New order"
  Body text: "Priya K. ordered Full Bundle · Melbourne, AU · A$14.99"
  Timestamp: "1 hr ago"

OVERLAY TEXT (top of image, above the hand/phone scene):
  Bold white text, large: "What happens when you stock every size."
  Smaller teal text (#2DD4BF) below: "3 sales. 3 countries. 0 refund requests."

BOTTOM 10%: Rounded pill, dark background, white text: "app.snaptosize.com · Free to start"

Lighting: Single warm bedside lamp glow from upper right (2700K, soft). Shallow depth of field — phone screen sharp, bedspread slightly soft. Real iPhone glass glare visible on screen edges.
Photography style: Authentic lifestyle — NOT studio stock. Looks like a real seller's bedroom at night.
No text overlaid by graphic software — all text appears ON the iPhone screen as part of the UI.
```

---

## KONSEPT 12 — "The Clean ZIP" (the-clean-zip)

**Hook:** "This is what your buyers see. Is yours this clean?"
**Scroll-stopp:** Konkret Finder-vindu med eksakte ZIP-pakkenavn trigger gjenkjenning hos Etsy-selgere som ikke har strukturert sine nedlastinger
**Variation system:** Endre overflate (tre-skrivebord / marmor / grønn matte), antall åpne Finder-paneler, og om en ZIP er utvidet/innhold synlig

### Variation A (W22 — brukt 10.05.2026)
Setting: Hvit marmor-overflate, MacBook Pro 14" (Space Black), macOS Sonoma Finder i List View, klar dagslys fra venstre
Art direction: Clean editorial — produktivitets-estetikk, ingen clutter

```
Photorealistic marketing image, vertical 2:3 portrait format (1000×1500px).

SCENE: Top-down flat-lay. MacBook Pro 14" Space Black, lid open, keyboard visible at bottom edge. macOS Sonoma Finder window open and centered on screen, List View. White marble surface underneath laptop.

FINDER WINDOW — exact UI details:
  Window title bar: "Botanical Wall Art — Etsy Digital Download"
  Five rows, each a ZIP file, in this exact order:
  Row 1: [ZIP icon] "2-3_Ratio_Pack.zip"  |  148 MB  |  Today 14:32
  Row 2: [ZIP icon] "3-4_Ratio_Pack.zip"  |  112 MB  |  Today 14:32
  Row 3: [ZIP icon] "4-5_Ratio_Pack.zip"  |  98 MB   |  Today 14:32
  Row 4: [ZIP icon] "ISO_Pack.zip"         |  134 MB  |  Today 14:32
  Row 5: [ZIP icon] "Extras.zip"           |  76 MB   |  Today 14:32
  All rows alternate white/very light grey. No other files visible. Window is perfectly sized to show exactly these 5 rows.

OVERLAY TEXT (top quarter of image, above MacBook):
  Bold dark text on white/light background: "This is what your buyers see."
  Teal subheading (#2DD4BF): "Is yours this clean?"
  Small grey text below: "5 packs · 70 files · 300 DPI · Etsy-ready"

BOTTOM 10%: Teal rounded pill: "app.snaptosize.com · Free to start"

Light: Diffused natural window light from upper left. Slight specular highlight on laptop aluminum edge. No harsh shadows.
Style: Apple product photography meets workspace flat-lay. Ultra-sharp Finder UI text, no motion blur.
Render the macOS UI with pixel-perfect accuracy — scrollbar, traffic light buttons (red/yellow/green), column headers (Name | Size | Date Modified) all visible.
```
