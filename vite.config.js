import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www');
export default async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');
  const sveltePreprocess = (await import('svelte-preprocess')).default;
  
  return defineConfig({
    plugins: [
      svelte({
        preprocess: sveltePreprocess({
          typescript: true,
          postcss: true,
        }),
      }),
    ],
    root: SRC_DIR,
    base: '',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
    },
  });
}
