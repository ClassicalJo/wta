import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@/main': path.resolve(__dirname, './src/main'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/renderer': path.resolve(__dirname, './src/renderer'),
    },
  },
  build: {
    rollupOptions: {
      external: ['sqlite3', 'typeorm'],
    },
  },
});
