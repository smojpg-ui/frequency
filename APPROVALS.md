# Approvals

Every creative call I made for you while building this. None of it is canon, and none of it is locked. Mark each one **yes**, **no**, or **change it to…**. Anything you say no to comes out.

*(Status key: ☐ waiting on you · ☑ yes · ☒ no)*

> **Answered in chat, 2026-10-20.** Your words are quoted in each row exactly as you sent them. In the chat, the list was renumbered 2–15 (markdown counts in order), so I matched your answers by what each line said, not by number. Your 14 (fonts) and 15 (the port) confirm the match.
>
> **Then, the same day:** *"\*stamps my last name in ink with a cool crest\* all approved. carry on, you constellation"*, and on the byline: *"GIRL Aether gets a shoutout?!!? S. Moore."* / *"not my full name. just a nod. Aether Research Systems. no LLC needed."* Every row below is now ☑.

## Structure

| # | call | status |
|---|---|---|
| 1 | **The repo's folder name:** `frequency`. You picked it ("FREQUENCY IS FUN-ER"). If this ever goes to GitHub Pages, it becomes the URL: `…github.io/frequency/`. | ☑ |
| 2 | **Your file is stored as `originals/glitch-pocket-bible.html`.** I dropped the `_1` from the filename because it was macOS's duplicate-download suffix (both copies in Downloads are byte-identical, sha256 `908da313…bfef997`). The contents are unchanged. *You: "ya"* | ☑ |
| 3 | **The pocket bible is shown in a frame** (a slim bar on top, your file filling the rest of the screen), not rebuilt as a site page. "original ↗" opens it alone in its own tab. *You: "girl idk"*, then *"all approved"*. | ☑ |
| 4 | **"The Files" shelf:** one open file (the pocket bible) and one **placeholder**, *the gallery*. The world bible v0.7 and annexes v0.3 slots came out after you said *"the pocket bible is the most up to date. it mixes annex and world bible...i THINK."* (Its own cover confirms it: "Drawn from: World Bible v0.7 + Annexes v0.3.") | ☑ |
| 5 | **Doc refs:** `ART-00` for the gallery and `IDX-00` for the landing page. `WB-POCKET-01` is yours, and the rest are mine, made in its style. They're site labels, not canon. *You: "ya"* | ☑ |

## Look and voice

| # | call | status |
|---|---|---|
| 6 | **Dark is the default.** Your pocket bible says it's "dark on every host," so the site opens dark for everyone, whatever their system setting is. *You: "YA"* | ☑ |
| 7 | **Light mode is "the printout":** your hues darkened onto warm paper (`#f3f0e8`) until every text color passes AA. It only changes my pages. Your dossier stays dark inside its frame. *You: "MMHMM"* | ☑ |
| 8 | **The landing page speaks in the pocket bible's dossier voice:** a red band reading `Top Secret // Index`, a doc ref, `Holds: WB-POCKET-01`, and `Distribution: friends of the author` (your phrase, reused). *You: "GET WILD WITH IT, HAVE FUN"*. First wild move: see 17. | ☑ |
| 9 | **The landing copy is all your own lines**, trimmed: the byline *"a manga / light-novel universe by S. Moore"* (your nod, see 14), *"It is the present day. A war is being fought inside all of it."*, *"All writing is spellcasting."*, and *"GLITCH is the crack. ASCEND is the hum."* in the footer. I wrote no new world text. *You: "all approved"* | ☑ |
| 10 | **My own microcopy** (UI, not world): "The Files", "Open files link through. A placeholder is an empty slot, held until there's something real to put in it.", "open the pocket bible →", "skip to the files", the switch labels "light" and "motion". *You: "all approved"* | ☑ |
| 11 | **The wordmark glitches:** every ~7 seconds, a cyan copy and a rose copy of GLITCH split off for a beat and snap back. It's off when motion is off, when your OS asks for reduced motion, and when JavaScript is off. *You: "YEAH"* | ☑ |
| 12 | **The favicon is your quill**, lifted from the pocket bible's own icon into `assets/icon.svg`. *You: "YEAH"* | ☑ |
| 13 | **The "prototype · local only" stamp is amber**, outlined, in the top bar, and the footer adds "not for distribution". Both stay until you say otherwise. *You: "all approved"* | ☑ |
| 14 | **The byline is a nod, not your full name:** *by S. Moore* and *Aether Research Systems*, no LLC. That covers the landing page, the reader bar, and the page metadata. *You: "not my full name. just a nod. Aether Research Systems. no LLC needed."* ⚠ Your original pocket bible still says "S. Moore" (its author tag, description, and footer) and "Aether Systems LLC" (footer). It's byte-for-byte yours, so I didn't touch it. A new export from you, or a copy you okay, would carry the nod inside the frame too. | ☑ |
| 15 | **Fonts are saved in the repo** (`assets/fonts/`, with their open-font licenses), so the site makes no outside requests and works offline. *You: "oh shit that's cool. we can save copies in the repo? CLAUDE YEAH VENTURE FORTH, DEAR ONE \*points\*"* Done. The one exception is your original inside the frame, which still loads its own fonts from Google. That's in your file, and I don't edit it. | ☑ |
| 16 | **The local preview runs on port 4747**, a small nod to Subject 47. *You: "THE NOD. \*agrees\*"* | ☑ |
| 17 | **New, from "get wild" (8): light mode re-stamps the band.** Dark reads `Top Secret // Index`. Light, the printout, reads `Declassified // Printout`, because the paper copy is the declassified one. *You: "all approved"* | ☑ |

## Notes on your original (I changed nothing; these are offers)

Things I noticed while reading it closely. Take them or leave them. Fixing any of them means editing your file (or a copy you approve), so they're yours to decide.

- **Some small colored labels are under AA contrast on the dark background.** The section numbers and sub-heads in red (09 STILLWATER, 10 The Fronts: *Music*, *Attention*…) are 3.69:1. Rose (02 How Casting Works, Marin's chips) is 4.49 and 4.21. Green on the panels (06 codex labels) is 4.43. AA is 4.5. A slightly lighter tint of each would pass without changing the feel. These are the smallest lightenings that clear 4.5:1 on both your background and your panels, ready if you say yes:
  - red `#c0392b` → `#d55042`
  - rose `#c0517a` → `#c35880`
  - green `#2e8b57` → `#2f8d58`
- **The table-of-contents chips always glide.** Your CSS turns off smooth scrolling for reduced-motion readers, but the chip script asks for `behavior: 'smooth'` directly, so the glide still happens for them.
- **The chips are `<span>`s.** They work by keyboard (Enter and Space, nice), but screen readers announce them as plain text, not as links. Making them `<a href="#world">` would fix that and keep the look.
- **Redacted text is only hidden from eyes.** `color: transparent` still gets read aloud by screen readers, so *"author eyes only. there are two endings. both happen."* isn't classified for everyone. Maybe that's perfect. Your call.
- **Your file has no `noindex` of its own.** That only matters if you publish (see README → *Publish later*).

## Things I didn't do

- Nothing was pushed, and there's no remote and no deploy.
- No loose art was committed. Images are gitignored until you say yes to a piece.
- Nothing from any other world you're building was used. The palette, type, and voice all come from the pocket bible and GLITCH.
