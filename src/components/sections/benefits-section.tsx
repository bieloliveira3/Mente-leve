import { Star } from "lucide-react";
import { Section } from "@/components/layout/section";
import { benefits } from "@/lib/content";

function BenefitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold text-primary">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-foreground">
            <Star className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
            <span className="text-sm leading-relaxed sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <Section id="beneficios">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {benefits.title}
      </h2>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <BenefitList {...benefits.whatsInside} />
        <BenefitList {...benefits.forYourBrain} />
      </div>
    </Section>
  );
}
