import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: process.env.NODE_ENV === 'production' ? '/the-andrew-times-games/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});