"use client";

import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/checkout-button";
import { pricing } from "@/lib/content";

/**
 * Barra fixa no rodapé, visível apenas em mobile, que aparece depois que o
 * visitante rola além do hero e desaparece quando a seção de preço já está
 * visível (evita CTA duplicado na tela).
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pricingEl = document.getElementById("pricing");
    const heroEl = document.getElementById("top");
    if (!pricingEl || !heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const pricingVisible = entries.find((e) => e.target === pricingEl)?.isIntersecting;
        const heroVisible = entries.find((e) => e.target === heroEl)?.isIntersecting;
        setVisible(!pricingVisible && !heroVisible);
      },
      { threshold: 0.15 }
    );

    observer.observe(pricingEl);
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0 leading-none">
          <p className="text-[10px] text-muted-foreground line-through">
            {pricing.originalPrice}
          </p>
          <p className="font-heading text-base font-black text-foreground">
            {pricing.currentPrice},{pricing.currentPriceCents}
          </p>
        </div>
        <CheckoutButton className="h-11 w-auto min-w-0 flex-1 animate-none px-4 text-[13px] tracking-normal">
          {pricing.ctaLabelShort}
        </CheckoutButton>
      </div>
    </div>
  );
}
