"""W23 Day 9 — Gemini gen — 2026-05-20
G12: zip-too-big        — Your ZIP is too big for Etsy. Here's why — and the fix.
G13: canva-vs-snaptosize — Canva gives you one size. Your buyers need six.
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
        "id": "W23-G12",
        "slug": "2026-05-20-zip-too-big-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Dark charcoal-navy background. Etsy 20MB ZIP limit — the silent listing killer. No human faces or brand logos.

BACKGROUND: Deep dark navy (#0D1117). Editorial, urgent.

TOP HOOK (12%):
  Centered. Small red monospace badge: "ETSY FILE SIZE LIMIT"
  White ultra-bold headline (58pt, tight leading):
    "Etsy rejects ZIPs"
  Red bold continuation (52pt): "over 20MB."
  Grey subtext (18pt): "Most sellers don't know until a buyer complains."
  Thin red hairline divider below.

PROBLEM VISUAL (36%) — split panel:
  Dark red-tinted background card (#1A0808).
  Top: small red pill "WITHOUT SMART COMPRESSION"

  A file manager / ZIP inspector UI mock:
    - Large file icon: "AllSizes.zip"
    - Red file size badge: "47.3 MB"
    - Below: red warning banner "REJECTED — Etsy max file size is 20MB"
    - Three file rows inside zip (showing sample contents):
      "8x12_300dpi.jpg  4.2 MB"
      "16x24_300dpi.jpg  8.1 MB"
      "24x36_300dpi.jpg  11.4 MB  ← too large"
    - Red X icon overlay on zip file

  Below card: amber italic text "Buyer tries to download. Error. Refund request."

SOLUTION VISUAL (28%):
  Dark teal-tinted card (#081A18), teal 3px left border.
  Top: small teal pill "WITH SNAPTOSIZE"

  Clean ZIP output panel:
    - File icon: "SnapToSize_Export.zip"
    - Teal size badge: "18.6 MB ✓ under 20MB"
    - Green progress label: "Smart-compressed — 300 DPI preserved"
    - Three size rows with teal checks:
      "70 files across 5 packs ✓"
      "300 DPI — full quality ✓"
      "Under 20MB — Etsy-ready ✓"
  White bold: "Every size. Every buyer. No rejection."

STAT ROW (8%):
  Three dark pills: teal "70" + grey "files included" | teal "20MB" + grey "Etsy hard cap" | teal "300" + grey "DPI always"

CTA (8%):
  Teal pill full-width: "Try free — app.snaptosize.com"
  Grey footer: "snaptosize.com — free to start"

CRITICAL FACTS:
- Up to 70 files per upload
- Smart-compress keeps ZIP under 20MB (Etsy hard cap)
- 300 DPI always preserved
- URL: app.snaptosize.com

Style: Dark editorial, red for the problem, teal for the fix. Technical credibility — makes the stakes feel real.""",
        "fallback": """Dark editorial Pinterest pin, 2:3, 1000x1500px. Dark navy #0D1117.

TOP: Red badge "ETSY FILE SIZE LIMIT". White bold "Etsy rejects ZIPs" + red "over 20MB." + grey "Most sellers don't know until a buyer complains."

PROBLEM CARD (red-tint): "WITHOUT SMART COMPRESSION"
ZIP mock: "AllSizes.zip — 47.3 MB" + red "REJECTED — Etsy max file size is 20MB"
3 file rows showing large sizes. Red X overlay.
Amber: "Buyer tries to download. Error. Refund request."

SOLUTION CARD (teal-tint): "WITH SNAPTOSIZE"
ZIP mock: "SnapToSize_Export.zip — 18.6 MB ✓ under 20MB"
"70 files across 5 packs ✓ / 300 DPI preserved ✓ / Under 20MB Etsy-ready ✓"
White bold: "Every size. Every buyer. No rejection."

STATS: "70 files" + "20MB Etsy cap" + "300 DPI"
CTA: teal "Try free — app.snaptosize.com"

Dark editorial, red = problem, teal = fix.""",
    },
    {
        "id": "W23-G13",
        "slug": "2026-05-20-canva-vs-snaptosize-pinterest",
        "prompt": """Premium editorial Pinterest pin, vertical 2:3 portrait format, 1000x1500px. Clean cream editorial background. Canva vs SnapToSize — tool comparison for Etsy print sellers. No human faces, no logos of existing companies.

BACKGROUND: Warm cream (#FAFAF7). Editorial, clean.

TOP HOOK (12%):
  Dark pill badge: small monospace text "TOOL COMPARISON"
  Large bold dark headline (58pt, #1A1A1A):
    "Design tools export"
  Amber bold continuation (54pt): "one size."
  Grey subtext (18pt): "Your buyers need six. Here's the gap."
  Teal hairline divider.

COMPARISON TABLE (52%) — clean two-column table:

  COLUMN A header: dark grey pill "DESIGN TOOLS" (generic, not branded)
  COLUMN B header: teal pill "SNAPTOSIZE"

  7 rows, alternating light backgrounds:

  Row 1: "Export formats" | amber "1 ratio at a time" | teal "All 5 packs at once"
  Row 2: "Files per export" | amber "1 file" | teal "Up to 70 files"
  Row 3: "DPI control" | amber "72–150 DPI default" | teal "300 DPI always"
  Row 4: "Portrait + landscape" | amber "Manual, one by one" | teal "Auto-generated both"
  Row 5: "ISO A-series (EU)" | amber "Not included" | teal "A4, A3, A5 included"
  Row 6: "ZIP for Etsy" | amber "Manual file prep" | teal "Under 20MB auto"
  Row 7: "Time per listing" | amber "60–90 minutes" | teal "Under 5 minutes"

  Bottom of table: teal bold "SnapToSize is built for print sellers. Design tools aren't."

INSIGHT STRIP (20%):
  Dark card (#0F0F0F), teal left border:
  Small teal label: "THE MATH"
  White bold (20pt): "One upload → 70 files → 5 packs → Etsy-ready ZIP → done."
  Grey body: "2:3, 3:4, 4:5, ISO A-series, Extras. Portrait and landscape. 300 DPI."
  Teal pill: "Try free — app.snaptosize.com"

FOOTER (8%): "snaptosize.com — free to start"

CRITICAL FACTS:
- Up to 70 files per upload
- 5 packs: 2:3, 3:4, 4:5, ISO A-series, Extras
- 300 DPI always
- URL: app.snaptosize.com
- NEVER show 72 DPI as SnapToSize output

Style: Cream editorial, clean comparison table. Amber for design tool limitations, teal for SnapToSize benefits. Educational and shareable.""",
        "fallback": """Clean editorial Pinterest pin, 2:3, 1000x1500px. Cream background #FAFAF7.

TOP: Dark pill "TOOL COMPARISON". Bold "Design tools export" + amber "one size." + grey "Your buyers need six."

TWO-COLUMN TABLE:
Left: dark "DESIGN TOOLS" | Right: teal "SNAPTOSIZE"

7 rows:
Export formats: amber "1 ratio at a time" | teal "All 5 packs at once"
Files per export: amber "1 file" | teal "Up to 70 files"
DPI control: amber "72-150 DPI default" | teal "300 DPI always"
Portrait + landscape: amber "Manual, one by one" | teal "Auto-generated both"
ISO A-series: amber "Not included" | teal "A4, A3, A5 included"
ZIP for Etsy: amber "Manual file prep" | teal "Under 20MB auto"
Time per listing: amber "60-90 minutes" | teal "Under 5 minutes"

Teal: "SnapToSize is built for print sellers. Design tools aren't."

DARK CARD: "One upload -> 70 files -> 5 packs -> Etsy-ready ZIP -> done." + teal CTA

Cream editorial, amber = design tool limits, teal = SnapToSize wins.""",
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
