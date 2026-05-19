"""W23 Day 8 — Gemini gen — 2026-05-19
G10: gallery-wall-sizes     — The 5 sizes that make every gallery wall work.
G11: listing-gap            — What Etsy lists vs what buyers can actually frame.
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
        "id": "W23-G10",
        "slug": "2026-05-19-gallery-wall-sizes-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Warm cream editorial background. Gallery wall planning guide. No human faces or brand logos.

BACKGROUND: Warm cream (#FAFAF7). Clean editorial layout.

TOP SECTION (14%):
  Dark pill badge (#0F0F0F): small teal monospace text "GALLERY WALL GUIDE"
  Large bold dark headline (60pt, #1A1A1A):
    "The 5 sizes that make"
  Teal bold continuation (56pt): "every gallery wall work."
  Grey subtext (16pt): "Ranked by how often buyers actually print and frame them."

GALLERY WALL VISUAL (40%) — top-down flat-lay style illustration:
  A clean wall mockup showing 5 frames arranged in a gallery layout:
  - Center/anchor: one large frame labeled "16×20" with a subtle landscape illustration inside
  - Left of center: medium frame "11×14" with portrait botanical art
  - Right of center: medium frame "8×10" with minimalist abstract art
  - Bottom left: small frame "5×7" with simple botanical sprig
  - Bottom right: small frame "A4 (8.3×11.7)" with geometric pattern
  Each frame has a white mat, thin black frame border, soft drop shadow
  Teal dimension labels float beside each frame

RANKED LIST (38%):
  5 horizontal rows, alternating cream/light-grey backgrounds, rounded corners:

  Row 1: Large "1" grey | Bold "16×20" | grey "4:5 ratio" | teal pill "GALLERY ANCHOR" | Right: "Most common large statement piece"
  Row 2: Large "2" grey | Bold "11×14" | grey "~4:5 ratio" | teal pill "MID-SIZE STAPLE" | Right: "Photo-mat standard. Slots a Ribba 11×14"
  Row 3: Large "3" grey | Bold "8×10" | grey "4:5 ratio" | teal pill "UNIVERSAL" | Right: "Every US buyer owns an 8×10 frame"
  Row 4: Large "4" grey | Bold "5×7" | grey "5:7 ratio" | grey pill "DESK FRAME" | Right: "Gift and desk frame standard"
  Row 5: Large "5" grey | Bold "A4 (8.3×11.7)" | grey "ISO" | teal pill "EU UNLOCK" | Right: "UK, EU, Australia. 100M+ shoppers"

CTA BLOCK (8%):
  Dark card (#0F0F0F), full width, rounded:
  Left: white "One upload covers all 5." grey "Plus 65 more sizes at 300 DPI."
  Right: teal pill "Try free — app.snaptosize.com"

CRITICAL FACTS (render exactly):
- Up to 70 files per upload
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- DPI: 300 always
- URL: app.snaptosize.com

Style: Warm cream editorial. Flat-lay gallery wall illustration at top, clean ranked list below. Educational and highly saveable.""",
        "fallback": """Warm cream editorial Pinterest pin, 2:3 portrait, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill "GALLERY WALL GUIDE". Bold "The 5 sizes that make" + teal "every gallery wall work." + grey "Ranked by how often buyers actually print and frame them."

GALLERY WALL MOCKUP: 5 frames arranged as gallery wall — 16x20 center, 11x14 left, 8x10 right, 5x7 bottom-left, A4 bottom-right. Each with thin black frame, white mat, teal dimension label.

RANKED LIST (5 rows):
1. 16x20 — 4:5 — GALLERY ANCHOR — Most common large statement piece
2. 11x14 — ~4:5 — MID-SIZE STAPLE — Photo-mat standard, slots a Ribba 11x14
3. 8x10 — 4:5 — UNIVERSAL — Every US buyer owns an 8x10 frame
4. 5x7 — 5:7 — DESK FRAME — Gift and desk frame standard
5. A4 (8.3x11.7) — ISO — EU UNLOCK — UK, EU, Australia. 100M+ shoppers

CTA: dark card "One upload covers all 5." + "Plus 65 more sizes at 300 DPI." + teal "Try free — app.snaptosize.com"

Cream editorial, gallery wall illustration, clean ranked list.""",
    },
    {
        "id": "W23-G11",
        "slug": "2026-05-19-listing-gap-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal-navy background. The gap between what Etsy sellers list vs what buyers can actually frame. No human faces or brand logos.

BACKGROUND: Deep dark navy (#0D1117). Editorial, data-driven.

TOP HOOK (12%):
  Centered. Small red monospace badge: "THE LISTING GAP"
  White ultra-bold headline (56pt, tight leading):
    "What you list vs what"
  Amber bold continuation (52pt): "buyers can actually frame."
  Thin teal hairline divider below.

COMPARISON TABLE (52%) — two-column layout:

  COLUMN HEADERS:
  Left header: red pill "TYPICAL ETSY LISTING"
  Right header: teal pill "WHAT FRAME STORES STOCK"

  6 table rows (alternating dark backgrounds), each showing a size/ratio:

  Row 1: Left: red X + "2:3 only (8×12, 16×24)" | Right: teal check + "2:3 portrait ✓"
  Row 2: Left: red X + "missing" | Right: teal check + "4:5 (8×10, 16×20) ✓"
  Row 3: Left: red X + "missing" | Right: teal check + "5:7 (5×7 desk frame) ✓"
  Row 4: Left: red X + "missing" | Right: teal check + "11:14 (photo mat) ✓"
  Row 5: Left: red X + "missing" | Right: teal check + "3:4 (6×8, 12×16) ✓"
  Row 6: Left: red X + "missing" | Right: teal check + "A4 ISO (EU/UK/AU) ✓"

  Bottom of table: amber text "Every missing size = a buyer who can't print and frame your art."

STAT ROW (12%):
  Three teal/amber stat pills:
  Amber "1/6" + grey "sizes covered by default"
  Teal "70" + grey "files SnapToSize exports"
  Teal "5" + grey "packs — every ratio"

INSIGHT CARD (16%):
  Dark teal-tinted card (#081A18), teal 3px left border:
  Small teal label: "THE FIX"
  White bold (20pt): "Upload once. SnapToSize exports every ratio frame stores stock — at 300 DPI."
  Teal pill: "Try free — app.snaptosize.com"

FOOTER: "snaptosize.com — free to start"

CRITICAL FACTS (render exactly):
- Up to 70 files per upload
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- DPI: 300 always
- URL: app.snaptosize.com
- NEVER show 72 DPI

Style: Dark editorial, data-driven comparison table. Red for the gap, teal for the solution. Makes the problem viscerally clear.""",
        "fallback": """Dark editorial Pinterest pin, 2:3 portrait, 1000x1500px. Dark navy #0D1117.

TOP: Red badge "THE LISTING GAP". White bold "What you list vs what" + amber "buyers can actually frame."

TWO-COLUMN TABLE:
Left header: red "TYPICAL ETSY LISTING"
Right header: teal "WHAT FRAME STORES STOCK"

6 rows:
1. red X "2:3 only" | teal check "2:3 portrait"
2. red X "missing" | teal check "4:5 (8x10, 16x20)"
3. red X "missing" | teal check "5:7 (desk frame)"
4. red X "missing" | teal check "11:14 (photo mat)"
5. red X "missing" | teal check "3:4 (6x8, 12x16)"
6. red X "missing" | teal check "A4 ISO (EU/UK/AU)"

Amber: "Every missing size = a buyer who can't frame your art."

STATS: amber "1/6 sizes covered" + teal "70 files" + teal "5 packs"

INSIGHT CARD: "Upload once. SnapToSize exports every ratio at 300 DPI." + teal "Try free — app.snaptosize.com"

Dark editorial, red = gap, teal = fix.""",
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
