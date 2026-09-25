/**
 * Constrói a URL final de checkout preservando os parâmetros de rastreio
 * (UTMs, fbclid, gclid, etc.) que chegaram na landing page.
 *
 * Essa é a mesma técnica usada por funis de anúncio em escala: o visitante
 * chega pelo anúncio com utm_campaign/utm_content/fbclid na URL, e esses
 * parâmetros precisam "atravessar" a página até o link de pagamento para
 * que a plataforma de anúncios consiga atribuir a venda ao criativo certo.
 */

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
  "wbraid",
  "gbraid",
  "msclkid",
  "src",
  "sck",
];

export function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  let target: URL;
  try {
    target = new URL(baseUrl, window.location.origin);
  } catch {
    return baseUrl;
  }

  const currentParams = new URLSearchParams(window.location.search);

  for (const key of Array.from(currentParams.keys())) {
    const isTracked = TRACKED_PARAMS.includes(key) || key.startsWith("utm_");
    if (isTracked && !target.searchParams.has(key)) {
      target.searchParams.set(key, currentParams.get(key) ?? "");
    }
  }

  const isRelative = baseUrl.startsWith("/");
  return isRelative ? `${target.pathname}${target.search}` : target.toString();
}
