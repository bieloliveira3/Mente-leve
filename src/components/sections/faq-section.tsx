import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <Section id="faq">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Antes de decidir
      </h2>

      <div className="mx-auto mt-10 max-w-2xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="font-heading text-base font-semibold text-foreground sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
