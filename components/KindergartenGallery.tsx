'use client';

import Image from 'next/image';
import { useState } from 'react';
import Card from './Card';

export default function KindergartenGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/kindergarten${i + 1}.jpeg`,
    alt: `KIDDIECARE Kindergarten Interior ${i + 1}`,
  }));

  return (
    <>
      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-sky-blue/30 text-sky-blue font-semibold text-sm mb-4">
          Our Facility
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          Inside Our Center
        </h2>
        <p className="text-lg text-text-charcoal/70 max-w-2xl mx-auto">
          Take a look at our bright, safe, and welcoming learning spaces designed for your child's growth and happiness
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 p-0"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </Card>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent-orange transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent-orange transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
            }}
          >
            ‹
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent-orange transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
