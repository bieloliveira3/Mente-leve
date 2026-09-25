import { CheckSquare, Circle, NotebookPen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Mockup 100% em CSS/SVG da capa do planner — sem depender de imagens
 * externas. Fácil de trocar por um mockup real (foto do produto) depois:
 * basta substituir este componente por um <Image />.
 */
export function PlannerMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm", className)}>
      <div className="absolute -right-4 -top-4 hidden rotate-6 rounded-2xl bg-accent px-4 py-2 text-xs font-bold text-foreground shadow-md sm:block">
        + 150 páginas
      </div>
      <div className="absolute -bottom-5 -left-5 hidden -rotate-6 rounded-full bg-secondary px-4 py-2 text-xs font-bold text-foreground shadow-md sm:block">
        Sem datas fixas
      </div>

      <div className="relative overflow-hidden rounded-3xl border-4 border-foreground/90 bg-gradient-to-br from-primary via-primary to-[#a8794f] p-8 shadow-2xl">
        <div className="flex items-center justify-between text-primary-foreground/80">
          <NotebookPen className="h-6 w-6" aria-hidden />
          <Sparkles className="h-5 w-5" aria-hidden />
        </div>
        <div className="mt-16 font-heading text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl">
          Mente
          <br />
          Leve
        </div>
        <p className="mt-2 text-sm font-medium text-primary-foreground/85">
          Planner Digital para TDAH
        </p>

        <div className="mt-8 space-y-2">
          <div className="h-1.5 w-3/4 rounded-full bg-primary-foreground/30" />
          <div className="h-1.5 w-1/2 rounded-full bg-primary-foreground/30" />
        </div>
      </div>

      <div className="absolute -right-6 top-16 hidden w-40 rounded-xl bg-card p-3 text-left shadow-lg sm:block">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          Hoje
        </p>
        <div className="space-y-1.5 text-xs text-foreground">
          <div className="flex items-center gap-1.5">
            <CheckSquare className="h-3.5 w-3.5 text-primary" aria-hidden />
            <span>Beber água</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckSquare className="h-3.5 w-3.5 text-primary" aria-hidden />
            <span>1 tarefa importante</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <span className="text-muted-foreground">Respirar 2min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
