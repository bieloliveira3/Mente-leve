"use client";

import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/checkout-button";
import { pricing } from "@/lib/content";

/**
 * Barra fixa no rodapé, em todas as larguras. Aparece depois do hero e leva
 * direto ao checkout, com preço atual, preço riscado e desconto.
 */
export function StickyCheckoutBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("top");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <div className="flex shrink-0 items-center gap-2 leading-none">
          <div>
            <p className="text-[11px] text-muted-foreground line-through sm:text-xs">
              {pricing.originalPrice}
            </p>
            <p className="font-heading text-lg font-black text-foreground sm:text-xl">
              {pricing.currentPrice},{pricing.currentPriceCents}
            </p>
          </div>
          <span className="rounded-full bg-gold px-2 py-1 text-[11px] font-bold text-foreground sm:text-xs">
            {pricing.discountBadge}
          </span>
        </div>
        <CheckoutButton className="h-11 w-auto min-w-0 flex-1 animate-none px-4 text-[13px] tracking-normal sm:h-12 sm:text-sm">
          <span className="sm:hidden">{pricing.ctaLabelShort}</span>
          <span className="hidden sm:inline">{pricing.ctaLabel}</span>
        </CheckoutButton>
      </div>
    </div>
  );
}
