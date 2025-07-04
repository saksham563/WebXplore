import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Frontend development server port
    proxy: {
      '/api': {
        target: 'http://localhost:5001/', // Replace with your backend server's port
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for assets like images and fonts
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});