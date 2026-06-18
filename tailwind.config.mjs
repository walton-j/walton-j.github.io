import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#203764', navy2: '#2F4D87', cream: '#FAF6EF', paper: '#F4EFE7',
        gold: '#A48A63', goldLight: '#C4AE8A', brown: '#5C4832', border: '#D7D0C8',
        ink: '#2C2C2C', muted: '#6B625A'
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: { site: '1280px', prose: '760px' },
      spacing: {
        pageX: 'clamp(1.25rem, 4vw, 3rem)',
        sectionY: 'clamp(2.5rem, 6vw, 5rem)',
        cardPad: 'clamp(1.375rem, 2.5vw, 2rem)',
        gridGap: 'clamp(1.25rem, 3vw, 2rem)'
      },
      boxShadow: { card: '0 1px 2px rgba(32,55,100,.04)' }
    }
  },
  plugins: []
};
