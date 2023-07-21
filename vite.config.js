import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import {resolve} from 'path';


export default defineConfig({
  plugins: [vue()],
  base: '/postafolio/',
  resolve: {
    alias: {
      // '@img': resolve(__dirname, 'src/assets/'),
      '@img': fileURLToPath(new URL('src/assets/', import.meta.url)),
      '@': fileURLToPath(new URL('src/', import.meta.url)),
      

    }
  },
})
