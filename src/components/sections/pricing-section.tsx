import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { bonuses, painPoints, pricing } from "@/lib/content";

export function PricingSection() {
  return (
    <Section id="pricing" className="scroll-mt-28 text-center">
      <p className="text-sm font-semibold text-primary sm:text-base">{painPoints.title}</p>
      <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">A oferta</h2>
      <div className="relative mx-auto mt-8 w-full max-w-md rounded-[2rem] border border-primary/40 bg-card p-6 text-left shadow-lg sm:p-8">
        <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-xs font-bold text-foreground">
          {pricing.discountBadge}
        </span>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground line-through">De {pricing.originalPrice}</p>
            <p className="font-heading text-5xl font-black text-foreground">
              {pricing.currentPrice}
              <span className="align-top text-2xl">,{pricing.currentPriceCents}</span>
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {pricing.offerLabel}
            </p>
          </div>
          <Image
            src="/images/hero/capa-livro-3.webp"
            alt="Capa do Planner Mente Leve"
            width={744}
            height={1135}
            quality={92}
            sizes="96px"
            className="h-auto w-20"
          />
        </div>
        <ul className="mt-6 space-y-2 border-t border-border pt-5">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            {pricing.pageCountNote}
          </li>
          {bonuses.map((bonus) => (
            <li key={bonus.headline} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {bonus.headline}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Pagamento único · Acesso imediato · Garantia de 30 dias
        </p>
        <CheckoutButton className="mt-5 animate-none">{pricing.ctaLabel}</CheckoutButton>
      </div>
    </Section>
  );
}
