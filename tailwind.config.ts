import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ──────────────────────────────────────────────
       * COLOR PALETTE
       * Soft pastel luxury feminine palette
       * ────────────────────────────────────────────── */
      colors: {
        primary: {
          light: '#FFD6E7',
          DEFAULT: '#FF6FAE',
          dark: '#D63384',
        },
        secondary: {
          light: '#E9D5FF',
          DEFAULT: '#CDB4FF',
          dark: '#A78BFA',
        },
        accent: {
          light: '#FFE8D6',
          DEFAULT: '#F7D9C4',
          dark: '#F0C4A8',
        },
        soft: {
          light: '#FFF9FC',
          DEFAULT: '#FFE9F3',
          dark: '#FFD6E7',
        },
        background: '#FFF9FC',
        deep: '#D63384',
      },

      /* ──────────────────────────────────────────────
       * FONTS
       * Playfair Display (headings), Plus Jakarta Sans (body),
       * Dancing Script (decorative subtitles)
       * ────────────────────────────────────────────── */
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },

      /* ──────────────────────────────────────────────
       * ANIMATION KEYFRAMES
       * GPU-accelerated transforms for 60fps
       * ────────────────────────────────────────────── */
      keyframes: {
        /* Slow floating motion for decorative shapes */
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(2deg)' },
          '66%': { transform: 'translateY(8px) rotate(-1deg)' },
        },
        /* Upward drift for particles */
        'float-up': {
          '0%': { transform: 'translateY(100%) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' },
        },
        /* Pulsing glow effect for borders/shadows — subtle */
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 6px rgba(255, 111, 174, 0.15)',
          },
          '50%': {
            boxShadow: '0 0 14px rgba(255, 111, 174, 0.3)',
          },
        },
        /* Shimmer sweep for buttons */
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        /* Organic blob morph for backgrounds */
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 40% 70% 60% 30%' },
          '75%': { borderRadius: '40% 30% 60% 50% / 60% 40% 70% 50%' },
        },
        /* Gentle wave motion for section dividers */
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0)' },
          '50%': { transform: 'translateX(-25%) translateZ(0)' },
          '100%': { transform: 'translateX(-50%) translateZ(0)' },
        },
        /* Gradient mesh background morph */
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        /* Icon bounce on hover */
        'icon-bounce': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(8deg) scale(1.1)' },
          '50%': { transform: 'rotate(-5deg) scale(1.05)' },
          '75%': { transform: 'rotate(3deg) scale(1.08)' },
        },
        /* Underline sweep from left to right */
        'underline-sweep': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        /* Gentle heartbeat for decorative hearts */
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.15' },
          '50%': { transform: 'scale(1.15)', opacity: '0.25' },
        },
        /* Ripple click effect */
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        /* Spinning for loading states */
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      /* ──────────────────────────────────────────────
       * ANIMATION UTILITIES
       * ────────────────────────────────────────────── */
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'float-slow': 'float 10s ease-in-out infinite 1s',
        'float-up': 'float-up 8s ease-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'blob-morph': 'blob-morph 8s ease-in-out infinite',
        'blob-morph-slow': 'blob-morph 12s ease-in-out infinite 4s',
        wave: 'wave 15s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'icon-bounce': 'icon-bounce 0.6s ease-in-out',
        'underline-sweep': 'underline-sweep 0.3s ease forwards',
        heartbeat: 'heartbeat 3s ease-in-out infinite',
        'heartbeat-delayed': 'heartbeat 3s ease-in-out infinite 1.5s',
        ripple: 'ripple 0.6s ease-out forwards',
        'spin-slow': 'spin-slow 3s linear infinite',
      },

      /* ──────────────────────────────────────────────
       * BACKGROUND SIZE for gradient animation
       * ────────────────────────────────────────────── */
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
export default config
