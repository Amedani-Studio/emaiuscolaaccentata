import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://emaiuscolaaccentata.org',
    integrations: [sitemap()],
    prefetch: true,
});
