#!/usr/bin/env python3
"""
Erzeugt die ausgelieferten Schriftschnitte aus den Originaldateien.

Die Google-Fonts-Dateien tragen die volle Gewichtsachse (Sora 100–800,
Inter 100–900) und mehr Zeichen als eine deutschsprachige Seite braucht.
Wir schneiden beides zu:

  * Gewichtsachse auf die tatsächlich genutzten Bereiche begrenzt
    (Sora 300–700, Inter 300–600; siehe font-weight in src/styles/global.css).
  * Zeichenvorrat auf Basis-Latein plus Latin-1 (deckt ä ö ü ß und die
    Akzente europäischer Firmen- und Personennamen ab) sowie die
    Satzzeichen, die das Layout nutzt (Gedankenstrich, deutsche
    Anführungszeichen, Pfeile, Minus, Euro).

Aufruf: python3 scripts/fonts.py   (braucht fonttools und brotli)
Quellen: scripts/fonts-src/ enthält die unveränderten Google-Fonts-Dateien.
"""
import sys, pathlib, io
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools import subset

SRC = pathlib.Path(__file__).resolve().parent / "fonts-src"
OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "fonts"
UNICODES = ",".join([
    "U+0020-007E",              # Basis-Latein
    "U+00A0-00FF",              # Latin-1: Umlaute, ß, Akzente
    "U+2013-2014",              # Halbgeviert- und Geviertstrich
    "U+2018-201E",              # einfache und deutsche Anführungszeichen
    "U+2020-2022", "U+2026",    # Kreuz, Doppelkreuz, Aufzählungspunkt, Auslassung
    "U+2039-203A", "U+20AC",    # Guillemets, Euro
    "U+2122", "U+2190-2193",    # Marke, Pfeile
    "U+2212", "U+00D7",         # Minus, Mal
])
FONTS = [("sora-latin.woff2", 300, 700), ("inter-latin.woff2", 300, 600)]

for name, lo, hi in FONTS:
    src = SRC / name
    if not src.exists():
        sys.exit(f"Quelle fehlt: {src} (Originaldatei aus Google Fonts dort ablegen)")
    dst = OUT / name
    font = TTFont(src)
    # 1. Gewichtsachse auf den genutzten Bereich stutzen.
    font = instancer.instantiateVariableFont(font, {"wght": (lo, None, hi)}, updateFontNames=False)
    # 2. Zeichenvorrat und OpenType-Funktionen beschneiden.
    opts = subset.Options()
    opts.layout_features = ["kern", "liga", "calt", "ccmp", "locl", "mark", "mkmk"]
    opts.name_IDs = ["*"]
    opts.name_legacy = True
    opts.recalc_bounds = True
    sub = subset.Subsetter(options=opts)
    sub.populate(unicodes=subset.parse_unicodes(UNICODES))
    sub.subset(font)
    font.flavor = "woff2"
    font.save(dst)
    print(f"{name}: {src.stat().st_size // 1024} KB -> {dst.stat().st_size // 1024} KB "
          f"({len(font.getGlyphOrder())} Glyphen)")
