# HANDOFF: My Packs — Deploy til Production

**Dato:** 2026-05-12  
**Status:** Feature klar, deployment blokkert  
**Neste steg:** Les alt under, ikke gjenta feilene som er gjort

---

## 1. HVA ER MÅL

Deploye **My Packs**-feature til `app.snaptosize.com` — en Pro-eksklusiv side som lar brukere lagre egne størrelsessett og eksportere med ett klikk.

**Repo:** `C:\dev\snaptosize-app` (GitHub: `Mathiasric/snaptosize-app`)  
**Branch:** `feature/my-packs`  
**Prod:** `app.snaptosize.com` (Cloudflare Pages, fra `main` branch)

---

## 2. KVA SOM ER BYGGET OG FUNGERER

All feature-kode er ferdig og testet lokalt. Dette er klart:

| Fil | Innhold |
|-----|---------|
| `app/app/my-packs/page.tsx` | Full My Packs UI — 364 linjer, Pro-gate, upload, eksport, status |
| `app/app/my-packs/_components/PackBuilderModal.tsx` | Modal for å opprette/redigere pakker |
| `app/app/my-packs/_components/SavedPackCard.tsx` | Kort for lagret pakke med edit/delete |
| `app/app/my-packs/_components/types.ts` | CustomPack type |
| `app/api/custom-packs/route.ts` | GET/POST custom packs (KV storage) |
| `app/api/custom-packs/[id]/route.ts` | DELETE custom pack |
| `app/app/layout.tsx` | My Packs nav-tab lagt til (FolderHeart ikon, Pro-badge) |

Disse filene er **GODE** og skal ikke endres.

---

## 3. DEPLOYMENT-PROBLEMET — KJERNEN

### Hva main/production bruker (VIRKER)
`main` branch har **ingen** Cloudflare-adapter i `package.json`. Build-kommandoen i CF Pages dashbordet er ukjent for oss, men production **virker** på `app.snaptosize.com`. Main's `package.json` har kun `"build": "next build"`.

### Hva feature/my-packs prøvde (VIRKER IKKE)
Vi migrerte til `@opennextjs/cloudflare` fordi den originale adapteren (`@cloudflare/next-on-pages`) krasjet på full JSX-render i my-packs. Migreringen skapte 5 nye feil over 30+ commits:

| Feil | Forsøk | Resultat |
|------|--------|---------|
| `@cloudflare/next-on-pages` 500 på CSS/JS chunks | Migrerte til `@opennextjs/cloudflare` | Ny adapter, nye feil |
| npm ERESOLVE (`next@16.1.6` vs `next>=16.2.6`) | `.npmrc` med `legacy-peer-deps=true` | Fikset |
| Clerk SSG prerender failure (`Missing publishableKey`) | `force-dynamic` på alle 5 app-sider | Ikke fikset |
| Clerk SSG prerender failure (fortsatt) | `.env.production` med Clerk public key | Fikset bygget |
| CF Pages build feiler på `[build]` i wrangler.toml | Fjernet, laget `build-pages.sh` | Siste feil |
| 404 på alle ruter etter vellykket bygg | `build-pages.sh` kopierer `worker.js` → `_worker.js` | **IKKE TESTET ENNÅ** |

**Siste commit:** `389d1e4` — `build-pages.sh` klar, build-kommando i CF Pages dashbordet endret til `bash build-pages.sh`

---

## 4. NÅVÆRENDE TILSTAND AV feature/my-packs

Filer endret vs `main`:

```
.env.production          ← NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (force-added, gitignore bypass)
.npmrc                   ← legacy-peer-deps=true
build-pages.sh           ← npx @opennextjs/cloudflare build && cp worker.js → assets/_worker.js
open-next.config.ts      ← defineCloudflareConfig() (minimal)
wrangler.toml            ← name, compat_date, nodejs_compat, pages_build_output_dir
package.json             ← @opennextjs/cloudflare: ^1.19.9 lagt til
package-lock.json        ← oppdatert
app/app/billing/page.tsx          ← force-dynamic lagt til
app/app/magic-wand/page.tsx       ← force-dynamic lagt til
app/app/my-packs/page.tsx         ← full feature + force-dynamic
app/app/my-packs/_components/*    ← PackBuilderModal, SavedPackCard, types
app/app/packs/page.tsx            ← force-dynamic lagt til
app/app/quick-export/page.tsx     ← force-dynamic lagt til
app/app/layout.tsx                ← My Packs nav-tab
app/api/custom-packs/route.ts     ← custom packs API
app/api/custom-packs/[id]/route.ts ← delete API
app/api/stripe/checkout/route.ts  ← (ukjent endring, sjekk diff)
app/api/stripe/portal/route.ts    ← (ukjent endring, sjekk diff)
app/api/stripe/webhook/route.ts   ← (ukjent endring, sjekk diff)
```

---

## 5. ANBEFALT TILNÆRMING FOR NY SESSION

### Alternativ A: Fullfør @opennextjs/cloudflare (siste commit 389d1e4)
CF Pages dashbordet er allerede satt til `bash build-pages.sh`. Push trigger bygger med ny kommando. Verifiser at `_worker.js` plukkes opp og ruter svarer.

**Risiko:** `@opennextjs/cloudflare` er et Workers-orientert verktøy, ikke Pages — kan ha flere overraskelser.

### Alternativ B (ANBEFALT): Finn ut hva production bruker, bruk det samme
1. Sjekk CF Pages dashbordet for `snaptosize-app` → Settings → Build & deployments
2. Se hva **production/main** sin build-kommando er og output-directory
3. Bruk **nøyaktig samme oppsett** for feature/my-packs
4. Reverter alle adapter-endringer (`@opennextjs/cloudflare`, `wrangler.toml`, `open-next.config.ts`, `build-pages.sh`)
5. Merge **bare** feature-koden (my-packs, API-routes, layout) til main
6. Deploy via same pipeline som allerede virker

**Risiko:** Lav. Ingen ny teknologi, ingen adapter-migrering.

### Alternativ C: Deploy som CF Worker (ikke Pages)
`@opennextjs/cloudflare` er designet for Workers. Bruk `wrangler deploy` i stedet for CF Pages. Krever nytt Worker-oppsett — større endring.

---

## 6. KRITISKE CONSTRAINTS

- **ALDRI** merge til `main` uten Playwright-verifisering av preview
- `main` og `app.snaptosize.com` er production med betalende brukere — null risiko der
- Pro-gate MÅ fungere: Free-brukere skal se billing-upsell, ikke My Packs
- KV-datamodell for custom packs: `custom_pack:{userId}:{packId}` → `{id, name, sizes[], createdAt}`
- Max 10 pakker per bruker (sjekket i API route)
- Worker-kontrakten (enqueue API) støtter allerede `custom_sizes` i payload

---

## 7. CF PAGES DASHBOARD INNSTILLINGER

### Nåværende (feature/my-packs — vi endret dette manuelt)
- **Build command:** `bash build-pages.sh`
- **Build output directory:** `.open-next/assets`
- **Root directory:** (tom)
- **Build comments:** (tom)

### Originalt — FØR vi begynte å endre (sannsynlig, ikke 100% bekreftet)
- **Build command:** `npx @cloudflare/next-on-pages` (CF Pages Next.js preset)
- **Build output directory:** `.vercel/output/static`
- **Root directory:** (tom)

CF Pages for `snaptosize-app` bruker trolig **Next.js framework preset** som setter dette automatisk. Main sin `package.json` har ingen CF-adapter — presettet installerer `@cloudflare/next-on-pages` selv under bygg.

**⚠️ VIKTIG for ny session:** Sjekk production-innstillingene i CF Pages dashbordet FØRST (Pages → snaptosize-app → Settings → Build & deployments) før du gjør noe. Ikke anta at innstillingene over er korrekte — verifiser mot det som faktisk vises for `main`-branchen.

---

## 8. LOKALE BACKUP-FILER

```
app/app/my-packs/page.tsx.bak   ← full backup av my-packs siden
app/app/my-packs/page.tsx.full  ← identisk backup
```

---

## 9. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

Nøkkel bekreftet i CF Pages Preview-miljø: `pk_live_Y2xlcmsuc25hcHRvc2l6ZS5jb20k`  
Også committet i `.env.production` (force-added, gitignored fil).  
Denne er PUBLIC (NEXT_PUBLIC_ prefix) — trygg å committe.

---

## 10. SJEKKLISTE FOR FERDIG

- [ ] Preview-URL åpner `/app/packs` uten feil
- [ ] Preview-URL åpner `/app/my-packs` — Pro-gate vises for ikke-pro
- [ ] Playwright screenshots bekrefter ingen 500-feil på CSS/JS chunks
- [ ] `/app/my-packs` fungerer for Pro-bruker: opprett pakke, eksporter, last ned
- [ ] Free-bruker ser billing-upsell på `/app/my-packs`
- [ ] Merge `feature/my-packs` → `main`
- [ ] Prod-deploy verifisert med Playwright på `app.snaptosize.com`
