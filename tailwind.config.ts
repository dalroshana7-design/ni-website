import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#FFFFFF',
        'bg-alt': '#F9FAFB',
        'bg-hover': '#F3F4F6',

        // Text
        'text-primary': '#0A0A0A',
        'text-secondary': '#666666',
        'text-tertiary': '#999999',
        'text-disabled': '#CCCCCC',

        // Accents & Structure
        'accent-primary': '#0F172A',
        'border': '#E5E7EB',

        // States
        'hover': '#0F172A',
        'active': '#0F172A',
        'focus': '#0F172A',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '120': '120px',
        '160': '160px',
      },
      fontFamily: {
        'sans': ['var(--font-geist-sans)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
      },
      fontSize: {
        'h1-hero': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1-hero-sm': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-section': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-section-sm': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-subsection': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-subsection-sm': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4-journey': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4-journey-sm': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5' }],
        'nav': ['14px', { lineHeight: '1', fontWeight: '500' }],
      },
      maxWidth: {
        'container': '1400px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '400ms',
        'slower': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
