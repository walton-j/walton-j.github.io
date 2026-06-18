import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://walton-j.github.io',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })]
});
