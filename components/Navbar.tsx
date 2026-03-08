'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  
  useEffect(() => {
    // Check for gallery fullscreen lightbox
    const checkFullscreen = () => {
      const lightbox = document.querySelector('[data-lightbox="true"]');
      setIsFullscreenOpen(!!lightbox);
    };
    
    const interval = setInterval(checkFullscreen, 100);
    
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROGRAMS', href: '/programs' },
    { name: 'ACADEMIC ENRICHMENT', href: '/academic-enrichment' },
    { name: 'RESOURCES', href: '/resources' },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-md transition-opacity duration-200 ${isFullscreenOpen ? 'opacity-0 pointer-events-none' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/kiddie-logo.png" 
              alt="KIDDIECARE Center Logo" 
              width={120} 
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-text-charcoal hover:text-accent-orange transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-accent-orange text-white font-semibold text-sm hover:bg-accent-orange/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-text-charcoal hover:bg-peach/30 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-cream border-t border-peach/30">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-2xl text-text-charcoal font-semibold hover:bg-peach/30 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-2xl bg-accent-orange text-white font-semibold text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
