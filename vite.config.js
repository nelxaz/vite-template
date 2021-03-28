import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
