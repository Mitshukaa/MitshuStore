import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MitshuStore/',  // Mengonfigurasi base path untuk GitHub Pages
  build: {
    outDir: 'dist',  // Pastikan hasil build ditempatkan di folder 'dist'
  }
})
