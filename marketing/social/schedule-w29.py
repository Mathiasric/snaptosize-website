"""W29 Pinterest batch — nursery-sizes + canva-vs-snaptosize + gallery-wall-ratio-guide — 2026-06-21"""
import sys, json, os, importlib.util
from pathlib import Path
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(ROOT / ".env.buffer")

spec = importlib.util.spec_from_file_location("sb", ROOT / "marketing" / "social" / "schedule-batch.py")
sb = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sb)

CONTENT = ROOT / "marketing" / "social" / "content" / "pinterest"
dry_run = "--dry-run" in sys.argv

PINS = [
    {
        "item_id": "W29-REF01",
        "slug": "2026-07-07-nursery-sizes-pinterest",
        "board": "print-size-guides",
        "due_at": "2026-07-07T07:00:00Z",
    },
    {
        "item_id": "W29-PAIN01",
        "slug": "2026-07-08-canva-vs-snaptosize-pinterest",
        "board": "seller-tools",
        "due_at": "2026-07-08T07:00:00Z",
    },
    {
        "item_id": "W29-REF02",
        "slug": "2026-07-09-gallery-wall-ratio-guide-pinterest",
        "board": "print-size-guides",
        "due_at": "2026-07-09T07:00:00Z",
    },
]

print("W29 Schedule")
print("=" * 60)

results = {}
ok, fail = 0, []

for pin in PINS:
    slug = pin["slug"]
    item_id = pin["item_id"]

    img_path = CONTENT / slug / f"{slug}.jpg"
    if not img_path.exists():
        img_path = CONTENT / slug / f"{slug}.png"

    print(f"\n{item_id} | {slug}")
    print(f"  image : {img_path.name} ({img_path.stat().st_size // 1024}KB)")
    print(f"  board : {pin['board']}")
    print(f"  due_at: {pin['due_at']}")

    if dry_run:
        print("  DRY RUN — skipping upload + schedule")
        ok += 1
        continue

    r2_key = f"content/pinterest/{slug}/{slug}.jpg"
    asset_url = f"{os.environ.get('R2_PUBLIC_URL', 'https://social.snaptosize.com')}/{r2_key}"

    r2_ok = sb.upload_to_r2(img_path, r2_key)
    if not r2_ok:
        print(f"  ✗ R2 upload failed")
        fail.append(item_id)
        continue
    print(f"  R2    : {asset_url}")

    with open(CONTENT / slug / "metadata.json", encoding="utf-8") as f:
        meta_json = json.load(f)

    item_dict = {
        "id": item_id,
        "platform": "pinterest",
        "format": "image",
        "files": {"image": f"content/pinterest/{slug}/{slug}.jpg"},
    }

    res = sb.schedule_item(
        item=item_dict,
        meta=meta_json,
        asset_url=asset_url,
        schedule_time=pin["due_at"],
        dry_run=False,
        slug=slug,
    )

    if res and res.get("success"):
        buf_id = res.get("buffer_post_id", "")
        print(f"  ✓ Scheduled: {buf_id}")
        meta_json["buffer_post_id"] = buf_id
        meta_json["r2_url"] = asset_url
        with open(CONTENT / slug / "metadata.json", "w", encoding="utf-8") as f:
            json.dump(meta_json, f, indent=2, ensure_ascii=False)
        ok += 1
    else:
        print(f"  ✗ FAILED: {res}")
        fail.append(item_id)

    results[item_id] = res

print("\n" + "=" * 60)
if dry_run:
    print(f"Dry run ferdig — {ok}/{len(PINS)} klare. Kjør uten --dry-run for å poste.")
else:
    print(f"Scheduled: {ok}/{len(PINS)}")
    if fail:
        print(f"Failed: {fail}")
