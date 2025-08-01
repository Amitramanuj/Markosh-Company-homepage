import { HeroSection } from '@/components/sections/hero-section';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { IndustriesSection } from '@/components/sections/industries-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaSection } from '@/components/sections/cta-section';
import { FadeInSection } from '@/components/fade-in-section';

export default function Home() {
  return (
    <>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <ServicesOverview />
      </FadeInSection>
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
      <FadeInSection>
        <IndustriesSection />
      </FadeInSection>
      <FadeInSection>
        <TestimonialsSection />
      </FadeInSection>
      <FadeInSection>
        <CtaSection />
      </FadeInSection>
    </>
  );
}
