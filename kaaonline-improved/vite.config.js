import { defineConfig } from 'vite'
export default defineConfig({
  base: './', // keep relative for GitHub Pages unless you customize
  build: { outDir: 'dist' }
})
