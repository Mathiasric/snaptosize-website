"""W28 Instagram batch — schedule pre-cropped 4:5 images from instagram_ready — 2026-06-15"""
import sys, json, shutil, os, importlib.util, datetime
from pathlib import Path
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(ROOT / ".env.buffer")

# Load schedule_batch helper
spec = importlib.util.spec_from_file_location("sb", ROOT / "marketing" / "social" / "schedule-batch.py")
sb = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sb)

IG_READY   = ROOT / "marketing" / "social" / "ready" / "instagram_ready"
IG_CONTENT = ROOT / "marketing" / "social" / "content" / "instagram"
R2_URL     = os.environ.get("R2_PUBLIC_URL", "https://social.snaptosize.com")

dry_run = "--dry-run" in sys.argv
TODAY = datetime.date.today().strftime("%Y-%m-%d")

POSTS = [
    {
        "item_id": "W28-IG01",
        "instagram_slug": f"{TODAY}-bedroom-sizes-instagram",
        "ready_name": "2026_06_30_bedroom_sizes_pinterest(15.06).jpg",
        "due_at": "2026-06-30T18:00:00Z",
        "title": "Bedroom Wall Art Sizes — Every Frame Covered",
        "caption": (
            "Bedroom walls aren't one size fits all.\n\n"
            "A king bedroom wall takes a 24×36. A small guest room? Maybe 11×14 or 8×10. "
            "Buyers know exactly what they need — they're just looking for a seller who has it.\n\n"
            "If your listing only comes in one size, you're invisible to most of them.\n\n"
            "SnapToSize lets you upload once and get every bedroom size in under 60 seconds. "
            "No Photoshop. No manual resizing.\n\n"
            "→ snaptosize.com (link in bio)\n\n"
            "#etsyseller #printablewallart #bedroomdecor #wallartsizes #etsydigitaldownload "
            "#digitaldownload #printablewalldecor #etsyshop #homeprintables #walldecorprint"
        ),
    },
    {
        "item_id": "W28-IG02",
        "instagram_slug": f"{TODAY}-living-room-sizes-instagram",
        "ready_name": "2026_07_01_living_room_sizes_pinterest(15.06).jpg",
        "due_at": "2026-07-01T18:00:00Z",
        "title": "Living Room Wall Art Sizes — What Buyers Actually Search For",
        "caption": (
            "The #1 question buyers message Etsy sellers:\n\n"
            '"Do you have this in [size]?"\n\n'
            "For living rooms, they want gallery-wall sets — 8×10, 11×14, 16×20, sometimes 18×24. "
            "They're searching for sellers who cover every frame.\n\n"
            "Most sellers only offer one size and wonder why buyers don't convert.\n\n"
            "SnapToSize gives you every living room size from a single upload. "
            "5 packs, 30+ files, 60 seconds.\n\n"
            "→ snaptosize.com (link in bio)\n\n"
            "#etsyseller #printablewallart #livingroomdecor #gallerywall #etsydigitaldownload "
            "#wallartsizes #digitaldownload #etsytips #printables #homewallart"
        ),
    },
    {
        "item_id": "W28-IG03",
        "instagram_slug": f"{TODAY}-file-chaos-before-after-instagram",
        "ready_name": "2026_07_02_file_chaos_before_after_pint(15.06).jpg",
        "due_at": "2026-07-02T18:00:00Z",
        "title": "File Chaos vs One Upload — Before vs After SnapToSize",
        "caption": (
            "Before SnapToSize: 47 files, 6 folders, 3 hours of manual work.\n\n"
            "After: 1 upload. 5 packs. Done in 60 seconds.\n\n"
            "If you're still manually resizing every piece of wall art to every size "
            "your buyers ask for — you're working harder than you need to.\n\n"
            "One click. Every ratio. Every size. Watermark-free, print-ready JPEGs.\n\n"
            "→ snaptosize.com (link in bio)\n\n"
            "#etsyseller #etsydigitaldownload #printablewallart #digitaldownload "
            "#etsyshop #etsy #etsytips #workflowtools #printables #etsysellerlife"
        ),
    },
]

print("W28 Instagram Schedule")
print("=" * 60)

results = {}
ok = 0
fail = []

for post in POSTS:
    item_id  = post["item_id"]
    ig_slug  = post["instagram_slug"]
    ig_dir   = IG_CONTENT / ig_slug
    dest_img = ig_dir / "post.jpg"
    src_img  = IG_READY / post["ready_name"]

    print(f"\n{item_id} | {ig_slug}")

    if not src_img.exists():
        print(f"  ✗ Source not found: {src_img.name}")
        fail.append(item_id)
        continue

    print(f"  image : {src_img.name} ({src_img.stat().st_size // 1024}KB)")
    print(f"  due_at: {post['due_at']}")

    if dry_run:
        print("  DRY RUN — skipping copy + upload + schedule")
        ok += 1
        continue

    # Copy to content/instagram/
    ig_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src_img, dest_img)

    # Upload to R2
    asset_url = f"{R2_URL}/content/instagram/{ig_slug}/post.jpg"
    r2_ok = sb.upload_to_r2(dest_img, f"content/instagram/{ig_slug}/post.jpg")
    if not r2_ok:
        print("  ✗ R2 upload failed")
        fail.append(item_id)
        continue
    print(f"  R2    : {asset_url}")

    # Build metadata
    meta_json = {
        "id": item_id,
        "platform": "instagram",
        "format": "image",
        "title": post["title"],
        "caption": post["caption"],
        "due_at": post["due_at"],
        "r2_url": asset_url,
    }

    # Schedule via Buffer
    item_dict = {
        "id": item_id,
        "platform": "instagram",
        "format": "image",
        "files": {"image": f"content/instagram/{ig_slug}/post.jpg"},
    }
    res = sb.schedule_item(
        item=item_dict,
        meta=meta_json,
        asset_url=asset_url,
        schedule_time=post["due_at"],
        dry_run=False,
        slug=ig_slug,
    )

    if res.get("success"):
        buf_id = res.get("buffer_post_id", "")
        print(f"  OK    Buffer: {buf_id}")
        meta_json["buffer_post_id"] = buf_id
        ok += 1
    else:
        print(f"  FAIL  {res.get('response', 'unknown error')}")
        fail.append(item_id)

    # Save metadata.json
    with open(ig_dir / "metadata.json", "w", encoding="utf-8") as f:
        json.dump(meta_json, f, indent=2, ensure_ascii=False)

print("\n" + "=" * 60)
print(f"Scheduled: {ok}/{len(POSTS)}")
if fail:
    print(f"Failed: {fail}")
