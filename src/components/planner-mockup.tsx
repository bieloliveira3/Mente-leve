import { CheckSquare, Circle, NotebookPen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Mockup 100% em CSS/SVG da capa do planner — sem depender de imagens
 * externas. Fácil de trocar por um mockup real (foto do produto) depois:
 * basta substituir este componente por um <Image />.
 *
 * Os selos flutuantes ficam acima da capa (z-20) e são visíveis também no
 * mobile, em tamanho reduzido.
 */
export function PlannerMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[19rem] sm:max-w-sm", className)}>
      <div className="relative z-0 overflow-hidden rounded-3xl border-4 border-foreground/90 bg-gradient-to-br from-primary via-primary to-[#a8794f] p-6 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between text-primary-foreground/80">
          <NotebookPen className="h-6 w-6" aria-hidden />
          <Sparkles className="h-5 w-5" aria-hidden />
        </div>
        <div className="mt-14 font-heading text-2xl font-extrabold leading-tight text-primary-foreground sm:mt-16 sm:text-3xl">
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

      <div className="absolute -top-3 right-0 z-20 rotate-6 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold text-foreground shadow-md sm:-right-4 sm:-top-4 sm:rounded-2xl sm:px-4 sm:py-2 sm:text-xs">
        + 150 páginas
      </div>

      <div className="absolute -bottom-3 left-0 z-20 -rotate-6 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold text-foreground shadow-md sm:-bottom-5 sm:-left-5 sm:px-4 sm:py-2 sm:text-xs">
        Sem datas fixas
      </div>

      <div className="absolute -right-2 bottom-12 z-20 w-36 rounded-xl bg-card p-3 text-left shadow-lg sm:-right-6 sm:bottom-auto sm:top-16 sm:w-40">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-muted-foreground sm:text-[11px]">
          Hoje
        </p>
        <div className="space-y-1.5 text-[11px] text-foreground sm:text-xs">
          <div className="flex items-center gap-1.5">
            <CheckSquare className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span>Beber água</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckSquare className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span>1 tarefa importante</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="text-muted-foreground">Respirar 2min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
