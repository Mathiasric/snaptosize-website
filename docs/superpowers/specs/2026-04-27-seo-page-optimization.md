# SEO Page Optimization — Design Spec
**Dato:** 2026-04-27  
**Status:** Godkjent av bruker  
**Scope:** 12 eksisterende SEO-sider med svak CTR eller svak rangering

---

## Mål

Forbedre 12 underytende SEO-sider uten å degradere sider som allerede indekserer bra. Tre dimensjoner per side:
1. **Informasjonell kvalitet** — innholdet svarer på søkeintensjon bedre enn konkurrentene
2. **SnapToSize-posisjonering** — produktet er synlig above-the-fold, CTAs er konkrete og troverdige
3. **Visuell kvalitet** — siden har minst ett visuelt element (React template-komponent eller Gemini lifestyle-bilde)

**Ikke-mål:** Ikke rør sider med >200 impressions som allerede er fikset (etsy-20mb-file-limit, etsy-bookmark-size, best-file-format, best-resolution).

---

## Sideoversikt og prioritering

### Pulje 1 — Konverteringssider (Dag 1, Track 1)
Høyest ROI — direkte SnapToSize-intendert søketrafikk.

| Side | Imp | Pos | CTR | Problem |
|------|-----|-----|-----|---------|
| `/snaptosize-vs-canva` | 35 | 7.4 | 0% | Svakt snippet, uklar posisjonering |
| `/snaptosize-vs-photoshop` | 11 | 4.8 | 0% | Pos 4.8 men nesten ingen søker — feil keyword-match |
| `/how-to-sell-printables-on-etsy-without-photoshop` | 23 | 7.4 | 0% | Perfekt SnapToSize-vinkel, 0 klikk |

**Tilnærming:** Full (C) — Firecrawl konkurrenter + innholdsdybde + visuelt element

### Pulje 2 — Størrelses-sider batch A (Dag 1/2, Track 2)
Rangerer side 1 men ingen klikker — SERP-snippet og visual svakhet.

| Side | Imp | Pos | CTR | Problem |
|------|-----|-----|-----|---------|
| `/etsy-watercolor-print-sizes` | 55 | 6.5 | 0% | Tittel/desc + mangler visuelt |
| `/etsy-nursery-wall-art-sizes` | 46 | 7.0 | 0% | Tittel/desc + mangler visuelt |
| `/etsy-quote-wall-art-sizes` | 19 | 5.8 | 0% | Pos 5.8 = side 1, 0 klikk |

**Tilnærming:** Moderat (B) — tittel/meta + visuelt element + SnapToSize-hook above-fold

### Pulje 3 — Størrelses-sider batch B (Dag 2, Track 2)

| Side | Imp | Pos | CTR | Problem |
|------|-----|-----|-----|---------|
| `/etsy-a5-print-size` | 25 | 5.9 | 0.8% | Marginal CTR |
| `/etsy-vintage-art-print-sizes` | 21 | 7.8 | 0% | 0 klikk |
| `/etsy-photography-print-sizes` | 20 | 8.6 | 0% | 0 klikk |

**Tilnærming:** Moderat (B)

### Pulje 4 — Svak rangering (Dag 2, Track 3)
Posisjon 12+ betyr innholds- eller relevans-problem — ikke bare snippet.

| Side | Imp | Pos | CTR | Problem |
|------|-----|-----|-----|---------|
| `/etsy-gallery-wall-print-sizes` | 42 | 17.0 | 0% | Dårlig innholdsdybde |
| `/etsy-square-print-sizes` | 45 | 12.2 | 0% | Mangler søkeintensjon-match |
| `/print-sizes-at-300-dpi` | 38 | 13.4 | 0% | For generisk tittel og innhold |

**Tilnærming:** Full (C) — Firecrawl + innholdsfiks + strukturell forbedring

---

## Per-side Workflow

Gjøres i denne rekkefølgen for **hver** side, ferdig og validert før neste starter:

### Steg 1 — Audit (les nåværende tilstand)
- Grep nøkkelseksjoner: title, meta description, H1, hero, CTA-plassering
- Sjekk om siden har React template-komponent eller Gemini-bilde fra før
- Playwright screenshot: desktop above-fold (1440×900) + mobil above-fold (390×844)

### Steg 2 — Konkurrentanalyse (kun Track 1 og 4)
- Firecrawl topp 2-3 sider som rangerer #1-3 for samme søkeord
- Identifiser: hva dekker de som vi ikke gjør? Hvilket innhold er dypere? Hvilken CTA-strategi?
- Mål: slå dem på informasjonsdybde + ha SnapToSize som løsningen

### Steg 3 — Identifiser gaps
Fire spørsmål per side:
1. **Tittel/meta:** Svarer tittelen direkte på søkeintensjonen? Er meta description action-orientert?
2. **Above-fold:** Er SnapToSize synlig i de første 200px? Starter siden med et problem brukeren kjenner seg i?
3. **Visuelt:** Har siden ett tydelig visuelt blikkfang? (React template eller Gemini-bilde)
4. **Innholdsdybde:** Er det seksjoner som er tynnere enn det konkurrentene dekker?

### Steg 4 — Gjør endringer (én om gangen)
Rekkefølge:
1. Tittel og meta description (lavest risiko)
2. Above-fold hero-seksjon / H1-kopi (SnapToSize-hook)
3. Legg til visuelt element hvis mangler
4. Forbedr svake innholdsseksjoner
5. Oppdater OG-image hvis hero er endret (Playwright)

**Regler som ikke brytes:**
- Aldri fjern eksisterende innhold — berik og bygg på
- CTA-format: `?source=seo_[slug]&kind=guide` på alle lenker til appen
- Mål og størrelser: bruk kun verdier fra `marketing/CONTENT_REFERENCE.md`
- Aldri påstå features som ikke finnes (ingen batch upload, ingen direkte Etsy-integrasjon)
- Maks én Gemini-bildegenereringssesjon per side (dyrt)

### Steg 5 — Validering
- Playwright desktop + mobil screenshot etter endring
- Sammenlign visuelt: before vs after
- Sjekk: er SnapToSize synlig uten å scrolle? Er siden penere enn før?
- `npx next build` verifisering (ingen TypeScript-feil)

### Steg 6 — Markér klar
- Siden er ferdig og klar for brukergjennomgang
- Commit med beskrivende melding
- Oppdater denne specen med status

---

## Visuelle alternativer per sidetype

### React templates som passer (fra `app/social-slides/_components/`):

| Template | Passer for |
|----------|-----------|
| `PainSolutionSlide` | vs-sider, without-photoshop, problem-solution sider |
| `WorkflowSteps` | how-to sider, packaging, prosess-sider |
| `BeforeAfter` | vs-sider, watercolor/photography (før/etter workflow) |
| `SizeComparison` | Størrelses-sider (a5, vintage, photography) |
| `RatioSplitShowcase` | Ratio-fokuserte sider, square-sider |
| `BrightPackShowcase` / `NeonPackShowcase` | Konverteringssider — viser produktet direkte |
| `StatsCard` | how-many-sizes, guide-sider med tall |
| `Checklist` | packaging, best-practices sider |

### Gemini bilde (kun lifestyle/aspirational):
- Bruk for niche-sider der stemning > informasjon: watercolor, nursery, quote, vintage
- Prompt-stil: ekte rom med rammet kunst på vegg, naturlig lys, ingen synlig tekst
- Lagres i `public/assets/` og refereres direkte i hero

---

## Suksesskriterier

Per side:
- [ ] Tittel svarer direkte på søkeintensjonen (ingen spørsmålsform i tittel)
- [ ] SnapToSize er synlig above-the-fold (første skjermvisning)
- [ ] Siden har minst ett visuelt element (React template eller Gemini-bilde)
- [ ] Meta description er action-orientert og unik for siden
- [ ] Ingen TypeScript-feil (`npx next build` passerer)
- [ ] Playwright-screenshot bekrefter visuell forbedring

Etter deploy (4-8 uker):
- CTR øker fra 0% → ≥1% for Track 2-sider
- Track 1 vs-sider begynner å sende brukere til appen (PostHog `source=seo_*`)
- Track 3 sider klatrer fra pos 12-17 mot pos 8-10

---

## Statussporing

| Side | Pulje | Status | Dato |
|------|-------|--------|------|
| `/snaptosize-vs-canva` | 1 | ✅ Ferdig | 2026-04-27 |
| `/snaptosize-vs-photoshop` | 1 | ✅ Ferdig | 2026-04-27 |
| `/how-to-sell-printables-on-etsy-without-photoshop` | 1 | ✅ Ferdig | 2026-04-27 |
| `/etsy-watercolor-print-sizes` | 2 | ✅ Ferdig | 2026-04-28 |
| `/etsy-nursery-wall-art-sizes` | 2 | ✅ Ferdig | 2026-04-28 |
| `/etsy-quote-wall-art-sizes` | 2 | ✅ Ferdig | 2026-04-28 |
| `/etsy-a5-print-size` | 3 | ⏳ Ikke startet | — |
| `/etsy-vintage-art-print-sizes` | 3 | ⏳ Ikke startet | — |
| `/etsy-photography-print-sizes` | 3 | ⏳ Ikke startet | — |
| `/etsy-gallery-wall-print-sizes` | 4 | ⏳ Ikke startet | — |
| `/etsy-square-print-sizes` | 4 | ⏳ Ikke startet | — |
| `/print-sizes-at-300-dpi` | 4 | ⏳ Ikke startet | — |
