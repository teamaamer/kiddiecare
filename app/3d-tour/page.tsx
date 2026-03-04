import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: '3D Virtual Tour | KIDDIECARE Center',
  description: 'Take a virtual tour of our facility from the comfort of your home. Explore our classrooms, play areas, and learning spaces.',
};

export default function Tour3D() {
  return (
    <main>
      <Hero
        title="3-D Virtual Tour"
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
              In order to keep our children healthy and safe, we are offering a 3-D virtual tour of our facility. This allows you to explore our learning center, see our classrooms, and get a feel for our warm and welcoming environment—all from the comfort of your home.
            </p>
          </div>

          <Card className="bg-white/90">
            <div className="aspect-video bg-gradient-to-br from-peach/20 to-lavender/20 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-center space-y-4">
                <div className="text-6xl">🏛️</div>
                <p className="text-text-charcoal/70 font-semibold px-8">
                  3D Virtual Tour Embed Placeholder
                </p>
                <p className="text-text-charcoal/60 text-sm px-8">
                  Replace this section with your actual 3D tour link or embed code
                </p>
              </div>
            </div>
            <p className="text-text-charcoal/70 text-sm italic text-center">
              Note: Contact us to receive the link to our interactive 3D virtual tour
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-peach/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3">🏫 Tour Our Classrooms</h3>
              <p className="text-text-charcoal/70">
                Explore our bright, spacious classrooms designed for different age groups, each equipped with age-appropriate learning materials and play areas.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-sky-blue/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3">🎨 Creative Spaces</h3>
              <p className="text-text-charcoal/70">
                See our dedicated art and activity areas where children explore creativity through hands-on projects and imaginative play.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gentle-green/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3">🏃 Play Areas</h3>
              <p className="text-text-charcoal/70">
                View our safe indoor and outdoor play spaces designed to promote physical development and active learning.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-lavender/20 to-white">
              <h3 className="text-xl font-bold text-text-charcoal mb-3">🔒 Safety Features</h3>
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
                <span className="text-accent-orange mr-4 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Infant & Toddler Rooms</h4>
                  <p className="text-text-charcoal/70">
                    Cozy, safe spaces designed for our youngest learners with age-appropriate toys and comfortable rest areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent-orange mr-4 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Preschool Classrooms</h4>
                  <p className="text-text-charcoal/70">
                    Engaging learning environments with literacy centers, STEM stations, and creative play areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent-orange mr-4 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">School-Age Areas</h4>
                  <p className="text-text-charcoal/70">
                    Dedicated spaces for homework, enrichment activities, and recreational fun for older children.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent-orange mr-4 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-text-charcoal mb-1">Outdoor Play Spaces</h4>
                  <p className="text-text-charcoal/70">
                    Secure outdoor areas with age-appropriate equipment for physical activity and outdoor learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-accent-orange mr-4 text-2xl">✓</span>
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
