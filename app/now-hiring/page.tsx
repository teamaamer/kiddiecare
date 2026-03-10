'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { useState } from 'react';

export default function NowHiring() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and contact you soon.');
    setFormData({ name: '', email: '', phone: '', role: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <Hero
        title="Now Hiring"
        subtitle="Join our dedicated team of educators"
        teddyImage="/teddy-pencil.png"
        backgroundImage="/hero-section-bg.png"
      />

      <Section className="bg-gradient-to-b from-cream to-lavender/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-6">
              Shape the Future with KIDDIECARE
            </h2>
            <p className="text-lg text-text-charcoal/70 leading-relaxed">
              At KIDDIECARE Center, our team is dedicated to shaping the futures of our children. We believe that every child deserves the best possible start in life, and we're looking for passionate educators to join our family.
            </p>
          </div>

          <Card className="bg-white/90">
            <h3 className="text-2xl font-bold text-text-charcoal mb-4">
              Why Work at KIDDIECARE?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-accent-orange mr-3 text-xl">✓</span>
                <span className="text-text-charcoal/70">Supportive, collaborative work environment</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-orange mr-3 text-xl">✓</span>
                <span className="text-text-charcoal/70">Competitive compensation and benefits</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-orange mr-3 text-xl">✓</span>
                <span className="text-text-charcoal/70">Professional development opportunities</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-orange mr-3 text-xl">✓</span>
                <span className="text-text-charcoal/70">Make a real difference in children's lives</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-orange mr-3 text-xl">✓</span>
                <span className="text-text-charcoal/70">Modern facilities and resources</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-orange mr-3 text-xl">✓</span>
                <span className="text-text-charcoal/70">Positive, nurturing team culture</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section backgroundImage="/bg-teddy1.png">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-8 text-center">
            Current Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white/95">
              <h3 className="text-2xl font-bold text-text-charcoal mb-4">
                👩‍🏫 Preschool Teacher
              </h3>
              <div className="space-y-3 text-text-charcoal/70">
                <p className="font-semibold text-text-charcoal">Responsibilities:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Plan and implement age-appropriate curriculum</li>
                  <li>• Create a nurturing learning environment</li>
                  <li>• Communicate with parents and families</li>
                  <li>• Monitor child development and progress</li>
                  <li>• Maintain classroom safety and organization</li>
                </ul>
                <p className="font-semibold text-text-charcoal mt-4">Qualifications:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Early Childhood Education degree or equivalent</li>
                  <li>• Experience with young children</li>
                  <li>• CPR and First Aid certified (or willing to obtain)</li>
                  <li>• Pass background check and drug screening</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white/95">
              <h3 className="text-2xl font-bold text-text-charcoal mb-4">
                💼 Office Assistant
              </h3>
              <div className="space-y-3 text-text-charcoal/70">
                <p className="font-semibold text-text-charcoal">Responsibilities:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Manage front desk and greet families</li>
                  <li>• Handle enrollment and administrative tasks</li>
                  <li>• Maintain records and documentation</li>
                  <li>• Assist with parent communication</li>
                  <li>• Support center operations and staff</li>
                </ul>
                <p className="font-semibold text-text-charcoal mt-4">Qualifications:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Strong organizational and communication skills</li>
                  <li>• Proficiency with office software and technology</li>
                  <li>• Customer service experience preferred</li>
                  <li>• Pass background check and drug screening</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-peach/10 to-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-charcoal mb-8 text-center">
            Apply Online
          </h2>

          <Card className="bg-white/95">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-charcoal font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors"
                  placeholder="Your full name"
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
                  placeholder="your.email@example.com"
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
                <label htmlFor="role" className="block text-text-charcoal font-semibold mb-2">
                  Position Applying For *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors"
                >
                  <option value="">Select a position</option>
                  <option value="preschool-teacher">Preschool Teacher</option>
                  <option value="office-assistant">Office Assistant</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-charcoal font-semibold mb-2">
                  Tell Us About Yourself *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-peach/30 focus:border-accent-orange focus:outline-none transition-colors resize-none"
                  placeholder="Share your experience, qualifications, and why you'd like to join our team..."
                />
              </div>

              <div className="bg-sky-blue/10 rounded-2xl p-4">
                <p className="text-text-charcoal/70 text-sm">
                  📎 <strong>Resume Upload:</strong> Please email your resume to{' '}
                  <a href="mailto:kiddieohio@gmail.com" className="text-accent-orange hover:underline">
                    kiddieohio@gmail.com
                  </a>{' '}
                  along with your application.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Submit Application
              </button>
            </form>
          </Card>
        </div>
      </Section>
    </main>
  );
}
