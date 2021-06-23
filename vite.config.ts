import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        "name": "pwa",
        "short_name": "pwa",
        "icons": [
          {
            "src": "/img/icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/img/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "start_url": "/index.html",
        "display": "standalone",
        "background_color": "#000000",
        "theme_color": "#4DBA87"
      },
      workbox: {
        // workbox options for generateSW
      }
    })

  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src") // map '@' to './src' 
    },
  },
  server: {
    host: true
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

