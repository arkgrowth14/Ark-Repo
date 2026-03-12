import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // ADD THIS

export default defineConfig({
  site: 'https://arkgrowth14.github.io',
  base: '/Ark-Repo',
  integrations: [
    tailwind(), 
    react() // ADD THIS
  ],
});
