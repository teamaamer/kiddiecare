import Image from 'next/image';
import Link from 'next/link';

export default function ActivitiesSection() {
  return (
    <>
      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-peach/30 text-peach font-semibold text-sm mb-4">
          Enrichment Activities
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          Academic Enrichment
        </h2>
        <p className="text-lg text-text-charcoal/70 max-w-2xl mx-auto">
          Development and growth of your child through engaging activities
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Creative Arts */}
        <div className="bg-white/95 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/teddy-pencil.png"
              alt="Creative Arts"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 flex-shrink-0 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal">
                Creative Arts
              </h3>
            </div>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Explore artistic expression through painting, crafts, and creative projects that develop fine motor skills and imagination.
            </p>
          </div>
        </div>

        {/* STEM Learning */}
        <div className="bg-white/95 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/teddy-blocks.png"
              alt="STEM Learning"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 flex-shrink-0 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal">
                STEM Learning
              </h3>
            </div>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Hands-on science, technology, engineering, and math activities that encourage problem-solving and discovery.
            </p>
          </div>
        </div>

        {/* Literacy Enhancement */}
        <div className="bg-white/95 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/teddy-reading.png"
              alt="Literacy Enhancement"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 flex-shrink-0 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal">
                Literacy Enhancement
              </h3>
            </div>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Reading programs and storytelling activities that build vocabulary, comprehension, and a love for books.
            </p>
          </div>
        </div>

        {/* Cultural Awareness */}
        <div className="bg-white/95 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="relative h-48 w-full">
            <Image
              src="/teddy-laptop.png"
              alt="Cultural Awareness"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 flex-shrink-0 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-text-charcoal">
                Cultural Awareness
              </h3>
            </div>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Bilingual education and multicultural activities that celebrate diversity and global understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/academic-enrichment"
          className="inline-block px-8 py-4 rounded-full bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Explore Enrichment Programs
        </Link>
      </div>
    </>
  );
}
