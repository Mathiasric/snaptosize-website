---
name: outreach-tracker
description: "Track outreach opportunities: Reddit posts, Facebook groups, influencer contacts, guest posts. Invoke with /outreach-add, /outreach-status, or /outreach-update [id] [status]."
---

# Outreach Tracker

Simple tracking for outreach opportunities across platforms.

## Commands

- **`/outreach-add`** — Add a new outreach opportunity
- **`/outreach-status`** — Show all tracked opportunities grouped by status
- **`/outreach-update [id] [status]`** — Update status of an opportunity

## Data File

Location: `marketing/outreach/outreach-tracker.json`

### Item Schema

```json
{
  "id": "OUT-001",
  "type": "reddit_post|facebook_group|influencer|guest_post|forum|other",
  "platform": "reddit|facebook|instagram|youtube|blog|forum",
  "community": "r/EtsySellers",
  "url": "https://...",
  "status": "identified|contacted|in_progress|posted|completed|declined",
  "priority": "P0|P1|P2",
  "notes": "Free-form notes",
  "created_at": "2026-03-10T...",
  "updated_at": "2026-03-10T..."
}
```

## `/outreach-add`

Prompt for:
1. Type (reddit_post, facebook_group, influencer, guest_post, forum, other)
2. Platform
3. Community/name
4. URL (optional)
5. Priority (P0/P1/P2)
6. Notes

Then:
1. Read `marketing/outreach/outreach-tracker.json`
2. Generate next ID: `OUT-NNN` (incrementing)
3. Add item with status `identified`
4. Save file

## `/outreach-status`

Output format:

```
Outreach Tracker: 12 opportunities

Identified (5):
  OUT-001 [P0] reddit_post  r/EtsySellers — "Share size guide"
  OUT-003 [P1] facebook_group  Etsy Digital Sellers — "Join and post value content"

Contacted (2):
  OUT-002 [P1] influencer  @etsytips — "DM sent 2026-03-08"

In Progress (3):
  ...

Completed (2):
  ...
```

## `/outreach-update [id] [status]`

1. Read tracker JSON
2. Find item by ID
3. Update status and `updated_at`
4. Optionally update notes if provided
5. Save file

## Valid Status Transitions

```
identified → contacted → in_progress → posted → completed
                                     → declined
```

## Important Notes

- This is a simple JSON file, no database
- IDs are sequential: OUT-001, OUT-002, etc.
- Always update `updated_at` on the root object and item when saving
