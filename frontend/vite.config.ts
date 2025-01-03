import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'https://socketio-production-ee2e.up.railway.app',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
});