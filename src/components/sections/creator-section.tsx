import { Section } from "@/components/layout/section";
import { creatorStory } from "@/lib/content";

export function CreatorSection() {
  return (
    <Section className="bg-secondary/40">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Uma ferramenta criada por quem entende
      </h2>

      <div className="mt-10 flex flex-col items-center gap-8 md:flex-row">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-4 border-secondary bg-primary font-heading text-3xl font-bold text-primary-foreground shadow-lg">
          {creatorStory.initials}
        </div>
        <div className="text-center md:text-left">
          {creatorStory.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-base leading-relaxed text-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
          <p className="font-semibold text-primary">
            — {creatorStory.name}, {creatorStory.role}
          </p>
        </div>
      </div>
    </Section>
  );
}
