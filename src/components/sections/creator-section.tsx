import { Section } from "@/components/layout/section";
import { creatorStory } from "@/lib/content";

export function CreatorSection() {
  return (
    <Section id="criadora" className="bg-secondary/40">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {creatorStory.name}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{creatorStory.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
          {creatorStory.paragraphs[0]}
        </p>
      </div>
    </Section>
  );
}
