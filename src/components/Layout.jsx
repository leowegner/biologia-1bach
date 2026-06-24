import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { countFails } from '../lib/storage.js'
import { countDueToday } from '../lib/reviewPlan.js'

export default function Layout({ children }) {
  const location = useLocation()
  const [fails, setFails] = useState(0)
  const [dueUnits, setDueUnits] = useState(0)

  // Recalcula los contadores cada vez que cambia de página.
  useEffect(() => {
    setFails(countFails())
    setDueUnits(countDueToday())
  }, [location.pathname])

  // Actualización en vivo: fallos del examen y plan de repaso.
  useEffect(() => {
    const refreshFails = () => setFails(countFails())
    const refreshPlan = () => setDueUnits(countDueToday())
    window.addEventListener('fallos-actualizados', refreshFails)
    window.addEventListener('plan-actualizado', refreshPlan)
    return () => {
      window.removeEventListener('fallos-actualizados', refreshFails)
      window.removeEventListener('plan-actualizado', refreshPlan)
    }
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
            <Link to="/plan" className={location.pathname === '/plan' ? 'active' : ''}>
              Plan
              {dueUnits > 0 && <span className="badge">{dueUnits}</span>}
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
