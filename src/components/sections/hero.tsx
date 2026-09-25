import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="pb-8 pt-8 sm:pb-14 sm:pt-14">
      <div className="mx-auto grid max-w-5xl items-center gap-5 md:grid-cols-2 md:gap-10">
        <h1 className="text-center font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight text-foreground md:text-left sm:text-5xl">
          {hero.headline}
          <span className="mt-3 block text-primary">{hero.headlineAccent}</span>
        </h1>
        <div id="produto" className="md:row-span-4">
          <Image
            src="/images/hero/planner-tablet.webp"
            alt="Planner Mente Leve no tablet e no celular, com a página de planejamento da semana"
            width={1312}
            height={1199}
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 32rem"
            className="h-auto w-full rounded-3xl shadow-xl"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0 sm:text-lg">
            {hero.subheadline}
          </p>
          <Button
            asChild
            className="mt-5 h-12 w-full max-w-sm rounded-full px-8 text-base font-bold sm:mt-6 sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
          >
            <a href="#pricing">{hero.cta}</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">{hero.trustLine}</p>
        </div>
      </div>
    </Section>
  );
}
