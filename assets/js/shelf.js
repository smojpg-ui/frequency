// shelf.js: draws the files on the landing page from content/shelf.json.
// To add, rename, or open a file, edit the JSON. This script shouldn't need touching.

const MANIFEST = new URL('../../content/shelf.json', import.meta.url);

// accents that pass WCAG AA as small text in BOTH themes. red, rose and green don't (on dark),
// so they're left out here; anything unknown falls back to gold.
const ACCENTS = new Set(['gold', 'violet', 'cyan', 'rosegold', 'amber']);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function card(file, i) {
  const isOpen = file.status === 'open' && Boolean(file.href);
  const li = el('li', `file ${isOpen ? 'is-open' : 'is-placeholder'}`);
  li.style.setProperty('--c', `var(--${ACCENTS.has(file.accent) ? file.accent : 'gold'})`);

  const inner = el(isOpen ? 'a' : 'div', 'file-inner');
  if (isOpen) inner.href = file.href;

  const top = el('span', 'file-top');
  top.append(el('span', 'file-num', String(i + 1).padStart(2, '0')), el('span', 'file-ref', file.ref || ''));

  inner.append(
    top,
    el('span', 'file-title', file.title || 'untitled'),
    el('span', 'file-note', file.note || ''),
    el('span', 'chip', isOpen ? 'open' : 'placeholder'),
  );
  li.append(inner);
  return li;
}

async function draw() {
  const list = document.getElementById('files');
  if (!list) return;
  try {
    const res = await fetch(MANIFEST);
    if (!res.ok) throw new Error(`shelf.json: ${res.status}`);
    const { files = [] } = await res.json();
    list.replaceChildren(...files.map(card));
  } catch (err) {
    // opened straight from disk (file://) the JSON can't be fetched. the static card in index.html stays,
    // and a note says why the rest of the shelf is missing.
    const note = document.getElementById('files-note');
    if (note) note.hidden = false;
    console.warn(err);
  }
}

draw();
