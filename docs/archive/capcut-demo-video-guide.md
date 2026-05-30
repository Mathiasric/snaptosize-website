# CapCut Pro Guide — SnapToSize Demo Video

## Før du starter

1. Åpne CapCut desktop
2. Klikk **"New Project"**
3. I prosjektinnstillinger (øverst til høyre, tannhjul-ikon):
   - **Resolution:** 1920 x 1080 (16:9 landscape — matcher skjermopptaket)
   - **Frame rate:** 30fps

---

## Steg 1: Importer videoen

1. Klikk **"Import"** øverst til venstre (eller dra filen inn)
2. Velg `snaptosize batch video.mp4` fra `assets/`-mappen
3. Dra videoen ned til **tidslinjen** (det store feltet nederst)
4. Videoen legger seg som et klipp på "Track 1"

> Sjekk at videoen spiller riktig med play-knappen over tidslinjen.

---

## Steg 2: Sett opp tekst-stilen (gjør dette én gang, kopier resten)

### Lag første tekst-klipp

1. Klikk **"Text"** i verktøylinjen øverst
2. Klikk **"Default text"** (IKKE "Text templates" — de er for flashy)
3. Et tekst-klipp dukker opp i tidslinjen OG på canvas

### Style teksten

Klikk på tekst-klippet i tidslinjen. Et panel åpnes til høyre. Sett disse:

**Basic-fanen:**
- **Font:** `Montserrat` → Velg **Bold** (søk etter den i font-listen)
  - Hvis Montserrat ikke finnes: bruk `Arial Bold` som backup
- **Size:** `7.0` (dette er CapCut-enheter, tilsvarer ca. 56px)
- **Color:** Hvit `#FFFFFF`
- **Skriv inn teksten:** `One image. Every Etsy print size.`

**Style-fanen** (fane nr. 2 i tekst-panelet):
- **Shadow:** Slå PÅ (toggle)
  - Color: `#000000`
  - Alpha/Opacity: `60%`
  - Distance: `4`
  - Blur: `6`
- **Background:** Slå PÅ (toggle)
  - Color: `#000000`
  - Alpha/Opacity: `65%`
  - Corner Radius: `12`
  - Padding: La default stå (eller øk litt til ~10)

### Plassering på canvas

- Dra teksten til **nederst senter** av videobildet
- Ca. 15% opp fra bunnen — slik at den ikke dekker noe viktig UI
- **VIKTIG:** Husk denne posisjonen — alle tekster skal stå på SAMME sted

---

## Steg 3: Sett timing for første tekst

1. Se på tekst-klippet i tidslinjen — det er en farget boks
2. **Dra venstre kant** av tekst-klippet til `0:00` (starten)
3. **Dra høyre kant** til `0:03` (3 sekunder)
4. Nå vises teksten fra sekund 0 til 3

> Tips: Zoom inn på tidslinjen med Ctrl+scroll for presisjon.

---

## Steg 4: Legg til fade-animasjon

1. Klikk på tekst-klippet i tidslinjen
2. Klikk **"Animation"**-fanen i panelet til høyre
3. **In Animation:** Velg **"Fade In"** → sett duration til `0.3s`
4. **Out Animation:** Velg **"Fade Out"** → sett duration til `0.3s`

---

## Steg 5: Kopier stilen til alle andre tekster

Nå kommer trikset som sparer deg masse tid:

1. **Høyreklikk** på tekst-klippet i tidslinjen
2. Velg **"Copy"** (eller Ctrl+C)
3. **Ctrl+V** for å lime inn — en kopi dukker opp
4. **Dobbeltklikk** på den nye kopien for å endre teksten
5. Dra klippet til riktig tid i tidslinjen

**Gjenta dette for alle 10 tekster i tabellen under.**

---

## Steg 6: Alle tekst-klipp (tidslinje)

Spill gjennom videoen først og noter nøyaktig når ting skjer. Tidene under er estimater — juster ±2 sek basert på din video.

| # | Start | Slutt | Tekst | Hva skjer på skjermen |
|---|-------|-------|-------|----------------------|
| 1 | 0:00 | 0:03 | `One image. Every Etsy print size.` | Åpningsframe, appen vises |
| 2 | 0:03 | 0:08 | `Step 1: Upload your image` | Du drar/velger bildet |
| 3 | 0:08 | 0:12 | `Step 2: Select All packs` | Du klikker Select All |
| 4 | 0:12 | 0:18 | `Generating 5 ZIP packs...` | Prosessering pågår |
| 5 | 0:18 | 0:23 | `Done — 5 packs ready to download` | ZIP-filene vises |
| 6 | 0:23 | 0:28 | `Let's verify — opening 2:3 ratio` | Du åpner/sjekker 2:3 |
| 7 | 0:28 | 0:33 | `4:5 ratio ✓` | Du sjekker 4:5 |
| 8 | 0:33 | 0:38 | `Extras pack ✓` | Du sjekker extras |
| 9 | 0:38 | 0:43 | `All sizes. Print-ready. Under 20MB.` | Oppsummering |
| 10 | 0:43 | 0:45 | `Try free → snaptosize.com` | Siste frame — CTA |

### Spesielt for tekst #10 (CTA):

- **Size:** `8.5` (litt større enn resten)
- **Background color:** Endre fra svart til lilla `#7C3AED`
- **Background opacity:** `85%`
- Alt annet likt

---

## Steg 7: Kvalitetssjekk

Før eksport, spill gjennom hele videoen og sjekk:

- [ ] Alle tekster er lesbare (ikke skjult bak UI-elementer)
- [ ] Alle tekster er på SAMME posisjon (ingen hopping)
- [ ] Timing matcher det som skjer på skjermen
- [ ] Fade in/out fungerer på alle klipp
- [ ] CTA-teksten (#10) har lilla bakgrunn og er litt større
- [ ] Ingen tekst overlapper med annen tekst (gap mellom klipp)

---

## Steg 8: Eksporter

1. Klikk **"Export"** øverst til høyre
2. Innstillinger:
   - **Resolution:** `1080p`
   - **Frame rate:** `30fps`
   - **Format:** `MP4`
   - **Quality:** `High` (IKKE "Recommended" — den komprimerer for mye)
   - **Codec:** `H.264` (standard, funker overalt)
3. Velg filnavn: `snaptosize-demo.mp4`
4. Lagre til: `C:\snaptosize-website\assets\`
5. Klikk **"Export"** og vent

---

## Ferdig!

Filen `assets/snaptosize-demo.mp4` er klar for implementering på siten.

Neste steg: Si ifra til Claude Code for å implementere videoen i hero-seksjonen og HowItWorks-seksjonen.

---

## Hurtigreferanse: Tastatursnarveier i CapCut

| Snarvei | Funksjon |
|---------|----------|
| `Space` | Play/pause |
| `Ctrl+C / Ctrl+V` | Kopier/lim inn klipp |
| `Ctrl+Z` | Angre |
| `Ctrl+scroll` | Zoom inn/ut på tidslinje |
| `Ctrl+S` | Lagre prosjekt |
| `Delete` | Slett valgt klipp |
| `←` / `→` | Flytt playhead frame-for-frame |
