"""W23 Day 6 — Gemini gen — 2026-05-17
G6: missed-buyer-11x14  — She needed 11x14. You only had 8x10. She left.
G7: 70-files-60-seconds — 70 print-ready files. One upload. 60 seconds.
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
        "id": "W23-G6",
        "slug": "2026-05-17-missed-buyer-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal background. Pain-then-solution narrative. No human faces or brand logos.

BACKGROUND: Deep charcoal (#111318). Subtle warm vignette. Premium, serious, editorial.

TOP LABEL (7%):
  Small amber monospace badge: "SELLER BLIND SPOT"
  White bold headline (52pt, tight leading):
    "She needed the 11x14."
  Amber italic continuation (52pt): "Your listing only had 8x10."
  Small grey subtext (18pt): "She bought from someone else."

PAIN SECTION (38%) — Two-card comparison layout:

  LEFT CARD — "Your listing today" (#1A1D2E background, amber 2px top border):
    Amber small label: "TYPICAL ETSY LISTING"
    Dark list showing available sizes with red X icons:
      X  4x6
      X  5x7
      X  8x10
      (nothing else)
    Red pill at bottom: "3 sizes only — 7 missed"
    Amber small text: "71% of buyers searched 11x14 this month"

  RIGHT CARD — "What buyers search for" (#1A1D2E background, teal 2px top border):
    Teal small label: "TOP BUYER SEARCHES"
    Teal list with sizes buyers actually want:
      check  11x14  (most popular)
      check  16x20
      check  8.5x11
      check  A4 (EU buyers)
      check  5x7
      check  20x24
    Grey subtext: "Missing these = invisible to buyers"

STAT ROW (10%):
  Three amber/teal stat pills:
    Amber: "11x14" + grey "most searched size"
    Teal: "70 files" + grey "per upload"
    Teal: "300 DPI" + grey "every file"

SOLUTION BLOCK (37%):
  Dark card (#1A1D2E), teal 3px top border, rounded corners.
  Small teal monospace label: "SNAPTOSIZE FIXES THIS"
  White bold headline (26pt): "One upload. Every size she searched for."
  Grey body text (16pt): "SnapToSize delivers up to 70 print-ready files — 2:3, 3:4, 4:5, ISO A-series, and Extras. Every ratio. Every country. 300 DPI."
  Teal pill: "Try free → app.snaptosize.com"
  Small grey text: "5 packs · 28 sizes · Etsy-ready ZIP"

FOOTER (8%):
  Charcoal background. Teal checkmark + "snaptosize.com" white bold.
  Right: amber text "Never miss a sale again"

CRITICAL FACTS (render exactly — never alter):
- Up to 70 files per upload (not 28, not 50)
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- 28 sizes in packs total
- DPI: 300 always
- URL: app.snaptosize.com
- Sizes that exist: 11x14, 16x20, 8.5x11, 5x7, 8x10, 4x6, A4, A3
- NEVER show SnapToSize outputting 72 DPI

Style: Dark charcoal editorial. Pain-first narrative — show the missed sale, then the fix. Amber accents for pain/warning, teal for solution. Premium SaaS meets market intelligence report.""",
        "fallback": """Dark editorial Pinterest pin, 2:3 portrait, 1000x1500px. Charcoal background #111318.

TOP: Amber badge "SELLER BLIND SPOT". White bold "She needed the 11x14." + amber "Your listing only had 8x10." + grey "She bought from someone else."

TWO CARDS:
LEFT (amber border): "Your listing today" — 3 sizes with red X: 4x6, 5x7, 8x10. Red pill: "3 sizes only — 7 missed"
RIGHT (teal border): "Top buyer searches" — teal checkmarks: 11x14, 16x20, 8.5x11, A4, 5x7, 20x24

STATS: "11x14 most searched" + "70 files per upload" + "300 DPI"

SOLUTION CARD: "One upload. Every size she searched for." + "Up to 70 files, 300 DPI, 5 packs" + teal pill "Try free -> app.snaptosize.com"

FOOTER: snaptosize.com + "Never miss a sale again"

Dark charcoal, amber warnings, teal solutions.""",
    },
    {
        "id": "W23-G7",
        "slug": "2026-05-17-70-files-60-seconds-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Cream light background. Speed and volume concept. No human faces or brand logos.

BACKGROUND: Off-white cream (#FAFAF7). Clean, airy, professional. Very subtle warm paper texture.

TOP LABEL (8%):
  Dark pill badge (#0F0F0F background): teal monospace text "EXPORT SPEED"
  Below pill, large bold dark headline (64pt, #1A1A1A, very tight tracking):
    "70 files."
  Teal bold continuation (56pt, #2DD4BF): "60 seconds."
  Grey subtext (18pt, #6B7280): "One PNG upload. Every size your buyers need."

MAIN VISUAL (46%) — macOS Finder window, List View:
  Realistic macOS Finder window, white background, standard toolbar.
  Window title: "SnapToSize_Export_ZIP — 70 items"
  List view showing file rows (small teal file icons):
    portrait_2x3_8x12_300dpi.jpg          — 2.1 MB
    portrait_2x3_10x15_300dpi.jpg         — 2.8 MB
    portrait_2x3_12x18_300dpi.jpg         — 3.4 MB
    portrait_3x4_6x8_300dpi.jpg           — 1.9 MB
    portrait_3x4_9x12_300dpi.jpg          — 2.5 MB
    iso_A4_300dpi.jpg                     — 2.2 MB
    iso_A3_300dpi.jpg                     — 3.8 MB
    extras_5x7_300dpi.jpg                 — 1.6 MB
    extras_11x14_300dpi.jpg               — 3.1 MB
    ... and 61 more files
  Bottom status bar of Finder: "70 items, 148 MB used"
  Very faint teal border around the window.

TIMER ELEMENT (12%):
  A large circular timer graphic, centered below the Finder window.
  Bold dark number "0:60" (countdown style) — or a simple stopwatch icon with "60 sec" label.
  Teal accent ring around the timer. Grey label: "from upload to download"

STAT ROW (14%):
  Three clean stat cards on cream background, teal top border (2px):
    Card 1: Large teal "70" + dark "files" + grey "portrait & landscape"
    Card 2: Large teal "5" + dark "packs" + grey "every ratio"
    Card 3: Large teal "300" + dark "DPI" + grey "print-ready"

CTA BLOCK (12%):
  Light card (#F0EDE8), teal 3px left border.
  Dark bold text (22pt): "Upload once. Download 70 files. Done."
  Teal pill: "Try free → app.snaptosize.com"

FOOTER (8%):
  Cream background. Left: teal checkmark + "snaptosize.com" bold dark.
  Right: grey "app.snaptosize.com · free to start"

CRITICAL FACTS (render exactly — never alter):
- Up to 70 files per upload (show exactly 70 in Finder)
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- 28 sizes in packs total
- DPI: 300 always
- File names in Finder must say "300dpi" — never "72dpi"
- URL: app.snaptosize.com
- NEVER show 72 DPI on any file

Style: Clean, cream editorial. Speed meets volume. macOS Finder UI is the hero visual — shows the real output. Teal accents. Think product launch meets design system documentation.""",
        "fallback": """Clean editorial Pinterest pin, 2:3 portrait, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill "EXPORT SPEED". Large bold "70 files." + teal "60 seconds." + grey "One PNG upload. Every size your buyers need."

MAIN: macOS Finder window showing file list — 70 JPG files with names like "portrait_2x3_8x12_300dpi.jpg", "iso_A4_300dpi.jpg" etc. Status bar: "70 items". Teal border around window.

TIMER: Circular stopwatch graphic showing "60 sec", teal accent ring.

STATS: Three cards — "70 files portrait & landscape" + "5 packs every ratio" + "300 DPI print-ready"

CTA: "Upload once. Download 70 files. Done." + teal pill "Try free -> app.snaptosize.com"

FOOTER: snaptosize.com · free to start

Cream background, teal accents, clean macOS Finder UI as hero.""",
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
        print("  WARN: ingen bilde i respons -- proever fallback")
        return False
    except Exception as e:
        print(f"  ERROR: {e} -- proever fallback")
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
