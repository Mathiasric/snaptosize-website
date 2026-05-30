"""W23 Day 1 — Gemini gen — 2026-05-13
G1: etsy-review-proof (ny) — "When you stock every size, reviews write themselves."
G2: print-wall-quality (ny) — "300 DPI. The difference your buyers can see up close."
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
        "id": "W23-G1",
        "slug": "2026-05-13-etsy-review-proof-pinterest",
        "prompt": """Photorealistic marketing image, vertical 2:3 portrait format (1000×1500px).
Premium lifestyle photography. No faces visible. Warm, optimistic tone.

SCENE: Bright morning home office. White marble desk surface.
iPhone 15 Pro (Natural Titanium) lying flat on desk, screen visible.
Small white ceramic mug of coffee beside the phone (steam visible, morning light).
Soft daylight from a window upper left. Clean, minimal, no clutter.

IPHONE SCREEN — Etsy Seller Hub app, "Reviews" tab open:
  Header: "Reviews  ★ 4.9  (847 reviews)"
  Four most-recent review cards visible, each with 5 gold stars:

  Review 1 (topmost):
    Name: Sarah M. — Portland, OR
    Stars: ★★★★★
    Text: "Finally a seller who includes EVERY size! Ordered the 8×10 AND the 16×20 — both printed perfectly."
    Date: "2 days ago"

  Review 2:
    Name: Emma T. — London, UK
    Stars: ★★★★★
    Text: "The A4 and A3 sizes were exactly what I needed for my UK frames. Instant download, zero issues."
    Date: "4 days ago"

  Review 3:
    Name: Priya K. — Melbourne, AU
    Stars: ★★★★★
    Text: "Ordered the 4:5 ratio pack. Every size in one ZIP. Will be back for every new design."
    Date: "5 days ago"

  Review 4:
    Name: Jordan L. — Chicago, IL
    Stars: ★★★★★
    Text: "Best Etsy digital shop I've found. Has both 2:3 AND ISO sizes. Covers literally every frame."
    Date: "1 week ago"

OVERLAY TEXT (top 18% of image, above the phone):
  White background bar or semi-transparent light card:
  Large dark text (70pt bold): "When you stock every size,"
  Large teal italic text (#2DD4BF, 70pt): "reviews write themselves."

BOTTOM 10%: Dark rounded pill centered on marble surface:
  "app.snaptosize.com · free to start"
  Background: #0F0F0F, text: white, subtle teal glow.

Style: Apple product photography meets lifestyle brand. Ultra-sharp iPhone screen with pixel-perfect Etsy UI.
Morning light — warm, soft, optimistic. Off-white marble with fine veining. No harsh shadows.
Phone screen brighter than surroundings — natural screen glow effect.""",
        "fallback": """Tall 2:3 Pinterest pin. Bright morning. iPhone 15 Pro on white marble desk, Etsy Seller Hub Reviews tab showing 4×5-star reviews mentioning specific sizes (8x10, A4, 4:5 ratio, ISO). Reviews from Portland/London/Melbourne/Chicago. Top headline: "When you stock every size," (dark) + "reviews write themselves." (teal italic). Bottom dark pill: "app.snaptosize.com · free to start". Coffee mug beside phone. Clean minimal lifestyle.""",
    },
    {
        "id": "W23-G2",
        "slug": "2026-05-13-print-wall-quality-pinterest",
        "prompt": """Photorealistic marketing image, vertical 2:3 portrait format (1000×1500px).
Fine art photography meets product marketing. No faces. Premium aesthetic.

SCENE: Extreme close-up / macro shot of a framed botanical wall print.
A white matte frame on a bright white wall. The frame contains a pastel wildflower botanical print.
Camera is very close — we can see the paper texture and ink quality in sharp detail.
The print is strikingly sharp and crisp — fine botanical illustration lines clearly visible.
Soft natural sidelight from left, creating subtle depth on the paper surface.

THE PRINT DETAIL:
  Botanical illustration — delicate wildflowers (lavender, small white daisies, botanical stems).
  Colors: muted sage, dusty rose, warm cream, deep sage green.
  Lines are razor-sharp — individual pen strokes visible at this close distance.
  Paper texture is premium — slight tooth visible, matte finish, warm white.
  No pixelation, no banding, no soft edges — ultra-high-resolution print.
  A small printed label below the art area shows: "300 DPI · JPG · Printed A4"

OVERLAY TEXT (top 20% of image — can overlap slightly with frame edge):
  Large bold white text with dark shadow: "300 DPI."
  Teal (#2DD4BF) bold text below: "The difference your buyers can see up close."
  Small grey text: "Low-res files get refund requests. 300 DPI doesn't."

A small teal badge in upper-right corner of the image:
  Rounded pill, teal background, dark text: "300 DPI STANDARD"

BOTTOM 10%: Teal rounded pill on white/light background:
  "app.snaptosize.com · Every export at 300 DPI"
  Teal background, dark text.

Style: Fine art / product photography. Macro lens depth-of-field — center of print tack-sharp, edges of frame slightly soft.
Warm white wall. Premium matte white frame. Botanical illustration with hand-drawn quality.
No text overlaid by software — all text is organic part of the composition or printed on the label.""",
        "fallback": """Tall 2:3 Pinterest pin. Macro close-up of framed wildflower botanical print on white wall. Ultra-sharp 300 DPI detail visible — crisp lines, fine illustration detail, premium paper texture. White matte frame. Top overlay text: "300 DPI." (white bold) + "The difference your buyers can see up close." (teal). Small teal badge: "300 DPI STANDARD". Bottom teal pill: "app.snaptosize.com · Every export at 300 DPI". Soft natural sidelight, fine art photography aesthetic.""",
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
        print("  WARN: ingen bilde i respons — prøver fallback")
        return False
    except Exception as e:
        print(f"  ERROR: {e} — prøver fallback")
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
