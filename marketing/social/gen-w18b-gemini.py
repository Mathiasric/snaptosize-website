"""W18b Gemini batch — 2026-04-20
Pinterest pins: 300-dpi-makrokvalitet + en-upload-enkelheten
Pain→solution forankret i Etsy-selger ICP. 70 files (ikke 28).
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
        "aspect_ratio": "9:16",
        "prompt": (
            "Photorealistic split-panel comparison photo, vertical portrait format, soft studio lighting. "
            "Two printed botanical wall art prints taped side-by-side on a clean light wall. "
            "LEFT PANEL — labeled 'Before': The print looks visibly pixelated and blurry — "
            "jagged edges on flower petals, muddy washed-out colors, visible pixel blocks. "
            "A small red sticky note attached reads: 'Print shop rejected — too low res'. Dim, flat lighting. "
            "RIGHT PANEL — labeled 'After': Exact same botanical artwork, razor-sharp and vibrant — "
            "every petal edge crisp, ink texture visible, colors rich and true. "
            "A small teal badge in the corner reads: '300 DPI'. Bright, clean, confident. "
            "A thin teal vertical line divides the two panels in the center. "
            "TOP 25% of image: plain clean white wall, completely empty — text-safe zone. "
            "No people, no logos. Photorealistic DSLR photo aesthetic."
        ),
    },
    {
        "id": "W18-P05",
        "folder": "2026-04-20-one-upload-everywhere",
        "aspect_ratio": "9:16",
        "prompt": (
            "Photorealistic minimalist flat-lay, vertical portrait format, soft even studio lighting. "
            "Center of frame: open MacBook Air on a clean matte white desk. "
            "Browser shows app.snaptosize.com — a simple drag-and-drop interface with "
            "a file named 'botanical_print.png' uploaded. "
            "Green progress bar reads '100%' with a checkmark. Screen text: '70 files ready'. "
            "Fanning outward from the laptop in a clean semi-circle: 5 crisp white cards with teal ZIP folder icons. "
            "Card 1: '2:3 Pack — 7 files'. Card 2: '3:4 Pack — 5 files'. Card 3: '4:5 Pack — 5 files'. "
            "Card 4: 'ISO Pack — 5 files'. Card 5: 'Extras — 6 files'. "
            "Small clean text label below the card fan: '70 files · 300 DPI · Etsy-ready'. "
            "TOP 30%: plain white wall — completely empty, text-safe. "
            "No people, no clutter. Apple product-shoot minimal aesthetic. Photorealistic."
        ),
    },
]


def generate_pin(pin: dict) -> None:
    folder = BASE / pin["folder"]
    folder.mkdir(parents=True, exist_ok=True)
    out_path = folder / f"{pin['folder']}.png"

    print(f"Generating {pin['id']}: {pin['folder']}...")
    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=pin["prompt"],
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio=pin["aspect_ratio"],
            ),
        )
        image_bytes = response.generated_images[0].image.image_bytes
        img = Image.open(io.BytesIO(image_bytes))
        img = img.resize((TARGET_W, TARGET_H), Image.LANCZOS)
        img.save(str(out_path), "PNG")
        print(f"  Saved: {out_path} ({img.size})")
    except Exception as e:
        print(f"  ERROR {pin['id']}: {e}")


for pin in PINS:
    generate_pin(pin)

print("Done.")
