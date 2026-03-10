import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';

export default function ProgramsSection() {
  return (
    <>
      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-sky-blue/30 text-sky-blue font-semibold text-sm mb-4">
          Age-Appropriate Learning
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          Our Programs
        </h2>
        <p className="text-lg text-text-charcoal/70 max-w-2xl mx-auto">
          Age-appropriate learning experiences designed to nurture your child's growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <Link href="/programs#infant" className="group">
          <Card className="bg-white/95 hover:shadow-2xl transition-all duration-300 h-full">
            <div className="relative h-40 mb-4 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-3xl overflow-hidden">
              <Image
                src="/teddy-love.png"
                alt="Infant Program"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-peach flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal group-hover:text-accent-orange transition-colors">
                Infant Program
              </h3>
            </div>
            <p className="text-sm font-semibold text-peach mb-3">Ages: 6 weeks – 18 months</p>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Nurturing environment focused on building trust, security, and early developmental milestones through loving care.
            </p>
          </Card>
        </Link>

        <Link href="/programs#toddlers" className="group">
          <Card className="bg-white/95 hover:shadow-2xl transition-all duration-300 h-full">
            <div className="relative h-40 mb-4 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-3xl overflow-hidden">
              <Image
                src="/teddy-blocks.png"
                alt="Toddler Program"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-sky-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal group-hover:text-accent-orange transition-colors">
                Toddler Program
              </h3>
            </div>
            <p className="text-sm font-semibold text-sky-blue mb-3">Ages: 18 months – 36 months</p>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Fostering independence, social skills, and communication in a safe, structured environment with potty training support.
            </p>
          </Card>
        </Link>

        <Link href="/programs#preschool" className="group">
          <Card className="bg-white/95 hover:shadow-2xl transition-all duration-300 h-full">
            <div className="relative h-40 mb-4 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-3xl overflow-hidden">
              <Image
                src="/teddy-reading.png"
                alt="Preschool Program"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-gentle-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal group-hover:text-accent-orange transition-colors">
                Preschool Program
              </h3>
            </div>
            <p className="text-sm font-semibold text-gentle-green mb-3">Kindergarten Readiness</p>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Comprehensive curriculum following Ohio Early Learning Standards, preparing children for kindergarten success.
            </p>
          </Card>
        </Link>
      </div>
    </>
  );
}
