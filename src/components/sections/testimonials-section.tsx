import Image from "next/image";
import { Section } from "@/components/layout/section";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <Section id="depoimentos">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Quem já usa
      </h2>
      <ul className="mt-8 grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li key={testimonial.author} className="flex flex-col rounded-3xl border border-border bg-card p-5">
            <p className="text-sm tracking-widest text-gold" aria-label="5 de 5 estrelas">
              ★★★★★
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">{testimonial.quote}</p>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src={testimonial.photo}
                alt={testimonial.photoAlt}
                width={96}
                height={96}
                className="h-11 w-11 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
