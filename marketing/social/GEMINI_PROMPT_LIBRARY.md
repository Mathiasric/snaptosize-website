# SnapToSize — Gemini Prompt Library

**Lest av:** Social Media Content Creator, Ideator
**Regel:** Bruk kun prompts fra dette biblioteket. Aldri improvisér Gemini-prompts uten ICP-forankring og SnapToSize-marketing.

---

## OBLIGATORISKE KRAV — ALLE GEMINI-BILDER

Disse 5 elementene MÅ være med i ALLE prompts. Mangler noen av dem = kast og regen.

| Krav | Sjekk |
|------|-------|
| **SnapToSize-URL synlig** | `app.snaptosize.com` i nettleser, badge, eller kort i bildet |
| **Pain→solution-arc** | Venstre/øverst = smertepunkt, høyre/under = løsning |
| **Etsy-selger-kontekst** | Konkrete detaljer: ZIP-mapper, ratio-navn (2:3, 4:5), filnavn, ordreantall |
| **Tekst-safe topp 30%** | Øverste 30% av bildet = rent, uten elementer — for overlay-tekst |
| **70 files, ikke 28** | Alltid "70 files" som verdiforslag — dette er det fulle tilbudet |

**Tommelfingerregelen:** Dekk teksten i bildet. Skjønner du fortsatt at det handler om SnapToSize og løser et Etsy-selger-problem? Nei = regen.

---

## TEKNISKE INNSTILLINGER

```python
client.models.generate_images(
    model="imagen-4.0-generate-001",
    prompt=PROMPT,
    config=types.GenerateImagesConfig(
        number_of_images=1,
        aspect_ratio="9:16",   # Pinterest
        # aspect_ratio="4:5",  # Instagram
    ),
)
# Resize til 1000x1500 (Pinterest) eller 1080x1350 (Instagram) med PIL
```

---

## KONSEPT 1 — DPI-angsten (300-dpi-makrokvalitet) ⭐⭐⭐⭐

**Hook:** "Print shop rejected it. Again."
**Pain:** Etsy-selger sender blurry/pixelert fil til trykkeriet → avvist → dårlig anmeldelse
**Solution:** SnapToSize leverer 300 DPI på alle 70 filer automatisk

```
Photorealistic split-panel comparison photo, vertical portrait format, soft studio lighting.
Two printed botanical wall art prints taped side-by-side on a clean white wall.

LEFT PANEL — labeled 'Before':
The print looks visibly pixelated and blurry — jagged edges on flower petals,
muddy washed-out colors, visible pixel blocks.
A small red sticky note reads: 'Print shop rejected — too low res'.
Dim, flat lighting on this side.

RIGHT PANEL — labeled 'After':
Exact same botanical artwork, razor-sharp and vibrant —
every petal edge crisp, ink texture visible, colors rich and true.
A small teal badge in the corner reads: '300 DPI ✓ — app.snaptosize.com'.
Bright, confident lighting on this side.

A thin teal vertical line divides the two panels in the center.
TOP 25% of image: plain clean white wall, completely empty — text-safe zone.
No people, no logos except the teal badge. Photorealistic DSLR photo aesthetic.
```

**QA-sjekk:**
- [ ] Pixelering er synlig på venstre side (ikke bare "slightly blurry")
- [ ] "app.snaptosize.com" er i teal badge på høyre side
- [ ] Topp 25% er helt rent
- [ ] "300 DPI ✓" tekst er lesbar

---

## KONSEPT 2 — En-upload-enkelheten (en-upload-enkelheten) ⭐⭐⭐

**Hook:** "Upload once. Sell everywhere."
**Pain:** Etsy-selger eksporterer manuelt til 10+ størrelser → timer med arbeid
**Solution:** Ett upload → 70 filer i 5 ZIP-pakker, klare for Etsy

```
Photorealistic minimalist flat-lay, vertical portrait format, soft even studio lighting.
Center of frame: open MacBook Air on a clean matte white desk.

Browser shows app.snaptosize.com — simple drag-and-drop interface.
File named 'botanical_print.png' in the upload zone.
Green progress bar reads '100% complete' with checkmark.
Screen text clearly readable: '70 files ready to download'.

Fanning outward from the laptop in a clean upward semi-circle:
5 crisp white ZIP folder cards with teal icons:
  Card 1: '2:3 Pack — 7 files'
  Card 2: '3:4 Pack — 5 files'
  Card 3: '4:5 Pack — 5 files'
  Card 4: 'ISO Pack — 5 files'
  Card 5: 'Extras — 6 files'
Below the fan, clean text label: '70 files · 300 DPI · Etsy-ready'

TOP 30%: plain white wall — completely empty, text-safe.
No people, no clutter. Apple product-shoot minimal aesthetic. Photorealistic.
```

**QA-sjekk:**
- [ ] `app.snaptosize.com` synlig i nettleser-URL
- [ ] "70 files ready" lesbar på skjermen
- [ ] ZIP-kortene er synlige og lesbare
- [ ] Laptop er prominent (min 40% av framen)

---

## KONSEPT 3 — Mappekaos-kontrasten (folder-chaos) ⭐⭐⭐⭐⭐

**Hook:** "47 files. Still missing 8x10."
**Pain:** Etsy-selger har et kaotisk Downloads-mappe med 50 ustrukturerte filer
**Solution:** SnapToSize leverer organiserte ZIP-mapper

```
Photorealistic split image, vertical portrait format, dramatic contrast lighting.

LEFT HALF (before): Cluttered MacBook desktop screenshot close-up.
Downloads folder showing files named:
'8x10_FINAL_v3_copy.jpg', '12x18_maybe.psd', 'print_attempt2.jpg', 'FINAL_REAL_final.jpg'
47 files visible, overwhelming, chaotic.
A red error badge: 'Missing 8×10 — buyer complained'.
Warm dim frustrated lighting.

RIGHT HALF (after): Clean, organized Finder window.
Three neat ZIP folders:
  '2:3 Pack — 7 files ✓'
  '4:5 Pack — 5 files ✓'
  'ISO Pack — 5 files ✓'
Small teal text: 'app.snaptosize.com · 70 files · organized'
Bright, clean, satisfying lighting.

A teal vertical divider line in the center.
TOP 25%: plain clean background, empty — text-safe zone.
Photorealistic screen photography, DSLR macro aesthetic.
```

---

## KONSEPT 4 — Livsstil: den tidrike selgeren (livsstil-den-tidrike-selgeren) ⭐⭐⭐⭐

**Hook:** "She uploads once. Gets paid 47 times."
**Pain:** Selger bruker timer på manuell resizing i stedet for å lage mer kunst
**Solution:** SnapToSize frigjør tid → mer salg

```
Photorealistic lifestyle photo, vertical portrait format, warm morning light.
A woman in her early 30s at a clean wooden desk in a bright home studio.
She is relaxed, leaning back slightly in her chair, smiling at her laptop.
The laptop screen shows app.snaptosize.com — a clean dashboard with:
  'Botanical Series: 70 files ready · 4 packs downloaded today'
On the wall behind her: 3 framed art prints in different sizes (5x7, 8x10, 11x14).
On the desk: a coffee mug, a sketchbook, and a small plant.
Natural morning light from a window, Scandinavian interior, white walls.

TOP 30%: clean white wall above her head — empty, text-safe.
Photorealistic, warm and aspirational lifestyle aesthetic.
No text overlays on image itself except what's on the laptop screen.
```

---

## KONSEPT 5 — Kjøperen som forsvant (missing-buyer) ⭐⭐⭐⭐⭐

**Hook:** "They wanted 8x10. You only had 5x7."
**Pain:** Etsy-listing mangler populære størrelser → mister salg
**Solution:** SnapToSize dekker alle 5 ratioes → ingen størrelser mangler

```
Photorealistic mockup of an Etsy product listing page on a laptop screen,
vertical portrait format, clean studio light.

The listing shows a beautiful botanical wall art print.
The 'Select size' dropdown is open, showing ONLY:
  '5×7' and '8×12' — visibly missing 8×10, 11×14, A4.
A chat bubble from 'Buyer': 'Do you have this in 8×10?'
No reply visible — the seller is offline.
A small sad-face or warning icon near the dropdown.

Second panel or overlay (bottom third):
Same listing, now showing full size menu:
  '5×7 · 8×10 · 11×14 · 12×18 · A4 · A3 · +22 more'
Small teal text: 'app.snaptosize.com — all sizes, one upload'

TOP 25%: clean light background — text-safe.
Photorealistic UI mockup, DSLR depth-of-field aesthetic.
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

**Nye konsepter klare:**
- `livsstil-den-tidrike-selgeren` — tilgjengelig igjen W20+
- `bestseller-butikken` — tilgjengelig igjen W20+
- `20mb-grensen-løst` — NY, ikke brukt
