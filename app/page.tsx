import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ContactFormSection from '@/components/ContactFormSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero
        title="KIDDIECARE"
        subtitle="Nurturing Young Minds, Building Bright Futures"
        backgroundImage="/hero-section-bg.png"
        teddyImage="/teddy-love.png"
        label="Learning Center"
        phone="(380) 999-8564"
      />

      <Section className="bg-gradient-to-b from-cream to-peach/10">
        <ProgramsSection />
      </Section>

      <Section className="bg-gradient-to-b from-peach/10 to-sky-blue/10" backgroundImage="/bg-teddy2.png">
        <WhyChooseSection />
      </Section>

      <Section className="bg-gradient-to-b from-sky-blue/10 to-lavender/10">
        <TestimonialsSection />
      </Section>

      <Section className="bg-gradient-to-b from-lavender/10 to-gentle-green/10" backgroundImage="/bg-teddy2.png">
        <AboutSection />
      </Section>

      <Section className="bg-gradient-to-b from-lavender/10 to-peach/10">
        <ActivitiesSection />
      </Section>

      <Section id="contact" className="bg-gradient-to-b from-peach/10 to-sky-blue/10">
        <ContactFormSection />
      </Section>
    </main>
  );
}
