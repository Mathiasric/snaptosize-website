# Social Media Publisher Agent

Automatically schedules social media content to Buffer for auto-publishing to Instagram and Pinterest.

## Setup

### 1. Install Python dependencies

```bash
pip install boto3 requests
```

(Already have Python 3.10 installed ✓)

### 2. Set up Cloudflare R2 Image Hosting

Buffer requires images to be publicly hosted. We use Cloudflare R2 for production-grade storage.

#### **Step 1: Enable R2 in Cloudflare**
1. Go to Cloudflare Dashboard
2. Navigate to R2 Object Storage
3. Click "Purchase R2 Plan" (free tier: 10GB storage, 10M requests/month)

#### **Step 2: Create Bucket**
1. Click "Create bucket"
2. Name: `snaptosize-social`
3. Location: Automatic
4. Click "Create bucket"

#### **Step 3: Configure Public Access**
1. Go to bucket Settings
2. Scroll to "Public Access"
3. Click "Connect Domain"
4. Add custom domain: `social.snaptosize.com`
5. Follow DNS setup instructions (add CNAME record)
6. Wait for DNS propagation (~5 minutes)

#### **Step 4: Create API Token**
1. Go to R2 main page
2. Click "Manage R2 API Tokens"
3. Click "Create API token"
4. Name: `social-media-publisher`
5. Permissions: "Object Read & Write"
6. TTL: Forever (or your preference)
7. Click "Create API Token"
8. **Copy the credentials immediately** (shown once only):
   - Access Key ID
   - Secret Access Key
   - Account ID (from R2 dashboard URL)

#### **Step 5: Add Credentials to .env.buffer**
```bash
# Add these lines to .env.buffer:
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=snaptosize-social
R2_PUBLIC_URL=https://social.snaptosize.com
```

### 3. Test with one post

```bash
cd /c/snaptosize-website/.claude/agents/social-media-publisher
python publisher.py
```

## Usage

### Publish all ready content:
```bash
python publisher.py
```

### Publish specific platform:
```bash
python publisher.py --platform=instagram
python publisher.py --platform=pinterest
```

## How It Works

1. **Scans** `/marketing/social/content/{platform}/` folders
2. **Finds** posts with metadata.json
3. **Uploads** images to hosting (imgbb/R2/etc)
4. **Schedules** to Buffer via GraphQL API:
   - Instagram: 1/day at 10 AM EST
   - Pinterest: 5/day at various times
5. **Updates** content tracker (future enhancement)

## Scheduling

**Instagram:**
- 1 post/day
- Time: 10:00 AM EST (14:00 UTC)
- Days: Monday-Friday

**Pinterest:**
- 5 pins/day
- Times: 10am, 1pm, 3pm, 6pm, 9pm EST
- Days: 7 days/week

## What Gets Scheduled

Currently: All content in folders (MVP)
Future: Only content marked as "Created" in content tracker

## Output

```
🚀 Social Media Publisher
==================================================

📂 Scanning for content...
✓ Found 5 pieces of content
  - Instagram: 2 posts
  - Pinterest: 3 pins

📱 Publishing 2 Instagram posts...

[1/2] W10-I06
    ✓ Uploaded slide-1.png -> https://...
    ✓ Uploaded slide-2.png -> https://...
    ...
    ✓ Scheduled post abc123 for 2026-03-11T14:00:00Z
  ✓ Success! Buffer Post ID: abc123

...

==================================================
✅ Publishing complete!

📊 Summary:
  Instagram: 2 posts scheduled
  Pinterest: 3 pins scheduled

🔗 View in Buffer: https://buffer.com/app
```

## Troubleshooting

**"Missing R2 configuration"**
- Ensure all R2 variables are in `.env.buffer`
- Check that R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY are correct
- Verify bucket name matches what you created

**"Failed to upload image"**
- Check R2 API credentials are correct
- Verify bucket exists and is accessible
- Test R2 connection: try uploading manually via Cloudflare dashboard
- Check image file format (PNG, JPG, JPEG supported)

**"boto3 not installed"**
- Run: `pip install boto3`

**"Buffer API error"**
- Verify Buffer API token in `.env.buffer`
- Check if Buffer account has Instagram/Pinterest connected
- Try scheduling manually in Buffer UI first

**"Public URL not working"**
- Verify custom domain is properly connected to R2 bucket
- Check DNS CNAME record is set up correctly
- Wait for DNS propagation (can take 5-10 minutes)

## Future Enhancements

- [ ] Update content tracker after scheduling
- [ ] Support for content tracker status filtering
- [ ] Retry logic for failed uploads
- [ ] Video support (TikTok)
- [ ] Custom scheduling times
- [ ] Automatic image optimization before upload

## Files

- `AGENT.md` - Full agent specification
- `publisher.py` - Python implementation
- `README.md` - This file
- `/.env.buffer` - API credentials (not in Git)

---

**Status:** MVP Ready
**Last Updated:** 2026-03-09
