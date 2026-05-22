"""Schedule W23 Day-10 Instagram posts (2026-05-23) via Buffer API.
IG13: a4-blind-spot   — The A4 blind spot. 100M buyers search it. (Gemini)
IG14: batch-workflow  — From 0 to 70 files. One upload. (Gemini)
"""
import sys, importlib.util, json, time
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

CONTENT = ROOT / "marketing" / "social" / "content" / "instagram"

POSTS = [
    {
        "item_id": "W23-IG13",
        "slug":    "2026-05-22-a4-blind-spot-instagram",
        "due_at":  "2026-05-23T09:00:00Z",
    },
    {
        "item_id": "W23-IG14",
        "slug":    "2026-05-22-batch-workflow-instagram",
        "due_at":  "2026-05-23T13:00:00Z",
    },
]

dry_run = "--dry-run" in sys.argv
print(f"{'DRY RUN -- ' if dry_run else ''}Scheduling {len(POSTS)} W23 Day-10 Instagram posts...\n")

results = {}
for post in POSTS:
    slug    = post["slug"]
    item_id = post["item_id"]
    with open(CONTENT / slug / "metadata.json", "r", encoding="utf-8") as f:
        meta_json = json.load(f)
    img_path = CONTENT / slug / meta_json["image"]
    print(f"=== {item_id} | {slug} ===")
    print(f"  image : {img_path.name} ({img_path.stat().st_size // 1024}KB)")
    print(f"  due_at: {post['due_at']}")
    if dry_run:
        results[item_id] = {"dry_run": True}
        continue
    asset_file = sb.ensure_jpeg_for_image_post(img_path, "instagram", "image")
    r2_key     = f"content/instagram/{slug}/{asset_file.name}"
    asset_url  = sb.upload_to_r2(asset_file, r2_key)
    item_dict = {"id": item_id, "platform": "instagram", "format": "image", "files": {"image": f"content/instagram/{slug}/{asset_file.name}"}}
    res = sb.schedule_item(item=item_dict, meta=meta_json, asset_url=asset_url, schedule_time=post["due_at"], dry_run=False, slug=slug)
    results[item_id] = res
    if res.get("success"):
        new_id = res.get("buffer_post_id", "")
        print(f"  OK  Buffer post: {new_id}")
        meta_json["r2_url"] = asset_url
        meta_json["buffer_post_id"] = new_id
        with open(CONTENT / slug / "metadata.json", "w", encoding="utf-8") as f:
            json.dump(meta_json, f, indent=2, ensure_ascii=False)
    else:
        print(f"  FAIL {res.get('response', 'unknown error')}")
    time.sleep(1)

print(f"\nFerdig. {sum(1 for r in results.values() if r.get('success') or r.get('dry_run'))}/{len(POSTS)} OK")
