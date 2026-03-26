import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Portfolio11/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true
  }
}))