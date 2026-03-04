import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'About Us | KIDDIECARE Center',
  description: 'More than just a daycare...we are a learning center dedicated to providing quality care and education in a safe, nurturing environment.',
};

export default function About() {
  return (
    <main>
      <Hero
        title="About Us"
        subtitle="More than just a daycare...we are a learning center"
        teddyImage="/teddy-reading.png"
        backgroundImage="/hero-section-bg.png"
        phone="(380) 999-8564"
      />

      <Section className="bg-gradient-to-b from-cream to-sky-blue/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
              Our Philosophy
            </h2>
          </div>

          <Card className="bg-white/90">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4">
              Safe & Secure Environment
            </h3>
            <p className="text-text-charcoal/70 leading-relaxed">
              We provide a safe and secure environment where children can explore, learn, and grow. Our facility is designed with children's safety and comfort in mind, creating a nurturing space that feels like a home away from home.
            </p>
          </Card>

          <Card className="bg-white/90">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4">
              Partnership Between Home and School
            </h3>
            <p className="text-text-charcoal/70 leading-relaxed">
              We believe in building strong partnerships with families. Open communication and collaboration between parents and teachers ensure that each child receives consistent support and care both at home and at our learning center.
            </p>
          </Card>

          <Card className="bg-white/90">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4">
              Child-Oriented Learning
            </h3>
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              Our approach is child-oriented rather than teacher-directed. We maintain an open classroom environment with planned activities and free choice opportunities after lessons, allowing children to learn at their own pace while developing independence and decision-making skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Pre-Math Activities
                </p>
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Science & Nature Exploration
                </p>
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Dramatic Play
                </p>
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Creative Arts & Crafts
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  Music & Movement
                </p>
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Language & Literacy
                </p>
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Physical Development
                </p>
                <p className="text-text-charcoal/80 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Social-Emotional Learning
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section backgroundImage="/bg-teddy1.png">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-8 text-center">
            Our Staff
          </h2>
          <Card className="bg-white/95">
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              All staff members are experienced and trained in early childhood education. We maintain the highest standards of professionalism and care:
            </p>
            <ul className="space-y-3 text-text-charcoal/70">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comprehensive background checks for all staff members</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Drug testing to ensure a safe environment</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Regular in-service training and professional development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CPR and First Aid certified</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Passionate about early childhood education and development</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-lavender/10 to-gentle-green/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-8 text-center">
            Child Safety & Health
          </h2>
          <Card className="bg-white/95">
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              A major responsibility of our staff is to ensure the health and safety of all children in our care. We have comprehensive protocols in place:
            </p>
            <ul className="space-y-3 text-text-charcoal/70 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Special messages and medication administration procedures</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>HiMama app for real-time updates and parent communication</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Enhanced cleaning and sanitization routines</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>COVID-19 safety protocols and procedures</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-sky-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Detailed health and safety information provided at enrollment</span>
              </li>
            </ul>
            <p className="text-text-charcoal/70 leading-relaxed italic">
              More detailed information about our health and safety policies will be provided during the enrollment process.
            </p>
          </Card>
        </div>
      </Section>

      <CTASection
        title="Ready to Learn More?"
        description="Schedule a tour to see our facility and meet our amazing staff."
        phone="(380) 999-8564"
      />
    </main>
  );
}
