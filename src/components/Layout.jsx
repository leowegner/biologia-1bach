import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { countFails } from '../lib/storage.js'

export default function Layout({ children }) {
  const location = useLocation()
  const [fails, setFails] = useState(0)

  // Recalcula el contador de fallos cada vez que cambia de página
  // (por si se acaba de hacer un examen o un repaso).
  useEffect(() => {
    setFails(countFails())
  }, [location.pathname])

  // También se actualiza al instante cuando se guardan/quitan fallos,
  // aunque no se cambie de página (p. ej. justo al corregir un examen).
  useEffect(() => {
    const refresh = () => setFails(countFails())
    window.addEventListener('fallos-actualizados', refresh)
    return () => window.removeEventListener('fallos-actualizados', refresh)
  }, [])

  return (
    <div className="app">
      <header className="topbar no-print">
        <div className="topbar__inner">
          <Link to="/" className="brand">
            <span className="brand__icon" aria-hidden="true">🧬</span>
            <span className="brand__text">
              <strong>Biología</strong>
              <small>1º Bachillerato</small>
            </span>
          </Link>
          <nav className="topnav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Unidades
            </Link>
            <Link to="/repaso" className={location.pathname === '/repaso' ? 'active' : ''}>
              Repaso
              {fails > 0 && <span className="badge">{fails}</span>}
            </Link>
          </nav>
        </div>
      </header>

      <main className="content">{children}</main>

      <footer className="footer no-print">
        <p>Guía de estudio · Biología 1º Bach · Basada en los apuntes de Felipe Sánchez Jiménez</p>
      </footer>
    </div>
  )
}
