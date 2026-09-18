# Schriften (selbst gehostet)

- `sora-latin.woff2` – Sora, variable Schrift, Gewichtsachse auf 300–700 gestutzt, Zeichenvorrat zugeschnitten. © The Sora Project Authors.
- `inter-latin.woff2` – Inter, variable Schrift, Gewichtsachse auf 300–600 gestutzt, Zeichenvorrat zugeschnitten. © The Inter Project Authors.

Beide Dateien werden nicht von Hand gepflegt, sondern mit `python3 scripts/fonts.py`
aus den unveränderten Google-Fonts-Dateien in `scripts/fonts-src/` erzeugt
(braucht `fonttools` und `brotli`). Der Zuschnitt steht im Skript und muss mit
der `unicode-range` in `src/styles/global.css` zusammenpassen.

Beide Schriften stehen unter der SIL Open Font License 1.1 (OFL), die das Einbetten und Ausliefern
über den eigenen Server erlaubt: https://openfontlicense.org/. Die Dateien wurden am 2026-09-17 als
woff2 aus der Google-Fonts-CSS-API (Sora v17, Inter v20) bezogen; `@font-face`-Regeln liegen in
`src/styles/global.css`. Es wird kein Request an Google gestellt (siehe Datenschutzerklärung, Abschnitt 3).
