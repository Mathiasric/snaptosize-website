"""Schedule 3 cross-posted items: 2 Pinterest→Instagram, 1 Instagram→Pinterest."""
import requests, json, os, time
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv

load_dotenv('.env.buffer')

TOKEN = os.environ.get('BUFFER_API_TOKEN', '')
IG_ID = os.environ.get('BUFFER_INSTAGRAM_ID', '')
PIN_ID = os.environ.get('BUFFER_PINTEREST_ID', '')
R2_URL = os.environ.get('R2_PUBLIC_URL', '')
API = os.environ.get('BUFFER_API_URL', '')
HEADERS = {'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json; charset=utf-8'}

MUTATION = """mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    ... on PostActionSuccess { post { id } }
    ... on InvalidInputError { message }
    ... on UnexpectedError { message }
    ... on LimitReachedError { message }
    ... on RestProxyError { message code }
  }
}"""

now = datetime.now(timezone.utc)
base_time = now + timedelta(hours=2)

posts = [
    # IG xpost 1: Living Room Wall Art (from Pinterest P03)
    {
        "platform": "instagram",
        "r2_url": f"{R2_URL}/content/instagram/2026-03-27-living-room-art-sizes-xpost/post.jpg",
        "caption": "Living room wall art buyers search for specific sizes.\n\n8\u00d710, 11\u00d714, 16\u00d720, 18\u00d724, 24\u00d730 \u2014 if your listing only offers one, you\u2019re invisible to the rest.\n\nOne upload \u2192 every standard frame size in portrait and landscape. 5 ratio packs, done in seconds.\n\nLink in bio \u2192 snaptosize.com\n\n#etsyseller #wallart #livingroomdecor #digitalprints #printsizes",
        "channel_id": IG_ID,
        "metadata": {"instagram": {"type": "post", "shouldShareToFeed": True}},
    },
    # IG xpost 2: More Sizes = More Sales (from Pinterest P02)
    {
        "platform": "instagram",
        "r2_url": f"{R2_URL}/content/instagram/2026-03-27-more-sizes-more-sales-xpost/post.jpg",
        "caption": "Offering 3 sizes vs 30+. Which seller wins?\n\nBuyers have a specific frame in mind. If you don\u2019t have their size, they buy from someone who does.\n\n5 ratio packs \u00d7 portrait and landscape = up to 70 print-ready files from one upload.\n\nLink in bio \u2192 snaptosize.com\n\n#etsyseller #digitalprints #printbusiness #wallart #etsytips",
        "channel_id": IG_ID,
        "metadata": {"instagram": {"type": "post", "shouldShareToFeed": True}},
    },
    # Pinterest xpost: Most Sellers vs Smart Sellers (from Instagram I01)
    {
        "platform": "pinterest",
        "r2_url": f"{R2_URL}/content/pinterest/2026-03-27-most-sellers-vs-smart-sellers-xpost/pin.jpg",
        "caption": "Most Etsy sellers offer 2\u20133 print sizes. Smart sellers offer 30+. Buyers search for specific frame sizes \u2014 8\u00d710, 16\u00d720, 18\u00d724 and more. Missing sizes = lost sales. One upload gives you every standard size in portrait and landscape, organized in 5 ratio packs.\n\nsnaptosize.com",
        "channel_id": PIN_ID,
        "metadata": {
            "pinterest": {
                "title": "Most Sellers vs Smart Sellers \u2014 Print Size Strategy",
                "url": "https://snaptosize.com/",
                "boardServiceId": "1088463872381113672",  # Seller Tools
            }
        },
    },
]

for i, post in enumerate(posts):
    sched_time = (base_time + timedelta(hours=i * 2)).strftime("%Y-%m-%dT%H:%M:%S.000Z")

    inp = {
        "channelId": post["channel_id"],
        "schedulingType": "automatic",
        "mode": "customScheduled",
        "dueAt": sched_time,
        "text": post["caption"],
        "assets": {"images": [{"url": post["r2_url"]}]},
        "metadata": post["metadata"],
    }

    payload = {"query": MUTATION, "variables": {"input": inp}}
    body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
    resp = requests.post(API, data=body, headers=HEADERS)
    data = resp.json() if resp.status_code == 200 else {}
    result = data.get("data", {}).get("createPost", {})

    if "post" in result:
        print(f"OK   {post['platform']:10s} | {result['post']['id']} | {post['r2_url'].split('/')[-2]}")
    else:
        msg = result.get("message", resp.text[:200])
        print(f"FAIL {post['platform']:10s} | {msg}")

    if i < len(posts) - 1:
        time.sleep(2)

print("\nDone! 3 cross-posts scheduled.")
