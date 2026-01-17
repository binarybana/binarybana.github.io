# Blog Upload Worker

A Cloudflare Worker that accepts photo/video uploads from iOS and generates HTML snippets for blog posts.

## Features

- Accepts HEIC, JPEG, PNG, WebP, GIF images
- Accepts MOV and MP4 videos (stored as-is)
- Extracts image dimensions for layout-shift-free HTML
- Generates thumbnail (300px) and full-width (800px) snippets
- **Multiple file uploads** - Upload multiple images/videos at once
- **Prepends entries** to `uploads.md` log file in R2 (newest first)
- Web-based upload form with mobile support
- Bearer token authentication

## Setup

### 1. Deploy the Worker

```bash
# Install dependencies
npm install

# Login to Cloudflare (if not already)
npx wrangler login

# Set the auth token secret
npx wrangler secret put AUTH_TOKEN
# Enter a strong random token when prompted

# Deploy
npm run deploy
```

### 2. Enable Image Transforms

In Cloudflare Dashboard:
1. Go to your zone (bask.day)
2. Navigate to Speed → Optimization → Image Optimization
3. Enable "Transform Images"

### 3. Create iOS Shortcut

Create a new Shortcut with these steps:

1. **Receive** input from Share Sheet
   - Accept: Images, Media

2. **Set Variable** `media` to Shortcut Input

3. **Ask for Input** (optional)
   - Prompt: "Caption?"
   - Default: "Untitled"
   - Set result to variable `caption`

4. **Get Contents of URL**
   - URL: `https://blog-upload.<your-subdomain>.workers.dev/upload`
   - Method: POST
   - Headers:
     - `Authorization`: `Bearer YOUR_TOKEN_HERE`
   - Request Body: Form
     - `file`: `media` (as File)
     - `caption`: `caption`

5. **Get Dictionary Value** for key `snippets.full` from Contents of URL

6. **Copy to Clipboard**: Dictionary Value

7. **Show Notification**: "Uploaded! Snippet copied."

### Web Upload Form (Recommended)

Navigate to the upload form with your token:
```
https://blog-upload.<your-subdomain>.workers.dev/upload?token=YOUR_TOKEN_HERE
```

1. **Select files** - Choose one or more images/videos (supports multiple selection)
2. **Enter caption** - Optional caption (for multiple files, they'll be numbered automatically)
3. **Upload** - Click upload and wait for completion
4. **Done!** - First snippet is automatically copied to clipboard
5. All snippets are prepended to `uploads.md` (newest first)

### Share Sheet Usage (Alternative)

1. Take a photo or select from library
2. Tap Share → Your Shortcut name
3. Enter caption (optional)
4. Wait for upload
5. Snippet is copied to clipboard
6. Paste into your blog post

## API

### POST /upload

**Headers:**
- `Authorization: Bearer <token>`

**Body (multipart/form-data):**
- `file`: The image or video file
- `caption` (optional): Caption for the image

**Response:**
```json
{
  "success": true,
  "type": "image",
  "path": "uploads/2025-01-17-143022-abc123.heic",
  "dimensions": { "width": 4000, "height": 3000 },
  "snippets": {
    "thumb": "<a href=\"...\">...</a>",
    "full": "<a href=\"...\">...</a>"
  }
}
```

## Video Support

Video transcoding (MOV → MP4/AV1) via ffmpeg.wasm is **now implemented** with the following features:
- Transcodes iPhone MOV files to browser-compatible MP4 (AV1 codec)
- Extracts poster frame (first frame as JPEG)
- Automatic dimension detection
- Graceful fallback if transcoding fails

**Important Notes:**
- AV1 encoding is CPU-intensive and may take 30-60+ seconds for longer videos
- If transcoding fails or times out, the original MOV file is stored as fallback
- Workers have execution time limits - very long videos may timeout
- The first transcode is slower as ffmpeg.wasm loads from CDN

**Limitations:**
- Maximum practical video length: ~30 seconds (depends on resolution)
- For longer videos, consider using Cloudflare Stream or transcoding before upload

## Files

```
worker/
├── src/
│   └── index.ts      # Main worker code
├── package.json
├── tsconfig.json
├── wrangler.toml     # Cloudflare Worker config
└── README.md
```
