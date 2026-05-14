import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { BrandsSection } from "@/components/brands-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustpilotSection } from "@/components/trustpilot-section";
import { CalculatorSection } from "@/components/calculator-section";
import { FAQSection } from "@/components/faq-section";
import { ReferralSection } from "@/components/referral-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <StatsSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <TrustpilotSection />
        <CalculatorSection />
        <FAQSection />
        <ReferralSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
