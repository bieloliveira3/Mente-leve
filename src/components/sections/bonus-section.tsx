import { Brain, Calendar, Heart, Home, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/section";
import { bonuses, type Bonus } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconMap: Record<Bonus["icon"], typeof Brain> = {
  brain: Brain,
  sparkles: Sparkles,
  home: Home,
  heart: Heart,
  calendar: Calendar,
};

export function BonusSection() {
  return (
    <Section id="bonus" className="bg-accent/40">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Bônus exclusivos inclusos
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Além do planner completo, você também recebe estes materiais extras — sem custo
        adicional.
      </p>

      <div className="mt-12 space-y-6">
        {bonuses.map((bonus, index) => {
          const Icon = iconMap[bonus.icon];
          return (
            <div
              key={bonus.headline}
              className={cn(
                "flex flex-col items-center gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:flex-row sm:gap-8",
                index % 2 === 1 && "sm:flex-row-reverse"
              )}
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-10 w-10" aria-hidden />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-start">
                  <h3 className="font-heading text-lg font-bold text-primary sm:text-xl">
                    {bonus.headline}
                  </h3>
                  <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                    {bonus.pages}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {bonus.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
