/* boot.js: runs in <head>, before first paint, so the page never flashes the wrong theme or motion.
   A classic script on purpose, because module scripts are deferred and would run too late.
   settings.js wires up the switches afterwards. */
(function () {
  var root = document.documentElement;

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  // GLITCH is a dark world (the pocket bible is "dark on every host"), so dark is the default.
  var theme = read('glitch:theme');
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';

  // motion follows the OS reduced-motion setting until she picks for herself.
  var motion = read('glitch:motion');
  if (motion !== 'on' && motion !== 'off') {
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    motion = reduce ? 'off' : 'on';
  }

  root.setAttribute('data-theme', theme);
  root.setAttribute('data-motion', motion);

  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f3f0e8' : '#060809');
})();
