/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#000000',
        accent: '#1A1A1A',
        'accent-light': '#2A2A2A'
      },
      fontFamily: {
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};