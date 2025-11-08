import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: { DEFAULT: '1rem', lg: '2rem' } },
      colors: {
        gblue: { DEFAULT: '#1a73e8', hover: '#1765d1', dark: '#8ab4f8' },
        gsurface: { light: '#ffffff', dark: '#0f1115' }
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Noto Sans', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      borderRadius: { pill: '9999px' },
      boxShadow: {
        'google': '0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)',
        'google-lg': '0 4px 12px rgba(0,0,0,.08)'
      },
      animation: {
        'fade-up': 'fadeUp .5s ease forwards',
        'pop': 'pop .35s ease forwards',
        'slide-down': 'slideDown .18s ease forwards',
        'float': 'floatY 4s ease-in-out infinite',
        'ripple': 'ripple .6s ease-out'
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { from: { opacity: '0', transform: 'translateY(-6px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pop: { from: { opacity: '0', transform: 'scale(.96)' }, to: { opacity: '1', transform: 'scale(1)' } },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
        ripple: {
          '0%': { opacity: '.45', transform: 'translate(-50%, -50%) scale(.8)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(18)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config