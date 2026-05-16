"""W23 Day 5 — Gemini gen — 2026-05-16
G4: extras-pack-sizes  — The sizes most sellers skip (Extras pack spotlight)
G5: one-file-8-countries — One file sold in 8 countries (international unlock)
"""
import os, pathlib, io
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

PROJECT_ROOT = pathlib.Path(__file__).resolve().parents[2]
load_dotenv(PROJECT_ROOT / ".env.local")
API_KEY = os.environ.get("GOOGLE_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_API_KEY ikke satt i .env.local")

client = genai.Client(api_key=API_KEY)
MODEL = "gemini-3-pro-image-preview"
BASE = pathlib.Path(__file__).parent

PINS = [
    {
        "id": "W23-G4",
        "slug": "2026-05-16-extras-pack-sizes-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Clean light background (#FAFAF7). Educational intel-report style. No human faces or brand logos.

BACKGROUND: Off-white cream (#FAFAF7). Warm, professional, slightly editorial feel. Subtle paper texture suggestion.

TOP LABEL STRIP (8%):
  Centered dark pill badge on cream: dark background (#0F0F0F), small teal monospace text: "THE EXTRAS PACK"
  Below pill, centered teal hairline divider.

HEADLINE BLOCK (14%):
  Large bold dark headline (60pt, #1A1A1A, tight tracking):
    "6 sizes your buyers
    search for — that most
    listings don't include."
  Grey subtext below (18pt, #6B7280): "The Extras pack covers what every other pack misses."

MAIN CONTENT (52%) — Six size cards in a 2-column grid:

  Each card: light white background (#FFFFFF), 1.5px border (#E8E3DC), left border 4px teal (#2DD4BF), border-radius 12px, padding 16px 20px.

  Card 1 — "5×7"":
    Left: Large teal number "5×7"" (44pt bold)
    Right top: "Greeting cards + small prints"
    Right bottom: Small red pill "Missing from 71% of listings"

  Card 2 — "8.5×11"":
    Left: Large teal number "8.5×11"" (44pt bold)
    Right top: "Letter size — home printer standard"
    Right bottom: Small red pill "Missing from 68% of listings"

  Card 3 — "11×14"":
    Left: Large amber number "11×14"" (44pt bold, #F59E0B)
    Right top: "Gallery wall statement piece"
    Right bottom: Small amber pill "Searched 2.3x more in 2024"

  Card 4 — "11×17"":
    Left: Large teal number "11×17"" (44pt bold)
    Right top: "Blueprint ratio — wide posters"
    Right bottom: Small red pill "Missing from 84% of listings"

  Card 5 — "16×20"":
    Left: Large amber number "16×20"" (44pt bold, #F59E0B)
    Right top: "Large feature wall pieces"
    Right bottom: Small amber pill "High AOV — buyers pay more"

  Card 6 — "20×24"":
    Left: Large teal number "20×24"" (44pt bold)
    Right top: "Statement art — above sofas, beds"
    Right bottom: Small red pill "Virtually no competition"

  Between the two columns: faint vertical teal dotted line (decorative).

SOLUTION BLOCK (18%):
  Dark card (#0F0F0F), rounded corners, full width, teal 3px left border.
  Small teal monospace label: "SNAPTOSIZE EXTRAS PACK"
  White bold headline (24pt): "All 6 included — automatically."
  Grey subtext (16pt): "5x7 · 8.5x11 · 11x14 · 11x17 · 16x20 · 20x24 · all at 300 DPI"
  Teal rounded pill right: "Try free →"

FOOTER (8%):
  Cream background. Left: teal checkmark icon + "snaptosize.com" bold dark.
  Right: grey text "app.snaptosize.com · free to start"

CRITICAL FACTS (render exactly — never alter):
- Extras pack contains: 5x7, 8.5x11, 11x14, 11x17, 16x20, 20x24 (6 sizes)
- Total packs: 5 (2:3, 3:4, 4:5, ISO A-series, Extras)
- Total sizes across all packs: 28
- DPI: 300 DPI always
- URL: app.snaptosize.com
- NEVER show SnapToSize outputting 72 DPI

Style: Editorial intel report. Clean, cream background, professional. Think a market research brief meets Pinterest aesthetic. High contrast text, teal and amber accents only.""",
        "fallback": """Editorial Pinterest pin, 2:3 portrait, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill "THE EXTRAS PACK". Bold headline: "6 sizes your buyers search for — that most listings don't include."

MAIN: 2-column grid of 6 size cards with teal left borders:
- 5x7" — "Greeting cards" — red pill "Missing from 71% of listings"
- 8.5x11" — "Letter/home printer" — red pill "Missing from 68% of listings"
- 11x14" — "Gallery walls" — amber pill "Searched 2.3x more"
- 11x17" — "Wide posters" — red pill "Missing from 84% of listings"
- 16x20" — "Feature wall" — amber pill "High AOV"
- 20x24" — "Statement art" — red pill "Virtually no competition"

SOLUTION: Dark card "All 6 included — automatically. 5x7 · 8.5x11 · 11x14 · 11x17 · 16x20 · 20x24 · 300 DPI" + teal "Try free →"

FOOTER: snaptosize.com · app.snaptosize.com · free to start

Clean editorial style, cream background, teal and amber accents.""",
    },
    {
        "id": "W23-G5",
        "slug": "2026-05-16-one-file-8-countries-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark navy background. World/global theme. No human faces or brand logos.

BACKGROUND: Deep dark navy (#080A14). Faint grid lines suggesting a world map or coordinate system (very subtle, 5% opacity white lines). Professional, global, aspirational.

TOP LABEL (8%):
  Small teal monospace badge: "GLOBAL PRINT SIZES"
  White bold headline below (56pt, tight leading):
    "1 file."
  Teal italic continuation (56pt): "8 countries covered."

WORLD REGIONS SECTION (50%) — Eight country/region cards in a flowing 2-column layout:

  Each card is a dark rounded card (#1A1D2E), teal 2px left border, subtle country flag emoji on left, region name, standard paper size, and a small teal "INCLUDED" badge.

  Card 1 — US Flag emoji: "United States"
    Sizes: "8x10 · 5x7 · 11x14 · 16x20"
    Status badge: teal "INCLUDED"

  Card 2 — UK Flag emoji: "United Kingdom"
    Sizes: "A4 · A3 · A5"
    Status badge: teal "INCLUDED"

  Card 3 — DE Flag emoji: "Germany"
    Sizes: "A4 · A3 · A2"
    Status badge: teal "INCLUDED"

  Card 4 — AU Flag emoji: "Australia"
    Sizes: "A4 · A3 · 8x10"
    Status badge: teal "INCLUDED"

  Card 5 — CA Flag emoji: "Canada"
    Sizes: "8x10 · 8.5x11 · 11x14"
    Status badge: teal "INCLUDED"

  Card 6 — FR Flag emoji: "France"
    Sizes: "A4 · A3 · A5"
    Status badge: teal "INCLUDED"

  Card 7 — NL Flag emoji: "Netherlands"
    Sizes: "A4 · A3 · 30x40cm"
    Status badge: teal "INCLUDED"

  Card 8 — SE Flag emoji: "Scandinavia"
    Sizes: "A4 · A3 · 50x70cm"
    Status badge: teal "INCLUDED"

STAT ROW (12%):
  Three dark stat pills in a horizontal row:
    Teal number "28" + grey text "total sizes"
    Teal number "5" + grey text "ratio packs"
    Teal number "300" + grey text "DPI always"

CTA BLOCK (22%):
  Dark card with subtle teal glow border (#2DD4BF, 40% opacity).
  Small teal monospace label: "ONE UPLOAD COVERS ALL"
  White bold headline (26pt): "Upload once. Sell to US, EU, and AU buyers — all from one ZIP."
  Grey subtext (16pt): "2:3 · 3:4 · 4:5 · ISO A-series · Extras — every ratio, every country"
  Teal rounded pill: "Try free → app.snaptosize.com"

FOOTER (8%):
  Dark background. Teal checkmark + "snaptosize.com" white bold.
  Grey right: "app.snaptosize.com · free to start"

CRITICAL FACTS (render exactly — never alter):
- ISO A-series covers: A4, A3, A5 (European/Australian standard)
- US pack covers: 8x10, 5x7, 11x14, 16x20, 8.5x11
- Total packs: 5 (2:3, 3:4, 4:5, ISO A-series, Extras)
- Total sizes: 28
- DPI: 300 always
- URL: app.snaptosize.com
- NEVER invent size numbers not listed above

Style: Dark navy editorial. Global, aspirational, data-driven. Premium SaaS dashboard meets world atlas. Teal accents throughout.""",
        "fallback": """Dark editorial Pinterest pin, 2:3 portrait, 1000x1500px. Dark navy background #080A14.

TOP: Teal badge "GLOBAL PRINT SIZES". White bold "1 file." + teal italic "8 countries covered."

MAIN: 8 country cards in 2-column grid, each dark rounded with teal left border, flag emoji, country name, sizes, teal "INCLUDED" badge:
- US: 8x10 · 5x7 · 11x14 · 16x20
- UK: A4 · A3 · A5
- Germany: A4 · A3 · A2
- Australia: A4 · A3 · 8x10
- Canada: 8x10 · 8.5x11 · 11x14
- France: A4 · A3 · A5
- Netherlands: A4 · A3
- Scandinavia: A4 · A3 · 50x70cm

STATS ROW: "28 total sizes" · "5 ratio packs" · "300 DPI always"

CTA DARK CARD: "Upload once. Sell to US, EU, and AU buyers — all from one ZIP." + "2:3 · 3:4 · 4:5 · ISO A-series · Extras" + teal "Try free → app.snaptosize.com"

FOOTER: snaptosize.com · free to start

Dark navy, teal accents, global professional aesthetic.""",
    },
]


def generate(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"\nGenerating {pin['id']} — {slug} ...")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=pin["prompt"],
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
                image_config=types.ImageConfig(aspect_ratio="2:3"),
            ),
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                out_path.parent.mkdir(parents=True, exist_ok=True)
                img = Image.open(io.BytesIO(part.inline_data.data))
                img = img.resize((1000, 1500), Image.LANCZOS)
                img.save(str(out_path), "PNG")
                print(f"  Saved: {out_path}")
                return True
        print("  WARN: ingen bilde i respons — proever fallback")
        return False
    except Exception as e:
        print(f"  ERROR: {e} — proever fallback")
        return False


def generate_fallback(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"  Fallback for {pin['id']} ...")
    response = client.models.generate_content(
        model=MODEL,
        contents=pin["fallback"],
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
            image_config=types.ImageConfig(aspect_ratio="2:3"),
        ),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data is not None:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            img = Image.open(io.BytesIO(part.inline_data.data))
            img = img.resize((1000, 1500), Image.LANCZOS)
            img.save(str(out_path), "PNG")
            print(f"  Saved (fallback): {out_path}")
            return True
    print(f"  WARN: fallback tom for {pin['id']}")
    return False


if __name__ == "__main__":
    for pin in PINS:
        ok = generate(pin)
        if not ok:
            generate_fallback(pin)
    print("\nDone.")
