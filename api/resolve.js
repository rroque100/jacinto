// Función serverless de Vercel: GET /api/resolve?url=<enlace corto>
// Sigue los enlaces cortos de "compartir" de Facebook y TikTok hasta su dirección completa
// (la que necesitan los reproductores oficiales para mostrarse dentro de la página).
// Solo acepta dominios de Facebook y TikTok para no funcionar como proxy abierto.

const ALLOWED = /(^|\.)(facebook\.com|fb\.watch|tiktok\.com)$/i;
const MAX_HOPS = 6;

const isAllowed = (u) => {
  try {
    const url = new URL(u);
    return url.protocol === "https:" && ALLOWED.test(url.hostname);
  } catch {
    return false;
  }
};

// Facebook a veces redirige al login con la dirección real en ?next=
const unwrapLogin = (u) => {
  try {
    const url = new URL(u);
    const next = url.searchParams.get("next");
    if (/\/login/.test(url.pathname) && next && isAllowed(next)) return next;
  } catch {}
  return u;
};

const canonicalFromHtml = (html) => {
  const m = html.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m ? m[1].replace(/&amp;/g, "&") : null;
};

async function resolveUrl(start, fetchImpl = fetch) {
  let current = start;
  for (let hop = 0; hop < MAX_HOPS; hop++) {
    const facebook = /facebook\.com|fb\.watch/i.test(new URL(current).hostname);
    const res = await fetchImpl(current, {
      redirect: "manual",
      headers: {
        // Facebook entrega la dirección canónica (og:url) a su propio rastreador de vistas previas
        "user-agent": facebook
          ? "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"
          : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        "accept-language": "es-PE,es;q=0.9"
      }
    });
    const location = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && location) {
      const next = unwrapLogin(new URL(location, current).toString());
      if (!isAllowed(next)) break;
      current = next;
      continue;
    }
    if (res.ok && facebook) {
      const canonical = canonicalFromHtml((await res.text()).slice(0, 400000));
      if (canonical && isAllowed(canonical)) current = canonical;
    }
    break;
  }
  return current;
}

module.exports = async (req, res) => {
  const target = req.query && req.query.url;
  if (!target || !isAllowed(target)) {
    res.status(400).json({ error: "Solo se aceptan enlaces https de Facebook o TikTok." });
    return;
  }
  try {
    const url = await resolveUrl(target);
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    res.status(200).json({ url });
  } catch (e) {
    res.status(200).json({ url: target, error: "No se pudo resolver el enlace." });
  }
};

module.exports.resolveUrl = resolveUrl;
module.exports.isAllowed = isAllowed;
