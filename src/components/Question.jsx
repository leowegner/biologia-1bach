import { rich } from '../lib/richText.jsx'

// Renderiza una pregunta del examen en modo interactivo.
// Props:
//   q          → objeto pregunta
//   index      → número (para mostrar "1.", "2."...)
//   value      → respuesta actual del alumno
//   onChange   → callback(value)
//   graded     → true cuando ya se ha corregido (muestra aciertos/fallos)
//   correct    → true/false si la pregunta está bien (solo si graded)
export default function Question({ q, index, value, onChange, graded, correct }) {
  return (
    <div className={`question ${graded ? (correct ? 'question--ok' : 'question--bad') : ''}`}>
      <div className="question__head">
        <span className="question__num">{index + 1}</span>
        <p className="question__text">{rich(q.question)}</p>
        {graded && (
          <span className={`question__mark ${correct ? 'ok' : 'bad'}`}>
            {correct ? '✓' : '✗'}
          </span>
        )}
      </div>

      {q.type === 'mc' && (
        <MultipleChoice q={q} value={value} onChange={onChange} graded={graded} />
      )}
      {q.type === 'tf' && (
        <TrueFalse q={q} value={value} onChange={onChange} graded={graded} />
      )}
      {q.type === 'order' && (
        <OrderQuestion q={q} value={value} onChange={onChange} graded={graded} />
      )}

      {graded && (
        <div className="question__explain">
          <strong>{correct ? 'Correcto.' : 'Repasa:'}</strong> {rich(q.explanation)}
        </div>
      )}
    </div>
  )
}

function MultipleChoice({ q, value, onChange, graded }) {
  return (
    <div className="options">
      {q.options.map((opt, i) => {
        const selected = value === i
        const isAnswer = q.answer === i
        let cls = 'option'
        if (selected) cls += ' option--selected'
        if (graded && isAnswer) cls += ' option--answer'
        if (graded && selected && !isAnswer) cls += ' option--wrong'
        return (
          <label key={i} className={cls}>
            <input
              type="radio"
              name={q.id}
              checked={selected}
              disabled={graded}
              onChange={() => onChange(i)}
            />
            <span>{rich(opt)}</span>
          </label>
        )
      })}
    </div>
  )
}

function TrueFalse({ q, value, onChange, graded }) {
  const opts = [
    { label: 'Verdadero', val: true },
    { label: 'Falso', val: false },
  ]
  return (
    <div className="options options--tf">
      {opts.map((o) => {
        const selected = value === o.val
        const isAnswer = q.answer === o.val
        let cls = 'option'
        if (selected) cls += ' option--selected'
        if (graded && isAnswer) cls += ' option--answer'
        if (graded && selected && !isAnswer) cls += ' option--wrong'
        return (
          <label key={o.label} className={cls}>
            <input
              type="radio"
              name={q.id}
              checked={selected}
              disabled={graded}
              onChange={() => onChange(o.val)}
            />
            <span>{o.label}</span>
          </label>
        )
      })}
    </div>
  )
}

// Pregunta de ordenar: se reordena con botones de subir/bajar.
// `value` es un array con el orden actual de índices de q.items.
function OrderQuestion({ q, value, onChange, graded }) {
  const order = value && value.length ? value : q.items.map((_, i) => i)

  const move = (pos, dir) => {
    const next = [...order]
    const target = pos + dir
    if (target < 0 || target >= next.length) return
    ;[next[pos], next[target]] = [next[target], next[pos]]
    onChange(next)
  }

  return (
    <ol className="order-list">
      {order.map((itemIdx, pos) => {
        // En modo corregido, marca si este elemento está en su posición correcta.
        const isRight = graded && q.answer[pos] === itemIdx
        return (
          <li
            key={itemIdx}
            className={`order-item ${graded ? (isRight ? 'order-item--ok' : 'order-item--bad') : ''}`}
          >
            <span className="order-item__pos">{pos + 1}</span>
            <span className="order-item__label">{rich(q.items[itemIdx])}</span>
            {!graded && (
              <span className="order-item__controls">
                <button type="button" onClick={() => move(pos, -1)} disabled={pos === 0} aria-label="Subir">▲</button>
                <button type="button" onClick={() => move(pos, 1)} disabled={pos === order.length - 1} aria-label="Bajar">▼</button>
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
