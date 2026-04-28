import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nsieteam.github.io',
  base: '/nsieteam-blog',
  integrations: [mdx(), tailwind()],
});
