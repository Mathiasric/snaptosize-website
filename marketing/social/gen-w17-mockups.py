"""Generate lifestyle mockup images for W17 SEO pages.

1. etsy-black-and-white-art-sizes: Gallery wall with B&W framed prints
2. etsy-anime-manga-art-sizes: Bedroom wall with anime art prints
"""
import os
import pathlib
from pathlib import Path
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / ".env.local")
from google import genai
from google.genai import types

API_KEY = os.environ.get("GOOGLE_API_KEY")
client = genai.Client(api_key=API_KEY)

OUT_DIR = pathlib.Path("C:/dev/snaptosize-website/app-next/public/assets/visuals")
OUT_DIR.mkdir(parents=True, exist_ok=True)

IMAGES = [
    {
        "id": "black-and-white",
        "path": OUT_DIR / "etsy-black-and-white-art-sizes-mockup.jpg",
        "prompt": (
            "A cozy Scandinavian living room wall with a curated gallery of black and white fine art prints "
            "in matching thin black frames with wide white matte mounts. "
            "The prints include abstract line art, botanical illustrations, and minimal geometric shapes "
            "in different sizes — 8x10 and 11x14 — arranged symmetrically. "
            "Soft warm ambient lighting from a nearby floor lamp. "
            "Light grey wall, wooden floor visible at the bottom edge. "
            "Clean, minimal, editorial lifestyle photography style. "
            "No text overlays, no brand logos, no people visible. "
            "Photorealistic, aspirational interior design photo."
        ),
    },
    {
        "id": "anime-manga",
        "path": OUT_DIR / "etsy-anime-manga-art-sizes-mockup.jpg",
        "prompt": (
            "A modern teenager's bedroom wall with three coordinating anime-inspired portrait art prints "
            "in matching dark matte frames, arranged in a horizontal triptych. "
            "The prints feature vibrant anime-style illustrations with purple and blue color palettes. "
            "LED strip lights along the top of the wall create a soft purple glow. "
            "Cozy dorm room atmosphere, slightly dark and moody, modern aesthetic. "
            "No text overlays, no anime brand logos, no recognizable characters, no people. "
            "Photorealistic lifestyle photography, warm atmospheric lighting."
        ),
    },
]

for img in IMAGES:
    print(f"Generating {img['id']} mockup...")
    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=img["prompt"],
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="4:3",
            ),
        )
        image_bytes = response.generated_images[0].image.image_bytes
        with open(img["path"], "wb") as f:
            f.write(image_bytes)
        print(f"  Saved: {img['path']}")
    except Exception as e:
        print(f"  ERROR for {img['id']}: {e}")

print("Done.")
