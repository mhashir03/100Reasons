/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel notebook theme colors
        primary: "#f8a5c2", // soft pink
        secondary: "#c3aed6", // lavender
        accent: "#a6d6bf", // mint green
        handwritten: "#5b5b5b", // charcoal for text
        paper: "#fff9f0", // warm cream paper
        background: "#faf3e0", // light cream background
        highlight: "#f9d8d6", // peach highlight
        border: "#e5cece", // soft pink border
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        cursive: ['var(--font-cursive)'],
        handwritten: ['var(--font-handwritten)'],
      },
      boxShadow: {
        'notebook': '2px 2px 5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(229, 206, 206, 0.5)',
        'paper': '0 1px 3px rgba(0, 0, 0, 0.05), 0 2px 5px rgba(0, 0, 0, 0.03)',
        'note': '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'notebook-lines': 'repeating-linear-gradient(#fff9f0, #fff9f0 23px, #e5e5e5 24px)',
        'notebook-dots': 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)',
        'notebook-grid': 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
      },
      animation: {
        'float': 'floating 3s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}; 