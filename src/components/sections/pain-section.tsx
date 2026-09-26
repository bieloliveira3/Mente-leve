import { Section } from "@/components/layout/section";
import { painPoints } from "@/lib/content";

export function PainSection() {
  return (
    <Section id="identificacao">
      <h2 className="mx-auto max-w-xl text-center font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {painPoints.title}
      </h2>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        {painPoints.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-border/80 bg-background px-4 py-3 text-sm leading-snug text-foreground sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
