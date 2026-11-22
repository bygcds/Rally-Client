(function () {
  'use strict';
  var REPO = 'bygcds/Rally-Client';
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

  // En Linux, el botón de Linux pasa primero.
  if (/linux/i.test(navigator.platform || navigator.userAgent) && !/android/i.test(navigator.userAgent)) {
    document.documentElement.setAttribute('data-os', 'linux');
  }

  function mb(n) { return (n / 1048576).toFixed(0) + ' MB'; }

  // Última versión publicada: enlaces directos al .exe y al AppImage, y número de versión.
  fetch('https://api.github.com/repos/' + REPO + '/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (d) {
      var assets = d.assets || [];
      var files = {
        win: assets.filter(function (a) { return /\.exe$/i.test(a.name); })[0],
        linux: assets.filter(function (a) { return /\.AppImage$/i.test(a.name); })[0]
      };
      var v = String(d.tag_name || '').replace(/^v/, '');
      Object.keys(files).forEach(function (k) {
        var f = files[k];
        if (!f) return;
        $$('[data-dl="' + k + '"]').forEach(function (a) { a.href = f.browser_download_url; });
        $$('[data-file="' + k + '"]').forEach(function (p) { p.textContent = f.name + ', ' + mb(f.size); });
        if (f.digest && /^sha256:/i.test(f.digest)) {
          $$('[data-sha="' + k + '"]').forEach(function (p) {
            p.textContent = 'SHA-256: ';
            p.appendChild(el('code', '', f.digest.replace(/^sha256:/i, '')));
          });
        }
      });
      if (v) $$('[data-version]').forEach(function (s) { s.textContent = 'Versión ' + v + '.'; });
    }).catch(function () {});

  // Novedades: la última abierta, 3 más a la vista y el resto detrás de un botón (así no crece sin fin).
  var RECENT = 4;
  var box = document.getElementById('timeline');
  function release(v, first) {
    var wrap = el(first ? 'div' : 'details', 'rel');
    var head = first ? el('h3') : el('summary');
    head.appendChild(document.createTextNode(v.version));
    if (first) head.appendChild(el('span', 'badge', 'Última'));
    head.appendChild(el('small', '', (v.title && v.title.es) || ''));
    wrap.appendChild(head);
    var ul = el('ul');
    (v.items || []).forEach(function (it) { ul.appendChild(el('li', it.type, (it.text && it.text.es) || '')); });
    wrap.appendChild(ul);
    return wrap;
  }
  fetch('changelog.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (d) {
      var list = d.versions || [];
      box.textContent = '';
      list.slice(0, RECENT).forEach(function (v, i) { box.appendChild(release(v, i === 0)); });
      var rest = list.slice(RECENT);
      if (!rest.length) return;
      var older = el('div', 'older');
      older.hidden = true;
      rest.forEach(function (v) { older.appendChild(release(v, false)); });
      var btn = el('button', 'more', 'Ver versiones anteriores (' + rest.length + ')');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', function () {
        var open = older.hidden;
        older.hidden = !open;
        btn.setAttribute('aria-expanded', String(open));
        btn.textContent = open ? 'Ocultar versiones anteriores' : 'Ver versiones anteriores (' + rest.length + ')';
      });
      box.appendChild(btn);
      box.appendChild(older);
    }).catch(function () { box.textContent = ''; box.appendChild(el('p', 'legend', 'No se pudieron cargar las novedades. Inténtalo más tarde.')); });
})();
