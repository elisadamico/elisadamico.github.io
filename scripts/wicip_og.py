"""Make link-preview images (1200x630) for the WICIP session library.

Run from the repo root after adding a session to src/_data/wicipSessions.json:
    python3 scripts/wicip_og.py
"""
import json
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG, TEXT, MUTED, ACCENT = (11, 11, 11), (255, 255, 255), (170, 165, 160), (255, 143, 138)
FUTURA = "/System/Library/Fonts/Supplemental/Futura.ttc"
banner = Image.open("src/assets/img/wicip-logo.png").convert("RGBA").crop((330, 120, 1270, 280))
# Keep only the logo lettering: drop the banner's dark background panels.
banner.putdata([(r, g, b, 0) if max(r, g, b) < 60 else (r, g, b, a) for r, g, b, a in banner.getdata()])

def font(size, bold=True):
    return ImageFont.truetype(FUTURA, size, index=2 if bold else 0)

def wrap(draw, text, f, width):
    lines, line = [], ""
    for word in text.split():
        trial = (line + " " + word).strip()
        if draw.textlength(trial, font=f) <= width: line = trial
        else: lines.append(line); line = word
    return lines + [line]

def card(title, kicker, out):
    im = Image.new("RGB", (W, H), BG)
    b = banner.resize((700, int(700 * banner.height / banner.width)))
    im.paste(b, ((W - b.width) // 2, 50), b)
    d = ImageDraw.Draw(im)
    size = 76
    while True:
        f = font(size); lines = wrap(d, title, f, W - 160)
        if len(lines) <= 2 or size <= 52: break
        size -= 4
    y = 300 - (len(lines) - 1) * size // 2
    for ln in lines:
        d.text((W // 2, y), ln, font=f, fill=TEXT, anchor="mm"); y += int(size * 1.15)
    d.text((W // 2, 500), kicker, font=font(30), fill=ACCENT, anchor="mm")
    d.text((W // 2, 560), "elisadamico.net/wicip/sessions", font=font(24, bold=False), fill=MUTED, anchor="mm")
    im.save(out, quality=90)

sessions = json.load(open("src/_data/wicipSessions.json"))
for s in sessions:
    card(s["theme"], f"WICIP Session Library  ·  {s['date']}", f"src/assets/img/og/wicip-{s['slug']}.jpg")
card("Session Library", "Videos, slides, and key takeaways", "src/assets/img/og/wicip-library.jpg")
card("Advice Index", "Every takeaway from the WICIP sessions, by topic", "src/assets/img/og/wicip-advice.jpg")
print(len(sessions) + 2, "images")
