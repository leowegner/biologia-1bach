import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { getFails, clearFail, clearAllFails } from '../lib/storage.js'
import { getUnit } from '../data/units/index.js'
import { isCorrect } from '../lib/grading.js'
import Question from '../components/Question.jsx'

// Reúne las preguntas falladas (de cualquier unidad) buscándolas en los datos
// vivos a partir de los IDs guardados.
function collectFailedQuestions() {
  return getFails()
    .map((fail) => {
      const unit = getUnit(fail.unitId)
      const q = unit?.exam.find((x) => x.id === fail.questionId)
      return q ? { q, unit, fails: fail.fails } : null
    })
    .filter(Boolean)
}

export default function ReviewPage() {
  // Snapshot inicial de las preguntas a repasar (no se recalcula al responder,
  // para no hacer desaparecer la tarjeta de golpe; se quita al pulsar "comprobar").
  const [items, setItems] = useState(() => collectFailedQuestions())
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState({})

  const remaining = items.length

  const setAnswer = (qid, value) => setAnswers((a) => ({ ...a, [qid]: value }))

  const check = (q) => {
    const ok = isCorrect(q, answers[q.id])
    setChecked((c) => ({ ...c, [q.id]: ok ? 'ok' : 'bad' }))
    if (ok) {
      // Acertada → fuera de la lista de repaso (en storage y en pantalla, tras un momento).
      clearFail(q.id)
      setTimeout(() => {
        setItems((list) => list.filter((it) => it.q.id !== q.id))
        setAnswers((a) => {
          const next = { ...a }
          delete next[q.id]
          return next
        })
        setChecked((c) => {
          const next = { ...c }
          delete next[q.id]
          return next
        })
      }, 1200)
    }
  }

  const resetAll = () => {
    clearAllFails()
    setItems([])
    setAnswers({})
    setChecked({})
  }

  if (remaining === 0) {
    return (
      <div className="container">
        <div className="review-empty">
          <div className="review-empty__ico">🎉</div>
          <h1>¡Nada que repasar!</h1>
          <p>No tienes preguntas falladas pendientes. Haz un examen y las que falles aparecerán aquí para repasarlas.</p>
          <Link to="/" className="btn">Ver unidades</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container review-layout">
      <header className="review-header">
        <div>
          <h1>Repaso de fallos</h1>
          <p>Tienes <strong>{remaining}</strong> pregunta{remaining !== 1 ? 's' : ''} por repasar. Acierta una para quitarla de la lista.</p>
        </div>
        <button className="btn btn--ghost btn--small" onClick={resetAll}>
          Vaciar repaso
        </button>
      </header>

      <div className="review-list">
        {items.map(({ q, unit, fails }) => {
          const state = checked[q.id]
          return (
            <div key={q.id} className="review-item">
              <div className="review-item__tag">
                Unidad {unit.id}
                {fails > 1 && <span className="review-item__fails">fallada ×{fails}</span>}
              </div>
              <Question
                q={q}
                index={0}
                value={answers[q.id]}
                onChange={(v) => setAnswer(q.id, v)}
                graded={!!state}
                correct={state === 'ok'}
              />
              {!state && (
                <button
                  className="btn btn--small"
                  onClick={() => check(q)}
                  disabled={answers[q.id] === undefined && q.type !== 'order'}
                >
                  Comprobar
                </button>
              )}
              {state === 'ok' && <p className="review-item__done">✓ ¡Correcto! Se quita del repaso.</p>}
              {state === 'bad' && (
                <button className="btn btn--small btn--ghost" onClick={() => {
                  setChecked((c) => { const n = { ...c }; delete n[q.id]; return n })
                  setAnswer(q.id, undefined)
                }}>
                  Intentar de nuevo
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
