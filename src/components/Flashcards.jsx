import { useState, useMemo } from 'react'
import { rich } from '../lib/richText.jsx'

// ============================================================================
// Flashcards de vitaminas.
// ----------------------------------------------------------------------------
// Recibe en block.data una lista de vitaminas, cada una con:
//   { vit, fuentes:[], funciones:[], carencias:[] }
// y genera 6 "barajas" (decks) de tarjetas pregunta→respuesta:
//   1. Vitamina → sus fuentes
//   2. Vitamina → sus funciones
//   3. Vitamina → sus carencias
//   4. Carencia → qué vitamina(s)
//   5. Función → qué vitamina(s)
//   6. Fuente → qué vitamina(s)
// Las tres últimas son "inversas": una misma fuente/función/carencia puede
// corresponder a varias vitaminas, así que la respuesta agrupa todas.
// ============================================================================

// Construye las barajas a partir de los datos.
function buildDecks(vitaminas) {
  // Barajas directas: vitamina → lista de X.
  const directDeck = (key, frontLabel) =>
    vitaminas
      .filter((v) => v[key] && v[key].length)
      .map((v) => ({
        front: `${frontLabel} de la **vitamina ${v.vit}**:`,
        back: v[key],
      }))

  // Barajas inversas: cada valor de X → todas las vitaminas que lo tienen.
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

  // Modo "Todas": junta cualquier tarjeta de todas las barajas anteriores.
  const todas = base.flatMap((d) => d.cards)
  return [{ id: 'todas', label: 'Todas (mezcladas)', cards: todas }, ...base]
}

export default function Flashcards({ block }) {
  const decks = useMemo(() => buildDecks(block.data), [block.data])
  const [deckIdx, setDeckIdx] = useState(0)
  const [cardIdx, setCardIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const deck = decks[deckIdx]
  const card = deck.cards[cardIdx]

  const pickDeck = (i) => {
    setDeckIdx(i)
    setCardIdx(0)
    setFlipped(false)
  }
  const next = () => {
    setFlipped(false)
    setCardIdx((i) => (i + 1) % deck.cards.length)
  }
  const prev = () => {
    setFlipped(false)
    setCardIdx((i) => (i - 1 + deck.cards.length) % deck.cards.length)
  }

  return (
    <div className="flashcards no-print">
      {/* Selector de baraja */}
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

      {/* Tarjeta (se voltea al hacer clic) */}
      <div
        className={`fc-card ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped((f) => !f) }
        }}
      >
        <div className="fc-card__inner">
          <div className="fc-face fc-face--front">
            <span className="fc-tag">Pregunta</span>
            <div className="fc-content">{rich(card.front)}</div>
            <span className="fc-hint">Pulsa para ver la respuesta</span>
          </div>
          <div className="fc-face fc-face--back">
            <span className="fc-tag fc-tag--answer">Respuesta</span>
            <ul className="fc-list">
              {card.back.map((item, i) => (
                <li key={i}>{rich(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <div className="fc-nav">
        <button onClick={prev} aria-label="Anterior">← Anterior</button>
        <span className="fc-counter">{cardIdx + 1} / {deck.cards.length}</span>
        <button onClick={next} aria-label="Siguiente">Siguiente →</button>
      </div>
    </div>
  )
}
