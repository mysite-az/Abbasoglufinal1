import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3557',
        changeOrigin: true,
      },
    },
  },
  preview: {
    allowedHosts: ['temizlikxidmetleri.az', 'localhost', '127.0.0.1']
  }
})