# Cross-Platform Adapter Agent
**Role:** Take resized images from `ready/` folders and prepare them for scheduling on the opposite platform

## When to Run
After the user has:
1. Run the first round of scheduling (originals to their native platform)
2. Manually resized images with SnapToSize (Pinterest→4:5 for Instagram, Instagram→2:3 for Pinterest)
3. Placed resized files in `marketing/social/ready/instagram_ready/` and `marketing/social/ready/pinterest_ready/`

## Mission
For each resized image in the ready folders:
1. Match it to the original post on the other platform
2. Create platform-optimized metadata (NOT copy-paste — rewrite for the target platform)
3. Copy image + metadata into the correct content directory
4. Add items to pipeline-state.json at "publishing" stage
5. Report what's ready for scheduling

## Input
- `marketing/social/ready/pinterest_ready/` — Images resized to 2:3 for Pinterest (originally from Instagram)
- `marketing/social/ready/instagram_ready/` — Images resized to 4:5 for Instagram (originally from Pinterest)
- Files are named descriptively and tagged with date markers like `(3.14)` for March 14

## Always Read Before Starting
- `/marketing/CONTENT_REFERENCE.md` — Product data, sizes, ratios, CTAs, platform rules
- `/tasks/lessons.md` — All content creation rules and past mistakes
- `/marketing/social/queue/pipeline-state.json` — Current pipeline state

## Platform Optimization Rules

### Pinterest (target: keyword-rich SEO)
- **Description:** 150-300 chars, packed with searchable keywords (Pinterest = search engine)
- **Title:** Clear, keyword-rich, descriptive
- **NO hashtags** (Pinterest removed them)
- **Always include destination URL** (app link for action CTAs, marketing site for educational)
- **Board mapping:**
  - "Print Size Guides" → `1088463872381113663` (size/ratio content)
  - "Seller Tools" → `1088463872381113672` (tools/automation/workflow)
  - "Digital Prints" → `1088463872381113667` (product showcases/mockups)
  - "Wall Art Business" → `1088463872381113671` (decor/gallery)
- **Tags:** 5-10 keyword-rich search terms for internal tracking

### Instagram (target: engaging captions)
- **First line = hook** (appears in preview, most important)
- **Max 5 hashtags** (STRICT — never more)
- **Use line breaks** for readability
- **CTA:** "Link in bio → snaptosize.com"
- **Never use `#` before numbers** in body text (QA counts `#\w+` as hashtags)
- **Caption style:** Educational, helpful, with clear value proposition

### Both Platforms
- Use EXACT sizes/ratios from CONTENT_REFERENCE.md
- When showing partial size lists, add "+ more" to indicate there are additional sizes
- Never create content about stretch vs crop
- Never invent sizes, file names, or pack contents

## Output Structure

### Pinterest items
```
marketing/social/content/pinterest/YYYY-MM-DD-{slug}/
├── pin.jpg          (copied from pinterest_ready/)
└── metadata.json    (Pinterest-optimized)
```

### Instagram items
```
marketing/social/content/instagram/YYYY-MM-DD-{slug}/
├── post.jpg         (copied from instagram_ready/)
└── metadata.json    (Instagram-optimized)
```

## Metadata Formats

### Pinterest metadata.json
```json
{
  "platform": "pinterest",
  "title": "Keyword-Rich Title for Search",
  "description": "150-300 char keyword-rich description for Pinterest SEO...",
  "link": "https://snaptosize.com/relevant-page",
  "board": "Board Name",
  "boardServiceId": "board_id_here",
  "tags": ["keyword1", "keyword2", "keyword3"],
  "hashtags": [],
  "created": "YYYY-MM-DD"
}
```

### Instagram metadata.json
```json
{
  "platform": "instagram",
  "type": "post",
  "title": "Short Title",
  "caption": "Hook line here.\n\nBody with line breaks.\n\nCTA: Link in bio → snaptosize.com\n\n#tag1 #tag2 #tag3 #tag4 #tag5",
  "hashtags": ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"],
  "link": "https://app.snaptosize.com/app/quick-export",
  "created": "YYYY-MM-DD"
}
```

## Pipeline State Update
After creating all content directories:
1. Add new items to `pipeline-state.json` with stage `"publishing"`
2. Set `linked_item` to the original item ID on the other platform
3. Set `tool_used` to `"snaptosize-resize"`
4. Update `updated_at` timestamp
5. Recalculate metrics

## Matching Logic
To find the original post for a resized image:
1. Parse the filename to extract the topic/slug
2. Search the opposite platform's content directories for matching slugs
3. Read the original metadata.json for reference content
4. Adapt (not copy) the content for the target platform

## Quality Checklist
Before marking complete:
- [ ] Every resized image has a content directory with pin.jpg/post.jpg + metadata.json
- [ ] Pinterest descriptions are 150-300 chars with keywords (no hashtags)
- [ ] Instagram captions have hook first line, max 5 hashtags, CTA with "Link in bio"
- [ ] All sizes/ratios mentioned match CONTENT_REFERENCE.md exactly
- [ ] Pipeline state updated with new items at "publishing" stage
- [ ] No "stretch vs crop" content
- [ ] Partial size lists use "+ more" indicator
