/* Filotimia — cookie / storage notice and settings.
   The site uses only strictly necessary storage (language choice, this notice's answer).
   No analytics, advertising or tracking. Categories below stay off and locked until such tools are ever added. */
(function () {
  var KEY = 'filotimia-consent', VERSION = 2;
  var T = {
    el: {
      title: 'Cookies',
      text: 'Χρησιμοποιούμε μόνο τα απολύτως απαραίτητα για τη λειτουργία της σελίδας.',
      ok: 'Κατάλαβα', settings: 'Ρυθμίσεις', policy: 'Πολιτική cookies',
      dTitle: 'Ρυθμίσεις cookies', dIntro: 'Επιλέξτε ποιες κατηγορίες επιτρέπετε. Τα απαραίτητα δεν μπορούν να απενεργοποιηθούν, γιατί χωρίς αυτά η σελίδα δεν λειτουργεί σωστά.',
      nec: 'Απαραίτητα', necD: 'Αποθηκεύουν τη γλώσσα που επιλέξατε και την απάντησή σας σε αυτή την ειδοποίηση. Δεν σας ταυτοποιούν.', always: 'Πάντα ενεργά',
      ana: 'Στατιστικά', anaD: 'Δεν χρησιμοποιούνται σε αυτή τη σελίδα.',
      mkt: 'Διαφήμιση και παρακολούθηση', mktD: 'Δεν χρησιμοποιούνται σε αυτή τη σελίδα.', off: 'Ανενεργά',
      save: 'Αποθήκευση', close: 'Κλείσιμο'
    },
    en: {
      title: 'Cookies',
      text: 'We only use what is strictly necessary for this site to work.',
      ok: 'Got it', settings: 'Settings', policy: 'Cookie policy',
      dTitle: 'Cookie settings', dIntro: 'Choose which categories you allow. Necessary storage cannot be switched off, because the site does not work properly without it.',
      nec: 'Necessary', necD: 'Remembers your chosen language and your answer to this notice. It does not identify you.', always: 'Always on',
      ana: 'Analytics', anaD: 'Not used on this site.',
      mkt: 'Advertising and tracking', mktD: 'Not used on this site.', off: 'Off',
      save: 'Save', close: 'Close'
    }
  };
  function L() { return document.documentElement.lang === 'en' ? 'en' : 'el'; }
  function read() { try { var v = JSON.parse(localStorage.getItem(KEY)); return v && v.v === VERSION ? v : null; } catch (e) { return null; } }
  function write() { try { localStorage.setItem(KEY, JSON.stringify({ v: VERSION, necessary: true, analytics: false, marketing: false, date: new Date().toISOString() })); } catch (e) {} }
  var policyHref = (document.body.dataset.legal || 'legal.html') + '#cookies';

  var css = document.createElement('style');
  css.textContent = [
    '.ck{position:fixed;z-index:60;left:50%;margin-left:calc(-1 * min(380px,calc(100vw - 32px)) / 2);bottom:calc(20px + env(safe-area-inset-bottom,0px));width:min(380px,calc(100vw - 32px));text-align:center;background:#1d2e26;color:#f5f0e6;border:1px solid rgba(245,240,230,.16);border-radius:4px;padding:18px 20px 16px;box-shadow:0 30px 60px -30px rgba(0,0,0,.5);font-family:"DM Sans",system-ui,sans-serif;transform:translateY(16px);opacity:0;transition:opacity .5s,transform .5s cubic-bezier(.22,.7,.12,1)}',
    '.ck.on{opacity:1;transform:none}',
    '.ck h2{margin:0 0 6px;font-family:"Playfair Display",Georgia,serif;font-weight:400;font-size:1.3rem}',
    '.ck p{margin:0;font-size:.88rem;line-height:1.6;color:rgba(245,240,230,.85)}',
    '.ck a{color:#f5f0e6;text-decoration:underline;text-underline-offset:3px}',
    '.ck .row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;align-items:center;justify-content:center}',
    '.ck button,.ckd button{font:inherit;cursor:pointer;border-radius:2px;padding:11px 16px;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;font-weight:600}',
    '.ck .pri,.ckd .pri{background:#f5f0e6;color:#263d34;border:1px solid #f5f0e6}',
    '.ck .sec,.ckd .sec{background:transparent;color:#f5f0e6;border:1px solid rgba(245,240,230,.4)}',
    '.ck .pol{flex-basis:100%;font-size:.78rem;margin-top:2px}',
    '.ck button:focus-visible,.ckd button:focus-visible,.ck a:focus-visible{outline:2px solid #e3d6b6;outline-offset:3px}',
    '.ckb{position:fixed;inset:0;z-index:61;background:rgba(14,23,29,.6);display:grid;place-items:center;padding:16px}',
    '.ckd{width:min(560px,100%);max-height:calc(100vh - 32px);overflow:auto;background:#1d2e26;color:#f5f0e6;border:1px solid rgba(245,240,230,.16);border-radius:4px;padding:28px;font-family:"DM Sans",system-ui,sans-serif}',
    '.ckd h2{margin:0 0 10px;font-family:"Playfair Display",Georgia,serif;font-weight:400;font-size:1.6rem}',
    '.ckd>p{margin:0 0 18px;font-size:.9rem;line-height:1.6;color:rgba(245,240,230,.85)}',
    '.ckd .cat{display:grid;grid-template-columns:1fr auto;gap:4px 16px;padding:16px 0;border-top:1px solid rgba(245,240,230,.14)}',
    '.ckd .cat b{font-weight:600}',
    '.ckd .cat span{grid-column:1;font-size:.85rem;color:rgba(245,240,230,.75);line-height:1.5}',
    '.ckd .st{grid-column:2;grid-row:1/span 2;align-self:center;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;padding:6px 10px;border-radius:999px;border:1px solid rgba(245,240,230,.3)}',
    '.ckd .st.on{background:#f5f0e6;color:#263d34;border-color:#f5f0e6}',
    '.ckd .row{display:flex;gap:10px;justify-content:flex-end;margin-top:18px;flex-wrap:wrap}',
    '@media (prefers-reduced-motion:reduce){.ck{transition:none}}'
  ].join('');
  document.head.appendChild(css);

  var bar = null, lastFocus = null;
  function showBar() {
    if (bar) bar.remove();
    var t = T[L()];
    bar = document.createElement('section');
    bar.className = 'ck'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', t.title);
    bar.innerHTML = '<h2>' + t.title + '</h2><p>' + t.text + '</p><div class="row"><button type="button" class="pri" data-a="ok">' + t.ok + '</button><button type="button" class="sec" data-a="set">' + t.settings + '</button><a class="pol" href="' + policyHref + '">' + t.policy + '</a></div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('on'); });
    bar.addEventListener('click', function (e) {
      var a = e.target.getAttribute('data-a');
      if (a === 'ok') { write(); hideBar(); }
      if (a === 'set') openSettings();
    });
  }
  function hideBar() { if (!bar) return; var b = bar; bar = null; b.classList.remove('on'); setTimeout(function () { b.remove(); }, 500); }

  function openSettings() {
    var t = T[L()];
    lastFocus = document.activeElement;
    var back = document.createElement('div'); back.className = 'ckb';
    back.innerHTML = '<div class="ckd" role="dialog" aria-modal="true" aria-labelledby="ckd-h"><h2 id="ckd-h">' + t.dTitle + '</h2><p>' + t.dIntro + '</p>' +
      '<div class="cat"><b>' + t.nec + '</b><em class="st on">' + t.always + '</em><span>' + t.necD + '</span></div>' +
      '<div class="cat"><b>' + t.ana + '</b><em class="st">' + t.off + '</em><span>' + t.anaD + '</span></div>' +
      '<div class="cat"><b>' + t.mkt + '</b><em class="st">' + t.off + '</em><span>' + t.mktD + '</span></div>' +
      '<div class="row"><button type="button" class="sec" data-a="close">' + t.close + '</button><button type="button" class="pri" data-a="save">' + t.save + '</button></div></div>';
    document.body.appendChild(back);
    var btns = back.querySelectorAll('button'); btns[btns.length - 1].focus();
    function close() { back.remove(); document.removeEventListener('keydown', key); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
    function key(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') { var f = btns[0], l = btns[btns.length - 1]; if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); } else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); } }
    }
    document.addEventListener('keydown', key);
    back.addEventListener('click', function (e) {
      if (e.target === back) return close();
      var a = e.target.getAttribute('data-a');
      if (a === 'close') close();
      if (a === 'save') { write(); hideBar(); close(); }
    });
  }

  window.FilotimiaConsent = { open: openSettings };
  document.addEventListener('click', function (e) { var a = e.target.closest('[data-cookie-settings]'); if (a) { e.preventDefault(); openSettings(); } });
  if (!read()) setTimeout(showBar, 1600);
})();
