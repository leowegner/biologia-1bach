import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { getUnit } from '../data/units/index.js'
import ContentBlock from '../components/ContentBlock.jsx'
import StudyTracker from '../components/StudyTracker.jsx'

export default function UnitPage() {
  const { unitId } = useParams()
  const unit = getUnit(unitId)
  const [activeSection, setActiveSection] = useState(0)

  // Unidad inexistente o aún no disponible → al índice.
  if (!unit || !unit.available) {
    return <Navigate to="/" replace />
  }

  const section = unit.sections[activeSection]

  // Cambia de sección y sube al principio (en móvil te quedabas a media página).
  const goToSection = (index) => {
    setActiveSection(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container unit-layout">
      {/* Navegación lateral por secciones */}
      <aside className="unit-nav no-print">
        <Link to="/" className="unit-nav__back">← Unidades</Link>
        <div className="unit-nav__heading">Unidad {unit.id}</div>
        <ul className="unit-nav__list">
          {unit.sections.map((s, i) => (
            <li key={s.id}>
              <button
                className={i === activeSection ? 'active' : ''}
                onClick={() => goToSection(i)}
              >
                <span className="unit-nav__ico" aria-hidden="true">{s.icon}</span>
                {s.title}
              </button>
            </li>
          ))}
        </ul>
        <Link to={`/unidad/${unit.id}/examen`} className="btn btn--exam">
          📝 Examen final
        </Link>
        <StudyTracker unitId={unit.id} />
      </aside>

      {/* Contenido de la sección activa */}
      <article className="unit-content">
        <header className="unit-content__header">
          <p className="unit-content__eyebrow">Unidad {unit.id} · {unit.title}</p>
          <h1>{section.title}</h1>
        </header>

        <div className="prose">
          {section.blocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

        {/* Navegación anterior / siguiente entre secciones */}
        <nav className="section-pager no-print">
          <button
            disabled={activeSection === 0}
            onClick={() => goToSection(Math.max(0, activeSection - 1))}
          >
            ← Anterior
          </button>
          <span className="section-pager__count">
            {activeSection + 1} / {unit.sections.length}
          </span>
          {activeSection < unit.sections.length - 1 ? (
            <button onClick={() => goToSection(Math.min(unit.sections.length - 1, activeSection + 1))}>
              Siguiente →
            </button>
          ) : (
            <Link to={`/unidad/${unit.id}/examen`} className="section-pager__exam">
              Ir al examen →
            </Link>
          )}
        </nav>
      </article>
    </div>
  )
}
