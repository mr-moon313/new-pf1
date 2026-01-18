import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite Configuration
 * 
 * Optimized for:
 * - Three.js bundling
 * - TypeScript compilation
 * - Production builds
 * - GitHub Pages deployment
 */
export default defineConfig({
  plugins: [react()],
  
  // Base path for GitHub Pages deployment
  // Change this to '/your-repo-name/' when deploying
  base: '/',
  
  // Build configuration
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'animation-vendor': ['gsap', 'motion'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  // Development server
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'three',
      'gsap',
      'motion',
      'lucide-react',
    ],
    exclude: [],
  },
  
  // CSS configuration
  css: {
    devSourcemap: true,
  },
  
  // Preview server
  preview: {
    port: 4173,
    host: true,
  },
});
