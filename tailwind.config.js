/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        framework7: {
          primary: '#007aff',
          secondary: '#5856d6',
          success: '#34c759',
          warning: '#ff9500',
          danger: '#ff3b30',
          info: '#5ac8fa',
          light: '#f2f2f7',
          dark: '#1c1c1e'
        }
      }
    },
  },
  plugins: [],
} 