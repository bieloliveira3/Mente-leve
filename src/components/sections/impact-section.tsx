import { Section } from "@/components/layout/section";
import { socialImpact } from "@/lib/content";

export function ImpactSection() {
  return (
    <Section id="proposito" className="py-8 sm:py-10">
      <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-3xl border border-border bg-card px-5 py-4 sm:gap-6 sm:px-6">
        <p className="font-heading text-3xl font-black text-primary sm:text-4xl">{socialImpact.highlight}</p>
        <p className="text-sm leading-relaxed text-foreground sm:text-base">
          de cada venda é destinado a instituições que acolhem crianças e adultos com TDAH.
        </p>
      </div>
    </Section>
  );
}
