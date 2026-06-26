"""W30 Instagram — 3 pins (IKEA Ribba + stats + home office) 4:5 → Buffer Jul 14-16"""
import sys, json, os, shutil, datetime, importlib.util
from pathlib import Path
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(ROOT / ".env.buffer")

spec = importlib.util.spec_from_file_location("sb", ROOT / "marketing" / "social" / "schedule-batch.py")
sb = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sb)

INSTAGRAM_READY = ROOT / "marketing" / "social" / "ready" / "instagram_ready"
CONTENT = ROOT / "marketing" / "social" / "content" / "instagram"
TODAY = datetime.date.today().strftime("%Y-%m-%d")
dry_run = "--dry-run" in sys.argv

POSTS = [
    {
        "item_id": "W30-IG01",
        "source_file": "2026_07_14_ikea_ribba_print_sizes_pinterest(26.06).jpg",
        "slug": f"{TODAY}-ikea-ribba-print-sizes-instagram",
        "due_at": "2026-07-14T18:00:00Z",
        "caption": (
            "IKEA Ribba frames are the #1 thing buyers mention when a print doesn't fit. "
            "Save this before your next Etsy listing 📌\n\n"
            "20×25 cm → 8×10 in\n"
            "30×40 cm → 12×16 in\n"
            "50×70 cm → 20×28 in\n\n"
            "SnapToSize generates all three (and 67 more) from a single upload. "
            "Free to try → snaptosize.com\n\n"
            "#etsyseller #printsondemand #digitaldownloads #etsydigital #wallartprint"
        ),
    },
    {
        "item_id": "W30-IG02",
        "source_file": "2026_07_15_4_in_5_buyers_wrong_size_pint(26.06).jpg",
        "slug": f"{TODAY}-4-in-5-buyers-wrong-size-instagram",
        "due_at": "2026-07-15T18:00:00Z",
        "caption": (
            "4 in 5 buyers need a size your listing doesn't have.\n\n"
            "Not because they're picky — because standard frames come in 12+ sizes "
            "and most Etsy shops list 3 or fewer.\n\n"
            "One upload to SnapToSize → 70 ready-to-list files across every ratio. "
            "Free to try → snaptosize.com\n\n"
            "#etsyseller #etsytips #printsondemand #etsybusiness #digitaldownloads"
        ),
    },
    {
        "item_id": "W30-IG03",
        "source_file": "2026_07_16_home_office_art_sizes_pintere(26.06).jpg",
        "slug": f"{TODAY}-home-office-art-sizes-instagram",
        "due_at": "2026-07-16T18:00:00Z",
        "caption": (
            "Home office wall art has two completely different size standards depending on "
            "where your buyer lives 🌍\n\n"
            "A4 (21×29.7 cm) → Europe\n"
            "Letter (8.5×11 in) → US\n"
            "Square (20×20 cm) → shelves & ledges\n\n"
            "SnapToSize generates portrait, landscape AND square from the same upload. "
            "Every buyer covered → snaptosize.com\n\n"
            "#etsyseller #printableart #digitaldownloads #etsyshop #wallartprint"
        ),
    },
]

print("W30 Instagram Schedule")
print("=" * 60)

ok, fail = 0, []

for post in POSTS:
    item_id = post["item_id"]
    slug = post["slug"]
    src = INSTAGRAM_READY / post["source_file"]

    if not src.exists():
        print(f"\n✗ Source not found: {src.name}")
        fail.append(item_id)
        continue

    dest_dir = CONTENT / slug
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest_img = dest_dir / f"{slug}.jpg"
    shutil.copy2(src, dest_img)

    meta = {
        "id": item_id,
        "platform": "instagram",
        "format": "image",
        "caption": post["caption"],
        "scheduled_for": post["due_at"],
        "source_file": post["source_file"],
        "created": TODAY,
    }
    with open(dest_dir / "metadata.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)

    print(f"\n{item_id} | {slug}")
    print(f"  image : {dest_img.name} ({dest_img.stat().st_size // 1024}KB)")
    print(f"  due_at: {post['due_at']}")
    if dry_run:
        print("  DRY RUN — skipping R2 + schedule")
        ok += 1
        continue

    r2_key = f"content/instagram/{slug}/{slug}.jpg"
    asset_url = f"{os.environ.get('R2_PUBLIC_URL', 'https://social.snaptosize.com')}/{r2_key}"

    r2_ok = sb.upload_to_r2(dest_img, r2_key)
    if not r2_ok:
        print("  ✗ R2 upload failed")
        fail.append(item_id)
        continue
    print(f"  R2    : {asset_url}")

    item_dict = {
        "id": item_id,
        "platform": "instagram",
        "format": "image",
        "files": {"image": f"content/instagram/{slug}/{slug}.jpg"},
    }

    res = sb.schedule_item(
        item=item_dict,
        meta=meta,
        asset_url=asset_url,
        schedule_time=post["due_at"],
        dry_run=False,
        slug=slug,
    )

    if res and res.get("success"):
        buf_id = res.get("buffer_post_id", "")
        print(f"  ✓ Scheduled: {buf_id}")
        meta["buffer_post_id"] = buf_id
        meta["r2_url"] = asset_url
        with open(dest_dir / "metadata.json", "w", encoding="utf-8") as f:
            json.dump(meta, f, indent=2, ensure_ascii=False)
        ok += 1
    else:
        print(f"  ✗ FAILED: {res}")
        fail.append(item_id)

print("\n" + "=" * 60)
if dry_run:
    print(f"Dry run — {ok}/{len(POSTS)} klar. Kjør uten --dry-run for å poste.")
else:
    print(f"Scheduled: {ok}/{len(POSTS)}")
    if fail:
        print(f"Failed: {fail}")
