import { CheckCircle2, HeartHandshake } from "lucide-react";
import { Section } from "@/components/layout/section";
import { PlannerMockup } from "@/components/planner-mockup";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="pt-10 sm:pt-14">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheadline}
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden />
            {hero.impactBadge}
          </p>

          <Button
            asChild
            className="mt-7 h-12 w-full max-w-sm rounded-full px-8 text-base font-bold normal-case tracking-normal sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
          >
            <a href="#pricing">Quero organizar minha vida 👇</a>
          </Button>

          <ul className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 md:justify-start">
            {hero.trustBullets.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <PlannerMockup className="md:ml-auto" />
      </div>
    </Section>
  );
}
