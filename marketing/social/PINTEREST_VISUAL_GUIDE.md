# SnapToSize — Pinterest Visual Guide
**Lest av:** Social Media Content Creator, Ideator, Scripter
**Regel:** Alle Pinterest-pins skal bestå scroll-stopp-testen (se sjekkliste nederst) FØR de publiseres.

---

## Hva som faktisk stopper folk i Pinterest-feeden

Pinterest-brukere scroller raskt. En pin har 0,3 sekunder på å stoppe dem. Det som stopper:

1. **Sterk visuell kontrast** — mørk vs lys, rød vs grønn, kaos vs orden
2. **Stort tall eller bold statement** — "1 upload → 28 filer" i stor font
3. **Gjenkjennelig smertepunkt** — selgeren SER SEG SELV i bildet
4. **Ekte bevis** — app-skjermbilder, ZIP-mapper, faktiske filnavn > abstrakt design

**SnapToSize-spesifikke scroll-stoppere:**
- Filnavn-kaos ("`8x10_FINAL_v3_copy.jpg`") vs 5 ryddige ZIP-er
- Tom "Select size"-dropdown vs komplett størrelseliste
- Pixelert 72 DPI-print vs skarp 300 DPI-print side om side
- Selgeren som skaper kunst — ikke holder på med filer

---

## Hva en Gemini-prompt MÅ inneholde for SnapToSize

Svake prompts gir generiske stockbilder. Sterke prompts gir øyeblikk Etsy-selgere gjenkjenner.

### De 4 elementene som alltid må være med:

**1. SMERTEPUNKTET er konkret, ikke abstrakt**
- ❌ Svakt: "Etsy seller looking stressed at computer"
- ✅ Sterkt: "MacBook Downloads-mappe med 47 filer navngitt `8x10_v3_final_COPY.jpg`, `12x18_attempt2.psd` — visuelt kaos"

**2. PRODUKTDETALJENE er spesifikke, ikke vage**
- ❌ Svakt: "organized files visible"
- ✅ Sterkt: "5 ZIP-mapper: `2-3_Ratio_Pack.zip` (7 sizes), `3-4_Ratio_Pack.zip` (5 sizes), `4-5_Ratio_Pack.zip` (5 sizes), `ISO_Pack.zip` (5 sizes), `Extras.zip` (6 sizes)"

**3. EMOSJONELL ARC er synlig i bildet**
- Frustrasjon → lettelse → aspirasjon
- Kaos → orden → frihet til å skape
- Frykt (mister salg) → trygghet (alt er dekket)

**4. NEGATIV SPACE er planlagt, ikke tilfeldig**
- Topp 30–40% = tekst-overlay-sone (lys vegg, mørkt felt, ren bakgrunn)
- Bunn 15–20% = CTA-pill-sone
- Legg aldri viktige elementer i disse sonene

### Hva ICP-en vår faktisk kjenner seg igjen i:
- Etsy digital wall art / printables-selger
- 10–200 aktive listings
- Tjener $500+/mnd på Etsy
- Bruker 1–3 timer på manuell resizing PER kunstverk
- Eksporterer fra Illustrator, Photoshop, Procreate, Canva
- Strever med: gale filstørrelser, manglende størrelser, DPI-feil, 20MB Etsy-grense

---

## Slik kjører du Gemini-promptene (modell + kode)

**Modell:** `gemini-3-pro-image-preview` (Nano Banana Pro — høyeste kvalitet, tenker før den genererer)
**Fallback:** `gemini-3.1-flash-image-preview` (Nano Banana 2 — raskere, litt billigere, fortsatt excellent)
**Kostnad:** ~$0.13 per 2K-bilde med Pro | ~$0.10 med Flash

```python
# Template: kopier marketing/social/gen-w17-gemini-images.py og tilpass for ny batch
from google import genai
from google.genai import types

API_KEY = os.environ.get("GOOGLE_API_KEY")  # Set in .env.local
client = genai.Client(api_key=API_KEY)

response = client.models.generate_content(
    model="gemini-3-pro-image-preview",
    contents="[PROMPT HER — bruk mal under]",
    config=types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"],
        image_config=types.ImageConfig(
            aspect_ratio="2:3",    # Pinterest: "2:3" | Instagram: "4:5"
            image_size="2K",       # 2048×3072 for Pinterest
        ),
    ),
)
for part in response.parts:
    image = part.as_image()
    if image:
        image.save("marketing/social/content/pinterest/YYYY-MM-DD-[slug]/pin.png")
        break
```

---

## Gemini-prompt-mal for Pinterest (alltid bruk denne strukturen)

```
SCENE: [Veldig spesifikk Etsy-selger-situasjon — ikke generisk studio]
SMERTE SYNLIG: [Konkret: filnavn-kaos, tom dropdown, pixelert print, 20MB-feil]
LØSNING SYNLIG: [Spesifikt: "5 ZIP-mapper navngitt med ratio-pack", "300 DPI", "up to 70 files"]
KROPP/TILSTAND: [Beskriv selgerens tilstand ETTER at SnapToSize er ferdig — ikke midt i arbeidet.
  Eks: "lener seg tilbake med kaffe, avslappet ansikt", "smiler til siden, hendene løft fra tastaturet",
  "ser fornøyd på skjermen, ikke aktivt tydende". Aldri: stirrer konsentrert, tyder aktivt, er stresset.]
UI-NÆRBILDE: [Skjermen skal ta 50–70% av bildeflaten og være lesbar. Angi eksplisitt:
  "nærbilde av skjerm viser 5 ZIP-mapper med tydelige labels: '2x3_Pack', '4x5_Pack', 'ISO_Pack'".
  Aldri: liten skjerm i bakgrunnen, uleselige ikoner, generiske mappe-bilder.]
KONTRAST: [Beskriv to eksplisitte tilstander i bildet — problem OG løsning begge synlige.
  Eks: "øverst: kaotisk filstruktur med 30 løse filer. Nederst: 5 ryddige ZIP-mapper."
  Aldri: nøytral midtscene uten tydelig før/etter-signal.]
TEKST I BILDET: [Maks 8 ord, stor bold font, høy kontrast — hook i topp-sonen. ALLTID inkluder tekst.]
CTA: [Teal pill med "app.snaptosize.com" eller "Try free · app.snaptosize.com"]
STIL: Ren studio ELLER dramatisk mørk med teal/lilla glød — aldri stockfoto-mediocrity
FORMAT: 1000×1500px vertikal, topp 20% headline, bunn 15% CTA-sone
IKKE: Generiske rammer på vegger. "No text in image". Vage "organized files". Bare 3 størrelser når alle skal med.
  Aktiv arbeids-posisjon uten "ferdig"-signal. Liten skjerm med uleselig UI. Nøytral scene uten kontrast.
```

### Vanlige prompt-feil (lært fra produksjon)

Disse feilene gir bilder som *ser OK ut* men ikke kommuniserer produktet:

| Feil | Hva Gemini genererer | Riktig tilnærming |
|------|---------------------|-------------------|
| Scene uten tilstandsforskrift | Seller stirrer aktivt på skjerm — ser ut som hun jobber manuelt | Beskriv kropp: "lener seg tilbake, ferdig-ansikt" |
| "Mapper synlig på skjerm" | Liten skjerm, uleselige ikoner i bakgrunnen | "Nærbilde av skjerm tar 60% av bildet, labels lesbare" |
| Hook + nøytral scene | Sterk tekst, svakt bilde — tekst og visuell sier ikke det samme | Spesifiser KONTRAST-feltet eksplisitt med to tilstander |
| Generisk Etsy-seller-kontekst | Travel blogger med laptop | Nevn konkret: ordreantall, ZIP-mappenavn, ratio-labels |

**Tommelfingerregelen:** Hvis du dekker teksten i bildet og fremdeles ikke skjønner at det handler om SnapToSize — bildet er for generisk.

### Markedsføringsspråk-regler (KRITISK)

**Produktet har to nivåer — vær presis:**
- **Packs = 28 størrelser** (portrait/vertikal) → øyeblikkelig ZIP, 5 pakker
- **Quick Export = opp til 70 filer** (portrait + landscape + square orientations)
- De er ÉN ting: "1 upload" gir deg begge

**Hva du skriver i innhold:**
- ✅ Lead headline: "Up to 70 print-ready files" eller "30+ sizes" — viser full verdi
- ✅ Pack-kontekst: "28 sizes in 5 packs" er korrekt og riktig når du beskriver pakker
- ✅ Beste kombinert: "28 sizes in 5 packs + landscape & square = up to 70 files total"
- ✅ Når du lister størrelser i en prompt: vis ALLE per pakke, aldri bare 2-3 eksempler:
  - 2:3 Pack (7): 4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30
  - 3:4 Pack (5): 6×8, 9×12, 12×16, 15×20, 18×24
  - 4:5 Pack (5): 8×10, 12×15, 16×20, 20×25, 24×30
  - ISO Pack (5): A5, A4, A3, A2, A1
  - Extras (6): 5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24
  - + landscape & square i Quick Export = opp til 70 totalt

---

## De 5 beste Pinterest-konseptene for SnapToSize

### 1. Mappekaos-kontrasten ⭐⭐⭐⭐⭐
**Hook:** "Stop the chaos."
**Hvorfor det virker:** Selgeren KJENNER IGJEN filnavnene. Umiddelbar gjenkjennelse.
**CTA:** teal pill "Try free · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic split image, 1000x1500px vertical portrait.
LEFT HALF (before — stressed): macOS Finder window open showing Downloads folder.
Files visible: "8x10_FINAL_v3_copy.jpg", "12x18_maybe.psd", "print_attempt_FINAL2.jpg",
"botanical_8x10_USE_THIS.jpg", "resize_ARGH.png" — 47 files total, chaotic, all misnamed.
Warm dim anxious light, slight red vignette at edge.
RIGHT HALF (after — relief): Clean macOS Finder showing ONE folder "SnapToSize_Packs/" with exactly 5 ZIP files:
"2-3_Ratio_Pack.zip", "3-4_Ratio_Pack.zip", "4-5_Ratio_Pack.zip", "ISO_Pack.zip", "Extras.zip".
Each ZIP has a teal folder icon. Cool clean light, organized calm.
Bold white text top-center: "Stop the chaos." 72px
Teal text below: "1 upload → 5 organized packs"
Teal pill CTA bottom: "Try free · app.snaptosize.com"
Photorealistic. macOS UI must look genuine. No watermarks.
```

### 2. Kjøperen som forsvant ⭐⭐⭐⭐⭐
**Hook:** "Missing sizes = missing sales"
**Hvorfor det virker:** Direkte økonomisk tap — selgeren forstår umiddelbart hva det koster dem.
**CTA:** teal pill "28 sizes from 1 upload · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic mockup, 1000x1500px vertical portrait.
MacBook screen showing an Etsy product listing for a beautiful botanical wall art print.
The "Select size" dropdown is open — showing ONLY: "8×10", "11×14".
Visibly missing: 5×7, 12×18, A4, 16×20 — conspicuously absent.
Etsy chat overlay: Buyer message bubble "Do you have 12×18? Can't find it."
Seller reply box empty, cursor blinking — no answer sent.
Star rating visible: 3.8 stars (not the 5 stars it should be).
Bold white text top: "Missing sizes = missing sales" 68px
Red-orange text below: "Every size you don't offer is a buyer you lose."
Teal pill bottom: "28 sizes from 1 upload · SnapToSize"
Dark background, slight red left-side vignette. Photorealistic Etsy UI, no garbled text.
```

### 3. 60-sekunders bevis ⭐⭐⭐⭐
**Hook:** "60 seconds."
**Hvorfor det virker:** Konkret tidsbesparelse. Selgeren tror det ikke — så de klikker.
**CTA:** "28 Etsy-ready files · app.snaptosize.com"
**Gemini-prompt:**
```
Clean product showcase, 1000x1500px vertical portrait, dark #0B0B12 background.
TOP: app.snaptosize.com upload interface in browser — simple, clean.
File "botanical_artwork.png" upload progress bar at 100% complete.
MIDDLE: Large downward arrow in teal, label "60 seconds" in white.
BOTTOM: 5 ZIP file icons in a horizontal row, teal labels:
"2:3 Pack" (7 sizes), "3:4 Pack" (5 sizes), "4:5 Pack" (5 sizes), "ISO Pack" (5 sizes), "Extras" (6 sizes).
Below ZIPs in small teal: "28 print-ready files · 300 DPI · Under 20MB · Etsy-ready"
Bold white text very top: "60 seconds." 96px
Subtext in teal: "28 Etsy-ready files." 42px
Subtle purple/teal glow orbs in dark background. Premium SaaS aesthetic.
```

### 4. DPI-angsten ⭐⭐⭐⭐
**Hook:** "This is what 72 DPI looks like when printed."
**Hvorfor det virker:** Frykt for dårlige anmeldelser. Selgere vil ikke at kunder klager på pixelerte prints.
**CTA:** teal pill "300 DPI standard · SnapToSize"
**Gemini-prompt:**
```
Photorealistic close-up comparison, 1000x1500px vertical portrait.
Two printed photos held up against a neutral light background.
LEFT print: 8×10 visibly pixelated, blurry edges, muddy colors, visible squares.
Small red badge top-left: "72 DPI" white on red.
Etsy review bubble floating: "Blurry when printed 😞 1 star" in red.
RIGHT print: Same artwork, crisp fine lines, vibrant colors, gallery quality.
Small teal badge top-right: "300 DPI" white on teal.
Etsy review bubble floating: "Perfect quality! ⭐⭐⭐⭐⭐" in teal.
Hands holding both prints, fingers visible at top corners.
Bold white text top: "This is what 72 DPI looks like printed." 52px
Teal text below: "SnapToSize always exports 300 DPI. Every size. Automatically."
Teal pill CTA bottom: "Try free · app.snaptosize.com"
Natural studio lighting, photorealistic.
```

### 5. Størrelsesuniverset (visuell ratio-grid) ⭐⭐⭐
**Hook:** "Up to 70 print-ready files. From 1 upload."
**Hvorfor det virker:** Viser den reelle verdien — selgeren ser alle størrelsene og skjønner at de mangler mange.
**CTA:** teal pill "app.snaptosize.com · Free to start"
**Gemini-prompt:**
```
Clean bold infographic Pinterest pin, 1000x1500px vertical, dark #0B0B12 background, subtle teal glow.
TOP (18%): Bold white text "Up to 70 print-ready files." 64px centered.
Teal #2DD4BF below: "1 upload · portrait & landscape · 300 DPI" 28px.
MIDDLE (65%): Compact grid with 5 rows — each row shows ALL sizes in that pack:
Row 1 — teal badge "2:3 Pack (7)": tiles "4x6" "6x9" "8x12" "10x15" "12x18" "16x24" "20x30"
Row 2 — purple badge "3:4 Pack (5)": tiles "6x8" "9x12" "12x16" "15x20" "18x24"
Row 3 — blue badge "4:5 Pack (5)": tiles "8x10" "12x15" "16x20" "20x25" "24x30"
Row 4 — emerald badge "ISO Pack (5)": tiles "A5" "A4" "A3" "A2" "A1"
Row 5 — amber badge "Extras (6)": tiles "5x7" "8.5x11" "11x14" "11x17" "13x19" "20x24"
Thin separator below, then: "+ landscape & square sizes in Quick Export = up to 70 files total" 20px white.
BOTTOM (15%): Solid teal rounded pill "app.snaptosize.com · Free to start" white bold text.
All tiles: rounded, colored to match row badge, white text clearly readable. Pure graphic design, no photos.
```

---

## React/Playwright-pins — Primærverktøy for produktbevis

**Mål: 2 React-pins per dag.** Bytt artwork-mappe daglig, samme template.
**KRITISK: Max 1 NeonPackShowcase per batch per dag.**

### NeonPackShowcase (primær template)
**Fil:** `app-next/app/social-slides/_components/NeonPackShowcase.tsx`
**Format:** Mørk bakgrunn (#0B0B12), teal/lilla neon-glow, ekte kunst i 5 ratio-rammer

```tsx
<NeonPackShowcase artwork="bunny" name="Bunny Sketch" ratio="pinterest" />
<NeonPackShowcase artwork="misty_lake" name="Misty Lake" ratio="pinterest" />
```

**Screenshot-kommando:**
```bash
cd app-next && node screenshot-neon.js
```

**Tilgjengelige artworks:**
- `fox` — blyant-skisse, krem bg → ren og profesjonell
- `bunny` — vintage olje, blomster → varm og fargerik ⭐ høy engagement
- `deer` — vintage olje, rik palett → blikkfang
- `songbirds` — blyant-skisse, minimalist → elegant
- `misty_lake` — monokrom landskap → dramatisk ⭐ sterkest kontrast
- `salmon`, `neutral_abstract`, `minimalist_abstract`, `into_the_light_abstarct`, `landscape_abstract`

**Andre React-templates:**
- `W15DpiCheatSheet` — "300 DPI" stor header, 10 størrelser → cheat sheet-pins
- `BeforeAfter` — rød X → teal frames
- `StatsCard`, `NumberHighlight` — tall-fokusert

---

## QA-sjekkliste: Bestå minst 3 av 5 for å publisere

- [ ] Ville en Etsy-selger stoppe scrollingen for dette? (gut check)
- [ ] Er ett smertepunkt eller løsning synlig innen 2 sekunder?
- [ ] Er primærteksten lesbar på mobil i thumbnail-størrelse (150×225px)?
- [ ] Er SnapToSize-vinkelen tydelig uten å lese beskrivelsen?
- [ ] Er det visuell kontrast — mørk/lys, kaos/orden, rød/grønn?

Består den ikke → kast og prøv et annet konsept.

---

## Hva vi ALDRI gjør

- Generiske rom med rammer uten Etsy-selger-kontekst
- Stockfoto-smil uten pain/solution-arc — "pretty but pointless"
- Vage "organized files" uten faktiske ZIP-navn og ratio-pakkenavn
- Generiske Gemini-prompts uten SnapToSize-tall og filnavn

---

## Gemini-konseptbibliotek (ICP-forankret)

> **Alle konsepter er forankret i SnapToSize ICP: Etsy-selger, 10–200 listings, $500+/mnd, 1–3 timer manuell resizing per artwork.**

### 1. En-til-Mange-multiplikasjonen ⭐⭐⭐⭐⭐
**Hook:** "1 artwork. 28 print sizes. Done."
**Hvorfor det virker:** Konkret ROI — selgeren ser hva én upload faktisk gir dem.
**CTA:** teal pill "Try free · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic flat-lay, 1000x1500px vertical portrait, clean white marble surface.
CENTER TOP: ONE large framed botanical illustration (the original artwork).
Below it, spreading outward in a beautiful fan/grid: 28 smaller prints of the EXACT SAME artwork,
each in a different proportional size: tall narrow 2:3 frames (4×6, 8×12, 16×24),
wider 3:4 frames (6×8, 12×16), square-ish 4:5 frames (8×10, 16×20),
A4/A3 ISO paper sizes, and Extras like 5×7 and 11×14.
All 28 prints sharp with visible 300 DPI texture. Frames are minimal natural wood.
Studio overhead lighting, soft shadows. TOP 35% plain white marble — text-safe negative space.
No text in image. No platform logos. Professional product photography, 50mm lens.
```

### 2. Galleryvegg-ratioene ⭐⭐⭐⭐⭐
**Hook:** "Every frame. Every ratio. One upload."
**Hvorfor det virker:** Aspirasjonelt — selgeren vil at butikken skal se slik ut.
**CTA:** teal pill "app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic interior shot, 1000x1500px vertical portrait.
Minimal Scandinavian living room wall with exactly 5 framed prints of the SAME botanical artwork,
each in a DIFFERENT frame proportion:
- Tall 2:3 portrait frame (narrow) — leftmost
- Medium 3:4 frame — second from left
- Slightly wider 4:5 frame — center
- A4 portrait ISO proportion — second from right
- Small 5×7 Extras format — rightmost
All frames: natural blonde wood, white matte mounts. Warm ambient Scandinavian light.
Styled credenza below: single ceramic vase and folded linen. Nothing else.
TOP 30%: light plaster wall — clean, uncluttered negative space.
NO text in image. 85mm lens, natural depth of field. Cinematic quality.
```

### 3. De 5 premium-pakkene ⭐⭐⭐⭐
**Hook:** "5 packs. Every ratio. Etsy-ready."
**Hvorfor det virker:** Gjør det abstrakte (ratio-pakker) konkret og premium.
**CTA:** teal pill "app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic flat-lay, 1000x1500px vertical portrait.
5 premium matte black rigid boxes in a slight overlapping fan on polished concrete.
Each box has a precisely embossed metallic label:
Box 1 (front): "2:3 Ratio Pack — 7 sizes"
Box 2: "3:4 Ratio Pack — 5 sizes"
Box 3: "4:5 Ratio Pack — 5 sizes"
Box 4: "ISO Pack — 5 sizes (A1–A5)"
Box 5 (back): "Extras Pack — 6 sizes"
The front box has a thin teal silk ribbon tied in a small knot on top.
Studio overhead lighting with dramatic long shadow to the right.
TOP 35%: plain concrete surface — clean, uncluttered negative space.
No text except the embossed labels. Luxury product photography aesthetic.
```

### 4. Livsstil — den tidrike selgeren ⭐⭐⭐⭐
**Hook:** "More art. Less resizing."
**Hvorfor det virker:** Viser OUTCOME — selgeren skaper mer fordi de resizer mindre.
**CTA:** teal pill "Try free · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic lifestyle photo, 1000x1500px vertical portrait.
Female Etsy seller in bright airy home studio — at a large wooden desk.
She sketches new botanical artwork on iPad Pro with Apple Pencil.
Warm ceramic coffee mug beside her. Soft natural morning light from tall windows left.
Background wall: 4 framed prints in DIFFERENT sizes (same artwork, already resized and sold):
2:3 portrait, 4:5 near-square, A4, small 5×7. All framed professionally.
She has a joyful, relaxed expression — creative flow, NOT file management.
Phone beside her shows: "47 sales this week" Etsy notification.
TOP 30%: light white plaster wall + window — generous, uncluttered negative space.
NO text in image. NO file managers visible. 50mm lens, warm bokeh. Photorealistic editorial quality.
```

### 5. Det globale rekkevidden — ISO-størrelser ⭐⭐⭐⭐
**Hook:** "A4. A3. A2. Ship globally."
**Hvorfor det virker:** ISO-selgere vet de mister internasjonale kjøpere uten disse størrelsene.
**CTA:** teal pill "ISO sizes included · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic editorial flat-lay, 1000x1500px vertical portrait.
Linen background with a subtle world map print beneath.
On top: 3 framed botanical prints in A4, A3, and A2 portrait proportions of the SAME artwork,
overlapping elegantly, slightly fanned. Frame labels: "A4 (210×297mm)", "A3 (297×420mm)", "A2 (420×594mm)".
Small shipping tag on the A2 frame: "ISO Pack: A1 · A2 · A3 · A4 · A5 included".
Neutral earthy tones, editorial Kinfolk-magazine aesthetic.
TOP 35%: plain linen — clean negative space. NO body text in image.
85mm lens, soft studio light with natural shadows. Photorealistic.
```

### 6. 300 DPI makrokvalitet ⭐⭐⭐⭐
**Hook:** "Gallery quality. Every single size."
**Hvorfor det virker:** Adresserer DPI-angst med visuelt bevis.
**CTA:** teal pill "300 DPI standard · app.snaptosize.com"
**Gemini-prompt:**
```
Extreme macro photorealistic photo, 1000x1500px vertical portrait.
Close-up of a freshly printed botanical art print held against bright soft light.
Visible fine ink texture, crisp botanical line details, vibrant true colors — exceptional quality.
Print fills 65% of frame. Two fingers visible holding top corners.
Small elegant badge in print corner: "300 DPI ✓" in teal on white.
TOP 30%: soft blurred bright studio background — clean, text-safe.
Print has NO additional text. 100mm macro lens aesthetic, ultra-sharp. Photorealistic.
```

### 7. Bestseller-butikken ⭐⭐⭐⭐
**Hook:** "More sizes. More sales. More ★★★★★."
**Hvorfor det virker:** Sosial proof + konkret handling — mer inventory = bedre ranking.
**CTA:** teal pill "28 sizes from 1 upload · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic mockup, 1000x1500px vertical portrait.
MacBook showing an Etsy botanical wall art listing.
"Select size" dropdown open — showing a LONG, COMPLETE list:
4×6, 5×7, 8×10, 8×12, 11×14, 12×18, 16×20, 16×24 (2:3/3:4/4:5),
A2, A3, A4, A5 (ISO), 5×7, 8.5×11, 11×17, 13×19, 20×24 (Extras).
"BESTSELLER" orange badge on listing. Star rating: ★★★★★ (4.9, 312 reviews).
Warm lamp glow from left. Dark dramatic background.
TOP 30% dark — text-safe negative space. Photorealistic Etsy UI, all text readable.
```

### 8. En-upload-enkelheten ⭐⭐⭐
**Hook:** "Upload once. Sell everywhere."
**Hvorfor det virker:** Direkte verdiforslag — én handling, massiv output.
**CTA:** teal pill "app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic minimalist flat-lay, 1000x1500px vertical portrait.
Clean matte white desk. MacBook Air showing app.snaptosize.com in browser —
simple interface, file "botanical_artwork.png" in drag-drop zone,
progress bar "Processing... 100%" with green checkmark.
Fanning outward from laptop in semi-circle: 5 white cards with teal ZIP icons:
"2:3 Pack (7 files)", "3:4 Pack (5 files)", "4:5 Pack (5 files)", "ISO Pack (5 files)", "Extras (6 files)"
Small text below fan: "28 files · 300 DPI · Etsy-ready"
TOP 30%: plain white wall — uncluttered, text-safe.
No people, no clutter. Apple product-shoot minimal aesthetic. Photorealistic.
```

### 9. Quote-selgeren i produksjon ⭐⭐⭐⭐⭐ (NY)
**Hook:** "12 quotes. 336 files. 4 minutes."
**Hvorfor det virker:** Quote/typography er vår #1 sub-nisje. Disse selgerne uploader mange designs daglig.
**CTA:** teal pill "Try Pro · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic workspace flat-lay, 1000x1500px vertical portrait.
iPad Pro showing a grid of 12 typographic quote art designs (minimal, black text on cream/white):
"She believed she could", "Do what you love", "Stay curious", etc. — partially visible.
Beside iPad: MacBook open to app.snaptosize.com showing batch processing —
progress indicator "Processing 12 artworks... 8/12 complete".
In Finder beside it: folders being created in real-time —
"quote1_packs/", "quote2_packs/" etc., each with 5 ZIP subfolders.
A ceramic mug with pencils. Clean Scandinavian desk.
TOP 35%: light plaster wall — text-safe negative space. No additional text in image body.
50mm lens, natural light. Photorealistic, editorial quality.
```

### 10. 20MB-grensen løst ⭐⭐⭐⭐ (NY)
**Hook:** "Etsy's 20MB limit? Already handled."
**Hvorfor det virker:** Etsy-selgere med store kildefiler (30MB+ PNGs fra Illustrator) kjenner denne smerten.
**CTA:** teal pill "Auto-compressed · app.snaptosize.com"
**Gemini-prompt:**
```
Photorealistic split mockup, 1000x1500px vertical portrait.
TOP HALF: macOS error dialog — red icon, text:
"Upload failed: File size exceeds Etsy's 20MB limit (your file: 31.4 MB)".
Etsy upload interface visible behind it in red warning state.
BOTTOM HALF: Same Etsy upload interface, green success state —
"Upload successful ✓ · File size: 18.2 MB" — all 5 ratio packs uploaded cleanly.
Small teal badge on success state: "Auto-optimized by SnapToSize"
Bold white text on dark divider between halves: "Etsy's 20MB limit?"
Teal text below divider: "Already handled. Every time."
Teal pill CTA bottom: "Auto-compressed · app.snaptosize.com"
Dark #0B0B12 background, subtle purple glow. Photorealistic macOS UI, genuine look.
```

---

*Sist oppdatert: 2026-04-14 — Fullstendig oppgradering: ICP-forankrede prompts, gemini-3-pro-image-preview, 4-element prompt-mal, 2 nye konsepter (quote-selgeren #9 + 20MB-grensen #10)*
