// Función serverless de Vercel: POST /api/registro
// Recibe los datos del formulario de /unete, los valida y los reenvía a una hoja de Google
// (Apps Script publicado como aplicación web). La dirección se configura en Vercel con la
// variable de entorno REGISTRO_WEBHOOK_URL; así no queda expuesta en el código de la página.

const clean = (v, max = 120) => String(v == null ? "" : v).replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);

function validate(body) {
  const d = {
    nombre: clean(body.nombre, 80),
    celular: clean(body.celular, 9),
    dni: clean(body.dni, 8),
    comunidad: clean(body.comunidad, 80),
    edad: clean(body.edad, 20),
    apoyo: clean(body.apoyo, 200),
    utm_source: clean(body.utm_source, 200),
    utm_medium: clean(body.utm_medium, 200),
    utm_campaign: clean(body.utm_campaign, 200),
    utm_content: clean(body.utm_content, 200),
    utm_term: clean(body.utm_term, 200),
    fbclid: clean(body.fbclid, 200)
  };
  if (d.nombre.length < 3) return { error: "Nombre inválido." };
  if (!/^9\d{8}$/.test(d.celular)) return { error: "Celular inválido." };
  if (d.dni && !/^\d{8}$/.test(d.dni)) return { error: "DNI inválido." };
  if (!d.comunidad) return { error: "Comunidad requerida." };
  return { data: d };
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Método no permitido." });
    return;
  }
  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  // Trampa anti-spam: campo oculto que solo llenan los robots
  if (body.empresa) {
    res.status(200).json({ ok: true });
    return;
  }
  const { data, error } = validate(body);
  if (error) {
    res.status(400).json({ error });
    return;
  }
  const webhook = process.env.REGISTRO_WEBHOOK_URL;
  if (!webhook) {
    res.status(503).json({ error: "Registro no configurado." });
    return;
  }
  try {
    const r = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fecha: new Date().toISOString(), ...data }),
      redirect: "follow"
    });
    if (!r.ok) throw new Error(`webhook ${r.status}`);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(502).json({ error: "No se pudo guardar el registro." });
  }
};

module.exports.validate = validate;
