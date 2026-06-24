import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { getUnit } from '../data/units/index.js'
import { isCorrect } from '../lib/grading.js'
import { recordReview, getPlanEntry } from '../lib/reviewPlan.js'
import { rich } from '../lib/richText.jsx'
import Question from '../components/Question.jsx'

// Repaso exprés de una unidad: resumen condensado → mini-test → resultado.
// El resultado del mini-test (más tu confirmación) ajusta el plan de repaso.
export default function ReviewExpressPage() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const unit = getUnit(unitId)
  const [phase, setPhase] = useState('summary') // 'summary' | 'test' | 'result'
  const [answers, setAnswers] = useState({})
  const [graded, setGraded] = useState(false)

  if (!unit || !unit.available || !unit.review) {
    return <Navigate to="/" replace />
  }

  const review = unit.review
  // Las preguntas del mini-test, sacadas del examen por sus IDs.
  const questions = useMemo(
    () => review.questions.map((id) => unit.exam.find((q) => q.id === id)).filter(Boolean),
    [review.questions, unit.exam],
  )

  const setAnswer = (qid, value) => setAnswers((a) => ({ ...a, [qid]: value }))

  const submit = () => {
    setGraded(true)
    setPhase('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const score = graded ? questions.filter((q) => isCorrect(q, answers[q.id])).length : 0
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0
  const inPlan = !!getPlanEntry(unit.id)

  // Confirmar resultado → ajusta el plan y vuelve.
  const confirm = (outcome) => {
    if (inPlan) recordReview(unit.id, outcome)
    navigate('/plan')
  }

  return (
    <div className="container review-express">
      <header className="rx-head">
        <Link to={`/unidad/${unit.id}`} className="rx-back">← Volver a la unidad</Link>
        <h1>🔁 Repaso exprés · Unidad {unit.id}</h1>
        <p className="rx-sub">{unit.title}</p>
        {/* Indicador de fase */}
        <div className="rx-steps">
          <span className={phase === 'summary' ? 'active' : 'done'}>1. Refresca</span>
          <span className={phase === 'test' ? 'active' : phase === 'result' ? 'done' : ''}>2. Demuéstralo</span>
          <span className={phase === 'result' ? 'active' : ''}>3. Resultado</span>
        </div>
      </header>

      {/* FASE 1: RESUMEN */}
      {phase === 'summary' && (
        <section className="rx-summary">
          <p className="rx-intro">Lee este resumen de lo esencial para refrescar la memoria. Luego pondrás a prueba lo que recuerdas.</p>
          {review.summary.map((block, i) => (
            <div className="rx-sum-block" key={i}>
              <h3>{block.title}</h3>
              <ul>
                {block.points.map((p, j) => <li key={j}>{rich(p)}</li>)}
              </ul>
            </div>
          ))}
          <button className="btn btn--big" onClick={() => { setPhase('test'); window.scrollTo({ top: 0 }) }}>
            Empezar mini-test →
          </button>
        </section>
      )}

      {/* FASE 2: MINI-TEST */}
      {phase === 'test' && (
        <section className="rx-test">
          <p className="rx-intro">{questions.length} preguntas rápidas. Responde lo que recuerdes.</p>
          <div className="exam-questions">
            {questions.map((q, i) => (
              <Question
                key={q.id}
                q={q}
                index={i}
                value={answers[q.id]}
                onChange={(v) => setAnswer(q.id, v)}
                graded={false}
              />
            ))}
          </div>
          <div className="exam-submit">
            <button className="btn btn--big" onClick={submit}>Corregir mini-test</button>
          </div>
        </section>
      )}

      {/* FASE 3: RESULTADO */}
      {phase === 'result' && (
        <section className="rx-result">
          <div className={`rx-score ${pct >= 70 ? 'good' : pct >= 40 ? 'mid' : 'bad'}`}>
            <span className="rx-score__big">{score}/{questions.length}</span>
            <span className="rx-score__pct">{pct}%</span>
          </div>
          <h2>{pct >= 70 ? '¡Bien recordado!' : pct >= 40 ? 'Vas regular' : 'Toca repasar más'}</h2>

          {/* Repaso de las preguntas corregidas */}
          <div className="exam-questions rx-corrected">
            {questions.map((q, i) => (
              <Question
                key={q.id}
                q={q}
                index={i}
                value={answers[q.id]}
                onChange={() => {}}
                graded={true}
                correct={isCorrect(q, answers[q.id])}
              />
            ))}
          </div>

          {/* Confirmación que ajusta el plan */}
          {inPlan ? (
            <div className="rx-confirm">
              <p>Has sacado <strong>{pct}%</strong>. ¿Cómo lo ves para programar el próximo repaso?</p>
              <div className="rx-confirm__btns">
                <button className="tracker__out tracker__out--mal" onClick={() => confirm('mal')}>Mal — repasar pronto</button>
                <button className="tracker__out tracker__out--normal" onClick={() => confirm('normal')}>Regular — repetir intervalo</button>
                <button className="tracker__out tracker__out--bien" onClick={() => confirm('bien')}>Bien — espaciar más</button>
              </div>
            </div>
          ) : (
            <div className="rx-confirm">
              <p>Esta unidad no está en tu plan de repaso. ¿Quieres seguirla?</p>
              <Link to={`/unidad/${unit.id}`} className="btn">Ir a la unidad</Link>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
