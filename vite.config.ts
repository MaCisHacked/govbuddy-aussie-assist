import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/govbuddy-aussie-assist/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 8080,
    proxy: {
      '/ckan': {
        target: 'https://data.gov.au/data/api/3/action',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/ckan/, '')
      }
    }
  },
  resolve: { alias: { '@': '/src' } }
}))


