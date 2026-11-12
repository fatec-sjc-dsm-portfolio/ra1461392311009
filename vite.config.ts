import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages oficial da FATEC SJC: https://fatec-sjc-dsm-portfolio.github.io/ra1461392311009/
  base: command === 'build' ? '/ra1461392311009/' : '/',
  plugins: [react()],
}));
