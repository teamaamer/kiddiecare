import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Virtual Tour | KIDDIECARE Center',
  description: 'Take a virtual tour of our facility from the comfort of your home. Explore our classrooms, play areas, and learning spaces.',
};

export default function Tour3D() {
  return (
    <main>
      <Hero
        title="Virtual Tour"
        subtitle="Explore our facility from the comfort of your home"
        teddyImage="/teddy-love.png"
        backgroundImage="/hero-section-bg.png"
      />

      <Section className="bg-gradient-to-b from-cream to-sky-blue/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
              Welcome to KIDDIECARE Center
            </h2>
            <p className="text-lg text-text-charcoal/70 leading-relaxed mb-8">
              In order to keep our children healthy and safe, we are offering a virtual tour of our facility. This allows you to explore our learning center, see our classrooms, and get a feel for our warm and welcoming environment—all from the comfort of your home.
            </p>
          </div>

          <Card className="bg-white/90">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <video 
                controls 
                className="w-full h-full"
                poster="/teddy-love.png"
              >
                <source src="/tour-video.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-text-charcoal/70 text-sm text-center mt-4">
              Take a virtual walkthrough of our KIDDIECARE Center facility
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-peach/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Tour Our Classrooms
              </h3>
              <p className="text-text-charcoal/70">
                Explore our bright, spacious classrooms designed for different age groups, each equipped with age-appropriate learning materials and play areas.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-sky-blue/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Creative Spaces
              </h3>
              <p className="text-text-charcoal/70">
                See our dedicated art and activity areas where children explore creativity through hands-on projects and imaginative play.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gentle-green/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play Areas
              </h3>
              <p className="text-text-charcoal/70">
                View our safe indoor and outdoor play spaces designed to promote physical development and active learning.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-lavender/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Safety Features
              </h3>
              <p className="text-text-charcoal/70">
                Discover our security measures and safety features that keep your child protected in a nurturing environment.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundImage="/bg-teddy1.png">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95">
            <h2 className="text-3xl font-bold text-text-charcoal mb-6 text-center">
              What You'll See on the Tour
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Infant & Toddler Rooms</h4>
                  <p className="text-text-charcoal/70">
                    Cozy, safe spaces designed for our youngest learners with age-appropriate toys and comfortable rest areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Preschool Classrooms</h4>
                  <p className="text-text-charcoal/70">
                    Engaging learning environments with literacy centers, STEM stations, and creative play areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">School-Age Areas</h4>
                  <p className="text-text-charcoal/70">
                    Dedicated spaces for homework, enrichment activities, and recreational fun for older children.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Outdoor Play Spaces</h4>
                  <p className="text-text-charcoal/70">
                    Secure outdoor areas with age-appropriate equipment for physical activity and outdoor learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Common Areas</h4>
                  <p className="text-text-charcoal/70">
                    Welcoming reception area, parent communication boards, and family-friendly spaces.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-lavender/10 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
            Questions About Our Facility?
          </h2>
          <p className="text-lg text-text-charcoal/70 mb-8">
            While our virtual tour gives you a great overview, nothing beats seeing our center in person. Please contact us with any questions or to schedule an in-person visit.
          </p>
        </div>
      </Section>

      <CTASection
        title="Ready to Visit in Person?"
        description="Schedule a tour to meet our staff, see our programs in action, and experience the KIDDIECARE difference."
        phone="(380) 999-8564"
      />
    </main>
  );
}
