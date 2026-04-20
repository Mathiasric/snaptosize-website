# SnapToSize — Gemini Prompt Library

**Lest av:** Social Media Content Creator Agent, Ideator Agent
**Autoritet:** Dette er primærkilden for alle Gemini-prompts. PINTEREST_VISUAL_GUIDE.md gjelder fortsatt for konseptvalg og QA. Denne filen gir de ferdige promptene.

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

**Hook:** "47 files. Still missing 8×10."
**Scroll-stopp:** Universell smerte for alle Etsy-selgere

```
Photorealistic marketing split image, vertical portrait format, 9:16.

TOP 18%: Dark navy bar. Bold text:
  White: "47 files."
  Teal (#2DD4BF): "Still missing 8×10."
  Smaller grey: "Sound familiar?"

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
  Three organized folders with teal ZIP icons:
    "2:3 Pack — 7 files ✓"
    "4:5 Pack — 5 files ✓"
    "ISO Pack — 5 files ✓"
  Clean, satisfying, bright lighting.
  Small text: "Generated by app.snaptosize.com"

BOTTOM 10%: Teal pill: "app.snaptosize.com · Organize everything · Free"

Teal vertical divider line between halves.
Photorealistic screen mockup aesthetic, DSLR.
```

---

## PROMPT 4 — Livsstil: Tidrike selgeren (livsstil-den-tidrike-selgeren)

**Hook:** "She uploads once. Gets paid 47 times."
**Scroll-stopp:** Aspirational + konkret resultat

```
Photorealistic lifestyle marketing photo, vertical portrait format, 9:16.

TOP 22%: Soft dark navy gradient overlay on photo background. Bold text:
  White large: "She uploads once."
  Teal large (#2DD4BF): "Gets paid 47 times."
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

## GJENBRUKSREGLER

| Konsept | Cooldown | Sist brukt |
|---------|----------|------------|
| folder-chaos | 4 uker | W13 |
| missing-buyer | 4 uker | W13 |
| dpi-comparison (gammel) | 4 uker | W15 |
| en-til-mange | 4 uker | W16 |
| galleryvegg-ratioene | 4 uker | W16 |
| livsstil-den-tidrike-selgeren | 4 uker | W16 |
| bestseller-butikken | 4 uker | W16 |
| de-5-premium-pakkene | 4 uker | W17 |
| quote-selgeren | 4 uker | W17 |
| det-globale-rekkevidden-iso | 4 uker | W17 |
| 300-dpi-makrokvalitet | 4 uker | W18b |
| en-upload-enkelheten | 4 uker | W18b |

**Klare nå:** `folder-chaos`, `missing-buyer` (W20+) · `stats-visual` (NY, aldri brukt)
