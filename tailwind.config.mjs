/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        youngSerif: ['"Young Serif"', 'serif'],
        outfit: ['"Outfit"', 'sans-serif']
      },
      colors: {
        Mypink: 'hsl(330, 100%, 98%)',
        headers: 'hsl(332, 51%, 32%)',
        Mybg: ' hsl(14, 45%, 36%)'
      }
    }
  },
  plugins: []
}
