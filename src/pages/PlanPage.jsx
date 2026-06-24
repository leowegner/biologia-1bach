import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getPlan, dueLabel, todayEpochDay, INTERVALS } from '../lib/reviewPlan.js'
import { units, getUnit } from '../data/units/index.js'

// Página "Plan de repaso": calendario de todas las unidades que sigues, con
// cuándo toca cada una. Ordenadas por urgencia (las vencidas primero).
export default function PlanPage() {
  const [plan, setPlan] = useState(() => getPlan())
  const today = todayEpochDay()

  useEffect(() => {
    const refresh = () => setPlan(getPlan())
    window.addEventListener('plan-actualizado', refresh)
    return () => window.removeEventListener('plan-actualizado', refresh)
  }, [])

  // Ordenar por fecha de repaso (lo más urgente arriba).
  const sorted = [...plan].sort((a, b) => a.due - b.due)
  const available = units.filter((u) => u.available)
  const notInPlan = available.filter((u) => !plan.some((e) => String(e.unitId) === String(u.id)))

  return (
    <div className="container plan-page">
      <header className="plan-head">
        <h1>📅 Plan de repaso</h1>
        <p>
          El repaso espaciado hace que no olvides lo estudiado: repasas cada unidad
          a intervalos crecientes ({INTERVALS.join(', ')} días). Lo más importante es
          <strong> volver otro día</strong>, aunque sea un repaso rápido.
        </p>
      </header>

      {sorted.length === 0 ? (
        <div className="plan-empty">
          <div className="plan-empty__ico">🌱</div>
          <h2>Tu plan está vacío</h2>
          <p>Entra en una unidad y pulsa <strong>«He estudiado esta unidad»</strong> para empezar a seguir su repaso.</p>
          <Link to="/" className="btn">Ver unidades</Link>
        </div>
      ) : (
        <ul className="plan-list">
          {sorted.map((e) => {
            const unit = getUnit(e.unitId)
            if (!unit) return null
            const overdue = e.due < today
            const dueToday = e.due === today
            return (
              <li key={e.unitId} className={`plan-item ${overdue ? 'plan-item--overdue' : dueToday ? 'plan-item--today' : ''}`}>
                <div className="plan-item__main">
                  <span className="plan-item__num">U{e.unitId}</span>
                  <div className="plan-item__info">
                    <strong>{unit.title}</strong>
                    <span className="plan-item__meta">Intervalo actual: {INTERVALS[e.step]} día{INTERVALS[e.step] !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="plan-item__right">
                  <span className={`plan-item__due ${overdue || dueToday ? 'is-due' : ''}`}>
                    {dueLabel(e, today)}
                  </span>
                  <Link to={`/unidad/${e.unitId}`} className="plan-item__go">Ir →</Link>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {notInPlan.length > 0 && (
        <div className="plan-notyet">
          <h3>Unidades que aún no sigues</h3>
          <div className="plan-notyet__chips">
            {notInPlan.map((u) => (
              <Link key={u.id} to={`/unidad/${u.id}`} className="plan-notyet__chip">
                U{u.id} · {u.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
