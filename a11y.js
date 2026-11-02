/* Large and ultrawide monitors: the base text size grows smoothly above 1600px (16px → 22px), and every size on the site
   that is capped in rem grows with it, so text, headings, spacing and container widths stay in proportion.
   Phones: the footer reaches the very bottom of the screen (no light strip under it on iPhone). */
(function () {
  var st = document.createElement('style');
  st.textContent = '@media (min-width:1600px){html{font-size:clamp(16px,calc(8px + .5vw),22px)}}:root{padding-bottom:0!important}.sfoot{padding-bottom:calc(26px + env(safe-area-inset-bottom,0px))!important;box-shadow:0 70vh 0 #1d2e26}'
    // touch screens: bigger invisible tap areas around the small top-bar controls (they look exactly the same)
    + '@media (pointer:coarse){.burger,.mburger,.sound,.msound,.lang button,.home,.enquire,.menq{position:relative}'
    + '.burger::before,.mburger::before,.sound::before,.msound::before,.home::before,.enquire::before,.menq::before,.menu .close::before{content:"";position:absolute;inset:-13px -10px}'
    + '.lang button::before{content:"";position:absolute;inset:-14px -4px}}';
  (document.head || document.documentElement).appendChild(st);
})();

/* A little more air between lines everywhere: body text (up to 20px) gets at least 1.85 line height.
   Large display lines keep their own tighter spacing. Runs again when pages add or change text. */
(function () {
  function airy() {
    var els = document.querySelectorAll('p, li, dd, blockquote, figcaption');
    for (var i = 0; i < els.length; i++) {
      var el = els[i]; if (el.dataset.airy) continue;
      var cs = getComputedStyle(el), fs = parseFloat(cs.fontSize), lh = parseFloat(cs.lineHeight);
      if (!fs || fs > 20) { el.dataset.airy = '1'; continue; }
      if (!(lh / fs >= 1.85)) el.style.lineHeight = '1.85';
      el.dataset.airy = '1';
    }
  }
  var t = null;
  function soon() { clearTimeout(t); t = setTimeout(airy, 60); }
  function start() { airy(); if ('MutationObserver' in window) new MutationObserver(function () { document.querySelectorAll('[data-airy]').forEach(function (e) { if (!e.isConnected) return; }); soon(); }).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

/* Page transitions: a stone-coloured curtain with the emblem. When a link to another page is followed,
   the curtain rises from below to cover the page; the next page opens at its top and the curtain lifts away. */
(function () {
  var still = false;
  try { still = window.matchMedia('(prefers-reduced-motion: reduce)').matches || !!(JSON.parse(localStorage.getItem('filotimia-a11y')) || {}).still; } catch (e) {}
  if (still) return;
  var css = document.createElement('style');
  css.textContent = [
    '.ptc{position:fixed;inset:0;z-index:9990;background:#eeece3;display:grid;place-items:center;pointer-events:none;transform:translateY(0);will-change:transform}',
    '.ptc svg{width:64px;height:auto;color:#263d34;opacity:.9;transition:opacity .4s}',
    '.ptc.lift{transform:translateY(-100%);transition:transform 1s cubic-bezier(.76,0,.24,1) .15s}',
    '.ptc.lift svg{opacity:0}',
    '.ptc.below{transform:translateY(100%)}',
    '.ptc.cover{transform:translateY(0);transition:transform .7s cubic-bezier(.76,0,.24,1);pointer-events:auto}',
    ''
  ].join('');
  document.head.appendChild(css);
  var c = document.createElement('div'); c.className = 'ptc'; c.setAttribute('aria-hidden', 'true');
  c.innerHTML = '<svg viewBox="264 26 192 166"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="7"><path d="M296 179V97a64 64 0 0 1 128 0v82"/><path d="M296 107 270 98v67l26 10ZM424 107l26-9v67l-26 10Z"/><path d="M288 181h144"/></g><path d="M308 132q26-6 52 0t52 0M314 150q23-5 46 0t46 0" fill="none" stroke="#5b7d88" stroke-width="6" stroke-linecap="round"/><circle cx="360" cy="108" r="12" fill="#c9a876"/></svg>';
  document.documentElement.appendChild(c);
  document.documentElement.classList.add('pt-enter');
  function reveal() { requestAnimationFrame(function () { requestAnimationFrame(function () { c.classList.remove('cover', 'below'); c.classList.add('lift'); }); }); setTimeout(function () { document.documentElement.classList.remove('pt-enter'); }, 1500); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', reveal); else reveal();
  addEventListener('pageshow', function (e) { if (e.persisted) { c.classList.remove('cover', 'below'); c.classList.add('lift'); } });
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    if (a.target && a.target !== '_self') return;
    if (a.hasAttribute('download')) return;
    var url; try { url = new URL(a.getAttribute('href'), location.href); } catch (er) { return; }
    if (url.origin !== location.origin) return;
    if (!/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) return;   // same page: let anchors scroll
    e.preventDefault();
    c.classList.remove('lift'); c.classList.add('below'); void c.offsetWidth;
    c.classList.remove('below'); c.classList.add('cover');
    setTimeout(function () { location.href = url.href; }, 720);
  });
})();

/* Every page opens at its top when reached from a link (unless the link points to a section with #).
   Without this, the browser can carry over or restore an old scroll position. */
(function () {
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  // once the visitor starts scrolling, never pull them back to the top
  var moved = false;
  ['wheel', 'touchstart', 'touchmove', 'keydown', 'pointerdown'].forEach(function (ev) { addEventListener(ev, function () { moved = true; }, { passive: true, once: true }); });
  addEventListener('scroll', function () { if (scrollY > 40) moved = true; }, { passive: true });
  function top() { if (!moved && !location.hash) window.scrollTo(0, 0); }
  top();
  addEventListener('DOMContentLoaded', top);
  addEventListener('pageshow', function (e) { if (!e.persisted) top(); });
})();

/* Filotimia — accessibility tools: a button at the bottom left that opens a small panel.
   Choices are remembered on this device. Contrast and greyscale use a fixed overlay with backdrop-filter,
   so fixed elements (the hero stage, the bars) keep working. */
(function () {
  var KEY = 'filotimia-a11y';
  var S = {};
  try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}

  // "Pause animations" also tells the page's own scripts to behave as if the device asked for reduced motion.
  if (S.still && window.matchMedia) {
    var mm = window.matchMedia.bind(window);
    window.matchMedia = function (q) {
      if (/prefers-reduced-motion:\s*reduce/.test(q)) return { matches: true, media: q, addListener: function () {}, removeListener: function () {}, addEventListener: function () {}, removeEventListener: function () {} };
      return mm(q);
    };
  }

  var T = {
    el: { open: 'Εργαλεία προσβασιμότητας', title: 'Προσβασιμότητα', size: 'Μέγεθος κειμένου', smaller: 'Μικρότερο', larger: 'Μεγαλύτερο',
      contrast: 'Υψηλή αντίθεση', grey: 'Ασπρόμαυρο', links: 'Επισήμανση συνδέσμων', font: 'Ευανάγνωστη γραμματοσειρά', spacing: 'Μεγαλύτερο διάστιχο',
      still: 'Παύση κινήσεων', cursor: 'Μεγάλος δείκτης', reset: 'Επαναφορά', close: 'Κλείσιμο', statement: 'Δήλωση προσβασιμότητας' },
    en: { open: 'Accessibility tools', title: 'Accessibility', size: 'Text size', smaller: 'Smaller', larger: 'Larger',
      contrast: 'High contrast', grey: 'Greyscale', links: 'Highlight links', font: 'Readable font', spacing: 'Wider line spacing',
      still: 'Pause animations', cursor: 'Large cursor', reset: 'Reset', close: 'Close', statement: 'Accessibility statement' }
  };
  function L() { return document.documentElement.lang === 'en' ? 'en' : 'el'; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  var ICON = {
    contrast: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none"/>',
    grey: '<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>',
    links: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    font: '<path d="M5 19 10.5 5h1L17 19M7.4 13.5h7.2"/><path d="M19 19v-6"/>',
    spacing: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 8V4m0 0L2.5 5.5M4 4l1.5 1.5M4 16v4m0 0-1.5-1.5M4 20l1.5-1.5"/>',
    still: '<rect x="7" y="5" width="3.2" height="14" rx="1"/><rect x="13.8" y="5" width="3.2" height="14" rx="1"/>',
    cursor: '<path d="M6 3v15l4-4 3 7 3-1.4-3-6.6h6z"/>'
  };
  var TOGGLES = ['contrast', 'grey', 'links', 'font', 'spacing', 'still', 'cursor'];

  var css = document.createElement('style');
  css.textContent = [
    '.a11yb{position:fixed;z-index:58;left:max(16px,env(safe-area-inset-left,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));width:48px;height:48px;border-radius:50%;border:1px solid rgba(245,240,230,.35);background:#263d34;color:#f5f0e6;display:grid;place-items:center;cursor:pointer;box-shadow:0 12px 30px -12px rgba(14,23,29,.6);transition:transform .35s cubic-bezier(.22,.7,.12,1),background .3s}',
    '.a11yb:hover{transform:scale(1.06);background:#1d2e26}',
    '.a11yb svg{width:26px;height:26px}@media (max-width:700px){.a11yb{width:40px;height:40px;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(12px + env(safe-area-inset-bottom,0px))}.a11yb svg{width:21px;height:21px}}',
    '.a11yb:focus-visible,.a11yp button:focus-visible,.a11yp a:focus-visible{outline:2px solid #e3d6b6;outline-offset:3px}',
    '.a11yp{position:fixed;z-index:59;left:max(16px,env(safe-area-inset-left,0px));bottom:calc(76px + env(safe-area-inset-bottom,0px));width:min(340px,calc(100vw - 32px));max-height:calc(100vh - 110px);overflow:auto;background:#1d2e26;color:#f5f0e6;border:1px solid rgba(245,240,230,.16);border-radius:6px;padding:18px;font-family:"DM Sans",system-ui,sans-serif;box-shadow:0 30px 60px -30px rgba(0,0,0,.55);opacity:0;transform:translateY(10px);pointer-events:none;transition:opacity .3s,transform .3s cubic-bezier(.22,.7,.12,1)}',
    '.a11yp.open{opacity:1;transform:none;pointer-events:auto}',
    '.a11yp .hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}',
    '.a11yp h2{margin:0;font-family:"Playfair Display",Georgia,serif;font-weight:400;font-size:1.35rem}',
    '.a11yp .x{background:none;border:0;color:rgba(245,240,230,.75);font:inherit;font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;padding:6px}',
    '.a11yp .sz{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;padding:12px;border:1px solid rgba(245,240,230,.14);border-radius:4px;margin-bottom:10px}',
    '.a11yp .sz span{font-size:.82rem;text-align:center}',
    '.a11yp .sz b{display:block;font-size:.72rem;color:rgba(245,240,230,.65);font-weight:500;margin-top:2px}',
    '.a11yp .sz button{width:40px;height:40px;border-radius:50%;border:1px solid rgba(245,240,230,.35);background:none;color:#f5f0e6;font:inherit;font-size:1rem;cursor:pointer}',
    '.a11yp .sz button:hover{background:#f5f0e6;color:#263d34}',
    '.a11yp .gr{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
    '.a11yp .tg{display:grid;justify-items:center;gap:8px;padding:14px 8px;border:1px solid rgba(245,240,230,.14);border-radius:4px;background:none;color:#f5f0e6;font:inherit;font-size:.78rem;line-height:1.3;cursor:pointer;text-align:center;transition:background .25s,border-color .25s,color .25s}',
    '.a11yp .tg svg{width:24px;height:24px}',
    '.a11yp .tg:hover{border-color:rgba(245,240,230,.4)}',
    '.a11yp .tg[aria-pressed="true"]{background:#f5f0e6;color:#263d34;border-color:#f5f0e6}',
    '.a11yp .ft{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(245,240,230,.12)}',
    '.a11yp .ft a{color:rgba(245,240,230,.8);font-size:.78rem}',
    '.a11yp .rs{background:none;border:1px solid rgba(245,240,230,.35);color:#f5f0e6;border-radius:2px;padding:9px 14px;font:inherit;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer}',
    /* effects */
    '.a11y-ov{position:fixed;inset:0;z-index:57;pointer-events:none}',
    'html.a11y-contrast .a11y-ov{-webkit-backdrop-filter:contrast(1.45) saturate(1.1);backdrop-filter:contrast(1.45) saturate(1.1)}',
    'html.a11y-grey .a11y-ov{-webkit-backdrop-filter:grayscale(1);backdrop-filter:grayscale(1)}',
    'html.a11y-contrast.a11y-grey .a11y-ov{-webkit-backdrop-filter:contrast(1.45) grayscale(1);backdrop-filter:contrast(1.45) grayscale(1)}',
    'html.a11y-links a{text-decoration:underline !important;text-decoration-thickness:2px !important;text-underline-offset:3px !important;outline:2px dashed #e0b64a !important;outline-offset:2px !important}',
    'html.a11y-font body, html.a11y-font body *:not(svg):not(svg *){font-family:Verdana,Tahoma,"DejaVu Sans",Arial,sans-serif !important;letter-spacing:.01em !important}',
    'html.a11y-spacing p, html.a11y-spacing li, html.a11y-spacing blockquote, html.a11y-spacing td{line-height:2 !important;letter-spacing:.03em !important;word-spacing:.12em !important}',
    'html.a11y-still *, html.a11y-still *::before, html.a11y-still *::after{animation-duration:0s !important;animation-iteration-count:1 !important;transition-duration:0s !important;scroll-behavior:auto !important}',
    'html.a11y-cursor, html.a11y-cursor *{cursor:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'48\' viewBox=\'0 0 20 24\'%3E%3Cpath d=\'M2 1v17l4.5-4.5 3.4 7.6 3.3-1.5-3.3-7.4H17z\' fill=\'%23111\' stroke=\'%23fff\' stroke-width=\'1.4\'/%3E%3C/svg%3E") 4 2, auto !important}',
    '@media (prefers-reduced-motion:reduce){.a11yb,.a11yp{transition:none}}'
  ].join('');
  document.head.appendChild(css);

  function apply() {
    var r = document.documentElement;
    TOGGLES.forEach(function (k) { r.classList.toggle('a11y-' + k, !!S[k]); });
    var z = S.size || 1;
    document.body && (document.body.style.zoom = z === 1 ? '' : String(z));
  }
  apply();

  function build() {
    if (!document.body) return;
    apply();
    var ov = document.createElement('div'); ov.className = 'a11y-ov'; ov.setAttribute('aria-hidden', 'true'); document.documentElement.appendChild(ov);
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'a11yb'; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'a11yp');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.6" r="1.7" fill="currentColor" stroke="none"/><path d="M5 8.2c2.4.8 4.7 1.2 7 1.2s4.6-.4 7-1.2"/><path d="M12 9.4v4.4m0 0-3.2 6.4M12 13.8l3.2 6.4"/></svg>';
    var panel = document.createElement('div'); panel.className = 'a11yp'; panel.id = 'a11yp'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'false');
    // kept outside <body> so the text-size zoom never moves or scales the tools themselves
    document.documentElement.appendChild(btn); document.documentElement.appendChild(panel);
    var legal = (document.body.dataset.legal || 'legal.html') + '#accessibility';

    function render() {
      var t = T[L()], z = Math.round((S.size || 1) * 100);
      btn.setAttribute('aria-label', t.open); btn.title = t.open;
      panel.setAttribute('aria-label', t.title);
      panel.innerHTML = '<div class="hd"><h2>' + t.title + '</h2><button type="button" class="x" data-a="close">' + t.close + '</button></div>' +
        '<div class="sz"><button type="button" data-a="dec" aria-label="' + t.smaller + '">A−</button><span>' + t.size + '<b>' + z + '%</b></span><button type="button" data-a="inc" aria-label="' + t.larger + '">A+</button></div>' +
        '<div class="gr">' + TOGGLES.map(function (k) {
          return '<button type="button" class="tg" data-k="' + k + '" aria-pressed="' + (!!S[k]) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[k] + '</svg>' + t[k] + '</button>';
        }).join('') + '</div>' +
        '<div class="ft"><a href="' + legal + '">' + t.statement + '</a><button type="button" class="rs" data-a="reset">' + t.reset + '</button></div>';
    }
    function open(v) {
      if (v) render();
      panel.classList.toggle('open', v); btn.setAttribute('aria-expanded', v ? 'true' : 'false');
      if (v) { var f = panel.querySelector('button[data-a="dec"]'); f && f.focus(); } else btn.focus();
    }
    btn.addEventListener('click', function () { open(!panel.classList.contains('open')); });
    panel.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var a = b.getAttribute('data-a'), k = b.getAttribute('data-k');
      if (a === 'close') return open(false);
      if (a === 'inc') S.size = Math.min(1.5, Math.round(((S.size || 1) + 0.1) * 10) / 10);
      if (a === 'dec') S.size = Math.max(0.9, Math.round(((S.size || 1) - 0.1) * 10) / 10);
      if (a === 'reset') S = {};
      if (k) {
        S[k] = !S[k];
        if (k === 'still') { save(); apply(); location.reload(); return; }   // scripted motion stops on reload
      }
      save(); apply();
      var keep = k ? '[data-k="' + k + '"]' : a ? '[data-a="' + a + '"]' : null;
      render(); if (keep) { var n = panel.querySelector(keep); n && n.focus(); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('open')) open(false); });
    document.addEventListener('click', function (e) { if (!e.target.isConnected) return; if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) open(false); });
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
