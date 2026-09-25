import Image from "next/image";
import { Section } from "@/components/layout/section";
import { creatorStory } from "@/lib/content";

export function CreatorSection() {
  return (
    <Section id="criadora" className="bg-secondary/40">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <Image
          src={creatorStory.photo}
          alt={creatorStory.photoAlt}
          width={800}
          height={1067}
          sizes="160px"
          className="h-40 w-32 shrink-0 rounded-3xl object-cover object-top shadow-md"
        />
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            {creatorStory.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {creatorStory.role}
            {creatorStory.credentialBadge ? ` · ${creatorStory.credentialBadge}` : ""}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
            {creatorStory.paragraphs[0]}
          </p>
        </div>
      </div>
    </Section>
  );
}
