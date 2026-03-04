import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  teddyImage?: string;
  phone?: string;
  label?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  teddyImage,
  phone,
  label,
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up -mt-16">
          {label && (
            <span className="inline-block px-5 py-2 rounded-full bg-lavender/40 text-text-charcoal font-semibold text-sm backdrop-blur-sm">
              {label}
            </span>
          )}
          
          {/* Mobile: Normal text header */}
          <div className="lg:hidden">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-accent-orange via-peach to-lavender bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
          </div>
          
          {/* Desktop: Curved SVG header */}
          <div className="hidden lg:block relative w-full max-w-2xl -mt-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-peach/20 via-lavender/20 to-sky-blue/20 rounded-[3rem] blur-2xl"></div>
            <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="curve" d="M 100,250 Q 400,50 700,250" fill="transparent" />
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#F4A261', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#F7BFA8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#C9B6F2', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <text className="font-fredoka font-bold" fontSize="72" fill="url(#textGradient)" textAnchor="middle">
                <textPath href="#curve" startOffset="50%">
                  {title}
                </textPath>
              </text>
            </svg>
          </div>
          
          {subtitle && (
            <h2 className="text-2xl sm:text-3xl text-text-charcoal/90 font-semibold leading-relaxed max-w-3xl">
              {subtitle}
            </h2>
          )}
          
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-accent-orange font-bold text-lg hover:bg-white hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="px-10 py-5 rounded-full bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-10 py-5 rounded-full bg-white/90 backdrop-blur-sm text-text-charcoal font-bold text-lg hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center border-2 border-sky-blue/30"
            >
              Schedule A Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
