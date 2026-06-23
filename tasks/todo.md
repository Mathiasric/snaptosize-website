# A4 page conversion rebuild (model page → then roll)

Target: app-next/app/(marketing)/etsy-a4-print-size/page.tsx (2,218 impr/mo, #1 page, uncontested SERP)
Diagnosis: under-designed SEO essay — SAYS everything, SHOWS nothing. Visual-proof 1/5.

## Build
- [ ] AseriesLadder.tsx — bespoke A5→A4→A3 ladder (same artwork, one ISO source = honest, px+mm labels, A4 teal-accented as hero size). Homepage visual language (rounded cards, ring, shadow-2xl, sheen). Responsive incl. mobile.
- [ ] Hero: replace empty `hidden md:block` ISO wireframe (line ~195) with the ladder, VISIBLE on mobile (fixes text-wall P0). Minimal restructure.
- [ ] Mid-page breadth proof: RatioPackFan (misty assets incl. misty-iso) after manual-workflow section.

## Perfect Fit (P1) — honest geometry framing
- [ ] FAQ "Can I just resize my 8×10 to A4?" — add distortion-free crop path + /distortion-free-crop link. BYTE-SYNC JSON-LD (~109) with visible FAQAccordion (~1069).
- [ ] Step 4: Perfect Fit mention where re-compose is discussed.

## CTA (P1)
- [ ] 6 generic teal CTAs → differentiate by context, cut redundancy.

## Verify
- [ ] tsc clean + Playwright DESKTOP 1440 + MOBILE 390 (prove mobile no longer text-wall) → FF push → update memory + prep roll.
