import { Section } from "@/components/layout/section";
import { method } from "@/lib/content";

export function MethodSection() {
  return (
    <Section id="metodo">
      <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {method.title}
      </h2>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {method.steps.map((step) => (
          <li key={step.number} className="rounded-3xl border border-border bg-card p-5">
            <p className="font-heading text-sm font-bold tracking-[0.2em] text-primary">
              {step.number}
            </p>
            <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-xl text-center font-heading text-lg font-semibold leading-snug text-foreground">
        {method.closing}
      </p>
    </Section>
  );
}
