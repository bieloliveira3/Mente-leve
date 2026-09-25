import { CheckoutButton } from "@/components/checkout-button";
import { pricing } from "@/lib/content";

const revealScript = `
(function () {
  var reached = false;
  function check() {
    var bar = document.getElementById("checkout-bar");
    var cta = document.getElementById("hero-cta");
    if (!bar || !cta) return;
    if (!reached && cta.getBoundingClientRect().bottom < 8) reached = true;
    if (!reached) return;
    bar.classList.remove("pointer-events-none", "translate-y-full");
    bar.setAttribute("aria-hidden", "false");
  }
  check();
  document.addEventListener("DOMContentLoaded", check);
  window.addEventListener("scroll", check, { passive: true });
  document.addEventListener("scroll", check, true);
  setInterval(check, 300);
})();
`;

/**
 * Barra fixa no rodapé. Entra quando a foto do planner do início chega à tela.
 */
export function StickyCheckoutBar() {
  return (
    <div
      id="checkout-bar"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 translate-y-full border-t border-border bg-card px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-transform duration-300"
      aria-hidden="true"
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
          {pricing.ctaLabelShort}
        </CheckoutButton>
      </div>
      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </div>
  );
}
