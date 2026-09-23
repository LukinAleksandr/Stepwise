import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Относительные пути: собранный dist работает из любой папки / любого хостинга.
  base: './',
  plugins: [react()],
  // React + Mantine ≈ 170 КБ gzip — ожидаемый размер, предупреждение не нужно.
  build: { chunkSizeWarningLimit: 700 },
})
