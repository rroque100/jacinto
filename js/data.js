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
      "defensor ambiental",
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
    { valor: 4, sufijo: "", texto: "grandes logros junto al pueblo" },
    { valor: 11, sufijo: "", texto: "dirigentes absueltos en el caso Cotabambas" },
    { valor: 10, sufijo: "", texto: "años de juicio hasta probar su inocencia" },
    { valor: 1, sufijo: "", texto: "fallo unánime: inocente" }
  ],

  historia: {
    titulo: "Nacido del pueblo, formado en la lucha",
    parrafos: [
      "Nacido en la comunidad de Tambulla.",
      "Docente de educación regular.",
      "2015-2016: dirigente comunero, presidente de la comunidad de Tambulla."
    ],
    cita: "En Challhuahuacho, ¡venceremos!"
  },

  // Línea de tiempo: agrega, quita o reordena hitos libremente
  trayectoria: [
    { anio: "2015 – 2016", titulo: "Presidente de la Comunidad de Tambulla", texto: "Dirigente comunero elegido presidente de la comunidad campesina de Tambulla.", icono: "flag" },
    { anio: "2015 – 2016", titulo: "Comité de Lucha Interprovincial", texto: "Integrante del Comité de Lucha Interprovincial de Cotabambas, Grau y Chumbivilcas.", icono: "fist" },
    { anio: "Set. 2015", titulo: "Protestas contra los cambios al EIA de Las Bambas", texto: "Moviliza a las comunidades frente a las modificaciones inconsultas del Estudio de Impacto Ambiental, que eliminaron el mineroducto y llevaron cientos de camiones pesados por las comunidades.", icono: "fist" },
    { anio: "2020 – 2021", titulo: "Presidente de la Federación Campesina", texto: "Presidente de la Federación Campesina del distrito de Challhuahuacho.", icono: "leaf" },
    { anio: "2024", titulo: "Agente de la Comunidad de Tambulla", texto: "Agente de la comunidad campesina de Tambulla.", icono: "build" },
    { anio: "Abr. 2025", titulo: "Absuelto: se reconoce su inocencia", texto: "La Sala Penal de Apelaciones de Apurímac lo absuelve por unanimidad junto a otros 10 dirigentes de Cotabambas y Grau, tras casi 10 años de proceso.", icono: "shield" },
    { anio: "2025", titulo: "Secretario General del SUTEP", texto: "Secretario General del S.U.T.E.P. Challhuahuacho.", icono: "book" },
    { anio: "2026", titulo: "Candidato a Alcalde Distrital", texto: "Asume el reto de llevar la voz del pueblo a la Municipalidad Distrital de Challhuahuacho.", icono: "vote" }
  ],

  // Caso judicial: criminalización por las protestas de 2015 y absolución en 2025
  caso: {
    titulo: "Criminalizado por defender su tierra. Hoy, inocente.",
    intro: "Por encabezar junto a sus comunidades las protestas de 2015 contra los cambios inconsultos al proyecto minero Las Bambas, Jacinto Lima Lucas fue uno de los 11 dirigentes comunales y defensores ambientales de Cotabambas y Grau llevados a juicio. Tras casi 10 años de proceso, la justicia reconoció su inocencia.",
    etapas: [
      { fecha: "Set. 2015", titulo: "La protesta", texto: "Las comunidades se movilizan contra las modificaciones del EIA hechas sin consulta previa." },
      { fecha: "2016", titulo: "El proceso", texto: "Se abre el Expediente N.° 41-2016 contra 11 dirigentes de Cotabambas y Grau." },
      { fecha: "Jul. 2024", titulo: "La condena", texto: "En primera instancia se les imponen de 8 a 9 años de prisión efectiva y el pago de reparaciones al Estado y a la minera." },
      { fecha: "Abr. 2025", titulo: "La absolución", texto: "La Sala Penal de Apelaciones de Apurímac revoca por unanimidad la condena y los absuelve." }
    ],
    claves: [
      { titulo: "No había pruebas", texto: "El tribunal determinó que no existían pruebas directas que los vincularan con los delitos imputados, y rechazó culpar a los dirigentes por \"autoría mediata\"." },
      { titulo: "La protesta era legítima", texto: "Los magistrados reconocieron que las movilizaciones nacieron de un reclamo legítimo frente a cambios al EIA hechos sin consulta a las comunidades." },
      { titulo: "Decisión unánime", texto: "La Sala revocó por unanimidad la sentencia de primera instancia. Lucharon por su territorio y hoy su inocencia está reconocida." }
    ],
    fuentes: [
      { nombre: "Inforegión", url: "https://inforegion.pe/tras-10-anos-de-juicio-se-comprueba-la-inocencia-de-los-11-defensores-ambientales-de-cotabambas/" },
      { nombre: "Wayka", url: "https://wayka.pe/caso-cotabambas-justicia-absuelve-a-los-11-comuneros-criminalizados-por-protestar-contra-empresa-minera/" },
      { nombre: "Grufides", url: "https://grufides.org/sin-categoria/pj-reconoce-inocencia-de-once-defensores-ambientales-de-cotabambas-denunciados-por-el-estado-y-una-minera/" },
      { nombre: "CooperAcción", url: "https://cooperaccion.org.pe/apurimac-condenan-a-dirigentes-criminalizados-por-defender-sus-territorios-en-cotabambas-y-grau/" },
      { nombre: "CNDDHH", url: "https://www.facebook.com/cnddhh/posts/justiciaparadefensoresen-cotabambas-apur%C3%ADmac-11-defensores-ambientales-lucharon-/1071171465037929/" }
    ]
  },

  // Logros junto al pueblo como dirigente social (sección "Logros")
  luchas: [
    { titulo: "Hospital de Challhuahuacho", icono: "heart", etiqueta: "Logro", resumen: "Luchó junto al pueblo por el hospital de Challhuahuacho.", detalle: "Como dirigente social, acompañó a la población en la lucha por el hospital de Challhuahuacho: salud digna y cercana para las familias del distrito." },
    { titulo: "Represamiento de agua en la parte alta", icono: "drop", etiqueta: "Logro", resumen: "Represamiento de agua en la parte alta para las comunidades.", detalle: "Junto a las comunidades, impulsó el represamiento de agua en la parte alta: agua asegurada para el consumo, el riego y la vida en el campo." },
    { titulo: "Vivero forestal hasta el cierre de mina", icono: "seed", etiqueta: "Logro", resumen: "Un vivero forestal que funcionará hasta el cierre de la mina.", detalle: "Junto al pueblo logró un vivero forestal que debe funcionar hasta el cierre de la mina, para cuidar y recuperar el territorio." },
    { titulo: "Canon minero para toda la región", icono: "coin", etiqueta: "Logro", resumen: "Exigió junto con el pueblo el canon minero para toda la región.", detalle: "Exigió junto con el pueblo que el canon minero llegue a toda la región, para que la riqueza de nuestra tierra se quede en nuestras comunidades." },
    { titulo: "Territorio y medio ambiente", icono: "leaf", etiqueta: "Lucha", resumen: "Defensor ambiental de Cotabambas y Grau frente a los cambios inconsultos al proyecto Las Bambas.", detalle: "En 2015 las comunidades se movilizaron contra las modificaciones del Estudio de Impacto Ambiental de Las Bambas, hechas sin consulta previa. Por defender su territorio fue procesado y condenado en primera instancia, pero en abril de 2025 la Sala Penal de Apelaciones de Apurímac lo absolvió por unanimidad y reconoció la legitimidad de la protesta." }
  ],

  propuestas: [
    { eje: "Social", titulo: "[Propuesta 1]", texto: "[Explicación breve.]" },
    { eje: "Social", titulo: "[Propuesta 2]", texto: "[Explicación breve.]" },
    { eje: "Economía", titulo: "[Propuesta 3]", texto: "[Explicación breve.]" },
    { eje: "Economía", titulo: "[Propuesta 4]", texto: "[Explicación breve.]" },
    { eje: "Infraestructura", titulo: "[Propuesta 5]", texto: "[Explicación breve.]" },
    { eje: "Transparencia", titulo: "[Propuesta 6]", texto: "[Explicación breve.]" }
  ],

  // Publicaciones y videos del candidato. Se ven DENTRO de la página con el reproductor oficial
  // de Facebook / TikTok. Si alguno no carga con el enlace corto de "compartir", abre el enlace,
  // copia la dirección completa que aparece en el navegador y pégala en "url", por ejemplo:
  //   Facebook: https://www.facebook.com/<pagina>/posts/<id>  o  https://www.facebook.com/<pagina>/videos/<id>
  //   TikTok:   https://www.tiktok.com/@<usuario>/video/<id>
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
