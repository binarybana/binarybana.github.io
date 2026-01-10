+++
title = "AVIF <> GIF comparison"
sort_by = "date"
template = "blog.html"
page_template = "blog-page.html"

+++

# Comparing AVIF to GIF.

### Original HEVC/H.265 encoded video (1.1MB)
<video controls width="960" autoplay loop playsinline muted>
  <source src="https://pub-e779c56998574a7c84980fc16b36f129.r2.dev/amir-banner_top.orig.mp4" type='video/mp4; codecs="hvc1.1.6.L93.B0"'>
  <p>Your browser does not support HEVC playback. 
     Try <a href="https://pub-e779c56998574a7c84980fc16b36f129.r2.dev/amir-banner_top.orig.mp4">downloading the video</a> or using Safari/Chrome.</p>
</video>

### AVIF (400KB)
![AVIF](https://pub-e779c56998574a7c84980fc16b36f129.r2.dev/amir-banner_top.avif)

### GIF (4.5MB)
![GIF](https://pub-e779c56998574a7c84980fc16b36f129.r2.dev/amir-banner_top.gif)

## Conversion commands:

AVIF (settings recommended by Gemini)
```bash
 ffmpeg -i banner_top.av1.mov \
      -c:v libaom-av1 \
      -crf 38 \
      -tile-columns 2 \
      -tiles 4x1 \
      -b:v 400k \
      -maxrate 800k \
      -cpu-used 4 \
      -enable-cdef 0 \
      -enable-global-motion 0 \
      -denoise-noise-level 0 \
      -pix_fmt yuv420p \
      test4.avif
```
I found on Webkit (iOS web rendering that powers both Safari and iOS Chrome), there were some playback issues (very slightly reduced framerate during portions of the 7 second clip). I found that reducing the number of encoded features (and using tiles) alleviated this issue. 

GIF (settings recommended by Gemini)
```bash
 ffmpeg -i banner_top.av1.mov -filter_complex \
      "[0:v] split [a][b]; \
   [a] palettegen=stats_mode=full [p]; \
   [b][p] paletteuse=dither=sierra2_4a" \
      -loop 0 output.gif
```
