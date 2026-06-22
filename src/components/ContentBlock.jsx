import { useState } from 'react'
import { rich } from '../lib/richText.jsx'

// Renderiza un bloque de contenido según su `type`.
// Los tipos están documentados en src/data/units/unidad0.js.
export default function ContentBlock({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="block-p">{rich(block.text)}</p>

    case 'h':
      return <h3 className="block-h">{rich(block.text)}</h3>

    case 'list':
      return (
        <ul className="block-list">
          {block.items.map((item, i) => (
            <li key={i}>{rich(item)}</li>
          ))}
        </ul>
      )

    case 'steps':
      return (
        <ol className="block-steps">
          {block.items.map((item, i) => (
            <li key={i}>
              <strong className="block-steps__title">{rich(item.title)}</strong>
              <span className="block-steps__text">{rich(item.text)}</span>
            </li>
          ))}
        </ol>
      )

    case 'key':
      return (
        <aside className="callout callout--key">
          <div className="callout__label">💡 {block.title || 'Concepto clave'}</div>
          <p>{rich(block.text)}</p>
        </aside>
      )

    case 'example':
      return (
        <aside className="callout callout--example">
          <div className="callout__label">📝 {block.title || 'Ejemplo'}</div>
          <p>{rich(block.text)}</p>
        </aside>
      )

    case 'warning':
      return (
        <aside className="callout callout--warning">
          <div className="callout__label">⚠️ {block.title || 'Atención'}</div>
          <p>{rich(block.text)}</p>
        </aside>
      )

    case 'quote':
      return (
        <blockquote className="block-quote">
          <p>{rich(block.text)}</p>
          {block.source && <cite>— {block.source}</cite>}
        </blockquote>
      )

    case 'table':
      return (
        <div className="block-table-wrap">
          <table className="block-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{rich(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{rich(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'phases':
      return (
        <div className="phases">
          {block.items.map((phase) => (
            <div className="phase-card" key={phase.n}>
              <div className="phase-card__head">
                <span className="phase-card__num">{phase.n}</span>
                <span className="phase-card__icon" aria-hidden="true">{phase.icon}</span>
                <h4 className="phase-card__name">{phase.name}</h4>
              </div>
              <p className="phase-card__text">{rich(phase.text)}</p>
              {phase.example && (
                <p className="phase-card__example">
                  <strong>Ejemplo:</strong> {rich(phase.example)}
                </p>
              )}
            </div>
          ))}
        </div>
      )

    case 'activity':
      return <Activity block={block} />

    default:
      return null
  }
}

// Tarjeta de actividad: muestra el enunciado y oculta la respuesta tras un
// botón, para que el alumno intente resolverla antes de autocorregirse.
function Activity({ block }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`activity ${open ? 'activity--open' : ''}`}>
      <div className="activity__head">
        {block.label && <span className="activity__label">{block.label}</span>}
        <p className="activity__question">{rich(block.question)}</p>
      </div>

      <button
        className="activity__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {open ? '🙈 Ocultar respuesta' : '✅ Ver respuesta'}
      </button>

      {open && (
        <div className="activity__answer">
          {/* La respuesta puede ser texto simple o varios bloques de contenido. */}
          {block.answerBlocks
            ? block.answerBlocks.map((b, i) => <ContentBlock key={i} block={b} />)
            : <p>{rich(block.answer)}</p>}
        </div>
      )}
    </div>
  )
}
