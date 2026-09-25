import { Layers, ListChecks, Shuffle } from "lucide-react";
import { Section } from "@/components/layout/section";
import { scienceSection } from "@/lib/content";

const icons = [Shuffle, Layers, ListChecks];

export function ScienceSection() {
  return (
    <Section id="como-funciona" className="bg-secondary/60">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {scienceSection.title}
        </h2>
        {scienceSection.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {scienceSection.points.map((point, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={point.title}
              className="rounded-2xl border border-border/70 bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
