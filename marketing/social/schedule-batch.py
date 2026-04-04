"""Schedule posts to Buffer from pipeline state or manual batch.

Reusable function: schedule_from_pipeline(dry_run=False)
CLI: python marketing/social/schedule-batch.py [--dry-run] [--manual]
"""
import requests, json, os, sys, subprocess
from datetime import datetime, timedelta, timezone
from pathlib import Path
from dotenv import load_dotenv

load_dotenv('.env.buffer')

PROJECT_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(PROJECT_ROOT / ".claude" / "agents"))

TOKEN = os.environ.get('BUFFER_API_TOKEN', '')
IG_ID = os.environ.get('BUFFER_INSTAGRAM_ID', '')
PIN_ID = os.environ.get('BUFFER_PINTEREST_ID', '')
TK_ID = os.environ.get('BUFFER_TIKTOK_ID', '')
R2_URL = os.environ.get('R2_PUBLIC_URL', '')
API = os.environ.get('BUFFER_API_URL', '')

HEADERS = {'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json; charset=utf-8'}

# Pinterest board mapping
BOARDS = {
    'print-size-guides': '1088463872381113663',
    'seller-tools': '1088463872381113672',
    'digital-prints': '1088463872381113667',
    'wall-art-business': '1088463872381113671',
    'default': '1088463872381113663',
}

MUTATION = """mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    ... on PostActionSuccess { post { id } }
    ... on InvalidInputError { message }
    ... on UnexpectedError { message }
    ... on LimitReachedError { message }
    ... on RestProxyError { message code }
  }
}"""

CHANNEL_IDS = {
    'pinterest': PIN_ID,
    'instagram': IG_ID,
    'tiktok': TK_ID,
}

CONTENT_DIR = PROJECT_ROOT / "marketing" / "social" / "content"


def upload_to_r2(local_path: Path, r2_key: str) -> str:
    """Upload file to R2 and return public URL. Uses wrangler CLI."""
    bucket = "snaptosize-social"
    cmd = ["npx", "wrangler", "r2", "object", "put", f"{bucket}/{r2_key}", "--file", str(local_path), "--remote"]
    result = subprocess.run(cmd, capture_output=True, text=True, cwd=str(PROJECT_ROOT), shell=True)
    if result.returncode != 0:
        raise RuntimeError(f"R2 upload failed: {result.stderr}")
    return f"{R2_URL}/{r2_key}"


def resolve_board(item: dict, meta: dict) -> str:
    """Pick Pinterest board from metadata or item tags."""
    # Prefer explicit boardServiceId from metadata
    bsid = meta.get("boardServiceId", "")
    if bsid:
        return bsid
    board = meta.get("board", "")
    if board and board in BOARDS:
        return BOARDS[board]
    # Try slug version of board name
    board_slug = board.lower().replace(" ", "-")
    if board_slug in BOARDS:
        return BOARDS[board_slug]
    # Try to infer from tags/topic
    tags = meta.get("tags", [])
    if any(t in tags for t in ["tool", "tools", "automation"]):
        return BOARDS["seller-tools"]
    if any(t in tags for t in ["wall-art", "gallery", "decor"]):
        return BOARDS["wall-art-business"]
    return BOARDS["default"]


def schedule_item(item: dict, meta: dict, asset_url: str, schedule_time: str, dry_run: bool = False) -> dict:
    """Schedule a single item via Buffer. Returns {success: bool, response: str}."""
    platform = item["platform"]
    channel_id = CHANNEL_IDS.get(platform, "")

    if not channel_id:
        return {"success": False, "response": f"No channel ID for {platform}"}

    # Build base input — use video assets for video format
    is_video = item.get("format") == "video"
    asset_key = "videos" if is_video else "images"
    inp = {
        "channelId": channel_id,
        "schedulingType": "automatic",
        "mode": "customScheduled",
        "dueAt": schedule_time,
        "assets": {asset_key: [{"url": asset_url}]},
    }

    # Platform-specific text and metadata
    if platform == "pinterest":
        inp["text"] = meta.get("description", "")
        inp["metadata"] = {
            "pinterest": {
                "title": meta.get("title", ""),
                "url": meta.get("link", "https://snaptosize.com/"),
                "boardServiceId": resolve_board(item, meta),
            }
        }
    elif platform == "instagram":
        inp["text"] = meta.get("caption", "")
        inp["metadata"] = {
            "instagram": {
                "type": "reel" if item.get("format") == "video" else "post",
                "shouldShareToFeed": True,
            }
        }
    elif platform == "tiktok":
        inp["text"] = meta.get("caption", "")

    if dry_run:
        return {"success": True, "response": f"[DRY RUN] Would schedule {item['id']} to {platform}"}

    payload = {"query": MUTATION, "variables": {"input": inp}}
    body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
    resp = requests.post(API, data=body, headers=HEADERS)
    data = resp.json() if resp.status_code == 200 else {}
    result = data.get("data", {}).get("createPost", {})

    if "post" in result:
        return {"success": True, "response": f"Scheduled: post {result['post']['id']}"}
    else:
        msg = result.get("message", resp.text[:200])
        return {"success": False, "response": msg}


def find_item_dir(item: dict) -> Path | None:
    """Locate the content directory for a pipeline item."""
    files = item.get("files", {})
    if files:
        for fpath in files.values():
            p = Path(fpath) if Path(fpath).is_absolute() else PROJECT_ROOT / fpath
            if p.parent.exists():
                return p.parent

    # Fallback: scan content/<platform>/
    platform_dir = CONTENT_DIR / item["platform"]
    if platform_dir.exists():
        for d in sorted(platform_dir.iterdir(), reverse=True):
            if d.is_dir():
                return d
    return None


def find_asset_file(item_dir: Path, platform: str) -> Path | None:
    """Find the main content file in an item directory.

    Supports both legacy names (pin.jpg, post.jpg) and descriptive names
    (e.g. 5-ratios-every-seller.jpg). Falls back to any file with a
    matching extension if no legacy name is found.
    """
    names = {
        "pinterest": ["pin.jpg", "pin.png", "pin.webp"],
        "instagram": ["post.jpg", "post.png", "post.webp", "video.mp4"],
        "tiktok": ["video.mp4"],
    }
    # 1. Try legacy exact names first
    for name in names.get(platform, []):
        p = item_dir / name
        if p.exists():
            return p
    # 2. Fall back to any file with matching extension (supports descriptive names)
    extensions = {
        "pinterest": [".jpg", ".png", ".webp"],
        "instagram": [".jpg", ".png", ".webp", ".mp4"],
        "tiktok": [".mp4"],
    }
    for ext in extensions.get(platform, []):
        matches = sorted(item_dir.glob(f"*{ext}"))
        if matches:
            return matches[0]
    return None


def schedule_from_pipeline(dry_run: bool = False) -> dict:
    """Schedule all items at 'publishing' stage via Buffer.

    Returns {scheduled: int, failed: int, errors: dict}.
    """
    from shared.pipeline_state import PipelineState

    state = PipelineState.load()
    publishing_items = state.get_items_by_stage("publishing")

    if not publishing_items:
        print("No items at 'publishing' stage.")
        return {"scheduled": 0, "failed": 0, "errors": {}}

    print(f"Found {len(publishing_items)} items to schedule.")
    if dry_run:
        print("[DRY RUN]\n")

    now = datetime.now(timezone.utc)
    base_time = now + timedelta(hours=1)

    scheduled = 0
    failed = 0
    errors = {}

    for i, item in enumerate(publishing_items):
        item_dir = find_item_dir(item)
        if not item_dir:
            errors[item["id"]] = "Content directory not found"
            failed += 1
            if not dry_run:
                state.update_item(item["id"], error="Content directory not found")
            print(f"  FAIL {item['id']}: directory not found")
            continue

        # Load metadata
        meta_path = item_dir / "metadata.json"
        if not meta_path.exists():
            errors[item["id"]] = "No metadata.json"
            failed += 1
            if not dry_run:
                state.update_item(item["id"], error="No metadata.json")
            print(f"  FAIL {item['id']}: no metadata.json")
            continue

        with open(meta_path, encoding="utf-8") as f:
            meta = json.load(f)

        # Find and upload asset
        asset_file = find_asset_file(item_dir, item["platform"])
        if not asset_file:
            errors[item["id"]] = "No content file found"
            failed += 1
            if not dry_run:
                state.update_item(item["id"], error="No content file found")
            print(f"  FAIL {item['id']}: no content file")
            continue

        # Upload to R2 (or use existing URL from metadata)
        asset_url = meta.get("r2_url", "")
        if not asset_url and not dry_run:
            r2_key = f"content/{item['platform']}/{item_dir.name}/{asset_file.name}"
            try:
                asset_url = upload_to_r2(asset_file, r2_key)
                meta["r2_url"] = asset_url
                with open(meta_path, "w", encoding="utf-8") as f:
                    json.dump(meta, f, indent=2, ensure_ascii=False)
            except RuntimeError as e:
                errors[item["id"]] = str(e)
                failed += 1
                state.update_item(item["id"], error=str(e))
                print(f"  FAIL {item['id']}: R2 upload failed")
                continue
        elif not asset_url:
            asset_url = f"{R2_URL}/content/{item['platform']}/{item_dir.name}/{asset_file.name}"

        # Schedule with staggered times
        sched_time = (base_time + timedelta(hours=i * 2)).strftime("%Y-%m-%dT%H:%M:%S.000Z")
        result = schedule_item(item, meta, asset_url, sched_time, dry_run=dry_run)

        if result["success"]:
            scheduled += 1
            print(f"  OK   {item['id']} ({item['platform']}): {result['response']}")
            if not dry_run:
                state.advance_item(item["id"], "published")
        else:
            failed += 1
            errors[item["id"]] = result["response"]
            print(f"  FAIL {item['id']} ({item['platform']}): {result['response']}")
            if not dry_run:
                state.update_item(item["id"], error=result["response"])

    if not dry_run:
        state.save()

    print(f"\nScheduling Results: {scheduled} scheduled, {failed} failed")
    return {"scheduled": scheduled, "failed": failed, "errors": errors}


# --- Legacy manual batch (preserved for backwards compat) ---

def run_manual_batch():
    """Original manual batch scheduling for specific slugs."""
    slugs = ['300-dpi-explained', 'file-naming-formula', 'international-sizes', 'manual-vs-snaptosize']
    date = '2026-03-11'
    board_map = {
        '300-dpi-explained': BOARDS['default'],
        'file-naming-formula': BOARDS['seller-tools'],
        'international-sizes': BOARDS['default'],
        'manual-vs-snaptosize': BOARDS['seller-tools'],
    }

    now = datetime.now(timezone.utc)
    base_time = now + timedelta(hours=1)

    for i, slug in enumerate(slugs):
        with open(f'marketing/social/content/pinterest/{date}-{slug}/metadata.json') as f:
            pin_meta = json.load(f)
        with open(f'marketing/social/content/instagram/{date}-{slug}/metadata.json') as f:
            ig_meta = json.load(f)

        sched_time = base_time + timedelta(hours=i * 2)
        sched_iso = sched_time.strftime('%Y-%m-%dT%H:%M:%S.000Z')

        pin_url = f'{R2_URL}/content/pinterest/{date}-{slug}/pin.jpg'
        ig_url = f'{R2_URL}/content/instagram/{date}-{slug}/post.jpg'

        pin_payload = {
            'query': MUTATION,
            'variables': {'input': {
                'channelId': PIN_ID, 'text': pin_meta['description'],
                'schedulingType': 'automatic', 'mode': 'customScheduled', 'dueAt': sched_iso,
                'assets': {'images': [{'url': pin_url}]},
                'metadata': {'pinterest': {
                    'title': slug.replace('-', ' ').title(),
                    'url': pin_meta.get('link', 'https://snaptosize.com/'),
                    'boardServiceId': board_map.get(slug, BOARDS['default'])
                }}
            }}
        }
        resp = requests.post(API, json=pin_payload, headers=HEADERS)
        print(f'PIN {slug}: {resp.status_code} {resp.text[:200]}')

        ig_payload = {
            'query': MUTATION,
            'variables': {'input': {
                'channelId': IG_ID, 'text': ig_meta['caption'],
                'schedulingType': 'automatic', 'mode': 'customScheduled', 'dueAt': sched_iso,
                'assets': {'images': [{'url': ig_url}]},
                'metadata': {'instagram': {'type': 'post', 'shouldShareToFeed': True}}
            }}
        }
        resp = requests.post(API, json=ig_payload, headers=HEADERS)
        print(f'IG  {slug}: {resp.status_code} {resp.text[:200]}')

    print('\nDone!')


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Schedule posts to Buffer")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--manual", action="store_true", help="Run legacy manual batch")
    args = parser.parse_args()

    if args.manual:
        run_manual_batch()
    else:
        schedule_from_pipeline(dry_run=args.dry_run)
