/* =====================================================================
   CONTENIDO DEL SITIO — edita SOLO este archivo para personalizar la web.
   ---------------------------------------------------------------------
   Todo lo que aparece entre [corchetes] es un marcador pendiente de
   completar con la información real del candidato (tomada de sus
   publicaciones en Facebook / TikTok). No publiques el sitio sin
   reemplazarlos.
   ===================================================================== */

window.SITE = {
  candidato: {
    nombre: "Jacinto",
    apellido: "[Apellido]",
    cargo: "Candidato a [Cargo] de [Distrito / Provincia / Región]",
    partido: "[Nombre del partido o movimiento]",
    numero: "[N.º]",                       // número en la cédula
    foto: "",                              // ej: "assets/img/candidato.jpg" (vacío = monograma)
    lema: "La lucha de toda una vida, al servicio de nuestro pueblo",
    frasesRotativas: [
      "dirigente social",
      "defensor del pueblo",
      "hombre de trabajo",
      "voz de los que no tienen voz"
    ]
  },

  // Colores de campaña (se aplican como variables CSS)
  colores: {
    primario: "#e11d48",
    secundario: "#f59e0b",
    oscuro: "#0b1020"
  },

  // Fecha de la elección para la cuenta regresiva (verificar con el JNE/ONPE)
  fechaEleccion: "2026-10-04T07:00:00-05:00",

  cifras: [
    { valor: 25, sufijo: "+", texto: "años de lucha social" },
    { valor: 40, sufijo: "+", texto: "comunidades acompañadas" },
    { valor: 1000, sufijo: "+", texto: "familias beneficiadas" },
    { valor: 12, sufijo: "", texto: "obras gestionadas" }
  ],

  historia: {
    titulo: "Nacido del pueblo, formado en la lucha",
    parrafos: [
      "[Lugar y año de nacimiento. Origen familiar, infancia y los valores que recibió de sus padres.]",
      "[Estudios y primeros trabajos. Qué experiencias lo acercaron a los problemas de su comunidad.]",
      "[Cómo empezó su participación como dirigente y qué causas ha defendido desde entonces.]"
    ],
    cita: "[Frase representativa del candidato, tomada de uno de sus videos o publicaciones.]"
  },

  // Línea de tiempo: agrega, quita o reordena hitos libremente
  trayectoria: [
    { anio: "[Año]", titulo: "Sus raíces", texto: "[Infancia, familia y comunidad de origen.]", icono: "seed" },
    { anio: "[Año]", titulo: "Primer cargo dirigencial", texto: "[Organización vecinal, gremio, ronda, asociación, etc.]", icono: "flag" },
    { anio: "[Año]", titulo: "Una lucha emblemática", texto: "[Describe la movilización o causa más recordada.]", icono: "fist" },
    { anio: "[Año]", titulo: "Logro para la comunidad", texto: "[Obra, servicio o derecho conseguido gracias a la organización.]", icono: "build" },
    { anio: "[Año]", titulo: "Reconocimiento", texto: "[Distinción, respaldo de bases o nombramiento.]", icono: "star" },
    { anio: "2026", titulo: "Candidatura", texto: "Asume el reto de llevar la voz del pueblo a la gestión pública.", icono: "vote" }
  ],

  luchas: [
    { titulo: "Agua y saneamiento", icono: "drop", resumen: "[Resumen corto de la lucha.]", detalle: "[Detalle: qué se hizo, con quiénes, qué se logró.]" },
    { titulo: "Educación", icono: "book", resumen: "[Resumen corto de la lucha.]", detalle: "[Detalle de la lucha.]" },
    { titulo: "Salud", icono: "heart", resumen: "[Resumen corto de la lucha.]", detalle: "[Detalle de la lucha.]" },
    { titulo: "Trabajo digno", icono: "tool", resumen: "[Resumen corto de la lucha.]", detalle: "[Detalle de la lucha.]" },
    { titulo: "Agro y territorio", icono: "leaf", resumen: "[Resumen corto de la lucha.]", detalle: "[Detalle de la lucha.]" },
    { titulo: "Seguridad ciudadana", icono: "shield", resumen: "[Resumen corto de la lucha.]", detalle: "[Detalle de la lucha.]" }
  ],

  propuestas: [
    { eje: "Social", titulo: "[Propuesta 1]", texto: "[Explicación breve.]" },
    { eje: "Social", titulo: "[Propuesta 2]", texto: "[Explicación breve.]" },
    { eje: "Economía", titulo: "[Propuesta 3]", texto: "[Explicación breve.]" },
    { eje: "Economía", titulo: "[Propuesta 4]", texto: "[Explicación breve.]" },
    { eje: "Infraestructura", titulo: "[Propuesta 5]", texto: "[Explicación breve.]" },
    { eje: "Transparencia", titulo: "[Propuesta 6]", texto: "[Explicación breve.]" }
  ],

  // Publicaciones compartidas del candidato
  redes: [
    { tipo: "tiktok",   titulo: "Video en TikTok",          url: "https://vt.tiktok.com/ZSV6TVbRD/" },
    { tipo: "facebook", titulo: "Publicación en Facebook",  url: "https://www.facebook.com/share/p/1BmA6NqsLg/" },
    { tipo: "facebook", titulo: "Publicación en Facebook",  url: "https://www.facebook.com/share/p/19718cZnKR/" },
    { tipo: "facebook", titulo: "Publicación en Facebook",  url: "https://www.facebook.com/share/p/1HstfiJaoU/" },
    { tipo: "video",    titulo: "Video en Facebook",        url: "https://www.facebook.com/share/v/1Eon24UUmf/" },
    { tipo: "video",    titulo: "Video en Facebook",        url: "https://www.facebook.com/share/v/1CNhFEqb4G/" }
  ],

  testimonios: [
    { texto: "[Testimonio de un vecino o dirigente.]", autor: "[Nombre]", rol: "[Comunidad / organización]" },
    { texto: "[Testimonio de una madre de familia.]", autor: "[Nombre]", rol: "[Comunidad / organización]" },
    { texto: "[Testimonio de un joven.]", autor: "[Nombre]", rol: "[Comunidad / organización]" }
  ],

  contacto: {
    whatsapp: "",          // solo dígitos con código de país, ej: "51999999999" (vacío = oculto)
    correo: "",            // ej: "campana@ejemplo.pe"
    facebook: "",          // URL de la página oficial
    tiktok: ""             // URL del perfil
  }
};
