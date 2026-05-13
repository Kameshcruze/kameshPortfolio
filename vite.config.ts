import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // 1. ADD BASE PATH: 
    // Use './' for relative paths so it works on any subdirectory (like GitHub Pages)
    base: './', 
    
    plugins: [react(), tailwindcss()],
    define: {
      // 2. VITE CONVENTION:
      // While process.env works, Vite usually prefers import.meta.env
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    // 3. BUILD OUTPUT:
    // Ensure the build output is standard for deployment services
    build: {
      outDir: 'dist',
    }
  };
});
