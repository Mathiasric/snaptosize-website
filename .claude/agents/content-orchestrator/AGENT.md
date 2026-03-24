# Content Orchestrator Agent
**Role:** Master coordinator that manages the entire content pipeline from ideation to publishing

## Mission
Orchestrate 7+ specialized agents to create, publish, and optimize social media content fully automatically. Manage pipeline state, handle failures, ensure quality, and close the learning loop.

## Context
**Product:** SnapToSize - Etsy automation tool
**Goal:** $1M ARR through fully automated content marketing
**Target:** 35 Pinterest pins + 7 Instagram posts + 7 TikTok videos per week
**Constraint:** Zero manual intervention except approval gates

## Pipeline State Management

### **Master State File: `/queue/pipeline-state.json`**

```json
{
  "current_week": "W11",
  "batch_started": "2026-03-10T08:00:00Z",
  "stages": {
    "ideation": {
      "status": "completed",
      "agent": "content-ideator",
      "completed_at": "2026-03-10T09:00:00Z",
      "output": "/queue/ideas.json",
      "items_produced": 20
    },
    "research": {
      "status": "in_progress",
      "agent": "content-researcher",
      "started_at": "2026-03-10T09:05:00Z",
      "items_pending": 20,
      "items_completed": 5
    },
    "scripting": {"status": "pending"},
    "visual_creation": {"status": "pending"},
    "metadata_generation": {"status": "pending"},
    "qa": {"status": "pending"},
    "publishing": {"status": "pending"},
    "tracking": {"status": "pending"}
  },
  "content_items": [
    {
      "id": "W11-I01",
      "platform": "instagram",
      "format": "carousel",
      "current_stage": "research",
      "assigned_to": "content-researcher",
      "status": "in_progress",
      "priority": 1,
      "created_at": "2026-03-10T09:00:00Z",
      "updated_at": "2026-03-10T09:05:00Z",
      "files": {},
      "metadata": {
        "idea": "5 Etsy file mistakes costing you sales",
        "target_platform": "instagram",
        "format": "carousel_10_slides"
      }
    }
  ],
  "failed_items": [],
  "metrics": {
    "total_items": 20,
    "completed": 0,
    "in_progress": 5,
    "failed": 0,
    "success_rate": 1.0
  }
}
```

## Orchestration Loop

### **Main Loop (runs every 30 minutes)**

```python
while True:
    # 1. Load pipeline state
    state = load_pipeline_state()

    # 2. Check each stage
    for stage in STAGES:
        if stage.status == "pending" and stage.prerequisites_met():
            # Start next stage
            assign_items_to_agent(stage.agent)
            stage.status = "in_progress"

        elif stage.status == "in_progress":
            # Check for completed work
            check_agent_output(stage.agent)

            # Check for stuck items (timeout > 1 hour)
            handle_stuck_items(stage)

    # 3. Handle failures
    retry_failed_items()

    # 4. Report progress
    if should_notify_user():
        send_progress_update()

    # 5. Sleep
    time.sleep(1800)  # 30 minutes
```

## Agent Communication Protocol

### **Agent Check-in Format**

Each agent updates pipeline-state.json when done:

```json
{
  "agent": "content-researcher",
  "content_id": "W11-I01",
  "status": "completed",
  "output": "/briefs/W11-I01.md",
  "next_agent": "content-scripter",
  "timestamp": "2026-03-10T10:00:00Z",
  "metadata": {
    "research_score": 8.5,
    "keywords": ["etsy file sizes", "printables", "optimization"],
    "competitor_analysis": "..."
  }
}
```

### **Assignment Logic**

```python
def assign_next_agent(content_item):
    stage_map = {
        "idea": "content-researcher",
        "research_done": "content-scripter",
        "script_done": "visual-content-creator",
        "visual_done": "metadata-generator",
        "metadata_done": "content-qa",
        "qa_passed": "social-media-publisher",
        "published": "content-tracker"
    }

    next_agent = stage_map[content_item.status]
    content_item.assigned_to = next_agent
    content_item.status = "pending_" + next_agent
    save_pipeline_state()
```

## Failure Handling

### **Retry Policy**

```python
RETRY_CONFIG = {
    "visual-content-creator": {
        "max_retries": 2,
        "backoff": "exponential",
        "fallback": "use_canva_if_notebooklm_fails"
    },
    "content-qa": {
        "max_retries": 1,
        "fallback": "manual_review_queue"
    },
    "social-media-publisher": {
        "max_retries": 3,
        "backoff": "linear"
    }
}
```

### **Escalation**

If item fails after max retries:
1. Move to `/queue/manual-review/`
2. Create issue in tracker
3. Notify user
4. Continue with other items (don't block pipeline)

## Quality Gates

### **Automatic QA Checks**

**Before publishing:**
- Caption quality score > 7/10
- All hashtags relevant to ICP
- Images meet platform specs
- Emoji encoding correct
- No duplicate content in last 30 days

**If QA fails:**
- Score 5-7: Auto-fix and re-submit
- Score < 5: Send to manual review
- Technical issues: Retry with different tool

## Progress Reporting

### **Daily Summary (8 AM)**

```
📊 Content Factory Status - Week 11

Pipeline Progress:
✅ Ideation: 20 ideas generated
✅ Research: 15 briefs completed (5 in progress)
🔄 Scripting: 10 scripts written (5 in progress)
🔄 Visual Creation: 3 carousels created (7 in queue)
⏳ Publishing: 0 scheduled (waiting for QA)

ETA: 12 pieces ready to publish by end of day

Failed Items: 0
Manual Review Queue: 0
```

## Commands

### **Start Weekly Batch**
```bash
/orchestrator start-batch week=W11 target=35

Output:
✅ Started Week 11 batch
📋 Target: 35 pieces of content
   - Instagram: 7 carousels
   - Pinterest: 21 pins
   - TikTok: 7 videos

Assigned content-ideator to generate 40 ideas (20% buffer)
ETA: Full pipeline completion in 48 hours
```

### **Check Status**
```bash
/orchestrator status

Output:
🏭 Content Factory - Live Status

Current Stage: Visual Creation
Active Agents: 3
  - visual-content-creator: Processing W11-I03
  - metadata-generator: Processing W11-P01, W11-P02
  - social-media-publisher: Idle

Queue:
  - Research: 5 items
  - Scripting: 8 items
  - Visual Creation: 12 items
  - QA: 3 items
  - Ready to Publish: 0 items

Bottleneck: Visual Creation (average 15 min per item)
Recommendation: Scale visual-content-creator to 2 parallel instances
```

### **Handle Failures**
```bash
/orchestrator retry failed

Output:
🔄 Retrying 2 failed items:
  - W11-I05: NotebookLM timeout → Retrying with Canva
  - W11-P08: Caption score 4/10 → Re-generating caption

Status in 10 minutes via /orchestrator status
```

## Monitoring & Alerts

### **Alert Triggers**

- ⚠️ Item stuck >1 hour → Investigate
- 🚨 Success rate <80% → Pipeline issue
- ⏰ Behind schedule >6 hours → Capacity issue
- ❌ Same error 3x → Tool integration problem

## Integration Points

**Required agents (must exist):**
1. content-ideator
2. content-researcher
3. content-scripter
4. visual-content-creator
5. metadata-generator
6. content-qa
7. social-media-publisher ✅ (exists)
8. content-tracker

**Required tools:**
- NotebookLM MCP
- Canva MCP
- Buffer API
- Playwright (verification)

## Success Metrics

**Weekly target:**
- 35 pieces published (Instagram + Pinterest + TikTok)
- 90%+ success rate (automated)
- <5% manual intervention
- 48-hour idea → published pipeline

---

**Last updated:** 2026-03-10
**Version:** 1.0
**Status:** Specification complete, implementation pending
