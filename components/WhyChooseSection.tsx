import Card from './Card';
import Image from 'next/image';

export default function WhyChooseSection() {
  return (
    <>
      <div className="text-center mb-8">
        <span className="inline-block px-5 py-2 rounded-full bg-accent-orange/20 text-accent-orange font-semibold text-sm mb-4">
          Our Commitment
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          Why Choose KIDDIECARE
        </h2>
        <p className="text-lg text-text-charcoal/70 max-w-2xl mx-auto">
          Discover what makes us the perfect choice for your child's early education journey
        </p>
      </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left: Stacked cards */}
        <div className="space-y-4">
          <Card className="bg-white/95 px-4 py-6">
            <h3 className="text-xl font-bold text-accent-orange mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Critical Early Years
            </h3>
            <p className="text-text-charcoal/80 text-sm leading-relaxed">
              We guide children ages 6 weeks to 5 years through their most critical developmental years with age-appropriate learning experiences.
            </p>
          </Card>

          <Card className="bg-white/95 px-4 py-6">
            <h3 className="text-xl font-bold text-accent-orange mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learning Through Play
            </h3>
            <p className="text-text-charcoal/80 text-sm leading-relaxed">
              Every day children experience high-quality education loaded with fun activities in a safe and caring environment.
            </p>
          </Card>

          <Card className="bg-white/95 px-4 py-6">
            <h3 className="text-xl font-bold text-accent-orange mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Experienced Educators
            </h3>
            <p className="text-text-charcoal/80 text-sm leading-relaxed">
              Our talented and experienced teachers are passionate about encouraging feelings of confidence and achievement so children love to learn.
            </p>
          </Card>
        </div>

        {/* Right: Card */}
        <div className="space-y-4">
          <Card className="bg-white/95 px-4 py-6">
            <h3 className="text-xl font-bold text-accent-orange mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Your Peace of Mind
            </h3>
            <p className="text-text-charcoal/80 text-sm leading-relaxed">
              Join the KIDDIECARE family, where everything is centered around your child's success and your trust and peace of mind.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
