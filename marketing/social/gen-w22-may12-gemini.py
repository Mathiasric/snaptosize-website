"""W22 Day 4 — Gemini gen — 2026-05-12
G1: en-til-mange variation B — "1 upload. Every size she'll ever frame." (sage linen flat-lay, wildflower botanical fan reveal)
G2: canva-limitation (ny konsept) — "Canva resizes. SnapToSize exports every Etsy size."
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
        "id": "W22-G1",
        "slug": "2026-05-12-one-upload-five-packs-pinterest",
        "prompt": """Photorealistic marketing image, vertical 2:3 portrait format (1000×1500px).
High-end lifestyle photography meets product marketing. No faces. No visible people.

SCENE: Top-down flat-lay on warm sage-cream linen surface (fine fabric texture, soft grain).
Afternoon golden light from upper left. Minimal Scandi-calm editorial aesthetic. Clean and airy.

CENTER COMPOSITION:
One MacBook Air (Midnight colorway) open, centered near top of frame.
Laptop screen shows app.snaptosize.com upload interface:
  Status: "Wildflower Botanical — upload complete"
  Teal progress bar: full, 100%
  Small text: "Processing 5 ratio packs..."

From the bottom of the laptop, five rectangular print-sized cards fan outward in a natural hand-of-cards spread toward the lower edge of the image:
  Card 1 (largest, tallest): "2:3 Ratio Pack  ·  7 sizes" — teal top strip, white card
  Card 2 (slightly smaller): "3:4 Ratio Pack  ·  5 sizes" — teal top strip, white card
  Card 3 (medium): "4:5 Ratio Pack  ·  5 sizes" — teal top strip, white card
  Card 4 (square proportions): "ISO A-Series  ·  5 sizes" — teal top strip, white card
  Card 5 (smallest): "Extras Pack  ·  6 sizes" — teal top strip, white card
Cards have clean sans-serif text, subtle drop shadows, slightly overlapping fan layout.
Each card shows a small wildflower botanical thumbnail in the corner.
Cards fan naturally to lower-right. Realistic paper and card materials.

TOP 15%: Off-white card/banner at top of image:
  Line 1 (charcoal #0F0F0F, 70pt bold): "1 upload."
  Line 2 (teal #2DD4BF, 70pt bold italic): "Every size she'll ever frame."
  Small grey text below (16pt): "5 ratio packs · 28 sizes · 300 DPI · Etsy-ready ZIP"

BOTTOM 10%: Centered dark rounded pill (#0F0F0F background, white text):
  "app.snaptosize.com · free to start"
  Subtle teal glow around pill.

Style: Apple product lifestyle photography + editorial print catalogue aesthetic.
Sage-cream linen texture throughout. Warm golden afternoon light. Shallow depth of field.
Color palette: cream #FAF9F6, sage accents, teal #2DD4BF, charcoal #0F0F0F.
Ultra-realistic: actual linen fabric weave visible, MacBook aluminum edge reflections.
No clutter. No other objects. Just the laptop and the five cards fanning out.""",
        "fallback": """Tall 2:3 Pinterest pin. Sage linen flat-lay top-down view. MacBook Air (Midnight) showing SnapToSize upload complete screen. Five white cards with teal top strip fan out below the laptop: "2:3 Ratio Pack · 7 sizes", "3:4 Ratio Pack · 5 sizes", "4:5 Ratio Pack · 5 sizes", "ISO A-Series · 5 sizes", "Extras Pack · 6 sizes". Bold top headline: "1 upload." and teal italic "Every size she'll ever frame." Footer: dark pill "app.snaptosize.com · free to start". Warm afternoon light, Scandi minimal editorial.""",
    },
    {
        "id": "W22-G2",
        "slug": "2026-05-12-canva-vs-snaptosize-pinterest",
        "prompt": """Photorealistic marketing image, vertical 2:3 portrait format (1000×1500px).
Bold editorial software comparison ad. Premium tech brand aesthetic. No faces. No people.

TOP 18%: Full-width dark card (#0F0F0F), centered text:
  Line 1 (white, 54pt bold condensed): "Canva resizes."
  Line 2 (teal #2DD4BF, 54pt bold condensed): "SnapToSize exports every Etsy size."
  Line 3 (grey #9CA3AF, 16pt): "Not the same thing."

CENTER 62%: Clean white studio desk. A widescreen monitor showing a vertically split interface.
Monitor is slightly angled (3/4 view), sharp and realistic. Screen has natural glass reflection.

  LEFT HALF of monitor screen — labeled "Canva" at top (Canva purple/violet brand color):
    Canva "Resize" dialog box centered on a purple/light background
    Dialog shows limited resize options:
      "Instagram Post  1080×1080px"
      "Facebook Cover  820×312px"
      "Presentation  1920×1080px"
      "Custom size..."
    Below dialog: A4 document visible behind it
    Small grey italic text below dialog: "Only resizes. Doesn't know Etsy print ratios."
    Bottom strip label: grey text "1 format exported"

  RIGHT HALF of monitor screen — labeled "SnapToSize" at top (teal color):
    Dark mode interface (#0B0B12 background)
    Export complete dashboard showing 5 completed pack rows with teal checkmarks:
      "✓  2:3 Ratio Pack    7 sizes  ·  300 DPI"
      "✓  3:4 Ratio Pack    5 sizes  ·  300 DPI"
      "✓  4:5 Ratio Pack    5 sizes  ·  300 DPI"
      "✓  ISO A-Series      5 sizes  ·  300 DPI"
      "✓  Extras Pack       6 sizes  ·  300 DPI"
    Below rows: bold teal text "28 sizes · 70 files · Etsy-ready ZIP"
    Large teal "Download all packs →" button
    Bottom strip label: teal text "28 sizes exported · all ratios covered"

  Sharp vertical divider line between left and right halves.
  Monitor sits on white desk. Clean keyboard partially visible at very bottom edge.

BOTTOM 20%: Teal card (#2DD4BF background):
  Large dark text (#0F0F0F, 32pt bold): "Your buyers need specific sizes."
  Subtext (dark, 18pt): "Give them all. One upload → 5 packs → 28 sizes."
  Small dark text (14pt): "300 DPI JPG · Etsy-ready · No Photoshop"
  Dark rounded pill button on the right: "Try free → app.snaptosize.com"

Style: Clean premium tech ad. Apple/Figma/Linear aesthetic. High contrast.
Desk: matte white. Monitor: thin-bezel, modern. Both interfaces pixel-perfect.
Ambient lighting: soft diffused studio light, no harsh shadows.""",
        "fallback": """Tall 2:3 Pinterest pin. Top dark header: "Canva resizes." (white bold) + "SnapToSize exports every Etsy size." (teal bold) + "Not the same thing." (grey). Center: widescreen monitor showing vertical split — left half labeled Canva in purple with limited resize dialog (Instagram/Facebook options only, "1 format"), right half labeled SnapToSize in teal showing dark mode dashboard with 5 checkmarked packs: 2:3/3:4/4:5/ISO/Extras, "28 sizes · 70 files · 300 DPI". Bottom teal card: "Your buyers need specific sizes. Give them all." + dark pill "Try free → app.snaptosize.com". Clean studio desk, sharp UI.""",
    },
]


def generate(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"\nGenerating {pin['id']} — {slug} …")
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
        print("  WARN: ingen bilde i respons — prøver fallback")
        return False
    except Exception as e:
        print(f"  ERROR: {e} — prøver fallback")
        return False


def generate_fallback(pin):
    slug = pin["slug"]
    out_path = BASE / f"content/pinterest/{slug}/{slug}.png"
    print(f"  Fallback for {pin['id']} …")
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
    print(f"  WARN: fallback også tom for {pin['id']}")
    return False


if __name__ == "__main__":
    for pin in PINS:
        ok = generate(pin)
        if not ok:
            generate_fallback(pin)
    print("\nDone.")
