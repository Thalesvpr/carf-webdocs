/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px' }],
        'display-md': ['45px', { lineHeight: '52px' }],
        'display-sm': ['36px', { lineHeight: '44px' }],
        'headline-lg': ['32px', { lineHeight: '40px' }],
        'headline-md': ['28px', { lineHeight: '36px' }],
        'headline-sm': ['24px', { lineHeight: '32px' }],
        'title-lg': ['22px', { lineHeight: '28px' }],
        'title-md': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        'title-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          container: 'hsl(var(--secondary-container))',
        },
        'on-secondary-container': 'hsl(var(--on-secondary-container))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          variant: 'hsl(var(--surface-variant))',
          'container-lowest': 'hsl(var(--surface-container-lowest))',
          'container-low': 'hsl(var(--surface-container-low))',
          container: 'hsl(var(--surface-container))',
          'container-high': 'hsl(var(--surface-container-high))',
          'container-highest': 'hsl(var(--surface-container-highest))',
        },
        'on-surface': {
          DEFAULT: 'hsl(var(--on-surface))',
          variant: 'hsl(var(--on-surface-variant))',
        },
        outline: {
          DEFAULT: 'hsl(var(--outline))',
          variant: 'hsl(var(--outline-variant))',
        },
        'inverse-surface': 'hsl(var(--inverse-surface))',
        'inverse-on-surface': 'hsl(var(--inverse-on-surface))',
        'inverse-primary': 'hsl(var(--inverse-primary))',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        component: '8px',
        md: '12px',
        lg: '16px',
        xl: '28px',
      },
      borderWidth: {
        component: '1px',
      },
    },
  },
  plugins: [],
}
