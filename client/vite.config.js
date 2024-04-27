import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Enable React plugin
  plugins: [react()],

  // Specify the HTML template
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },

  // Configure the development server
  server: {
    // Specify the port
    port: 3005,
    // Open the browser automatically when the server starts
    open: true,
    // Proxy API requests to the server-side Node server at port 3001
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

