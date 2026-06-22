// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  compressHTML: true,
  prefetch: {
    prefetchAll: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});