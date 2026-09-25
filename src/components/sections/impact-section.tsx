import { HeartHandshake } from "lucide-react";
import { Section } from "@/components/layout/section";
import { socialImpact } from "@/lib/content";

export function ImpactSection() {
  return (
    <Section id="impacto" className="bg-primary text-primary-foreground">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-primary-foreground/30 bg-primary-foreground/10 sm:h-40 sm:w-40">
            <span className="font-heading text-5xl font-black leading-none sm:text-6xl">
              {socialImpact.highlight}
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80">
              de cada venda
            </span>
          </div>
          <HeartHandshake className="mt-5 h-8 w-8 text-primary-foreground/70" aria-hidden />
        </div>

        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {socialImpact.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
            {socialImpact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {socialImpact.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {socialImpact.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-left"
              >
                <h3 className="font-heading text-base font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-primary-foreground/20 pt-6 font-heading text-lg font-semibold sm:text-xl">
            {socialImpact.closingLine}
          </p>
        </div>
      </div>
    </Section>
  );
}
