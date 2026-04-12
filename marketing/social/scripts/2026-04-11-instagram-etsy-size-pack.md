# The Etsy Size Pack Cheat Sheet — 8-Slide Instagram Carousel
**Platform:** Instagram
**Item ID:** W15-I01
**Content Type:** educational
**Template:** StatsCard (cover) + Checklist (slides 2-7) + NumberHighlight (slide 8)
**Layout:** playwright-slide

## Visual Brief
8-slide carousel. Alle slides bruker dark gradient bakgrunn (#0B0B12), purple/teal glow-aksenter, konsistent typografi. Cover-slide er en StatsCard med hook. Slide 2-7 er en Checklist per ratio-pack. Slide 8 er en NumberHighlight med CTA.

---

### Slide 1 — Cover (StatsCard)
**Props:**
```tsx
<StatsCard
  ratio="instagram"
  eyebrow="Etsy Seller Tips"
  headline="Etsy buyers ask for different sizes."
  subheadline="Here's which ones you actually need."
  stat="28 sizes"
  statLabel="covered across 5 ratio packs"
  cta="Swipe to see each pack →"
/>
```

---

### Slide 2 — 2:3 Ratio Pack (Checklist)
**Props:**
```tsx
<Checklist
  ratio="instagram"
  eyebrow="Pack 1 of 5"
  title="2:3 Ratio Pack"
  subtitle="Most common for wall art prints"
  items={[
    { label: "4×6\"",   value: "1200×1800 px" },
    { label: "6×9\"",   value: "1800×2700 px" },
    { label: "8×12\"",  value: "2400×3600 px" },
    { label: "10×15\"", value: "3000×4500 px" },
    { label: "12×18\"", value: "3600×5400 px" },
    { label: "16×24\"", value: "4800×7200 px" },
    { label: "20×30\"", value: "6000×9000 px" }
  ]}
  note="7 sizes · All 300 DPI · Etsy-ready"
/>
```

---

### Slide 3 — 3:4 Ratio Pack (Checklist)
**Props:**
```tsx
<Checklist
  ratio="instagram"
  eyebrow="Pack 2 of 5"
  title="3:4 Ratio Pack"
  subtitle="Classic photo frame sizes"
  items={[
    { label: "6×8\"",   value: "1800×2400 px" },
    { label: "9×12\"",  value: "2700×3600 px" },
    { label: "12×16\"", value: "3600×4800 px" },
    { label: "15×20\"", value: "4500×6000 px" },
    { label: "18×24\"", value: "5400×7200 px" }
  ]}
  note="5 sizes · All 300 DPI · Etsy-ready"
/>
```

---

### Slide 4 — 4:5 Ratio Pack (Checklist)
**Props:**
```tsx
<Checklist
  ratio="instagram"
  eyebrow="Pack 3 of 5"
  title="4:5 Ratio Pack"
  subtitle="Traditional art — home of the 8×10"
  items={[
    { label: "8×10\"",  value: "2400×3000 px" },
    { label: "12×15\"", value: "3600×4500 px" },
    { label: "16×20\"", value: "4800×6000 px" },
    { label: "20×25\"", value: "6000×7500 px" },
    { label: "24×30\"", value: "7200×9000 px" }
  ]}
  note="5 sizes · All 300 DPI · Etsy-ready"
/>
```

---

### Slide 5 — ISO A-Series Pack (Checklist)
**Props:**
```tsx
<Checklist
  ratio="instagram"
  eyebrow="Pack 4 of 5"
  title="ISO A-Series Pack"
  subtitle="International standard — EU buyers expect these"
  items={[
    { label: "A5",  value: "1748×2480 px" },
    { label: "A4",  value: "2480×3508 px" },
    { label: "A3",  value: "3508×4961 px" },
    { label: "A2",  value: "4961×7016 px" },
    { label: "A1",  value: "7016×9933 px" }
  ]}
  note="5 sizes · All 300 DPI · Essential for EU/UK shops"
/>
```

---

### Slide 6 — Extra Sizes (Checklist)
**Props:**
```tsx
<Checklist
  ratio="instagram"
  eyebrow="Pack 5 of 5"
  title="Extra Sizes"
  subtitle="High-demand single exports"
  items={[
    { label: "5×7\"",   value: "1500×2100 px",  note: "Cards & small frames" },
    { label: "8.5×11\"", value: "2550×3300 px", note: "US Letter, home printing" },
    { label: "11×14\"", value: "3300×4200 px",  note: "Photo mat standard" },
    { label: "11×17\"", value: "3300×5100 px",  note: "Large format home" },
    { label: "13×19\"", value: "3900×5700 px",  note: "Fine art poster" },
    { label: "20×24\"", value: "6000×7200 px",  note: "Large format print" }
  ]}
  note="6 sizes · All 300 DPI"
/>
```

---

### Slide 7 — The Problem Slide (StatsCard)
**Props:**
```tsx
<StatsCard
  ratio="instagram"
  eyebrow="The real problem"
  headline="Most Etsy sellers only offer 2-3 sizes."
  subheadline="Buyers who don't find their size → go to a competitor."
  stat="28 sizes"
  statLabel="= more buyers served = more sales"
  cta="There's a faster way. Swipe →"
/>
```

---

### Slide 8 — CTA Slide (NumberHighlight)
**Props:**
```tsx
<NumberHighlight
  ratio="instagram"
  number="1"
  unit="upload"
  description="All 28 sizes. All 5 packs. All 300 DPI. ZIP ready for Etsy."
  subtext="SnapToSize — Free to try"
  cta="app.snaptosize.com/app/quick-export"
  ctaLabel="Try free →"
/>
```

---

## Instagram Metadata
**caption:** Etsy buyers ask for different sizes. Here's which ones you actually need. 👇

Swipe through all 5 size packs — 28 sizes total, all at 300 DPI, all Etsy-ready:

📐 2:3 Pack (wall art): 4×6, 8×12, 12×18, 16×24, 20×30
🖼 3:4 Pack (photo frames): 6×8, 9×12, 12×16, 18×24
🎨 4:5 Pack (8×10 family): 8×10, 12×15, 16×20, 24×30
🌍 ISO Pack (EU/UK buyers): A5, A4, A3, A2, A1
➕ Extras: 5×7, 8.5×11, 11×14, 13×19

Don't resize these manually. Upload once to SnapToSize → get every pack in one ZIP, ready to list.

Free to try → link in bio
**Alt text:** 8-slide Instagram carousel showing all 5 SnapToSize ratio packs with exact pixel dimensions for Etsy digital print sellers
**Hashtags:** #etsyseller #printablewallart #etsydigitaldownload #digitalartist #wallartprints
**Board:** n/a (Instagram)
**Link:** https://app.snaptosize.com/app/quick-export

## Lessons-sjekkliste
- [x] LESSON-001: Bruker ekte SnapToSize-størrelser — alle 5 packs med eksakte pikselmål ✓
- [x] LESSON-002: Maks 5 hashtags ✓
- [x] LESSON-087: Klar SnapToSize-vinkel på hvert slide — pain (buyers forlater), solution (1 upload = 28 sizes) ✓
- [x] LESSON-003: Lenker til app.snaptosize.com/app/quick-export (action-orientert post) ✓
