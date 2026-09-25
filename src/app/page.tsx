import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ScienceSection } from "@/components/sections/science-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { BonusSection } from "@/components/sections/bonus-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CreatorSection } from "@/components/sections/creator-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { GuaranteeSection } from "@/components/sections/guarantee-section";
import { FaqSection } from "@/components/sections/faq-section";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero />
        <ScienceSection />
        <BenefitsSection />
        <BonusSection />
        <TestimonialsSection />
        <CreatorSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
