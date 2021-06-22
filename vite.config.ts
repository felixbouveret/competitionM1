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
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Coucou",
        "short_name": "kou",
        "description": "Oui",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
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
