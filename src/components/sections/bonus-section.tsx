import { Section } from "@/components/layout/section";
import { bonuses, pricing } from "@/lib/content";

export function BonusSection() {
  return (
    <Section id="incluso">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        O que você recebe
      </h2>
      <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-primary/30 bg-card p-6 sm:p-8">
        <p className="font-heading text-lg font-bold text-foreground">{pricing.pageCountNote}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          PDF para celular, tablet, computador ou impressão.
        </p>
      </div>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {bonuses.map((bonus) => (
          <li key={bonus.headline} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{bonus.pages}</p>
            <h3 className="mt-2 font-heading text-base font-bold leading-snug text-foreground">
              {bonus.headline}
            </h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}
