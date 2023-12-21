const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        wider: '2560px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        brandonThin: ['var(--font-brandon-thin)', 'sans-serif'],
        brandonLight: ['var(--font-brandon-light)', 'sans-serif'],
        brandonReg: ['var(--font-brandon-reg)', 'sans-serif'],
        brandonMed: ['var(--font-brandon-med)', 'sans-serif'],
        brandonBld: ['var(--font-brandon-bld)', 'sans-serif']
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        hero: 'url(/images/home/bg-hero.png)',
        about: 'url(/images/home/bg-about.png)',
        mobileAbout:'url(/images/home/mobile/bg-about.png)',
        feature: 'url(/images/home/bg-feature.png)',
        mobileFeature:'url(/images/home/mobile/bg-feature.png)',
        service: 'url(/images/home/bg-service.png)',
        mobileService: 'url(/images/home/mobile/bg-service.png)',
        footer: 'url(/images/home/bg-contact.png)',
        mobileFooter: 'url(/images/home/mobile/bg-contact.png)',
        subtract: 'url(/svg/subtract.svg)'
      },
      screens: {
        ss: '320px',
        '2ss': '410px',
        xs: '425px',
        '2xs': '480px',
        sm: '600px',
        md: '768px',
        '2md': '850px',
        '3md': '991px',
        lg: '1024px',
        '2lg': '1199px',
        xl: '1280px',
        xxl: '1366px',
        '2xl': '1440px',
        '3xl': '1680px',
        wide: '1920px',
        wider: '2560px'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};
