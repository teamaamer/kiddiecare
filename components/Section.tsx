import Image from 'next/image';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  id?: string;
}

export default function Section({
  children,
  className = '',
  backgroundImage,
  backgroundColor,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Section background"
            fill
            className="object-cover"
          />
        </div>
      )}
      {backgroundColor && (
        <div className={`absolute inset-0 z-0 ${backgroundColor}`}></div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
