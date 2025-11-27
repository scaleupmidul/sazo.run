import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react'],
          'vendor-utils': ['zustand', 'bcryptjs', 'date-fns'], // Add date-fns if you use it, otherwise remove
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
