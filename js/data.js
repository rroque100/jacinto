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
    partido: "Venceremos",                 // el partido no tiene número: se vota marcando el símbolo
    foto: "assets/img/jacinto.webp",       // PORTADA: foto del candidato (vacío = símbolo)
    fotoSinFondo: true,                    // true si la foto de portada está recortada (fondo transparente)
    fotoHistoria: "",                      // SU HISTORIA: foto con la comunidad, ej. "assets/img/jacinto-comunidad.jpg" (vacío = usa "foto")
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

  // Plan de gobierno: 8 ejes temáticos. Cada eje puede tener subgrupos con sus propuestas.
  planGobierno: [
    { eje: "Desarrollo económico y productivo", icono: "leaf", grupos: [
      { nombre: "Agricultura y ganadería", items: [
        "Garantizar el agua.",
        "Apoyo a productores: asignación presupuestal a PROCOMPITE con zonificación económica (financiamiento directo a todos los planes de negocio aprobados, entre el 5 % y el 15 % del presupuesto local), Ley N.º 29337."
      ]},
      { nombre: "Mercado y comercialización", items: [
        "Acogiéndonos al convenio (Anexo “K” N.º 08): impulsar Expo Arte de carácter nacional, comunal y sectorial.",
        "Adquisición de camiones para el transporte de ganado y productos."
      ]},
      { nombre: "Turismo", items: [
        "Promover un circuito turístico vivencial aprovechando el calendario festivo cultural, ritual, agrícola y ganadero, y los atractivos turísticos.",
        "Consolidar las manifestaciones culturales como patrimonio cultural ante el Ministerio de Cultura.",
        "Revaloración de tradiciones y costumbres mediante proyectos."
      ]},
      { nombre: "Oportunidad laboral y empleo para la población vulnerable y la juventud", items: [
        "Dar oportunidades a las pequeñas y medianas empresas ejecutando obras por administración directa.",
        "No al acaparamiento ni al direccionamiento de los puestos laborales.",
        "Generar oportunidad laboral para adultos mayores, mujeres y madres solteras (invernadero municipal).",
        "Implementar un proyecto de feria dominical.",
        "Incremento salarial por el exceso del costo de vida.",
        "Prácticas preprofesionales con remuneración.",
        "Generar fuentes de empleo eventuales.",
        "Exclusividad de los puestos laborales para los lugareños, con meritocracia."
      ]}
    ]},
    { eje: "Salud y educación", icono: "book", grupos: [
      { nombre: "Educación", items: [
        "Creación de una beca integral desde la Municipalidad para los mejores talentos, con acceso meritocrático.",
        "Cerrar brechas de infraestructura educativa.",
        "Proyectos de innovación tecnológica (TIC).",
        "Creación del CRECH (Centro de Recursos Educativos Challhuahuacho).",
        "Creación de colegios politécnicos.",
        "Impulsar la Educación Básica Alternativa (EBA) y la Educación Básica Especial (EBE).",
        "Creación de una academia preuniversitaria municipal por cuencas.",
        "Creación de la universidad, acogiéndonos al decreto supremo.",
        "Internet de banda ancha.",
        "Cerrar brechas con aulas interactivas.",
        "Atención a estudiantes de zonas rurales con movilidades.",
        "Suscribir un convenio interinstitucional para mejorar los programas de alimentación con insumos, incluida la cocinera escolar.",
        "Programas de posgrado para todos los docentes.",
        "Bono docente.",
        "Exigir al GORE el cumplimiento de una unidad ejecutora."
      ]},
      { nombre: "Salud", items: [
        "Construcción de puestos de salud y recategorización.",
        "Campañas de salud integral por comunidad.",
        "Gestionar EsSalud desde el primer periodo de gobierno."
      ]}
    ]},
    { eje: "Agua, saneamiento y servicios básicos", icono: "drop", grupos: [
      { items: [
        "Cerrar brechas de saneamiento básico comunal, sectorial y del casco urbano.",
        "Exigir el cumplimiento de la PTAR (planta de tratamiento de aguas residuales).",
        "Ampliación de la electrificación rural y pararrayos.",
        "Gestionar RENIEC desde el primer periodo de gobierno.",
        "Gestionar una agencia del Banco de la Nación desde el primer periodo de gobierno."
      ]}
    ]},
    { eje: "Infraestructura y conectividad", icono: "build", grupos: [
      { items: [
        "Apertura de los caminos vecinales que aún faltan.",
        "Asfaltado bicapa de todas las arterias principales del distrito de Challhuahuacho, de extremo a extremo.",
        "Puentes en el casco urbano, las comunidades y los sectores.",
        "Mercado moderno.",
        "Estadio monumental.",
        "Ordenamiento vial del transporte público.",
        "Parques recreativos y zonas de sano esparcimiento.",
        "Defensa ribereña en el casco urbano: ¡recuperemos el río de Challhuahuacho!",
        "Adquirir terreno para una playa de estacionamiento."
      ]}
    ]},
    { eje: "Minería, ambiente y desarrollo sostenible", icono: "seed", grupos: [
      { items: [
        "Aliado estratégico (Minera Las Bambas) para el bien común.",
        "Protección de las cabeceras de cuenca, puquios y manantes, y reforestación con plantas nativas.",
        "Cosecha de agua, siembra de agua, qochas y represamientos.",
        "Segregación de residuos orgánicos e inorgánicos: Challhuahuacho Ch’uya (relleno sanitario).",
        "OEFA y SENACE: exigir el cumplimiento de sus funciones a cabalidad.",
        "Inyectar presupuesto a la CAM (Comisión de Monitoreo Ambiental).",
        "Proyectos productivos para los diferentes sectores de la economía local: hospedajes, lavanderías, textilería, comercio, transporte, arte, restaurantes, piscicultura, ganadería, agricultura, etc.",
        "Diálogo sincero y transparente, con resultados: como alcalde no desconoceremos a los dirigentes sociales, las organizaciones vivas ni los regidores.",
        "Impulsar a la brevedad la vía de evitamiento (barrio Carmen Alto).",
        "Gestionar la instalación de la oficina de la Subgerencia Regional del MTC."
      ]}
    ]},
    { eje: "Comunidades campesinas y desarrollo rural", icono: "flag", grupos: [
      { items: [
        "Fortalecimiento de las organizaciones comunales y sociales.",
        "Organización para el buen vivir: “Allin Kausay”.",
        "Solucionar nuestras colindancias limítrofes: Forprac (saneamiento físico legal).",
        "Implementar proyectos de desarrollo comunal y sectorial.",
        "Participación de las comunidades en la gestión de proyectos y la distribución presupuestal.",
        "Distribución institucional: pioneros en gestión y fiscalización."
      ]}
    ]},
    { eje: "Juventud, mujeres y población vulnerable", icono: "heart", grupos: [
      { items: [
        "Dar prioridad laboral a los jóvenes.",
        "Empleo y emprendimiento.",
        "Participación de las mujeres: fortalecer y empoderar en diferentes aspectos.",
        "Campaña de sensibilización en salud mental “Allin Kausay”.",
        "Oportunidad laboral y construcción de la casa del adulto mayor y para grupos vulnerables."
      ]}
    ]},
    { eje: "Transparencia, gestión municipal y lucha contra la corrupción", nota: "Amparado en la Ley N.º 27806", icono: "shield", grupos: [
      { items: [
        "Implementar una oficina de integridad enlazada con la Contraloría General de la República.",
        "Implementar la Plataforma Digital Interactiva Challhuahuacho.",
        "Audiencias públicas semestrales.",
        "Plan de desarrollo concertado.",
        "Denunciar cualquier acto de corrupción: cero tolerancia.",
        "Monitoreo constante de la inseguridad ciudadana.",
        "Zonificar los locales nocturnos."
      ]}
    ]}
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

  contacto: {
    whatsapp: "51997197498",   // solo dígitos con código de país (vacío = oculto)
    mensajeWhatsapp: "Hola Jacinto, quiero sumarme a la campaña en Challhuahuacho. ¡Venceremos!",
  }
};
