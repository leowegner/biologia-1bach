import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDueToday } from '../lib/reviewPlan.js'
import { getUnit } from '../data/units/index.js'

// Panel en la home: "Hoy toca repasar: U0, U1...". Solo aparece si hay
// unidades vencidas. Se actualiza si cambia el plan.
export default function TodayReview() {
  const [due, setDue] = useState(() => getDueToday())

  useEffect(() => {
    const refresh = () => setDue(getDueToday())
    window.addEventListener('plan-actualizado', refresh)
    return () => window.removeEventListener('plan-actualizado', refresh)
  }, [])

  if (!due.length) return null

  return (
    <section className="today-review">
      <div className="today-review__head">
        <span className="today-review__ico" aria-hidden="true">🔔</span>
        <h2>Hoy toca repasar</h2>
      </div>
      <p className="today-review__sub">
        Estas {due.length === 1 ? 'unidad necesita' : 'unidades necesitan'} un repaso para que no se te olvide:
      </p>
      <div className="today-review__chips">
        {due.map((e) => {
          const unit = getUnit(e.unitId)
          if (!unit) return null
          return (
            <Link key={e.unitId} to={`/unidad/${e.unitId}`} className="today-chip">
              <strong>Unidad {e.unitId}</strong>
              <span>{unit.title}</span>
            </Link>
          )
        })}
      </div>
      <Link to="/plan" className="today-review__all">Ver todo el plan de repaso →</Link>
    </section>
  )
}
