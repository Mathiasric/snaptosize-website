# SnapToSize – System State (Production)

## OVERVIEW

SnapToSize is a production-ready image → print ZIP generator.

Architecture:
Frontend (Gradio on Fly.io)
→ Cloudflare Worker (queue + status + presign)
→ Runner (Fly.io, image processing + ZIP)
→ Cloudflare R2 (storage)

System goal:
Stable, scalable, no OOM, no stuck downloads, clear rate limiting.

---

# CURRENT ARCHITECTURE

## 1. Frontend (Fly.io – Gradio)

Location:
- app.py
- src/webapp.py
- src/worker_client.py

Behavior:
- Free exports run locally in webapp process
- Pro exports go through Worker → Runner
- Polls /status/<job_id>
- Uses presigned download_url
- Fallback: /download/<job_id> (302 redirect mode)

Free plan:
- Limited exports per 24h
- When limit reached:
  - No Worker call
  - No exception thrown
  - Markdown panel replaced with:
    "🔒 Gratis eksport brukt"
    Upgrade links (Stripe monthly/yearly)

Loader:
- "_Loading..._" removed
- Only static header shown
- No fake second-counter

---

## 2. Cloudflare Worker

Deployed and active.

Endpoints:

POST /enqueue
- Validates image_key or image_url
- Rate limited (KV-based)
- Writes job state: queued

GET /status/<job_id>
- Reads KV
- If done:
  - Generates presigned R2 URL (TTL 1800s)
  - Returns download_url

GET /download/<job_id>
- 302 redirect to presigned R2 URL
- Cache-Control: no-store

Retry logic:
- Worker retries Runner up to 5 times
- Exponential backoff (1s → 2s → 4s → 8s)
- On 503:
  status = "queued", reason = "runner_busy"
- On max retries:
  status = "error", error = "Runner busy (max retries)"

RUNNER_URL:
Uses env.RUNNER_URL or fallback:
https://snaptosize-runner2.fly.dev

---

## 3. Runner (Fly.io – snaptosize-runner2)

File: services/runner/main.py

Concurrency protection:
- MAX_CONCURRENCY from env (default 2)
- Global asyncio.Semaphore

Acquire logic:
await asyncio.wait_for(_JOB_SEM.acquire(), timeout=0.01)

If busy:
→ HTTP 503
→ Retry-After: 2
→ Cache-Control: no-store

Release:
- Only in finally block
- Never over-releases
- Safe structure verified

Image handling:
- fetch_image_from_r2 catches NoSuchKey
- Returns HTTP 404 instead of 500

---

## 4. Storage (Cloudflare R2)

Bucket: snaptosize-zips

Object structure:
jobs/<job_id>/<group>.zip

Lifecycle rules:
- delete-jobs-after-7d
  prefix: jobs/
  delete after: 7 days
  status: enabled

Multipart abort rule:
- Abort incomplete uploads after 7 days

No uncontrolled storage growth.

---

# VERIFIED WORKING FLOWS

- Free export
- Pro export
- Worker enqueue
- Status polling
- Presigned downloads
- 302 fallback
- Concurrency control
- 503 retry
- 404 image_key handling
- Lifecycle cleanup

---

# KNOWN UX IMPROVEMENTS PENDING

1. Free-limit messaging polish
2. Remove fake timer behavior
3. Better loading feedback
4. Replace Gradio frontend long-term

---

# NEXT PHASE OPTIONS

A) Product polish
B) Replace Gradio with real frontend
C) Add subscription dashboard
D) Add job history

Infrastructure is stable.
Focus should now be product layer.

