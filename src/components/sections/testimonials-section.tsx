import { Section } from "@/components/layout/section";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <Section id="depoimentos">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        A transformação é real
      </h2>

      <div className="mx-auto mt-12 max-w-2xl space-y-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="relative rounded-2xl border border-border/70 bg-secondary/50 p-6 shadow-sm"
          >
            <span
              aria-hidden
              className="absolute -left-2 -top-4 font-heading text-5xl text-primary/20"
            >
              &ldquo;
            </span>
            <p className="relative text-base italic leading-relaxed text-foreground sm:text-lg">
              {testimonial.quote}
            </p>
            <p className="mt-4 text-right font-semibold text-primary">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
