import { config } from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';

config({ path: 'resources/data/.env' });

export default defineConfig({
  define: {
    'process.env.APP_MODE': JSON.stringify(process.env.APP_MODE),
  },
  resolve: {
    alias: {
      '@/main': path.resolve(__dirname, './src/main'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/renderer': path.resolve(__dirname, './src/renderer'),
      '@/resources': path.resolve(__dirname, './resources'),
    },
  },
});
