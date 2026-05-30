"""Update existing Pinterest pins with keyword-optimised titles and descriptions.

Usage:
    python marketing/social/update-existing-pins.py [--dry-run]

Requires PINTEREST_ACCESS_TOKEN with pins:write + boards:write scope in .env.local.
The Trial-access token only has read scope — regenerate with Standard access.
"""
import os, json, re, sys, time
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv('.env.local')
load_dotenv('.env.buffer')

TOKEN = os.environ.get('PINTEREST_ACCESS_TOKEN', '')
DRY_RUN = '--dry-run' in sys.argv

HEADERS = {
    'Authorization': f'Bearer {TOKEN}',
    'Content-Type': 'application/json',
}

# Board ID → keyword list (mirrors schedule-batch.py PINTEREST_KEYWORDS)
BOARD_KEYWORDS = {
    '1088463872381113663': [  # Etsy Print Size Guides
        'etsy print sizes guide', 'digital download sizes', 'printable art dimensions',
        'etsy file size chart', 'print size chart for etsy sellers',
    ],
    '1088463872381113672': [  # Etsy Seller Tools
        'etsy seller tips', 'etsy digital download tips', 'etsy shop workflow',
        'sell digital art on etsy', 'etsy printable files tips',
    ],
    '1088463872381113667': [  # Digital Prints for Etsy Sellers
        'digital prints for etsy', 'etsy digital download', 'instant download printable art',
        'printable wall art etsy', 'sell printables on etsy',
    ],
    '1088463872381113671': [  # Printable Wall Art Business
        'printable wall art business', 'sell wall art printables etsy',
        'etsy wall art seller tips', 'grow etsy printable shop',
    ],
}
DEFAULT_KEYWORDS = ['etsy print sizes', 'digital download', 'printable wall art', 'etsy seller tips']

BOARD_DESCRIPTIONS = {
    '1088463872381113663': 'Complete guides to print sizes and dimensions for Etsy digital download sellers. Find standard US, international ISO, and ratio-based print sizes to include in your Etsy listings. Perfect for sellers offering printable wall art, digital art prints, and instant download files.',
    '1088463872381113672': 'Tools, tips, and automation for Etsy digital product sellers. Discover how to streamline your workflow, create print-ready files fast, and scale your Etsy digital download shop. Save hours on file preparation and focus on growing your Etsy business.',
    '1088463872381113667': 'Tips and guides for Etsy sellers offering digital print downloads. Learn how to prepare print-ready files, which sizes to include for US and international buyers, and how to organize your digital art downloads for a successful Etsy printable shop.',
    '1088463872381113671': 'Grow your printable wall art business on Etsy. Strategies for selling digital wall art prints, organizing printable poster downloads, and scaling your shop with clean, print-ready files. Turn one upload into 70 files and serve every buyer.',
}


def clean_title(title: str, pin_id: str = '') -> str:
    if not title or title.strip().lower() in ('undefined', 'none', 'null', ''):
        return ''
    return title.strip()[:100]


def enrich_description(description: str, board_id: str) -> str:
    base = (description or '').strip()
    keywords = BOARD_KEYWORDS.get(board_id, DEFAULT_KEYWORDS)
    suffix = ' | ' + ' | '.join(keywords)
    # Don't enrich if already keyword-enriched
    if any(k in base for k in keywords):
        return base
    max_base = 500 - len(suffix)
    if len(base) > max_base:
        base = base[:max_base - 1].rstrip()
    return base + suffix


def get_all_pins() -> list:
    """Fetch up to 100 most recent pins."""
    r = requests.get(
        'https://api.pinterest.com/v5/pins?page_size=100',
        headers=HEADERS
    )
    if not r.ok:
        print(f'ERROR fetching pins: {r.json()}')
        return []
    return r.json().get('items', [])


def get_pin_board(pin_id: str) -> str:
    """Get board ID for a pin via analytics (workaround since pin object lacks board_id in v5)."""
    r = requests.get(f'https://api.pinterest.com/v5/pins/{pin_id}', headers=HEADERS)
    if r.ok:
        return r.json().get('board_id', '')
    return ''


def patch_pin(pin_id: str, title: str, description: str) -> bool:
    """PATCH a pin with new title and description. Requires pins:write scope."""
    payload = {}
    if title:
        payload['title'] = title
    if description:
        payload['description'] = description
    if not payload:
        return False
    if DRY_RUN:
        print(f'  [DRY RUN] PATCH {pin_id}: title={title[:40]!r} | desc={description[:60]!r}...')
        return True
    r = requests.patch(
        f'https://api.pinterest.com/v5/pins/{pin_id}',
        headers=HEADERS,
        json=payload
    )
    return r.ok


def update_board_descriptions():
    """PATCH board descriptions. Requires boards:write scope."""
    print('\n=== Updating board descriptions ===')
    for board_id, desc in BOARD_DESCRIPTIONS.items():
        if DRY_RUN:
            print(f'  [DRY RUN] PATCH board {board_id}: {desc[:60]}...')
            continue
        r = requests.patch(
            f'https://api.pinterest.com/v5/boards/{board_id}',
            headers=HEADERS,
            json={'description': desc}
        )
        if r.ok:
            print(f'  ✓ Board {board_id} updated')
        else:
            print(f'  ✗ Board {board_id} failed: {r.json().get("message", r.text[:100])}')
        time.sleep(0.5)


def main():
    if not TOKEN:
        print('ERROR: PINTEREST_ACCESS_TOKEN not set in .env.local')
        sys.exit(1)

    print(f'Pinterest Pin Optimizer {"[DRY RUN]" if DRY_RUN else ""}')
    print('=' * 50)

    # 1. Update board descriptions
    update_board_descriptions()

    # 2. Fetch and update pins
    print('\n=== Fetching pins ===')
    pins = get_all_pins()
    print(f'Found {len(pins)} pins')

    updated = 0
    skipped = 0
    failed = 0

    for pin in pins:
        pin_id = pin['id']
        raw_title = pin.get('title', '')
        raw_desc = pin.get('description', '')
        board_id = pin.get('board_id', '')

        # Get board_id if missing
        if not board_id:
            time.sleep(0.3)
            board_id = get_pin_board(pin_id)

        new_title = clean_title(raw_title, pin_id)
        new_desc = enrich_description(raw_desc, board_id)

        title_changed = new_title != raw_title.strip() and new_title
        desc_changed = new_desc != raw_desc.strip()

        if not title_changed and not desc_changed:
            skipped += 1
            continue

        print(f'  Updating {pin_id}: title_fix={title_changed}, desc_enrich={desc_changed}')
        ok = patch_pin(pin_id, new_title if title_changed else '', new_desc if desc_changed else '')
        if ok:
            updated += 1
        else:
            failed += 1
        time.sleep(0.5)  # Rate limit buffer

    print(f'\nDone: {updated} updated, {skipped} skipped (already OK), {failed} failed')
    if failed > 0:
        print('NOTE: Failures likely mean the token needs pins:write scope.')
        print('Regenerate at developers.pinterest.com with Standard access (not Trial).')


if __name__ == '__main__':
    main()
