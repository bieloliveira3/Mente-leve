import { BookOpen, Brain, Heart, House, Leaf, type LucideIcon } from "lucide-react";
import { CheckoutButton } from "@/components/checkout-button";
import { Section } from "@/components/layout/section";
import { bonusShowcase } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<(typeof bonusShowcase.items)[number]["icon"], LucideIcon> = {
  brain: Brain,
  heart: Heart,
  home: House,
  leaf: Leaf,
  journal: BookOpen,
};

export function ProductSection() {
  return (
    <Section id="bonus">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-heading text-[1.7rem] font-bold leading-[1.2] text-foreground sm:text-4xl sm:leading-tight">
          {bonusShowcase.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
          {bonusShowcase.subtitle}
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-6 lg:gap-5">
        {bonusShowcase.items.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <li
              key={item.title}
              className={cn(
                "flex min-w-0 flex-col rounded-3xl border border-border bg-card px-5 py-5 shadow-[0_1px_1px_rgba(51,65,58,0.04),0_10px_24px_-18px_rgba(51,65,58,0.28)]",
                "lg:col-span-2",
                index === 3 && "lg:col-start-2",
              )}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-12 max-w-md text-center sm:mt-16">
        <p className="font-heading text-lg font-semibold leading-snug text-foreground">
          {bonusShowcase.closing}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bonusShowcase.note}</p>
        <CheckoutButton
          analyticsId="bonus_checkout"
          className="mx-auto mt-7 h-12 w-auto max-w-full animate-none px-6 normal-case shadow-none sm:h-12"
        >
          {bonusShowcase.cta}
        </CheckoutButton>
      </div>
    </Section>
  );
}
