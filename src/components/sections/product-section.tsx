import { Fraunces } from "next/font/google";
import type { SVGProps } from "react";
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

function Icon({ className, children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

function HeadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon strokeWidth={1.5} {...props}>
      <path d="M14.8 20.2V16.2C14.8 15 16 13.8 15.8 12.2 15.4 9.6 13.2 7.2 10.6 7.6 8.4 8 7 10 7.4 12.2c.2 1 .8 1.8 1.6 2.3" />
      <path d="M16.6 11.2c.6 1.2.4 2.6-.4 3.6-.6.8-1 1.8-1 2.8v2.6" />
      <path d="M9.2 11.6c.5.4 1.1.3 1.5-.1" />
      <path d="M9 20.2h6.2" />
    </Icon>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 18.6s-5.4-3.3-5.4-7.1c0-1.8 1.4-3.2 3.1-3.2 1 0 1.8.5 2.3 1.2.5-.7 1.3-1.2 2.3-1.2 1.7 0 3.1 1.4 3.1 3.2 0 3.8-5.4 7.1-5.4 7.1z" />
    </Icon>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4.8 11.2 12 5.2l7.2 6" />
      <path d="M7.2 10.2V18.4h9.6V10.2" />
      <path d="M10.4 18.4v-4.2h3.2v4.2" />
    </Icon>
  );
}

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.8c1.15 2.5 1.25 5 .15 7.1C11 7.8 10.85 5.3 12 2.8z" />
      <path d="M12 9.2c-3.3-.3-6.1 1.1-7.2 3.6 2.3-1.1 4.7-1.3 7.2-.7 2.5-.6 4.9-.4 7.2.7-1.1-2.5-3.9-3.9-7.2-3.6z" />
      <path d="M12 13.2c-4.1.1-7.2 1.8-8.2 4.4 2.8-1.2 5.5-1.4 8.2-.8 2.7-.6 5.4-.4 8.2.8-1-2.6-4.1-4.3-8.2-4.4z" />
      <path d="M11.15 17.6h1.7V21h-1.7z" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <rect x="4.5" y="5.4" width="15" height="14" rx="2" />
      <path d="M8 3.8v3.2M16 3.8v3.2M4.5 9.6h15" />
      <path d="M8.2 13.2h.1M12 13.2h.1M15.8 13.2h.1M8.2 16.2h.1M12 16.2h.1" />
    </Icon>
  );
}

const icons = {
  head: HeadIcon,
  heart: HeartIcon,
  home: HomeIcon,
  lotus: LotusIcon,
  calendar: CalendarIcon,
};

function Leaves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 280" aria-hidden="true" className={className}>
      <path d="M28 248C78 226 102 172 120 108" fill="none" stroke="#6d8b66" strokeWidth="1.4" />
      <path d="M118 114c22-8 40 0 50 18-26 4-42 0-50-18z" fill="#86a07c" />
      <path d="M106 146c-24-4-40 8-48 28 22-6 38-14 48-28z" fill="#7d9674" />
      <path d="M130 86c20-16 42-18 56-8-22 0-40 6-56 8z" fill="#93aa86" />
      <path d="M84 186c-20 6-34 20-40 36 20-10 34-20 40-36z" fill="#7a9472" />
      <path d="M140 64c12-22 32-34 50-36-18 12-34 24-50 36z" fill="#8aa582" />
    </svg>
  );
}

export function ProductSection() {
  return (
    <Section id="bonus" className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <Leaves className="pointer-events-none absolute -top-6 -left-10 h-40 w-32 text-[#7f967c]/45 sm:-left-6 sm:h-52 sm:w-40 lg:-left-2 lg:h-64 lg:w-52" />
      <Leaves className="pointer-events-none absolute -right-12 -bottom-8 h-40 w-32 rotate-180 text-[#7f967c]/40 sm:-right-6 sm:h-52 sm:w-40 lg:right-0 lg:h-64 lg:w-52" />

      <div className="relative mx-auto max-w-2xl text-center">
        <LotusIcon className="mx-auto h-7 w-7 text-foreground" />
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
          const ItemIcon = icons[item.icon];
          return (
            <li
              key={item.number}
              className={cn(
                "flex min-w-0 flex-col items-center rounded-[1.25rem] border border-[#efe4d6] bg-card px-6 py-8 text-center shadow-[0_10px_28px_-22px_rgba(51,65,58,0.45)]",
                "lg:col-span-2 lg:px-7 lg:py-9",
                index === 3 && "lg:col-start-2",
              )}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground">
                <ItemIcon className="h-5 w-5" />
              </span>
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
        <LotusIcon className="mx-auto mt-8 h-6 w-6 text-foreground/70" />
      </div>
    </Section>
  );
}
