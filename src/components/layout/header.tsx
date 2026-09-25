import Link from "next/link";
import { NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 font-heading text-lg font-bold text-foreground sm:text-xl"
        >
          <NotebookPen className="h-5 w-5 text-primary" aria-hidden />
          {brand.name}
        </Link>
        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#pricing">Garantir o meu</a>
        </Button>
        <Button asChild size="sm" className="sm:hidden">
          <a href="#pricing">Quero o meu</a>
        </Button>
      </div>
    </header>
  );
}
