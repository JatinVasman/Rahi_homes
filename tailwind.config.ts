import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#F5F1EA',
          DEFAULT: '#F5F1EA',
        },
        muted: {
          red: '#B23A3A',
        },
        brown: {
          light: '#C8B8A8',
          DEFAULT: '#8B7355',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
