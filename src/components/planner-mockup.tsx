import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Foto do produto: tablet com a capa, celular com uma página real do planner
 * e os cinco bônus. Substitui o mockup desenhado em CSS.
 */
export function PlannerMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <Image
        src="/images/hero/produto.webp"
        alt="Planner Mente Leve no tablet e no celular, com cinco ebooks de bônus"
        width={2128}
        height={2548}
        priority
        sizes="(max-width: 768px) 100vw, 28rem"
        className="h-auto w-full rounded-3xl shadow-2xl"
      />
    </div>
  );
}
