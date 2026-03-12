import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arkgrowth14.github.io',
  base: '/Ark-Repo',
  integrations: [tailwind()],
});
