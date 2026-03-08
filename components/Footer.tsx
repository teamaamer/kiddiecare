import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-lavender/20 to-peach/20 border-t border-peach/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/kiddie-logo.png" 
              alt="KIDDIECARE Center Logo" 
              width={150} 
              height={75}
              className="h-16 w-auto mb-4"
            />
            <p className="text-text-charcoal/80 text-sm mb-4">
              A safe and nurturing home away from home providing top quality care, education, and loads of fun.
            </p>
            <a
              href="tel:3809998564"
              className="text-accent-orange font-semibold hover:underline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (380) 999-8564
            </a>
          </div>

          <div>
            <h4 className="font-bold text-text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/academic-enrichment" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  Academic Enrichment
                </Link>
              </li>
              <li>
                <Link href="/3d-tour" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  3D Virtual Tour
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-charcoal mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link href="/now-hiring" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-text-charcoal/80 hover:text-accent-orange transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-charcoal mb-4">Get Started</h4>
            <p className="text-text-charcoal/80 text-sm mb-4">
              Join the Star Box family today and give your child the best start in life.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-accent-orange text-white font-semibold text-sm hover:bg-accent-orange/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Schedule a Tour
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-peach/30 text-center">
          <p className="text-text-charcoal/60 text-sm">
            © {new Date().getFullYear()} KIDDIECARE Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
