# NI Personal Website

A thoughtfully designed personal editorial website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This is NI's personal website showcasing her journey, work, and thinking. The site is designed to be clean, editorial, and authentically represent her as a builder exploring AI, business, and digital products.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Data-Driven**: All content is easily configurable via data files
- **Accessible**: WCAG AA compliant with semantic HTML
- **SEO Optimized**: Structured data, Open Graph, sitemap, and robots.txt
- **Performance**: Optimized images, minimal animations, fast loading
- **Editorial Design**: Typography-focused, whitespace-driven, minimal visual distraction

## Project Structure

```
ni-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/
│   ├── work/
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── sections/          # Page sections
│   └── ui/                # UI components (Typography, etc.)
├── data/                  # Data files
│   ├── journey.ts         # Work history/journey (currently empty)
│   ├── currently.ts       # Currently module data
│   ├── projects.ts        # Projects data
│   └── site-metadata.ts   # SEO metadata
├── lib/                   # Utilities
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Updating Your Information

#### Contact Information

Edit `components/layout/Footer.tsx` and `components/sections/ContactCTA.tsx`:
- Email address
- LinkedIn profile
- GitHub profile

#### Journey Timeline

1. Open `data/journey.ts`
2. Add your verified work history entries in the format:

```typescript
export const journeyEntries: JourneyEntry[] = [
  {
    id: 'smart-home',
    year: 2018,
    title: 'Smart Home / IoT',
    description: 'Architecture, exploring business operations',
    location: 'China',
    industry: 'Technology',
    keySkills: ['operations', 'architecture']
  },
  // ... more entries
]
```

**Important**: Only add entries when you have verified the data. The Journey section will not render if the array is empty.

#### Currently Module

Edit `data/currently.ts`:

```typescript
export const currentlyData: CurrentlyData = {
  lastUpdated: '2026.09',
  learning: ['AI', 'Product Development', 'Next.js'],
  building: ['AI CYBER', 'Personal tools'],
  exploring: ['Independent work', 'AI × Business', 'Japan × Global']
}
```

#### Site Metadata

Edit `data/site-metadata.ts`:
- Update SEO titles and descriptions
- Add your LinkedIn and GitHub profiles
- Customize structured data

### Customizing Content

- **Hero Section**: `components/sections/HeroSection.tsx`
- **About Section**: `components/sections/AboutSection.tsx`
- **How I Work**: `components/sections/HowIWorkSection.tsx`
- **Contact CTA**: `components/sections/ContactCTA.tsx`

## Design System

### Colors

```
Primary Background:   #FFFFFF
Alternative BG:       #F9FAFB
Text Primary:         #0A0A0A
Text Secondary:       #666666
Text Tertiary:        #999999
Accent:               #0F172A (Deep Navy)
Border:               #E5E7EB
```

### Typography

- **Headings**: Geist Sans (600-700 weight)
- **Body**: Inter (400 weight)
- **Accent**: Crimson Text (serif, optional)

### Spacing Scale

- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px, 120px, 160px

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Development

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

The site is optimized for deployment on Vercel:

```bash
vercel deploy
```

Or connect your Git repository to Vercel for automatic deployments.

## Future Sections (Phase 2)

The following are planned for Phase 2:
- [ ] Thinking/Articles section with blog functionality
- [ ] Individual article pages
- [ ] Contact form
- [ ] Dark mode support
- [ ] Advanced animations

## Philosophy

This website embodies the following principles:

- **Authenticity**: Real content, no placeholders or fabricated achievements
- **Clarity**: Information is organized logically and is easy to scan
- **Restraint**: Design is minimal, typography-driven, whitespace is intentional
- **Accessibility**: WCAG AA compliant, semantic HTML throughout
- **Performance**: Fast loading, optimized images, minimal JavaScript

## Notes

- The website is data-driven. All journey, project, and metadata is stored in `/data/` files
- Journey entries will not render until verified data is provided
- No placeholder or example entries are displayed
- All contact information should be updated before going live
- Images should be optimized and placed in `/public/`

## License

© 2026 NI. All rights reserved.

## Support

For questions or issues, please refer to the component comments or review the Next.js documentation.
