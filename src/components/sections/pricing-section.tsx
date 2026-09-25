import Image from "next/image";
import { Check, HeartHandshake, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { UrgencyBanner } from "@/components/urgency-banner";
import { bonuses, pricing } from "@/lib/content";

export function PricingSection() {
  return (
    <Section id="pricing" className="scroll-mt-28 text-center">
      <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Garanta o seu planner 👇
      </h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        Acesso imediato, para sempre, com um único pagamento.
      </p>

      <div className="relative mx-auto mt-10 w-full max-w-md rounded-3xl border-2 border-primary bg-card p-8 text-left shadow-xl">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
          {pricing.badge}
        </span>
        <span className="absolute -right-3 -top-3 rotate-12 rounded-full bg-gold px-3 py-1 text-xs font-bold text-foreground shadow-md">
          {pricing.discountBadge}
        </span>

        <p className="text-center text-sm text-muted-foreground">{pricing.paymentNote}</p>

        <div className="my-6 flex flex-col items-center">
          <span className="text-xl font-semibold text-muted-foreground line-through">
            {pricing.originalPrice}
          </span>
          <span className="mt-1 font-heading text-5xl font-black text-foreground sm:text-6xl">
            {pricing.currentPrice}
            <span className="align-top text-2xl sm:text-3xl">,{pricing.currentPriceCents}</span>
          </span>
          <span className="mt-2 inline-block border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {pricing.offerLabel}
          </span>
        </div>

        <Image
          src="/images/hero/capa-livro-3.webp"
          alt="Capa do Planner Mente Leve"
          width={744}
          height={1135}
          quality={92}
          sizes="180px"
          className="mx-auto mt-5 h-auto w-[180px]"
        />

        <p className="mt-4 text-center text-sm text-muted-foreground">{pricing.pageCountNote}</p>
        <p className="mt-1 text-center text-xs text-muted-foreground">{pricing.scarcityNote}</p>

        <ul className="mt-6 space-y-3">
          {pricing.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              <span className="text-sm text-foreground sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-border/70 bg-muted/50 p-4">
          <h4 className="mb-3 text-center font-heading text-base font-bold text-primary">
            {pricing.bonusSectionTitle}
          </h4>
          <ul className="space-y-2">
            {bonuses.map((bonus) => (
              <li key={bonus.headline} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{bonus.headline}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <UrgencyBanner />
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm font-semibold text-primary">
          <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden />
          {pricing.impactNote}
        </p>

        <div className="mt-4">
          <CheckoutButton>{pricing.ctaLabel}</CheckoutButton>
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 text-center">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
            {pricing.guaranteeNote}
          </p>
          <p className="text-[11px] text-muted-foreground/70">Compra 100% segura e protegida</p>
        </div>
      </div>
    </Section>
  );
}
