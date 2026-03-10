'use client';

import Card from './Card';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-sky-blue/30 text-sky-blue font-semibold text-sm mb-4">
          Contact Us
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-text-charcoal/70 max-w-2xl mx-auto">
          Want to learn more about KIDDIECARE Center? We would love to talk with you and answer any questions you may have.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Card className="bg-white/90">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-text-charcoal">Phone</p>
                  <a
                    href="tel:3809998564"
                    className="text-text-charcoal/70 hover:text-accent-orange transition-colors"
                  >
                    (380) 999-8564
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-text-charcoal">Email</p>
                  <a
                    href="mailto:kiddieohio@gmail.com"
                    className="text-text-charcoal/70 hover:text-accent-orange transition-colors"
                  >
                    kiddieohio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-text-charcoal">Hours</p>
                  <p className="text-text-charcoal/70">Monday - Friday: 6:30 AM - 6:00 PM</p>
                  <p className="text-text-charcoal/70 text-sm mt-1">Closed on weekends and major holidays</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent-orange mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-text-charcoal">Location</p>
                  <p className="text-text-charcoal/70">KIDDIECARE Learning Center</p>
                  <p className="text-text-charcoal/70 text-sm">Contact us for address details</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-peach/20 to-lavender/20">
            <h3 className="text-xl font-bold text-text-charcoal mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Tour
            </h3>
            <p className="text-text-charcoal/70 mb-4">
              The best way to experience KIDDIECARE is to visit us in person! Schedule a tour to see our facility, meet our teachers, and watch our programs in action.
            </p>
            <p className="text-text-charcoal/70 text-sm mb-4">
              Fill out the contact form or call us directly to schedule your visit.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 px-4 py-2 rounded-full bg-accent-orange text-white font-semibold text-sm hover:bg-accent-orange/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Schedule Tour
              </button>
              <Link
                href="/3d-tour"
                className="flex-1 px-4 py-2 rounded-full bg-sky-blue/40 text-text-charcoal font-semibold text-sm hover:bg-sky-blue/60 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                View 3D Tour
              </Link>
            </div>
          </Card>
        </div>

        <div id="contact-form">
          <Card className="bg-white/95">
            <h3 className="text-2xl font-bold text-text-charcoal mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-text-charcoal font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-charcoal font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-text-charcoal font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-charcoal font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your child's age, your questions, or what you'd like to learn more about..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
