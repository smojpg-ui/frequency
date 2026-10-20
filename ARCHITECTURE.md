# Architecture

Short version: static files, served as they are. No build, no framework, no packages.

```
frequency/
├── index.html                 landing: cover + The Files
├── pocket-bible/index.html    reader: bar + <iframe> of the edition
├── originals/                 her files, byte-for-byte (checked by SHA256SUMS)
│   └── glitch-pocket-bible.html
├── editions/                  copies with changes she approved; the reader frames these
│   └── glitch-pocket-bible.html   (byline nod: S. Moore, Aether Systems Research)
├── content/shelf.json         what's on the shelf (data, no code)
├── assets/
│   ├── css/site.css           tokens → base → bar → landing → reader
│   ├── fonts/                 Barlow, IM Fell English, Share Tech Mono + their OFL licenses
│   ├── js/boot.js             classic script in <head>: theme + motion before first paint
│   ├── js/settings.js         module: the light / motion switches
│   ├── js/shelf.js            module: renders shelf.json into The Files
│   └── icon.svg               the quill favicon, decoded from the pocket bible's own
├── art/                       her drop box for drafts (gitignored; approved pieces move to assets/art/)
├── tools/contrast.py          WCAG contrast for two colors (standard-library Python)
├── .claude/launch.json        `python3 -m http.server 4747` for the desktop app's preview
├── .nojekyll                  GitHub Pages: serve as-is
└── README.md · ARCHITECTURE.md · APPROVALS.md · SHA256SUMS · .gitignore
```

## Four rules the structure enforces

1. **Originals are framed, never edited.** `originals/` holds her files exactly as she saved them. When she approves a change, it goes into a copy in `editions/` and the reader frames that copy. The original stays as the source (`diff originals/X editions/X` shows exactly what changed). A reader page puts a thin bar above the file and shows it in an `<iframe>`. If a frame ever needs to change something, it changes the frame. `shasum -a 256 -c SHA256SUMS` proves the originals are untouched.
2. **Content lives apart from code.** The growing part of the site, the shelf, is `content/shelf.json`. `shelf.js` only reads it. The cover text stays in `index.html` so the page's face still renders with JavaScript off. The pocket bible card is also there as a static fallback, which `shelf.js` swaps out for the full shelf.
3. **Every path is relative.** That includes `assets/…` and `../originals/…`. Nothing starts with `/`, so the site works from `127.0.0.1:4747/`, from a GitHub Pages project URL (`…github.io/frequency/`), or from any folder.
4. **Settings are applied before first paint.** `boot.js` is a classic (blocking) script, loaded in `<head>` before the stylesheet. It sets `data-theme` and `data-motion` on `<html>`, so the page never flashes the wrong theme or plays a frame of animation it shouldn't. ES modules are deferred, which is why this one piece isn't a module.

## Settings

| key (localStorage) | values | default |
|---|---|---|
| `glitch:theme` | `dark` · `light` | `dark`. GLITCH is a dark world, and the pocket bible says it's "dark on every host" |
| `glitch:motion` | `on` · `off` | the OS setting: `off` if *reduce motion* is on, otherwise `on` |

- Every `localStorage` call is wrapped in `try/catch`. In a private window or with storage blocked, the switches still work for the visit and just aren't remembered.
- Until she picks a motion setting herself, `settings.js` follows live changes to the OS reduce-motion setting. Once she picks, her choice wins.
- **Motion off** means the wordmark glitch doesn't run, hover transitions are instant, and in-page scrolling jumps instead of gliding. With JavaScript off, nothing animates at all, because animations only exist under `[data-motion="on"]`.
- **The theme doesn't reach inside the frame.** The pocket bible paints its own colors and declares `color-scheme: dark`. In light mode, the reader's bar turns to paper and the dossier stays dark beneath it.

## The reader

`body.reader` is a full-height flex column: the bar (auto height, wraps on narrow screens) and the iframe (`flex: 1`). The page itself never scrolls, only the document inside the frame does, so the bar stays put without any sticky trickery. "original ↗" opens the raw file in its own tab.

## Contrast (WCAG AA = 4.5:1 for normal text)

Measured against both the page background and the panel color. Re-check any pair with `python3 tools/contrast.py "#fg" "#bg"`.

| token | dark on bg / panel | light on bg / panel | used as text here? |
|---|---|---|---|
| text | 12.07 / 11.31 | 10.32 / 11.17 | yes |
| bright | 16.84 / 15.79 | 16.52 / 17.88 | yes |
| dim | 5.10 / 4.79 | 5.30 / 5.73 | yes |
| gold | 8.78 / 8.23 | 5.76 / 6.24 | yes |
| amber | 6.70 / 6.28 | 5.76 / 6.23 | yes (the stamp) |
| cyan | 6.14 / 5.76 | 5.93 / 6.42 | yes (shelf accent) |
| violet | 5.16 / 4.84 | 6.21 / 6.72 | yes (shelf accent) |
| rosegold | 8.93 / 8.37 | 5.63 / 6.10 | yes (shelf accent) |
| warn-text | 9.54 / 8.94 | 5.87 / 6.35 | yes (the warning line) |
| red | **3.69 / 3.46** | 5.87 / 6.35 | no. Borders and the band background only. White on the red band = 5.44 |
| rose | **4.49 / 4.21** | 6.22 / 6.73 | no. Only on the decorative, `aria-hidden` glitch ghost |
| green | 4.73 / **4.43** | 5.84 / 6.32 | no |

That's why `shelf.js` only accepts the five accents that pass in both themes.

## Phone width

Checked at 375 px: no sideways scroll on the landing page or the reader. Side gutters drop from 20 px to 16 px under 520 px, the bar wraps onto two lines, and the shelf collapses to one column.

## Not here, on purpose

No bundler, no npm, no framework, no analytics, no cookies, and no outside requests. The three typefaces from the pocket bible (Barlow, IM Fell English, Share Tech Mono) are saved in `assets/fonts/` with their SIL Open Font License files. Barlow and IM Fell English are Google's latin subsets. Share Tech Mono is the full, unmodified file, because its license reserves the name "Share" for unmodified versions. The only thing that still reaches out is her original inside the frame, which loads its own fonts from Google Fonts. That's in her file, so it stays.
