import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import {resolve} from 'path';


export default defineConfig({
  plugins: [vue()],
  base: '/portafolio/',
  resolve: {
    alias: {
      '@img': fileURLToPath(new URL('src/assets/', import.meta.url)),
      '@': fileURLToPath(new URL('src/', import.meta.url)),
      

    }
  },
})
