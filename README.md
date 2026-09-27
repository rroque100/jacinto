# Jacinto Lima Lucas — Sitio web de campaña

**En Challhuahuacho, ¡Venceremos!**

Página de una sola vista (HTML + CSS + JavaScript puro, sin dependencias) con la historia de vida y la lucha social del candidato.

## Identidad visual
Tomada del símbolo oficial del partido (`assets/img/simbolo.png`) y de la banderola de campaña
(`assets/img/banderola.png`): fondo blanco, rojo `#be1623`, verde hoja `#00b050` con contorno negro,
letras negras condensadas (Anton) y el grito "¡Venceremos!" en rojo cursiva. El símbolo de las tres
hojas está redibujado en SVG en `js/main.js` (función `emblem`) para poder animarlo, y aparece en el
precargador, la barra de navegación, la portada, la historia y el pie.

## WhatsApp
Enlace directo (wa.me) con mensaje ya escrito, usado por el botón flotante y el botón "Escríbenos" del menú:

https://wa.me/51997197498?text=Hola%20Jacinto%2C%20quiero%20sumarme%20a%20la%20campa%C3%B1a%20en%20Challhuahuacho.%20%C2%A1Venceremos!

El número y el mensaje se cambian en `js/data.js` (`contacto.whatsapp` y `contacto.mensajeWhatsapp`).

## Cómo editar el contenido
Todo el texto, cifras, hitos, logros, caso, propuestas, redes y colores están en **`js/data.js`**.
Reemplaza cada texto entre `[corchetes]` con la información real antes de publicar.

- Fotos: copia las imágenes a `assets/img/` y pon la ruta en `candidato.foto` (retrato de la portada,
  cuadrado o vertical, rostro en el tercio superior, JPG de ~1200 px y < 400 KB) y en
  `candidato.fotoHistoria` (foto con la comunidad para "Su historia"; si se deja vacía se usa `foto`).
- Colores de campaña: `colores.primario`, `colores.secundario`, `colores.oscuro`.
- Fecha de la cuenta regresiva: `fechaEleccion` (verificar con la fuente oficial).
- WhatsApp: `contacto.whatsapp` (solo dígitos, con 51).

## Ver localmente
Abre `index.html` en el navegador, o sirve la carpeta: `python3 -m http.server 8000`.

## Publicar
Es un sitio estático: funciona en GitHub Pages, Netlify, Vercel o cualquier hosting.

## Animaciones incluidas
Preloader, título animado letra por letra, red de partículas interactiva, texto tipo máquina de escribir,
cuenta regresiva, marquesina, contadores animados, revelado al hacer scroll, línea de tiempo que se dibuja,
tarjetas con inclinación 3D y brillo, botones magnéticos, plan de gobierno por ejes con buscador,
reproductor de redes integrado, modal y barra de progreso.

## Navegación y rendimiento
- Acceso rápido "¿Qué quieres saber?" debajo de las cifras y barra inferior fija en celular
  (Inicio, Quién es, Logros, Propuestas, WhatsApp) que marca la sección activa.
- Fotos en WebP con versión liviana para celular (`-800` / `-720`) mediante `srcset`.
- Scripts diferidos, fuentes sin bloqueo (Inter variable) y animaciones que se pausan fuera de pantalla.
- Vista previa al compartir (Open Graph): `assets/img/og.jpg` (1200 × 630). Respeta `prefers-reduced-motion`.
