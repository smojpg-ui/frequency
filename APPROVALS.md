# Approvals

Every creative call I made for you while building this. None of it is canon, and none of it is locked. Mark each one **yes**, **no**, or **change it to…**. Anything you say no to comes out.

*(Status key: ☐ waiting on you · ☑ yes · ☒ no)*

## Structure

| # | call | status |
|---|---|---|
| 1 | **The repo's folder name:** `frequency`. You picked it ("FREQUENCY IS FUN-ER"). If this ever goes to GitHub Pages, it becomes the URL: `…github.io/frequency/`. | ☑ |
| 2 | **Your file is stored as `originals/glitch-pocket-bible.html`.** I dropped the `_1` from the filename because it was macOS's duplicate-download suffix (both copies in Downloads are byte-identical, sha256 `908da313…bfef997`). The contents are unchanged. | ☐ |
| 3 | **The pocket bible is shown in a frame** (a slim bar on top, your file filling the rest of the screen), not rebuilt as a site page. "original ↗" opens it alone in its own tab. | ☐ |
| 4 | **"The Files" shelf has 4 slots.** One is open (the pocket bible). Three are **placeholders**: *the world bible* (v0.7) and *the theoretical annexes* (v0.3), both named in your pocket bible's footer, plus *the gallery*. I put nothing in them. Want different slots, fewer, or none until they're real? | ☐ |
| 5 | **Doc refs for the slots:** `WB-v0.7`, `ANNEX-v0.3`, `ART-00`, and `IDX-00` for the landing page. `WB-POCKET-01` is yours, and the rest are mine, made in its style. They're site labels, not canon. | ☐ |

## Look and voice

| # | call | status |
|---|---|---|
| 6 | **Dark is the default.** Your pocket bible says it's "dark on every host," so the site opens dark for everyone, whatever their system setting is. | ☐ |
| 7 | **Light mode is "the printout":** your hues darkened onto warm paper (`#f3f0e8`) until every text color passes AA. It only changes my pages. Your dossier stays dark inside its frame. | ☐ |
| 8 | **The landing page speaks in the pocket bible's dossier voice:** a red band reading `Top Secret // Index`, a doc ref, `Holds: WB-POCKET-01`, and `Distribution: friends of the author` (your phrase, reused). | ☐ |
| 9 | **The landing copy is all your own lines**, trimmed: the byline *"a manga / light-novel universe by S. Moore"*, *"It is the present day. A war is being fought inside all of it."*, *"All writing is spellcasting."*, and *"GLITCH is the crack. ASCEND is the hum."* in the footer. I wrote no new world text. | ☐ |
| 10 | **My own microcopy** (UI, not world): "The Files", "One file is open. The rest are empty slots, each marked placeholder until there's something real to put in it.", "open the pocket bible →", "skip to the files", the switch labels "light" and "motion". | ☐ |
| 11 | **The wordmark glitches:** every ~7 seconds, a cyan copy and a rose copy of GLITCH split off for a beat and snap back. It's off when motion is off, when your OS asks for reduced motion, and when JavaScript is off. | ☐ |
| 12 | **The favicon is your quill**, lifted from the pocket bible's own icon into `assets/icon.svg`. | ☐ |
| 13 | **The "prototype · local only" stamp is amber**, outlined, in the top bar, and the footer adds "not for distribution". Both stay until you say otherwise. | ☐ |
| 14 | **Your real name and Aether Systems LLC** appear in the byline and footer, exactly as in your file. Keep them for a public version, or use a pen name? | ☐ |
| 15 | **Fonts come from Google Fonts**, like your file does. The other option is to save copies into the repo so it works fully offline and makes no outside request. | ☐ |
| 16 | **The local preview runs on port 4747**, a small nod to Subject 47. | ☐ |

## Notes on your original (I changed nothing; these are offers)

Things I noticed while reading it closely. Take them or leave them. Fixing any of them means editing your file (or a copy you approve), so they're yours to decide.

- **Some small colored labels are under AA contrast on the dark background.** The section numbers and sub-heads in red (09 STILLWATER, 10 The Fronts: *Music*, *Attention*…) are 3.69:1. Rose (02 How Casting Works, Marin's chips) is 4.49 and 4.21. Green on the panels (06 codex labels) is 4.43. AA is 4.5. A slightly lighter tint of each would pass without changing the feel.
- **The table-of-contents chips always glide.** Your CSS turns off smooth scrolling for reduced-motion readers, but the chip script asks for `behavior: 'smooth'` directly, so the glide still happens for them.
- **The chips are `<span>`s.** They work by keyboard (Enter and Space, nice), but screen readers announce them as plain text, not as links. Making them `<a href="#world">` would fix that and keep the look.
- **Redacted text is only hidden from eyes.** `color: transparent` still gets read aloud by screen readers, so *"author eyes only. there are two endings. both happen."* isn't classified for everyone. Maybe that's perfect. Your call.
- **Your file has no `noindex` of its own.** That only matters if you publish (see README → *Publish later*).

## Things I didn't do

- Nothing was pushed, and there's no remote and no deploy.
- No loose art was committed. Images are gitignored until you say yes to a piece.
- Nothing from any other world you're building was used. The palette, type, and voice all come from the pocket bible and GLITCH.
