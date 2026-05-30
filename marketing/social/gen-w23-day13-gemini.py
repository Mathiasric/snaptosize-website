"""W23 Day 13 — Gemini gen — 2026-05-26
G21: zip-rejected      — Etsy rejected your ZIP. 20.4MB. Here's the fix.
G22: landscape-portrait — Portrait AND landscape. One upload. 140 files.
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
        "id": "W23-G21",
        "slug": "2026-05-26-zip-rejected-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Very dark near-black background. "Etsy rejected your ZIP" — the 20MB file size limit problem every Etsy print seller hits. No human faces or brand logos.

BACKGROUND: Near-black (#080808). Editorial, high contrast.

TOP HOOK (13%):
  Red-crimson pill badge top-center: monospace "ETSY ZIP REJECTED"
  Large bold white headline (56pt, tight tracking):
    "Your ZIP is 20.4MB."
  Red continuation (50pt): "Etsy's limit is 20MB."
  Grey italic subtext (16pt): "Every seller hits this. Most don't know the fix."
  Red hairline divider fading to teal.

MAIN SECTION (58%) — problem/solution split in two dark panels stacked vertically:

  TOP PANEL — THE PROBLEM (red left border 3px, dark bg #111):
    Red badge top-right: "THE PROBLEM"
    Icon area: a red 'x' circle or rejected file icon — large, centered.
    Bold white title (22pt): "Your 70-file ZIP won't upload."
    Grey body (14pt): "300 DPI files are large. 70 files across 5 packs easily exceed 20MB. Etsy hard-rejects the upload — no warning, no partial success."
    Three red problem pills: "20MB hard limit" | "Silent rejection" | "Listing blocked"

  BOTTOM PANEL — THE FIX (teal left border 3px, dark bg #111):
    Teal badge top-right: "THE FIX"
    Icon area: a teal checkmark shield — large, centered.
    Bold white title (22pt): "SnapToSize compresses automatically."
    Grey body (14pt): "Smart ZIP compression reduces file size while preserving full 300 DPI quality. Every ZIP is tested against Etsy's 20MB limit before you download."
    Three teal solution pills: "Always under 20MB" | "300 DPI preserved" | "Auto-split if needed"

INSIGHT ROW (very dark card, teal top border 1px):
  Bold white: "SnapToSize has never delivered a ZIP over Etsy's limit."
  Teal: "Guaranteed on every upload."

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "Upload once. Download without limits."

Style: Near-black editorial. Red = problem. Teal = fix. Two stacked panels, clear problem/solution. High tension hook.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Near-black #080808.

TOP: Red pill "ETSY ZIP REJECTED". White bold "Your ZIP is 20.4MB." Red "Etsy's limit is 20MB." Grey italic "Every seller hits this. Most don't know the fix." Red-to-teal divider.

TWO STACKED PANELS:
TOP PANEL "THE PROBLEM" (red border): Red X icon. "Your 70-file ZIP won't upload." "300 DPI files are large. 70 files easily exceed 20MB. Etsy hard-rejects." Pills: "20MB hard limit | Silent rejection | Listing blocked"
BOTTOM PANEL "THE FIX" (teal border): Teal shield icon. "SnapToSize compresses automatically." "Smart ZIP compression. 300 DPI preserved. Tested against 20MB limit." Pills: "Always under 20MB | 300 DPI preserved | Auto-split if needed"

INSIGHT: Dark card. "SnapToSize has never delivered a ZIP over Etsy's limit." Teal "Guaranteed."

FOOTER: "snaptosize.com" pill. "Upload once. Download without limits."
Near-black. Red = problem, teal = fix.""",
    },
    {
        "id": "W23-G22",
        "slug": "2026-05-26-landscape-portrait-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Deep midnight blue background. "Portrait AND landscape" — most Etsy sellers only ship portrait crops, missing every buyer with a wide wall or landscape frame. No human faces or brand logos.

BACKGROUND: Deep midnight blue (#080D1A). Premium, gallery-like. High contrast.

TOP HOOK (13%):
  Teal pill badge top-center: monospace "DOUBLE YOUR REACH"
  Large bold white headline (54pt, tight tracking):
    "Portrait buyers."
  Teal continuation (54pt): "Landscape buyers."
  White bold (50pt): "Same upload."
  Grey subtext (15pt): "Most sellers only ship one orientation. Half their buyers leave."
  Teal hairline divider.

MAIN SECTION (60%) — two large framed artwork panels side by side showing the SAME abstract minimalist botanical artwork (soft sage greens, warm cream, muted terracotta — elegant, no text) in two orientations:

  LEFT FRAME — PORTRAIT (2:3 tall, ~42% width):
    Dark elegant frame with teal corner accents.
    Artwork inside cropped tall portrait (2:3).
    Label below frame:
      Teal badge "PORTRAIT" + white small "2:3 · 3:4 · 4:5"
      Grey tiny: "Wall art buyers · US buyers · Standard frames"
      Small teal stat: "70 files"

  RIGHT FRAME — LANDSCAPE (3:2 wide, ~42% width):
    Dark elegant frame with purple corner accents.
    Artwork inside cropped wide landscape (3:2).
    Label below frame:
      Purple badge "LANDSCAPE" + white small "3:2 · 4:3 · 5:4"
      Grey tiny: "Wide wall buyers · Panoramic · Monitor art"
      Small purple stat: "70 files"

  Center gap: small "+" symbol in teal between the two frames.
  Below both frames: bold white large "= 140 files." + grey "Both orientations. Every buyer covered."

STATS STRIP (dark card #0D1020, teal left border):
  Bold white: "SnapToSize ships portrait AND landscape in every pack."
  Three teal pills: "140 files" | "5 packs × 2 orientations" | "300 DPI always"
  Grey tiny: "app.snaptosize.com"

FOOTER:
  Dark rounded pill right: "snaptosize.com" white bold
  Grey caption left: "One upload. Two orientations. Zero extra steps."

Style: Midnight blue premium gallery. Two elegant framed artworks side by side — same artwork, different crop. Teal for portrait, purple for landscape. Aspirational and eye-catching.""",
        "fallback": """Editorial Pinterest pin, 2:3, 1000x1500px. Deep midnight blue #080D1A.

TOP: Teal pill "DOUBLE YOUR REACH". White bold "Portrait buyers." Teal "Landscape buyers." White "Same upload." Grey "Most sellers only ship one orientation. Half their buyers leave." Teal divider.

TWO FRAMED PANELS side by side (same botanical artwork, different crop):
LEFT frame, teal corner accents: artwork cropped 2:3 portrait. Teal badge "PORTRAIT" + "2:3 · 3:4 · 4:5". "Wall art buyers · US buyers". Stat "70 files".
RIGHT frame, purple corner accents: artwork cropped 3:2 landscape. Purple badge "LANDSCAPE" + "3:2 · 4:3 · 5:4". "Wide wall buyers · Panoramic". Stat "70 files".
Center: large teal "+" symbol.
Below: bold white "= 140 files." Grey "Both orientations. Every buyer covered."

STATS: Dark card teal border. "SnapToSize ships portrait AND landscape in every pack." Pills "140 files | 5 packs × 2 orientations | 300 DPI always."

FOOTER: "snaptosize.com" pill. "One upload. Two orientations. Zero extra steps."
Midnight blue. Teal=portrait, purple=landscape.""",
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
