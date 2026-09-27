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
    apellido: "Lima Lucas",
    lugar: "Challhuahuacho",
    grito: "¡Venceremos!",                 // grito de campaña (banderola)
    cargo: "Candidato a Alcalde Distrital de Challhuahuacho",
    partido: "[Nombre del partido o movimiento]",
    numero: "[N.º]",                       // número en la cédula
    foto: "",                              // ej: "assets/img/candidato.jpg" (vacío = logo de las hojas)
    banderola: "assets/img/banderola.png", // foto de la banderola de campaña
    lema: "En Challhuahuacho, la lucha de toda una vida al servicio de nuestro pueblo",
    frasesRotativas: [
      "dirigente social",
      "defensor del pueblo",
      "hombre de trabajo",
      "voz de los que no tienen voz"
    ]
  },

  // Colores del símbolo oficial del partido (rojo, verde hoja, negro)
  colores: {
    primario: "#be1623",
    secundario: "#00b050",
    oscuro: "#111111"
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
      "Nacido en la comunidad de Tambulla.",
      "Docente de educación regular.",
      "2015-2016: dirigente comunero, presidente de la comunidad de Tambulla."
    ],
    cita: "[Frase representativa del candidato, tomada de uno de sus videos o publicaciones.]"
  },

  // Línea de tiempo: agrega, quita o reordena hitos libremente
  trayectoria: [
    { anio: "2015 – 2016", titulo: "Presidente de la Comunidad de Tambulla", texto: "Dirigente comunero elegido presidente de la comunidad campesina de Tambulla.", icono: "flag" },
    { anio: "2015 – 2016", titulo: "Comité de Lucha Interprovincial", texto: "Integrante del Comité de Lucha Interprovincial de Cotabambas, Grau y Chumbivilcas.", icono: "fist" },
    { anio: "2020 – 2021", titulo: "Presidente de la Federación Campesina", texto: "Presidente de la Federación Campesina del distrito de Challhuahuacho.", icono: "leaf" },
    { anio: "2024", titulo: "Agente de la Comunidad de Tambulla", texto: "Agente de la comunidad campesina de Tambulla.", icono: "build" },
    { anio: "2025", titulo: "Secretario General del SUTEP", texto: "Secretario General del S.U.T.E.P. Challhuahuacho.", icono: "book" },
    { anio: "2026", titulo: "Candidato a Alcalde Distrital", texto: "Asume el reto de llevar la voz del pueblo a la Municipalidad Distrital de Challhuahuacho.", icono: "vote" }
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
    whatsapp: "51997197498",   // solo dígitos con código de país (vacío = oculto)
    mensajeWhatsapp: "Hola Jacinto, quiero sumarme a la campaña en Challhuahuacho. ¡Venceremos!",
    correo: "",            // ej: "campana@ejemplo.pe"
    facebook: "",          // URL de la página oficial
    tiktok: ""             // URL del perfil
  }
};
