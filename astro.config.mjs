// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Важливо для SEO та абсолютних посилань
  site: 'https://bonus-portal.online',

  // Вивід як статичний сайт (найкращий варіант для такого порталу)
  output: 'static',

  // Налаштування Vite + Tailwind
  vite: {
    plugins: [tailwindcss()]
  },

  // Додаткові корисні налаштування
  trailingSlash: 'never',        // без слешу в кінці URL
  build: {
    format: 'directory'          // створює папки замість index.html
  }
});