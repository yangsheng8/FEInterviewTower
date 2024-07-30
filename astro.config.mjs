import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, './src');


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
  output: 'server',
  vite: {
    resolve: {
      alias: {
        '~': srcPath
      }
    }
  }
});