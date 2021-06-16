import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dynamicImportVars({
      include: ['**/*.vue', '**/*.js'],
      exclude: ['node_modules/**'],
    }),

  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // map '@' to './src' 
    },
  },
})
