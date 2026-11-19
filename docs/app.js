(function () {
  'use strict';
  var REPO = 'bygcds/Rally-Client';
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

  // Última versión publicada: enlace directo al .exe y número de versión.
  fetch('https://api.github.com/repos/' + REPO + '/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (d) {
      var exe = (d.assets || []).filter(function (a) { return /\.exe$/i.test(a.name); })[0];
      var v = String(d.tag_name || '').replace(/^v/, '');
      if (exe) $$('[data-download]').forEach(function (a) { a.href = exe.browser_download_url; });
      if (v) $$('[data-version]').forEach(function (s) { s.textContent = 'Versión ' + v + '.'; });
      if (exe) $$('[data-file]').forEach(function (p) { p.textContent = exe.name + ', ' + (exe.size / 1048576).toFixed(0) + ' MB'; });
    }).catch(function () {});

  // Novedades: la última abierta, las demás plegadas.
  var box = document.getElementById('timeline');
  fetch('changelog.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (d) {
      box.textContent = '';
      (d.versions || []).forEach(function (v, i) {
        var wrap = el(i === 0 ? 'div' : 'details', 'rel');
        var head = i === 0 ? el('h3') : el('summary');
        head.appendChild(document.createTextNode(v.version));
        head.appendChild(el('small', '', (v.title && v.title.es) || ''));
        wrap.appendChild(head);
        var ul = el('ul');
        (v.items || []).forEach(function (it) { ul.appendChild(el('li', it.type, (it.text && it.text.es) || '')); });
        wrap.appendChild(ul);
        box.appendChild(wrap);
      });
    }).catch(function () { box.textContent = ''; box.appendChild(el('p', 'legend', 'No se pudieron cargar las novedades. Inténtalo más tarde.')); });
})();
