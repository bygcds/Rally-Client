# Rally — Cliente no oficial de HaxBall para Windows (Unofficial HaxBall Client)

**Rally** es un cliente de escritorio no oficial para [HaxBall](https://www.haxball.com) (Windows 10 y 11) diseñado para mejorar tu experiencia competitiva: **FPS desbloqueados, 18 marcadores reales, minimapa, modo streamer, resolución estirada, uniformes personalizados y grabación automática de replays**.

> **English:** **Rally** is an unofficial desktop client and launcher for **HaxBall** (Windows 10 & 11) featuring unlocked FPS, 18 real-life football scoreboards, minimap, streamer mode, stretched resolution, custom kits, and automatic `.hbr2` replay recording.  
> **Português:** **Rally** é um cliente não oficial de **HaxBall** para Windows com FPS desbloqueado, 18 placares reais, minimapa, modo streamer, resolução esticada, uniformes personalizados e gravação automática de replays.

🌐 **Web oficial y capturas:** [bygcds.github.io/Rally-Client](https://github.io)  
⬇️ **Última versión (v0.1.26):** [Descargar en Releases](../../releases/latest)

> Rally **no está afiliado ni respaldado por HaxBall** ni por su autor. HaxBall pertenece a sus respectivos dueños. Rally carga el juego oficial desde `haxball.com` y no incluye ni redistribuye su código.

---

## Descarga e instalación

1. Entra en **[Releases](../../releases/latest)**.
2. Descarga el instalador `Rally-Setup-<versión>.exe` y ejecútalo.
3. Elige tu idioma (**Español, Inglés o Portugués**) al abrirlo y sigue la guía de bienvenida.

**Requisitos:** Windows 10 u 11 (64 o 32 bits). No requiere permisos de administrador.

> **Aviso de Windows (SmartScreen):** Como el instalador aún no está firmado digitalmente, Windows puede mostrar *"Windows protegió su PC"*. Pulsa **Más información → Ejecutar de todas formas**.

---

## Características principales (Qué trae Rally)

### ⚡ Rendimiento y Competitivo
* **FPS desbloqueados:** Elimina el límite de FPS del navegador, desactiva VSync y monitoriza tus FPS en tiempo real.
* **Resolución estirada:** Configura aspecto `4:3`, `5:4` o escribe tu propia resolución personalizada, como en los *shooters* competitivos.
* **Minimapa táctico:** Visualiza todo el estadio en miniatura con el balón y los jugadores (configurable por tamaño, posición, opacidad y colores de uniforme).
* **Estadísticas locales:** Registra tus goles, asistencias y horas jugadas directamente en tu PC.
* **Teclas en pantalla (*Keystrokes*):** Muestra `WASD` / flechas y patada en tiempo real con posición y opacidad ajustables.

### 🏆 18 Marcadores Reales y Personalización Visual
* **Marcadores de competiciones reales:** Sustituye el marcador clásico por el de la *Champions League, Europa League, Premier League, LaLiga, Serie A, Bundesliga, Ligue 1, MLS, Liga Profesional, Brasileirão, Copa Libertadores, Eurocopa 2024, Copa América 2024, UEFA Nations League* y los Mundiales de *EE. UU. 2026, Qatar 2022, Brasil 2014 y Sudáfrica 2010* (con banderas dinámicas por código de país).
* **Uniformes personalizados:** Crea, previsualiza y guarda tus propios diseños de camisetas o carga clubes y selecciones con un clic (solo visibles para ti).
* **Color del balón y saturación:** Cambia el color del balón y ajusta la saturación del campo (`50%` a `200%`) sin pérdida de FPS.
* **Modo daltonismo:** Filtros específicos para *protanopia, deuteranopia y tritanopia* con paleta de alto contraste.
* **Temas de interfaz:** Modo oscuro por defecto y tema especial **GTA VI**.

### 🎥 Modo Streamer y Replays Automáticos
* **Grabación automática (`.hbr2`):** Guarda todas tus partidas sin interrupciones con fecha, nombre de sala y marcador. Abre cualquier archivo `.hbr2` con doble clic en Rally.
* **Modo Streamer (OBS / Twitch / Kick):** Difumina automáticamente el enlace de la sala, oculta contraseñas, esconde tu clave de identidad y protege tu Discord Rich Presence al detectar programas de transmisión.
* **Atajos de teclado:** Captura de pantalla al portapapeles (`F9`), pantalla completa (`F11`), ocultar HUD, activar/desactivar grabación y salida rápida.

### 🌐 Lista de Salas Inteligente y Comandos
* **Integración con MrHost y Salas Recientes:** Accede directo a las salas de MrHost sin buscar enlaces y vuelve con un clic a tus últimas salas jugadas.
* **Comandos locales en el chat** (solo los ves tú):
  * `/fps` — Muestra el medidor de FPS o fija un límite (`/fps 144`, `/fps 0`).
  * `/net` — Monitor de ping real, *jitter* y pérdida de paquetes.
  * `/gif` — Activa avatares animados.
  * `/fakeping` — Cambia el ping visible para los demás en la lista de jugadores.
  * `/stats` — Muestra tu historial de goles y asistencias.
  * `!bb` — Sale de la sala al instante.

---

## Actualizaciones

Rally avisa cuando hay una versión nueva y se **descarga e instala sola con un clic** (*Actualizar → Reiniciar e instalar*). Las actualizaciones tienen un plazo de unos días; pasado el plazo es necesario actualizar para seguir jugando. Todos tus ajustes, uniformes y replays se conservan.

---

## Preguntas frecuentes (FAQ)

**¿Dónde se guardan mis replays y mapas?**  
En `%APPDATA%\RallyClient\Replays` y `%APPDATA%\RallyClient\Stadiums`. Desde **Ajustes → Replays** tienes un botón para abrir la carpeta directamente.

**¿Qué datos envía Rally?**  
Ninguno. Rally no tiene servidores propios; solo se conecta a `haxball.com` (para cargar el juego) y a GitHub (para comprobar y descargar actualizaciones). Tus configuraciones y estadísticas se guardan únicamente en tu PC.

**¿Qué pasa si HaxBall se actualiza?**  
Rally modifica el juego en memoria al abrirlo. Si HaxBall cambia su código interno, las funciones afectadas se desactivan automáticamente (el juego sigue funcionando con normalidad) hasta que se publique la actualización de Rally.

**Quiero reportar un error o sugerir una función.**  
Abre un [issue](../../issues) indicando tu versión de Rally (**Ajustes → Varios → Acerca de**) y qué estabas haciendo.

---

## Licencia

© bygcds. Todos los derechos reservados. El código fuente de Rally no es público; este repositorio contiene los instaladores oficiales y el registro de novedades.
