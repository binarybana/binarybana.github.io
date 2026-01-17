// Video transcoding using ffmpeg.wasm
// Note: This requires Workers Unbound due to CPU-intensive operations

import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

let ffmpeg: FFmpeg | null = null;

async function loadFFmpeg(): Promise<FFmpeg> {
  if (ffmpeg) return ffmpeg;

  ffmpeg = new FFmpeg();
  
  // Load ffmpeg WASM binaries from CDN
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  return ffmpeg;
}

export interface VideoTranscodeResult {
  mp4Data: Uint8Array;
  posterData: Uint8Array;
  width: number;
  height: number;
}

export async function transcodeVideo(
  movData: Uint8Array,
  outputFilename: string
): Promise<VideoTranscodeResult> {
  const ffmpeg = await loadFFmpeg();

  // Write input file
  await ffmpeg.writeFile('input.mov', movData);

  // Extract dimensions first
  // ffprobe alternative: decode first frame
  await ffmpeg.exec([
    '-i', 'input.mov',
    '-vframes', '1',
    '-f', 'null',
    '-'
  ]);

  // Transcode to MP4 with AV1
  // Note: AV1 encoding is VERY slow, may timeout in Workers
  await ffmpeg.exec([
    '-i', 'input.mov',
    '-c:v', 'libaom-av1',  // AV1 codec
    '-crf', '30',           // Quality (23-30 range, lower = better)
    '-b:v', '0',            // Use CRF mode
    '-cpu-used', '8',       // Fastest encoding (0-8, higher = faster but lower quality)
    '-c:a', 'aac',          // Audio codec
    '-b:a', '128k',         // Audio bitrate
    '-movflags', '+faststart', // Web optimization
    'output.mp4'
  ]);

  // Extract poster frame (first frame as JPEG)
  await ffmpeg.exec([
    '-i', 'input.mov',
    '-vframes', '1',
    '-q:v', '2',            // JPEG quality
    '-f', 'image2',
    'poster.jpg'
  ]);

  // Read outputs
  const mp4Data = await ffmpeg.readFile('output.mp4') as Uint8Array;
  const posterData = await ffmpeg.readFile('poster.jpg') as Uint8Array;

  // Get dimensions from poster
  const dimensions = await getImageDimensionsFromJPEG(posterData);

  // Cleanup
  await ffmpeg.deleteFile('input.mov');
  await ffmpeg.deleteFile('output.mp4');
  await ffmpeg.deleteFile('poster.jpg');

  return {
    mp4Data,
    posterData,
    width: dimensions.width,
    height: dimensions.height
  };
}

// Simple JPEG dimension parser
function getImageDimensionsFromJPEG(data: Uint8Array): { width: number; height: number } {
  const view = new DataView(data.buffer);
  let offset = 2; // Skip SOI marker

  while (offset < data.length) {
    if (data[offset] !== 0xFF) break;
    const marker = data[offset + 1];

    // SOF markers
    if ((marker >= 0xC0 && marker <= 0xC3) || 
        (marker >= 0xC5 && marker <= 0xC7) ||
        (marker >= 0xC9 && marker <= 0xCB) ||
        (marker >= 0xCD && marker <= 0xCF)) {
      const height = view.getUint16(offset + 5, false);
      const width = view.getUint16(offset + 7, false);
      return { width, height };
    }

    const segmentLength = view.getUint16(offset + 2, false);
    offset += 2 + segmentLength;
  }

  // Default fallback
  return { width: 1920, height: 1080 };
}
