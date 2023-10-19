/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    root: 'src/',
    globals: true,
    coverage: {
      provider: 'istanbul',
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  server: {
    port: 5000
  }
})
