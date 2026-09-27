(() => {
  "use strict";

  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const c = S.candidato;
  const fullName = `${c.nombre} ${c.apellido}`.trim();

  /* ---------- Símbolo oficial del partido: tres hojas verdes con contorno negro,
     en círculo blanco sobre fondo rojo (redibujado en SVG a partir de assets/img/simbolo.png) ---------- */
  const emblem = () => {
    const side = '<path d="M372 578C280 560 190 510 155 430C143 400 140 370 142 345C190 335 245 345 290 380Z" fill="#00b050" stroke="#000" stroke-width="18" stroke-linejoin="round"/>' +
      '<path d="M214 414L220 408L346 548L338 556Z" fill="#000"/>';
    const center = '<path d="M372 133C300 180 255 260 262 340C270 440 340 520 372 578C404 520 478 440 490 340C497 260 445 180 372 133Z" fill="#00b050" stroke="#000" stroke-width="18" stroke-linejoin="round"/>' +
      '<path d="M369 286L375 286L381 572L363 572Z" fill="#000"/>';
    return `<svg class="emblem" viewBox="0 0 731 712" role="img" aria-label="Símbolo del partido: tres hojas verdes">
      <rect width="731" height="712" fill="#be1623"/>
      <circle class="ring" cx="370" cy="358" r="312" fill="#fff"/>
      <g class="leaf leaf--l">${side}</g>
      <g transform="translate(744 0) scale(-1 1)"><g class="leaf leaf--r">${side}</g></g>
      <g class="leaf leaf--c">${center}</g>
    </svg>`;
  };

  /* ---------- Iconos (SVG en línea) ---------- */
  const ICONS = {
    seed: '<path d="M12 22V12"/><path d="M12 12C12 7 8 4 3 4c0 5 4 8 9 8z"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7z"/>',
    flag: '<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>',
    fist: '<path d="M7 11V6a2 2 0 0 1 4 0v5"/><path d="M11 10V5a2 2 0 0 1 4 0v5"/><path d="M15 10V7a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8H9a4 4 0 0 1-4-4v-3a2 2 0 0 1 2-2h5"/>',
    build: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M10 21v-6h4v6"/>',
    star: '<path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z"/>',
    vote: '<path d="M4 12h16v9H4z"/><path d="M9 12l3-9 5 2-3 7"/><path d="M8 16h8"/>',
    drop: '<path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/>',
    book: '<path d="M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h7z"/>',
    heart: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.7-2.3a4 4 0 0 0-5-5L2 10l8-8z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13C4 6 11 3 20 3c0 9-3 17-9 17z"/><path d="M4 21c4-6 8-9 12-11"/>',
    coin: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    shield: '<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>'
  };
  const icon = (k) => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ICONS.star}</svg>`;

  /* ---------- Tema de colores ---------- */
  const root = document.documentElement.style;
  if (S.colores) {
    root.setProperty("--primary", S.colores.primario);
    root.setProperty("--secondary", S.colores.secundario);
    root.setProperty("--dark", S.colores.oscuro);
  }

  /* ---------- Textos simples ---------- */
  document.title = `${fullName} · ${c.grito || "Una vida de lucha social"}`;
  $$("[data-emblem]").forEach((el) => (el.innerHTML = emblem()));
  $$("[data-grito]").forEach((el) => (el.innerHTML = `<span>${esc(c.grito)}</span>`));
  if (c.banderola) $("#banderolaImg").src = c.banderola;
  else $("#banderola").remove();
  $$("[data-fullname]").forEach((el) => (el.textContent = fullName));
  $$("[data-fullname-short]").forEach((el) => (el.textContent = c.nombre));
  $$("[data-cargo]").forEach((el) => (el.textContent = c.cargo));
  $$("[data-lema]").forEach((el) => (el.textContent = c.lema));
  $$("[data-partido]").forEach((el) => (el.textContent = c.partido));
  // Cómo votar: el partido no tiene número, se marca el símbolo (la X se dibuja sola)
  const voteMark = () => `<span class="vote-mark">${emblem()}<svg class="vote-x" viewBox="0 0 100 100" aria-hidden="true"><path d="M18 18L82 82"/><path d="M82 18L18 82"/></svg></span>`;
  $$("[data-vote]").forEach((el) => (el.innerHTML = voteMark()));

  // Fotos: retrato en la portada y foto con la comunidad en "Su historia" (sin foto se muestra el símbolo)
  const photo = (src, alt) => src
    ? `<div class="photo"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"></div>`
    : `<div class="portrait-emblem grow">${emblem()}</div>`;
  $("#heroPortrait").innerHTML = photo(c.foto, `${fullName}, candidato a alcalde de ${c.lugar}`) +
    `<div class="vote-badge">${voteMark()}<span>Marca así<b>${esc(c.partido)}</b></span></div>`;
  $("#bioPhoto").innerHTML = photo(c.fotoHistoria || c.foto, `${fullName} junto a su comunidad`);

  /* ---------- Título hero letra por letra ---------- */
  const heroTitle = $("#heroTitle");
  heroTitle.setAttribute("aria-label", fullName);
  let delay = 0;
  heroTitle.innerHTML = [c.nombre, c.apellido]
    .filter(Boolean)
    .map((w) => `<span class="word" aria-hidden="true">${[...w].map((ch) => `<span class="char" style="animation-delay:${(delay += 0.05).toFixed(2)}s">${ch === " " ? "&nbsp;" : esc(ch)}</span>`).join("")}</span>`)
    .join("");

  /* ---------- Marquesina ---------- */
  const mq = [`${c.lugar} ${c.grito}`, fullName, ...c.frasesRotativas].map((t) => `<span>${esc(t)}</span>`).join("");
  $("#marquee").innerHTML = mq + mq;

  /* ---------- Cifras ---------- */
  $("#stats").innerHTML = S.cifras
    .map((s, i) => `<div class="stat reveal" style="--d:${i * 0.1}s"><b data-count="${s.valor}" data-suffix="${esc(s.sufijo)}">0</b><span>${esc(s.texto)}</span></div>`)
    .join("");

  /* ---------- Historia ---------- */
  $("#bioTitle").textContent = S.historia.titulo;
  $("#bioText").innerHTML = S.historia.parrafos.map((p, i) => `<p class="reveal" style="--d:${i * 0.12}s">${esc(p)}</p>`).join("");
  $("#bioQuote").textContent = S.historia.cita;

  /* ---------- Trayectoria ---------- */
  $("#timeline").insertAdjacentHTML(
    "beforeend",
    S.trayectoria
      .map(
        (t, i) => `<div class="tl-item ${i % 2 ? "reveal-right" : "reveal-left"}">
          <div class="tl-item__dot">${icon(t.icono)}</div>
          <div class="tl-card"><div class="tl-card__year">${esc(t.anio)}</div><h3>${esc(t.titulo)}</h3><p>${esc(t.texto)}</p></div>
        </div>`
      )
      .join("")
  );

  /* ---------- Caso Cotabambas ---------- */
  const caso = S.caso;
  if (caso) {
    $("#casoTitle").textContent = caso.titulo;
    $("#casoIntro").textContent = caso.intro;
    $("#casoSteps").insertAdjacentHTML("beforeend", caso.etapas
      .map((e, i) => `<li class="caso__step reveal" style="--d:${i * 0.25}s"><span class="caso__dot"></span><b>${esc(e.fecha)}</b><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></li>`)
      .join(""));
    $("#casoClaves").innerHTML = caso.claves
      .map((k, i) => `<article class="clave reveal" style="--d:${i * 0.12}s"><span class="clave__n">0${i + 1}</span><h3>${esc(k.titulo)}</h3><p>${esc(k.texto)}</p></article>`)
      .join("");
    $("#casoFuentes").innerHTML = "Fuentes: " + caso.fuentes
      .map((f) => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.nombre)}</a>`)
      .join(" · ");
    // El sello "INOCENTE" cae cuando la línea del caso llega al final
    new IntersectionObserver(([en], obs) => {
      if (!en.isIntersecting) return;
      $("#casoRail").classList.add("run");
      setTimeout(() => $("#stamp").classList.add("slam"), reduced ? 0 : 1300);
      obs.disconnect();
    }, { threshold: 0.4 }).observe($("#casoSteps"));
  } else $("#caso").remove();

  /* ---------- Luchas ---------- */
  $("#luchasGrid").innerHTML = S.luchas
    .map(
      (l, i) => `<button type="button" class="card tilt reveal" style="--d:${(i % 3) * 0.1}s" data-lucha="${i}">
        <div class="card__icon">${icon(l.icono)}</div>
        ${l.etiqueta ? `<span class="card__tag">${esc(l.etiqueta)}</span>` : ""}
        <h3>${esc(l.titulo)}</h3><p>${esc(l.resumen)}</p><span class="card__more">Ver historia →</span>
      </button>`
    )
    .join("");

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let lastFocus = null;
  const openModal = (l) => {
    lastFocus = document.activeElement;
    $("#modalIcon").innerHTML = icon(l.icono);
    $("#modalTitle").textContent = l.titulo;
    $("#modalText").textContent = l.detalle;
    modal.hidden = false;
    $(".modal__close", modal).focus();
  };
  const closeModal = () => { modal.hidden = true; lastFocus?.focus(); };
  $("#luchasGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-lucha]");
    if (card) openModal(S.luchas[+card.dataset.lucha]);
  });
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- Plan de gobierno: ejes temáticos + buscador ---------- */
  const plan = S.planGobierno;
  const countItems = (e) => e.grupos.reduce((n, g) => n + g.items.length, 0);
  const total = plan.reduce((n, e) => n + countItems(e), 0);
  const num = (i) => String(i + 1).padStart(2, "0");
  $("#planLead").textContent = `${plan.length} ejes temáticos y ${total} propuestas para Challhuahuacho. Elige un eje o busca un tema.`;
  $("#planEjes").innerHTML = plan
    .map((e, i) => `<button class="eje" role="tab" aria-selected="${i === 0}" data-eje="${i}">
        <span class="eje__n">${num(i)}</span><span class="eje__icon">${icon(e.icono)}</span>
        <span class="eje__name">${esc(e.eje)}</span><span class="eje__count">${countItems(e)}</span>
      </button>`)
    .join("");
  const itemHtml = (t, i, hl) => `<li class="plan__item" style="animation-delay:${Math.min(i, 14) * 0.04}s"><span class="plan__check"></span><span>${hl ? hl(t) : esc(t)}</span></li>`;
  let planIndex = 0;
  const renderEje = (i) => {
    planIndex = i;
    const e = plan[i];
    let k = 0;
    $("#planPanel").innerHTML = `
      <div class="plan__head"><span class="plan__big">${num(i)}</span><div>
        <h3>${esc(e.eje)}</h3><p>${countItems(e)} propuestas${e.nota ? ` · ${esc(e.nota)}` : ""}</p></div></div>
      ${e.grupos.map((g) => `${g.nombre ? `<h4 class="plan__group">${esc(g.nombre)}</h4>` : ""}<ul class="plan__list">${g.items.map((t) => itemHtml(t, k++)).join("")}</ul>`).join("")}
      <button class="btn btn--small plan__next" data-next>${i < plan.length - 1 ? `Siguiente eje: ${esc(plan[i + 1].eje)} →` : "Volver al primer eje ↺"}</button>`;
    $$(".eje").forEach((b, j) => b.setAttribute("aria-selected", j === i));
  };
  $("#planEjes").addEventListener("click", (e) => {
    const b = e.target.closest(".eje");
    if (!b) return;
    $("#planSearch").value = "";
    renderEje(+b.dataset.eje);
    if (window.innerWidth < 900) $("#planPanel").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  });
  $("#planPanel").addEventListener("click", (e) => {
    if (!e.target.closest("[data-next]")) return;
    renderEje((planIndex + 1) % plan.length);
    $("#planPanel").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  });
  // Buscador: ignora tildes y mayúsculas
  const norm = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  $("#planSearch").addEventListener("input", (ev) => {
    const q = norm(ev.target.value.trim());
    if (q.length < 2) { renderEje(planIndex); return; }
    const hl = (t) => {
      // normaliza letra por letra para que el resaltado coincida aunque haya tildes
      const chars = [...t], map = [];
      let n = "";
      chars.forEach((ch, idx) => { for (const c of norm(ch)) { n += c; map.push(idx); } });
      let out = "", last = 0, at = n.indexOf(q);
      while (at >= 0) {
        const from = map[at], to = map[at + q.length - 1] + 1;
        out += esc(chars.slice(last, from).join("")) + `<mark>${esc(chars.slice(from, to).join(""))}</mark>`;
        last = to;
        at = n.indexOf(q, at + q.length);
      }
      return out + esc(chars.slice(last).join(""));
    };
    let found = 0, k = 0;
    const blocks = plan.map((e, i) => {
      const hits = e.grupos.flatMap((g) => g.items).filter((t) => norm(t).includes(q));
      found += hits.length;
      return hits.length ? `<h4 class="plan__group"><span class="plan__tagn">${num(i)}</span>${esc(e.eje)}</h4><ul class="plan__list">${hits.map((t) => itemHtml(t, k++, hl)).join("")}</ul>` : "";
    }).join("");
    $$(".eje").forEach((b) => b.setAttribute("aria-selected", "false"));
    $("#planPanel").innerHTML = `<div class="plan__head"><span class="plan__big">${found}</span><div><h3>Resultados para “${esc(ev.target.value.trim())}”</h3><p>${found ? "propuestas encontradas" : "No encontramos propuestas con esa palabra. Prueba con otra."}</p></div></div>${blocks}`;
  });
  renderEje(0);

  /* ---------- Redes: las publicaciones y videos se abren en un reproductor dentro de la página ---------- */
  const netName = { tiktok: "TikTok", facebook: "Facebook", video: "Facebook Video" };
  const playable = { tiktok: true, video: true };
  $("#socialGrid").innerHTML = S.redes
    .map(
      (r, i) => `<a class="social social--${esc(r.tipo)} reveal" style="--d:${(i % 3) * 0.1}s" href="${esc(r.url)}" target="_blank" rel="noopener" data-media="${i}">
        <div class="social__bg"></div>
        <div class="social__play">${playable[r.tipo] ? '<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg>' : '<svg viewBox="0 0 24 24" class="social__eye"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'}</div>
        <span class="social__net">${netName[r.tipo] || "Red social"}</span>
        <span class="social__title">${esc(r.titulo)}</span>
        <span class="social__hint">${playable[r.tipo] ? "Ver aquí" : "Leer aquí"}</span>
      </a>`
    )
    .join("");

  // Arma la dirección del reproductor oficial (embed) de cada red.
  // Los enlaces cortos de "compartir" se convierten primero en su dirección completa
  // con la función /api/resolve (Vercel), porque los reproductores oficiales no los aceptan.
  const resolved = {};
  const resolveUrl = async (url) => {
    if (resolved[url]) return resolved[url];
    try {
      const ctrl = new AbortController();
      setTimeout(() => ctrl.abort(), 8000);
      const res = await fetch(`/api/resolve?url=${encodeURIComponent(url)}`, { signal: ctrl.signal });
      const data = await res.json();
      if (data.url) return (resolved[url] = data.url);
    } catch {}
    return url;
  };
  const embedSrc = async (r) => {
    if (r.embed) return r.embed;
    const isShort = /\/share\/|fb\.watch|vt\.tiktok|vm\.tiktok/.test(r.url);
    const url = isShort ? await resolveUrl(r.url) : r.url;
    if (r.tipo === "tiktok") {
      const id = r.id || (url.match(/\/(?:video|photo)\/(\d+)/) || [])[1];
      return id ? `https://www.tiktok.com/embed/v2/${id}?lang=es` : null;
    }
    const video = r.tipo === "video" || /\/(videos|reel|watch)\b|fb\.watch/.test(url);
    return `https://www.facebook.com/plugins/${video ? "video" : "post"}.php?href=${encodeURIComponent(url)}&show_text=true&width=500&locale=es_LA`;
  };

  const media = $("#media"), mFrame = $("#mediaFrame");
  let mIndex = 0, mToken = 0, mLast = null;
  const showMedia = async (i) => {
    mIndex = (i + S.redes.length) % S.redes.length;
    const r = S.redes[mIndex], token = ++mToken;
    const red = r.tipo === "tiktok" ? "TikTok" : "Facebook";
    $("#mediaNet").textContent = netName[r.tipo] || "Red social";
    $("#mediaTitle").textContent = r.titulo;
    $("#mediaCount").textContent = `${mIndex + 1} / ${S.redes.length}`;
    $("#mediaExt").href = r.url;
    $("#mediaExt").textContent = `¿No se ve? Ábrelo en ${red} ↗`;
    mFrame.className = `media__frame media__frame--${r.tipo}`;
    mFrame.innerHTML = `<div class="media__loader"><span data-emblem>${emblem()}</span>Cargando…</div>`;
    const src = await embedSrc(r);
    if (token !== mToken) return; // el usuario ya pasó a otra publicación
    if (!src) {
      mFrame.innerHTML = `<div class="media__loader">No se pudo cargar aquí.<a class="btn btn--small" href="${esc(r.url)}" target="_blank" rel="noopener">Ver en ${red}</a></div>`;
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = r.titulo;
    iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen";
    iframe.allowFullscreen = true;
    iframe.setAttribute("scrolling", "yes");
    iframe.addEventListener("load", () => mFrame.classList.add("ready"));
    mFrame.appendChild(iframe);
  };
  const openMedia = (i) => {
    mLast = document.activeElement;
    media.hidden = false;
    document.body.style.overflow = "hidden";
    showMedia(i);
    $(".media__close", media).focus();
  };
  const closeMedia = () => {
    mToken++;
    mFrame.innerHTML = ""; // detiene la reproducción
    media.hidden = true;
    document.body.style.overflow = "";
    mLast?.focus();
  };
  $("#socialGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-media]");
    if (!card) return;
    e.preventDefault();
    openMedia(+card.dataset.media);
  });
  media.addEventListener("click", (e) => { if (e.target.closest("[data-mclose]")) closeMedia(); });
  $("#mediaPrev").addEventListener("click", () => showMedia(mIndex - 1));
  $("#mediaNext").addEventListener("click", () => showMedia(mIndex + 1));
  document.addEventListener("keydown", (e) => {
    if (media.hidden) return;
    if (e.key === "Escape") closeMedia();
    else if (e.key === "ArrowLeft") showMedia(mIndex - 1);
    else if (e.key === "ArrowRight") showMedia(mIndex + 1);
  });

  /* ---------- WhatsApp: botón flotante y botón del menú ---------- */
  const ct = S.contacto;
  // Enlace de WhatsApp (wa.me) con mensaje ya escrito
  const waLink = (text) => `https://wa.me/${ct.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
  if (ct.whatsapp) {
    $$("[data-wa]").forEach((a) => (a.href = waLink(ct.mensajeWhatsapp)));
    document.body.insertAdjacentHTML("beforeend",
      `<a class="wa-float" href="${esc(waLink(ct.mensajeWhatsapp))}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#fff" d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.7C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.4S21.8 26.2 16 26.2zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.7-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/></svg>
        <span>¡Escríbenos!</span></a>`);
  } else $$("[data-wa]").forEach((a) => a.remove());

  /* ---------- Cuenta regresiva ---------- */
  const cd = $("#countdown");
  const target = new Date(S.fechaEleccion).getTime();
  const tick = () => {
    const diff = target - Date.now();
    if (!(diff > 0)) { cd.innerHTML = '<span class="countdown__label">¡Hoy decidimos el futuro!</span>'; return false; }
    const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
    cd.innerHTML = '<span class="countdown__label">Faltan para la elección</span>' +
      [[d, "días"], [h, "horas"], [m, "min"], [s, "seg"]].map(([v, l]) => `<div class="countdown__item"><b>${String(v).padStart(2, "0")}</b><small>${l}</small></div>`).join("");
    return true;
  };
  if (tick()) { const t = setInterval(() => { if (!tick()) clearInterval(t); }, 1000); }

  /* ---------- Texto rotativo tipo máquina de escribir ---------- */
  const typedEl = $("#typed");
  if (reduced) typedEl.textContent = c.frasesRotativas[0];
  else {
    let wi = 0, ci = 0, del = false;
    const type = () => {
      const w = c.frasesRotativas[wi];
      typedEl.textContent = w.slice(0, ci);
      if (!del && ci === w.length) { del = true; return setTimeout(type, 1800); }
      if (del && ci === 0) { del = false; wi = (wi + 1) % c.frasesRotativas.length; }
      ci += del ? -1 : 1;
      setTimeout(type, del ? 40 : 85);
    };
    type();
  }

  /* ---------- Revelado al hacer scroll + contadores ---------- */
  const countUp = (el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || "", dur = 1800, t0 = performance.now();
    const fmt = (n) => n.toLocaleString("es-PE");
    if (reduced) { el.textContent = fmt(end) + suf; return; }
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 4)))) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      $$("[data-count]", en.target).forEach(countUp);
      io.unobserve(en.target);
    }),
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal, .reveal-left, .reveal-right, .tl-item").forEach((el) => io.observe(el));

  /* ---------- Scroll: barra de progreso, nav, línea de tiempo, enlace activo ---------- */
  const nav = $("#nav"), bar = $("#progress"), tl = $("#timeline"), tlFill = $("#timelineFill");
  const sections = $$("main section[id]");
  const navLinks = $$(".nav__links a[href^='#']");
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY, vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("scrolled", y > 40);
    const r = tl.getBoundingClientRect();
    const p = Math.min(Math.max((vh * 0.6 - r.top) / r.height, 0), 1);
    tlFill.style.height = `${p * 100}%`;
    let current = "";
    sections.forEach((s) => { if (s.getBoundingClientRect().top < vh * 0.4) current = s.id; });
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  const toggle = $("#navToggle"), menu = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", open);
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); menu.classList.remove("open"); document.body.style.overflow = ""; }
  });

  /* ---------- Efectos de puntero: tilt 3D, botones magnéticos, brillo ---------- */
  if (finePointer && !reduced) {
    $$(".tilt").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 14}deg) rotateX(${(0.5 - y) * 14}deg)`;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
    const glow = $("#cursorGlow");
    let gx = 0, gy = 0, tx = 0, ty = 0;
    window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; glow.classList.add("on"); }, { passive: true });
    const follow = () => { gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12; glow.style.transform = `translate(${gx}px, ${gy}px)`; requestAnimationFrame(follow); };
    follow();
  }

  /* ---------- Partículas del hero ---------- */
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 }, heroVisible = true;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(Math.floor((W * H) / 14000), 110);
    pts = Array.from({ length: n }, (_, i) => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, r: Math.random() * 2.2 + 1, red: i % 3 === 0 }));
  };
  const css = getComputedStyle(document.documentElement);
  const accent = css.getPropertyValue("--secondary").trim() || "#00b050";
  const red = css.getPropertyValue("--primary").trim() || "#be1623";
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dxm = p.x - mouse.x, dym = p.y - mouse.y, dm = Math.hypot(dxm, dym);
      if (dm < 120) { p.x += dxm / dm * 1.5; p.y += dym / dm * 1.5; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = p.red ? red : accent; ctx.fill();
    }
    ctx.strokeStyle = accent;
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 120) { ctx.globalAlpha = (1 - d / 120) * 0.3; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    if (heroVisible && !reduced) requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize);
  canvas.parentElement.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  canvas.parentElement.addEventListener("pointerleave", () => (mouse.x = mouse.y = -999));
  new IntersectionObserver(([en]) => { const was = heroVisible; heroVisible = en.isIntersecting; if (heroVisible && !was) draw(); }).observe(canvas);
  draw();

  /* ---------- Hojas que caen en la portada ---------- */
  if (!reduced) {
    $("#leavesFall").innerHTML = Array.from({ length: 14 }, () => {
      const r = Math.random;
      return `<i style="left:${(r() * 100).toFixed(1)}%;--s:${(14 + r() * 18).toFixed(0)}px;--t:${(10 + r() * 10).toFixed(1)}s;--delay:${(-r() * 20).toFixed(1)}s;--dx:${((r() - 0.5) * 160).toFixed(0)}px"></i>`;
    }).join("");
  }

  /* ---------- Salida del preloader ---------- */
  $(".preloader__logo").classList.add("grow");
  const start = () => {
    $("#preloader").classList.add("done");
    document.body.classList.remove("is-loading");
    heroTitle.classList.add("play");
    $$(".hero .reveal").forEach((el, i) => { el.style.setProperty("--d", `${0.4 + i * 0.12}s`); el.classList.add("in"); });
  };
  const minWait = new Promise((r) => setTimeout(r, reduced ? 0 : 1300));
  const loaded = new Promise((r) => (document.readyState === "complete" ? r() : window.addEventListener("load", r)));
  Promise.race([Promise.all([minWait, loaded]), new Promise((r) => setTimeout(r, 3500))]).then(start);
})();
