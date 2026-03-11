#!/usr/bin/env python3
"""SEO Pipeline State Manager — tracks briefs through to deployed pages."""

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

PROJECT_ROOT = Path(__file__).parent.parent.parent.parent
STATE_FILE = PROJECT_ROOT / "marketing" / "queue" / "seo-pipeline-state.json"

DEFAULT_TARGETS = {"pages": 10}  # 5 size-specific, 2 ratio, 2 problem, 1 niche

VALID_ITEM_STAGES = [
    "briefed", "drafted", "reviewed", "deployed", "indexed", "failed"
]

PIPELINE_STAGES = [
    "research", "drafts", "deploy"
]


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


class SeoPipelineState:
    """Read/write seo-pipeline-state.json with helper methods for each stage."""

    def __init__(self, data: Dict[str, Any]):
        self._data = data

    # --- I/O ---

    @classmethod
    def load(cls) -> "SeoPipelineState":
        if STATE_FILE.exists():
            with open(STATE_FILE, encoding="utf-8") as f:
                return cls(json.load(f))
        return cls(_empty_state())

    def save(self) -> None:
        STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
        self._data["updated_at"] = _now()
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
            "metrics": {"total": 0, "completed": 0, "failed": 0, "success_rate": 1.0},
        })

    # --- Stage management ---

    def set_stage_status(self, stage: str, status: str, output: Optional[str] = None) -> None:
        if stage not in self._data.get("stages", {}):
            return
        self._data["stages"][stage]["status"] = status
        if output:
            self._data["stages"][stage]["output"] = output

    def get_stage_status(self, stage: str) -> Optional[str]:
        return self._data.get("stages", {}).get(stage, {}).get("status")

    def next_pending_stage(self) -> Optional[str]:
        for stage in PIPELINE_STAGES:
            info = self._data.get("stages", {}).get(stage, {})
            if info.get("status") == "pending":
                return stage
        return None

    # --- Content items ---

    def add_item(
        self,
        item_id: str,
        slug: str,
        page_type: str = "guide",
        priority: str = "P1",
        brief_path: Optional[str] = None,
    ) -> Dict[str, Any]:
        item = {
            "id": item_id,
            "slug": slug,
            "page_type": page_type,
            "priority": priority,
            "stage": "briefed",
            "brief_path": brief_path,
            "draft_path": None,
            "deploy_path": None,
            "quality_gates": {
                "schema": None,
                "seo_onpage": None,
                "content_depth": None,
                "internal_links": None,
                "components": None,
                "build": None,
            },
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
        if next_stage not in VALID_ITEM_STAGES:
            return False
        return self.update_item(item_id, stage=next_stage)

    def fail_item(self, item_id: str, error: str) -> bool:
        return self.update_item(item_id, stage="failed", error=error)

    def get_items_by_stage(self, stage: str) -> List[Dict[str, Any]]:
        return [i for i in self._data["content_items"] if i["stage"] == stage]

    def set_gate(self, item_id: str, gate: str, passed: bool, detail: Optional[str] = None) -> bool:
        item = self.get_item(item_id)
        if not item:
            return False
        if "quality_gates" not in item:
            item["quality_gates"] = {}
        item["quality_gates"][gate] = {"passed": passed, "detail": detail}
        item["updated_at"] = _now()
        return True

    def gates_passed(self, item_id: str) -> bool:
        item = self.get_item(item_id)
        if not item:
            return False
        gates = item.get("quality_gates", {})
        return all(
            g is not None and g.get("passed", False)
            for g in gates.values()
            if g is not None
        )

    # --- Metrics ---

    def get_metrics(self) -> Dict[str, Any]:
        items = self._data["content_items"]
        total = len(items)
        completed = sum(1 for i in items if i["stage"] in ("deployed", "indexed"))
        failed = sum(1 for i in items if i["stage"] == "failed")
        rate = (completed / total) if total > 0 else 1.0
        metrics = {"total": total, "completed": completed, "failed": failed, "success_rate": round(rate, 3)}
        self._data["metrics"] = metrics
        return metrics

    # --- Display ---

    def summary(self) -> str:
        m = self.get_metrics()
        stage_parts = []
        for s in PIPELINE_STAGES:
            info = self._data.get("stages", {}).get(s, {})
            status = info.get("status", "?")
            stage_parts.append(f"  {s}: {status}")
        item_stage_counts = {}
        for item in self._data["content_items"]:
            stage = item["stage"]
            item_stage_counts[stage] = item_stage_counts.get(stage, 0) + 1
        item_parts = [f"  {stage}: {count}" for stage, count in sorted(item_stage_counts.items())]
        lines = [
            f"SEO Pipeline: {self._data.get('batch_id', 'N/A')}",
            f"Target: {self._data.get('target', {}).get('pages', '?')} pages",
            "Stages:",
            *stage_parts,
            f"Items: {m['total']} total, {m['completed']} deployed, {m['failed']} failed ({m['success_rate']:.0%} success)",
        ]
        if item_parts:
            lines.append("By stage:")
            lines.extend(item_parts)
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
        "metrics": {"total": 0, "completed": 0, "failed": 0, "success_rate": 1.0},
    }
