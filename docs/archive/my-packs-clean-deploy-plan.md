# My Packs — Clean Deploy Plan

**Branch strategy:** Forkast `feature/my-packs` (30+ commits adapter-rot). Lag ny `feature/my-packs-clean` fra `main`. Cherry-pick KUN feature-kode.

## 1. Pre-flight (bruker bekrefter)

- [ ] CF Pages dashboard: bekreft at production `snaptosize-app` har Framework preset = **Next.js**, Build command = tom/default, Output = `.vercel/output/static`. Ikke endre.
- [ ] CF Pages env vars (Production scope): bekreft `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` er satt. Bekreft `STRIPE_SECRET_KEY` er satt i Production, men IKKE i Preview (forklarer hvorfor lazy Stripe-fixen trengs).
- [ ] **Blocker:** Magic Wand — `162ac81` la den til, `8245d6c` fjernet fra nav, men `magic-wand/page.tsx` er fortsatt i diff. Beholde eller droppe?

## 2. Lag ren branch

```bash
cd C:/dev/snaptosize-app
git fetch origin
git checkout main && git pull
git checkout -b feature/my-packs-clean
```

## 3. Cherry-pick feature-filer (kopier inn fra feature/my-packs)

**Behold:**
- `app/app/my-packs/page.tsx` (bruk `.full`-versjonen, ikke `.bak`-stub)
- `app/app/my-packs/_components/PackBuilderModal.tsx`
- `app/app/my-packs/_components/SavedPackCard.tsx`
- `app/app/my-packs/_components/types.ts`
- `app/api/custom-packs/route.ts`
- `app/api/custom-packs/[id]/route.ts`
- `app/app/layout.tsx` — KUN nav-tab diffen (FolderHeart + Pro-badge)
- Commit `7b3f527` (lazy Stripe init) — cherry-pick som egen commit hvis Stripe-rutene ble endret

**Eventuelt (avhengig av Magic Wand-svar):**
- `app/app/magic-wand/page.tsx` + nav-entry i layout

## 4. Eksplisitt DROPP (ikke kopier)

- `@opennextjs/cloudflare` fra package.json
- `wrangler.toml`, `open-next.config.ts`, `build-pages.sh`, `.npmrc`
- `.env.production` (Clerk-nøkkel hører hjemme i CF env vars)
- `force-dynamic` på `billing/`, `packs/`, `quick-export/`, `magic-wand/` (main funker uten)
- `force-dynamic` på `my-packs/` — KUN behold hvis SSG-prerender faktisk feiler på den rene stacken

## 5. Push og verifiser

```bash
git push -u origin feature/my-packs-clean
```

CF Pages bygger automatisk preview. Vent på URL.

**Playwright-verifisering (viewport 1440×900):**
- `/app/my-packs` (Pro-bruker — full UI)
- `/app/my-packs` (Free-bruker — Pro-gate/upsell)
- `/app/packs` (ingen regresjon)
- `/app/quick-export` (ingen regresjon)
- `/app/billing` (ingen regresjon)
- `/app/magic-wand` (hvis beholdt)

## 6. Binær utfall

**Scenario A — virker:** Merge til main, deploy, oppdater MILESTONES.md + PROJECT_STATE.md.

**Scenario B — CSS chunk 500s gjenkommer:** Vi har nå isolert repro med minimal diff. Debug derfra. Sannsynlige neste steg: sjekk om `page.tsx` import-tre trigger spesifikk chunk-split, prøv barrel-export refactor, eller eskaler til Cloudflare support med isolert repro.

## 7. Hard constraints (ufravikelige)

- ALDRI merge til main uten Playwright-verifisering
- Production har betalende brukere — null risiko
- Pro-gate MÅ fungere: Free ser billing-upsell, ikke My Packs-UI
- Max 10 pakker per Pro-bruker (allerede i API)

## Eksperimentet ER planen

Den ene gjenværende usikkerheten — om CSS chunk 500-bugen som startet hele kaskaden (commit `879fb41` → `2a278a3`) reproduseres på main's stack — kan ikke resoneres ut. Push ren branch, se preview. Binært utfall.
