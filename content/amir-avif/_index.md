+++
title = "AVIF <> GIF comparison"
sort_by = "date"
template = "blog.html"
page_template = "blog-page.html"

+++

# Comparing AVIF to GIF.

### Original HEVC/H.265 encoded video (1.1MB)
_Not embeddable in html reliably_

### AVIF (440KB)
![AVIF](https://pub-e779c56998574a7c84980fc16b36f129.r2.dev/amir-banner_top.avif)

### GIF (4.5MB)
![GIF](https://pub-e779c56998574a7c84980fc16b36f129.r2.dev/amir-banner_top.gif)

## Conversion commands:

AVIF (settings recommended by Gemini)
```bash
 ffmpeg -i banner_top.av1.mov \
      -c:v libaom-av1 \
      -crf 34 \
      -cpu-used 4 \
      -b:v 0 \
      -pix_fmt yuv420p10le \
      output.avif
```

GIF
```bash
 ffmpeg -i banner_top.av1.mov -filter_complex \
      "[0:v] split [a][b]; \
   [a] palettegen=stats_mode=full [p]; \
   [b][p] paletteuse=dither=sierra2_4a" \
      -loop 0 output.gif
```
