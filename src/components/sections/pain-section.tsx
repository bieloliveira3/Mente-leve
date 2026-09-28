import { Section } from "@/components/layout/section";
import { painPoints } from "@/lib/content";

function FullHead({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 168" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M62 52C52 40 46 28 44 14" />
        <path d="M68 46C62 30 66 14 74 6" />
        <path d="M76 44C78 28 86 16 94 8" />
        <path d="M84 46C96 32 110 24 124 22" />
        <path d="M72 48C70 32 76 16 78 6" />
        <path d="M80 45C88 30 94 18 98 8" />
        <path d="M50 118C48 96 54 78 60 68C50 56 56 42 72 40C90 36 104 44 108 56C112 66 108 74 100 78C110 82 118 90 114 98C110 106 102 108 96 110C88 120 80 128 74 132C70 142 68 152 66 162" />
        <path d="M48 108C46 124 54 142 62 154" />
        <path d="M90 66C96 62 104 64 108 68" />
        <path d="M102 100C106 103 112 103 116 100" />
      </g>
    </svg>
  );
}

export function PainSection() {
  return (
    <Section id="identificacao">
      <div className="mx-auto flex w-fit max-w-full items-center gap-3 sm:gap-5">
        <FullHead className="size-16 shrink-0 text-primary sm:size-20" />
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
