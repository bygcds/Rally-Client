/**
 * app.js — página de Rally
 * -----------------------------------------------------------------------
 *  1. Idioma (es/en/pt). El español vive en el HTML; aquí solo van en y pt.
 *  2. Descarga: pregunta a GitHub cuál es la última Release y apunta el
 *     botón al .exe. Si falla, el botón sigue llevando a Releases/latest.
 *  3. Novedades: pinta changelog.json (el mismo que usa el cliente).
 *
 * Los textos de changelog.json se insertan con textContent (nunca HTML).
 * Las traducciones de este archivo son nuestras (data-i18n-html es seguro).
 * -----------------------------------------------------------------------
 */
(function () {
  'use strict';

  var REPO = 'bygcds/Rally-Client';
  var API = 'https://api.github.com/repos/' + REPO + '/releases/latest';
  var LANGS = ['es', 'en', 'pt'];

  /* ---------------- traducciones ---------------- */

  var T = {
    en: {
      'skip': 'Skip to content',
      'nav.features': 'Features', 'nav.screens': 'Screenshots', 'nav.news': 'What’s new', 'nav.faq': 'FAQ', 'nav.download': 'Download',
      'hero.eyebrow': 'Unofficial client · Windows',
      'hero.title': 'HaxBall, built for serious play',
      'hero.lead': 'Smoother gameplay, your own look, kits, automatic replays and one-click updates.',
      'hero.cta': 'Download for Windows', 'hero.news': 'See what’s new',
      'hero.meta1': 'Windows 10 and 11', 'hero.meta2': 'No admin rights needed',
      'shot.rooms': 'Room list', 'shot.rooms.alt': 'Rally’s room list',
      'shot.room': 'Inside a room', 'shot.room.alt': 'A room in Rally',
      'shot.image': 'Settings → Image', 'shot.image.alt': 'The Image tab in Rally’s settings',
      'shot.kits': 'Settings → Kits', 'shot.kits.alt': 'The Kits tab in Rally’s settings',
      'features.title': 'What’s inside', 'features.lead': 'Everything is configured from the gear icon in the client’s top bar.',
      'f1.t': 'Unlocked FPS', 'f1.d': 'Unlocked FPS with a built-in meter. Type <code>/fps</code> to see yours.',
      'f2.t': 'Ball color', 'f2.d': 'Pick the color you read best. Only you see it.',
      'f3.t': 'Stretched resolution', 'f3.d': '4:3, 5:4 or whatever you type, like in competitive shooters.',
      'f4.t': 'Kits', 'f4.d': 'Custom kits with preview, a library and per-team assignment. Add example national teams and clubs with one click. Only you see them.',
      'f5.t': '<span>/gif</span>', 'f5.d': 'Animated avatars in your matches.',
      'f6.t': 'Automatic replays', 'f6.d': 'Matches you play in are recorded. <code>.hbr2</code> files open with a double click.',
      'f7.t': 'Local commands', 'f7.d': '<code>/fps</code> to see your FPS and <code>!bb</code> to leave a room instantly.',
      'f8.t': 'Dark interface', 'f8.d': 'Room list, room and settings share one design that is easy to read and light.',
      'f9.t': 'One-click updates', 'f9.d': 'Rally tells you about each new version, downloads and installs it by itself, and shows what changed.',
      'chip1': 'Discord Rich Presence (optional)', 'chip2': 'Español · English · Português', 'chip3': 'Settings backup',
      'screens.title': 'Screenshots', 'screens.lead': 'A look inside the client.',
      'news.title': 'What’s new', 'news.lead': 'The same notes Rally shows you when it opens after an update.',
      'news.loading': 'Loading…', 'news.error': 'Couldn’t load the release notes. Try again later.',
      'news.latest': 'Latest', 'type.new': 'New', 'type.improved': 'Improved', 'type.fixed': 'Fixed',
      'dl.title': 'Download', 'dl.lead': 'For Windows 10 and 11, 64 or 32 bit. No admin rights needed.',
      'dl.btn': 'Download Rally', 'dl.other': 'Looking for another version?', 'dl.all': 'See all Releases',
      'dl.s1.t': 'Download the installer', 'dl.s1.d': 'It’s the file named <code>Rally-Setup-&lt;version&gt;.exe</code>.',
      'dl.s2.t': 'Run it', 'dl.s2.d': 'Pick a folder if you want and finish the install. Rally opens by itself at the end.',
      'dl.s3.t': 'Pick a language and go', 'dl.s3.d': 'The welcome guide covers the basics. You can read it again in Settings → Misc.',
      'n1.t': 'Windows warning', 'n1.d': 'Because the installer isn’t digitally signed yet, Windows may show “Windows protected your PC”. Click More info → Run anyway.',
      'n2.t': 'Download only the .exe', 'n2.d': 'Releases also lists other files (.blockmap, latest.yml, latest.json): Rally uses them to update itself. You only need the .exe, and only from this repository.',
      'n3.t': 'Not affiliated with HaxBall', 'n3.d': 'Rally is an independent project. It is not affiliated with or endorsed by HaxBall or its author.',
      'faq.title': 'FAQ',
      'q1.q': 'Where are my replays and maps stored?', 'q1.a': 'In <code>%APPDATA%\\RallyClient\\Replays</code> and <code>%APPDATA%\\RallyClient\\Stadiums</code>. Settings → Replays has a button to open the folder.',
      'q2.q': 'What data does Rally send?', 'q2.a': 'Rally has no servers of its own. It only connects to haxball.com (the game) and GitHub (to check for and download updates). Your settings stay on your PC.',
      'q3.q': 'What happens when HaxBall updates?', 'q3.a': 'Rally modifies the game in memory when it opens. If HaxBall changes its code, those features turn themselves off (the game keeps working normally) until a Rally update comes out.',
      'q4.q': 'Do I have to update every time?', 'q4.a': 'Each version has a grace period of a few days; after that you need to update to keep playing. Your settings and replays are kept.',
      'q5.q': 'Is there a Linux or Mac version?', 'q5.a': 'Windows only for now. Linux and, later, Mac are planned.',
      'q6.q': 'I want to report a problem or suggest something', 'q6.a': 'Open an <a href="https://github.com/bygcds/Rally-Client/issues">issue</a> with your Rally version (Settings → Misc → About) and what you were doing.',
      'foot.rel': 'Releases', 'foot.issues': 'Report a problem', 'foot.repo': 'Repository',
      'foot.disc': 'Rally is not affiliated with or endorsed by HaxBall or its author. HaxBall belongs to its respective owners. Rally loads the official game from haxball.com and does not include or redistribute its code.',
      'foot.rights': 'All rights reserved.',
      'v.label': 'Version {v}', 'v.file': '{name} · {size} MB'
    },
    pt: {
      'skip': 'Pular para o conteúdo',
      'nav.features': 'Recursos', 'nav.screens': 'Capturas', 'nav.news': 'Novidades', 'nav.faq': 'Perguntas', 'nav.download': 'Baixar',
      'hero.eyebrow': 'Cliente não oficial · Windows',
      'hero.title': 'HaxBall para jogar a sério',
      'hero.lead': 'Mais fluidez, sua própria imagem, uniformes, replays automáticos e atualizações com um clique.',
      'hero.cta': 'Baixar para Windows', 'hero.news': 'Ver novidades',
      'hero.meta1': 'Windows 10 e 11', 'hero.meta2': 'Sem permissão de administrador',
      'shot.rooms': 'Lista de salas', 'shot.rooms.alt': 'A lista de salas do Rally',
      'shot.room': 'Dentro de uma sala', 'shot.room.alt': 'Uma sala no Rally',
      'shot.image': 'Configurações → Imagem', 'shot.image.alt': 'A aba Imagem nas configurações do Rally',
      'shot.kits': 'Configurações → Uniformes', 'shot.kits.alt': 'A aba Uniformes nas configurações do Rally',
      'features.title': 'O que traz', 'features.lead': 'Tudo é configurado pela engrenagem da barra superior do cliente.',
      'f1.t': 'FPS desbloqueado', 'f1.d': 'FPS desbloqueado com medidor integrado. Digite <code>/fps</code> para ver o seu.',
      'f2.t': 'Cor da bola', 'f2.d': 'Escolha a cor que você enxerga melhor. Só você vê.',
      'f3.t': 'Resolução esticada', 'f3.d': '4:3, 5:4 ou a que você digitar, como nos shooters competitivos.',
      'f4.t': 'Uniformes', 'f4.d': 'Personalizados, com pré-visualização, biblioteca e atribuição por equipe. Seleções e clubes de exemplo com um clique. Só você vê.',
      'f5.t': '<span>/gif</span>', 'f5.d': 'Avatares animados nas suas partidas.',
      'f6.t': 'Replays automáticos', 'f6.d': 'As partidas em que você joga são gravadas. Arquivos <code>.hbr2</code> abrem com duplo clique.',
      'f7.t': 'Comandos locais', 'f7.d': '<code>/fps</code> para ver seus FPS e <code>!bb</code> para sair de uma sala na hora.',
      'f8.t': 'Interface escura', 'f8.d': 'Lista de salas, sala e configurações com o mesmo design, fácil de ler e leve.',
      'f9.t': 'Atualizações com um clique', 'f9.d': 'O Rally avisa de cada versão nova, baixa e instala sozinho e mostra o que mudou.',
      'chip1': 'Discord Rich Presence (opcional)', 'chip2': 'Español · English · Português', 'chip3': 'Backup das suas configurações',
      'screens.title': 'Capturas', 'screens.lead': 'Veja o cliente por dentro.',
      'news.title': 'Novidades', 'news.lead': 'As mesmas notas que o Rally mostra ao abrir depois de atualizar.',
      'news.loading': 'Carregando…', 'news.error': 'Não foi possível carregar as novidades. Tente de novo mais tarde.',
      'news.latest': 'Última', 'type.new': 'Novo', 'type.improved': 'Melhoria', 'type.fixed': 'Correção',
      'dl.title': 'Baixar', 'dl.lead': 'Para Windows 10 e 11, 64 ou 32 bits. Não precisa ser administrador.',
      'dl.btn': 'Baixar o Rally', 'dl.other': 'Outra versão?', 'dl.all': 'Ver todas as Releases',
      'dl.s1.t': 'Baixe o instalador', 'dl.s1.d': 'É o arquivo <code>Rally-Setup-&lt;versão&gt;.exe</code>.',
      'dl.s2.t': 'Execute', 'dl.s2.d': 'Escolha a pasta se quiser e conclua a instalação. O Rally abre sozinho no final.',
      'dl.s3.t': 'Escolha o idioma e pronto', 'dl.s3.d': 'O guia de boas-vindas mostra o básico. Você pode relê-lo em Configurações → Diversos.',
      'n1.t': 'Aviso do Windows', 'n1.d': 'Como o instalador ainda não tem assinatura digital, o Windows pode mostrar “O Windows protegeu o seu PC”. Clique em Mais informações → Executar assim mesmo.',
      'n2.t': 'Baixe só o .exe', 'n2.d': 'Em Releases você verá outros arquivos (.blockmap, latest.yml, latest.json): o Rally os usa para se atualizar. Você só precisa do .exe, e só deste repositório.',
      'n3.t': 'Sem afiliação com o HaxBall', 'n3.d': 'O Rally é um projeto independente. Não é afiliado nem endossado pelo HaxBall nem pelo seu autor.',
      'faq.title': 'Perguntas frequentes',
      'q1.q': 'Onde ficam meus replays e mapas?', 'q1.a': 'Em <code>%APPDATA%\\RallyClient\\Replays</code> e <code>%APPDATA%\\RallyClient\\Stadiums</code>. Configurações → Replays tem um botão para abrir a pasta.',
      'q2.q': 'Que dados o Rally envia?', 'q2.a': 'O Rally não tem servidores próprios. Só se conecta ao haxball.com (o jogo) e ao GitHub (para verificar e baixar atualizações). Suas configurações ficam só no seu PC.',
      'q3.q': 'O que acontece quando o HaxBall atualiza?', 'q3.a': 'O Rally modifica o jogo na memória ao abrir. Se o HaxBall mudar seu código, esses recursos se desativam sozinhos (o jogo continua funcionando normalmente) até sair uma atualização do Rally.',
      'q4.q': 'Preciso atualizar sempre?', 'q4.a': 'Cada versão tem um prazo de alguns dias; depois dele é preciso atualizar para continuar jogando. Suas configurações e seus replays são mantidos.',
      'q5.q': 'Existe versão para Linux ou Mac?', 'q5.a': 'Por enquanto só Windows. Linux e, mais adiante, Mac estão nos planos.',
      'q6.q': 'Quero reportar um problema ou sugerir algo', 'q6.a': 'Abra uma <a href="https://github.com/bygcds/Rally-Client/issues">issue</a> com a sua versão do Rally (Configurações → Diversos → Sobre) e o que você estava fazendo.',
      'foot.rel': 'Releases', 'foot.issues': 'Reportar um problema', 'foot.repo': 'Repositório',
      'foot.disc': 'O Rally não é afiliado nem endossado pelo HaxBall nem pelo seu autor. HaxBall pertence aos seus respectivos donos. O Rally carrega o jogo oficial de haxball.com e não inclui nem redistribui o código dele.',
      'foot.rights': 'Todos os direitos reservados.',
      'v.label': 'Versão {v}', 'v.file': '{name} · {size} MB'
    }
  };
  // Español: textos que no están como atributo en el HTML.
  var ES_EXTRA = {
    'news.error': 'No se pudieron cargar las novedades. Inténtalo más tarde.',
    'news.latest': 'Última', 'type.new': 'Nuevo', 'type.improved': 'Mejora', 'type.fixed': 'Arreglo',
    'shot.rooms.alt': 'La lista de salas de Rally', 'shot.room.alt': 'Una sala en Rally',
    'shot.image.alt': 'La pestaña Imagen de los ajustes de Rally', 'shot.kits.alt': 'La pestaña Uniformes de los ajustes de Rally',
    'v.label': 'Versión {v}', 'v.file': '{name} · {size} MB'
  };

  /* ---------------- estado ---------------- */

  var lang = 'es';
  var release = null;      // { tag, name, url, size }
  var changelog = null;    // objeto de changelog.json
  var changelogFailed = false;

  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function t(key, params) {
    var s = lang === 'es' ? ES_EXTRA[key] : (T[lang] && T[lang][key]);
    if (s == null) s = ES_EXTRA[key] || key;
    if (params) Object.keys(params).forEach(function (k) { s = s.replace('{' + k + '}', params[k]); });
    return s;
  }

  function pickLang() {
    try {
      var saved = localStorage.getItem('rally-lang');
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* sin almacenamiento: da igual */ }
    var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : 'es';
  }

  /* ---------------- idioma ---------------- */

  function remember(el, attr, value) {
    if (el.dataset[attr] === undefined) el.dataset[attr] = value;
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    try { localStorage.setItem('rally-lang', lang); } catch (e) { /* ok */ }

    $all('[data-i18n]').forEach(function (el) {
      remember(el, 'es', el.textContent);
      var v = lang === 'es' ? el.dataset.es : T[lang][el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    $all('[data-i18n-html]').forEach(function (el) {
      remember(el, 'esHtml', el.innerHTML);
      var v = lang === 'es' ? el.dataset.esHtml : T[lang][el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });
    $all('[data-i18n-alt]').forEach(function (el) { el.alt = t(el.getAttribute('data-i18n-alt')); });
    $all('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });

    document.title = lang === 'en' ? 'Rally — Unofficial HaxBall client for Windows'
      : lang === 'pt' ? 'Rally — Cliente não oficial de HaxBall para Windows'
      : 'Rally — Cliente no oficial de HaxBall para Windows';

    renderRelease();
    renderChangelog();
  }

  /* ---------------- descarga ---------------- */

  function renderRelease() {
    if (!release) return;
    $all('[data-download]').forEach(function (a) { a.href = release.url; });
    $all('[data-version]').forEach(function (el) { el.textContent = t('v.label', { v: release.version }); el.parentNode.hidden = false; });
    $all('[data-file]').forEach(function (el) {
      el.textContent = release.name ? t('v.file', { name: release.name, size: (release.size / 1048576).toFixed(0) }) : '';
    });
  }

  function loadRelease() {
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem('rally-release') || 'null'); } catch (e) { /* ok */ }
    if (cached && Date.now() - cached.at < 10 * 60 * 1000) { release = cached.data; renderRelease(); return; }

    fetch(API, { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) {
        var exe = (d.assets || []).filter(function (a) { return /\.exe$/i.test(a.name); })[0];
        release = {
          version: String(d.tag_name || '').replace(/^v/, ''),
          // Sin .exe en la Release: el botón sigue llevando a la página de la Release.
          url: exe ? exe.browser_download_url : (d.html_url || 'https://github.com/' + REPO + '/releases/latest'),
          name: exe ? exe.name : '',
          size: exe ? exe.size : 0
        };
        try { sessionStorage.setItem('rally-release', JSON.stringify({ at: Date.now(), data: release })); } catch (e) { /* ok */ }
        renderRelease();
      })
      .catch(function () { /* el enlace por defecto (Releases/latest) ya funciona */ });
  }

  /* ---------------- novedades ---------------- */

  function pick(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.es || obj.en || '';
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function renderChangelog() {
    var box = document.getElementById('timeline');
    if (!box) return;
    box.textContent = '';

    if (changelogFailed) { box.appendChild(el('p', 'muted', t('news.error'))); return; }
    if (!changelog) { box.appendChild(el('p', 'muted', lang === 'es' ? 'Cargando…' : t('news.loading'))); return; }

    (changelog.versions || []).forEach(function (v, i) {
      var d = el('details', 'ver');
      if (i === 0) d.open = true;
      var s = el('summary');
      s.appendChild(el('span', 'ver-num', 'v' + v.version));
      s.appendChild(el('span', 'ver-title', pick(v.title)));
      if (i === 0) s.appendChild(el('span', 'ver-tag', t('news.latest')));
      d.appendChild(s);

      var ul = el('ul');
      (v.items || []).forEach(function (it) {
        var type = ['new', 'improved', 'fixed'].indexOf(it.type) !== -1 ? it.type : 'new';
        var li = el('li');
        li.appendChild(el('span', 'badge ' + type, t('type.' + type)));
        li.appendChild(el('span', '', pick(it.text)));
        ul.appendChild(li);
      });
      d.appendChild(ul);
      box.appendChild(d);
    });
  }

  function loadChangelog() {
    fetch('changelog.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) { changelog = d; renderChangelog(); })
      .catch(function () { changelogFailed = true; renderChangelog(); });
  }

  /* ---------------- capturas que aún no existen ---------------- */

  function watchShots() {
    $all('.shot-body img').forEach(function (img) {
      function mark() { img.parentNode.classList.add('empty'); }
      if (img.complete && img.naturalWidth === 0) mark();
      img.addEventListener('error', mark);
    });
  }

  /* ---------------- arranque ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    $all('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.lang); });
    });
    watchShots();
    applyLang(pickLang());
    loadRelease();
    loadChangelog();
  });
})();
