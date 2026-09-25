import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Section } from "@/components/layout/section";
import { creatorStory } from "@/lib/content";

export function CreatorSection() {
  return (
    <Section id="criadora" className="bg-secondary/40">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Uma ferramenta criada por quem entende
      </h2>

      <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:gap-10">
        <div className="flex shrink-0 flex-col items-center gap-3">
          <Image
            src={creatorStory.photo}
            alt={creatorStory.photoAlt}
            width={320}
            height={320}
            sizes="(max-width: 768px) 176px, 208px"
            className="h-44 w-44 rounded-full border-4 border-secondary object-cover shadow-lg md:h-52 md:w-52"
          />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
            <BadgeCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
            {creatorStory.credentialBadge}
          </span>
        </div>

        <div className="text-center md:text-left">
          {creatorStory.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-base leading-relaxed text-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
          <p className="font-semibold text-primary">
            — {creatorStory.name}, {creatorStory.role}
            {creatorStory.crm ? ` • ${creatorStory.crm}` : ""}
          </p>
        </div>
      </div>
    </Section>
  );
}
