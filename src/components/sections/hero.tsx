import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          {hero.headline}
          <span className="mt-3 block text-primary">{hero.headlineAccent}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.subheadline}
        </p>
        <Button
          asChild
          className="mt-8 h-12 w-full max-w-sm rounded-full px-8 text-base font-bold sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
        >
          <a href="#pricing">{hero.cta}</a>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">{hero.trustLine}</p>
      </div>
    </Section>
  );
}
