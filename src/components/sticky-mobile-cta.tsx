import { CheckoutButton } from "@/components/checkout-button";
import { pricing } from "@/lib/content";

/**
 * Barra fixa no rodapé, visível o tempo todo. O preço riscado, o valor atual
 * e o desconto ficam no HTML inicial, sem depender de rolagem.
 */
export function StickyCheckoutBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
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
