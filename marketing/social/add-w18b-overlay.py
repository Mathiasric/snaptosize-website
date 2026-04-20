"""Add SnapToSize marketing overlay to W18b Gemini Pinterest pins."""
from PIL import Image, ImageDraw, ImageFont
import pathlib

PINS = [
    {
        "path": pathlib.Path("marketing/social/content/pinterest/2026-04-20-300dpi-quality/2026-04-20-300dpi-quality.png"),
        "hook": "Gallery quality. Every single size.",
        "sub":  "300 DPI · 70 files · Etsy-ready",
    },
    {
        "path": pathlib.Path("marketing/social/content/pinterest/2026-04-20-one-upload-everywhere/2026-04-20-one-upload-everywhere.png"),
        "hook": "Upload once. 70 files ready.",
        "sub":  "5 ratio packs · 300 DPI · Etsy-ready",
    },
]

def add_overlay(img_path, hook, sub):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    bar_h = int(h * 0.16)
    bot_h = int(h * 0.09)

    draw.rectangle([(0, 0), (w, bar_h)], fill=(10, 10, 18, 220))
    draw.rectangle([(0, h - bot_h), (w, h)], fill=(10, 10, 18, 225))

    bold_path    = "C:/Windows/Fonts/arialbd.ttf"
    regular_path = "C:/Windows/Fonts/arial.ttf"

    try:
        font_hook = ImageFont.truetype(bold_path,    size=52)
        font_sub  = ImageFont.truetype(regular_path, size=34)
        font_url  = ImageFont.truetype(bold_path,    size=40)
    except Exception:
        font_hook = font_sub = font_url = ImageFont.load_default()

    cx = w // 2
    draw.text((cx, bar_h * 25 // 100), hook, font=font_hook, anchor="mt", fill=(45, 212, 191, 255))
    draw.text((cx, bar_h * 60 // 100), sub,  font=font_sub,  anchor="mt", fill=(200, 200, 220, 210))
    draw.text((cx, h - bot_h + bot_h // 2), "snaptosize.com", font=font_url, anchor="mm", fill=(255, 255, 255, 245))

    composite = Image.alpha_composite(img, overlay).convert("RGB")
    composite.save(str(img_path), "PNG")
    print(f"  Overlay OK: {img_path.name}")

for pin in PINS:
    add_overlay(pin["path"], pin["hook"], pin["sub"])

print("Done.")
