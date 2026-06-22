import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: la web se publica en https://leowegner.github.io/biologia-1bach/,
// así que los assets deben resolverse bajo esa subruta. La app usa HashRouter,
// por lo que las rutas internas (#/unidad/0) funcionan sin más configuración.
export default defineConfig({
  plugins: [react()],
  base: '/biologia-1bach/',
})
