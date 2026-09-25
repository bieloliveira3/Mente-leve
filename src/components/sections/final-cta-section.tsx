import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { finalCta, pricing } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <Section id="comecar" className="pb-24">
      <div className="mx-auto max-w-2xl rounded-[2rem] bg-foreground px-6 py-12 text-center text-background sm:px-10">
        <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">
          {finalCta.title}
          <span className="mt-2 block text-accent">{finalCta.titleAccent}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-background/75 sm:text-base">
          {finalCta.text}
        </p>
        <CheckoutButton className="mx-auto mt-8 h-12 max-w-md animate-none bg-primary text-primary-foreground hover:bg-primary/90 sm:h-14">
          {pricing.ctaLabel}
        </CheckoutButton>
      </div>
    </Section>
  );
}
