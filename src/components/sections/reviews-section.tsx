import Image from "next/image";
import { Section } from "@/components/layout/section";
import { reviews } from "@/lib/content";

export function ReviewsSection() {
  return (
    <Section id="mensagens">
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
          </li>
        ))}
      </ul>
    </Section>
  );
}
