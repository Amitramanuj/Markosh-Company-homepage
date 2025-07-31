import { HeroSection } from '@/components/sections/hero-section';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { IndustriesSection } from '@/components/sections/industries-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
