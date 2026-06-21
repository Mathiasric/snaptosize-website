"""W29 Instagram — Canva vs SnapToSize 4:5 (resized 21.06) → Buffer Jul 8 18:00 UTC"""
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
        "item_id": "W29-IG01",
        "source_file": "2026_07_08_canva_vs_snaptosize_pinterest(21.06).jpg",
        "slug": f"{TODAY}-canva-vs-snaptosize-instagram",
        "due_at": "2026-07-08T18:00:00Z",
        "caption": (
            "Still manually resizing every time a buyer asks for a different size? 😮‍💨\n\n"
            "Canva exports 1 file. SnapToSize exports 70 — every ratio, every DPI, organized in packs. "
            "Same design. One upload.\n\n"
            "Try it free → snaptosize.com\n\n"
            "#etsyseller #etsyshop #printsondemand #digitaldownloads #etsytips "
            "#etsybusiness #canva #printableart #etsydigital #digitalart "
            "#wallartprint #etsyfinds #sellertools #printseller #digitalshop"
        ),
    },
]

print("W29 Instagram Schedule")
print("=" * 60)

ok, fail = 0, []

for post in POSTS:
    item_id = post["item_id"]
    slug = post["slug"]
    src = INSTAGRAM_READY / post["source_file"]

    if not src.exists():
        print(f"\n✗ Source not found: {src}")
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
        print("  DRY RUN — skipping R2 upload + schedule")
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
