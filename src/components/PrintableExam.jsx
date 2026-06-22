// Versión imprimible del examen.
// En PANTALLA está oculta (CSS: .printable { display: none }) salvo el panel
// de opciones de impresión. Al imprimir (@media print) se invierte: se oculta
// todo lo demás (.no-print) y se muestra esto en formato A4 limpio.

function letter(i) {
  return String.fromCharCode(97 + i) // 0→a, 1→b...
}

export default function PrintableExam({ unit, showSolutions, onToggleSolutions }) {
  const exam = unit.exam

  return (
    <>
      {/* Panel de opciones — visible en pantalla, NO se imprime */}
      <div className="print-options no-print">
        <span className="print-options__title">🖨️ Opciones de impresión</span>
        <label className="print-options__check">
          <input
            type="checkbox"
            checked={showSolutions}
            onChange={(e) => onToggleSolutions(e.target.checked)}
          />
          Incluir soluciones (plantilla de corrección)
        </label>
        <button className="btn btn--small" onClick={() => window.print()}>
          Imprimir ahora
        </button>
      </div>

      {/* La hoja imprimible */}
      <div className="printable" aria-hidden="true">
        <div className="printable__header">
          <h1>Biología · 1º Bachillerato</h1>
          <h2>Examen — Unidad {unit.id}: {unit.title}</h2>
          {!showSolutions && (
            <div className="printable__fields">
              <span>Nombre y apellidos: ______________________________________</span>
              <span>Fecha: ____________</span>
              <span>Calificación: ______</span>
            </div>
          )}
          {showSolutions && <div className="printable__soltag">PLANTILLA DE SOLUCIONES</div>}
        </div>

        <ol className="printable__questions">
          {exam.map((q) => (
            <li key={q.id} className="printable__q">
              <p className="printable__q-text">{q.question}</p>

              {q.type === 'mc' && (
                <ul className="printable__opts">
                  {q.options.map((opt, i) => (
                    <li key={i} className={showSolutions && q.answer === i ? 'is-answer' : ''}>
                      <span className="printable__opt-letter">{letter(i)})</span> {opt}
                      {showSolutions && q.answer === i && ' ✔'}
                    </li>
                  ))}
                </ul>
              )}

              {q.type === 'tf' && (
                <div className="printable__tf">
                  <span className={showSolutions && q.answer === true ? 'is-answer' : ''}>
                    ☐ Verdadero {showSolutions && q.answer === true && '✔'}
                  </span>
                  <span className={showSolutions && q.answer === false ? 'is-answer' : ''}>
                    ☐ Falso {showSolutions && q.answer === false && '✔'}
                  </span>
                </div>
              )}

              {q.type === 'order' && (
                <div className="printable__order">
                  <p className="printable__order-hint">
                    Numera del 1 al {q.items.length} en el orden correcto:
                  </p>
                  <ul>
                    {q.items.map((item, i) => {
                      // En la plantilla de soluciones, indica la posición correcta de cada elemento.
                      const correctPos = showSolutions ? q.answer.indexOf(i) + 1 : null
                      return (
                        <li key={i}>
                          <span className="printable__order-box">
                            {showSolutions ? correctPos : '___'}
                          </span>{' '}
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {showSolutions && (
                <p className="printable__explain">→ {q.explanation}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
