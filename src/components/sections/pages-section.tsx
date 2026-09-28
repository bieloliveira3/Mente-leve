import Image from "next/image";
import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { pricing, realPages } from "@/lib/content";

export function PagesSection() {
  return (
    <Section id="paginas" className="bg-secondary/40 py-10 sm:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {realPages.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {realPages.subtitle}
        </p>
      </div>
      <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-x-5 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
        {realPages.items.map((item) => (
          <li key={item.src} className="min-w-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={1012}
              height={1432}
              quality={88}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 20rem"
              className="h-auto w-full rounded-xl border border-border bg-card shadow-md"
            />
            <p className="mt-3 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
              {item.kicker}
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold leading-tight text-foreground sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-8 max-w-md sm:mt-10">
        <CheckoutButton analyticsId="pages_checkout" className="h-auto min-h-12 animate-none px-6 py-3 text-base font-bold tracking-normal whitespace-normal normal-case sm:min-h-14">
          {pricing.ctaLabel}
        </CheckoutButton>
      </div>
    </Section>
  );
}
