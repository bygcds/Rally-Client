# Rally - Cliente no oficial de HaxBall para Windows y Linux

**Rally** es un cliente no oficial de escritorio para [HaxBall](https://www.haxball.com), disponible para Windows y Linux. Permite jugar con ajustes de rendimiento, replays automáticos, estadísticas locales, minimapa, marcadores de competiciones reales, uniformes personalizados y más opciones visuales y controles.

**English:** Rally is an unofficial HaxBall desktop client for Windows and Linux with FPS controls, automatic `.hbr2` replay recording, statistics, a minimap, 20 real football scoreboards, custom kits and a streamer mode.

**Português:** Rally é um cliente não oficial de HaxBall para Windows e Linux com controle de FPS, gravação automática de replays `.hbr2`, estatísticas, minimapa, 20 placares reais, uniformes personalizados e modo streamer.

Sitio oficial: [bygcds.github.io/Rally-Client](https://bygcds.github.io/Rally-Client/)

Rally no está afiliado ni respaldado por HaxBall ni por su autor. HaxBall pertenece a sus respectivos dueños. Rally carga el juego oficial desde `haxball.com` y no incluye ni redistribuye su código.

---

## Descarga

Las últimas versiones están disponibles en [Releases](../../releases/latest).

### Windows

1. Descarga `Rally-Setup-<versión>.exe`.
2. Ejecuta el instalador y sigue la guía de bienvenida.
3. Elige español, inglés o portugués al abrir Rally.

Rally para Windows requiere Windows 10 u 11, 64 o 32 bits. No hace falta ser administrador.

Como el instalador todavía no está firmado digitalmente, Windows puede mostrar el mensaje "Windows protegió tu PC". Pulsa **Más información** y después **Ejecutar de todas formas**.

### Linux

Descarga el archivo `Rally-<versión>-x86_64.AppImage` para sistemas de 64 bits.

```bash
chmod +x Rally-*-x86_64.AppImage
./Rally-*-x86_64.AppImage
```

También puedes habilitar el permiso de ejecución desde las propiedades del archivo. Si hace falta FUSE, instala `libfuse2`.

La versión de Linux tiene las mismas funciones principales que Windows y se actualiza automáticamente.

---

## Funciones principales

### Rendimiento y juego competitivo

- Modo normal, FPS desbloqueados y opción sin VSync.
- Límite de FPS manual o automático según la frecuencia del monitor.
- Medidor de FPS y latencia de teclas.
- Monitor de ping, jitter y pérdida de paquetes.
- Resolución estirada con relaciones 4:3, 5:4 o una proporción personalizada.
- Saturación de pantalla y filtros de protanopia, deuteranopia y tritanopia.
- Lado fijo para jugar siempre desde la izquierda o la derecha.
- Teclas en pantalla para WASD o flechas y la acción de patada.
- Asignación de botones del mouse a controles del juego.
- Atajos configurables sin interferir mientras escribes en el chat.

### Minimapa y estadísticas

- Visualización de todo el estadio, el balón y los jugadores.
- Posición, tamaño y opacidad configurables.
- Aparición automática en mapas grandes o permanente.
- Colores de jugadores según su uniforme.
- Señal adicional en mapas grandes de Real Soccer para saques de banda, esquina y portería.
- Registro local de goles, asistencias y horas jugadas.

### Marcadores

Rally incluye 20 marcadores de ligas y competiciones reales:

- Mundiales de Sudáfrica 2010, Brasil 2014, Catar 2022 y Estados Unidos 2026.
- Copa América y Eurocopa.
- UEFA Champions League, UEFA Europa League y UEFA Nations League.
- Premier League, LaLiga, Serie A, Bundesliga, Ligue 1 y otras ligas.
- MLS, Liga Profesional y competiciones sudamericanas.
- Marcador clásico original de HaxBall.

Los marcadores permiten elegir posición y tamaño, cambiar las líneas según el uniforme, ocultarse con un atajo e incluir banderas mediante códigos de hasta cuatro letras.

### Editor de HUD

La pantalla de tamaño real permite mover y cambiar el tamaño del marcador, el minimapa y las teclas en pantalla. Las piezas pueden alinearse al centro o volver a su posición automática.

### Salas

- Acceso directo a las salas publicadas por MrHost.
- Lista configurable de salas recientes, con jugadores y distancia.
- Reconexión rápida a la última sala.
- Salas favoritas y filtros por contraseña, salas llenas o vacías.
- Búsqueda por país y por nombre.
- Confirmación antes de cerrar una sala.
- Reconocimiento de nombres con letras especiales y emojis.
- Modo sandbox para practicar sin internet, sin enlace y sin aparecer en la lista de HaxBall.

### Uniformes y apariencia

- Uniformes personalizados con vista previa y biblioteca.
- Selecciones y clubes de ejemplo disponibles con un clic.
- Color del balón visible solo para el jugador.
- Resolución personalizada.
- Ajuste de saturación.
- Temas Rally, GTA VI y Clásico.
- Panel de sala translúcido.
- Fondo de cancha opcional, desactivado de forma predeterminada.
- Fondo configurable durante pausas.

Las personalizaciones visuales solo se muestran en tu cliente.

### Replays

Rally puede grabar automáticamente todas las partidas en archivos `.hbr2`, con fecha, nombre de sala y marcador.

- Apertura de cualquier replay con doble clic.
- Biblioteca local desde **Ajustes → Replays**.
- Activación o desactivación con `/autorec`.
- Marcadores y puntos de interés dentro de la reproducción.
- Los replays se conservan al actualizar o reinstalar.

En Windows se guardan en `%APPDATA%\RallyClient\Replays`. En Linux suelen estar en `~/.config/RallyClient/Replays`.

### Modo streamer

- Difumina enlaces y contraseñas.
- Oculta la clave de identidad.
- Difumina el nombre de las salas recientes y la sala actual.
- Puede ocultar el chat.
- Activación manual, mediante atajo o automática al detectar OBS, Streamlabs, Twitch Studio, XSplit o vMix.
- Opciones normales, privadas o desactivadas para Discord Rich Presence.

En Linux, la detección automática reconoce OBS.

### Comandos locales

Los comandos se procesan en tu equipo y no llegan al chat de la sala.

| Comando | Función |
| --- | --- |
| `/fps` | Muestra el medidor de FPS y latencia. |
| `/fps 144` | Establece un límite de 144 FPS. |
| `/fps auto` | Usa el doble de los Hz del monitor. |
| `/fps 0` | Desbloquea el límite de FPS. |
| `/net` | Muestra ping, jitter y pérdida de paquetes. |
| `/stats` | Muestra goles, asistencias y horas jugadas. |
| `/gif 1 2 3` | Activa avatares animados. |
| `/fakeping 67` | Cambia el ping visible para los demás. |
| `/glass` | Hace translúcido el panel de la sala. |
| `/autorec` | Activa o desactiva los replays automáticos. |
| `!bb` | Permite salir de la sala al instante. |

---

## Actualizaciones

Rally avisa cuando hay una versión nueva y permite descargarla e instalarla desde el cliente con **Actualizar → Reiniciar e instalar**.

Los ajustes, uniformes y replays se conservan. Las novedades aparecen después de actualizar y pueden consultarse desde **Ajustes → Varios → Ver novedades**.

Algunas versiones tienen un período limitado de actualización. Después hay que actualizar para seguir jugando.

---

## Sin conexión

Rally puede abrirse sin internet. La primera vez que se abre con conexión guarda una copia local del juego y la renueva periódicamente.

Sin conexión, el modo sandbox sigue disponible y la lista de salas queda vacía. Las actualizaciones esperan hasta recuperar internet.

---

## Privacidad y compatibilidad

Rally no tiene servidores propios. Solo se conecta a `haxball.com` para cargar el juego y a GitHub para comprobar y descargar actualizaciones.

Los ajustes, uniformes, estadísticas y replays se guardan en tu equipo. Discord Rich Presence es opcional y sus datos pueden desactivarse por separado.

Si HaxBall cambia internamente, las funciones que modifican el juego pueden desactivarse temporalmente mientras el juego oficial sigue funcionando con normalidad.

---

## Preguntas frecuentes

**¿Dónde se guardan los replays y los mapas?**

En Windows, los replays están en `%APPDATA%\RallyClient\Replays` y los estadios en `%APPDATA%\RallyClient\Stadiums`. En Linux suelen encontrarse en `~/.config/RallyClient/`.

**¿Qué datos envía Rally?**

Rally no envía estadísticas ni ajustes a servidores propios. Solo se conecta a `haxball.com` y a GitHub para cargar el juego y gestionar las actualizaciones.

**¿Qué pasa si HaxBall se actualiza?**

Las funciones afectadas se desactivan temporalmente hasta que salga una versión compatible de Rally.

**¿La versión de Linux es igual a la de Windows?**

Sí. Tiene el mismo código y las mismas funciones principales. Algunas opciones del modo streamer pueden variar según los programas detectados por el sistema.

**¿En qué idiomas está disponible?**

Español, inglés y portugués.

**¿Cómo reporto un problema?**

Abre un [issue](../../issues) con la versión que aparece en **Ajustes → Varios → Acerca de**, tu sistema operativo y una descripción breve de lo ocurrido.

---

## Nota sobre el código

Este repositorio contiene los instaladores publicados de Rally y el registro de novedades. El código fuente de Rally no es público y este repositorio no es un proyecto de código abierto.

© bygcds. Todos los derechos reservados.
