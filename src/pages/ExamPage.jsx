import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { getUnit } from '../data/units/index.js'
import { isCorrect } from '../lib/grading.js'
import { recordFail } from '../lib/storage.js'
import Question from '../components/Question.jsx'
import PrintableExam from '../components/PrintableExam.jsx'

function formatTime(secs) {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function ExamPage() {
  const { unitId } = useParams()
  const unit = getUnit(unitId)

  const [answers, setAnswers] = useState({})
  const [graded, setGraded] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [showSolutions, setShowSolutions] = useState(false)
  const timerRef = useRef(null)
  const resultRef = useRef(null)

  // Cronómetro: corre hasta que se entrega el examen.
  useEffect(() => {
    if (graded) return
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [graded])

  if (!unit || !unit.available) return <Navigate to="/" replace />

  const exam = unit.exam
  const setAnswer = (qid, value) => setAnswers((a) => ({ ...a, [qid]: value }))

  const handleSubmit = () => {
    clearInterval(timerRef.current)
    // Guarda los fallos en localStorage para el repaso.
    const now = Date.now()
    exam.forEach((q) => {
      if (!isCorrect(q, answers[q.id])) {
        recordFail(unit.id, q.id, now)
      }
    })
    setGraded(true)
    // Lleva la vista al resumen de resultados.
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  const handleRetry = () => {
    setAnswers({})
    setGraded(false)
    setSeconds(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const score = graded ? exam.filter((q) => isCorrect(q, answers[q.id])).length : 0
  const pct = graded ? Math.round((score / exam.length) * 100) : 0

  return (
    <div className="container exam-layout">
      {/* ===== Cabecera del examen (no se imprime) ===== */}
      <header className="exam-header no-print">
        <div>
          <Link to={`/unidad/${unit.id}`} className="exam-header__back">← Volver a la unidad</Link>
          <h1>Examen · Unidad {unit.id}</h1>
          <p className="exam-header__sub">{unit.title} · {exam.length} preguntas</p>
        </div>
        <div className="exam-header__meta">
          <div className={`timer ${graded ? 'timer--stopped' : ''}`}>
            <span className="timer__ico" aria-hidden="true">⏱️</span>
            {formatTime(seconds)}
          </div>
          <button className="btn btn--ghost" onClick={() => window.print()}>
            🖨️ Imprimir examen
          </button>
        </div>
      </header>

      {/* ===== Banner de instrucciones para imprimir ===== */}
      {!graded && (
        <div className="print-hint no-print">
          ¿Prefieres hacerlo en papel? Pulsa <strong>«Imprimir examen»</strong> para
          obtener una versión limpia (con o sin soluciones).
        </div>
      )}

      {/* ===== Resultado (tras corregir) ===== */}
      {graded && (
        <section className="exam-result no-print" ref={resultRef}>
          <div className={`exam-result__score ${pct >= 50 ? 'pass' : 'fail'}`}>
            <span className="exam-result__big">{score}/{exam.length}</span>
            <span className="exam-result__pct">{pct}%</span>
          </div>
          <div className="exam-result__msg">
            <h2>{pct >= 50 ? '¡Bien hecho!' : 'A repasar un poco más'}</h2>
            <p>
              Has tardado {formatTime(seconds)}.{' '}
              {exam.length - score > 0
                ? `Las ${exam.length - score} preguntas falladas se han guardado en tu sección de Repaso.`
                : '¡Perfecto, sin fallos!'}
            </p>
            <div className="exam-result__actions">
              <button className="btn" onClick={handleRetry}>🔄 Repetir examen</button>
              {exam.length - score > 0 && (
                <Link to="/repaso" className="btn btn--ghost">Ir al repaso →</Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===== Preguntas (interactivo, no se imprime) ===== */}
      <div className="exam-questions no-print">
        {exam.map((q, i) => (
          <Question
            key={q.id}
            q={q}
            index={i}
            value={answers[q.id]}
            onChange={(v) => setAnswer(q.id, v)}
            graded={graded}
            correct={isCorrect(q, answers[q.id])}
          />
        ))}
      </div>

      {!graded && (
        <div className="exam-submit no-print">
          <button className="btn btn--big" onClick={handleSubmit}>
            Corregir examen
          </button>
        </div>
      )}

      {/* ===== Versión imprimible (oculta en pantalla, visible al imprimir) ===== */}
      <PrintableExam
        unit={unit}
        showSolutions={showSolutions}
        onToggleSolutions={setShowSolutions}
      />
    </div>
  )
}
