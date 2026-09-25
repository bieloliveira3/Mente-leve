import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { InsideSection } from "@/components/sections/inside-section";
import { PainSection } from "@/components/sections/pain-section";
import { MethodSection } from "@/components/sections/method-section";
import { ProductSection } from "@/components/sections/product-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CreatorSection } from "@/components/sections/creator-section";
import { GuaranteeSection } from "@/components/sections/guarantee-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { StickyCheckoutBar } from "@/components/sticky-mobile-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PricingSection />
        <InsideSection />
        <PainSection />
        <MethodSection />
        <ProductSection />
        <TestimonialsSection />
        <CreatorSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyCheckoutBar />
    </>
  );
}
