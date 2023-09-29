// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
      input: {
        index: "index.html",
        formulaire: "formulaire.html",
        galerie: "galerie.html",
        mentionLegales: "mentionLegales.html"
      }
    },
  },
})