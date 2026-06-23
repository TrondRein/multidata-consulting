/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0D3B66',
          orange: '#F4D35E',
          accent: '#EE964B',
        },
        neutral: {
          dark: '#0F172A',
          light: '#F8FAFC',
        }
      },
    },
  },
  plugins: [],
}
