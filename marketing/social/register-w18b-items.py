"""Register W18b batch items into pipeline state (2026-04-20).
3 Pinterest + 1 Instagram: 2 Gemini + 2 React templates.
"""
import sys
sys.path.insert(0, 'C:/dev/snaptosize-website/.claude/agents/shared')
from pipeline_state import PipelineState

state = PipelineState.load()

items = [
    {
        "id": "W18-P04",
        "tool_used": "gemini-generate-image",
        "content_type": "dpi-quality",
        "layout": "gemini-lifestyle",
        "format": "image",
        "files": {
            "image": "marketing/social/content/pinterest/2026-04-20-300dpi-quality/2026-04-20-300dpi-quality.png",
            "metadata": "marketing/social/content/pinterest/2026-04-20-300dpi-quality/metadata.json",
        },
    },
    {
        "id": "W18-P05",
        "tool_used": "gemini-generate-image",
        "content_type": "product-overview",
        "layout": "gemini-lifestyle",
        "format": "image",
        "files": {
            "image": "marketing/social/content/pinterest/2026-04-20-one-upload-everywhere/2026-04-20-one-upload-everywhere.png",
            "metadata": "marketing/social/content/pinterest/2026-04-20-one-upload-everywhere/metadata.json",
        },
    },
    {
        "id": "W18-P06",
        "tool_used": "playwright-slide",
        "content_type": "how-it-works",
        "layout": "playwright-workflow-steps",
        "format": "image",
        "files": {
            "image": "marketing/social/content/pinterest/2026-04-20-workflow-steps-pinterest/2026-04-20-workflow-steps-pinterest.png",
            "metadata": "marketing/social/content/pinterest/2026-04-20-workflow-steps-pinterest/metadata.json",
        },
    },
    {
        "id": "W18-I02",
        "tool_used": "playwright-slide",
        "content_type": "product-showcase",
        "layout": "playwright-neon-pack",
        "format": "image",
        "files": {
            "image": "marketing/social/content/instagram/2026-04-20-bunny-neon-pack-instagram/2026-04-20-bunny-neon-pack-instagram.png",
            "metadata": "marketing/social/content/instagram/2026-04-20-bunny-neon-pack-instagram/metadata.json",
        },
    },
]

for item in items:
    item_id = item["id"]
    result = state.update_item(
        item_id,
        tool_used=item["tool_used"],
        content_type=item["content_type"],
        layout=item["layout"],
        format=item["format"],
        files=item["files"],
        stage="creation",
    )
    status = "OK" if result else "FAILED (slot not found?)"
    print(f"Updated: {item_id} -> stage=creation [{status}]")

state.save()
print("Pipeline state saved.")
