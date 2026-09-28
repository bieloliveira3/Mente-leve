import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { guarantee, pricing } from "@/lib/content";

export function GuaranteeSection() {
  return (
    <Section analyticsSection="garantia">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldCheck className="h-8 w-8" aria-hidden />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {guarantee.title}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {guarantee.description}
        </p>
        <CheckoutButton
          analyticsId="guarantee_checkout"
          className="h-auto min-h-12 max-w-md animate-none px-6 py-3 text-base font-bold tracking-normal whitespace-normal normal-case sm:min-h-14"
        >
          {pricing.ctaLabel}
        </CheckoutButton>
      </div>
    </Section>
  );
}
