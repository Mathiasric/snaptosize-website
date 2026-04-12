# Gallery Wall Size Guide — Which Sizes Actually Work
**Platform:** Pinterest
**Item ID:** W15-P01
**Content Type:** comparison
**Template:** SizeComparison
**Layout:** playwright-slide

## Visual Brief
Lag en SizeComparison-slide som viser de vanligste gallery wall-størrelsene fra SnapToSize, organisert i en visuell tabell. Dark gradient bakgrunn (#0B0B12), teal/purple glow-aksenter. Øverst: hook-tekst "Gallery Wall Sizes That Actually Sell". Midten: tabellvisning av størrelser per ratio-pack, med piksel-dimensjoner. Bunnen: SnapToSize CTA.

**Ratio-packs som dekker gallery walls:**
- **2:3 Pack** (vanligst for veggkunst): 4×6, 8×12, 12×18, 16×24, 20×30
- **3:4 Pack** (klassisk fotoramme): 6×8, 9×12, 12×16, 18×24
- **4:5 Pack** (tradisjonell kunst, 8×10-familien): 8×10, 12×15, 16×20, 24×30

**Props til SizeComparison-template:**
```tsx
<SizeComparison
  ratio="pinterest"
  title="Gallery Wall Sizes That Actually Sell"
  subtitle="All at 300 DPI — Ready for Etsy"
  categories={[
    {
      label: "2:3 — Most Popular",
      accent: "teal",
      sizes: ["4×6", "8×12", "12×18", "16×24", "20×30"]
    },
    {
      label: "3:4 — Classic Frame",
      accent: "purple",
      sizes: ["6×8", "9×12", "12×16", "18×24"]
    },
    {
      label: "4:5 — Traditional Art",
      accent: "blue",
      sizes: ["8×10", "12×15", "16×20", "24×30"]
    }
  ]}
  cta="Get all sizes → app.snaptosize.com"
/>
```

## Pinterest Metadata
**Title:** Gallery Wall Print Sizes: The Complete Etsy Seller Guide (2024)
**Description:** Planning a gallery wall listing on Etsy? These are the print sizes your buyers actually want. 2:3 ratio: 4×6, 8×12, 12×18, 16×24, 20×30 • 3:4 ratio: 6×8, 9×12, 12×16, 18×24 • 4:5 ratio: 8×10, 12×15, 16×20, 24×30. All at 300 DPI. SnapToSize delivers all of these in one upload — no manual resizing, no Photoshop. Start free at app.snaptosize.com
**Alt text:** Gallery wall print size chart showing 2:3, 3:4, and 4:5 ratio sizes for Etsy sellers, all at 300 DPI
**Keywords:** gallery wall sizes, gallery wall print sizes, etsy print sizes, wall art sizes, print size guide
**Board:** Etsy Seller Tips / Etsy Print Sizes
**Link:** https://snaptosize.com/etsy-gallery-wall-print-sizes/

## Lessons-sjekkliste
- [x] LESSON-001: Bruker ekte SnapToSize-størrelser (2:3, 3:4, 4:5 packs med eksakte mål) ✓
- [x] LESSON-087: Har tydelig SnapToSize-vinkel — "1 upload, alle gallery wall-størrelser" ✓
- [x] LESSON-003: Lenker til app.snaptosize.com og snaptosize.com/etsy-gallery-wall-print-sizes/ ✓
