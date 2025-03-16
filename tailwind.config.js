/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'Menlo', 'monospace'],
        heading: ['Source Code Pro', 'IBM Plex Mono', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        'neon-green': '#00ff00', // ✅ Now Tailwind recognizes bg-neon-green
        'dark-bg': '#0a0a0a',
      },
      screens: {
        smaller: { max: "500px" },
        "custom-lg": "1024px",
      },
    },
  },
  
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0px 0px 15px #39ff14',
        },
        '.hover-text-glow:hover': {
          'text-shadow': '0px 0px 15px #39ff14',
        },
      });
    },
  ],
};
