import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: { tsconfigPath: 'src/tsconfig.json' } }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: false,
  },
});
