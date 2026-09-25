import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/section";
import { guarantee } from "@/lib/content";

export function GuaranteeSection() {
  return (
    <Section className="bg-secondary/60">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldCheck className="h-8 w-8" aria-hidden />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {guarantee.title}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {guarantee.description}
        </p>
      </div>
    </Section>
  );
}
