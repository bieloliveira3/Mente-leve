import Image from "next/image";
import { Section } from "@/components/layout/section";
import { painPoints } from "@/lib/content";

export function PainSection() {
  return (
    <Section id="identificacao">
      <div className="mx-auto flex w-fit max-w-full items-center gap-3 sm:gap-5">
        <Image
          src="/images/sections/cabeca-cheia.png"
          alt=""
          width={88}
          height={114}
          className="h-16 w-auto shrink-0 sm:h-[4.5rem]"
        />
        <h2 className="max-w-[16rem] text-left font-heading text-2xl font-bold leading-tight text-foreground sm:max-w-md sm:text-4xl">
          {painPoints.title}
        </h2>
      </div>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        {painPoints.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-border/80 bg-background px-4 py-3 text-sm leading-snug text-foreground sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
