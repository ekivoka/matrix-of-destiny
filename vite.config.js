import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $fonts: resolve('src/assets/fonts')
    }
  },
  base: "/matrix-of-destiny/"
})
