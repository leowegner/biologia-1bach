import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  getPlanEntry, markStudied, removeFromPlan,
  dueLabel, todayEpochDay,
} from '../lib/reviewPlan.js'

// Control de repaso espaciado para UNA unidad, en la barra lateral.
// - Si la unidad no está en el plan: botón "He estudiado esta unidad".
// - Si está: muestra cuándo toca el próximo repaso. Si toca hoy (o atrasado),
//   ofrece "Repasar" con tres resultados (mal / normal / bien) que ajustan
//   el siguiente intervalo.
export default function StudyTracker({ unitId }) {
  const [entry, setEntry] = useState(() => getPlanEntry(unitId))
  const today = todayEpochDay()

  useEffect(() => {
    const refresh = () => setEntry(getPlanEntry(unitId))
    window.addEventListener('plan-actualizado', refresh)
    return () => window.removeEventListener('plan-actualizado', refresh)
  }, [unitId])

  const study = () => { markStudied(unitId); setEntry(getPlanEntry(unitId)) }
  const stop = () => { removeFromPlan(unitId); setEntry(null) }

  if (!entry) {
    return (
      <div className="tracker">
        <button className="btn btn--study" onClick={study}>📚 He estudiado esta unidad</button>
        <p className="tracker__hint">La añade a tu plan de repaso espaciado.</p>
      </div>
    )
  }

  const due = entry.due <= today

  return (
    <div className={`tracker ${due ? 'tracker--due' : ''}`}>
      <div className="tracker__status">
        <span className="tracker__ico" aria-hidden="true">{due ? '🔔' : '✅'}</span>
        <div>
          <strong>Próximo repaso:</strong> {dueLabel(entry, today)}
        </div>
      </div>

      {due && (
        <Link to={`/unidad/${unitId}/repaso`} className="btn btn--study">
          🔁 Repasar ahora
        </Link>
      )}

      <button className="tracker__stop" onClick={stop}>Quitar del plan</button>
    </div>
  )
}
