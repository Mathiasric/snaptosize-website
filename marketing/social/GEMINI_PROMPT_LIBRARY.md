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

## PROMPT 2 — En-upload-enkelheten: UI mockup (en-upload-enkelheten)

**Hook:** "Upload once. 70 files ready."
**Scroll-stopp:** Konkret produkt-demonstrasjon — folk ser nøyaktig hva de får

```
Photorealistic product marketing image, vertical portrait format, 9:16.

LAYOUT: Clean white/light grey gradient background, minimalist Apple aesthetic.

TOP 20%: Dark navy bar (#0B0B12). Bold white text, large:
  "Upload once."
  Bold teal text (#2DD4BF), same size: "70 files ready."
Smaller grey text: "5 ratio packs · 300 DPI · Etsy-ready"

MIDDLE 65%: Centered MacBook Air mockup (60% of frame width).
  Browser open to app.snaptosize.com.
  Interface shows: file "botanical_print.png" uploaded, green progress bar 100%.
  Screen text clearly readable: "Your 70 files are ready to download".
  5 white ZIP folder cards fan upward from the laptop top edge:
    "2:3 Pack — 7 files", "3:4 Pack — 5 files", "4:5 Pack — 5 files",
    "ISO Pack — 5 files", "Extras — 6 files"
  Each card has a teal ZIP icon.

BOTTOM 15%: Small clean text: "28 sizes portrait · plus landscape & square · 70 files total"
  Rounded teal pill: "app.snaptosize.com · Free to start"

No people. Soft studio lighting. Photorealistic.
```

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

## PROMPT 6 — Statistikk-hero: Tall som stopper (stats-visual)

**Hook:** "1 file. 5 packs. 70 files."
**Scroll-stopp:** Enkle tall kommuniserer umiddelbar verdi

```
Clean graphic design image, vertical portrait format, 9:16. Dark background (#0B0B12).

TOP 15%: Small teal text (#2DD4BF), monospace: "app.snaptosize.com"
  Thin teal line underneath.

CENTER 55%: Bold typographic hierarchy, centered:
  Very large white text: "1 file"
  Teal arrow pointing down: "↓"
  Very large teal text: "70 files"
  Smaller grey text below: "5 ratio packs · 300 DPI · Etsy-ready · No Photoshop"

LOWER 20%: Three stat cards side by side (dark cards, teal accent):
  Card 1: "5" large teal, small grey: "ratio packs"
  Card 2: "70" large white, small grey: "total files"
  Card 3: "300" large teal, small grey: "DPI guaranteed"

BOTTOM 10%: Teal rounded pill, white text: "Try free · app.snaptosize.com"
  Subtle teal glow behind pill.

Clean, bold, graphic design aesthetic. No photos. No people.
Typography-driven, high contrast. Looks like a premium SaaS ad.
```

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

## GJENBRUKSREGLER

| Konsept | Cooldown | Sist brukt |
|---------|----------|------------|
| folder-chaos | 4 uker | W19 (22.04) |
| missing-buyer | 4 uker | W19 (22.04) |
| dpi-comparison (gammel) | 4 uker | W15 |
| en-til-mange | 4 uker | W16 |
| galleryvegg-ratioene | 4 uker | W20 (27.04) |
| livsstil-den-tidrike-selgeren | 4 uker | W16 |
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
| size-guide-infographic | 4 uker | — (aldri brukt) |

**Klare nå:** `dpi-comparison`, `en-til-mange` (W16 og eldre, cooldown utløpt) — NB: `livsstil-den-tidrike-selgeren` brukt W19 (24.04), klar igjen ~22.05 | `galleryvegg-ratioene` brukt W20 (27.04), klar igjen ~25.05 | `bestseller-butikken` brukt W20 (27.04), klar igjen ~25.05
