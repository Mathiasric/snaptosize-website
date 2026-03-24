---
name: cross-platform
description: "Run after you've resized images with SnapToSize and placed them in pinterest_ready/ and instagram_ready/ folders. Prepares cross-platform metadata and adds items to pipeline for scheduling."
---

# Cross-Platform Adapter

Prepares resized images for scheduling on the opposite platform.

## Prerequisites
User has already:
1. Scheduled original images to their native platform
2. Resized with SnapToSize (Pinterest pins → 4:5 for Instagram, Instagram posts → 2:3 for Pinterest)
3. Placed files in `marketing/social/ready/pinterest_ready/` and `marketing/social/ready/instagram_ready/`

## Steps

### 1. Read context
Read these files first:
- `marketing/CONTENT_REFERENCE.md`
- `tasks/lessons.md`
- `marketing/social/queue/pipeline-state.json`

### 2. Scan ready folders
```bash
ls marketing/social/ready/pinterest_ready/
ls marketing/social/ready/instagram_ready/
```
Identify new files (by date marker or modification time). Ask the user which files to process if unclear.

### 3. Match to originals
For each new file, find the matching original metadata on the opposite platform by slug/topic matching in `marketing/social/content/{platform}/`.

### 4. Dispatch cross-platform-adapter agent
Use the agent at `.claude/agents/cross-platform-adapter/AGENT.md` to:
- Create content directories with platform-optimized metadata
- Copy images to correct locations
- Update pipeline-state.json

### 5. Schedule
Run the scheduler:
```bash
python marketing/social/schedule-batch.py --dry-run  # verify first
python marketing/social/schedule-batch.py             # then for real
```

### 6. Report
Show summary table of what was scheduled.
