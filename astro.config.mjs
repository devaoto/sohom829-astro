import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sohom829.xyz/',
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
    sitemap(),
  ],
});
