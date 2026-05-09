"""Delete stale W22-P04 / W22-P06 Buffer posts and re-schedule with updated images."""
import sys, importlib.util, json, time, os, requests
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

TOKEN = os.environ["BUFFER_API_TOKEN"]
API   = os.environ.get("BUFFER_API_URL", "https://api.bufferapp.com")
CONTENT = ROOT / "marketing" / "social" / "content" / "pinterest"
STATE_PATH = ROOT / "marketing" / "social" / "queue" / "pipeline-state.json"

# Old Buffer post IDs to delete
OLD_POSTS = {
    "W22-P04": "69fefd5f8c697e6b3c195ea4",
    "W22-P06": "69fefd6d2789e816c90db385",
}

PINS = [
    {
        "item_id": "W22-P04",
        "slug":    "2026-05-09-gallery-wall-sizes-pinterest",
        "board":   "print-size-guides",
        "due_at":  "2026-05-09T14:00:00Z",
    },
    {
        "item_id": "W22-P06",
        "slug":    "2026-05-09-ratio-packs-breakdown-pinterest",
        "board":   "print-size-guides",
        "due_at":  "2026-05-09T20:00:00Z",
    },
]

dry_run = "--dry-run" in sys.argv

# 1. Delete old posts
for item_id, post_id in OLD_POSTS.items():
    print(f"Deleting old Buffer post {post_id} ({item_id}) …")
    if dry_run:
        print("  [dry-run] skipped")
        continue
    resp = requests.post(
        f"{API}/1/updates/{post_id}/destroy.json",
        data={"access_token": TOKEN},
    )
    print(f"  {resp.status_code} {resp.text[:120]}")
    time.sleep(1)

print()

# 2. Re-schedule with updated images
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
        slug=slug,
    )
    results[item_id] = res
    if res.get("success"):
        new_id = res.get("buffer_post_id", "")
        print(f"  OK  new Buffer post: {new_id}")
        meta_json["r2_url"] = asset_url
        with open(CONTENT / slug / "metadata.json", "w", encoding="utf-8") as f:
            json.dump(meta_json, f, indent=2, ensure_ascii=False)
    else:
        print(f"  FAIL {res.get('response','unknown error')}")

    time.sleep(1)

# 3. Update pipeline-state
if not dry_run:
    with open(STATE_PATH, "r", encoding="utf-8") as f:
        state_data = json.load(f)

    from datetime import datetime, timezone
    now_iso = datetime.now(timezone.utc).isoformat()

    for item in state_data.get("content_items", []):
        if item["id"] in results and results[item["id"]].get("success"):
            item["buffer_post_id"] = results[item["id"]]["buffer_post_id"]
            item["updated_at"] = now_iso

    with open(STATE_PATH, "w", encoding="utf-8") as f:
        json.dump(state_data, f, indent=2, ensure_ascii=False)
    print("\npipeline-state.json updated.")

print("\n=== Summary ===")
for item_id, res in results.items():
    status = "OK" if res.get("success") or res.get("dry_run") else "FAIL"
    print(f"  {status}  {item_id}")
