#!/usr/bin/env bash
# Regenerate favicon PNG/ICO assets from public/favicon.svg
# Branding: Electric Orange #FF5A1F on Deep Black #0A0A0A
#
# Requires one of: rsvg-convert (librsvg2-bin) OR convert/magick (ImageMagick) OR inkscape
# Debian/Ubuntu install:
#   sudo apt-get install -y librsvg2-bin imagemagick
# macOS install:
#   brew install librsvg imagemagick

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUB="$ROOT_DIR/public"
SRC="$PUB/favicon.svg"

if [[ ! -f "$SRC" ]]; then
  echo "ERROR: source SVG not found at $SRC" >&2
  exit 1
fi

# Pick a converter
if command -v rsvg-convert >/dev/null 2>&1; then
  CONV="rsvg"
elif command -v magick >/dev/null 2>&1; then
  CONV="magick"
elif command -v convert >/dev/null 2>&1; then
  CONV="convert"
elif command -v inkscape >/dev/null 2>&1; then
  CONV="inkscape"
else
  echo "ERROR: no SVG converter found. Install librsvg2-bin or imagemagick." >&2
  exit 2
fi

echo "Using converter: $CONV"

svg_to_png() {
  local size="$1" out="$2"
  case "$CONV" in
    rsvg)    rsvg-convert -w "$size" -h "$size" "$SRC" -o "$out" ;;
    magick)  magick -background none -density 384 "$SRC" -resize "${size}x${size}" "$out" ;;
    convert) convert -background none -density 384 "$SRC" -resize "${size}x${size}" "$out" ;;
    inkscape) inkscape "$SRC" --export-type=png --export-filename="$out" -w "$size" -h "$size" >/dev/null ;;
  esac
  echo "  wrote $out (${size}x${size})"
}

svg_to_png 16  "$PUB/favicon-16x16.png"
svg_to_png 32  "$PUB/favicon-32x32.png"
svg_to_png 48  "$PUB/favicon-48x48.png"
svg_to_png 180 "$PUB/apple-touch-icon.png"
svg_to_png 192 "$PUB/android-chrome-192x192.png"
svg_to_png 512 "$PUB/android-chrome-512x512.png"

# favicon.ico (multi-size) from the generated PNGs
if command -v magick >/dev/null 2>&1; then
  magick "$PUB/favicon-16x16.png" "$PUB/favicon-32x32.png" "$PUB/favicon-48x48.png" "$PUB/favicon.ico"
  echo "  wrote $PUB/favicon.ico (multi-size via magick)"
elif command -v convert >/dev/null 2>&1; then
  convert "$PUB/favicon-16x16.png" "$PUB/favicon-32x32.png" "$PUB/favicon-48x48.png" "$PUB/favicon.ico"
  echo "  wrote $PUB/favicon.ico (multi-size via convert)"
else
  echo "  NOTE: skipping favicon.ico (needs ImageMagick). Install imagemagick to build .ico"
fi

echo "Done. NOTE: og-image-1200x630.png must be regenerated separately (different composition)."
