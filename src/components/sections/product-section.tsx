import { Fraunces } from "next/font/google";
import Image from "next/image";
import { CheckoutButton } from "@/components/checkout-button";
import { Section } from "@/components/layout/section";
import { bonusShowcase } from "@/lib/content";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const referenceIcons = {
  head: { src: "/images/bonus/icone-cabeca.png", width: 320, height: 320 },
  heart: { src: "/images/bonus/icone-coracao.png", width: 320, height: 320 },
  home: { src: "/images/bonus/icone-casa.png", width: 320, height: 320 },
  lotus: { src: "/images/bonus/icone-lotus.png", width: 320, height: 320 },
  calendar: { src: "/images/bonus/icone-calendario.png", width: 320, height: 320 },
} as const;

export function ProductSection() {
  return (
    <Section id="bonus" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Image
          src="/images/bonus/marca-lotus.png"
          alt=""
          width={26}
          height={20}
          unoptimized
          className="mx-auto h-6 w-auto"
        />
        <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px w-8 bg-foreground/25 sm:w-12" />
          <p className="text-[10px] font-medium tracking-[0.22em] text-foreground/75 uppercase sm:text-[11px] sm:tracking-[0.28em]">
            {bonusShowcase.eyebrow}
          </p>
          <span className="h-px w-8 bg-foreground/25 sm:w-12" />
        </div>
        <h2
          className={cn(
            display.className,
            "mt-5 text-[1.85rem] leading-[1.18] font-medium text-balance text-foreground sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.2rem]",
          )}
        >
          <span className="block">{bonusShowcase.title[0]}</span>
          <span className="block">{bonusShowcase.title[1]}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground sm:mt-6 sm:text-base">
          {bonusShowcase.subtitle}
        </p>
      </div>

      <ul className="relative mx-auto mt-12 grid max-w-lg grid-cols-1 gap-4 sm:mt-14 lg:mt-16 lg:max-w-none lg:grid-cols-6 lg:gap-5">
        {bonusShowcase.items.map((item, index) => {
          const reference = referenceIcons[item.icon];
          return (
            <li
              key={item.number}
              className={cn(
                "flex min-w-0 flex-col items-center rounded-[1.25rem] border border-[#efe4d6] bg-card px-6 py-8 text-center shadow-[0_10px_28px_-22px_rgba(51,65,58,0.45)]",
                "lg:col-span-2 lg:px-7 lg:py-9",
                index === 3 && "lg:col-start-2",
              )}
            >
              <Image
                src={reference.src}
                alt=""
                width={reference.width}
                height={reference.height}
                unoptimized
                className="h-12 w-12 object-contain"
              />
              <p className="mt-4 text-[11px] font-medium tracking-[0.22em] text-foreground/55">
                {item.number}
              </p>
              <h3 className="mt-2 font-heading text-[0.82rem] leading-snug font-semibold tracking-[0.08em] text-foreground uppercase">
                {item.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="relative mx-auto mt-12 max-w-md text-center sm:mt-16">
        <p className={cn(display.className, "text-xl text-foreground italic sm:text-2xl")}>
          {bonusShowcase.closing}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bonusShowcase.note}</p>
        <CheckoutButton
          analyticsId="bonus_checkout"
          className="mx-auto mt-7 h-11 w-auto max-w-full animate-none bg-foreground px-6 text-sm font-medium text-background normal-case shadow-none hover:bg-foreground/90 sm:h-11"
        >
          {bonusShowcase.cta} →
        </CheckoutButton>
        <Image
          src="/images/bonus/marca-lotus.png"
          alt=""
          width={26}
          height={20}
          unoptimized
          className="mx-auto mt-8 h-6 w-auto"
        />
      </div>
    </Section>
  );
}
