# SnapToSize Master Execution Plan — 2026-05-07

> **Hvordan bruke dette dokumentet:** Hver batch nedenfor er et selvstendig brief. Etter `/clear` eller `/compact` kan du peke på én batch (f.eks. "kjør Batch 1A") og få full kontekst tilbake umiddelbart. Hold scope strengt innenfor batch-grensen.

---

## RESUME PROTOCOL (les først ved /clear, ny dag, eller ny sesjon)

**For å gjenoppta arbeid:**

1. Si: **"Read C:\dev\snaptosize-website\docs\plans\master-execution-plan-2026-05-07.md"**
2. Pek på batch: **"Continue / start Batch [ID]"** (eks. `start 1A`, `resume 2A`)
3. Jeg leser status-loggen nederst, finner siste tilstand, og fortsetter

**Kort dagsstart-routine:**
```
"Status check"  →  jeg viser: hvilke batches done, in-progress, blocked, scoreboard-oppdatering
"Continue [ID]" →  jeg forsetter
"Status notes"  →  oppdater STATUS LOG nederst med ny info uten å starte arbeid
```

**Hvilke filer er sannhets-kilder (les ved tvil):**
- Denne filen — plan + status
- `docs/research/*-2026-05-07.md` — research-grunnlag (frosset 2026-05-07)
- `tasks/lessons.md` — feedback-akkumulering
- PostHog MCP — live data
- Aktuell repo (denne for marketing, snaptosize-app for app, snaptosize for runner)

---

## TOOLS & ACCESS — VERIFISERT 2026-05-07

| Tool | Status | Hvor |
|---|---|---|
| Firecrawl CLI | ✅ ~5,500 credits | `firecrawl` |
| PostHog MCP | ✅ Project 131652 | inline |
| Resend (drafts only) | ✅ | env (app-repo) |
| Pinterest API direct | ✅ Token i `.env.buffer` (`PINTEREST_ACCESS_TOKEN`) | App ID 1560131 |
| Buffer API | ✅ Token i `.env.buffer` | |
| Cloudflare R2 | ✅ Creds i `.env.buffer` | |
| GitHub read-only PAT | ✅ `Github_API_KEY` i `.env.local` (root) | snaptosize + snaptosize-app, public, read-only |
| Test Pro-bruker | ✅ `mathiasric2004@gmail.com` (kun 1D-bruk) | |
| Playwright MCP | ✅ | |
| Gemini API | ✅ Marketing visuals | |
| Remotion | ✅ Video pipeline | `marketing/remotion/` |
| context-mode | ✅ Process large outputs | |
| superpowers + marketing-skills + frontend-design + impeccable | ✅ | Skill tool |

**Erstattet / utgår:**
- ~~GrowthBook~~ → PostHog feature flags (innebygd, vi har allerede PostHog)
- ~~Pinterest OAuth~~ → direct token allerede satt opp
- ~~AppSumo~~ → NEI for 2026 (verdict)
- ~~ProductHunt~~ → skip (overhyped uten stort publikum)
- ~~Reddit organic~~ → skip (flagged som marketing)

**Defer til senere fase:**
- Stripe MCP (kun ved Batch 5A)
- GitHub MCP server (curl + PAT er tilstrekkelig nå; vurder hvis vi skal automatisere PR-er)
- Sister-site domener (Phase 3+)

---

## STATUS LOG (oppdater ved hver session-end)

```
[2026-05-07 14:00] Plan opprettet. Research-fase ferdig. Tools verifisert.
[2026-05-07 17:30] Plan strammet inn etter churn-data. Frame-Fit AI flyttet opp. Studio/Chrome/sister-sites fjernet fra plan. Klar til evaluering per batch.
[2026-05-08 21:00] A1 audit ferdig. Konklusjon: ikke UTM-problem — genuint lavt volum (86 imp/dag) + Pinterest mobil stripper UTMs. Pipeline optimalisert (keyword-bank, clean_title, smarte tidspunkter). Pinterest Standard Access søknad sendt — venter 1–3 dager på pins:write/boards:write for å oppdatere eksisterende pins.
[2026-05-09 11:20] Batch 1B ferdig. PostHog feature flag `homepage_hero_v2` (ID: 183654) live med 50/50 split. Variant B: seller-quote + "We do all of that in 8 seconds." + "Try Free — No Signup". CTA tracking med send_instantly. TS clean, visual QA OK.

ACTIVE BATCHES:
[~] Batch 1A — in progress — A2 ✅ done | A1 ✅ audit done + pipeline optimalisert | ⏳ BLOKKERT: update-existing-pins.py venter Pinterest Standard Access (pins:write scope)
[x] Batch 1B — ✅ DONE — PostHog flag `homepage_hero_v2` live, HeroSection A/B wired, cta_clicked tracking
[ ] Batch 1C — not started — 3 lead-magnet micro-tools
[ ] Batch 1D — not started — App-UX-audit (krever test-creds OK fra deg)
[ ] Batch 1E — not started (NY) — Email drip for free-users (Resend drafts)
[ ] Batch 4A — not started — Frame-Fit AI spec + cost-research (FLYTTET OPP, Phase 1.5)
[ ] Batch 2A — blocked på 1A done
[ ] Batch 2B — blocked på 2A
[ ] Batch 2C — blocked på 2A (10 sider, ikke 20, med streng QA)
[ ] Batch 2D — blocked på 2A (NY) — schema markup-audit
[ ] Batch 3A — blocked på 1B done + 2A done

KILLED FROM PLAN (data støttet ikke ROI):
✗ Batch 5A Studio tier — premature ved 10 Pro-subs
✗ Batch 5B Chrome extension — ingen kunde har bedt om det
✗ Batch 6A partner-program activation — for tidlig
✗ Batch 6B backlink Show HN — feil publikum
✗ Sister-site nettverk — ikke nå
✗ Pinterest skala-plan — kun audit, beslutt etter

DEFERRED (ikke killed, men trigger-gated):
- Studio tier — re-vurder ved 50+ Pro-subs
- Chrome extension — re-vurder hvis Frame-Fit ships + vekst stagnerer
- Partner-program — re-vurder ved 50+ Pro-subs
- Annual pricing 20% off — re-vurder Phase 2
```

**Hvordan oppdatere:** Etter en sesjon, si **"update status log"** + hva som ble gjort. Jeg oppdaterer både checkboxes og legger til timestamp-linje øverst i loggen.

---

---

## STRATEGIC HEADER (alltid relevant)

**Mål:** $100k ARR (9–12 mo) → $1M ARR (24–36 mo)
**Nå (2026-05-07):** $840 ARR · 10 paying users (9 monthly + 1 yearly) · 533 MAU · 4% activation · $6.99/mo Pro
**Største flaskehals:** Aktivering 4% (ikke paywall — Pro→pay konverterer 30%)
**Kanal #2 i data:** ChatGPT/GEO (21 brukere/30d, gratis)
**Kritiske blindspots:** Event-instrumentering mangler `ratio`/`pack`/`template`; Pinterest-attribusjon brutt (4K views → 2 sessions)
**Differensierings-wedge:** Multi-ratio pack ZIP — ingen konkurrent har det. Frame-Fit AI låser moaten.

**CHURN-INSIGHT (kritisk, 4 av historiske kanselleringer):**
- 50% (2/4): "auto-stretch disrupts original image" / "don't like auto scaling"
- 25% (1/4): "periodic use, will come back"
- 25% (1/4): "too expensive"

**Implikasjon:** Frame-Fit AI er ikke bare en "moat-add". Det er fix på #1 churn-driver. Stretch beholdes som default (alternativene er verre uten AI), men Frame-Fit AI prioriteres opp til Phase 1.5.

---

## EVALUERINGS-PROTOKOLL (per batch)

**Før hver batch eksekveres:**
1. Du leser batch-briefet
2. Vi diskuterer: gir dette ROI mot $100k ARR-målet?
3. Du sier **"go"**, **"skip"**, eller **"modify [hvordan]"**
4. Ingen batch starter uten eksplisitt "go"
5. Etter batch ferdig: oppdater STATUS LOG nederst

**Logikk-test for hver foreslått endring:** Adresserer det aktivering, churn-driver, eller bevist konkurrent-gap? Hvis ikke alle tre: spør "hvorfor ikke kutte?"

**Ikke følg konkurrent-mønstre blindt.** Hver "fordi konkurrenter gjør det"-begrunnelse må også ha en "fordi vår data sier det"-begrunnelse.

**Source intel (alle i `docs/research/`):**
- `competitor-intel-2026-05-07.md`
- `competitor-app-flows-2026-05-07.md`
- `etsy-seller-frustrations-2026-05-07.md`
- `creator-landscape-2026-05-07.md`
- `pseo-ceiling-2026-05-07.md`
- `appsumo-feasibility-2026-05-07.md` (verdict: NO 2026)
- `strategic-synthesis-2026-05-07.md`

**Konstanter for hver batch:**
- Marketing-repo: `C:\dev\snaptosize-website` (denne)
- App-repo: separat (egen Claude-sesjon for app-endringer)
- Stack: Next.js + Cloudflare Pages + Cloudflare Worker + Fly.io Runner + R2 + KV + Clerk + Stripe + PostHog
- SEO-pacing: maks 2 sider/dag (per CLAUDE.md memory)
- Kvalitets-gate: ingen page live uten manuell QA; ingen DM sendes uten user review; ingen kode merges uten tests

---

# BATCH 1A — Pinterest UTM Audit + Event Instrumentation Spec

**Status:** ✅ A2 done · ✅ A1 audit done · ⏳ A1 pin-update blokkert (Pinterest Standard Access)
**Wall-clock:** 1–1.5 timer
**Mål:** Fjerne to blindspots som gjør at all videre data er unreliable.

### Kontekst (les hver gang du picker opp denne batch'en)
PostHog viser 4K Pinterest-visninger/mnd → 2 trackede sessions. Enten er UTMs ikke på pin-lenkene, eller pin-lenkene konverterer ikke til klikk. Samtidig fanger vi ikke `ratio`, `pack`, `template` på `enqueue_success` — så vi vet ikke hvilke pakker konverterer. Begge må fikses før vi kan ta produktbeslutninger basert på data.

### Pre-conditions
- [ ] Tilgang til Buffer (du) eller Pinterest-pin-listen som ble postet siste 60 dager
- [ ] PostHog MCP fungerer (verified i denne session)
- [ ] App-repo tilgjengelig (eller separat sesjon klar)

### Tasks

**A1 — Pinterest API audit ✅ DONE (2026-05-08)**

FUNN:
- Konto-totalt (60 dager): 5 145 imp · 6 outbound clicks · 175 pin-clicks · 11 saves
- PostHog: 5 sessions fra pinterest.com referrer · 0 med utm_source=pinterest
- Gap = 1 klikk → UTM er IKKE problemet. Pinterest mobil stripper query-params (kjent begrensning)
- Primærproblem: lavt volum (86 imp/dag) + lav CTR (0.12%)
- 87/100 nylige pins har korrekte UTMs i destinasjons-URL (pipeline fungerer)

TILTAK GJORT:
- `schedule-batch.py` oppdatert: `clean_title()` (fikser "undefined"-bug), `enrich_description()` (keyword-bank per board), `next_pinterest_slot()` (poster 09:00/20:00 CET)
- `update-existing-pins.py` opprettet — batch-PATCHer alle 100 pins + board-beskrivelser
- Board-beskrivelser (4 stk) klar til manuell liming på pinterest.com
- Pinterest Standard Access søknad sendt 2026-05-08 (video + formål lastet opp)

GJENSTÅR:
- ⏳ Vente på Pinterest Standard Access (1–3 virkedager) → kjøre `update-existing-pins.py`
- 📋 Manuelt lime inn board-beskrivelser på pinterest.com (5 min — kan gjøres nå)
- 📈 Øke posthyppighet til 3–5 pins/uke konsekvent (primær vekstdriver)

**A2 — Event-instrumentering-spec (jeg leverer, du applyer i app-repo)**
- Skrive eksakt `posthogCapture` payload for `enqueue_success`-eventet: `{ pack_template, ratio, is_first_export, plan, source }`
- Spec'e `pack_export_completed`, `quick_export_completed`, `paywall_view`, `paywall_dismiss`, `upgrade_click`, `signup_completed` med samme detalj
- Levere: `docs/specs/posthog-event-spec-v1.md` med exact code blocks ready to paste
- Ingen kode-endring i denne sesjonen — du applyer i app-sesjon

### Acceptance criteria
- [x] Audit-doc lister hver pin og dens UTM-status ✅
- [x] Konklusjon: ikke UTM-gap, men lavt volum + Pinterest stripping ✅
- [x] Pipeline optimalisert med keywords, clean title, smarte tidspunkter ✅
- [x] Event-spec har 6+ events med komplette property-skjemaer ✅ (A2)
- [x] Board-beskrivelser oppdatert (manuelt på pinterest.com) ✅ 2026-05-08
- [ ] Eksisterende pins PATCHet med keywords (venter Standard Access)

### Post-conditions / handoff
- Pinterest-fix klar for deg å applye (~20 min Buffer-arbeid)
- Event-spec klar for deg å pase inn i app-repo (~30 min)
- → Når begge er live: vi har tillit til data fra Day 7 og fremover
- → Lås opp **Batch 1B** (kan starte parallelt)

---

# BATCH 1B — Homepage Hero Rewrite + GrowthBook A/B Test

**Status:** Not started
**Wall-clock:** 1–2 timer (kan starte parallelt med 1A)
**Mål:** Hev aktivering 4% → 6% via voice-of-customer-rewritten hero.

### Kontekst
Sterkeste verbatim-quote i frustrasjons-research:
> *"Right now I manually resize every artwork into 2:3, 4:5, square, A-sizes, double-check DPI, rename files, zip folders, etc."*
Dette er ordrett en Etsy-selger som beskriver hva SnapToSize løser. Det skal være homepage-hero. GrowthBook er allerede koblet til prosjektet — bruker det for A/B.

### Pre-conditions
- [ ] PostHog feature-flags-tilgang verifisert (vi har project ID 131652, PAT i app-repo `.env`)
- [ ] Current homepage hero-copy lest (se `app-next/app/(marketing)/page.tsx`)

### Tasks

**A3 — Hero-variant skrevet og deployd**
- Variant B: bruk seller-quoten + "We do all of that in 8 seconds" + CTA "Try free, no signup"
- Bevar nåværende design-system, kun copy + sub-headline endres
- Edit `app-next/app/(marketing)/page.tsx`

**A4 — PostHog A/B wiring (erstatter GrowthBook)**
- Opprette PostHog feature flag `homepage_hero_v2` med 50/50 multivariate split (control / variant_b)
- Wire i Next.js: client-side `useFeatureFlagVariantKey('homepage_hero_v2')` → render variant
- Track conversion event: `cta_clicked` med property `hero_variant`
- Mål: lift på "Start Free" → signup-rate
- Setup-script: `app-next/lib/posthog-flags.ts` (hvis ikke eksisterer) som hjelper

### Acceptance criteria
- [ ] Variant B er live for 50% av besøk
- [ ] PostHog viser begge varianter rapporteres
- [ ] Ingen TS/build-errors (`npx next build` clean)
- [ ] Mobile + desktop QA via Playwright screenshot

### Post-conditions / handoff
- A/B kjører
- Etter 14 dager med >200 besøk per variant: bestemmer vinner
- → Vinneren blir default; taperen slettes
- → Kan kjøre **Batch 1C** uavhengig

---

# BATCH 1C — Lead-Magnet Micro-Tools (3 stk)

**Status:** Not started
**Wall-clock:** 4–6 timer
**Mål:** Funnel-kanal som addresserer top-3 frustrasjoner og rangerer programmatisk.

### Kontekst
Alura/eRank har bevist mønsteret: ungaterte "Etsy Fee Calculator", "SEO checker"-verktøy som rangerer på long-tail og funneler til betalt produkt. Vi har null. Topp-3 frustrasjoner alle har image-ratio/DPI/cropping som rot — så lead-magnet-verktøy som diagnostiserer disse, leverer verdi gratis, og naturlig pitcher SnapToSize for "fix this".

### Pre-conditions
- [ ] Batch 1A done (instrumentering så vi kan tracke verktøy → signup)
- [ ] frontend-design + impeccable skills tilgjengelige

### Tasks

**A5 — Etsy Listing Crop Checker** (`/tools/etsy-listing-crop-checker`)
- Drop image → vis hvordan det blir cropped på Etsy listing-tile (ulike aspect ratios)
- Flag advarsler: "Your subject is in the crop zone" / "Resolution too low for 2000px requirement"
- CTA på "Generate proper sizes for all Etsy ratios → SnapToSize"
- Bygg som static client-side tool (browser-side image processing)

**A6 — Print DPI Calculator** (`/tools/print-dpi-calculator`)
- Inputs: pikselbredde × pikselhøyde, ønsket print-størrelse i tommer
- Output: faktisk DPI + "Print quality verdict" (Excellent ≥300, Good 200–299, Risky <200)
- CTA: "Need to upscale before printing? Frame-Fit AI →" (placeholder lenke til /pricing inntil Frame-Fit ships)

**A7 — Aspect Ratio Detector** (`/tools/aspect-ratio-detector`)
- Drop image → identifiser nærmeste standard-ratio (2:3, 4:5, 16:9, 1:1, 5:7, A-sizes)
- Vis forskjellen mellom faktisk og standard
- CTA: "Convert to all standard print ratios → Pack mode"

### Acceptance criteria
- [ ] Alle 3 verktøy rendrer og fungerer mobile + desktop
- [ ] Hver har minimum 1 page-rank-target keyword (`"etsy listing photo size checker"`, `"print dpi calculator"`, `"aspect ratio detector"`)
- [ ] Schema.org `WebApplication` markup tilstede
- [ ] PostHog `tool_used` event fyrer
- [ ] CTA → /pricing eller relevant landing
- [ ] Internt linket fra footer + relevant blogg

### Post-conditions / handoff
- 3 nye lead-magnet-sider live
- Etter 30 dager: måle organic CTR + tool→signup-rate; hvis <2%, polish CTAs
- → Frigjør **Batch 1D** og **Batch 2A**

---

# BATCH 1D — App UX Specs (for app-sesjon)

**Status:** Not started
**Wall-clock:** 2–3 timer
**Mål:** Levere komplette PR-ready specs til app-repo for de tre konkurrent-bekreftede UX-vinnerne.

### Kontekst
Konkurrent-app-flyt-recon viste 3 mønstre alle 5 topp-konkurrenter har som vi mangler. Disse er low-effort, high-impact. Spec'es her, applyes i app-sesjon.

### Pre-conditions
- [ ] App-screenshots av nåværende /app/packs og /app/quick-export (gi meg test-credentials eller manuelle screenshots)

### Tasks

**A8 — Pre-upload free-tier badge spec**
- Visual: "Free: 5 quick exports + 2 packs today, watermarked" badge over drop-zone
- Stripe/Clerk plan-detection: switch til "Pro: unlimited" hvis Pro
- Mobile breakpoint
- Spec inkluderer eksakt copy, plassering, farger fra design-system

**A9 — Per-image preview card spec**
- Etter upload, før eksport: vis card med "Original 3000×2000 → Output 4500×3000 (4:5 portrait, 300 DPI ✓)"
- For pack-mode: stack 12 mini-preview-cards (én per ratio)
- Loading-state: skjelett mens beregnes

**A10 — Marketplace-presets-first spec**
- Konvertere main config-step fra "Width × Height piksel-input" til "Velg markedsplass" (Etsy / Pinterest / Amazon-KDP / Custom)
- Etsy = default, viser pack-ratios direkte
- Custom kollapser til width×height som fallback

**A11 — App audit-rapport (basert på screenshots)**
- 30+ konkrete forbedrings-punkter visuelt/strukturelt/funksjonelt
- Prioritert quick-wins vs heavy-lifts
- Mapping mot konkurrent-flyt-funn

### Acceptance criteria
- [ ] 3 specs har "Acceptance criteria"-seksjon hver
- [ ] Code-eksempler er TypeScript + Next.js mønstre matchende app-repo (anta samme stack som marketing)
- [ ] Audit-rapport linker hver anbefaling til en data-kilde (PostHog, frustrasjons-doc, konkurrent-flow)

### Post-conditions / handoff
- 3 specs paste-able i app-sesjon (eller PR via GitHub MCP hvis vi setter det opp)
- Audit-rapport skapt for prioritering av app-fase 1
- → Når app-sesjon har deployd dem: re-audit aktivering på Day 30

---

# BATCH 1E — Email Drip for Free-Users (Resend, drafts only)

**Status:** Not started
**Wall-clock:** 2–3 timer
**Mål:** Pull tilbake 96% av aktivering-drop-off via 4-email lifecycle. Ingen auto-send — drafts du reviewer.

### Kontekst
PostHog viser 96% drop-off før første eksport, D7 retention 2.8%. Vi har Resend Audience aktiv. Free-users som signer opp uten å eksportere er sannsynligvis usikre (signup-friksjon, vet ikke hva de får). 4-email-sekvens kan pulle dem tilbake.

### Pre-conditions
- [ ] Email-fangst på signup er live (verifisere via app-repo)
- [ ] Batch 1A done (event `signup_completed` tracked)

### Tasks

**A34 — 4-email-sekvens skriving**
- Email 1 (Day 0, immediate): "Welcome — your first pack is on us. Try this sample artwork."
- Email 2 (Day 2): "Did you get stuck? Here's the 30-sec demo video."
- Email 3 (Day 5): "Real seller story: how Sarah used SnapToSize for 12 listings"
- Email 4 (Day 14): "Last note from us — would you tell us why you didn't try?"
- Tone: voice-of-customer (frustrasjons-doc-quotes), ikke salesy
- Hver email har én CTA: "Open SnapToSize"

**A35 — Resend setup som drafts (ikke auto-send)**
- Lag templates i Resend
- Sett opp som "manual trigger" mode først (du sender per kohort)
- Etter 30 dager med data: vurder å skifte til auto-send hvis kvaliteten holder

**A36 — Tracking i PostHog**
- Property på user: `email_drip_email_1_opened`, `_clicked` etc.
- Funnel: email-open → CTA-click → return-to-app → first-export

### Acceptance criteria
- [ ] 4 email-templates skrevet, voice-tested
- [ ] Resend-konfig satt opp som manual-send
- [ ] Du har sett alle 4 før noen sendes
- [ ] PostHog tracking-events er instrumentert

### Post-conditions / handoff
- Du sender til 1 kohort (siste 30 dager free-users som ikke aktiverte)
- Mål: 5%+ open → click → return-to-app
- → Hvis virker: skifte til auto-send
- → Hvis ikke: ikke skaler, iterer på copy

---

# BATCH 2A — Programmatic SEO Generator + Template A (15 sider)

**Status:** Blocked (krever 1A done for å tracke siders konvertering)
**Wall-clock:** 6–10 timer
**Mål:** Bygg generator + ship første 15 `/resize-image-for-{platform}`-sider. Største SEO-gap som er unclaimed av oss men brukt av Photoroom/Canva/Instasize.

### Kontekst
pSEO-takhøyde-research viste vi har ~70 sider, alt i 2 templates (saturerte). Null `/resize-image-for-{platform}`-sider tross at det er bevist mønster hos konkurrenter med tusenvis av sider hver. 200 høy-konfidens-sider er addresserbart innen 12 mnd. Generator (5–7 dager opprinnelig estimat, realistisk 1–2 dager med stram scope) gir 0.5 dag/template etter første.

### Pre-conditions
- [ ] Batch 1A done
- [ ] Eksisterende seo-writer-agent fungerer
- [ ] CONTENT_REFERENCE.md oppdatert (CLAUDE.md auto-sync)

### Tasks

**A12 — Generator-arkitektur**
- `app-next/scripts/pseo/generate.ts` — tar template-config + data-rader, output MDX
- Templates som JSON-konfig: `templates/resize-for-platform.json`, `templates/aspect-ratio-guide.json`, etc.
- Auto: schema.org markup, OG tags, internal linking, breadcrumbs

**A13 — Template A: Cross-platform resize (15 sider)**
- Plattformer: Etsy, Pinterest, Instagram, Amazon-KDP, Redbubble, Society6, Gumroad, Creative Market, Shopify, eBay, TikTok, Facebook, Twitter/X, LinkedIn, Discord
- URL: `/resize-image-for-{platform}`
- Innhold per side: H1 + intro, dimensjons-tabell, hvorfor matters, hvordan SnapToSize løser, CTA
- 1 unik FAQ per plattform

**A14 — QA + deploy**
- Manuell pass: hver side leses for "AI-slop"-feel, fikses
- `npx next build` clean
- Deploy via Cloudflare Pages
- Submit til Google Search Console

**A15 — Update auto-sync filer**
- `marketing/seo-pipeline/seo-pipeline-state.json`
- `docs/CONTENT_PLAYBOOK.md`
- `docs/MILESTONES.md`
- `marketing/seo-optimizer/page-registry.json`

### Acceptance criteria
- [ ] Generator kan kjøres med `npm run pseo:generate` med template-arg
- [ ] 15 sider live, hver med unik H1 + minst 600 ord originalt innhold
- [ ] Intern lenking til 3+ andre sider per side (deep-link)
- [ ] Schema.org `WebPage` + `BreadcrumbList` validert
- [ ] Build error-fri
- [ ] GSC submit + sitemap update

### Post-conditions / handoff
- 15 nye sider indexeres i 7–14 dager
- Per CLAUDE.md memory: 2 sider/dag-pacing — generere alle 15 samme dag er OK siden de er programmatic, men submit til GSC i bolker av 2/dag
- → Frigjør **Batch 2B** (Template B) og **Batch 2C** (Template C+D)

---

# BATCH 2B — Programmatic SEO Template B (Aspect-Ratio Guides, 12 sider)

**Status:** Blocked på 2A
**Wall-clock:** 4–5 timer
**Mål:** Dekke aspect-ratio-keyword-clusteret som er #1 frustrasjon hos sellers.

### Kontekst (kort — full kontekst i header + 2A)
12 ratios: 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, 16:9, A-paper. URL: `/aspect-ratio/{ratio}-guide`.

### Tasks
Samme generator som 2A. Per-side: hva ratio'en er, hvor brukes, common pitfalls, conversion-tips, calculator-widget.

### Acceptance criteria
Samme som 2A men 12 sider.

---

# BATCH 2C — Programmatic SEO Templates C + D (~35 sider)

**Status:** Blocked på 2A
**Wall-clock:** 6–8 timer
**Mål:** Dekke frame-DPI + niche-print-sizes long-tail.

### Tasks
- Template C: 15 frame-DPI-sider (`/print-resolution/{size}-frame` for 24x36, 18x24, 11x14, 8x10, 5x7, 4x6, A1, A2, A3, A4, 16x20, 20x30, 12x16, 10x15, 8x12)
- Template D: 20 nye niche-sider (mid-century-modern, japandi, line-art, kids-art, kitchen-art, office-art, boho, abstract, watercolor, photography, typography, motivational, religious, sports, music, anime, halloween, valentine, christmas, baby-shower)

### Acceptance criteria
Samme mønster.

### Post-conditions / handoff
- Total ~62 nye sider live → ~132 sider total (~3x current)
- → Frigjør **Batch 3A** (creator outreach) — fundamental SEO på plass

---

# BATCH 2D — Schema Markup Audit (alle SEO-sider)

**Status:** Blocked på 2A (eller kan kjøres independent)
**Wall-clock:** 2–3 timer
**Mål:** Hver SEO-side har komplett, validert schema.org-markup. Direkte SERP-CTR-lift uten ny content.

### Kontekst
Konkurrenter (Photoroom, Canva, Pixelied) har rich snippets på resize-sider. Vi sannsynligvis mangler det på flere. `marketing-skills:schema-markup` skill håndterer dette systematisk.

### Tasks

**A37 — Audit av eksisterende sider**
- Liste alle 70+ sider med deres nåværende schema-typer
- Identifiser mangler: `WebApplication`, `FAQPage`, `BreadcrumbList`, `HowTo`, `Article`

**A38 — Implementere mangler**
- Generere schema-blocks for hver side-type
- Edit MDX-filer med JSON-LD i `<head>`
- Validere via Schema.org Validator + Google Rich Results Test

**A39 — Update generator**
- Programmatic SEO-generator (fra 2A) skal auto-emit korrekt schema per template

### Acceptance criteria
- [ ] 100% av sider har minimum `WebPage` + `BreadcrumbList`
- [ ] Tool-sider har `WebApplication`
- [ ] FAQ-sider har `FAQPage`
- [ ] Google Rich Results Test passerer for stikkprøve på 10 sider
- [ ] Generator emitterer schema automatisk

### Post-conditions / handoff
- Vente 14 dager, sjekke GSC for "Search appearance: rich results" data

---

# BATCH 3A — Creator Pilot Top-10 Outreach Pack

**Status:** Blocked på 2A done (slik at creators ser modent SEO-fundament)
**Wall-clock:** 4–6 timer
**Mål:** 10 personaliserte cold-DMs klare for deg å sende til topp-10 mid-tier Etsy YouTubers.

### Kontekst
Creator-research identifiserte 10 mid-tier (10–50k subs) Etsy-creators uten tool-konflikt. Sweet spot: gifted Pro + 25% recurring affiliate. Konkurranse-vakuum: ingen creator anbefaler i dag et dedikert Etsy-resize-verktøy. Pilot-budsjett ~$1,500 hvis flat-fee trengs (du beslutter).

### Pre-conditions
- [ ] Du har bekreftet $1,500 pilot-budsjett (eller affiliate-only-modell)
- [ ] Batch 1B ferdig (homepage er presentabel når creators sjekker)

### Tasks

**A16 — Creator-due-diligence**
- For hver av topp-10: scrape siste 5 videoer, identifiser tone, signature-content, eksisterende sponsorer
- Verifiser subscriber-count via Social Blade hvis tilgjengelig

**A17 — 10 personaliserte cold-DM-er**
- Hver DM nevner spesifikt video/innhold creatoren har laget
- Tilbud: gifted Pro lifetime + 25% recurring affiliate på alle henvisninger + signature affiliate-link
- 100–150 ord per DM
- Signaler at vi er "additiv ikke erstatning" til Canva/Procreate-flyten deres

**A18 — Affiliate landing page** (`/creators` eller `/affiliate`)
- Why-partner, hvordan det funker, payout-eksempler, testimonial-placeholder
- Tracking-link-generator (UTMPersistence allerede live per memory)

**A19 — Resend follow-up-sekvens (drafts only)**
- Email 1 (Day 0): "Did my DM land?"
- Email 2 (Day 7): "Quick question about your audience"
- Email 3 (Day 14): "Last note from me"
- Lagres som drafts i Resend, du sender hver enkelt etter review

### Acceptance criteria
- [ ] 10 DMs klare i `docs/outreach/creators/2026-05/{creator-name}.md`
- [ ] /creators-page live
- [ ] Drafts i Resend (ikke auto-send)
- [ ] Affiliate-link-system testet (UTM tracking i PostHog)

### Post-conditions / handoff
- Du sender DMs gjennom YouTube/IG/Email avhengig av kanal
- Mål: 4–5 reply rate; 2–3 closes innen 21 dager
- → Hver close trigger 25 Pro-signups innen 60 dager (mål)

---

# BATCH 4A — Frame-Fit AI: Spec + Marketing Page (PHASE 1.5 — PRIORITERT OPP)

**Status:** Blocked på Batch 1A done (data-tracking på plass)
**Wall-clock:** 3–4 timer
**Mål:** Komplett spec klar for app-repo-implementering + marketing-launch-page.

### Kontekst — VIKTIG OPPDATERING
Frame-Fit AI er ikke bare "moat-add". Det er **fix på #1 churn-driver** (50% av historiske kanselleringer cite "auto-stretch disrupts original image"). I tillegg er det #1 frustrasjon i markedet ("4:5 → 2:3 uten å crop hodet av"). Replicate vs fal.ai cost-comparison må gjøres først. Pricing-rules: free 1/dag watermarked, Pro unlimited.

### Pre-conditions
- [ ] Batch 1 ferdig (data-tracking på plass)
- [ ] Compute-budsjett-cap fra deg

### Tasks

**A20 — Replicate vs fal.ai cost-research**
- Test begge med samme 100-image-batch via API
- Latency, kost-per-call, kvalitets-comparison
- Rapport: anbefaling med tall

**A21 — Komplett feature-spec for app-repo**
- API-design (POST /api/frame-fit), input/output schema
- UI-flow: upload → ratio-velg → outpaint-preview → accept/reject → ZIP-export
- Pricing-enforcement (Worker plan-check)
- Watermark-logikk (free)
- Rate-limit (free 1/dag)
- Error-states + fallback
- Cost-cap per request

**A22 — `/frame-fit-ai` marketing-page**
- Hero med før/etter slider
- Voice-of-customer-quote (frustrasjons-doc)
- Demo-video (Remotion)
- "Coming Pro: Q[X] 2026" eller live-toggle hvis allerede i app
- CTA: "Try free 1/day" eller "Get unlimited on Pro"

### Acceptance criteria
- [ ] Cost-research-rapport viser konkrete tall (cost per call, latency p50/p95)
- [ ] Spec-doc har komplett API + UI + pricing-rules
- [ ] /frame-fit-ai er live og deler nøkkel-keyword
- [ ] Demo-video < 15 sek

### Post-conditions / handoff
- App-sesjon kan implementere fra spec
- Når Frame-Fit live: lås opp **Batch 5A** (Studio tier)

---

# ~~BATCH 5A — Studio Tier~~ KILLED (re-vurder ved 50+ Pro-subs)
Premature ved 10 Pro-subs. Ankreffekt trenger volum. Defer.

# ~~BATCH 5B — Chrome Extension~~ KILLED (ingen kunde har bedt om det)
Industri-mønster, men ingen av våre 10 kunder etterspurte det. Re-vurder kun hvis Frame-Fit ships + vekst stagnerer.

# ~~BATCH 6A — Partner Program Activation~~ KILLED (for tidlig)
Trenger fungerende produkt + bevist creator-pilot-signal først. Re-vurder ved 50+ Pro-subs.

---

## DECISION GATES (Triggers for kill / scale / pivot)

| Day | Check | If true → | If false → |
|---|---|---|---|
| 14 | A/B variant B vinner | Default-promote variant B | Iterer på copy, kjør runde 2 |
| 21 | 0/10 creators replied | Re-evaluere pitch + utvide til 30 creators | Continue, drafte follow-ups |
| 30 | Aktivering >6% | Skalere trafikk via SEO + ads | Pause Phase 2, dypere session-replay-audit |
| 30 | Pinterest UTMs viser 0 | Move Pinterest til maintenance | Continue Pinterest-content |
| 60 | Pro-subs <50 | Pause Studio-tier-prep | Trigger Batch 5A |
| 60 | Frame-Fit cost >$0.10/call | Studio-only feature | Free-tier OK |
| 90 | <120 Pro subs | Re-strategize, ikke skalér ads enda | Trigger Batch 6 + paid ads |

---

## SCOREBOARD

| Metric | Now | Day 30 | Day 60 | Day 90 |
|---|---|---|---|---|
| Activation | 4% | 6% | 8% | 10% |
| MAU | 533 | 800 | 2,000 | 5,000 |
| Pro subs | 10 | 20 | 50 | 120 |
| MRR | $70 | $140 | $350 | $850 |
| pSEO pages | 70 | 100 | 130 | 200 |
| Active channels | 2 | 3 | 5 | 6 |

---

## TASK SPLIT — Hvem gjør hva

### Jeg eksekverer (autonomt med review-gates)
A1, A3, A4, A5, A6, A7, A12, A13, A14, A15, A16, A17, A18 (drafts), A19 (drafts), A20, A21, A22, A23, A25, A27–A30, A32

### Du eksekverer manuelt
- A2 spec → app-repo paste/PR (eller separat sesjon)
- A8–A11 specs → app-repo paste/PR (eller separat sesjon)
- M1: FB business account
- M4: Pinterest UTM-fix etter A1 levert (Buffer-arbeid)
- M5: Resend draft-review confirm
- M6: Send creator-DMs (etter A17 leverer drafts)
- M7: Reply til creators
- M8: Velg Replicate vs fal.ai etter A20-rapport
- M9: Apply A21 til app-repo
- M11: Stripe Studio-tier setup
- M12: Chrome extension test + publish
- A24 Stripe-arbeid

### Tools jeg bruker
- Firecrawl CLI (research)
- PostHog MCP (analytics)
- Playwright MCP (visual QA)
- frontend-design + impeccable + marketing-skills (content/UI)
- Edit/Write/Bash/Grep (kode)
- Eventuelt GitHub MCP (hvis du gir PAT, scope: snaptosize-app, fine-grained, branch-protection on main)

### Tools du trenger for å pase inn
- Buffer (Pinterest UTMs)
- Stripe dashboard (Studio tier when triggered)
- Resend dashboard (review drafts før send)
- App-repo (separat sesjon eller manuell paste)

---

## NEXT ACTION

Vent på godkjenning til å starte **Batch 1A**. Den er pre-condition for nesten alt annet. Wall-clock 1–1.5t.

Si **"start 1A"** for å begynne.

Hvis du vil at jeg skal starte 1A og 1B parallelt (de er uavhengige), si **"start 1A+1B"**.

For app-audit (Batch 1D), gi meg én av:
- Test-credentials til app.snaptosize.com (jeg Playwright-screenshotter)
- 8–12 manuelle screenshots delt i denne sesjonen
- Beskjed om at vi gjør det i separat sesjon med app-repo
