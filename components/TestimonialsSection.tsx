'use client';

import Card from './Card';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    title: "Amazing Experience",
    quote: "Love this place. My kids do so well here and I trust the teachers completely. The curriculum is engaging and my children are always excited to go to school!",
    author: "Sarah M."
  },
  {
    title: "Best Decision Ever",
    quote: "KIDDIECARE has been a blessing for our family. The staff is caring, professional, and truly invested in each child's development. We couldn't be happier!",
    author: "Michael & Lisa T."
  },
  {
    title: "Like Family",
    quote: "The teachers at KIDDIECARE treat my daughter like their own. The bilingual program is fantastic and she's learning so much every day. Highly recommend!",
    author: "Carmen R."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-lavender/30 text-lavender font-semibold text-sm mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          What Our Families are Saying
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card
                  title={testimonial.title}
                  className="bg-white/90"
                >
                  <p className="text-text-charcoal/70 italic text-lg leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-accent-orange font-semibold text-right">- {testimonial.author}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-orange w-8' 
                  : 'bg-text-charcoal/30 hover:bg-text-charcoal/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
