"""W18b Gemini batch — 2026-04-20
Pinterest pins: 300-dpi-makrokvalitet + en-upload-enkelheten
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
            "Extreme macro photorealistic photo, vertical portrait format. "
            "Close-up of a freshly printed botanical art print held against bright soft light. "
            "Visible fine ink texture, crisp botanical line details, vibrant true colors — exceptional quality. "
            "Print fills 65% of frame. Two fingers visible holding top corners. "
            "Small elegant badge in print corner: '300 DPI' in teal text on white background. "
            "TOP 30%: soft blurred bright studio background — clean, text-safe. "
            "No additional text on print. 100mm macro lens aesthetic, ultra-sharp. "
            "Photorealistic, studio lighting."
        ),
    },
    {
        "id": "W18-P05",
        "folder": "2026-04-20-one-upload-everywhere",
        "aspect_ratio": "9:16",
        "prompt": (
            "Photorealistic minimalist flat-lay, vertical portrait format. "
            "Clean matte white desk. MacBook Air showing a simple web app interface in browser — "
            "file named 'botanical_artwork.png' in a drag-drop zone, "
            "progress bar showing '100%' with green checkmark. "
            "Fanning outward from laptop in semi-circle: 5 white cards with teal ZIP icons labeled "
            "'2:3 Pack', '3:4 Pack', '4:5 Pack', 'ISO Pack', 'Extras'. "
            "Small text label below fan: '28 files · 300 DPI · Etsy-ready'. "
            "TOP 30%: plain white wall — uncluttered, text-safe zone. "
            "No people. Apple product-shoot minimal aesthetic. Photorealistic, soft diffused lighting."
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
