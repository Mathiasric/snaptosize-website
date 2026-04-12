"""Schedule a single pin folder to Buffer + upload to R2."""
import importlib.util, sys, json, subprocess, requests, re, os
from pathlib import Path
from dotenv import load_dotenv

PROJECT_ROOT = Path(__file__).parent.parent.parent
load_dotenv(PROJECT_ROOT / '.env.buffer')

TOKEN = os.environ.get('BUFFER_API_TOKEN', '')
PIN_ID = os.environ.get('BUFFER_PINTEREST_ID', '')
R2_URL = os.environ.get('R2_PUBLIC_URL', '')
API = os.environ.get('BUFFER_API_URL', '')
HEADERS = {'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json; charset=utf-8'}

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

SLUG = "2026-04-12-folder-chaosnew"
PLATFORM = "pinterest"
SCHED_TIME = "2026-04-15T10:00:00.000Z"

item_dir = PROJECT_ROOT / "marketing" / "social" / "content" / PLATFORM / SLUG
meta = json.loads((item_dir / "metadata.json").read_text(encoding="utf-8"))
asset_file = item_dir / "pin.jpg"

# Upload to R2
r2_key = f"content/{PLATFORM}/{SLUG}/pin.jpg"
print(f"Uploading {asset_file.name} → R2 snaptosize-social/{r2_key}")
cmd = ["npx", "wrangler", "r2", "object", "put", f"snaptosize-social/{r2_key}",
       "--file", str(asset_file), "--remote"]
result = subprocess.run(cmd, capture_output=True, text=True, cwd=str(PROJECT_ROOT), shell=True)
if result.returncode != 0:
    print(f"R2 upload failed: {result.stderr}")
    sys.exit(1)
asset_url = f"{R2_URL}/{r2_key}"
print(f"R2 URL: {asset_url}")

# Resolve board
board = meta.get("board", "")
board_id = BOARDS.get(board, BOARDS.get(board.lower().replace(" ", "-"), BOARDS["default"]))

# Add UTM
link = meta.get("link", "https://snaptosize.com/")
clean_slug = re.sub(r"^\d{4}-\d{2}-\d{2}-", "", SLUG)
if "utm_source" not in link:
    sep = "&" if "?" in link else "?"
    if sep == "?" and not link.endswith("/"):
        link += "/"
    link = f"{link}{sep}utm_source=pinterest&utm_medium=social&utm_campaign=organic&utm_content={clean_slug}"

inp = {
    "channelId": PIN_ID,
    "schedulingType": "automatic",
    "mode": "customScheduled",
    "dueAt": SCHED_TIME,
    "assets": {"images": [{"url": asset_url}]},
    "text": meta.get("description", ""),
    "metadata": {
        "pinterest": {
            "title": meta.get("title", ""),
            "url": link,
            "boardServiceId": board_id,
        }
    }
}

payload = {"query": MUTATION, "variables": {"input": inp}}
body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
resp = requests.post(API, data=body, headers=HEADERS)
data = resp.json() if resp.status_code == 200 else {}
create_result = data.get("data", {}).get("createPost", {})

if "post" in create_result:
    print(f"Scheduled to Buffer: post ID {create_result['post']['id']}")
    print(f"Board: {board} ({board_id})")
    print(f"Scheduled for: {SCHED_TIME}")
else:
    msg = create_result.get("message", resp.text[:300])
    print(f"Buffer error: {msg}")
    sys.exit(1)
