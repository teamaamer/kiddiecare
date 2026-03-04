import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Parent Resources | KIDDIECARE Center',
  description: 'Helpful resources and information for parents including the HiMama app, enrollment details, and health & safety guidelines.',
};

export default function Resources() {
  return (
    <main>
      <Hero
        title="Parent Resources"
        subtitle="Everything you need to stay connected and informed"
        teddyImage="/teddy-laptop.png"
        backgroundImage="/hero-section-bg.png"
      />

      <Section className="bg-gradient-to-b from-cream to-lavender/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-white/90">
            <h2 className="text-3xl font-bold text-text-charcoal mb-4 flex items-center gap-3">
              <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              HiMama Parent Communication App
            </h2>
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              Stay connected with your child's day through our HiMama parent communication app. This powerful tool keeps you informed and engaged with real-time updates from your child's classroom.
            </p>
            <div className="bg-sky-blue/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-text-charcoal text-xl mb-4">App Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-charcoal/70">Direct messaging with your child's teachers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-charcoal/70">Daily activity reports and updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-charcoal/70">Photos and videos of your child's day</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-charcoal/70">Meal and nap time tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-charcoal/70">Developmental milestone tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-charcoal/70">Important announcements and reminders</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="bg-white/90">
            <h2 className="text-3xl font-bold text-text-charcoal mb-4 flex items-center gap-3">
              <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Enrollment Information
            </h2>
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              We make the enrollment process as smooth as possible for families. Our team is here to guide you through each step and answer any questions you may have.
            </p>
            <div className="bg-gentle-green/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-text-charcoal text-xl mb-4">What to Expect:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-orange mr-3 text-xl">1.</span>
                  <span className="text-text-charcoal/70">Schedule a tour of our facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-orange mr-3 text-xl">2.</span>
                  <span className="text-text-charcoal/70">Meet with our director to discuss your child's needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-orange mr-3 text-xl">3.</span>
                  <span className="text-text-charcoal/70">Complete enrollment paperwork and health forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-orange mr-3 text-xl">4.</span>
                  <span className="text-text-charcoal/70">Review policies, schedules, and tuition information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-orange mr-3 text-xl">5.</span>
                  <span className="text-text-charcoal/70">Plan your child's first day and transition schedule</span>
                </li>
              </ul>
              <p className="text-text-charcoal/70 text-sm mt-4 italic">
                Detailed enrollment information, including required documents and health forms, will be provided during your tour and consultation.
              </p>
            </div>
          </Card>

          <Card className="bg-white/90">
            <h2 className="text-3xl font-bold text-text-charcoal mb-4 flex items-center gap-3">
              <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Health & Safety
            </h2>
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              The health and safety of your child is our top priority. We maintain strict protocols and procedures to ensure a clean, safe, and healthy environment.
            </p>
            <div className="bg-peach/10 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-text-charcoal text-xl mb-4">Safety Measures:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Enhanced cleaning and sanitization protocols</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-text-charcoal/70">Health screening procedures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-text-charcoal/70">Medication administration policies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-text-charcoal/70">Emergency preparedness plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-text-charcoal/70">Nutrition and allergy management</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      <Section backgroundImage="/bg-teddy2.png">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-8 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/#contact" className="block">
              <Card className="bg-white/95 hover:bg-white transition-all cursor-pointer">
                <div className="mb-3 flex justify-center">
                  <svg className="w-12 h-12 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-charcoal mb-2">Schedule a Tour</h3>
                <p className="text-text-charcoal/70">
                  Visit our facility and see our programs in action
                </p>
              </Card>
            </a>

            <a href="/#contact" className="block">
              <Card className="bg-white/95 hover:bg-white transition-all cursor-pointer">
                <div className="mb-3 flex justify-center">
                  <svg className="w-12 h-12 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-charcoal mb-2">Contact Us</h3>
                <p className="text-text-charcoal/70">
                  Get in touch with questions or enrollment inquiries
                </p>
              </Card>
            </a>

            <Link href="/programs" className="block">
              <Card className="bg-white/95 hover:bg-white transition-all cursor-pointer">
                <div className="mb-3 flex justify-center">
                  <svg className="w-12 h-12 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-charcoal mb-2">View Programs</h3>
                <p className="text-text-charcoal/70">
                  Explore our age-appropriate curriculum and activities
                </p>
              </Card>
            </Link>

            <Link href="/3d-tour" className="block">
              <Card className="bg-white/95 hover:bg-white transition-all cursor-pointer">
                <div className="mb-3 flex justify-center">
                  <svg className="w-12 h-12 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-charcoal mb-2">3D Virtual Tour</h3>
                <p className="text-text-charcoal/70">
                  Explore our facility from the comfort of your home
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-lavender/10 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-text-charcoal/70 mb-8">
            Our team is here to help! Contact us anytime with questions about enrollment, programs, or our facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-4 rounded-full bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us
            </a>
            <a
              href="tel:3809998564"
              className="px-8 py-4 rounded-full bg-lavender/30 text-text-charcoal font-bold text-lg hover:bg-lavender/50 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (380) 999-8564
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
