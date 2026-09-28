import Image from "next/image";
import { Section } from "@/components/layout/section";
import { ctaAttributes } from "@/lib/analytics/definitions";
import { reviews, supportWhatsApp } from "@/lib/content";

export function ReviewsSection() {
  return (
    <Section id="mensagens" className="pb-6 sm:pb-8">
      <h2 className="mx-auto max-w-xl text-center font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {reviews.title}
      </h2>
      <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible">
        {reviews.items.map((item) => (
          <li key={item.name} className="w-[17.5rem] shrink-0 snap-center sm:w-auto">
            <Image
              src={item.src}
              alt={item.alt}
              width={1024}
              height={1536}
              sizes="(max-width: 640px) 17.5rem, 40vw"
              className="h-auto w-full rounded-[1.75rem] shadow-lg"
            />
            <p className="mt-3 text-sm leading-relaxed text-foreground">“{item.quote}”</p>
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 text-center sm:mt-10">
        <p className="text-sm text-muted-foreground sm:text-base">Ficou alguma dúvida?</p>
        <a
          {...ctaAttributes("reviews_whatsapp")}
          href={supportWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 max-w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white hover:bg-[#1ebe5d]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 fill-current">
            <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.2 9.2 0 1 1 12 20.2zm5.1-6.9c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.4c-.1-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4.1c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
          </svg>
          Fale conosco
        </a>
      </div>
    </Section>
  );
}
