"""Schedule W28 Pinterest pins to Buffer.

Usage:
    python marketing/social/schedule-w28.py --dry-run   # preview uten posting
    python marketing/social/schedule-w28.py              # poster til Buffer
"""
import sys, importlib.util, json, os
from pathlib import Path
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(ROOT / ".env.buffer")
load_dotenv(ROOT / "marketing" / "social" / ".env.buffer")

_spec = importlib.util.spec_from_file_location(
    "schedule_batch", ROOT / "marketing" / "social" / "schedule-batch.py"
)
sb = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sb)

CONTENT = ROOT / "marketing" / "social" / "content" / "pinterest"

PINS = [
    {
        "item_id": "W28-REF01",
        "slug":    "2026-06-30-bedroom-sizes-pinterest",
        "board":   "print-size-guides",
        "due_at":  "2026-06-30T07:00:00Z",
    },
    {
        "item_id": "W28-REF02",
        "slug":    "2026-07-01-living-room-sizes-pinterest",
        "board":   "print-size-guides",
        "due_at":  "2026-07-01T07:00:00Z",
    },
    {
        "item_id": "W28-PAIN01",
        "slug":    "2026-07-02-file-chaos-before-after-pinterest",
        "board":   "seller-tools",
        "due_at":  "2026-07-02T07:00:00Z",
    },
]

dry_run = "--dry-run" in sys.argv

print(f"W28 Schedule {'(DRY RUN)' if dry_run else ''}")
print("=" * 60)

results = {}
for pin in PINS:
    slug    = pin["slug"]
    item_id = pin["item_id"]

    with open(CONTENT / slug / "metadata.json", "r", encoding="utf-8") as f:
        meta_json = json.load(f)

    img_path = CONTENT / slug / meta_json["image"]
    meta_json["board"] = pin["board"]

    print(f"\n{item_id} | {slug}")
    print(f"  image : {img_path.name} ({img_path.stat().st_size // 1024}KB)")
    print(f"  board : {pin['board']}")
    print(f"  due_at: {pin['due_at']}")

    if dry_run:
        results[item_id] = {"dry_run": True}
        continue

    asset_file = sb.ensure_jpeg_for_image_post(img_path, "pinterest", "image")
    r2_key     = f"content/pinterest/{slug}/{asset_file.name}"
    asset_url  = sb.upload_to_r2(asset_file, r2_key)

    item_dict = {
        "id": item_id,
        "platform": "pinterest",
        "format": "image",
        "files": {"image": f"content/pinterest/{slug}/{asset_file.name}"},
    }
    res = sb.schedule_item(
        item=item_dict,
        meta=meta_json,
        asset_url=asset_url,
        schedule_time=pin["due_at"],
        dry_run=False,
    )
    results[item_id] = res

    # Write buffer_post_id back to metadata.json
    if res and res.get("id"):
        meta_json["buffer_post_id"] = res["id"]
        meta_json["r2_url"] = f"{os.environ.get('R2_PUBLIC_URL', '')}/{r2_key}"
        with open(CONTENT / slug / "metadata.json", "w", encoding="utf-8") as f:
            json.dump(meta_json, f, indent=2, ensure_ascii=False)
        print(f"  ✓ Scheduled: {res['id']}")
    else:
        print(f"  ✗ FAILED: {res}")

print("\n" + "=" * 60)
if dry_run:
    print("Dry run ferdig. Kjør uten --dry-run for å poste til Buffer.")
else:
    ok = [k for k, v in results.items() if v and v.get("id")]
    fail = [k for k, v in results.items() if not v or not v.get("id")]
    print(f"Scheduled: {len(ok)}/3")
    if fail:
        print(f"Failed: {fail}")
