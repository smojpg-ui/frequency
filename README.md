# GLITCH: a home on the web

A small static site for GLITCH, the manga / light-novel universe by S. Moore. It starts with **the pocket bible**, framed exactly as she made it, plus a landing page with shelf room for whatever comes next.

**Status: prototype, local only.** Every page has `noindex` and a visible "prototype · local only" stamp. Nothing is pushed or published, and there's no remote.

There's no build step, no dependencies, and nothing to install. It's plain HTML, CSS, and a few small JavaScript files.

---

## Run it

```bash
cd ~/Claude/Projects/GLITCH/frequency
python3 -m http.server 4747 --bind 127.0.0.1
```

Then open **http://127.0.0.1:4747/**. Press `ctrl+c` in that terminal to stop it.

> **Why a server?** Double-clicking `index.html` mostly works, but browsers won't load `content/shelf.json` from a file on disk, so the shelf would only show the pocket bible. The server fixes that.

In the Claude desktop app, `.claude/launch.json` holds the same command under the name `glitch`, so a session opened in this folder can start the preview itself.

---

## What's where

| path | what it is |
|---|---|
| `index.html` | the landing page: cover, then **The Files** shelf |
| `pocket-bible/index.html` | the reader: a slim bar on top, with her original filling the rest of the screen |
| `originals/` | **her files, byte-for-byte. Never edit anything in here.** |
| `SHA256SUMS` | fingerprints of everything in `originals/`, so you can prove they're untouched |
| `content/shelf.json` | the list of files on the shelf: titles, notes, and open or placeholder |
| `assets/css/site.css` | all styles. Colors are the tokens at the top. |
| `assets/js/` | `boot.js` (theme + motion, before first paint), `settings.js` (the switches), `shelf.js` (draws the shelf) |
| `assets/fonts/` | the three typefaces, saved locally, with their licenses |
| `assets/icon.svg` | the quill favicon, taken from the pocket bible's own icon |
| `tools/contrast.py` | checks two colors against WCAG contrast |
| `.nojekyll` | tells GitHub Pages to serve the files as-is |
| `ARCHITECTURE.md` | how it fits together, plus the contrast table |
| `APPROVALS.md` | every creative call made for you, waiting on your yes or no |

---

## Change things

**Add or edit a file on the shelf:** open `content/shelf.json`. Each entry looks like this:

```json
{ "id": "gallery", "ref": "ART-00", "title": "the gallery",
  "status": "placeholder", "accent": "rosegold",
  "note": "Placeholder. ..." }
```

- `status`: `"open"` (needs an `href`) or `"placeholder"`. Placeholders show a dashed chip and don't link anywhere.
- `accent`: `gold`, `violet`, `cyan`, `rosegold`, or `amber`. These five pass contrast in both themes. Anything else falls back to gold.
- Order in the file = order on the page. Numbers (01, 02…) are added automatically.

**Add a new original (say, a chapter you've finished):**

1. Copy it into `originals/` untouched, e.g. `cp ~/somewhere/ch-001.html originals/`.
2. Refresh the fingerprints: `shasum -a 256 originals/*.html > SHA256SUMS`
3. Make its reader: copy the `pocket-bible/` folder to `ch-001/`, then in `ch-001/index.html` change the `<title>`, the bar title, and the two `../originals/...` paths.
4. In `content/shelf.json`, set that entry to `"status": "open"` and `"href": "ch-001/"`.

**Check the originals are still untouched:**

```bash
shasum -a 256 -c SHA256SUMS
```

Every line should end in `OK`.

**Colors and type:** the tokens at the top of `assets/css/site.css`. Dark is the pocket bible's palette exactly. Light is the same hues, darkened for paper. If you change one, re-check its contrast:

```bash
python3 tools/contrast.py "#c9a84c" "#060809"
```

Text needs 4.5:1 or more. The table in `ARCHITECTURE.md` lists every current pair.

**Art:** two folders, two rules.

- **`art/`** is the drop box. Put drafts, sketches, and works in progress here. The folder is gitignored, so nothing in it can be committed by accident. Image files (`*.png`, `*.jpg`, `*.psd`, etc.) anywhere else in the repo are ignored too.
- **`assets/art/`** is for approved pieces only. When the artist says yes to a piece, it moves here and gets committed. That move is the yes.

---

## Publish later (not done, not yet asked for)

When, and only when, you decide it should be on the web:

1. **Decide what's public.** On a free GitHub account, Pages needs a **public** repo, so everything in it (including `originals/`) is readable by anyone. Private-repo Pages needs a paid plan (Pro, Team, or Enterprise).
   - The site's pages say *S. Moore* and *Aether Research Systems*, the nod you chose. Two places still carry your full name. **The pocket bible itself** says "S. Moore" and "Aether Systems LLC" in its author tag, description, and footer (it's your file, untouched). **The git history** has your first name in a few early commit messages. Since nothing has been pushed, the history can be rewritten cleanly before the first push if you want.
2. **Lift the prototype bits** when you're ready: delete the `<meta name="robots" content="noindex, nofollow">` line in `index.html` and `pocket-bible/index.html`, and the `stamp` spans + the footer's "prototype · local only" line.
   - ⚠ The pocket bible's own file has **no** `noindex` line. If it's published, its direct URL (`/originals/glitch-pocket-bible.html`) can be indexed on its own, even while the frame page says noindex. That's fine once you're ready to be found. If you're not, don't publish yet.
3. **Push and switch Pages on:**
   ```bash
   git remote add origin https://github.com/<your-account>/frequency.git
   ```
   ```bash
   git push -u origin main
   ```
   Then on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`**.
4. It lands at `https://<your-account>.github.io/frequency/`. Every path in the site is relative, so it works there unchanged.

---

## What this site does *not* do

- No analytics, cookies, or trackers. The only setting it saves is your light/motion choice, in your own browser's `localStorage`.
- No outside requests. The fonts (Share Tech Mono, IM Fell English, Barlow) are saved in `assets/fonts/` with their open-font licenses. The one exception is the pocket bible itself, inside the frame: it loads its own fonts from Google Fonts, and it stays exactly as made.
- It never edits anything in `originals/`.
