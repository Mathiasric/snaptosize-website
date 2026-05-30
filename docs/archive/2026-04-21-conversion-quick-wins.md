# Conversion Quick Wins — Plan

**Opprettet:** 2026-04-20 (til arbeid fra 2026-04-21)
**Sist oppdatert:** 2026-04-21
**Status:** Pågår
**Eier:** Mathias
**Kontekst:** 7 betalende · $80 MRR · 71 SEO-sider · research fra Rumora/Olovka 2026-04-20

## Prioritert rekkefølge

### 1. Firecrawl Hobby-abonnement ($14/mo / NOK 150)

**Hvorfor:** 3 000 sider/mnd crawl-kapasitet for <1x Pro monthly. Én konkurrent-research eller SEO-gap-analyse betaler for seg selv.

**Use cases:**
- Crawle Etsy SERP-listings for long-tail keywords → driver programmatic SEO
- Månedlig sjekk av Printful, Gelato, Placeit, Canva resize-sider for feature-drift
- Dump av Reddit/POD-blog tutorials for ICP voice-of-customer
- Fôre NotebookLM med bredere research-korpus

**Status: ✅ FERDIG (2026-04-21)**

**Oppgaver:**
- [x] Abonner på Hobby-plan (NOK 150/mnd, billed yearly → save NOK 356)
- [x] Legg til API-nøkkel i `.env.local` som `FIRECRAWL_API_KEY`
- [x] Oppdater `.claude/docs/tools-reference.md` med konkrete kommando-eksempler
- [x] Oppdater memory `reference_firecrawl.md` (paid plan, ikke free)

---

### 2. CTA-mikrotekst: "No card · Google signup"

**Hvorfor:** Google OAuth er allerede enabled i Clerk. Ingen grunn til å bygge eller promotere det som egen feature (table stakes i 2026) — men én diskret linje under primær-CTA reduserer friksjons-antakelsen ("må jeg lage enda en konto?") før klikk.

**Mønster:**
```
Start Free
No credit card · One-click Google signup
```

**Status: ✅ FERDIG (2026-04-21)**

**Oppgaver (5 min totalt):**
- [x] Homepage hero — legg subtekst under primær-CTA
- [x] `/pricing` — subtekst under "Start Free" / "Go Pro"-knapper
- [ ] Topp 5 SEO-sider — samme subtekst under hero-CTA (gallery-wall, kids, bathroom, coastal, japandi) ← utsatt

**Suksesskriterium:** Ikke kritisk å måle — lav innsats, sannsynlig liten positiv effekt. Hvis PostHog viser ≥5% løft på hero-CTA klikk-rate, vurder rollout til alle SEO-sider.

**NB:** IKKE legg til egen FAQ, egen feature-seksjon, eller "Sign in with Google"-headline. Holdes som en mikrotekst.

---

### 3. Gjenbruk `FounderStorySection` på topp SEO-sider — UTSATT

**Hvorfor:** Homepage har allerede `FounderStorySection` (real Etsy-buyer reviews, Stars-komponent, "Built by Etsy seller with 100+ listings", 3 ekte listing-bilder). SEO-sidene (~75 stk) har ikke denne sosiale proofen — de stopper ofte på produkt-info + CTA. Extending eksisterende komponent til topp-trafikk SEO-sider er lav innsats × reell trust-løft.

**Oppgaver:**
- [ ] Importer `FounderStorySection` inn i topp 5 SEO-sider etter GSC-trafikk:
  - `/etsy-gallery-wall-print-sizes`
  - `/etsy-kids-wall-art-sizes`
  - `/etsy-bathroom-wall-art-sizes`
  - `/etsy-print-size-calculator`
  - `/how-to-resize-images-for-etsy`
- [ ] Plasser rett over `FinalCTASection` (eller siste CTA) — "trust right before the ask"
- [ ] Vurder om review-sitater er relevante nok for hver niche — hvis ikke, legg til 1 niche-spesifikk review per side (f.eks. kids-nursery kunde → kids-siden)
- [ ] QA mobile: horizontal-scroll på review-kort fungerer på 390×844
- [ ] Mål 2 uker: PostHog signup-rate + scroll-depth på disse sidene vs kontroll

**Utvidelse hvis det funker:** rull ut til alle /etsy-*-sizes pages (~35 stk) i samme batch.

**Suksesskriterium:** ≥5% løft på signup-rate eller bounce-rate forbedring. Null negativt signal → rull ut bredt.

---

---

### 5. Hero-copy: posisjonér mot kompleksitet, ikke andre resize-verktøy

**Hvorfor:** Firecrawl-research (2026-04-21) bekreftet at den reelle konkurrenten ikke er et annet SaaS — det er Photoshop (~$60/mnd, krever kunnskap) og Canva (manuell per størrelse, forvirrende DPI). Primær-ICP har aldri åpnet Photoshop og vil aldri gjøre det. Nåværende hero adresserer ikke dette eksplisitt.

**Forslag til hero-subheadline eller bullet:**
> "No Photoshop. No Canva. No guessing pixel dimensions. Upload once — get every print size, 300 DPI, ready for Etsy."

**Oppgaver:**
- [ ] Vurder å bytte ut eller supplere hero-subtext på homepage med kompleksitets-posisjonering
- [ ] Legg til "vs Photoshop" / "vs Canva" framing et sted synlig (FAQ, feature-liste, eller under hero)
- [ ] Sjekk at `/pricing`-siden kommuniserer "ett klikk, ingen kunnskap nødvendig" eksplisitt

**Suksesskriterium:** Ingen kvantitativ måling nødvendig første runde — dette er posisjonering, ikke A/B-test.

---

### 6. "Full canvas, ingen crop" — kommunisér som feature, ikke ulempe

**Hvorfor:** 2 av 3 kansellerte brukere nevnte "stretch" som grunn. Men 70 Etsy-salg, 10× 5-stjerner, null klager beviser at metoden fungerer for majoriteten. Problemet er ikke metoden — det er at den ikke er forklart *proaktivt* som et bevisst valg.

Crop kutter detaljer du designet med vilje. SnapToSize beholder hele kunstverket. For artister som designer edge-to-edge er dette en reell fordel.

**Oppgaver:**
- [ ] Legg til én setning på `/pricing` eller under "How it works": *"SnapToSize scales your full canvas — no cropping, no lost details."*
- [ ] Vurder å legge til kort forklaring i app-onboarding eller etter første eksport
- [ ] Ikke kall det "stretch" noe sted — kall det "full canvas scaling" eller "no-crop resize"

**Suksesskriterium:** Færre refund-requests med "stretch" som grunn over neste 60 dager.

---

### 7. Periodiske brukere — langsiktig vurdering

**Hvorfor:** Én av kansellerings-grunnene var "will need it periodically and come back." Dette er en reell use-case mismatch med monthly subscription. Kan adresseres med:
- **Pause-funksjon** (Stripe subscription pause) — lavest friksjon
- **Enkelt-pack-kjøp** (pay-per-use) — annen prismodell

**Status: IKKE en quick win** — krever produkt- og Stripe-endringer. Parker til $500+ MRR.

**Reaktiver hvis:** ≥3 til kansellerer med samme grunn innen 60 dager.

---

---

## PostHog-funn 2026-04-21 — Reelle konverteringsproblemer

> Analyse basert på 90 dagers PostHog-data + Firecrawl markedsresearch

### Nøkkeltall
| Metric | Verdi | Tolkning |
|--------|-------|----------|
| Exports (job_done) | 1 270 totalt / 633 sist uke | Produktet brukes aktivt |
| Rate limit hit | 34 (alle uke 12–18 apr) | Fri-tier brukes til grensen |
| Upgrade clicked | 32 totalt (~2–6/uke) | Interesse finnes |
| Checkout completed | 8 | Matcher betalende brukere |
| Upgrade→Checkout rate | ~25% | OK, men volumet er for lavt |
| Rage clicks | 16 totalt | Noe i appen er frustrerende |
| Signups tracked | **0** | `signed_up` event mangler — blind flekk |

---

### 8. Rate limit → Paywall-moment er ødelagt — HØYESTE PRIORITET

**Hva skjer:** 34 brukere traff gratis-grensen uke 12–18 april. Null oppgraderte. De forsvant bare.

**Problemet:** Rate limit-meldingen er sannsynligvis en plain error, ikke et salgsøyeblikk. En bruker som har nådd grensen har allerede bevist at de liker produktet — det er det beste tidspunktet å selge Pro.

**Hva det burde se ut som:**
> "Du har brukt alle 5 eksportene dine i dag. Du elsker åpenbart SnapToSize — oppgrader til Pro for ubegrenset eksport, 7 samtidige jobber, ingen vannmerke."
> [Oppgrader til Pro — $11.99/mnd] [Ikke nå]

**Oppgaver:**
- [ ] Finn hvor rate_limit_hit-meldingen vises i appen (app-repo)
- [ ] Erstatt error-melding med inline upgrade-prompt: verdi + pris + CTA
- [ ] Legg til PostHog-event `rate_limit_upgrade_shown` for å måle
- [ ] A/B: test modal vs. inline banner

**Suksesskriterium:** ≥10% av rate_limit_hit konverterer til upgrade_clicked innen 30 dager.

---

### 9. `signed_up` event mangler — vi flyr blinde

**Hva skjer:** PostHog har ingen `signed_up`-event. Vi vet ikke hvor mange som registrerer seg — bare hvem som betaler. Det betyr at vi ikke kan måle free-to-paid konverteringsraten, og ikke kan bygge retention-flows.

**Oppgaver:**
- [ ] Legg til `posthogCapture('signed_up')` i Clerk `onSignUp`-callback i app-repoet
- [ ] Legg til user properties: `{ plan: 'free', signup_date: ... }`
- [ ] Verifiser at event dukker opp i PostHog

**Suksesskriterium:** Ser `signed_up`-events i PostHog innen 24t etter deploy.

---

### 10. Rage clicks — noe frustrerer brukere

**Hva skjer:** 16 rage clicks totalt, aktive fra Mar 15 og fremover (6 i én uke). Rage click = bruker klikker gjentatte ganger på samme element, fordi ingenting skjer.

**Oppgaver:**
- [ ] Se PostHog Session Recordings for rage click-sessioner — identifiser URL og element
- [ ] Fiks det som blokkerer (sannsynlig: knapp som ser klikkbar ut men ikke er det, eller lasting uten feedback)

**Suksesskriterium:** 0 rage clicks på samme element etter fix.

---

### 11. Hero-copy: posisjonér mot kompleksitet — ikke andre resize-verktøy

**Hvorfor:** Firecrawl-research bekreftet: den reelle konkurrenten er Photoshop (~$60/mnd, krever kunnskap) og Canva (manuell per størrelse). Nåværende hero kommuniserer ikke dette.

**Primær-ICP er "har aldri åpnet Photoshop og vil aldri gjøre det."**

Forslag til hero-undertekst:
> "No Photoshop. No Canva. No guessing pixel dimensions. One upload — every print size, 300 DPI, ready for Etsy."

**Oppgaver:**
- [ ] Oppdater hero-subheadline på homepage
- [ ] Legg til "vs Photoshop / vs Canva" i feature-liste eller FAQ
- [ ] Sjekk at `/pricing` sier eksplisitt "ett klikk, ingen kunnskap nødvendig"

---

### 12. "Full canvas, ingen crop" — kommunisér som bevisst valg

**Hvorfor:** 2 kansellerte brukere nevnte "stretch" som grunn. Men 70 Etsy-salg, 10× 5-stjerner, null klager viser at majoriteten ikke reagerer. Problemet er at metoden ikke er forklart *proaktivt* som en fordel.

**Aldri kall det "stretch". Kall det "full canvas scaling" eller "no-crop resize".**

**Oppgaver:**
- [ ] Legg til én setning på `/pricing`: *"SnapToSize scales your full canvas — no cropping, no lost corner details."*
- [ ] Vurder kort forklaring i onboarding eller etter første eksport

**Suksesskriterium:** Færre refund-requests med "stretch" som grunn de neste 60 dagene.

---

### 13. Distribution er fortsatt flaskehalsen — ikke konvertering

**Kontekst (PostHog):** 1 728 pageviews totalt siden launch, ~300–460/uke nå. Produktet eksporterer 600+ filer/uke — det fungerer. Men trafikken er for lav til å konvertere til meningsfulle tall.

**Reell vei til $1M ARR:** $1M ARR = ~7 000 Pro-brukere @ $12/mnd. Vi er på 5. Det er ikke et konverteringsproblem — det er et distribusjonsproblem.

**Hva som faktisk driver vekst nå (prioritert):**
1. **Cold outreach til power-selgere** (100+ listings, quote/botanical/abstract) — direkte, rask
2. **Educator mention** — én YouTuber = 50–200 signups på én dag
3. **AppSumo** — 200–500 lifetime users, reviews, social proof
4. **SEO** — 6 mnd til å rangere, men compounder på sikt

**Ingen produktforbedringer eller design-tweaks endrer dette. Bare distribusjon.**

---

### 4. ~~Etsy-compliance FAQ~~ — SKIPPED

**Hvorfor skippet:** Ingen av 7 betalende har spurt. Ingen 5-stjerne review-kunder har nevnt problem. Å adressere en ikke-eksisterende bekymring *skaper* bekymring.

**Reaktiver hvis:** ≥3 support-emails spør om dette.

---

## Firecrawl-integrasjoner

Se egen plan: `docs/plans/firecrawl-integrations.md`
Priority 1 (content-researcher + striking-distance-enricher) implementeres 2026-04-21.

---

## Referanser

- Rumora + Olovka research: `docs/plans/2026-04-17-youtube-comments-outreach.md`
- Partner program (affiliate footer-lenke): `docs/PARTNER_PROGRAM.md`
- MRR/users baseline: `docs/MILESTONES.md` (2026-04-20: $80 MRR, 7 users)
