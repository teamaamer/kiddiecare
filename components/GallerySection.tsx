'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { src: '/IMG_7704.jpeg', alt: 'KIDDIECARE facility - classroom view' },
  { src: '/IMG_7705.jpeg', alt: 'KIDDIECARE facility - learning area' },
  { src: '/IMG_7709.jpeg', alt: 'KIDDIECARE facility - play space' },
  { src: '/IMG_7710.jpeg', alt: 'KIDDIECARE facility - activity room' },
  { src: '/IMG_7711.jpeg', alt: 'KIDDIECARE facility - educational space' },
  { src: '/IMG_7712.jpeg', alt: 'KIDDIECARE facility - children area' },
  { src: '/IMG_7713.jpeg', alt: 'KIDDIECARE facility - learning center' },
  { src: '/IMG_7715.jpeg', alt: 'KIDDIECARE facility - classroom setup' },
  { src: '/IMG_7721.jpeg', alt: 'KIDDIECARE facility - play area' },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const imagesPerSlide = 3;
  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentImages = () => {
    const start = currentIndex * imagesPerSlide;
    return galleryImages.slice(start, start + imagesPerSlide);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-sky-blue/30 text-sky-blue font-semibold text-sm mb-4">
          Our Facility
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          See Our Learning Spaces
        </h2>
        <p className="text-lg text-text-charcoal/70 max-w-2xl mx-auto">
          Take a look inside our bright, safe, and welcoming facility designed for your child's growth and development
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getCurrentImages().map((image, index) => {
            const actualIndex = currentIndex * imagesPerSlide + index;
            return (
              <div
                key={actualIndex}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => setSelectedImageIndex(actualIndex)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold">View Fullscreen</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-text-charcoal rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous images"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-text-charcoal rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next images"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-accent-orange w-8'
                : 'bg-text-charcoal/30 hover:bg-text-charcoal/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          data-lightbox="true"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-orange transition-colors z-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-orange transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-orange transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
