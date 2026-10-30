// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Adresse temporaire : à remplacer par https://dorianlc.fr une fois le domaine acheté.
  site: 'https://dorianlc.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
