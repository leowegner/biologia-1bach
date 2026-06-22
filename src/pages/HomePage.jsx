import { Link } from 'react-router-dom'
import { units } from '../data/units/index.js'

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Biología · 1º de Bachillerato</h1>
        <p className="hero__sub">
          Guía de estudio interactiva. Teoría completa explicada con ejemplos,
          conceptos clave y exámenes con repaso de tus fallos.
        </p>
      </section>

      <div className="units-grid">
        {units.map((unit) => {
          const card = (
            <>
              <div className="unit-card__top">
                <span className="unit-card__num">Unidad {unit.id}</span>
                {!unit.available && <span className="unit-card__lock" aria-label="Bloqueada">🔒</span>}
              </div>
              <h2 className="unit-card__title">{unit.title}</h2>
              {unit.available ? (
                <span className="unit-card__cta">Estudiar →</span>
              ) : (
                <span className="unit-card__soon">Próximamente</span>
              )}
            </>
          )

          return unit.available ? (
            <Link key={unit.id} to={`/unidad/${unit.id}`} className="unit-card">
              {card}
            </Link>
          ) : (
            <div key={unit.id} className="unit-card unit-card--locked" aria-disabled="true">
              {card}
            </div>
          )
        })}
      </div>
    </div>
  )
}
