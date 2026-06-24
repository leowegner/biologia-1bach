import { useState, useMemo, useEffect } from 'react'
import { rich } from '../lib/richText.jsx'
import { initSession, currentCard, rate, isDone, progress } from '../lib/flashcardQueue.js'

// ============================================================================
// Flashcards de vitaminas con repaso intra-sesión basado en evidencia.
// (Ver src/lib/flashcardQueue.js para la lógica de la cola.)
//
// block.data: lista de vitaminas { vit, fuentes:[], funciones:[], carencias:[] }
// Se generan 7 barajas (Todas + 6 tipos). En cada baraja estudias con 3
// botones: "No me lo sé / Medio / Me lo sé", y la sesión repite las difíciles
// hasta que dominas todas.
// ============================================================================

function buildDecks(vitaminas) {
  const directDeck = (key, frontLabel) =>
    vitaminas
      .filter((v) => v[key] && v[key].length)
      .map((v) => ({ front: `${frontLabel} de la **vitamina ${v.vit}**:`, back: v[key] }))

  const inverseDeck = (key, frontLabel) => {
    const map = new Map()
    for (const v of vitaminas) {
      for (const item of v[key] || []) {
        if (!map.has(item)) map.set(item, [])
        map.get(item).push(v.vit)
      }
    }
    return [...map.entries()].map(([item, vits]) => ({
      front: `${frontLabel}: **${item}**. ¿Qué vitamina(s)?`,
      back: vits.map((x) => `Vitamina ${x}`),
    }))
  }

  const base = [
    { id: 'vit-fuente', label: 'Vitamina → fuentes', cards: directDeck('fuentes', 'Fuentes') },
    { id: 'vit-funcion', label: 'Vitamina → funciones', cards: directDeck('funciones', 'Funciones') },
    { id: 'vit-carencia', label: 'Vitamina → carencias', cards: directDeck('carencias', 'Carencias por falta') },
    { id: 'carencia-vit', label: 'Carencia → vitamina', cards: inverseDeck('carencias', 'Carencia') },
    { id: 'funcion-vit', label: 'Función → vitamina', cards: inverseDeck('funciones', 'Función') },
    { id: 'fuente-vit', label: 'Fuente → vitamina', cards: inverseDeck('fuentes', 'Fuente') },
  ]
  const todas = base.flatMap((d) => d.cards)
  return [{ id: 'todas', label: 'Todas (mezcladas)', cards: todas }, ...base]
}

// Barajado determinista (sin Math.random): mezcla en función de una semilla.
// Permite "barajar" reproduciblemente al incrementar la semilla.
function shuffledOrder(n, seed) {
  const order = Array.from({ length: n }, (_, i) => i)
  let state = (seed * 2654435761) >>> 0 || 1
  const rnd = () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff
    return state / 0x7fffffff
  }
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order
}

export default function Flashcards({ block }) {
  const decks = useMemo(() => buildDecks(block.data), [block.data])
  const [deckIdx, setDeckIdx] = useState(0)
  const [seed, setSeed] = useState(1)
  const [flipped, setFlipped] = useState(false)
  const [shuffling, setShuffling] = useState(false)

  const deck = decks[deckIdx]
  const order = useMemo(() => shuffledOrder(deck.cards.length, seed), [deck.cards.length, seed])
  const [session, setSession] = useState(() => initSession(deck.cards, order))

  useEffect(() => {
    setSession(initSession(deck.cards, order))
    setFlipped(false)
  }, [deck, order])

  const cardIdx = currentCard(session)
  const card = cardIdx != null ? deck.cards[cardIdx] : null
  const done = isDone(session)
  const pct = Math.round(progress(session) * 100)

  const pickDeck = (i) => { setDeckIdx(i); setSeed(1) }

  const doRate = (grade) => {
    setSession((s) => rate(s, grade))
    setFlipped(false)
  }

  const shuffle = () => {
    setShuffling(true)
    setFlipped(false)
    setTimeout(() => {
      setSeed((s) => s + 1)
      setShuffling(false)
    }, 650)
  }

  const restart = () => { setSeed((s) => s + 1) }

  return (
    <div className="flashcards no-print">
      <div className="fc-decks">
        {decks.map((d, i) => (
          <button
            key={d.id}
            className={`fc-deck-btn ${i === deckIdx ? 'active' : ''}`}
            onClick={() => pickDeck(i)}
          >
            {d.label}
            <span className="fc-deck-count">{d.cards.length}</span>
          </button>
        ))}
      </div>

      <div className="fc-bar">
        <div className="fc-progress">
          <div className="fc-progress__fill" style={{ width: `${pct}%` }} />
          <span className="fc-progress__label">{session.graduated.length} / {session.total} dominadas</span>
        </div>
        <button className="fc-shuffle" onClick={shuffle} aria-label="Barajar">🔀 Barajar</button>
      </div>

      {done ? (
        <div className="fc-done">
          <div className="fc-done__ico">🎉</div>
          <h3>¡Baraja dominada!</h3>
          <p>Has repasado las {session.total} tarjetas hasta acertarlas todas.</p>
          <button className="btn" onClick={restart}>🔁 Repasar otra vez</button>
        </div>
      ) : (
        <>
          <div
            className={`fc-card ${flipped ? 'is-flipped' : ''} ${shuffling ? 'is-shuffling' : ''}`}
            onClick={() => !shuffling && setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !shuffling) { e.preventDefault(); setFlipped((f) => !f) }
            }}
          >
            <div className="fc-stack fc-stack--1" aria-hidden="true" />
            <div className="fc-stack fc-stack--2" aria-hidden="true" />
            <div className="fc-card__inner">
              <div className="fc-face fc-face--front">
                <span className="fc-tag">Pregunta</span>
                <div className="fc-content">{card && rich(card.front)}</div>
                <span className="fc-hint">Pulsa para ver la respuesta</span>
              </div>
              <div className="fc-face fc-face--back">
                <span className="fc-tag fc-tag--answer">Respuesta</span>
                <ul className="fc-list">
                  {card && card.back.map((item, i) => <li key={i}>{rich(item)}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {flipped ? (
            <div className="fc-rate">
              <button className="fc-rate-btn fc-rate-btn--no" onClick={() => doRate('no')}>
                ❌ No me lo sé
              </button>
              <button className="fc-rate-btn fc-rate-btn--medio" onClick={() => doRate('medio')}>
                🤔 Medio
              </button>
              <button className="fc-rate-btn fc-rate-btn--se" onClick={() => doRate('se')}>
                ✅ Me lo sé
              </button>
            </div>
          ) : (
            <p className="fc-rate-hint">Voltea la tarjeta para calificarte</p>
          )}
        </>
      )}
    </div>
  )
}
