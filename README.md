# Jacinto — Sitio web de campaña

Página de una sola vista (HTML + CSS + JavaScript puro, sin dependencias) con la historia de vida y la lucha social del candidato.

## Cómo editar el contenido
Todo el texto, cifras, hitos, luchas, propuestas, testimonios, enlaces y colores están en **`js/data.js`**.
Reemplaza cada texto entre `[corchetes]` con la información real antes de publicar.

- Foto: copia la imagen a `assets/img/` y pon la ruta en `candidato.foto`.
- Colores de campaña: `colores.primario`, `colores.secundario`, `colores.oscuro`.
- Fecha de la cuenta regresiva: `fechaEleccion` (verificar con la fuente oficial).
- WhatsApp del formulario "Únete": `contacto.whatsapp` (solo dígitos, con 51).

## Ver localmente
Abre `index.html` en el navegador, o sirve la carpeta: `python3 -m http.server 8000`.

## Publicar
Es un sitio estático: funciona en GitHub Pages, Netlify, Vercel o cualquier hosting.

## Animaciones incluidas
Preloader, título animado letra por letra, red de partículas interactiva, texto tipo máquina de escribir,
cuenta regresiva, marquesina, contadores animados, revelado al hacer scroll, línea de tiempo que se dibuja,
tarjetas con inclinación 3D y brillo, botones magnéticos, pestañas de propuestas, carrusel de testimonios
(con deslizamiento táctil), modal, confeti y barra de progreso. Respeta `prefers-reduced-motion`.
