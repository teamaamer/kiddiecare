import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import Image from 'next/image';

export const metadata = {
  title: 'Programs | KIDDIECARE Center',
  description: 'Quality early education programs for infants, toddlers, and preschoolers. Empowering your child to be a lifetime learner.',
};

export default function Programs() {
  return (
    <main>
      <Hero
        title="Programs"
        subtitle="Empowering your child to be a lifetime learner"
        teddyImage="/teddy-pencil.png"
        backgroundImage="/hero-section-bg.png"
      />

      <Section id="infant" className="bg-gradient-to-b from-cream to-peach/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal">
              Infant Program
            </h2>
            <p className="text-lg text-text-charcoal/80 font-semibold">
              Ages: 6 weeks – 18 months
            </p>
            <blockquote className="text-2xl italic text-accent-orange font-semibold border-l-4 border-accent-orange pl-4">
              "Play is our brain's favorite way of learning"
            </blockquote>
            <p className="text-text-charcoal/70 leading-relaxed">
              Our infant program provides a nurturing environment where your baby can explore and develop at their own pace. We focus on building trust, security, and early developmental milestones through loving care and engaging activities.
            </p>
            <div className="bg-white/80 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-text-charcoal text-xl mb-4">Daily Activities Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-peach mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Tummy Time for muscle development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-peach mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Floor Activities with age-appropriate toys</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-peach mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <span className="text-text-charcoal/70">Music & Rhythm Activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-peach mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Healthy Meals & Snacks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-peach mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span className="text-text-charcoal/70">Individualized Sleep Time</span>
                </li>
              </ul>
              <p className="text-text-charcoal/70 text-sm mt-4 italic">
                Parents receive daily updates through the HiMama app, including photos, videos, and developmental milestones.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] animate-float">
            <Image
              src="/teddy-love.png"
              alt="Infant care"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <Section id="toddlers" backgroundImage="/bg-teddy1.png">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] animate-float order-2 lg:order-1">
            <Image
              src="/teddy-blocks.png"
              alt="Toddler activities"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal">
              Toddler Program
            </h2>
            <p className="text-lg text-text-charcoal/80 font-semibold">
              Ages: 18 months – 36 months
            </p>
            <blockquote className="text-2xl italic text-accent-orange font-semibold border-l-4 border-accent-orange pl-4">
              "Don't fit in when you were born to stand out"
            </blockquote>
            <p className="text-text-charcoal/70 leading-relaxed">
              Our toddler program focuses on fostering independence, social skills, and communication. We support potty training and encourage exploration in a safe, structured environment.
            </p>
            <div className="bg-white/90 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-text-charcoal text-xl mb-4">Learning Activities:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                  <span className="text-text-charcoal/70">Manipulatives & Fine Motor Skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-text-charcoal/70">Puzzles & Blocks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <span className="text-text-charcoal/70">Music & Movement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-text-charcoal/70">Motor Play & Physical Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className="text-text-charcoal/70">Sensory Play & Exploration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-text-charcoal/70">Math & Science Foundations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Group Activities & Social Skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="preschool" className="bg-gradient-to-b from-lavender/10 to-gentle-green/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal">
              Preschool Program
            </h2>
            <p className="text-lg text-text-charcoal/80 font-semibold">
              Kindergarten Readiness
            </p>
            <blockquote className="text-2xl italic text-accent-orange font-semibold border-l-4 border-accent-orange pl-4">
              "Think and wonder...wonder and think"
            </blockquote>
            <p className="text-text-charcoal/70 leading-relaxed">
              Our preschool program follows Ohio Early Learning Standards and uses the Teaching Strategies curriculum. We provide weekly lesson plans that prepare children for kindergarten success while nurturing their natural curiosity and love of learning.
            </p>
            <div className="bg-white/90 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-text-charcoal text-xl mb-4">Curriculum Focus Areas:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gentle-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-text-charcoal/70">Math & Science Exploration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gentle-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-text-charcoal/70">Reading & Literacy Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gentle-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Social Studies & Technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gentle-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className="text-text-charcoal/70">Creative Arts & Expression</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gentle-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <span className="text-text-charcoal/70">Movement & Music</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gentle-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Social & Emotional Growth</span>
                </li>
              </ul>
              <p className="text-text-charcoal/70 text-sm mt-4 italic">
                Aligned with Ohio Early Learning Standards and Teaching Strategies curriculum
              </p>
            </div>
          </div>
          <div className="relative h-[400px] animate-float">
            <Image
              src="/teddy-reading.png"
              alt="Preschool learning"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <CTASection
        title="Find the Perfect Program for Your Child"
        description="Schedule a tour to learn more about our age-appropriate programs and meet our dedicated teachers."
        phone="(380) 999-8564"
      />
    </main>
  );
}
