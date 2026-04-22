# AXA IT — Brand Asset Package

Pachet final de brand identity, varianta **Electric Orange**.

## Structura folderului

```
export/
├── square/                   Variațiuni pătrate A, B, E (SVG + PNG)
│   ├── A-stacked/            · AXA sus, bară, IT mare dedesubt, slogan
│   │   ├── axa-it-A-stacked-{dark,light,accent,transparent}.svg
│   │   └── png/axa-it-A-stacked-{scheme}-{512,1024,2048}.png
│   ├── B-bigIT/              · IT mare fundal, AXA etichetă peste
│   └── E-axis/               · Axis square — continuitate cu logo orizontal
│
├── favicon/                  Set favicon bazat pe E (Axis)
│   ├── favicon-{dark,light,accent,transparent}.svg
│   ├── favicon-{scheme}-{16,32,48,64,128,180,192,512}.png
│   └── apple-touch-icon.png
│
├── logo/                     Logo-ul orizontal principal (SVG)
│   ├── axa-it-logo-{dark,light,accent}.svg
│   └── axa-it-monogram-{ink,accent,outline}.svg
│
└── png/                      PNG-uri logo orizontal (@1x/2x/3x/print)
```

## Paleta

| Token | HEX | RGB | Utilizare |
|---|---|---|---|
| **Electric Orange** | `#FF5A1F` | 255 · 90 · 31 | Accent, CTA, highlight |
| **Deep Black** | `#0A0A0A` | 10 · 10 · 10 | Text primar, fundal dark |
| **Paper** | `#FAFAFA` | 250 · 250 · 250 | Fundal light |
| **Slate** | `#71717A` | 113 · 113 · 122 | Text secundar |

## Tipografie

- **Space Grotesk** (500/600/700/800) — wordmark și titluri
- **Inter** (400/500/600) — body, UI
- **JetBrains Mono** (400/600) — cod, etichete tehnice

## Favicon HTML snippet

```html
<link rel="icon" type="image/svg+xml" href="/favicon/favicon-light.svg" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/svg+xml" href="/favicon/favicon-dark.svg" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-light-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon/favicon-light-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<meta name="theme-color" content="#FF5A1F">
```

## Ierarhia brandului

1. **PRIMARY — logo orizontal** (`export/logo/axa-it-logo-*.svg`). Este forma principală. Se folosește în header site, prezentări, semnături email, cărți de vizită, documente — oriunde există spațiu pentru format 3:1.

2. **SECONDARY — variațiuni pătrate A / B / E**. Se folosesc **doar** când formatul cere pătrat:
   - **A · Stacked** — avatar LinkedIn/Instagram, cover profil, parafă.
   - **B · Big IT** — tricouri, standere, bannere, grafică mare pentru evenimente.
   - **E · Axis** — favicon, iconiță aplicație, autocolant mic.

Pentru print: PNG 2048 la 300dpi ≈ 17 cm.
Pentru branding mare (fațadă/banner): folosește SVG-urile — scalează infinit.
