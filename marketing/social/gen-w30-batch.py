"""
W30 Pinterest batch — 3 pins Jul 14-16 2026
Basert på analytics: reference/guide-format vinner (47 impr #1),
IKEA Ribba er høysøkt, stats-format ikke brukt siden W19 (april).

Konsepter:
  W30-REF01: IKEA Ribba exact sizes (reference guide #1 tema)
  W30-STAT01: Stats pin — "4 av 5 buyers" (stats-visual format, lenge tilgjengelig)
  W30-REF02: Home office / A4 + Letter sizes (ukjent romtype, høyt søkevolum på A4)

Kjør: py marketing/social/gen-w30-batch.py
"""
import os, sys, json, re, time
from pathlib import Path
from datetime import date
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[2]
load_dotenv(ROOT / ".env.local")

try:
    import google.genai as genai
    from google.genai import types as gtypes
    MODEL = "gemini-3-pro-image-preview"
except ImportError:
    print("pip install google-genai")
    sys.exit(1)

GEMINI_KEY = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_AI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
if not GEMINI_KEY:
    print("Mangler GEMINI_API_KEY i .env.local")
    sys.exit(1)

client = genai.Client(api_key=GEMINI_KEY)
CONTENT = ROOT / "marketing" / "social" / "content" / "pinterest"
TODAY = date.today().strftime("%Y-%m-%d")

PINS = [
    {
        "id": "W30-REF01",
        "slug": "2026-07-14-ikea-ribba-print-sizes-pinterest",
        "board": "print-size-guides",
        "scheduled_for": "2026-07-14T07:00:00Z",
        "title": "IKEA Ribba Frames — Exact Print Sizes for Every Listing",
        "description": (
            "Selling prints on Etsy? IKEA Ribba frames are the #1 reason buyers contact sellers about sizes. "
            "Here are the exact print dimensions for every Ribba frame size — 20×25cm, 30×40cm, 40×50cm, 50×70cm. "
            "One upload to SnapToSize generates every ISO and inch size automatically. "
            "→ snaptosize.com — free to try, no card needed."
        ),
        "alt_text": "IKEA Ribba frame sizes guide for Etsy digital print sellers — exact dimensions",
        "link": "https://snaptosize.com?utm_source=pinterest&utm_medium=organic&utm_campaign=w30-ikea-ribba",
        "prompt": """A polished Pinterest-format 2:3 portrait marketing graphic (1000×1500px) for Etsy digital print sellers.
Photorealistic, editorial quality.

COMPOSITION — three distinct horizontal zones:

TOP ZONE (top 35%): Rich deep charcoal-navy background (#0A0C14).
Bold clean white sans-serif headline in two lines:
Line 1 (very large, 80pt weight): "IKEA RIBBA FRAMES"
Line 2 (medium, 36pt, slightly muted white): "Exact Print Sizes — Save This"
Underneath: a thin horizontal teal (#2DD4BF) separator line, full width.

MIDDLE ZONE (35%): A realistic flat-lay or soft 3D-style overhead view of three white minimal picture frames (IKEA Ribba style — thin white flat frame, no glass glare) arranged in a loose L-shape cluster on a very dark linen-textured surface.
Frame sizes visually proportional: small portrait (21×30cm feel), medium portrait (30×40cm feel), large portrait (50×70cm feel).
Inside each frame: minimal Scandinavian art print —
  Frame 1 (small): thin black botanical line drawing of a single stem
  Frame 2 (medium): soft cream-and-sand abstract watercolor wash, single brushstroke
  Frame 3 (large): minimal single-line face portrait in graphite
Floating next to each frame: a small teal (#2DD4BF) pill badge with white text showing the frame size label:
  → "20×25 cm" (next to small frame)
  → "30×40 cm" (next to medium frame)
  → "50×70 cm" (next to large frame)
Soft dramatic side lighting from upper left. No harsh shadows. Warm-neutral dark background continues behind frames.

BOTTOM ZONE (30%): Back to deep charcoal-navy background.
Three clean rows of white text (tabular feel, left-aligned with consistent spacing):
Row 1: white dot • "20×25 cm frame → 8×10 in print"
Row 2: white dot • "30×40 cm frame → 12×16 in print"
Row 3: white dot • "50×70 cm frame → 20×28 in print"
Each row: left label in muted white, right value in bright teal (#2DD4BF).
Very bottom: small centered teal text "snaptosize.com — every size, one upload"

OVERALL FEEL: Dark, editorial, authoritative. Like a well-designed design studio reference card.
High contrast, zero clutter. The type is clean and readable at Pinterest thumbnail size (200×300px).
No decorative borders, no gradients that obscure text, no hand-drawn elements.
Photorealistic frames, everything else flat graphic design.""",
    },
    {
        "id": "W30-STAT01",
        "slug": "2026-07-15-4-in-5-buyers-wrong-size-pinterest",
        "board": "seller-tools",
        "scheduled_for": "2026-07-15T07:00:00Z",
        "title": "4 in 5 Print Buyers Need a Size Your Etsy Listing Doesn't Have",
        "description": (
            "Research shows 80% of print buyers search for sizes most Etsy sellers don't list. "
            "Standard US frames (8×10, 11×14, 16×20), European A-series (A4, A3, A2), and square sizes — "
            "most shops cover 3-4. SnapToSize generates all 70 from one upload. "
            "→ snaptosize.com — try free, no card required."
        ),
        "alt_text": "Stats: 4 in 5 print buyers need a size most Etsy sellers don't list",
        "link": "https://snaptosize.com?utm_source=pinterest&utm_medium=organic&utm_campaign=w30-stats",
        "prompt": """A bold Pinterest-format 2:3 portrait data visualization pin (1000×1500px) for Etsy print sellers.
Photorealistic product photography meets clean graphic design. Very impactful.

COMPOSITION — dramatic two-zone layout:

TOP ZONE (top 55%): Almost-black background (#080A10).
This zone is dominated by a single HUGE number:

Center of frame: The number "4 in 5" rendered in massive, clean white sans-serif (think 200pt Helvetica Neue Bold).
"4 in 5" takes up most of the width — the "4" slightly teal-tinted (#2DD4BF), "in 5" pure white.
Directly below the big number, a single line in medium white text (40pt):
"buyers need a size you don't list"
Below that, a thin teal (#2DD4BF) horizontal rule.

Left side: a subtle vertical stack of 5 small square icons (like app tiles), rendered in flat minimal style:
  4 of them lit/colored (bright teal or white) = buyers
  1 of them greyed out/dark = the one you actually serve
This is a simple visual metaphor for "4 out of 5". Keep it minimal.

BOTTOM ZONE (45%): Slightly warmer very-dark background.
Center: a MacBook Air (Midnight color, realistic) open on a dark desk, screen showing a clean SnapToSize interface with 5 labeled pack cards: "2:3 Pack", "4:5 Pack", "Square Pack", "ISO Pack", "Extras Pack".
The screen is the light source — soft blue-white glow illuminates the dark desk surface.
Around the laptop, very minimal props: a small potted succulent (left), a white ceramic mug with steam (right). No clutter.

On the dark area between laptop and bottom edge:
Clean white text (30pt): "One upload. 70 sizes. Every buyer covered."
Very bottom: small teal text "→ Try free: snaptosize.com"

OVERALL: High impact, scrollstopping. The "4 in 5" stat should dominate the frame immediately.
Dark, dramatic, professional. Zero noise. The stat is the hero.
Photorealistic laptop. Everything else graphic/flat. No stock-photo-feeling fake diversity shots.""",
    },
    {
        "id": "W30-REF02",
        "slug": "2026-07-16-home-office-art-sizes-pinterest",
        "board": "print-size-guides",
        "scheduled_for": "2026-07-16T07:00:00Z",
        "title": "Home Office Wall Art Sizes — A4, Letter, and Square Prints That Fit",
        "description": (
            "Home office wall art has specific sizing needs — A4 (21×29.7cm) for European frames, "
            "8.5×11in Letter for US standard frames, and square prints for floating shelves and ledges. "
            "SnapToSize generates all three orientations from one upload — portrait, landscape, and square. "
            "→ snaptosize.com — free to try."
        ),
        "alt_text": "Home office wall art print sizes guide — A4, letter, and square for Etsy sellers",
        "link": "https://snaptosize.com?utm_source=pinterest&utm_medium=organic&utm_campaign=w30-home-office",
        "prompt": """A warm, editorial Pinterest 2:3 portrait lifestyle pin (1000×1500px) for Etsy digital print sellers.
Photorealistic interior photography style. Aspirational home office aesthetic.

SCENE: A beautifully styled minimal home office corner.
Wall: Warm white or very light warm grey plaster wall.
On the wall: A small gallery arrangement of THREE framed prints in thin black or white minimal frames:
  Left frame: portrait orientation (A4 size, 21×30cm feel) — contains a minimal abstract ink brushstroke print in charcoal
  Center frame (slightly larger): landscape orientation (Letter/A4 landscape) — contains a clean typographic print: single word "CREATE" in large minimal serif, warm cream background
  Right frame: perfect square (20×20cm feel) — contains a simple botanical circle illustration, warm sage green
The frames are arranged in a horizontal cluster with slight height variation (not perfectly aligned — natural gallery wall feel).

Below the frames on the wall, a floating text overlay rendered as if part of the image:
Top: small white label on dark pill background: "HOME OFFICE SIZES GUIDE"
Three clean lines below the label (white text, dark semi-transparent rounded background):
  "A4 — 21×29.7 cm (Europe)"
  "Letter — 8.5×11 in (US)"
  "Square — 20×20 cm (shelves)"
Each line has a small teal (#2DD4BF) dot prefix.

Below the wall: The top of a real wooden desk surface visible. On the desk: an open MacBook (silver/white), a small white ceramic vase with a single dried pampas grass stem, and a clean spiral notebook. Natural light from a window off-left. No harsh shadows.

BOTTOM STRIP (bottom 20%): Dark charcoal overlay with white text:
"One upload → every format covered"
Teal text: "snaptosize.com"

MOOD: Calm, aspirational, Scandi-hygge. Bright and airy — contrast to the dark pins above.
This pin should feel like a Pinterest home decor save, not a tech product ad.
The product mention is subtle — the lifestyle IS the message.
High resolution, photorealistic, sharp details on the frames and art.""",
    },
]

def sanitize(text: str) -> str:
    return re.sub(r'[^\w\-]', '_', text)[:80]

def generate_pin(pin: dict) -> bool:
    slug = pin["slug"]
    out_dir = CONTENT / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    out_img = out_dir / f"{slug}.jpg"

    if out_img.exists():
        print(f"  Allerede generert: {slug}")
        return True

    print(f"\n  Genererer {pin['id']}: {pin['title'][:60]}...")
    try:
        resp = client.models.generate_content(
            model=MODEL,
            contents=pin["prompt"],
            config=gtypes.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )
    except Exception as e:
        print(f"  ✗ Primær modell feilet: {e}")
        print("  Prøver imagen fallback...")
        try:
            resp = client.models.generate_content(
                model="gemini-2.0-flash-exp",
                contents=pin["prompt"],
                config=gtypes.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                ),
            )
        except Exception as e2:
            print(f"  ✗ Fallback feilet også: {e2}")
            return False

    img_data = None
    for part in resp.candidates[0].content.parts:
        if hasattr(part, "inline_data") and part.inline_data:
            img_data = part.inline_data.data
            break

    if not img_data:
        print(f"  ✗ Ingen bilde returnert")
        return False

    # Resize to 1000×1500 (Pinterest 2:3)
    try:
        from PIL import Image
        import io
        img = Image.open(io.BytesIO(img_data)).convert("RGB")
        img = img.resize((1000, 1500), Image.LANCZOS)
        img.save(out_img, "JPEG", quality=92)
    except ImportError:
        out_img.write_bytes(img_data)

    size_kb = out_img.stat().st_size // 1024
    print(f"  ✓ Bilde lagret: {out_img.name} ({size_kb}KB)")

    meta = {
        "id": pin["id"],
        "platform": "pinterest",
        "format": "image",
        "title": pin["title"],
        "description": pin["description"],
        "alt_text": pin["alt_text"],
        "link": pin["link"],
        "board": pin["board"],
        "scheduled_for": pin["scheduled_for"],
        "generated": TODAY,
        "prompt_id": pin["id"],
    }
    with open(out_dir / "metadata.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)
    print(f"  ✓ metadata.json lagret")
    return True

def main():
    print(f"W30 Pinterest Batch — {TODAY}")
    print("=" * 60)
    ok, fail = 0, []
    for pin in PINS:
        result = generate_pin(pin)
        if result:
            ok += 1
        else:
            fail.append(pin["id"])
        if pin != PINS[-1]:
            time.sleep(3)
    print("\n" + "=" * 60)
    print(f"Generert: {ok}/{len(PINS)}")
    if fail:
        print(f"Feilet: {fail}")
    if ok > 0:
        print("\nNeste steg:")
        print("  1. QA bildene i content/pinterest/2026-07-1*/")
        print("  2. py marketing/social/schedule-w30.py --dry-run")
        print("  3. py marketing/social/schedule-w30.py")

if __name__ == "__main__":
    main()
