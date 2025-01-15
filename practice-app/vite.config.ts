import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@image': path.resolve(__dirname, 'src/image'),
      '@type': path.resolve(__dirname, 'src/type'),
    },
  },
});
