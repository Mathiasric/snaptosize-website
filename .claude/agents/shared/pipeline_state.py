#!/usr/bin/env python3
"""Pipeline State Manager — single JSON file backbone for the automated content pipeline."""

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

PROJECT_ROOT = Path(__file__).parent.parent.parent.parent
STATE_FILE = PROJECT_ROOT / "marketing" / "social" / "queue" / "pipeline-state.json"

DEFAULT_TARGETS = {"pinterest": 21, "instagram": 7, "tiktok": 7}

# Video items: TikTok and Instagram Reels share the same rendered video file.
# Pipeline creates 7 unique videos. Each publishes to both platforms = 14 publishes.
VIDEO_PLATFORMS = {"tiktok", "instagram"}
DEFAULT_FORMAT = {"pinterest": "image", "instagram": "video", "tiktok": "video"}

VALID_STAGES = [
    "ideation", "scripting", "creation", "qa", "publishing", "published", "failed"
]

PIPELINE_STAGES = [
    "analyst", "researcher", "ideator", "scripter", "creator", "qa", "publisher", "tracker"
]


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


class PipelineState:
    """Read/write pipeline-state.json with helper methods for each stage."""

    def __init__(self, data: Dict[str, Any]):
        self._data = data

    # --- I/O ---

    @classmethod
    def load(cls) -> "PipelineState":
        if STATE_FILE.exists():
            with open(STATE_FILE, encoding="utf-8") as f:
                return cls(json.load(f))
        return cls(_empty_state())

    def save(self) -> None:
        STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
        self._data["updated_at"] = _now()
        if self._data.get("content_items"):
            self.get_metrics()
        with open(STATE_FILE, "w", encoding="utf-8") as f:
            json.dump(self._data, f, indent=2, ensure_ascii=False)

    @property
    def raw(self) -> Dict[str, Any]:
        return self._data

    # --- Batch lifecycle ---

    def start_batch(self, week: str, targets: Optional[Dict[str, int]] = None) -> None:
        targets = targets or DEFAULT_TARGETS
        self._data.update({
            "current_week": week,
            "batch_id": f"2026-{week}",
            "started_at": _now(),
            "target": targets,
            "stages": {s: {"status": "pending", "output": None} for s in PIPELINE_STAGES},
            "content_items": [],
            "metrics": {"total": sum(targets.values()), "completed": 0, "failed": 0, "success_rate": 1.0},
        })

    # --- Stage management ---

    def set_stage_status(self, stage: str, status: str, output: Optional[str] = None) -> None:
        if stage not in self._data["stages"]:
            return
        self._data["stages"][stage]["status"] = status
        if output:
            self._data["stages"][stage]["output"] = output

    def get_stage_status(self, stage: str) -> Optional[str]:
        return self._data.get("stages", {}).get(stage, {}).get("status")

    def next_pending_stage(self) -> Optional[str]:
        for stage in PIPELINE_STAGES:
            info = self._data["stages"].get(stage, {})
            if info.get("status") == "pending":
                return stage
        return None

    # --- Content items ---

    def add_content_item(
        self,
        item_id: str,
        platform: str,
        fmt: str,
        priority: str = "P1",
        linked_item: Optional[str] = None,
    ) -> Dict[str, Any]:
        item = {
            "id": item_id,
            "platform": platform,
            "format": fmt,
            "priority": priority,
            "stage": "ideation",
            "tool_used": None,
            "content_type": None,
            "layout": None,
            "buffer_post_id": None,
            "tool_attempts": [],
            "files": {},
            "metadata": {},
            "linked_item": linked_item,
            "created_at": _now(),
            "updated_at": _now(),
            "error": None,
        }
        self._data["content_items"].append(item)
        return item

    def get_item(self, item_id: str) -> Optional[Dict[str, Any]]:
        for item in self._data["content_items"]:
            if item["id"] == item_id:
                return item
        return None

    def update_item(self, item_id: str, **kwargs: Any) -> bool:
        item = self.get_item(item_id)
        if not item:
            return False
        item.update(kwargs)
        item["updated_at"] = _now()
        return True

    def advance_item(self, item_id: str, next_stage: str) -> bool:
        return self.update_item(item_id, stage=next_stage)

    def fail_item(self, item_id: str, error: str, tool_attempts: Optional[List[Dict]] = None) -> bool:
        updates: Dict[str, Any] = {"stage": "failed", "error": error}
        if tool_attempts:
            item = self.get_item(item_id)
            if item:
                existing = item.get("tool_attempts", [])
                existing.extend(tool_attempts)
                updates["tool_attempts"] = existing
        return self.update_item(item_id, **updates)

    def get_items_by_stage(self, stage: str) -> List[Dict[str, Any]]:
        return [i for i in self._data["content_items"] if i["stage"] == stage]

    def get_items_by_platform(self, platform: str) -> List[Dict[str, Any]]:
        return [i for i in self._data["content_items"] if i["platform"] == platform]

    # --- Metrics ---

    def get_metrics(self) -> Dict[str, Any]:
        items = self._data["content_items"]
        total = len(items)
        completed = sum(1 for i in items if i["stage"] == "published")
        failed = sum(1 for i in items if i["stage"] == "failed")
        rate = (completed / total) if total > 0 else 1.0
        metrics = {"total": total, "completed": completed, "failed": failed, "success_rate": round(rate, 3)}
        self._data["metrics"] = metrics
        return metrics

    # --- Display ---

    def summary(self) -> str:
        m = self.get_metrics()
        stage_parts = []
        for s, info in self._data.get("stages", {}).items():
            status = info.get("status", "?")
            stage_parts.append(f"{s}={status}")
        lines = [
            f"Pipeline: {self._data.get('batch_id', 'N/A')}",
            "Stages: " + ", ".join(stage_parts),
            f"Items: {m['total']} total, {m['completed']} published, {m['failed']} failed ({m['success_rate']:.0%} success)",
        ]
        return "\n".join(lines)


def _empty_state() -> Dict[str, Any]:
    return {
        "current_week": None,
        "batch_id": None,
        "started_at": None,
        "updated_at": None,
        "target": DEFAULT_TARGETS,
        "stages": {s: {"status": "pending", "output": None} for s in PIPELINE_STAGES},
        "content_items": [],
        "insights": None,
        "previous_insights": None,
        "metrics": {"total": 0, "completed": 0, "failed": 0, "success_rate": 1.0},
    }
