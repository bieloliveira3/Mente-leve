import Image from "next/image";
import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="pb-8 pt-6 sm:pb-12 sm:pt-10 md:pt-8">
      <div className="mx-auto grid max-w-5xl items-center gap-4 md:grid-cols-2 md:gap-10">
        <h1 className="order-1 text-center font-heading text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-foreground md:order-none md:text-left md:text-4xl lg:text-[2.6rem] lg:leading-[1.08]">
          {hero.headline}
          <span className="mt-2 block text-primary sm:mt-3">{hero.headlineAccent}</span>
        </h1>
        <div id="produto" className="order-3 md:order-none md:row-span-4">
          <Image
            src="/images/hero/planner-tablet.webp"
            alt="Planner Mente Leve no tablet e no celular, com a página de planejamento da semana"
            width={1312}
            height={1199}
            priority
            quality={90}
            sizes="(max-width: 768px) 86vw, 32rem"
            className="mx-auto h-auto w-[86%] rounded-3xl shadow-xl md:w-full"
          />
        </div>
        <div className="order-2 text-center md:order-none md:text-left">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0 sm:text-lg">
            {hero.subheadline}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm font-medium leading-relaxed text-foreground md:mx-0 sm:mt-3 sm:text-base">
            {hero.methodLine}
          </p>
          <p className="mx-auto mt-3 font-heading text-base font-bold text-foreground md:mx-0 sm:text-lg">
            {hero.priceLine}
          </p>
          <CheckoutButton
            id="hero-cta"
            analyticsId="hero_offer"
            className="mx-auto mt-4 h-auto min-h-12 w-full max-w-sm animate-none px-6 py-3 text-base font-bold tracking-normal whitespace-normal normal-case sm:mt-5 sm:min-h-14 sm:w-auto sm:px-8"
          >
            {hero.cta}
          </CheckoutButton>
        </div>
      </div>
    </Section>
  );
}
