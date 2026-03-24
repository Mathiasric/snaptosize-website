#!/usr/bin/env python3
"""End-to-end test for the social media content pipeline.

Tests the full pipeline with 1 item per platform using mock content.
Run: python -m pytest tests/test_pipeline_e2e.py -v
"""

import json
import shutil
import sys
from datetime import datetime
from pathlib import Path
from unittest.mock import patch

import pytest

# Setup paths
PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT / ".claude" / "agents"))

from shared.pipeline_state import PipelineState, STATE_FILE
from shared.batch_init import init_batch, CONTENT_BASE
from shared.metadata_schema import validate_metadata, validate_content_dir, score_caption


# --- Fixtures ---

@pytest.fixture(autouse=True)
def clean_state(tmp_path, monkeypatch):
    """Use a temp directory for pipeline state to avoid touching real data."""
    test_queue = tmp_path / "queue"
    test_queue.mkdir()
    test_state_file = test_queue / "pipeline-state.json"

    # Monkeypatch STATE_FILE and paths
    import shared.pipeline_state as ps_mod
    import shared.batch_init as bi_mod
    monkeypatch.setattr(ps_mod, "STATE_FILE", test_state_file)
    monkeypatch.setattr(ps_mod, "PROJECT_ROOT", tmp_path)
    monkeypatch.setattr(bi_mod, "PROJECT_ROOT", tmp_path)
    monkeypatch.setattr(bi_mod, "STATE_FILE", test_state_file)
    monkeypatch.setattr(bi_mod, "CONTENT_BASE", tmp_path / "marketing" / "social")
    monkeypatch.setattr(bi_mod, "ARCHIVE_DIR", tmp_path / "marketing" / "social" / "archive")

    # Create required dirs
    for d in ["marketing/social/queue", "marketing/social/content/pinterest",
              "marketing/social/content/instagram", "marketing/social/content/tiktok",
              "marketing/social/analytics", "marketing/social/research",
              "marketing/social/ideas", "marketing/social/scripts"]:
        (tmp_path / d).mkdir(parents=True, exist_ok=True)

    yield tmp_path


# --- Task 1: Pipeline State ---

class TestPipelineState:
    def test_start_batch(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11", {"pinterest": 3, "instagram": 1, "tiktok": 1})
        state.save()

        reloaded = PipelineState.load()
        assert reloaded.raw["current_week"] == "W11"
        assert reloaded.raw["batch_id"] == "2026-W11"
        assert reloaded.raw["target"]["pinterest"] == 3

    def test_add_and_get_items(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        state.add_content_item("W11-I01", "instagram", "carousel", "P0")
        state.save()

        reloaded = PipelineState.load()
        assert len(reloaded.raw["content_items"]) == 2
        assert reloaded.get_item("W11-P01")["platform"] == "pinterest"

    def test_advance_item(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        state.advance_item("W11-P01", "scripting")
        state.save()

        item = state.get_item("W11-P01")
        assert item["stage"] == "scripting"

    def test_fail_item(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        attempts = [{"tool": "canva", "status": "failed", "error": "timeout"}]
        state.fail_item("W11-P01", "All tools failed", attempts)
        state.save()

        item = state.get_item("W11-P01")
        assert item["stage"] == "failed"
        assert item["error"] == "All tools failed"
        assert len(item["tool_attempts"]) == 1

    def test_get_items_by_stage(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        state.add_content_item("W11-P02", "pinterest", "carousel", "P1")
        state.advance_item("W11-P01", "creation")
        state.save()

        assert len(state.get_items_by_stage("ideation")) == 1
        assert len(state.get_items_by_stage("creation")) == 1

    def test_metrics(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        state.add_content_item("W11-P02", "pinterest", "carousel", "P1")
        state.advance_item("W11-P01", "published")
        state.fail_item("W11-P02", "test error")

        metrics = state.get_metrics()
        assert metrics["total"] == 2
        assert metrics["completed"] == 1
        assert metrics["failed"] == 1
        assert metrics["success_rate"] == 0.5

    def test_stage_management(self, clean_state):
        state = PipelineState.load()
        state.start_batch("W11")

        assert state.next_pending_stage() == "analyst"
        state.set_stage_status("analyst", "completed", "/analytics/report.md")
        assert state.next_pending_stage() == "researcher"
        assert state.get_stage_status("analyst") == "completed"


# --- Task 7: Metadata Validation ---

class TestMetadataValidation:
    def test_valid_pinterest(self):
        meta = {
            "platform": "pinterest",
            "title": "Test Pin",
            "description": "A test pin description",
            "link": "https://snaptosize.com",
            "files": ["pin.png"],
        }
        valid, errors = validate_metadata(meta, "pinterest")
        assert valid
        assert errors == []

    def test_missing_fields(self):
        meta = {"platform": "pinterest"}
        valid, errors = validate_metadata(meta, "pinterest")
        assert not valid
        assert any("title" in e for e in errors)

    def test_instagram_slide_limit(self):
        meta = {
            "platform": "instagram",
            "caption": "Test",
            "files": [f"slide-{i}.png" for i in range(12)],
        }
        valid, errors = validate_metadata(meta, "instagram")
        assert not valid
        assert any("slides" in e.lower() for e in errors)

    def test_caption_too_long(self):
        meta = {
            "platform": "pinterest",
            "title": "Test",
            "description": "x" * 600,
            "link": "https://snaptosize.com",
            "files": ["pin.png"],
        }
        valid, errors = validate_metadata(meta, "pinterest")
        assert not valid

    def test_validate_content_dir(self, clean_state):
        content_dir = clean_state / "marketing" / "social" / "content" / "pinterest" / "test-pin"
        content_dir.mkdir(parents=True)
        (content_dir / "pin.png").write_bytes(b"fake png")
        (content_dir / "metadata.json").write_text(json.dumps({
            "platform": "pinterest",
            "title": "Test",
            "description": "Test desc",
            "link": "https://snaptosize.com",
            "files": ["pin.png"],
        }))

        valid, errors = validate_content_dir(content_dir, "pinterest")
        assert valid

    def test_missing_file_reference(self, clean_state):
        content_dir = clean_state / "marketing" / "social" / "content" / "pinterest" / "test-pin"
        content_dir.mkdir(parents=True)
        (content_dir / "metadata.json").write_text(json.dumps({
            "platform": "pinterest",
            "title": "Test",
            "description": "Test desc",
            "link": "https://snaptosize.com",
            "files": ["missing.png"],
        }))

        valid, errors = validate_content_dir(content_dir, "pinterest")
        assert not valid
        assert any("missing" in e for e in errors)


class TestCaptionScoring:
    def test_empty_caption(self):
        assert score_caption("") == 0.0

    def test_good_caption(self):
        caption = "Are you making these 5 file size mistakes?\n\nMost Etsy sellers don't realize...\n\nSave this for later! Link in bio."
        score = score_caption(caption)
        assert score >= 6.0

    def test_short_caption(self):
        score = score_caption("Hi")
        assert score < 5.0


# --- Task 8: Batch Init ---

class TestBatchInit:
    def test_init_creates_state(self, clean_state):
        state = init_batch("W11", {"pinterest": 3, "instagram": 1, "tiktok": 1})
        assert state.raw["current_week"] == "W11"
        assert state.raw["batch_id"] == "2026-W11"

    def test_init_archives_previous(self, clean_state):
        # Create initial batch
        state = init_batch("W10")
        state.save()

        # Init new batch — should archive W10
        state2 = init_batch("W11")
        archive_path = clean_state / "marketing" / "social" / "archive" / "2026-W10" / "pipeline-state.json"
        assert archive_path.exists()


# --- Task 9: Full E2E Flow ---

class TestE2EFlow:
    def test_full_pipeline_flow(self, clean_state):
        """Test items flowing through all stages: idea → published."""
        # 1. Initialize batch
        state = init_batch("W11", {"pinterest": 1, "instagram": 1, "tiktok": 1})

        # 2. Analyst stage
        state.set_stage_status("analyst", "completed", "/analytics/report.md")

        # 3. Researcher stage
        state.set_stage_status("researcher", "completed", "/research/trends.md")

        # 4. Ideator stage — adds content items
        state.set_stage_status("ideator", "completed", "/ideas/ideas.md")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        state.add_content_item("W11-I01", "instagram", "carousel", "P0")
        state.add_content_item("W11-T01", "tiktok", "video", "P0")

        # 5. Scripter stage — advance items
        state.set_stage_status("scripter", "completed")
        for item_id in ["W11-P01", "W11-I01", "W11-T01"]:
            state.advance_item(item_id, "creation")

        # 6. Creator stage — create content + QA
        state.set_stage_status("creator", "completed")
        state.set_stage_status("qa", "completed")

        # Simulate content creation with tool tracking
        state.update_item("W11-P01", tool_used="notebooklm",
                         tool_attempts=[
                             {"tool": "canva", "status": "failed", "error": "timeout"},
                             {"tool": "notebooklm", "status": "success"}
                         ])
        state.advance_item("W11-P01", "publishing")
        state.advance_item("W11-I01", "publishing")
        state.advance_item("W11-T01", "publishing")

        # 7. Publisher stage (dry run — just advance state)
        state.set_stage_status("publisher", "completed")
        for item_id in ["W11-P01", "W11-I01", "W11-T01"]:
            state.advance_item(item_id, "published")

        state.set_stage_status("tracker", "completed")
        state.save()

        # 8. Verify final state
        reloaded = PipelineState.load()
        metrics = reloaded.get_metrics()

        assert metrics["total"] == 3
        assert metrics["completed"] == 3
        assert metrics["failed"] == 0
        assert metrics["success_rate"] == 1.0

        # All stages complete
        for stage in ["analyst", "researcher", "ideator", "scripter",
                       "creator", "qa", "publisher", "tracker"]:
            assert reloaded.get_stage_status(stage) == "completed"

        # Tool attempts logged
        p01 = reloaded.get_item("W11-P01")
        assert p01["tool_used"] == "notebooklm"
        assert len(p01["tool_attempts"]) == 2

    def test_failure_handling(self, clean_state):
        """Test that failures are tracked and don't block other items."""
        state = init_batch("W11", {"pinterest": 2, "instagram": 0, "tiktok": 0})
        state.set_stage_status("ideator", "completed")
        state.add_content_item("W11-P01", "pinterest", "carousel", "P0")
        state.add_content_item("W11-P02", "pinterest", "carousel", "P1")

        # One succeeds, one fails
        state.advance_item("W11-P01", "published")
        state.fail_item("W11-P02", "All tools failed", [
            {"tool": "canva", "status": "failed", "error": "timeout"},
            {"tool": "notebooklm", "status": "failed", "error": "auth error"},
            {"tool": "playwright", "status": "failed", "error": "page not found"},
        ])
        state.save()

        metrics = state.get_metrics()
        assert metrics["completed"] == 1
        assert metrics["failed"] == 1
        assert metrics["success_rate"] == 0.5

        # Failed item has all attempts logged
        p02 = state.get_item("W11-P02")
        assert len(p02["tool_attempts"]) == 3
