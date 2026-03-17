import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata = {
  title: 'Location | KIDDIECARE Center',
  description: 'Find KIDDIECARE Center at 3600 Main St, Hilliard, OH 43026. Get directions and contact information.',
};

export default function Location() {
  return (
    <main>
      <Hero
        title="Our Location"
        subtitle="Visit us at KIDDIECARE Center"
        teddyImage="/teddy-love.png"
        backgroundImage="/hero-section-bg.png"
      />

      <Section className="bg-gradient-to-b from-cream to-sky-blue/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-white/95">
                <h2 className="text-3xl font-bold text-text-charcoal mb-6">
                  Visit Us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-text-charcoal mb-1">Address</p>
                      <p className="text-text-charcoal/70">3600 Main St</p>
                      <p className="text-text-charcoal/70">Hilliard, OH 43026</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-text-charcoal mb-1">Phone</p>
                      <a
                        href="tel:3809998564"
                        className="text-text-charcoal/70 hover:text-accent-orange transition-colors"
                      >
                        (380) 999-8564
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-text-charcoal mb-1">Email</p>
                      <a
                        href="mailto:kiddieohio@gmail.com"
                        className="text-text-charcoal/70 hover:text-accent-orange transition-colors"
                      >
                        kiddieohio@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-text-charcoal mb-1">Hours</p>
                      <p className="text-text-charcoal/70">Monday - Friday: 6:30 AM - 6:00 PM</p>
                      <p className="text-text-charcoal/70 text-sm mt-1">Closed on weekends and major holidays</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3600+Main+St,+Hilliard,+OH+43026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 rounded-full bg-accent-orange text-white font-semibold hover:bg-accent-orange/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get Directions
                </a>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/95 p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.8847!2d-83.1583!3d39.9989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b3c3c3c3%3A0x1234567890abcdef!2s3600%20Main%20St%2C%20Hilliard%2C%20OH%2043026!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>
              </Card>

              <Card className="bg-gradient-to-br from-peach/20 to-lavender/20">
                <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Visit
                </h3>
                <p className="text-text-charcoal/70 mb-4">
                  We welcome you to visit our facility! Schedule a tour to see our classrooms, meet our teachers, and experience the KIDDIECARE difference.
                </p>
                <a
                  href="/#contact"
                  className="inline-block px-6 py-3 rounded-full bg-sky-blue/40 text-text-charcoal font-semibold hover:bg-sky-blue/60 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </a>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
