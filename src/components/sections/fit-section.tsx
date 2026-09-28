import { Check, Laptop, Printer, Smartphone } from "lucide-react";
import { Section } from "@/components/layout/section";
import { fit } from "@/lib/content";

const formatIcons = {
  phone: Smartphone,
  computer: Laptop,
  a4: Printer,
  a5: Printer,
} as const;

export function FitSection() {
  return (
    <Section id="encaixa" className="py-10 sm:py-14">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            {fit.audienceTitle}
          </h2>
          <ul className="mt-5 space-y-3">
            {fit.audience.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground sm:text-base">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-card p-6 sm:p-7">
          <h2 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            {fit.flexibleTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {fit.flexibleText}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-center font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {fit.usageTitle}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">{fit.usageNote}</p>
        <ul className="mx-auto mt-5 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {fit.formats.map((item) => {
            const Icon = formatIcons[item.id as keyof typeof formatIcons];
            return (
              <li
                key={item.id}
                className="flex min-w-0 flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center"
              >
                <Icon className="h-5 w-5 text-primary" aria-hidden />
                <span className="text-sm font-semibold leading-snug text-foreground">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-secondary/40 px-5 py-4">
        <p className="text-sm font-semibold text-foreground">{fit.notTitle}</p>
        <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
          {fit.not.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
