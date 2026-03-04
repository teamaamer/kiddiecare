import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  phone?: string;
  backgroundColor?: string;
}

export default function CTASection({
  title,
  description,
  primaryText = 'Schedule A Tour',
  primaryLink = '/contact',
  secondaryText,
  secondaryLink,
  phone,
  backgroundColor = 'bg-gradient-to-r from-peach/30 via-lavender/30 to-sky-blue/30',
}: CTASectionProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-text-charcoal/70 mb-8">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryLink}
            className="px-8 py-4 rounded-full bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {primaryText}
          </Link>
          {secondaryText && secondaryLink && (
            <Link
              href={secondaryLink}
              className="px-8 py-4 rounded-full bg-gentle-green/30 text-text-charcoal font-bold text-lg hover:bg-gentle-green/50 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              {secondaryText}
            </Link>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="px-6 py-4 rounded-full bg-lavender/30 text-text-charcoal font-semibold text-lg hover:bg-lavender/50 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
