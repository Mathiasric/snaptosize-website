"""W29 Pinterest batch — nursery-sizes + canva-vs-snaptosize + gallery-wall-ratio — 2026-06-21

Strategy:
  W29-REF01: nursery-sizes — KONSEPT 14 Var D (new room type). Includes "Save this →" CTA
             text baked into the image — W29 save-rate experiment.
  W29-PAIN01: canva-vs-snaptosize — canva-limitation format (cooldown elapsed Jun 9).
              Pain→solution split comparison. Proven concept, new variation.
  W29-REF02: gallery-wall-ratio-guide — "Which ratio for a gallery wall?" KONSEPT 14 format.
             2:3, 4:5, 3:4 proportional boxes with bestseller highlight.
"""
import os, pathlib, io, json
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
    # ─────────────────────────────────────────────────────────────────────
    # W29-REF01 — nursery-sizes (KONSEPT 14 Var D + save-rate experiment)
    # Save-rate test: "📌 Save this →" baked into image
    # ─────────────────────────────────────────────────────────────────────
    {
        "id": "W29-REF01",
        "slug": "2026-07-07-nursery-sizes-pinterest",
        "title": "Nursery Wall Art Sizes — Every Size Parents Actually Buy",
        "description": (
            "Planning a nursery gallery wall? These are the exact print sizes that sell.\n\n"
            "→ 8×10\" — classic nursery frame ★ MOST SAVED\n"
            "→ 5×7\" — sweet accent size\n"
            "→ 11×14\" — statement piece above crib\n"
            "→ 4×6\" — detail accent\n"
            "→ 12×18\" — large feature print\n"
            "→ 16×20\" — gallery wall centerpiece\n\n"
            "All 300 DPI, Etsy-ready. One upload → every nursery size.\n\n"
            "Free → app.snaptosize.com"
        ),
        "board": "print-size-guides",
        "link": "https://snaptosize.com/etsy-print-sizes?utm_source=pinterest&utm_medium=organic&utm_campaign=nursery-sizes-w29",
        "tags": [
            "nursery wall art sizes", "nursery print sizes", "nursery gallery wall",
            "etsy print sizes", "nursery decor", "baby room wall art",
            "etsy digital downloads", "print size guide", "nursery wall art",
            "etsy seller tips"
        ],
        "scheduled_for": "2026-07-07T07:00:00Z",
        "prompt": """Create a Pinterest marketing pin (2:3 portrait, 1000×1500px) for Etsy digital print sellers.

DESIGN SYSTEM — KONSEPT 14 "Visual Size Reference Chart" (proven top performer):
• Background: very dark navy/near-black (#07091A)
• Accent color: teal (#2DD4BF) for bestseller highlight only
• Typography: bold white, sans-serif, tight tracking
• Layout: clean grid of proportional size boxes, no clutter

HEADER (top 15%):
  Small teal uppercase label: "NURSERY WALL ART"
  Large bold white headline (2 lines): "Every size\nparents actually buy."
  Thin teal divider line below

MAIN CONTENT — size grid (6 proportional cards, dark charcoal background #12142A, rounded corners):
  Each card shows: proportional white rectangle (actual visual ratio) + size label below in white
  Arrange in 2 columns × 3 rows:

  Row 1:
    Card 1 — 8×10" rectangle | white label "8 × 10"" | teal badge "★ MOST SAVED"
    Card 2 — 5×7" rectangle  | white label "5 × 7""

  Row 2:
    Card 3 — 11×14" rectangle | white label "11 × 14""
    Card 4 — 4×6" rectangle   | white label "4 × 6""

  Row 3:
    Card 5 — 12×18" rectangle | white label "12 × 18""
    Card 6 — 16×20" rectangle | white label "16 × 20""

SAVE CTA BAND (between main grid and footer — THIS IS THE KEY EXPERIMENT):
  Teal band spanning full width, slightly translucent
  Left side: "📌 Save this for your next listing" in dark text
  Right side: "→" arrow icon
  This tests whether in-image save prompts increase Pinterest save rate.

FOOTER (bottom 12%):
  Left: small white text "300 DPI · Print-ready · Etsy-sized"
  Right: teal text "snaptosize.com"
  Very bottom: tiny italic "Generate all sizes in one click"

STYLE: Magazine-quality editorial. No lifestyle photography. Pure type + geometry.
Dark background (#07091A). Teal only on ★ badge and save band. All other text white.
NO product mockups, NO Gemini watermarks, NO people.""",
    },

    # ─────────────────────────────────────────────────────────────────────
    # W29-PAIN01 — canva-vs-snaptosize (cooldown elapsed since Jun 9)
    # Split-screen comparison, pain → solution
    # ─────────────────────────────────────────────────────────────────────
    {
        "id": "W29-PAIN01",
        "slug": "2026-07-08-canva-vs-snaptosize-pinterest",
        "title": "Canva vs SnapToSize — Why Resizing in Canva Costs You Etsy Sales",
        "description": (
            "Resizing in Canva = resizing one file at a time.\n\n"
            "SnapToSize = 1 upload → 30+ print-ready files for every ratio.\n\n"
            "Canva can't:\n"
            "✗ Export Etsy print packs (2:3, 3:4, 4:5, ISO, Common)\n"
            "✗ Maintain 300 DPI across all sizes\n"
            "✗ Keep files under Etsy's 20MB limit automatically\n\n"
            "SnapToSize does all three in 60 seconds.\n\n"
            "Free → app.snaptosize.com"
        ),
        "board": "seller-tools",
        "link": "https://snaptosize.com?utm_source=pinterest&utm_medium=organic&utm_campaign=canva-vs-snaptosize-w29",
        "tags": [
            "canva vs snaptosize", "etsy seller tools", "resize images for etsy",
            "etsy digital downloads", "etsy print sizes", "etsy seller tips",
            "canva alternative", "digital print workflow", "etsy shop tips",
            "print on demand etsy"
        ],
        "scheduled_for": "2026-07-08T07:00:00Z",
        "prompt": """Create a Pinterest marketing pin (2:3 portrait, 1000×1500px) for Etsy digital print sellers.

LAYOUT: Clean split-screen comparison (left vs right, vertical divider in center)

HEADER (top 12%, dark navy #07091A background):
  Bold white headline: "Stop resizing"
  Teal (#2DD4BF) accent word on second line: "one file at a time."
  Small white subtext: "The tool you're missing"

LEFT PANEL (44% width, dark charcoal #1A1C2E background):
  Top label: "CANVA" in muted grey uppercase, small
  Content (stacked, muted/desaturated):
    → Illustration of a resize dialog box with ONE file
    → Small muted text list:
      "✗ Resize one size at a time"
      "✗ No Etsy pack format"
      "✗ DPI not guaranteed"
      "✗ Manual export for each ratio"
    → Bottom badge: "Hours of work" in amber/orange text

CENTER DIVIDER:
  Thin vertical line (30% opacity white)
  Center badge floating on divider: "VS" in white circle on dark background

RIGHT PANEL (44% width, slightly lighter dark #12142A background):
  Top label: "SNAPTOSIZE" in teal uppercase, small
  Content (bright, high contrast):
    → Illustration of 5 clean ZIP pack icons side by side (2:3 · 3:4 · 4:5 · ISO · Common)
    → Teal text list:
      "✓ 1 upload"
      "✓ 30+ files generated"
      "✓ 300 DPI guaranteed"
      "✓ Every ratio packed"
    → Bottom badge: "60 seconds" in teal text, larger

FOOTER (dark navy, bottom 12%):
  White text: "One upload. Every size your buyers need."
  Teal: "snaptosize.com · Free to start"

STYLE: Dark professional editorial. Teal (#2DD4BF) only on SnapToSize side highlights.
Left side muted/grey tone to show friction. Right side clean and bright to show solution.
NO people, NO lifestyle photos, NO Gemini watermarks.""",
    },

    # ─────────────────────────────────────────────────────────────────────
    # W29-REF02 — gallery-wall-ratio-guide (KONSEPT 14 format, new angle)
    # "Which ratio for a gallery wall?" — reference content = high save intent
    # ─────────────────────────────────────────────────────────────────────
    {
        "id": "W29-REF02",
        "slug": "2026-07-09-gallery-wall-ratio-guide-pinterest",
        "title": "Gallery Wall Print Ratios — Which Ratio for Every Frame Size",
        "description": (
            "Confused by print ratios for your gallery wall? Here's the cheat sheet.\n\n"
            "2:3 ratio → 4×6, 8×12, 12×18, 20×30\n"
            "4:5 ratio → 8×10★, 16×20, 24×30 ← MOST COMMON FRAME\n"
            "3:4 ratio → 6×8, 9×12, 12×16, 18×24\n"
            "1:1 ratio → square frames (10×10, 12×12)\n\n"
            "The 8×10 (4:5) is in 60%+ of homes. Always include it.\n\n"
            "SnapToSize generates all ratios from one upload — 60 seconds.\n"
            "Free → app.snaptosize.com"
        ),
        "board": "print-size-guides",
        "link": "https://snaptosize.com/etsy-print-ratios?utm_source=pinterest&utm_medium=organic&utm_campaign=gallery-wall-ratio-guide-w29",
        "tags": [
            "gallery wall print ratios", "print aspect ratios", "etsy print sizes",
            "gallery wall sizes", "wall art ratios", "etsy digital downloads",
            "print size guide", "gallery wall ideas", "etsy seller tips",
            "digital print ratios"
        ],
        "scheduled_for": "2026-07-09T07:00:00Z",
        "prompt": """Create a Pinterest marketing pin (2:3 portrait, 1000×1500px) for Etsy digital print sellers.

DESIGN SYSTEM — KONSEPT 14 "Visual Ratio Reference Chart":
• Background: very dark navy (#07091A)
• Accent color: teal (#2DD4BF) for 4:5 ratio only (most common frame)
• Typography: bold white sans-serif, tight tracking
• Layout: 4 ratio sections, each with proportional visual boxes

HEADER (top 13%):
  Small teal uppercase label: "GALLERY WALL GUIDE"
  Large bold white headline (2 lines): "Which ratio\nfits which frame?"
  Thin teal divider line

MAIN CONTENT — 4 ratio rows (dark charcoal #12142A cards, full width, rounded):

ROW 1 — 2:3 RATIO (regular white styling):
  Left: tall narrow white rectangle showing 2:3 proportions
  Right side text:
    "2 : 3" in large white bold
    Sizes below in small grey: "4×6   8×12   12×18   20×30"
    Tag: "Classic portrait format"

ROW 2 — 4:5 RATIO (TEAL HIGHLIGHT — most important):
  Teal left border (4px)
  Left: white rectangle showing 4:5 proportions (squarish portrait)
  Right side text:
    "4 : 5" in large teal bold
    Sizes below in white: "8×10   16×20   24×30"
    Teal badge: "★ In 60%+ of homes"
    Small italic: "The most common US frame size"

ROW 3 — 3:4 RATIO (regular white styling):
  Left: white rectangle showing 3:4 proportions
  Right side text:
    "3 : 4" in large white bold
    Sizes below in small grey: "6×8   9×12   12×16   18×24"
    Tag: "IKEA Ribba frames"

ROW 4 — 1:1 RATIO (regular white styling):
  Left: white square showing 1:1 proportions
  Right side text:
    "1 : 1" in large white bold
    Sizes below in small grey: "8×8   10×10   12×12"
    Tag: "Square accent frames"

BOTTOM CALLOUT BOX (teal border, dark background):
  "SnapToSize generates all 4 ratios from 1 upload — 60 seconds."
  "snaptosize.com · Free to start"

FOOTER (bottom 8%):
  Small white text: "Print ratio guide for Etsy digital sellers"
  Right: teal "snaptosize.com"

STYLE: Educational reference chart. Clean, dark, professional.
Teal ONLY on 4:5 row. No lifestyle photos, no people, no Gemini watermarks.""",
    },
]


def write_metadata(pin: dict, slug: str):
    meta_dir = BASE / f"content/pinterest/{slug}"
    meta_dir.mkdir(parents=True, exist_ok=True)
    meta_path = meta_dir / "metadata.json"
    metadata = {
        "id": pin["id"],
        "platform": "pinterest",
        "type": "pin",
        "concept_id": slug.split("-", 3)[-1].replace("-pinterest", ""),
        "image": f"{slug}.png",
        "title": pin["title"],
        "description": pin["description"],
        "board": pin["board"],
        "link": pin["link"],
        "tags": pin["tags"],
        "created": "2026-06-21",
        "scheduled_for": pin["scheduled_for"],
    }
    meta_path.write_text(json.dumps(metadata, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"  ✓ Metadata: {meta_path}")


def generate(pin: dict) -> bool:
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"\n{'='*60}")
    print(f"Generating {pin['id']} — {slug}")
    print(f"{'='*60}")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=pin["prompt"],
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
            ),
        )
        for part in response.candidates[0].content.parts:
            if hasattr(part, "inline_data") and part.inline_data and part.inline_data.mime_type.startswith("image/"):
                img = Image.open(io.BytesIO(part.inline_data.data))
                img = img.resize((1000, 1500), Image.LANCZOS)
                out_path.parent.mkdir(parents=True, exist_ok=True)
                img.save(str(out_path), "PNG")
                jpg_path = out_path.with_suffix(".jpg")
                img.save(str(jpg_path), "JPEG", quality=92)
                write_metadata(pin, slug)
                print(f"  ✓ Saved: {out_path}")
                return True
        print("  WARN: no image in response — trying fallback model")
        return False
    except Exception as e:
        print(f"  ERROR: {e}")
        return False


def generate_fallback(pin: dict) -> bool:
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"  Fallback: gemini-2.0-flash-preview-image-generation")
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-preview-image-generation",
            contents=pin["prompt"],
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
            ),
        )
        for part in response.candidates[0].content.parts:
            if hasattr(part, "inline_data") and part.inline_data and part.inline_data.mime_type.startswith("image/"):
                img = Image.open(io.BytesIO(part.inline_data.data))
                img = img.resize((1000, 1500), Image.LANCZOS)
                out_path.parent.mkdir(parents=True, exist_ok=True)
                img.save(str(out_path), "PNG")
                jpg_path = out_path.with_suffix(".jpg")
                img.save(str(jpg_path), "JPEG", quality=92)
                write_metadata(pin, slug)
                print(f"  ✓ Fallback saved: {out_path}")
                return True
        return False
    except Exception as e:
        print(f"  Fallback ERROR: {e}")
        return False


if __name__ == "__main__":
    print("W29 Pinterest Batch — 3 pins")
    print("=" * 60)
    ok, fail = [], []
    for pin in PINS:
        success = generate(pin)
        if not success:
            success = generate_fallback(pin)
        (ok if success else fail).append(pin["id"])

    print(f"\n{'='*60}")
    print(f"Done: {len(ok)}/{len(PINS)} generated")
    if fail:
        print(f"Failed: {fail}")
    if ok:
        print(f"\nNeste steg:")
        print(f"  QA: les bildene med Claude Read")
        print(f"  Schedule: py marketing/social/schedule-w29.py --dry-run")
