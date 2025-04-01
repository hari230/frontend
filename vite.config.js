import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base:'https://hari230.github.io/frontend/',
  build: {
    outDir: 'build',  // Set the output directory to 'build'
  },
});
