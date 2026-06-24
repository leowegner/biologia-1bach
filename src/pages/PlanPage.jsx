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
        <div className="plan-cards">
          {sorted.map((e) => {
            const unit = getUnit(e.unitId)
            if (!unit) return null
            const overdue = e.due < today
            const dueToday = e.due === today
            const due = overdue || dueToday
            const state = overdue ? 'overdue' : dueToday ? 'today' : 'ok'
            const stateLabel = overdue ? '¡Atrasado!' : dueToday ? 'Toca hoy' : 'Al día'
            // Progreso dentro del ciclo de intervalos (0..1).
            const cyclePct = INTERVALS.length > 1
              ? Math.round((e.step / (INTERVALS.length - 1)) * 100)
              : 100
            return (
              <div key={e.unitId} className={`plan-card plan-card--${state}`}>
                <div className="plan-card__head">
                  <span className="plan-card__num">U{e.unitId}</span>
                  <span className={`plan-card__badge plan-card__badge--${state}`}>{stateLabel}</span>
                </div>
                <h3 className="plan-card__title">{unit.title}</h3>

                <div className="plan-card__due">
                  <span className="plan-card__due-ico">{due ? '🔔' : '✅'}</span>
                  <div>
                    <span className="plan-card__due-label">Próximo repaso</span>
                    <strong className={due ? 'is-due' : ''}>{dueLabel(e, today)}</strong>
                  </div>
                </div>

                {/* Barra de progreso del ciclo de repasos */}
                <div className="plan-card__cycle">
                  <div className="plan-card__cycle-bar">
                    <div className="plan-card__cycle-fill" style={{ width: `${cyclePct}%` }} />
                  </div>
                  <span className="plan-card__cycle-label">
                    Intervalo {INTERVALS[e.step]} día{INTERVALS[e.step] !== 1 ? 's' : ''} · paso {e.step + 1}/{INTERVALS.length}
                  </span>
                </div>

                <div className="plan-card__actions">
                  <Link to={`/unidad/${e.unitId}/repaso`} className="btn plan-card__review">🔁 Repasar</Link>
                  <Link to={`/unidad/${e.unitId}`} className="plan-card__go">Ver unidad →</Link>
                </div>
              </div>
            )
          })}
        </div>
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
