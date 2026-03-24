"""Upload images to R2 and schedule posts to Buffer for 2026-03-10 batch."""

import json
import os
import sys
import requests
import boto3
from pathlib import Path

# Load .env.buffer
env_path = Path(__file__).resolve().parent.parent.parent / ".env.buffer"
env = {}
for line in env_path.read_text().splitlines():
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        env[k.strip()] = v.strip()

BUFFER_TOKEN = env["BUFFER_API_TOKEN"]
BUFFER_URL = env["BUFFER_API_URL"]
PINTEREST_CH = env["BUFFER_PINTEREST_ID"]
INSTAGRAM_CH = env["BUFFER_INSTAGRAM_ID"]
R2_ACCOUNT = env["R2_ACCOUNT_ID"]
R2_KEY = env["R2_ACCESS_KEY_ID"]
R2_SECRET = env["R2_SECRET_ACCESS_KEY"]
R2_BUCKET = env["R2_BUCKET_NAME"]
R2_PUBLIC = env["R2_PUBLIC_URL"]

CONTENT_BASE = Path(__file__).resolve().parent / "content"

# Pinterest board service IDs
BOARD_MAP = {
    "W11-P01": "1088463872381113663",  # Etsy Print Size Guides (DPI guide)
    "W11-P02": "1088463872381113667",  # Digital Prints for Etsy Sellers (pricing)
    "W11-P03": "1088463872381113672",  # Etsy Seller Tools (listing photo sizes)
}

# Posts to schedule: (content_dir, image_file, channel_id, platform, due_at)
POSTS = [
    ("pinterest/2026-03-10-dpi-guide-etsy", "pin.png", PINTEREST_CH, "pinterest", "2026-03-11T17:00:00Z"),
    ("pinterest/2026-03-10-pricing-printable-bundles", "pin.png", PINTEREST_CH, "pinterest", "2026-03-11T20:00:00Z"),
    ("pinterest/2026-03-10-listing-photo-sizes", "pin.png", PINTEREST_CH, "pinterest", "2026-03-11T23:00:00Z"),
    ("instagram/2026-03-10-stop-manual-resizing", "post.png", INSTAGRAM_CH, "instagram", "2026-03-11T15:00:00Z"),
    # W11-I02 already scheduled via previous run at 2026-03-11T14:00:00Z - skip
    # ("instagram/2026-03-10-top-5-print-sizes", "post.png", INSTAGRAM_CH, "instagram", "2026-03-12T14:00:00Z"),
]

GRAPHQL_MUTATION = """
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    __typename
    ... on PostActionSuccess {
      post { id dueAt status }
    }
    ... on InvalidInputError { message }
    ... on UnauthorizedError { message }
    ... on UnexpectedError { message }
  }
}
"""

def upload_to_r2(s3, local_path, r2_key):
    """Upload file to R2, return public URL."""
    s3.upload_file(
        str(local_path), R2_BUCKET, r2_key,
        ExtraArgs={"ContentType": "image/png", "CacheControl": "public, max-age=31536000"}
    )
    url = f"{R2_PUBLIC}/{r2_key}"
    print(f"  Uploaded: {url}")
    return url

def schedule_post(channel_id, platform, text, image_url, due_at, metadata_json):
    """Schedule a post via Buffer GraphQL API."""
    input_data = {
        "channelId": channel_id,
        "text": text,
        "assets": {"images": [{"url": image_url}]},
        "schedulingType": "automatic",
        "dueAt": due_at,
        "mode": "customScheduled",
        "metadata": metadata_json,
    }
    resp = requests.post(
        BUFFER_URL,
        headers={
            "Authorization": f"Bearer {BUFFER_TOKEN}",
            "Content-Type": "application/json",
        },
        json={"query": GRAPHQL_MUTATION, "variables": {"input": input_data}},
        timeout=30,
    )
    if resp.status_code != 200:
        print(f"  HTTP {resp.status_code}: {resp.text[:500]}")
        return {"__typename": "HTTPError"}
    data = resp.json()
    result = data.get("data", {}).get("createPost", {})
    typename = result.get("__typename", "Unknown")
    if typename == "PostActionSuccess":
        post = result["post"]
        print(f"  Scheduled: id={post['id']} status={post['status']} dueAt={post['dueAt']}")
    else:
        print(f"  ERROR ({typename}): {result.get('message', json.dumps(result))}")
    return result

def main():
    # Init R2 client
    s3 = boto3.client(
        "s3",
        endpoint_url=f"https://{R2_ACCOUNT}.r2.cloudflarestorage.com",
        aws_access_key_id=R2_KEY,
        aws_secret_access_key=R2_SECRET,
        region_name="auto",
    )

    for content_dir, img_file, channel_id, platform, due_at in POSTS:
        dir_path = CONTENT_BASE / content_dir
        meta = json.loads((dir_path / "metadata.json").read_text())
        content_id = meta["content_id"]
        local_img = dir_path / img_file

        print(f"\n[{content_id}] {meta.get('title', meta.get('caption', '')[:50])}")

        # Upload to R2 with unique key
        r2_key = f"social/2026/03/{content_id}-{img_file}"
        image_url = upload_to_r2(s3, local_img, r2_key)

        # Build text and metadata per platform
        if platform == "pinterest":
            title = meta["title"]
            text = f"{title}\n\n{meta['description']}"
            board_id = BOARD_MAP.get(content_id, "1088463872381113663")
            post_metadata = {
                "pinterest": {
                    "url": meta["link"],
                    "title": title,
                    "boardServiceId": board_id,
                }
            }
        else:  # instagram
            text = meta["caption"]
            post_metadata = {
                "instagram": {
                    "type": "post",
                    "shouldShareToFeed": True,
                    "link": meta["link"],
                    "firstComment": meta.get("hashtags_first_comment", ""),
                }
            }

        schedule_post(channel_id, platform, text, image_url, due_at, post_metadata)

    print("\nDone!")

if __name__ == "__main__":
    main()
