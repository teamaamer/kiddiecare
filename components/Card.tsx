import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  teddyImage?: string;
  link?: string;
  linkText?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  teddyImage,
  link,
  linkText,
  className = '',
}: CardProps) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      {teddyImage && (
        <div className="relative h-40 mb-6">
          <Image
            src={teddyImage}
            alt={title || 'Teddy illustration'}
            fill
            className="object-contain"
          />
        </div>
      )}
      {title && <h3 className="text-2xl font-bold text-text-charcoal mb-4">{title}</h3>}
      {description && (
        <p className="text-text-charcoal/70 leading-relaxed mb-4">
          {description}
        </p>
      )}
      {children}
      {link && linkText && (
        <Link
          href={link}
          className="inline-block mt-4 px-6 py-3 rounded-full bg-accent-orange text-white font-semibold hover:bg-accent-orange/90 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
