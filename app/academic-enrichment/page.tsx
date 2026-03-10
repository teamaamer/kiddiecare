import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Academic Enrichment | KIDDIECARE Center',
  description: 'Enrichment programs and summer camps focused on the development and growth of your child.',
};

export default function AcademicEnrichment() {
  return (
    <main>
      <Hero
        title="Enrichment"
        subtitle="Development and growth of your child"
        teddyImage="/teddy-pencil.png"
        backgroundImage="/hero-section-bg.png"
      />

      <Section className="bg-gradient-to-b from-cream to-sky-blue/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
              Our Mission
            </h2>
          </div>

          <Card className="bg-white/90">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4">
              Building Strong Foundations
            </h3>
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              At KIDDIECARE Center, our mission is to provide high-quality academic enrichment that complements our core curriculum. We believe in developing the whole child through engaging activities that stimulate curiosity, creativity, and critical thinking.
            </p>
            <p className="text-text-charcoal/70 leading-relaxed">
              Our enrichment programs are designed to enhance your child's educational experience, offering opportunities to explore new interests, develop special skills, and build confidence in a supportive environment.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-peach/20 to-lavender/20">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Creative Arts
              </h3>
              <p className="text-text-charcoal/70">
                Explore artistic expression through painting, crafts, and creative projects that develop fine motor skills and imagination.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-sky-blue/20 to-gentle-green/20">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                STEM Learning
              </h3>
              <p className="text-text-charcoal/70">
                Hands-on science, technology, engineering, and math activities that encourage problem-solving and discovery.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gentle-green/20 to-peach/20">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Literacy Enhancement
              </h3>
              <p className="text-text-charcoal/70">
                Reading programs and storytelling activities that build vocabulary, comprehension, and a love for books.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-lavender/20 to-sky-blue/20">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Cultural Awareness
              </h3>
              <p className="text-text-charcoal/70">
                Bilingual education and multicultural activities that celebrate diversity and global understanding.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundImage="/bg-teddy1.png">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-8 text-center">
            Summer Camps
          </h2>

          <Card className="bg-white/95 mb-8">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4 flex items-center gap-3">
              <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Summer Adventure Awaits!
            </h3>
            <p className="text-text-charcoal/70 leading-relaxed mb-4">
              Our summer camp program is designed to keep children engaged, active, and learning throughout the summer months. We offer age-appropriate activities that combine fun with educational enrichment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-sky-blue/10 rounded-2xl p-4">
                <h4 className="font-bold text-text-charcoal mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Indoor Field Trips (Toddlers & Preschool)
                </h4>
                <p className="text-text-charcoal/70 text-sm">
                  Our younger campers enjoy safe, engaging indoor field trips to age-appropriate venues that spark curiosity and learning.
                </p>
              </div>

              <div className="bg-lavender/10 rounded-2xl p-4">
                <h4 className="font-bold text-text-charcoal mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Mandatory for Enrolled Children
                </h4>
                <p className="text-text-charcoal/70 text-sm">
                  Summer camp is mandatory for all enrolled children to ensure continuity of care and learning throughout the year.
                </p>
              </div>

              <div className="bg-accent-orange/10 rounded-2xl p-4">
                <h4 className="font-bold text-text-charcoal mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pricing & Calendars
                </h4>
                <p className="text-text-charcoal/70 text-sm">
                  Detailed pricing information and camp calendars are released in mid-March. Contact us for more information about upcoming summer programs.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/90 text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-text-charcoal mb-2">Themed Weeks</h4>
              <p className="text-text-charcoal/70 text-sm">
                Each week features a unique theme with special activities and learning opportunities.
              </p>
            </Card>

            <Card className="bg-white/90 text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h4 className="font-bold text-text-charcoal mb-2">Water Play</h4>
              <p className="text-text-charcoal/70 text-sm">
                Safe water activities to keep cool and have fun during hot summer days.
              </p>
            </Card>

            <Card className="bg-white/90 text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-12 h-12 text-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-bold text-text-charcoal mb-2">Arts & Crafts</h4>
              <p className="text-text-charcoal/70 text-sm">
                Creative projects that children can take home and share with their families.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-lavender/10 to-peach/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
            Technology Integration
          </h2>
          <Card className="bg-white/90">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex justify-center">
                <svg className="w-20 h-20 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-text-charcoal mb-3">
                  HiMama Parent App
                </h3>
                <p className="text-text-charcoal/70 leading-relaxed">
                  Stay connected with your child's enrichment activities through our HiMama app. Receive real-time updates, photos, and progress reports on your child's participation in special programs and summer camp activities.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <CTASection
        title="Enrich Your Child's Learning Experience"
        description="Learn more about our academic enrichment programs and summer camps."
        phone="(380) 999-8564"
      />
    </main>
  );
}
