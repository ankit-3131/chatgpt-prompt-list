import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import '@tailwindcss/vite'
import tailwindcss from '@tailwindcss/vite'
import manifest from './manifest.json'
import { crx } from '@crxjs/vite-plugin'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: './index.html',
        background: 'src/background.js',
        content: 'src/content.jsx'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    crx({manifest})
  ],
})
