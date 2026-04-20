"""W18b Gemini batch — 2026-04-20
Pinterest pins — bruker gemini-3-pro-image-preview (generate_content + IMAGE modality).
P04: Stats-visual "1 fil → 70 filer" (bold typografi, ingen AI-pikselering-trøbbel)
P05: One-upload UI mockup
"""
import os
import io
from pathlib import Path
from PIL import Image
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / ".env.local")
from google import genai
from google.genai import types

API_KEY = os.environ.get("GOOGLE_API_KEY")
client = genai.Client(api_key=API_KEY)

BASE = Path("C:/dev/snaptosize-website/marketing/social/content/pinterest")
TARGET_W, TARGET_H = 1000, 1500

PINS = [
    {
        "id": "W18-P04",
        "folder": "2026-04-20-300dpi-quality",
        "prompt": (
            "Clean graphic design marketing image, vertical portrait format 2:3. "
            "Dark background (#0B0B12), premium SaaS ad aesthetic. "
            "TOP 15%: Small teal text (#2DD4BF) monospace font: 'app.snaptosize.com' "
            "with a thin teal horizontal line underneath. "
            "CENTER 55%: Bold typographic hierarchy, perfectly centered: "
            "Very large bold white text: '1 file' "
            "Large teal arrow below pointing down: '↓' "
            "Very large bold teal text (#2DD4BF): '70 files' "
            "Smaller grey text below: '5 ratio packs · 300 DPI · Etsy-ready · No Photoshop' "
            "LOWER 20%: Three dark stat cards side by side with teal accent borders: "
            "Card 1: large teal number '5', small grey label 'ratio packs' "
            "Card 2: large white number '70', small grey label 'total files' "
            "Card 3: large teal number '300', small grey label 'DPI guaranteed' "
            "BOTTOM 10%: Rounded teal pill button, white bold text: "
            "'Try free · app.snaptosize.com' with subtle teal glow. "
            "Clean, bold, high-contrast. No photos, no people. Looks like a premium SaaS ad."
        ),
    },
    {
        "id": "W18-P05",
        "folder": "2026-04-20-one-upload-everywhere",
        "prompt": (
            "Photorealistic product marketing image, vertical portrait format 2:3. "
            "Clean white background, Apple product-shoot minimal aesthetic. "
            "TOP 18%: Dark navy bar (#0B0B12). "
            "Bold white text large: 'Upload once.' "
            "Bold teal text (#2DD4BF) large: '70 files ready.' "
            "Smaller grey text: '5 ratio packs · 300 DPI · Etsy-ready' "
            "MIDDLE 65%: Centered MacBook Air, open, browser showing app.snaptosize.com. "
            "Interface: file 'botanical_print.png' in upload zone, green progress bar 100%, "
            "screen text: 'Your 70 files are ready to download'. "
            "5 crisp white ZIP folder cards fan upward from laptop, teal ZIP icons: "
            "'2:3 Pack — 7 files', '3:4 Pack — 5 files', '4:5 Pack — 5 files', "
            "'ISO Pack — 5 files', 'Extras — 6 files'. "
            "BOTTOM 17%: Clean text: '70 files · 300 DPI · Etsy-ready' "
            "Rounded teal pill: 'app.snaptosize.com · Free to start'. "
            "Photorealistic, soft studio lighting, no people."
        ),
    },
]


def generate_pin(pin: dict) -> None:
    folder = BASE / pin["folder"]
    folder.mkdir(parents=True, exist_ok=True)
    out_path = folder / f"{pin['folder']}.png"

    print(f"Generating {pin['id']}: {pin['folder']}...")
    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=pin["prompt"],
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
            ),
        )
        saved = False
        for part in response.candidates[0].content.parts:
            if hasattr(part, "inline_data") and part.inline_data and part.inline_data.mime_type.startswith("image/"):
                img = Image.open(io.BytesIO(part.inline_data.data))
                img = img.resize((TARGET_W, TARGET_H), Image.LANCZOS)
                img.save(str(out_path), "PNG")
                print(f"  Saved: {out_path} ({img.size})")
                saved = True
                break
        if not saved:
            print(f"  ERROR: No image in response for {pin['id']}")
            for part in response.candidates[0].content.parts:
                if hasattr(part, "text") and part.text:
                    print(f"  Text response: {part.text[:200]}")
    except Exception as e:
        print(f"  ERROR {pin['id']}: {e}")


for pin in PINS:
    generate_pin(pin)

print("Done.")
