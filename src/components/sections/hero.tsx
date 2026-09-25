import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { PlannerMockup } from "@/components/planner-mockup";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Section id="top" className="pt-10 sm:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full px-8 text-base font-bold sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
            >
              <a href="#pricing">Quero organizar minha vida 👇</a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
            {hero.trustBullets.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <PlannerMockup className="lg:ml-auto" />
      </div>
    </Section>
  );
}
