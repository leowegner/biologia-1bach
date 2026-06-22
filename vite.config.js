import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// base: la web se publica en https://leowegner.github.io/biologia-1bach/,
// así que los assets deben resolverse bajo esa subruta. La app usa HashRouter,
// por lo que las rutas internas (#/unidad/0) funcionan sin más configuración.
export default defineConfig({
  base: '/biologia-1bach/',
  plugins: [
    react(),
    VitePWA({
      // autoUpdate: cuando publicas una versión nueva, el service worker la
      // descarga y la aplica sola en la siguiente visita, sin pasos manuales.
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Biología 1º Bachillerato',
        short_name: 'Biología 1B',
        description: 'Guía de estudio interactiva de Biología de 1º de Bachillerato.',
        lang: 'es',
        start_url: '.',
        scope: '.',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#16335a',
        theme_color: '#16335a',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          // "maskable": permite que Android recorte el icono sin cortar el dibujo.
          { src: 'pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Cachea TODO lo que genera el build (js, css, html, imágenes, fuentes).
        // Eso es lo que hace que la app funcione sin conexión.
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        navigateFallback: 'index.html',
      },
    }),
  ],
})
