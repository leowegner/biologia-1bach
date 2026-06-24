import { useState, useEffect } from 'react'
import {
  getPlanEntry, markStudied, recordReview, removeFromPlan,
  dueLabel, todayEpochDay,
} from '../lib/reviewPlan.js'

// Control de repaso espaciado para UNA unidad, en la barra lateral.
// - Si la unidad no está en el plan: botón "He estudiado esta unidad".
// - Si está: muestra cuándo toca el próximo repaso. Si toca hoy (o atrasado),
//   ofrece "Repasar" con tres resultados (mal / normal / bien) que ajustan
//   el siguiente intervalo.
export default function StudyTracker({ unitId }) {
  const [entry, setEntry] = useState(() => getPlanEntry(unitId))
  const [reviewing, setReviewing] = useState(false)
  const today = todayEpochDay()

  useEffect(() => {
    const refresh = () => setEntry(getPlanEntry(unitId))
    window.addEventListener('plan-actualizado', refresh)
    return () => window.removeEventListener('plan-actualizado', refresh)
  }, [unitId])

  const study = () => { markStudied(unitId); setEntry(getPlanEntry(unitId)) }
  const review = (outcome) => {
    recordReview(unitId, outcome)
    setEntry(getPlanEntry(unitId))
    setReviewing(false)
  }
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

      {due && !reviewing && (
        <button className="btn btn--study" onClick={() => setReviewing(true)}>
          🔁 Repasar ahora
        </button>
      )}

      {reviewing && (
        <div className="tracker__outcomes">
          <p className="tracker__q">¿Cómo te ha ido el repaso?</p>
          <button className="tracker__out tracker__out--mal" onClick={() => review('mal')}>Mal</button>
          <button className="tracker__out tracker__out--normal" onClick={() => review('normal')}>Regular</button>
          <button className="tracker__out tracker__out--bien" onClick={() => review('bien')}>Bien</button>
        </div>
      )}

      <button className="tracker__stop" onClick={stop}>Quitar del plan</button>
    </div>
  )
}
