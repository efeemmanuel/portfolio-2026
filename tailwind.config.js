/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['-apple-system', 'BlinkMacSystemFont', '"SF Mono"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: '#ffffff',
        paper: '#000000',
        dim: '#555555',
        muted: '#888888',
        accent: '#000000',
        border: '#e5e5e5',
        surface: '#f5f5f5',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pulse2: 'pulse2 2.2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease forwards',
        scanline: 'scanline 4s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.4', transform: 'scale(.8)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
    },
  },
  plugins: [],
}
