"""W23 Day 15 — Gemini gen — 2026-05-29
G25: pixel-precision   — Your listing says 8×10. Your file delivers 8×9.6.
G26: 3-of-5-invisible  — 3 of 5 buyers never see your listing.
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
        "id": "W23-G25",
        "slug": "2026-05-29-pixel-precision-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Near-black background, high tension. The hidden problem: Etsy sellers think their 8×10 file is correct — but manual resizing introduces pixel rounding errors that make files millimetres off. Buyer gets a 1-star frame fit problem. No human faces or brand logos.

BACKGROUND: Near-black (#080808). Clean editorial, high contrast.

TOP HOOK (14%):
  Red pill badge top-center: monospace bold "YOUR FILE IS WRONG"
  Large bold white headline (52pt, tight tracking):
    "You listed 8×10."
  Red continuation (50pt): "You delivered 8×9.6."
  Grey italic subtext (14pt, centered): "Sellers don't know. Buyers do — when it doesn't fit the frame."
  Red hairline divider fading to dark.

MAIN SECTION (58%) — two dark stacked panels:

  TOP PANEL — THE PROBLEM (red left border 3px, bg #111111):
    Small red badge top-right: "THE PROBLEM"
    VISUAL: A bold measurement comparison — two rectangles side by side. LEFT: a rectangle labeled in white "8×10" with dimensions "2400 × 3000 px" in small monospace below — outlined in white, clean. RIGHT: a slightly distorted rectangle (visibly taller by a few pixels) labeled in red "8×9.6" with dimensions "2400 × 2880 px" in red monospace — outlined in red, with small red overflow arrows at top and bottom edges showing the extra height. Between them: a thin grey equals sign crossed out (≠). Labels below in grey: "What you promised" (left) and "What you delivered" (right).
    Bold white title (20pt): "Manual resize loses pixels in the rounding."
    Grey body (13pt): "When you resize in Photoshop or Canva, decimal pixels get rounded. An 8×10 at 300 DPI should be exactly 2400×3000px. Manual tools round to 2400×2880px or similar — just enough to misalign in a standard mat or frame."
    Three red pills: "Wrong pixel count" | "Frame misalign" | "Buyer complains"

  BOTTOM PANEL — THE FIX (teal left border 3px, bg #111111):
    Small teal badge top-right: "THE FIX"
    VISUAL: A clean precision spec sheet — a crisp white rectangle with a teal checkmark border. Inside: two rows in monospace font, each with a teal checkmark icon to the left:
      "✓  8×10  →  2400 × 3000 px  (exact)"
      "✓  A4    →  2480 × 3508 px  (exact)"
      "✓  16×20 →  4800 × 6000 px  (exact)"
    Below the spec sheet: teal small text "Calculated. Never rounded."
    Bold white title (20pt): "SnapToSize outputs exact dimensions. Always."
    Grey body (13pt): "Every size is mathematically calculated to the exact pixel — no rounding, no estimation. Your 8×10 is always 2400×3000px. Your buyer's frame fits. Every time."
    Three teal pills: "Exact pixels" | "300 DPI" | "Frame-guaranteed"

INSIGHT ROW (very dark card #0C0C0C, teal top border 1px):
  Bold white (15pt): "One wrong pixel in your file. One 1-star review in your shop."
  Teal (13pt): "SnapToSize calculates every size mathematically exact."

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "Upload once. Exact dimensions. Every size."

Style: Near-black cinematic editorial. Red = wrong dimensions. Teal = mathematical precision. The side-by-side rectangle comparison is the key visual — showing the actual pixel difference between what was promised and delivered.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Near-black #080808.

TOP: Red pill "YOUR FILE IS WRONG". White bold "You listed 8×10." Red "You delivered 8×9.6." Grey italic "Sellers don't know. Buyers do — when it doesn't fit the frame." Red divider.

TWO STACKED PANELS:
TOP PANEL "THE PROBLEM" (red border): Two rectangles side by side — LEFT: clean white rectangle "8×10" labeled "2400×3000px" "What you promised". RIGHT: distorted red rectangle "8×9.6" labeled "2400×2880px" with red overflow arrows "What you delivered". Between: ≠ symbol. "Manual resize loses pixels in the rounding." Body: Photoshop/Canva rounds decimal pixels. Pills: "Wrong pixel count | Frame misalign | Buyer complains"
BOTTOM PANEL "THE FIX" (teal border): Precision spec sheet with teal checkmarks: "✓ 8×10 → 2400×3000px (exact)" "✓ A4 → 2480×3508px (exact)" "✓ 16×20 → 4800×6000px (exact)" "Calculated. Never rounded." "SnapToSize outputs exact dimensions. Always." Pills: "Exact pixels | 300 DPI | Frame-guaranteed"

INSIGHT ROW: "One wrong pixel. One 1-star review." Teal "SnapToSize calculates every size mathematically exact."
FOOTER: "snaptosize.com". "Upload once. Exact dimensions. Every size."
Near-black. Red=wrong, teal=exact.""",
    },
    {
        "id": "W23-G26",
        "slug": "2026-05-29-3of5-invisible-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Deep dark indigo-navy background. The visibility problem: Etsy search returns different results depending on which size a buyer searches for. A seller with only 2:3 sizes is invisible to 8×10 buyers, A4 buyers, and 11×14 buyers — three completely separate searches. No human faces or brand logos.

BACKGROUND: Deep dark indigo (#08091A). Premium editorial, slight texture suggestion.

TOP HOOK (13%):
  Purple-violet pill badge top-center: monospace bold "SEARCH VISIBILITY"
  Large bold white headline (50pt, tight tracking):
    "3 of 5 buyers"
  Purple continuation (50pt): "never see your listing."
  Grey italic subtext (14pt): "They searched for a size you don't stock."
  Purple-to-teal hairline divider.

MAIN SECTION (60%) — a bold visual grid showing 5 search types, each as a row:

  Section header in grey small caps: "WHAT BUYERS SEARCH FOR ON ETSY"

  5 SEARCH ROWS (each row: left = search term badge, center = buyer type description, right = coverage indicator):

  ROW 1 — "2:3 wall art" (teal badge):
    Center grey: "Most common US portrait size — 4×6, 8×12, 20×30"
    Right: teal checkmark circle "COVERED"

  ROW 2 — "8×10 print" (grey badge):
    Center grey: "Most searched single size in US — 4:5 ratio"
    Right: red X circle "MISSING" (red text)

  ROW 3 — "A4 printable" (grey badge):
    Center grey: "UK, EU, AU standard — ISO A-series"
    Right: red X circle "MISSING"

  ROW 4 — "11×14 art print" (grey badge):
    Center grey: "Popular gallery size — Extras pack"
    Right: red X circle "MISSING"

  ROW 5 — "square wall art" (grey badge):
    Center grey: "Instagram-ratio buyers, modern frames"
    Right: red X circle "MISSING"

  Subtle thin divider line between each row.

  Below the grid, bold white large: "4 searches. 4 missed buyers. One upload fixes all."

STATS STRIP (dark card #0D1025, teal left border):
  Bold white: "SnapToSize generates all 5 ratio packs from one upload."
  Teal pills: "2:3 · 3:4 · 4:5 · ISO · Extras" | "Up to 70 files" | "300 DPI always"

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "One upload. Every search. Every buyer."

Style: Deep indigo editorial. Purple/red = missed searches. Teal = covered. The 5-row search grid is the core visual — instantly scannable, each row a different buyer you're missing. High information density but clean layout.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Deep dark indigo #08091A.

TOP: Purple pill "SEARCH VISIBILITY". White bold "3 of 5 buyers" + purple "never see your listing." Grey italic "They searched for a size you don't stock." Purple-to-teal divider.

5-ROW SEARCH GRID (header "WHAT BUYERS SEARCH FOR ON ETSY"):
Row 1: teal "2:3 wall art" | "Most common US portrait — 4×6, 8×12" | teal ✓ "COVERED"
Row 2: grey "8×10 print" | "Most searched single size — 4:5 ratio" | red ✗ "MISSING"
Row 3: grey "A4 printable" | "UK, EU, AU standard — ISO A-series" | red ✗ "MISSING"
Row 4: grey "11×14 art print" | "Popular gallery size — Extras pack" | red ✗ "MISSING"
Row 5: grey "square wall art" | "Instagram-ratio buyers, modern frames" | red ✗ "MISSING"
Below grid: bold white "4 searches. 4 missed buyers. One upload fixes all."

STATS STRIP: teal border. "SnapToSize generates all 5 ratio packs." Pills "2:3·3:4·4:5·ISO·Extras | Up to 70 files | 300 DPI always"
FOOTER: "snaptosize.com". "One upload. Every search. Every buyer."
Deep indigo. Purple/red=missing, teal=covered.""",
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
