"""Schedule 3 ready/ images to Buffer via R2 upload + Buffer API."""
import os, json, subprocess, requests
from pathlib import Path
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv

load_dotenv('.env.buffer')

ROOT = Path(__file__).parent.parent.parent
TOKEN = os.environ['BUFFER_API_TOKEN']
IG_ID = os.environ['BUFFER_INSTAGRAM_ID']
PIN_ID = os.environ['BUFFER_PINTEREST_ID']
R2_URL = os.environ['R2_PUBLIC_URL']
API = os.environ.get('BUFFER_API_URL', 'https://api.buffer.com/graphql')
HEADERS = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}

MUTATION = """
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    ... on PostActionSuccess { post { id } }
    ... on InvalidInputError { message }
    ... on UnexpectedError { message }
    ... on LimitReachedError { message }
    ... on RestProxyError { message code }
  }
}"""

def upload_to_r2(local_path: Path, r2_key: str) -> str:
    bucket = "snaptosize-social"
    cmd = ["npx", "wrangler", "r2", "object", "put", f"{bucket}/{r2_key}",
           "--file", str(local_path), "--remote"]
    result = subprocess.run(cmd, capture_output=True, cwd=str(ROOT), shell=True)
    if result.returncode != 0:
        raise RuntimeError(f"R2 upload failed: {result.stderr}")
    return f"{R2_URL}/{r2_key}"

def schedule(channel_id, asset_url, text, platform, title=None, link=None, board_id=None, due_at=None):
    inp = {
        "channelId": channel_id,
        "schedulingType": "automatic",
        "mode": "customScheduled",
        "dueAt": due_at,
        "assets": {"images": [{"url": asset_url}]},
        "text": text,
    }
    if platform == "pinterest":
        inp["metadata"] = {"pinterest": {
            "title": title or "",
            "url": link or "https://app.snaptosize.com",
            "boardServiceId": board_id or "",
        }}
    elif platform == "instagram":
        inp["metadata"] = {"instagram": {"type": "post", "shouldShareToFeed": True}}

    resp = requests.post(API, json={"query": MUTATION, "variables": {"input": inp}}, headers=HEADERS)
    body = resp.json()
    if "errors" in body:
        raise RuntimeError(f"Buffer GraphQL error: {body['errors']}")
    data = body.get("data", {}).get("createPost", {})
    if "post" in data:
        return data["post"]["id"]
    raise RuntimeError(f"Buffer error: {body}")

now = datetime.now(timezone.utc)

ITEMS = [
    {
        "file": ROOT / "marketing/social/ready/instagram_ready/folder_chaos(12.04).jpg",
        "r2_key": "content/instagram/ready/folder_chaos_12apr.jpg",
        "platform": "instagram",
        "channel_id": IG_ID,
        "text": (
            "One upload. No more folder chaos. 📁\n\n"
            "Before: 60 files renamed manually, scattered in 4 folders, still wrong aspect ratios.\n"
            "After: 5 clean ZIP packs — every Etsy print size, auto-named, 300 DPI ready.\n\n"
            "Upload once → buyers get every size they need.\n\n"
            "Try free → link in bio\n\n"
            "#etsyseller #digitaldownload #printfiles #etsydigital #digitalartist #etsyselling"
        ),
        "due_at": (now + timedelta(hours=2)).isoformat(),
    },
    {
        "file": ROOT / "marketing/social/ready/pinterest_ready/yout_art_in_every_etsy_ratio_done(12.04).jpg",
        "r2_key": "content/pinterest/ready/yout_art_in_every_etsy_ratio_done_12apr.jpg",
        "platform": "pinterest",
        "channel_id": PIN_ID,
        "text": (
            "See your art in all 5 Etsy print ratios — 2:3, 3:4, 4:5, ISO A, and Extras. "
            "SnapToSize gives you 28 print sizes from 1 upload, all 300 DPI and Etsy-ready. "
            "No manual resizing. Perfect for digital downloads, wall art prints, and nursery art sellers."
        ),
        "title": "Every Etsy Print Ratio From One Upload",
        "link": "https://app.snaptosize.com",
        "board_id": "1088463872381113663",
        "due_at": (now + timedelta(hours=4)).isoformat(),
    },
]

for item in ITEMS:
    print(f"Uploading: {item['file'].name}...")
    url = upload_to_r2(item["file"], item["r2_key"])
    print(f"  R2: {url}")
    post_id = schedule(
        channel_id=item["channel_id"],
        asset_url=url,
        text=item["text"],
        platform=item["platform"],
        title=item.get("title"),
        link=item.get("link"),
        due_at=item["due_at"],
    )
    print(f"  OK: Buffer post {post_id} ({item['platform']})")

print("\nFerdig — 2 poster schedulert.")
