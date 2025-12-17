/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#ec4899', // Pink 500
        secondary: '#d946ef', // Fuchsia 500
        dark: '#0f0518', // Deep Violet Black
        surface: '#1a0b2e', // Deep Purple
      }
    },
  },
  plugins: [],
}
