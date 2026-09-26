import Image from "next/image";
import { Section } from "@/components/layout/section";
import { insidePages } from "@/lib/content";

export function InsideSection() {
  return (
    <Section id="conteudo" className="bg-secondary/70">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {insidePages.title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">{insidePages.note}</p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {insidePages.pages.map((page) => (
          <li key={page.src} className="min-w-0">
            <Image
              src={page.src}
              alt={page.alt}
              width={953}
              height={1348}
              sizes="(max-width: 1024px) 45vw, 16rem"
              className="h-auto w-full rounded-2xl border border-border bg-card shadow-md"
            />
            <p className="mt-2 text-center text-sm font-semibold text-foreground">{page.title}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
