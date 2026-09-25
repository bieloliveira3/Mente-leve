import { Section } from "@/components/layout/section";
import { differentials } from "@/lib/content";

export function DifferentialsSection() {
  return (
    <Section id="diferencial" className="bg-card">
      <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {differentials.title}
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {differentials.items.map((item) => (
          <li key={item.title} className="rounded-3xl border border-border bg-background p-5">
            <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
