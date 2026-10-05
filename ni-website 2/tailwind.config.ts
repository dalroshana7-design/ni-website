import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': {
          'primary': '#FFFFFF',
          'alt': '#F9F9F9',
          'accent': '#F5F5F5',
        },
        'text': {
          'primary': '#0A0A0A',
          'secondary': '#666666',
          'tertiary': '#999999',
        },
        'accent': {
          'primary': '#0F172A',
          'navy': '#0F172A',
          'dark': '#0A0E1A',
        },
        'border': '#E5E7EB',
      },
      fontFamily: {
        'sans': ['var(--font-geist-sans)'],
        'serif': ['var(--font-crimson-text)'],
        'mono': ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1-sm': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['36px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2-sm': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2-subhero': ['28px', { lineHeight: '1.3', fontWeight: '400' }],
        'h2-subhero-lg': ['32px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-sm': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-subsection': ['18px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.02em' }],
        'h4': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'nav': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['13px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      spacing: {
        '80': '80px',
        '120': '120px',
      },
      maxWidth: {
        'container': '1400px',
      },
    },
  },
  plugins: [],
}
export default config