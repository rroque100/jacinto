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
  $$("[data-numero]").forEach((el) => (el.textContent = c.numero));

  const portrait = (withBadge) => {
    const inner = c.foto
      ? `<div class="photo"><img src="${esc(c.foto)}" alt="${esc(fullName)}" loading="lazy"></div>`
      : `<div class="portrait-emblem grow">${emblem()}</div>`;
    return inner + (withBadge ? `<div class="badge-num">Marca el<b>${esc(c.numero)}</b></div>` : "");
  };
  $("#heroPortrait").innerHTML = portrait(true);
  $("#bioPhoto").innerHTML = portrait(false);

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

  /* ---------- Luchas ---------- */
  $("#luchasGrid").innerHTML = S.luchas
    .map(
      (l, i) => `<button type="button" class="card tilt reveal" style="--d:${(i % 3) * 0.1}s" data-lucha="${i}">
        <div class="card__icon">${icon(l.icono)}</div>
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

  /* ---------- Propuestas con pestañas ---------- */
  const ejes = ["Todas", ...new Set(S.propuestas.map((p) => p.eje))];
  const renderProposals = (eje) => {
    $("#proposals").innerHTML = S.propuestas
      .filter((p) => eje === "Todas" || p.eje === eje)
      .map((p, i) => `<article class="proposal" style="animation-delay:${i * 0.07}s"><span class="proposal__tag">${esc(p.eje)}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></article>`)
      .join("");
  };
  $("#tabs").innerHTML = ejes.map((e, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-eje="${esc(e)}">${esc(e)}</button>`).join("");
  $("#tabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    $$(".tab").forEach((t) => t.setAttribute("aria-selected", t === tab));
    renderProposals(tab.dataset.eje);
  });
  renderProposals("Todas");

  /* ---------- Redes ---------- */
  const netName = { tiktok: "TikTok", facebook: "Facebook", video: "Facebook Video" };
  const playable = { tiktok: true, video: true };
  $("#socialGrid").innerHTML = S.redes
    .map(
      (r, i) => `<a class="social social--${esc(r.tipo)} reveal" style="--d:${(i % 3) * 0.1}s" href="${esc(r.url)}" target="_blank" rel="noopener">
        <div class="social__bg"></div>
        ${playable[r.tipo] ? '<div class="social__play"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></div>' : ""}
        <span class="social__net">${netName[r.tipo] || "Red social"}</span>
        <span class="social__title">${esc(r.titulo)}</span>
      </a>`
    )
    .join("");

  /* ---------- Testimonios (slider) ---------- */
  const track = $("#sliderTrack");
  const dots = $("#sliderDots");
  track.innerHTML = S.testimonios
    .map((t) => `<div class="slide"><div class="slide__inner"><p>${esc(t.texto)}</p><div class="slide__author">${esc(t.autor)}</div><div class="slide__role">${esc(t.rol)}</div></div></div>`)
    .join("");
  dots.innerHTML = S.testimonios.map((_, i) => `<button aria-label="Testimonio ${i + 1}"></button>`).join("");
  let slide = 0;
  let slideTimer;
  const goSlide = (n) => {
    slide = (n + S.testimonios.length) % S.testimonios.length;
    track.style.transform = `translateX(-${slide * 100}%)`;
    $$("button", dots).forEach((d, i) => d.setAttribute("aria-current", i === slide));
  };
  const autoSlide = () => { clearInterval(slideTimer); if (!reduced) slideTimer = setInterval(() => goSlide(slide + 1), 6000); };
  dots.addEventListener("click", (e) => {
    const i = $$("button", dots).indexOf(e.target);
    if (i >= 0) { goSlide(i); autoSlide(); }
  });
  let touchX = null;
  track.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
  track.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { goSlide(slide + (dx < 0 ? 1 : -1)); autoSlide(); }
    touchX = null;
  });
  goSlide(0);
  autoSlide();

  /* ---------- Contacto y formulario ---------- */
  const ct = S.contacto;
  const links = [];
  // Enlace de WhatsApp (wa.me) con mensaje ya escrito
  const waLink = (text) => `https://wa.me/${ct.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
  if (ct.whatsapp) {
    links.push(`<a class="btn btn--ghost btn--small" target="_blank" rel="noopener" href="${esc(waLink(ct.mensajeWhatsapp))}">WhatsApp</a>`);
    document.body.insertAdjacentHTML("beforeend",
      `<a class="wa-float" href="${esc(waLink(ct.mensajeWhatsapp))}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#fff" d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.7C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.4S21.8 26.2 16 26.2zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.7-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/></svg>
        <span>¡Escríbenos!</span></a>`);
  }
  if (ct.correo) links.push(`<a class="btn btn--ghost btn--small" href="mailto:${esc(ct.correo)}">Correo</a>`);
  if (ct.facebook) links.push(`<a class="btn btn--ghost btn--small" target="_blank" rel="noopener" href="${esc(ct.facebook)}">Facebook</a>`);
  if (ct.tiktok) links.push(`<a class="btn btn--ghost btn--small" target="_blank" rel="noopener" href="${esc(ct.tiktok)}">TikTok</a>`);
  $("#contactLinks").innerHTML = links.join("");

  $("#joinForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const msg = `Hola, soy ${fd.get("nombre")} de ${fd.get("zona")} y quiero sumarme a la campaña de ${fullName}.`;
    if (ct.whatsapp) {
      window.open(waLink(msg), "_blank", "noopener");
    }
    $("#formMsg").textContent = `¡Gracias, ${fd.get("nombre")}! Juntos seguimos luchando.`;
    confetti();
    e.target.reset();
  });

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

  /* ---------- Confeti ---------- */
  function confetti() {
    if (reduced) return;
    const cv = document.createElement("canvas");
    cv.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:95";
    cv.width = innerWidth; cv.height = innerHeight;
    document.body.appendChild(cv);
    const cx = cv.getContext("2d");
    const cols = [red, accent, "#111111"];
    const bits = Array.from({ length: 160 }, () => ({ x: innerWidth / 2, y: innerHeight * 0.6, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 18 - 6, s: Math.random() * 8 + 4, r: Math.random() * 6, c: cols[Math.floor(Math.random() * 3)] }));
    let f = 0;
    const loop = () => {
      cx.clearRect(0, 0, cv.width, cv.height);
      bits.forEach((b) => { b.vy += 0.5; b.x += b.vx; b.y += b.vy; b.r += 0.2; cx.save(); cx.translate(b.x, b.y); cx.rotate(b.r); cx.fillStyle = b.c; cx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); cx.restore(); });
      if (++f < 140) requestAnimationFrame(loop); else cv.remove();
    };
    loop();
  }

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
