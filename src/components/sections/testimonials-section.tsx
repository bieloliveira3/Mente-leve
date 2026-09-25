import Image from "next/image";
import { Section } from "@/components/layout/section";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <Section id="depoimentos">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        A transformação é real
      </h2>

      <ul className="mx-auto mt-10 max-w-xl space-y-5">
        {testimonials.map((testimonial) => (
          <li key={testimonial.author} className="flex items-start gap-3">
            <Image
              src={testimonial.photo}
              alt={testimonial.photoAlt}
              width={96}
              height={96}
              className="h-12 w-12 shrink-0 rounded-full object-cover shadow-sm ring-2 ring-card"
            />
            <div className="relative min-w-0 flex-1 rounded-2xl rounded-tl-md bg-secondary/70 px-4 py-3 shadow-sm">
              <span
                aria-hidden
                className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 bg-secondary/70"
              />
              <p className="text-sm leading-relaxed text-foreground">{testimonial.quote}</p>
              <p className="mt-2 text-xs font-semibold text-primary">{testimonial.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
