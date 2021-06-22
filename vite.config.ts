import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src") // map '@' to './src' 
    },
  },
  css: {
    modules: {
      generateScopedName: '[folder]-[local]-[emoji]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'src/styles/ressources/_module.scss';
        `,
      },
    },
  }

})

