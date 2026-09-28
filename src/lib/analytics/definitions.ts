/** Stable identifiers: independent of copy, CSS classes, and DOM order. */
export const sections = {
  top: { id: "hero", name: "Apresentação", order: 1 },
  pricing: { id: "oferta", name: "A oferta", order: 2 },
  conteudo: { id: "conteudo", name: "O que você vai receber", order: 3 },
  identificacao: { id: "identificacao", name: "Identificação com o problema", order: 4 },
  metodo: { id: "metodo", name: "Método de organização", order: 5 },
  bonus: { id: "bonus", name: "Ebooks de bônus", order: 6 },
  criadora: { id: "criadora", name: "Criadora", order: 7 },
  garantia: { id: "garantia", name: "Garantia", order: 8 },
  faq: { id: "faq", name: "Antes de decidir", order: 9 },
  comecar: { id: "cta_final", name: "Convite final", order: 10 },
} as const;

export type SectionKey = keyof typeof sections;

export const ctas = {
  header_offer: { location: "header", section: "header", text: "ver_oferta" },
  hero_offer: { location: "hero", section: "hero", text: "quero_mente_leve" },
  pricing_checkout: { location: "oferta", section: "oferta", text: "comprar_planner" },
  final_checkout: { location: "cta_final", section: "cta_final", text: "comprar_planner" },
  sticky_checkout: { location: "barra_fixa", section: "sticky_bar", text: "garantir_agora" },
  header_home: { location: "header", section: "header", text: "inicio" },
  footer_home: { location: "footer", section: "footer", text: "inicio" },
  footer_terms: { location: "footer", section: "footer", text: "termos" },
  footer_privacy: { location: "footer", section: "footer", text: "privacidade" },
  footer_refund: { location: "footer", section: "footer", text: "reembolso" },
  footer_support: { location: "footer", section: "footer", text: "suporte" },
} as const;

export type CtaId = keyof typeof ctas;
export type AnalyticsEvent =
  | "landing_view"
  | "scroll_depth"
  | "section_view"
  | "cta_impression"
  | "cta_click"
  | "checkout_click";

export function ctaAttributes(id: CtaId) {
  const cta = ctas[id];
  return {
    "data-analytics-id": id,
    "data-analytics-location": cta.location,
    "data-analytics-section-id": cta.section,
    "data-analytics-text": cta.text,
  };
}
