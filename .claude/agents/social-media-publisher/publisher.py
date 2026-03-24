#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Social Media Publisher - Buffer Integration
Automatically schedules social media content to Buffer for auto-publishing
"""

import os
import sys
import json
import requests
import mimetypes
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Optional, Tuple

# Add agents to path for shared modules
sys.path.insert(0, str(Path(__file__).parent.parent))

# Fix Windows console encoding for emojis
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Configuration
BUFFER_API_URL = "https://api.buffer.com/graphql"
BUFFER_ORG_ID = "69aefe9a4b1a6472bb516196"
BUFFER_INSTAGRAM_ID = "69aefeb87be9f8b1713b16a6"
BUFFER_PINTEREST_ID = "69af09267be9f8b1713b4261"
BUFFER_TIKTOK_ID = None  # Set when TikTok channel is connected in Buffer
DEFAULT_PINTEREST_BOARD = "1088463872381113663"  # "Etsy Print Size Guides" — fallback board

# Board mapping by keyword for auto-selection
PINTEREST_BOARDS = {
    "1088463872381113663": "Etsy Print Size Guides",
    "1088463872381113667": "Digital Prints for Etsy Sellers",
    "1088463872381113672": "Etsy Seller Tools",
    "1088463872381113671": "Printable Wall Art Business",
}

# Cloudflare R2 Configuration (loaded from .env.buffer)
R2_ACCOUNT_ID = None  # Will be loaded from env
R2_ACCESS_KEY_ID = None
R2_SECRET_ACCESS_KEY = None
R2_BUCKET_NAME = "snaptosize-social"
R2_PUBLIC_URL = None  # Will be constructed from bucket name

# Paths
PROJECT_ROOT = Path(__file__).parent.parent.parent.parent
CONTENT_DIR = PROJECT_ROOT / "marketing" / "social" / "content"
TRACKER_FILE = PROJECT_ROOT / "marketing" / "social" / "CONTENT_TRACKER.md"

class BufferPublisher:
    def __init__(self, api_token: str, r2_config: Dict[str, str]):
        self.api_token = api_token
        self.headers = {
            "Authorization": f"Bearer {api_token}",
            "Content-Type": "application/json"
        }

        # Initialize R2 client
        try:
            import boto3
            self.s3_client = boto3.client(
                's3',
                endpoint_url=f"https://{r2_config['account_id']}.r2.cloudflarestorage.com",
                aws_access_key_id=r2_config['access_key_id'],
                aws_secret_access_key=r2_config['secret_access_key'],
                region_name='auto'
            )
            self.bucket_name = r2_config['bucket_name']
            self.public_url = r2_config['public_url']
        except ImportError:
            print("✗ Error: boto3 not installed. Run: pip install boto3")
            sys.exit(1)
        except Exception as e:
            print(f"✗ Error initializing R2 client: {e}")
            sys.exit(1)

    def upload_image_to_hosting(self, image_path: Path) -> Optional[str]:
        """Upload image to Cloudflare R2 and return public URL"""
        try:
            # Generate a unique key for the image (date-based folder structure)
            date_prefix = datetime.utcnow().strftime("%Y/%m")
            object_key = f"social/{date_prefix}/{image_path.name}"

            # Detect content type
            content_type, _ = mimetypes.guess_type(str(image_path))
            if not content_type:
                content_type = 'image/png'

            # Upload to R2
            with open(image_path, 'rb') as f:
                self.s3_client.put_object(
                    Bucket=self.bucket_name,
                    Key=object_key,
                    Body=f,
                    ContentType=content_type,
                    CacheControl='public, max-age=31536000'  # 1 year cache
                )

            # Construct public URL
            image_url = f"{self.public_url}/{object_key}"
            print(f"    ✓ Uploaded {image_path.name} -> {image_url}")
            return image_url

        except Exception as e:
            print(f"    ✗ Error uploading {image_path.name}: {e}")
            return None

    def create_post(
        self,
        channel_id: str,
        text: str,
        image_urls: List[str],
        scheduled_at: datetime,
        is_instagram: bool = False,
        pinterest_url: Optional[str] = None,
        pinterest_title: Optional[str] = None,
        pinterest_board_id: Optional[str] = None,
        instagram_first_comment: Optional[str] = None
    ) -> Optional[str]:
        """Create a post in Buffer"""

        # Format images for Buffer API
        images_input = [{"url": url} for url in image_urls]

        # Convert scheduled_at to ISO 8601 UTC
        scheduled_at_utc = scheduled_at.isoformat() + "Z"

        # Platform-specific metadata
        metadata = {}
        if is_instagram:
            instagram_meta = {
                "type": "post",
                "shouldShareToFeed": True,
                "link": "https://app.snaptosize.com/app/quick-export"  # Direct app link
            }
            if instagram_first_comment:
                instagram_meta["firstComment"] = instagram_first_comment
            metadata = {"instagram": instagram_meta}
        elif pinterest_url or pinterest_board_id:
            pinterest_meta = {
                "url": pinterest_url or "https://app.snaptosize.com/app/quick-export",
                "boardServiceId": pinterest_board_id or DEFAULT_PINTEREST_BOARD,
            }
            if pinterest_title:
                pinterest_meta["title"] = pinterest_title
            metadata = {"pinterest": pinterest_meta}

        mutation = """
        mutation CreatePost($input: CreatePostInput!) {
          createPost(input: $input) {
            __typename
            ... on PostActionSuccess {
              post {
                id
                dueAt
                status
              }
            }
            ... on InvalidInputError {
              message
            }
            ... on UnauthorizedError {
              message
            }
            ... on UnexpectedError {
              message
            }
          }
        }
        """

        variables = {
            "input": {
                "channelId": channel_id,
                "text": text,
                "assets": {
                    "images": images_input
                },
                "schedulingType": "automatic",
                "dueAt": scheduled_at_utc,
                "mode": "customScheduled",
                **({} if not metadata else {"metadata": metadata})
            }
        }

        try:
            response = requests.post(
                BUFFER_API_URL,
                headers=self.headers,
                json={"query": mutation, "variables": variables},
                timeout=30
            )

            # Check for HTTP errors first
            if response.status_code != 200:
                print(f"    ✗ HTTP Error {response.status_code}: {response.text[:500]}")
                return None

            result = response.json()

            if "errors" in result:
                print(f"    ✗ GraphQL Error: {result['errors']}")
                return None

            post_data = result.get("data", {}).get("createPost", {})

            typename = post_data.get("__typename")

            # Handle errors
            error_types = ["InvalidInputError", "UnauthorizedError", "UnexpectedError",
                          "NotFoundError", "RestProxyError", "LimitReachedError"]
            if typename in error_types:
                print(f"    ✗ Buffer Error ({typename}): {post_data.get('message', 'No message')}")
                return None

            # Handle success
            if typename == "PostActionSuccess":
                post = post_data.get("post", {})
                post_id = post.get("id")
                if post_id:
                    print(f"    ✓ Scheduled post {post_id} for {scheduled_at_utc}")
                    return post_id

            print(f"    ✗ Unexpected response type: {typename}")
            return None

        except Exception as e:
            print(f"    ✗ Error creating post: {e}")
            return None

def find_content_to_publish(platform: Optional[str] = None) -> List[Tuple[Path, Dict]]:
    """Find content with 'Created' status"""
    content = []

    platforms = [platform] if platform else ["instagram", "pinterest"]

    for plat in platforms:
        platform_dir = CONTENT_DIR / plat
        if not platform_dir.exists():
            continue

        for content_folder in platform_dir.iterdir():
            if not content_folder.is_dir():
                continue

            metadata_file = content_folder / "metadata.json"
            if not metadata_file.exists():
                continue

            try:
                with open(metadata_file, encoding='utf-8') as f:
                    metadata = json.load(f)

                # Check if this content is ready to publish
                # You'd check the tracker here, but for MVP we'll process all
                content.append((content_folder, metadata))

            except Exception as e:
                print(f"✗ Error reading {metadata_file}: {e}")

    return content

def calculate_schedule(posts: List[Dict], platform: str, start_date: datetime) -> List[Tuple[Dict, datetime]]:
    """Calculate posting schedule"""
    schedule = []

    if platform == "instagram":
        # 1 post/day at 10 AM EST (14:00 UTC)
        for i, post in enumerate(posts):
            scheduled_time = start_date + timedelta(days=i)
            scheduled_time = scheduled_time.replace(hour=14, minute=0, second=0, microsecond=0)
            schedule.append((post, scheduled_time))

    elif platform == "pinterest":
        # 5 posts/day at various times
        times_utc = [14, 17, 19, 22, 1]  # EST 10am, 1pm, 3pm, 6pm, 9pm -> UTC
        for i, post in enumerate(posts):
            day_offset = i // 5
            time_slot = times_utc[i % 5]
            scheduled_time = start_date + timedelta(days=day_offset)
            scheduled_time = scheduled_time.replace(hour=time_slot, minute=0, second=0, microsecond=0)
            schedule.append((post, scheduled_time))

    return schedule

def main():
    print("🚀 Social Media Publisher")
    print("=" * 50)

    # Load API token and R2 config from env
    api_token_file = PROJECT_ROOT / ".env.buffer"
    if not api_token_file.exists():
        print("✗ Error: .env.buffer file not found")
        sys.exit(1)

    # Read credentials from .env.buffer
    api_token = None
    r2_config = {}

    with open(api_token_file, encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue

            if "=" in line:
                key, value = line.split("=", 1)
                key = key.strip()
                value = value.strip()

                if key == "BUFFER_API_TOKEN":
                    api_token = value
                elif key == "R2_ACCOUNT_ID":
                    r2_config['account_id'] = value
                elif key == "R2_ACCESS_KEY_ID":
                    r2_config['access_key_id'] = value
                elif key == "R2_SECRET_ACCESS_KEY":
                    r2_config['secret_access_key'] = value
                elif key == "R2_BUCKET_NAME":
                    r2_config['bucket_name'] = value
                elif key == "R2_PUBLIC_URL":
                    r2_config['public_url'] = value

    if not api_token:
        print("✗ Error: BUFFER_API_TOKEN not found in .env.buffer")
        sys.exit(1)

    # Validate R2 config
    required_r2_keys = ['account_id', 'access_key_id', 'secret_access_key', 'bucket_name', 'public_url']
    missing_keys = [k for k in required_r2_keys if k not in r2_config]
    if missing_keys:
        print(f"✗ Error: Missing R2 configuration in .env.buffer: {', '.join(missing_keys)}")
        print("\nRequired R2 variables:")
        print("  R2_ACCOUNT_ID=your_account_id")
        print("  R2_ACCESS_KEY_ID=your_access_key")
        print("  R2_SECRET_ACCESS_KEY=your_secret_key")
        print("  R2_BUCKET_NAME=snaptosize-social")
        print("  R2_PUBLIC_URL=https://social.snaptosize.com")
        sys.exit(1)

    # Initialize publisher
    publisher = BufferPublisher(api_token, r2_config)

    # Find content to publish
    print("\n📂 Scanning for content...")
    all_content = find_content_to_publish()

    if not all_content:
        print("✓ No content found to publish")
        return

    print(f"✓ Found {len(all_content)} pieces of content")

    # Group by platform
    instagram_content = [(folder, meta) for folder, meta in all_content if meta.get("platform") == "Instagram"]
    pinterest_content = [(folder, meta) for folder, meta in all_content if meta.get("platform") == "Pinterest"]

    print(f"  - Instagram: {len(instagram_content)} posts")
    print(f"  - Pinterest: {len(pinterest_content)} pins")

    # Calculate schedule (start tomorrow)
    start_date = datetime.utcnow() + timedelta(days=1)

    instagram_schedule = calculate_schedule(
        [meta for _, meta in instagram_content],
        "instagram",
        start_date
    )

    pinterest_schedule = calculate_schedule(
        [meta for _, meta in pinterest_content],
        "pinterest",
        start_date
    )

    # Process Instagram posts
    if instagram_content:
        print(f"\n📱 Publishing {len(instagram_content)} Instagram posts...")

        for i, ((folder, metadata), (_, scheduled_time)) in enumerate(zip(instagram_content, instagram_schedule)):
            print(f"\n[{i+1}/{len(instagram_content)}] {metadata.get('content_id', 'Unknown')}")

            # Get image files
            image_files = metadata.get("files", [])
            image_paths = [folder / img for img in image_files if img.endswith(('.png', '.jpg', '.jpeg'))]

            if not image_paths:
                print("  ✗ No images found")
                continue

            # Upload images
            image_urls = []
            for img_path in image_paths:
                url = publisher.upload_image_to_hosting(img_path)
                if url:
                    image_urls.append(url)

            if not image_urls:
                print("  ✗ Failed to upload images")
                continue

            # Create post
            caption = metadata.get("caption", "")
            hashtags = metadata.get("hashtags_first_comment", "")

            post_id = publisher.create_post(
                BUFFER_INSTAGRAM_ID,
                caption,  # Caption only (no hashtags)
                image_urls,
                scheduled_time,
                is_instagram=True,
                instagram_first_comment=hashtags  # Hashtags in first comment
            )

            if post_id:
                print(f"  ✓ Success! Buffer Post ID: {post_id}")

    # Process Pinterest pins
    if pinterest_content:
        print(f"\n📌 Publishing {len(pinterest_content)} Pinterest pins...")

        for i, ((folder, metadata), (_, scheduled_time)) in enumerate(zip(pinterest_content, pinterest_schedule)):
            print(f"\n[{i+1}/{len(pinterest_content)}] {metadata.get('content_id', 'Unknown')}")

            # Get image file (usually just one for Pinterest)
            image_files = metadata.get("files", [])
            image_paths = [folder / img for img in image_files if img.endswith(('.png', '.jpg', '.jpeg'))]

            if not image_paths:
                print("  ✗ No images found")
                continue

            # Upload first image only (Pinterest single pins)
            image_url = publisher.upload_image_to_hosting(image_paths[0])

            if not image_url:
                print("  ✗ Failed to upload image")
                continue

            # Create pin
            title = metadata.get("title", "")
            description = metadata.get("description", "")
            destination_url = metadata.get("link", "https://app.snaptosize.com/app/quick-export")
            board_id = metadata.get("board_id", DEFAULT_PINTEREST_BOARD)
            text = f"{title}\n\n{description}" if title else description

            post_id = publisher.create_post(
                BUFFER_PINTEREST_ID,
                text,
                [image_url],
                scheduled_time,
                pinterest_url=destination_url,
                pinterest_title=title,
                pinterest_board_id=board_id,
            )

            if post_id:
                print(f"  ✓ Success! Buffer Post ID: {post_id}")

    print("\n" + "=" * 50)
    print("✅ Publishing complete!")
    print(f"\n📊 Summary:")
    print(f"  Instagram: {len(instagram_content)} posts scheduled")
    print(f"  Pinterest: {len(pinterest_content)} pins scheduled")
    print(f"\n🔗 View in Buffer: https://buffer.com/app")

def update_tracker(metadata: Dict, post_id: str, platform: str) -> None:
    """Append entry to CONTENT_TRACKER.md after successful publish."""
    if not TRACKER_FILE.exists():
        return
    content_id = metadata.get("content_id") or metadata.get("id", "Unknown")
    title = metadata.get("title") or metadata.get("caption", "")[:50]
    date = datetime.utcnow().strftime("%Y-%m-%d")
    line = f"- {content_id}: {title} → Scheduled ({date})\n"
    with open(TRACKER_FILE, "a", encoding="utf-8") as f:
        f.write(line)


def publish_from_pipeline(dry_run: bool = False) -> None:
    """Publish items from pipeline-state.json where stage == 'publishing'."""
    try:
        from shared.pipeline_state import PipelineState
    except ImportError:
        print("Pipeline state module not available. Using legacy mode.")
        main()
        return

    state = PipelineState.load()
    items = state.get_items_by_stage("publishing")

    if not items:
        print("No items with stage 'publishing' in pipeline state.")
        return

    print(f"Found {len(items)} items ready to publish.")

    if dry_run:
        print("\n[DRY RUN] Would publish:")
        for item in items:
            print(f"  {item['id']}: {item['platform']} {item['format']}")
        return

    # Load credentials and init publisher (same as main())
    api_token_file = PROJECT_ROOT / ".env.buffer"
    if not api_token_file.exists():
        print("Error: .env.buffer not found")
        return

    api_token = None
    r2_config = {}
    with open(api_token_file, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, value = line.split("=", 1)
                key, value = key.strip(), value.strip()
                if key == "BUFFER_API_TOKEN":
                    api_token = value
                elif key == "R2_ACCOUNT_ID":
                    r2_config["account_id"] = value
                elif key == "R2_ACCESS_KEY_ID":
                    r2_config["access_key_id"] = value
                elif key == "R2_SECRET_ACCESS_KEY":
                    r2_config["secret_access_key"] = value
                elif key == "R2_BUCKET_NAME":
                    r2_config["bucket_name"] = value
                elif key == "R2_PUBLIC_URL":
                    r2_config["public_url"] = value

    if not api_token:
        print("Error: BUFFER_API_TOKEN not found")
        return

    publisher = BufferPublisher(api_token, r2_config)
    start_date = datetime.utcnow() + timedelta(days=1)

    channel_map = {
        "instagram": BUFFER_INSTAGRAM_ID,
        "pinterest": BUFFER_PINTEREST_ID,
        "tiktok": BUFFER_TIKTOK_ID,
    }

    # Group by platform for scheduling
    by_platform: Dict[str, list] = {}
    for item in items:
        by_platform.setdefault(item["platform"], []).append(item)

    for platform, platform_items in by_platform.items():
        channel_id = channel_map.get(platform)
        if not channel_id:
            print(f"No Buffer channel for {platform}, skipping.")
            for item in platform_items:
                state.fail_item(item["id"], f"No Buffer channel configured for {platform}")
            continue

        schedule = calculate_schedule(
            [{"metadata": i} for i in platform_items], platform, start_date
        )

        for (_, scheduled_time), item in zip(schedule, platform_items):
            content_dir = None
            # Find content directory from item files or metadata
            files = item.get("files", {})
            if isinstance(files, dict) and "dir" in files:
                content_dir = Path(files["dir"])
            else:
                # Search content directories for matching ID
                platform_dir = CONTENT_DIR / platform
                if platform_dir.exists():
                    for folder in platform_dir.iterdir():
                        meta_file = folder / "metadata.json"
                        if meta_file.exists():
                            try:
                                with open(meta_file, encoding="utf-8") as f:
                                    meta = json.load(f)
                                if meta.get("id") == item["id"] or meta.get("content_id") == item["id"]:
                                    content_dir = folder
                                    break
                            except Exception:
                                continue

            if not content_dir or not content_dir.exists():
                print(f"  Content dir not found for {item['id']}, skipping.")
                state.fail_item(item["id"], "Content directory not found")
                continue

            meta_file = content_dir / "metadata.json"
            if not meta_file.exists():
                state.fail_item(item["id"], "metadata.json not found")
                continue

            with open(meta_file, encoding="utf-8") as f:
                metadata = json.load(f)

            # Upload images
            image_files = metadata.get("files", [])
            image_paths = [content_dir / img for img in image_files if img.endswith((".png", ".jpg", ".jpeg"))]
            image_urls = []
            for img_path in image_paths:
                if img_path.exists():
                    url = publisher.upload_image_to_hosting(img_path)
                    if url:
                        image_urls.append(url)

            if not image_urls:
                state.fail_item(item["id"], "No images uploaded successfully")
                continue

            # Create post
            is_instagram = platform == "instagram"
            first_comment = metadata.get("hashtags_first_comment") if is_instagram else None

            if platform == "pinterest":
                title = metadata.get("title", "")
                description = metadata.get("description", "")
                text = f"{title}\n\n{description}" if title else description
                pin_url = metadata.get("link", "https://app.snaptosize.com/app/quick-export")
                board_id = metadata.get("board_id", DEFAULT_PINTEREST_BOARD)
            else:
                text = metadata.get("caption") or metadata.get("description", "")
                pin_url = None
                title = None
                board_id = None

            post_id = publisher.create_post(
                channel_id, text, image_urls, scheduled_time,
                is_instagram=is_instagram,
                pinterest_url=pin_url,
                pinterest_title=title if platform == "pinterest" else None,
                pinterest_board_id=board_id,
                instagram_first_comment=first_comment,
            )

            if post_id:
                state.advance_item(item["id"], "published")
                update_tracker(metadata, post_id, platform)
                print(f"  Published {item['id']} → Buffer post {post_id}")
            else:
                state.fail_item(item["id"], "Buffer API create_post failed")

    state.set_stage_status("publisher", "completed")
    state.get_metrics()
    state.save()
    print("\nPipeline publishing complete.")
    print(state.summary())


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--pipeline", action="store_true", help="Read from pipeline-state.json")
    parser.add_argument("--dry-run", action="store_true", help="Dry run mode")
    args = parser.parse_args()

    if args.pipeline:
        publish_from_pipeline(dry_run=args.dry_run)
    else:
        main()
