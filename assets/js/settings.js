// settings.js: the two switches (light, motion).
// boot.js has already applied the saved values before first paint; this only handles clicks.

const root = document.documentElement;
const KEYS = { theme: 'glitch:theme', motion: 'glitch:motion' };
const THEME_COLOR = { dark: '#060809', light: '#f3f0e8' };

function read(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function save(key, value) {
  // private windows and blocked storage throw here. the switch still works for this visit.
  try { localStorage.setItem(key, value); } catch (e) { /* nothing to do */ }
}

function sync() {
  const theme = root.dataset.theme;
  const motion = root.dataset.motion;
  document.querySelectorAll('[data-setting]').forEach((btn) => {
    const on = btn.dataset.setting === 'theme' ? theme === 'light' : motion === 'on';
    btn.setAttribute('aria-pressed', String(on));
    const state = btn.querySelector('.state');
    if (state) state.textContent = on ? 'on' : 'off';
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLOR[theme] || THEME_COLOR.dark);
}

document.querySelectorAll('[data-setting]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.setting === 'theme') {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      save(KEYS.theme, root.dataset.theme);
    } else {
      root.dataset.motion = root.dataset.motion === 'on' ? 'off' : 'on';
      save(KEYS.motion, root.dataset.motion);
    }
    sync();
  });
});

// if the OS reduced-motion setting changes mid-visit, follow it, unless she has already chosen.
try {
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (read(KEYS.motion)) return;
    root.dataset.motion = e.matches ? 'off' : 'on';
    sync();
  });
} catch (e) { /* very old browsers: the boot-time value stands */ }

sync();
