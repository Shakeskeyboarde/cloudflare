import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import refresh from 'vite-plugin-refresh';

export default defineConfig((env) => ({
  plugins: [
    react(),
    refresh(),
    env.mode === 'production' && checker({ typescript: { tsconfigPath: 'src/tsconfig.json' } }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: false,
  },
}));
