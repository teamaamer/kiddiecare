# KIDDIECARE Center Website

A complete, production-ready childcare website built with Next.js, featuring soft watercolor teddy bear illustrations and pastel cloud/flower backgrounds. The site provides a warm, safe, nurturing, and playful experience that builds trust with parents.

## 🎨 Design Theme

- **Visual Style**: Soft watercolor backgrounds, flower meadow borders, clouds, sparkles, and teddy bear mascots
- **Color Palette**:
  - Background Cream: `#FFF7EF`
  - Pastel Peach: `#F7BFA8`
  - Sky Blue: `#A9D9F5`
  - Gentle Green: `#86B78B`
  - Lavender: `#C9B6F2`
  - Accent Orange: `#F4A261`
  - Text Charcoal: `#3B3A36`
- **Typography**:
  - Headings: Fredoka
  - Body: Nunito
- **Components**: Rounded corners (2xl/3xl), pill buttons, soft drop shadows, gentle animations

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Fredoka, Nunito)
- **Images**: Next.js Image Optimization
- **Animations**: CSS keyframes (float, fade-in-up)

## 📁 Project Structure

```
kiddiecare/
├── app/
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # HOME page
│   ├── about/page.tsx          # ABOUT page
│   ├── programs/page.tsx       # PROGRAMS page
│   ├── academic-enrichment/    # ACADEMIC ENRICHMENT page
│   ├── resources/page.tsx      # RESOURCES page
│   ├── 3d-tour/page.tsx        # 3D TOUR page
│   ├── now-hiring/page.tsx     # NOW HIRING page
│   └── contact/page.tsx        # CONTACT page
├── components/
│   ├── Navbar.tsx              # Sticky navigation with mobile menu
│   ├── Footer.tsx              # Footer with links
│   ├── Hero.tsx                # Hero section component
│   ├── Section.tsx             # Reusable section wrapper
│   ├── Card.tsx                # Card component
│   └── CTASection.tsx          # Call-to-action section
└── public/
    ├── hero-section-bg.png     # Hero background
    ├── bg-teddy1.png           # Section separator 1
    ├── bg-teddy2.png           # Section separator 2
    ├── teddy-love.png          # Welcome mascot
    ├── teddy-pencil.png        # Learning theme
    ├── teddy-reading.png       # Literacy section
    ├── teddy-blocks.png        # Toddler play
    └── teddy-laptop.png        # Parent resources
```

## 🌐 Pages Overview

1. **HOME** (`/`) - Hero with welcome message, feature tiles, 3D tour section, community section, testimonials
2. **ABOUT** (`/about`) - Philosophy, staff information, child safety protocols
3. **PROGRAMS** (`/programs`) - Infant, Toddler, Preschool, and School Age programs with detailed activities
4. **ACADEMIC ENRICHMENT** (`/academic-enrichment`) - Mission, enrichment programs, summer camps
5. **RESOURCES** (`/resources`) - HiMama app info, enrollment details, health & safety, quick links
6. **3D TOUR** (`/3d-tour`) - Virtual facility tour with placeholder for embed
7. **NOW HIRING** (`/now-hiring`) - Career opportunities with application form
8. **CONTACT** (`/contact`) - Contact form, FAQs, location information

## 🎯 Key Features

- ✅ Fully responsive (mobile-first design)
- ✅ SEO optimized with metadata and OpenGraph tags
- ✅ Accessible (semantic HTML, proper heading hierarchy, focus states)
- ✅ Smooth animations (gentle float, fade-in on scroll, hover effects)
- ✅ Sticky navigation with mobile drawer menu
- ✅ Reusable component architecture
- ✅ TypeScript for type safety
- ✅ Production-ready build

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Contact Information

- **Phone**: (380) 999-8564
- **Hours**: Monday - Friday, 6:30 AM - 6:00 PM

## 🎨 Customization

### Update Colors
Edit `/app/globals.css` to modify the color palette in the `:root` section.

### Add/Edit Content
Each page is self-contained in its respective folder under `/app`. Update the content directly in the page components.

### Replace 3D Tour
In `/app/3d-tour/page.tsx`, replace the placeholder with your actual 3D tour embed code.

## 📄 License

© 2024 KIDDIECARE Center. All rights reserved.
