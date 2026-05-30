"""Schedule W22-P07, P08, P09 to Buffer with explicit timing."""
import sys, importlib.util, json, time, os
from pathlib import Path
from dotenv import load_dotenv
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent.parent.parent
load_dotenv(ROOT / ".env.buffer")
load_dotenv(ROOT / "marketing" / "social" / ".env.buffer")

_spec = importlib.util.spec_from_file_location(
    "schedule_batch", ROOT / "marketing" / "social" / "schedule-batch.py"
)
sb = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sb)

CONTENT = ROOT / "marketing" / "social" / "content" / "pinterest"
STATE_PATH = ROOT / "marketing" / "social" / "queue" / "pipeline-state.json"

# W22 Day 3 — May 10/11 (18:00 UTC = 8pm CET, 07:00 UTC = 9am CET)
PINS = [
    {
        "item_id": "W22-P07",
        "slug":    "2026-05-10-photoshop-trap-pinterest",
        "board":   "seller-tools",
        "due_at":  "2026-05-10T18:00:00Z",
    },
    {
        "item_id": "W22-P08",
        "slug":    "2026-05-10-top5-mistakes-pinterest",
        "board":   "seller-tools",
        "due_at":  "2026-05-11T07:00:00Z",
    },
    {
        "item_id": "W22-P09",
        "slug":    "2026-05-10-folder-chaos-pinterest",
        "board":   "seller-tools",
        "due_at":  "2026-05-11T18:00:00Z",
    },
]

dry_run = "--dry-run" in sys.argv

results = {}
for pin in PINS:
    slug    = pin["slug"]
    item_id = pin["item_id"]

    with open(CONTENT / slug / "metadata.json", "r", encoding="utf-8") as f:
        meta_json = json.load(f)

    img_path = CONTENT / slug / meta_json["image"]
    meta_json["board"] = pin["board"]

    print(f"=== {item_id} | {slug} ===")
    print(f"  image : {img_path.name} ({img_path.stat().st_size // 1024}KB)")
    print(f"  due_at: {pin['due_at']}")

    if dry_run:
        results[item_id] = {"dry_run": True}
        print(f"  [DRY RUN] Would schedule {item_id}")
        continue

    try:
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
            slug=slug,
        )
        results[item_id] = res
        if res.get("success"):
            new_id = res.get("buffer_post_id", "")
            print(f"  OK  Buffer post: {new_id}")
            meta_json["r2_url"] = asset_url
            with open(CONTENT / slug / "metadata.json", "w", encoding="utf-8") as f:
                json.dump(meta_json, f, indent=2, ensure_ascii=False)
        else:
            print(f"  FAIL {res.get('response', 'unknown error')}")
    except Exception as e:
        print(f"  ERROR {e}")
        results[item_id] = {"success": False, "response": str(e)}

    time.sleep(2)

# Update pipeline-state
if not dry_run:
    with open(STATE_PATH, "r", encoding="utf-8") as f:
        state_data = json.load(f)
    now_iso = datetime.now(timezone.utc).isoformat()
    for item in state_data.get("content_items", []):
        if item["id"] in results and results[item["id"]].get("success"):
            item["buffer_post_id"] = results[item["id"]]["buffer_post_id"]
            item["stage"] = "published"
            item["updated_at"] = now_iso
    with open(STATE_PATH, "w", encoding="utf-8") as f:
        json.dump(state_data, f, indent=2, ensure_ascii=False)
    print("\npipeline-state.json updated.")

print("\n=== Summary ===")
for item_id, res in results.items():
    status = "OK" if res.get("success") or res.get("dry_run") else "FAIL"
    print(f"  {status}  {item_id}")
