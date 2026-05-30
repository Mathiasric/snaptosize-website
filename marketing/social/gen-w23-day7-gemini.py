"""W23 Day 7 — Gemini gen — 2026-05-18
G8: 3-hours-vs-5-minutes   — 3 hours in Photoshop. Or 5 minutes with SnapToSize.
G9: portrait-and-landscape — Your buyers frame horizontal too. Are you selling both?
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
        "id": "W23-G8",
        "slug": "2026-05-18-3-hours-vs-5-minutes-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal-navy split composition. Time contrast concept. No human faces or brand logos.

BACKGROUND: Deep dark navy-charcoal (#0D1117). Two-column layout separated by a glowing teal vertical divider line.

TOP HOOK (12%):
  Centered. Small amber monospace badge: "THE RESIZE PROBLEM"
  White ultra-bold headline (58pt, very tight leading):
    "3 hours in Photoshop."
  Teal italic bold continuation (52pt): "Or 5 minutes with SnapToSize."
  Thin teal hairline divider below.

LEFT COLUMN "BEFORE" (38%):
  Dark red-tinted background card (#1A0808).
  Top: Small red pill badge "WITHOUT SNAPTOSIZE"
  Large amber clock icon showing "3:00" (three hours).
  Below clock, a chaotic stack of UI elements:
    - Three overlapping Photoshop-style resize dialog boxes with pixel dimensions (800x1000, 1200x1600 etc)
    - Each dialog has slightly different settings, overlapping messily
    - Red X icons on each dialog suggesting errors or wrong settings
  Bottom of card: grey italic text "Every. Single. Listing."

RIGHT COLUMN "AFTER" (38%):
  Dark teal-tinted background card (#081A18).
  Top: Small teal pill badge "WITH SNAPTOSIZE"
  Large teal clock icon showing "0:05" (five minutes).
  Below clock, a clean organized UI panel:
    - Simple upload interface: one file slot showing "artwork.png"
    - Green progress bar: "Processing... 70 files"
    - Clean list: "2:3 pack -- done", "3:4 pack -- done", "4:5 pack -- done", "ISO -- done", "Extras -- done"
    - Teal checkmark on each row
  Bottom of card: white bold text "Every size. Done."

STAT ROW (8%):
  Three dark pill stats in a horizontal row:
    Teal "70" + grey "files per upload"
    Teal "5" + grey "packs covered"
    Teal "300" + grey "DPI always"

CTA BLOCK (4%):
  Teal rounded pill full-width: "Try free -- app.snaptosize.com"

FOOTER (text only, minimal):
  "snaptosize.com -- free to start"

CRITICAL FACTS (render exactly -- never alter):
- Up to 70 files per upload
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- DPI: 300 always
- URL: app.snaptosize.com
- NEVER show 72 DPI
- Time: 3 hours BEFORE, 5 minutes AFTER (these are approximate/illustrative)

Style: Dark editorial, time-contrast split layout. Amber for the painful "before", teal for the efficient "after". The visual should feel like a side-by-side product comparison that makes the choice obvious.""",
        "fallback": """Dark editorial Pinterest pin, 2:3 portrait, 1000x1500px. Dark navy background #0D1117.

TOP: Amber badge "THE RESIZE PROBLEM". White bold "3 hours in Photoshop." + teal "Or 5 minutes with SnapToSize."

TWO-COLUMN SPLIT with teal divider:
LEFT (red-tint, "WITHOUT SNAPTOSIZE"): Large clock showing 3:00. Overlapping messy Photoshop resize dialogs. "Every. Single. Listing."
RIGHT (teal-tint, "WITH SNAPTOSIZE"): Large clock showing 0:05. Clean upload interface. 5 checkmark rows (2:3/3:4/4:5/ISO/Extras all done). "Every size. Done."

STATS: "70 files" + "5 packs" + "300 DPI"
CTA: teal pill "Try free -- app.snaptosize.com"
FOOTER: snaptosize.com

Dark editorial, amber = before pain, teal = after solution.""",
    },
    {
        "id": "W23-G9",
        "slug": "2026-05-18-portrait-and-landscape-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Clean cream editorial background. Portrait-AND-landscape coverage concept. No human faces or brand logos.

BACKGROUND: Warm cream (#FAFAF7). Soft, editorial, professional.

TOP SECTION (12%):
  Dark pill badge (#0F0F0F): small teal monospace text "ORIENTATION COVERAGE"
  Large bold dark headline (58pt, #1A1A1A):
    "Portrait frames."
  Teal bold continuation (54pt): "Landscape frames too."
  Grey subtext (18pt): "Are you selling both orientations?"

MAIN GRID (52%) -- 2x2 layout showing same botanical artwork in 4 orientations:

  Each cell is a white card with 1.5px border (#E8E3DC), rounded corners 16px, shadow, centered artwork frame.

  CELL TOP-LEFT: portrait frame (tall, 2:3 ratio)
    Inside: same minimalist botanical art (vertical composition)
    Below frame: dark label "2:3 Portrait" + grey "8x12 · 12x18 · 16x24"
    Small teal badge: "INCLUDED"

  CELL TOP-RIGHT: landscape frame (wide, 3:2 ratio)
    Inside: same botanical art (horizontal crop/composition)
    Below frame: dark label "3:2 Landscape" + grey "12x8 · 18x12 · 24x16"
    Small teal badge: "INCLUDED"

  CELL BOTTOM-LEFT: square-ish frame (4:5)
    Inside: botanical art (slightly tall)
    Below frame: dark label "4:5 Portrait" + grey "8x10 · 16x20"
    Small teal badge: "INCLUDED"

  CELL BOTTOM-RIGHT: ISO landscape (A4 landscape)
    Inside: botanical art (wide)
    Below frame: dark label "A4 Landscape" + grey "297x210mm"
    Small teal badge: "INCLUDED"

  Thin teal dotted lines between cells (decorative grid separators).

INSIGHT STRIP (18%):
  Dark card (#0F0F0F), teal 3px left border, rounded corners.
  Small teal label: "WHAT MOST SELLERS MISS"
  White bold text (22pt): "You upload portrait. SnapToSize exports landscape automatically."
  Grey body (15pt): "Up to 70 files per upload -- portrait and landscape -- at 300 DPI. All 5 packs. One ZIP."
  Teal pill right: "Try free -- app.snaptosize.com"

FOOTER (8%):
  Cream. Left: teal checkmark + "snaptosize.com" bold dark.
  Right: grey "app.snaptosize.com -- free to start"

CRITICAL FACTS (render exactly -- never alter):
- Up to 70 files per upload (portrait AND landscape combined)
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- All packs include both portrait and landscape orientations
- DPI: 300 always
- URL: app.snaptosize.com
- NEVER show 72 DPI

Style: Cream editorial, clean 2x2 grid showcasing the same artwork in multiple orientations. Teal accents. Educational intel-report meets product showcase.""",
        "fallback": """Clean editorial Pinterest pin, 2:3 portrait, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill "ORIENTATION COVERAGE". Bold "Portrait frames." + teal "Landscape frames too." + grey "Are you selling both orientations?"

2x2 GRID (same botanical artwork in 4 orientations):
Top-left: Tall frame "2:3 Portrait -- 8x12/12x18/16x24" + teal "INCLUDED"
Top-right: Wide frame "3:2 Landscape -- 12x8/18x12/24x16" + teal "INCLUDED"
Bottom-left: "4:5 Portrait -- 8x10/16x20" + teal "INCLUDED"
Bottom-right: "A4 Landscape -- 297x210mm" + teal "INCLUDED"

DARK INSIGHT CARD: "You upload portrait. SnapToSize exports landscape automatically." + "Up to 70 files -- portrait and landscape -- 300 DPI. 5 packs. One ZIP." + teal "Try free -- app.snaptosize.com"

FOOTER: snaptosize.com -- free to start

Cream background, teal accents, clean 2x2 orientation grid.""",
    },
]


def generate(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"\nGenerating {pin['id']} -- {slug} ...")
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
