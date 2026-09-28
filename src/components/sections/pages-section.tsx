import Image from "next/image";
import { Section } from "@/components/layout/section";
import { realPages } from "@/lib/content";

export function PagesSection() {
  return (
    <Section id="paginas" className="bg-secondary/40">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {realPages.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {realPages.subtitle}
        </p>
      </div>
      <ul className="mx-auto mt-10 grid max-w-4xl gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
        {realPages.items.map((item) => (
          <li key={item.src} className="min-w-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={1012}
              height={1432}
              sizes="(max-width: 640px) 100vw, 28rem"
              className="h-auto w-full rounded-2xl border border-border bg-card shadow-lg"
            />
            <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
              {item.kicker}
            </p>
            <h3 className="mt-1 font-heading text-xl font-bold text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
