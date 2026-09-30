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

## Formulario de registro para Meta Ads (`/unete`)
Página ligera e independiente (`unete/index.html`) para recolectar datos de simpatizantes:
nombres y apellidos, celular/WhatsApp, DNI (opcional), comunidad o barrio, rango de edad (opcional),
forma de apoyo y consentimiento de datos (Ley 29733). Guarda también el origen del anuncio
(`utm_*` y `fbclid`).

**URL amigable para el anuncio:** `https://jacinto-lima.vercel.app/unete`
(`/sumate` y `/registro` redirigen a la misma página).

URL recomendada en Meta Ads (campo *Sitio web*), con el seguimiento en *Parámetros de URL*:

```
https://jacinto-lima.vercel.app/unete
utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

### Dónde se guardan los datos (Google Sheets)
1. Crea una hoja de Google con los encabezados en la fila 1:
   `fecha, nombre, celular, dni, comunidad, edad, apoyo, utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid`
2. *Extensiones → Apps Script* y pega:
   ```js
   function doPost(e) {
     const d = JSON.parse(e.postData.contents);
     const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     const cols = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
     sh.appendRow(cols.map((c) => d[c] || ""));
     return ContentService.createTextOutput("ok");
   }
   ```
3. *Implementar → Nueva implementación → Aplicación web*, acceso: "Cualquier usuario". Copia la URL.
4. En Vercel: *Settings → Environment Variables* → `REGISTRO_WEBHOOK_URL` = esa URL, y vuelve a desplegar.

Si el registro no se puede guardar, la página ofrece enviar los mismos datos por WhatsApp para no perder el contacto.

### Píxel de Meta
Pon el ID del píxel en `META_PIXEL_ID` (al inicio del `<script>` de `unete/index.html`).
Registra `PageView` al entrar y `Lead` cuando la persona se registra (úsalo como evento de conversión).
