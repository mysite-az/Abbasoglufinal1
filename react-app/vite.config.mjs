import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3557,
    proxy: {
      '/api': {
        target: 'http://localhost:3558',
        changeOrigin: true,
      },
    },
  },
  preview: {
    allowedHosts: ['temizlikxidmetleri.az', 'localhost', '127.0.0.1']
  }
})