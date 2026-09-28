import { Section } from "@/components/layout/section";
import { CheckoutButton } from "@/components/checkout-button";
import { pricing, restart } from "@/lib/content";

export function InsideSection() {
  return (
    <Section id="conteudo" className="bg-secondary/70">
      <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {restart.title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">{restart.note}</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {restart.points.map((point) => (
          <li key={point.title} className="rounded-3xl border border-border bg-card p-5 text-left">
            <h3 className="font-heading text-lg font-bold text-foreground">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-md text-center text-sm font-semibold text-foreground">{restart.close}</p>
      <div className="mx-auto mt-4 max-w-md">
        <CheckoutButton analyticsId="restart_checkout" className="animate-none">
          {pricing.ctaLabel}
        </CheckoutButton>
      </div>
    </Section>
  );
}
