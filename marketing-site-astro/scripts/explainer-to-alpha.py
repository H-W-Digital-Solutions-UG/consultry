"""Black-ground schematic render -> transparent line art, cropped to a shared aspect, as 1x/2x WebP."""
import sys
from PIL import Image
import numpy as np
src, out_base = sys.argv[1], sys.argv[2]
ASPECT = 1.25            # width / height of every explainer
PAD = 0.035              # margin around the content, as a share of the crop width
W2, W1 = 1500, 840       # 2x and 1x widths
im = np.asarray(Image.open(src).convert("RGB")).astype(np.float32) / 255.0
mx = im.max(axis=2)
# Alpha from brightness: a small floor removes compression haze in the black, a gentle curve keeps hairlines solid.
a = np.clip((mx - 0.035) / (1 - 0.035), 0, 1) ** 0.85
ys, xs = np.where(a > 0.25)
x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
cw, ch = x1 - x0, y1 - y0
w = max(cw / (1 - 2 * PAD), (ch / (1 - 2 * PAD)) * ASPECT)
h = w / ASPECT
cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
H, W = a.shape
# Canvas may exceed the render: pad with transparent pixels instead of clamping, so the content stays centred.
left, top = int(round(cx - w / 2)), int(round(cy - h / 2))
w, h = int(round(w)), int(round(h))
# Two flat inks instead of unpremultiplied noise: warm off-white strokes and the copper accent words.
mn = im.min(axis=2)
sat = np.where(mx > 0.08, (mx - mn) / np.maximum(mx, 1e-4), 0)
copper = (sat > 0.32)[..., None]
ink = np.where(copper, np.array([0.91, 0.57, 0.23], np.float32), np.array([0.93, 0.91, 0.886], np.float32))
# Copper text is dimmer than white at the same coverage; lift its alpha so it reads at full strength.
a = np.where(copper[..., 0], np.clip(a / 0.86, 0, 1), a)
rgba = np.dstack([ink * (a[..., None] > 0), a])
canvas = np.zeros((h, w, 4), np.float32)
sx0, sy0 = max(left, 0), max(top, 0)
sx1, sy1 = min(left + w, W), min(top + h, H)
canvas[sy0 - top:sy1 - top, sx0 - left:sx1 - left] = rgba[sy0:sy1, sx0:sx1]
img = Image.fromarray((canvas * 255 + 0.5).astype(np.uint8), "RGBA")
for width, suffix in ((W2, "-2x"), (W1, "")):
    r = img.resize((width, int(round(width / ASPECT))), Image.LANCZOS)
    r.save(f"{out_base}{suffix}.webp", "WEBP", quality=82, alpha_quality=int(sys.argv[3]) if len(sys.argv) > 3 else 80, method=6)
print(out_base, "content", cw, "x", ch, "crop", w, "x", h, "scale", round(W2 / w, 2))
