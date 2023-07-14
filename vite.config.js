import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';


export default defineConfig({
  plugins: [vue()],
  base: '/postafolio/',
  resolve: {
    alias: {
      '@img': resolve(__dirname, 'src/assets/'),

    }
  },
})
