import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/content";
import type { LegalDocument } from "@/lib/legal";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <article className="mx-auto w-full max-w-2xl">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar para a página inicial
          </Link>
        </Button>

        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {document.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {brand.name} • última atualização em {document.updatedAt}
        </p>
        <p className="mt-6 text-base leading-relaxed text-foreground">{document.intro}</p>

        <div className="mt-10 space-y-8">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
