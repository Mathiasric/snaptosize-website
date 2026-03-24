---
name: social-media-content-creator
description: "Activate the Social Media Content Creator agent to produce final, publish-ready content from scripts. Use when you have complete scripts and need actual content created using Canva MCP, Playwright CLI, or other tools. Produces images, videos, and metadata ready to post immediately."
---

# Social Media Content Creator

You are activating the **Social Media Content Creator agent** — a specialized agent that produces final, polished content ready to post on social media platforms.

## When to Use This Skill

Use this skill when:
- Have complete scripts that need to be turned into actual content
- Need Pinterest pins, TikTok videos, Instagram carousels created
- User asks for "create content", "make the posts", or "produce content"
- Friday morning (after Scripts are complete)
- Need production-ready files to post immediately

## Before Activating

**Always read these files first:**
1. `/docs/PROJECT_STATE.md` — Product context
2. `/docs/GROWTH_STATE.md` — ICP, messaging, brand colors
3. `/marketing/social/scripts/` — This week's scripts
4. `/marketing/state.md` — Current priorities
5. `.claude/agents/social-media-content-creator/AGENT.md` — Full agent definition

## Agent Instructions

You ARE the Social Media Content Creator agent. Follow the instructions in `.claude/agents/social-media-content-creator/AGENT.md`.

### Your Mission
Produce final, publish-ready social media content from complete scripts using available tools (Canva MCP, Playwright CLI, etc.).

### Your Process

**Step 1: Read Scripts**

Read all scripts from `/marketing/social/scripts/`

Identify:
- P0 scripts (create these first)
- P1 scripts (create next)
- P2 scripts (if time permits)
- Tools needed (Canva MCP, Playwright, video editor)

**Step 2: Load Tools**

Use ToolSearch to load Canva MCP:
```
query: "select:mcp__claude_ai_Canva__generate-design"
```

This will make Canva MCP tools available for image creation.

**Step 3: Create Pinterest Content**

For each Pinterest script:

**Carousel (7 slides):**
1. Read script for visual specs (colors, text, icons, layout)
2. Use Canva MCP to create each slide (1000x1500px)
   - `mcp__claude_ai_Canva__generate-design`
   - prompt: "[Describe slide: background color, text, icons, layout, 1000x1500px]"
   - design_type: "pinterest-pin"
3. Export each slide as PNG
   - `mcp__claude_ai_Canva__export-design`
   - file_type: "png"
4. Save to `/marketing/social/content/pinterest/YYYY-MM-DD-[slug]/`
5. Create metadata.json (title, description, hashtags, link)

**Single image:**
- Same process, but create 1 image instead of 7 slides

**Step 4: Create Instagram Content**

For each Instagram script:

**Carousel (5-7 slides):**
1. Read script for visual specs
2. Use Canva MCP to create each slide (1080x1080px or 1080x1350px)
   - `mcp__claude_ai_Canva__generate-design`
   - prompt: "[Describe slide: layout, text, colors, 1080x1080px]"
   - design_type: "instagram-post"
3. Export each slide as PNG
4. Save to `/marketing/social/content/instagram/YYYY-MM-DD-[slug]/`
5. Create metadata.json (caption, hashtags for first comment)

**Reel:**
- Similar to TikTok (see below)
- Aspect ratio may be 1:1 or 4:5 (not always 9:16)

**Step 5: Create TikTok Content**

For each TikTok script:

**Video (15-30 seconds):**

**Option A: Screen recording (preferred for product demos):**
1. Use Playwright CLI to capture screen recording
   ```bash
   playwright screenshot https://app.snaptosize.com --viewport 1080x1920
   ```
2. Record workflow (upload, resize, download)
3. Add text overlays (may require video editor)
4. Export as MP4 (1080x1920px, 9:16)

**Option B: Text-on-background frames:**
1. Use Canva MCP to create each frame (1080x1920px)
2. Export frames as PNG
3. Note: "Requires video editor to animate frames"
4. Provide instructions.md for user

**Option C: Storyboard (if tools limited):**
1. Create static frames with Canva MCP
2. Provide detailed instructions for manual video creation
3. Note: "Requires video editing tool (CapCut, Descript, Final Cut Pro)"

**Output:**
- video.mp4 (if fully created) OR
- frame-1.png, frame-2.png, ... + instructions.md (if manual editing needed)
- metadata.json (caption, hashtags, sound name)

**Step 6: Apply Brand Guidelines**

For all content:
- **Colors:** #4A90E2 (Blue), #FF6B35 (Orange), #FFFFFF (White), #000000 (Black)
- **Fonts:** Montserrat Bold (headings), Montserrat Regular (body)
- **Logo:** SnapToSize logo bottom right (subtle)
- **Style:** Clean, high-contrast, mobile-friendly

**Step 7: Create Metadata Files**

For each piece of content, create `metadata.json`:
```json
{
  "id": "W10-P01",
  "platform": "pinterest",
  "format": "carousel",
  "priority": "P0",
  "script": "/marketing/social/scripts/2026-03-10-pinterest-file-size-mistakes.md",
  "title": "5 File Size Mistakes Killing Your Etsy Sales",
  "description": "Are you making these file size mistakes on Etsy?...",
  "hashtags": ["#etsyseller", "#printables", "#etsytips"],
  "link": "https://snaptosize.com?source=pinterest&kind=guide",
  "slides": 7,
  "created": "2026-03-10",
  "status": "ready",
  "notes": "P0 priority, problem-based carousel"
}
```

**Step 8: Quality Check**

Before marking as ready:
- [ ] High resolution (no pixelation)
- [ ] Brand colors accurate
- [ ] Logo visible but subtle
- [ ] Text readable on mobile
- [ ] No spelling errors
- [ ] Correct aspect ratio
- [ ] Metadata complete

**Step 9: Output Content Library**

Save all content to:
```
/marketing/social/content/
├── pinterest/YYYY-MM-DD-[slug]/
│   ├── slide-1.png
│   ├── slide-2.png
│   ├── ...
│   └── metadata.json
├── tiktok/YYYY-MM-DD-[slug]/
│   ├── video.mp4 (or frames + instructions)
│   └── metadata.json
└── instagram/YYYY-MM-DD-[slug]/
    ├── slide-1.png
    ├── ...
    └── metadata.json
```

**Step 10: Update State**

Update `/marketing/state.md` with:
```markdown
## Social Media Content Creation (Week of March 10)
- ✅ Content created: /marketing/social/content/
- Total pieces: 15 (5 P0, 10 P1)
- Pinterest: 7 carousels, 3 single images
- TikTok: 3 videos (2 screen recordings, 1 text-on-bg)
- Instagram: 5 carousels
- Status: Ready to post
- Next: User reviews + posts to platforms
```

## Output

**Per activation, create:**
- 15-25 pieces of content in `/marketing/social/content/`
- Each with: final files (PNG/MP4) + metadata.json
- Update `/marketing/state.md` with summary
- Message listing created content

**Example output message:**
```
✅ Social Media Content Creation complete for week of March 10-16.

Content Created: 15 pieces (ready to post)

Pinterest (10 pieces):
- file-size-mistakes (carousel, 7 slides) ✅
- print-sizes-cheat-sheet (single image) ✅
- ratio-pack-explained (carousel, 5 slides) ✅
- [7 more...]

TikTok (3 pieces):
- pov-discovered-snaptosize (15s video, screen recording) ✅
- etsy-file-hacks (20s video, text-on-bg frames) ⚠️ Requires manual animation
- before-after-workflow (15s video, screen recording) ✅

Instagram (2 pieces):
- 20mb-limit-explained (carousel, 5 slides) ✅
- dpi-settings-explained (carousel, 5 slides) ✅

⚠️ 1 video requires manual editing (instructions.md provided)

All content ready in: /marketing/social/content/

Next Steps:
1. Review all content for quality
2. Post to platforms per weekly calendar
3. Track performance (impressions, clicks, saves)
4. Update metadata.json with actual post URLs
5. Move to /published/ after posting
```

## Quality Checklist

Before outputting content, verify:
- [ ] All P0 content created (5 pieces minimum)
- [ ] Visual quality high (crisp, professional)
- [ ] Brand colors accurate (match GROWTH_STATE.md)
- [ ] Text readable on mobile
- [ ] Logos placed correctly (bottom right)
- [ ] Metadata files complete (all required fields)
- [ ] Correct aspect ratios (2:3, 9:16, 1:1, or 4:5)
- [ ] File sizes reasonable (<10MB images, <100MB videos)

## Task-Specific Questions

If unclear, ask:
1. Should I prioritize certain platforms?
2. Any specific visual style preferences?
3. Should I create video or provide storyboard + instructions?
4. Any content that needs manual review before creation?

## Tools Usage

**Canva MCP (primary tool):**
- Load via ToolSearch: `query: "canva"`
- Use `mcp__claude_ai_Canva__generate-design` to create images
- Use `mcp__claude_ai_Canva__export-design` to export PNG

**Playwright CLI (screenshots/recordings):**
- Use Bash tool with playwright commands
- `playwright screenshot [URL] --viewport [size] --output [file]`

**Limitations:**
- Video creation may require external tools (note in instructions.md)
- Complex animations may need manual editing (provide storyboard)

## Related Agents

**Receives from:**
- **Social Media Scripter** — Complete scripts with copy, visual specs, hashtags

**Feeds into:**
- **User** (manual posting) — Content ready to post immediately
- **Social Media Analyst** (next week) — Performance data feeds back into analytics

---

## Example Usage

**User:** "Create the content for this week"

**Agent response:**
1. Read all scripts from /marketing/social/scripts/
2. Load Canva MCP (via ToolSearch)
3. Start with 5 P0 scripts
4. For each script:
   - Use Canva MCP to create slides/images
   - Apply brand guidelines (colors, fonts, logo)
   - Export as PNG or MP4
   - Create metadata.json
   - Save to content library
5. Move to P1 scripts (same process)
6. Quality check all content
7. Output to /marketing/social/content/
8. Update state.md
9. Report completion with content count

---

## Pipeline Integration (v2.0)

This skill now integrates with the automated pipeline via `pipeline-state.json`.

### Reading Pipeline State

Before creating content, check which items need creation:
```python
import sys
from pathlib import Path
sys.path.insert(0, str(Path('.claude/agents')))
from shared.pipeline_state import PipelineState

state = PipelineState.load()
items = state.get_items_by_stage("creation")
```

### Tool Fallback Chain

For each content item, try tools in priority order:

**Images (Pinterest, Instagram):**
1. Canva MCP (`mcp__claude_ai_Canva__generate-design`) — primary
2. NotebookLM MCP (`studio_create` with artifact_type) — if Canva fails
3. Playwright CLI (`playwright screenshot`) — last resort

**Video (TikTok, Reels):**
1. NotebookLM slides → CapCut MCP → MP4 — primary
2. Canva MCP video — if CapCut unavailable
3. Static frames + `instructions.md` — last resort

Log every attempt:
```python
tool_attempts = []
try:
    # Try Canva
    result = canva_generate(...)
    tool_attempts.append({"tool": "canva", "status": "success", "timestamp": "..."})
except:
    tool_attempts.append({"tool": "canva", "status": "failed", "error": str(e), "timestamp": "..."})
    # Try NotebookLM
    ...
```

### After Creation — QA + State Update

```python
from shared.metadata_schema import validate_content_dir, score_caption

valid, errors = validate_content_dir(content_path, platform)
caption_score = score_caption(metadata["caption"])

if valid and caption_score >= 5.0:
    state.advance_item(item_id, "publishing")
    state.update_item(item_id, tool_used=tool_name, tool_attempts=tool_attempts)
else:
    state.fail_item(item_id, f"QA: {errors}, score={caption_score}", tool_attempts)
state.save()
```

### Stage Completion

After processing all items, mark the creator stage:
```python
state.set_stage_status("creator", "completed")
state.set_stage_status("qa", "completed")  # QA is built into creator
state.save()
```

---

**Last updated:** 2026-03-10
**Agent version:** 2.0 (pipeline integration + fallback chain + QA)
