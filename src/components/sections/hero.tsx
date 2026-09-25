import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="pb-8 pt-8 sm:pb-14 sm:pt-14">
      <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-12">
        <div className="text-center md:text-left">
          <h1 className="font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.headline}
            <span className="mt-3 block text-primary">{hero.headlineAccent}</span>
          </h1>
          <Image
            src="/images/hero/capa-livro-3.webp"
            alt="Capa do Planner Mente Leve"
            width={744}
            height={1135}
            priority
            quality={92}
            sizes="144px"
            className="mx-auto mt-4 h-auto w-24 md:hidden"
          />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0 sm:text-lg">
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
        <Image
          src="/images/hero/capa-livro-3.webp"
          alt=""
          width={744}
          height={1135}
          priority
          quality={92}
          sizes="256px"
          className="hidden h-auto w-full md:block"
        />
      </div>
    </Section>
  );
}
