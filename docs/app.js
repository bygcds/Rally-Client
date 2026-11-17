(function () {
  'use strict';

  var REPO = 'bygcds/Rally-Client';
  var API = 'https://api.github.com/repos/' + REPO + '/releases/latest';
  var LANGS = ['es', 'en', 'pt'];

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
  Object.assign(T.en, {
    'shot.replays': 'Settings → Replays', 'shot.replays.alt': 'The Replays tab in Rally’s settings',
    'shot.perf': 'Settings → Performance', 'shot.perf.alt': 'The Performance tab in Rally’s settings',
    'nav.details': 'Details', 'more': 'See details →', 'more2': 'See what’s new →',
    'f1.t': 'Unlocked FPS',
    'f6.d': 'Matches you play in are recorded. <code>.hbr2</code> files open with a double click in Rally.',
    'f7.t': 'Stats', 'f7.d': 'Your goals, assists and hours played, counted automatically in your matches.',
    'f8.t': 'Last room and favorites', 'f8.d': 'Go back to your last room in one click, star favorites and filter the list.',
    'f9.t': 'Discord Rich Presence', 'f9.d': 'Your profile shows the room you play in, the score and a join button. Each piece can be turned off on its own.',
    'f10.t': 'Identity and backup', 'f10.d': 'Copy your HaxBall identity and keep a backup of your nick, keys and settings.',
    'f11.t': 'Dark interface', 'f11.d': 'Room list, room and settings share one design that is easy to read and light.',
    'f12.t': 'One-click updates', 'f12.d': 'Rally tells you about each new version, downloads and installs it by itself, and shows what changed.',
    'chip1': 'Español · English · Português', 'chip2': 'Translucent panel', 'chip3': 'Chat opacity and font size', 'chip4': 'Ping, jitter and loss meter',
    'details.title': 'In detail', 'details.lead': 'How each part works and what options it has.',

    'd1.t': 'Stats', 'd1.lead': 'Your goals, assists and time played, counted by Rally in the matches you play and kept on your PC.', 'd1.where': 'Room list → “Your stats” · /stats',
    'd1.o1.t': 'Notice when you score', 'd1.o1.d': 'Each goal or assist of yours shows a chat notice with your total, for example: “Goal · Total: 13 goals · 7 assists · 3h 20m played”.',
    'd1.o2.t': '“Your stats” card', 'd1.o2.d': 'Outside the room, in the room list’s side bar: your goals, assists and hours.',
    'd1.o3.t': '/stats', 'd1.o3.d': 'Shows your summary in the chat, including own goals. <code>/stats reset confirm</code> wipes all totals.',
    'd1.o4.t': 'When it counts', 'd1.o4.d': 'Only in real matches: you playing on red or blue, with at least one player on each team. Practicing alone adds nothing, and time is match time (it stops while paused). Replays don’t count.',
    'd1.o5.t': 'How credit is given', 'd1.o5.d': 'With the same rule room bots use: the last player on the scoring team to touch the ball gets the goal, and the previous touch by another player of that team is the assist. If the last touch was by an opponent it’s an own goal, with no assist. Only yours are counted.',
    'd1.o6.t': 'One detail', 'd1.o6.d': 'The game reports kicks, not brushes while dribbling: a touch without a kick doesn’t count as a touch.',
    'd1.o7.t': 'Where they’re kept', 'd1.o7.d': 'Only on your PC. The backup in Settings → Account doesn’t include them. Like other features that read the match, they need Rally’s patch to work with the current HaxBall version.',

    'd2.t': 'Replays', 'd2.lead': 'Rally records your matches by itself and opens any .hbr2 with a double click.', 'd2.where': 'Settings → Replays',
    'd2.g1': 'Recording', 'd2.g2': 'Opening an .hbr2',
    'd2.o1.t': 'Save automatically', 'd2.o1.d': 'No “Save as” dialog: the file goes straight to the folder.',
    'd2.o2.t': 'Record every match', 'd2.o2.d': 'Auto-REC starts by itself and, if you leave mid-match, saves it before you go. It needs automatic saving. Also with <code>/autorec on</code> and <code>/autorec off</code>.',
    'd2.o3.t': 'Only record when I’m playing', 'd2.o3.d': 'Ignores matches you’re only watching. It doesn’t record while you practice alone, either.',
    'd2.o4.t': 'Replays folder', 'd2.o4.d': 'Open, Change… or Reset. Replays (.hbr2) and maps (.hbs) are saved by themselves and kept across updates.',
    'd2.o5.t': 'File name', 'd2.o5.d': 'Date, time, room and score: <code>2026-11-14_21h05_MyRoom_3-2.hbr2</code>.',
    'd2.p1.t': 'Double click', 'd2.p1.d': 'Rally registers itself as a viewer for .hbr2 files: double-click one and it opens in the game’s player.',
    'd2.p2.t': 'From the room list', 'd2.p2.d': 'It opens instantly.',
    'd2.p3.t': 'When Rally opens with the recording', 'd2.p3.d': 'If you already have a saved nickname it goes in by itself; the first time, nothing is touched.',
    'd2.p4.t': 'Inside a room', 'd2.p4.d': 'Rally asks first, with 8 seconds to decide: “Leave and watch” or “Cancel”. If a match is in progress, it warns you that you’ll be leaving it.',
    'd2.p5.t': 'Watching another recording', 'd2.p5.d': 'It leaves that one and opens the new one.',
    'd2.p6.t': 'The player', 'd2.p6.d': 'The playback bar appears in your language: restart, pause, slower, faster and leave. Chat is disabled during replays.',

    'd3.t': 'Room list', 'd3.lead': 'The room list, built to find and get back fast.', 'd3.where': 'Room list side bar',
    'd3.o1.t': 'Last room', 'd3.o1.d': 'A button with the name of your last room takes you back in one click. It helps if you were kicked, the connection dropped or you closed by accident; Rally keeps it up to date while you play.',
    'd3.o2.t': 'Favorites', 'd3.o2.d': 'Star rooms and filter to see only your favorites.',
    'd3.o3.t': 'Search and filter', 'd3.o3.d': 'Search by name plus “Password”, “Full” and “Empty” filters.',
    'd3.o4.t': 'Protected exit', 'd3.o4.d': 'If you close or reload Rally while in a room, it asks you to confirm before leaving.',

    'd4.t': 'Discord Rich Presence', 'd4.lead': 'Your Discord profile shows what you’re doing in Rally. Each piece can be turned off and applies right away, no restart.', 'd4.where': 'Settings → Misc → Discord',
    'd4.o1.t': 'Show activity', 'd4.o1.d': 'Your profile shows the room you’re playing in. Turn it off to disable it completely.',
    'd4.o2.t': 'Room name', 'd4.o2.d': 'If you turn it off, your profile says “Playing in a room” instead of the name.',
    'd4.o3.t': '“Join” button', 'd4.o3.d': 'Others see it on your profile and can join your room in one click; Discord doesn’t show it to you.',
    'd4.o4.t': 'Match score', 'd4.o4.d': 'Shows “Red 2 - 1 Blue” with the time while you play.',
    'd4.o5.t': 'What it shows', 'd4.o5.d': 'Playing or spectating in a room, searching or looking at a room from the list, or watching a replay (no room, no score and no button).',
    'd4.o6.t': 'Time', 'd4.o6.d': 'The counter is your session’s: it doesn’t restart with each goal.',

    'd5.t': 'Identity and backup', 'd5.lead': 'Your HaxBall identity and a backup so you don’t lose it.', 'd5.where': 'Settings → Account',
    'd5.g1': 'Identity (auth)', 'd5.g2': 'Backup',
    'd5.o1.t': 'What it is', 'd5.o1.d': 'It’s what room admins see to recognize you. Rally lets you view and copy the public key, and move the private one to another computer.',
    'd5.o2.t': 'Public', 'd5.o2.d': 'It’s shown on screen and copied with “Copy public”.',
    'd5.o3.t': 'Copy private', 'd5.o3.d': 'Only to use it on another computer. It’s never drawn on screen: it’s copied to the clipboard when you press the button. Don’t share it.',
    'd5.o4.t': 'Import', 'd5.o4.d': 'Paste a private key (<code>idkey.…</code>) and Rally applies it and reloads. If it isn’t valid, it tells you.',
    'd5.o5.t': 'Create new', 'd5.o5.d': 'Generates another identity. It asks you to confirm with a second click and replaces the current one: if you didn’t save it, you lose it.',
    'd5.p1.t': 'Export', 'd5.p1.d': 'Saves your identity, nick, keys and settings to a file. It includes your private key: don’t share it.',
    'd5.p2.t': 'Import', 'd5.p2.d': 'Asks you to confirm, checks that the file is a Rally backup and reloads Rally with what was saved.',
    'd5.p3.t': 'What it’s for', 'd5.p3.d': 'If you change PCs, reinstall Windows or the profile is wiped, you get your identity (and your admin rights in rooms) back in one click.',

    'dc.t': 'Commands', 'dc.lead': 'You type them in a room’s chat and Rally handles them on your PC: they aren’t sent to the room.', 'dc.where': 'Room chat',
    'c1': 'Shows or hides the FPS meter. With a number it sets a cap instantly: <code>/fps 144</code>; <code>/fps 0</code> removes it (0 or between 30 and 2000).',
    'c2': 'Changes the FPS mode (normal, unlimited, no vsync). Applies with <code>/relaunch</code>.',
    'c3': 'Animated avatar: each frame up to 2 characters. <code>/gif</code> alone turns it off or resumes it. Only inside a room.',
    'c4': 'Your goals, assists and hours summary. <code>/stats reset confirm</code> wipes it.',
    'c5': 'Turns automatic recording of every match on or off.',
    'c6': 'Turns the room’s translucent panel on or off.',
    'c7': 'Network meter with ping, jitter and loss in a corner of the room. Also in Settings → Misc → Network.',
    'c8': 'Restarts Rally.',
    'c9': 'Leaves the room instantly, with or without a bot. Only with the exact message <code>!bb</code>; “!bb gg” goes out as normal chat. If you were recording, it saves the replay first.',

    'q7.q': 'Where are my stats stored?', 'q7.a': 'Only on your PC, not on a server. Rally counts your goals, assists and hours in real matches, and the backup in Settings → Account doesn’t include them.',
    'q8.q': 'How do I move my identity to another PC?', 'q8.a': 'Export a backup in Settings → Account and import it on the other computer, or copy your private key and paste it there with Import. Don’t share the file or the key: whoever has it can pose as you.'
  });
  Object.assign(T.pt, {
    'shot.replays': 'Configurações → Replays', 'shot.replays.alt': 'A aba Replays nas configurações do Rally',
    'shot.perf': 'Configurações → Desempenho', 'shot.perf.alt': 'A aba Desempenho nas configurações do Rally',
    'nav.details': 'Detalhes', 'more': 'Ver detalhes →', 'more2': 'Ver novidades →',
    'f1.t': 'FPS desbloqueado',
    'f6.d': 'As partidas em que você joga são gravadas. Arquivos <code>.hbr2</code> abrem com duplo clique no Rally.',
    'f7.t': 'Estatísticas', 'f7.d': 'Seus gols, assistências e horas jogadas, contados sozinhos nas suas partidas.',
    'f8.t': 'Última sala e favoritas', 'f8.d': 'Volte à última sala com um clique, marque favoritas e filtre a lista.',
    'f9.t': 'Discord Rich Presence', 'f9.d': 'Seu perfil mostra em que sala você joga, o placar e um botão para entrar. Cada dado pode ser desligado separadamente.',
    'f10.t': 'Identidade e backup', 'f10.d': 'Copie sua identidade do HaxBall e guarde um backup do seu apelido, teclas e configurações.',
    'f11.t': 'Interface escura', 'f11.d': 'Lista de salas, sala e configurações com o mesmo design, fácil de ler e leve.',
    'f12.t': 'Atualizações com um clique', 'f12.d': 'O Rally avisa de cada versão nova, baixa e instala sozinho e mostra o que mudou.',
    'chip1': 'Español · English · Português', 'chip2': 'Painel translúcido', 'chip3': 'Opacidade e tamanho da letra do chat', 'chip4': 'Medidor de ping, jitter e perda',
    'details.title': 'Em detalhe', 'details.lead': 'Como cada parte funciona e que opções tem.',

    'd1.t': 'Estatísticas', 'd1.lead': 'Seus gols, assistências e tempo jogado, contados pelo Rally nas partidas em que você joga e guardados no seu PC.', 'd1.where': 'Lista de salas → «Suas estatísticas» · /stats',
    'd1.o1.t': 'Aviso ao marcar', 'd1.o1.d': 'Cada gol ou assistência sua mostra um aviso no chat com o seu total, por exemplo: «Gol · Total: 13 gols · 7 assistências · 3h 20m jogadas».',
    'd1.o2.t': 'Cartão «Suas estatísticas»', 'd1.o2.d': 'Fora da sala, na barra lateral da lista de salas: seus gols, assistências e horas.',
    'd1.o3.t': '/stats', 'd1.o3.d': 'Mostra seu resumo no chat, com os gols contra. <code>/stats reset confirmar</code> apaga todos os totais.',
    'd1.o4.t': 'Quando conta', 'd1.o4.d': 'Só em partidas de verdade: você jogando no vermelho ou no azul e com pelo menos um jogador em cada time. Treinar sozinho não soma, e o tempo é o da partida (em pausa não corre). Replays não contam.',
    'd1.o5.t': 'Como é atribuído', 'd1.o5.d': 'Com a mesma regra que os bots de sala usam: quem toca na bola por último no time que marca fica com o gol, e o toque anterior de outro jogador do mesmo time é a assistência. Se o último toque foi de um rival, é gol contra e não há assistência. Só os seus são contados.',
    'd1.o6.t': 'Um detalhe', 'd1.o6.d': 'O jogo avisa dos chutes, não dos roçares ao conduzir a bola: um toque sem chutar não conta como toque.',
    'd1.o7.t': 'Onde ficam guardadas', 'd1.o7.d': 'Só no seu PC. O backup de Configurações → Conta não as inclui. Como outros recursos que leem a partida, precisam que o patch do Rally funcione com a versão atual do HaxBall.',

    'd2.t': 'Replays', 'd2.lead': 'O Rally grava suas partidas sozinho e abre qualquer .hbr2 com duplo clique.', 'd2.where': 'Configurações → Replays',
    'd2.g1': 'Gravar', 'd2.g2': 'Abrir um .hbr2',
    'd2.o1.t': 'Salvar automaticamente', 'd2.o1.d': 'Sem diálogo «Salvar como»: o arquivo vai direto para a pasta.',
    'd2.o2.t': 'Gravar cada partida', 'd2.o2.d': 'O Auto-REC começa sozinho e, se você sair no meio da partida, salva antes de sair. Precisa do salvamento automático. Também com <code>/autorec on</code> e <code>/autorec off</code>.',
    'd2.o3.t': 'Só gravar se eu estiver jogando', 'd2.o3.d': 'Ignora as partidas que você só está assistindo. Também não grava enquanto você treina sozinho.',
    'd2.o4.t': 'Pasta de replays', 'd2.o4.d': 'Abrir, Alterar… ou Restaurar. Replays (.hbr2) e mapas (.hbs) são salvos sozinhos e mantidos ao atualizar.',
    'd2.o5.t': 'Nome do arquivo', 'd2.o5.d': 'Data, hora, sala e placar: <code>2026-11-14_21h05_MinhaSala_3-2.hbr2</code>.',
    'd2.p1.t': 'Duplo clique', 'd2.p1.d': 'O Rally se registra como visualizador de arquivos .hbr2: dê duplo clique em um e ele abre no reprodutor do jogo.',
    'd2.p2.t': 'Pela lista de salas', 'd2.p2.d': 'Abre na hora.',
    'd2.p3.t': 'Ao abrir o Rally com a gravação', 'd2.p3.d': 'Se você já tem um apelido salvo, entra sozinho; na primeira vez, nada é tocado.',
    'd2.p4.t': 'Dentro de uma sala', 'd2.p4.d': 'O Rally pergunta antes, com 8 segundos para decidir: «Sair e ver» ou «Cancelar». Se há uma partida em andamento, avisa que você vai abandoná-la.',
    'd2.p5.t': 'Vendo outra gravação', 'd2.p5.d': 'Sai dela e abre a nova.',
    'd2.p6.t': 'O visualizador', 'd2.p6.d': 'A barra de reprodução aparece no seu idioma: reiniciar, pausar, mais lento, mais rápido e sair. O chat fica desativado nas repetições.',

    'd3.t': 'Lista de salas', 'd3.lead': 'A lista de salas, pensada para encontrar e voltar rápido.', 'd3.where': 'Barra lateral da lista de salas',
    'd3.o1.t': 'Última sala', 'd3.o1.d': 'Um botão com o nome da sua última sala leva você de volta com um clique. Serve se você foi expulso, a conexão caiu ou você fechou sem querer; o Rally vai guardando enquanto você joga.',
    'd3.o2.t': 'Favoritas', 'd3.o2.d': 'Marque salas com a estrela e filtre para ver só as favoritas.',
    'd3.o3.t': 'Buscar e filtrar', 'd3.o3.d': 'Busca por nome e filtros «Com senha», «Cheias» e «Vazias».',
    'd3.o4.t': 'Saída protegida', 'd3.o4.d': 'Se você fechar ou recarregar o Rally estando numa sala, ele pede confirmação antes de sair.',

    'd4.t': 'Discord Rich Presence', 'd4.lead': 'Seu perfil do Discord mostra o que você faz no Rally. Cada dado pode ser desligado e se aplica na hora, sem reiniciar.', 'd4.where': 'Configurações → Diversos → Discord',
    'd4.o1.t': 'Mostrar atividade', 'd4.o1.d': 'Seu perfil mostra a sala em que você joga. Desligue para desativar por completo.',
    'd4.o2.t': 'Nome da sala', 'd4.o2.d': 'Se desligar, seu perfil diz «Jogando em uma sala» em vez do nome.',
    'd4.o3.t': 'Botão «Entrar»', 'd4.o3.d': 'Os outros o veem no seu perfil e entram na sua sala com um clique; o Discord não o mostra para você.',
    'd4.o4.t': 'Placar da partida', 'd4.o4.d': 'Mostra «Vermelho 2 - 1 Azul» com o tempo enquanto você joga.',
    'd4.o5.t': 'O que aparece', 'd4.o5.d': 'Jogando ou espectando em uma sala, procurando ou olhando uma sala pela lista, ou vendo uma repetição (sem sala, sem placar e sem botão).',
    'd4.o6.t': 'Tempo', 'd4.o6.d': 'O contador é o da sua sessão: não reinicia a cada gol.',

    'd5.t': 'Identidade e backup', 'd5.lead': 'Sua identidade no HaxBall e uma cópia de segurança para não perdê-la.', 'd5.where': 'Configurações → Conta',
    'd5.g1': 'Identidade (auth)', 'd5.g2': 'Backup',
    'd5.o1.t': 'O que é', 'd5.o1.d': 'É o que os admins de sala veem para reconhecer você. O Rally deixa você ver e copiar a chave pública, e levar a privada para outro computador.',
    'd5.o2.t': 'Pública', 'd5.o2.d': 'Aparece na tela e se copia com «Copiar pública».',
    'd5.o3.t': 'Copiar privada', 'd5.o3.d': 'Só para usar em outro computador. Nunca é desenhada na tela: é copiada para a área de transferência quando você aperta o botão. Não compartilhe.',
    'd5.o4.t': 'Importar', 'd5.o4.d': 'Cole uma chave privada (<code>idkey.…</code>) e o Rally a aplica e recarrega. Se não for válida, ele avisa.',
    'd5.o5.t': 'Criar nova', 'd5.o5.d': 'Gera outra identidade. Pede confirmação com um segundo clique e substitui a atual: se você não a guardou, perde.',
    'd5.p1.t': 'Exportar', 'd5.p1.d': 'Salva sua identidade, apelido, teclas e configurações em um arquivo. Inclui sua chave privada: não o compartilhe.',
    'd5.p2.t': 'Importar', 'd5.p2.d': 'Pede confirmação, confere que o arquivo é um backup do Rally e recarrega o Rally com o que foi salvo.',
    'd5.p3.t': 'Para que serve', 'd5.p3.d': 'Se você trocar de PC, reinstalar o Windows ou o perfil for apagado, recupera sua identidade (e seu admin nas salas) com um clique.',

    'dc.t': 'Comandos', 'dc.lead': 'Você os digita no chat de uma sala e o Rally os resolve no seu PC: não são enviados à sala.', 'dc.where': 'Chat da sala',
    'c1': 'Mostra ou oculta o medidor de FPS. Com um número define um limite na hora: <code>/fps 144</code>; <code>/fps 0</code> o remove (0 ou entre 30 e 2000).',
    'c2': 'Muda o modo de FPS (normal, sem limite, sem vsync). Aplica-se com <code>/relaunch</code>.',
    'c3': 'Avatar animado: cada frame com até 2 caracteres. <code>/gif</code> sozinho o desliga ou retoma. Só dentro de uma sala.',
    'c4': 'Seu resumo de gols, assistências e horas. <code>/stats reset confirmar</code> o apaga.',
    'c5': 'Liga ou desliga a gravação automática de cada partida.',
    'c6': 'Liga ou desliga o painel translúcido da sala.',
    'c7': 'Medidor de rede com ping, jitter e perda em um canto da sala. Também em Configurações → Diversos → Rede.',
    'c8': 'Reinicia o Rally.',
    'c9': 'Sai da sala na hora, com ou sem bot. Só com a mensagem exata <code>!bb</code>; «!bb gg» vai como chat normal. Se você estava gravando, salva o replay antes.',

    'q7.q': 'Onde ficam guardadas as minhas estatísticas?', 'q7.a': 'Só no seu PC, não em um servidor. O Rally conta seus gols, assistências e horas em partidas de verdade, e o backup de Configurações → Conta não as inclui.',
    'q8.q': 'Como passo minha identidade para outro PC?', 'q8.a': 'Exporte um backup em Configurações → Conta e importe no outro computador, ou copie sua chave privada e cole lá com Importar. Não compartilhe o arquivo nem a chave: quem a tiver pode se passar por você.'
  });

  var ES_EXTRA = {
    'news.error': 'No se pudieron cargar las novedades. Inténtalo más tarde.',
    'news.latest': 'Última', 'type.new': 'Nuevo', 'type.improved': 'Mejora', 'type.fixed': 'Arreglo',
    'shot.rooms.alt': 'La lista de salas de Rally', 'shot.room.alt': 'Una sala en Rally',
    'shot.image.alt': 'La pestaña Imagen de los ajustes de Rally', 'shot.replays.alt': 'La pestaña Replays de los ajustes de Rally', 'shot.perf.alt': 'La pestaña Rendimiento de los ajustes de Rally', 'shot.kits.alt': 'La pestaña Uniformes de los ajustes de Rally',
    'v.label': 'Versión {v}', 'v.file': '{name} · {size} MB'
  };

  var lang = 'es';
  var release = null;
  var changelog = null;
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
    } catch (e) { }
    var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : 'es';
  }

  function remember(el, attr, value) {
    if (el.dataset[attr] === undefined) el.dataset[attr] = value;
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    try { localStorage.setItem('rally-lang', lang); } catch (e) { }

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

    document.title = lang === 'en' ? 'Rally · Unofficial HaxBall client for Windows'
      : lang === 'pt' ? 'Rally · Cliente não oficial de HaxBall para Windows'
      : 'Rally · Cliente no oficial de HaxBall para Windows';

    renderRelease();
    renderChangelog();
  }

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
    try { cached = JSON.parse(sessionStorage.getItem('rally-release') || 'null'); } catch (e) { }
    if (cached && Date.now() - cached.at < 10 * 60 * 1000) { release = cached.data; renderRelease(); return; }

    fetch(API, { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) {
        var exe = (d.assets || []).filter(function (a) { return /\.exe$/i.test(a.name); })[0];
        release = {
          version: String(d.tag_name || '').replace(/^v/, ''),
          url: exe ? exe.browser_download_url : (d.html_url || 'https://github.com/' + REPO + '/releases/latest'),
          name: exe ? exe.name : '',
          size: exe ? exe.size : 0
        };
        try { sessionStorage.setItem('rally-release', JSON.stringify({ at: Date.now(), data: release })); } catch (e) { }
        renderRelease();
      })
      .catch(function () { });
  }

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

  function watchShots() {
    $all('.shot img').forEach(function (img) {
      var fig = img.closest('.shot');
      function fail() {
        var fb = img.getAttribute('data-fallback');
        if (fb && img.getAttribute('src') !== fb) {
          img.setAttribute('data-i18n-alt', img.getAttribute('data-fallback-alt'));
          img.alt = t(img.getAttribute('data-fallback-alt'));
          img.src = fb;
          return;
        }
        fig.hidden = true;
        if (fig.id === 'hero-shot') document.getElementById('top').classList.add('solo');
      }
      if (img.complete && img.naturalWidth === 0) fail();
      img.addEventListener('error', fail);
    });
  }

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
