import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
    },
  },
  plugins: [react(), svgr()],
});
