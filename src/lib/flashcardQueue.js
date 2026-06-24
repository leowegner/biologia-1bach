// ============================================================================
// Cola de repaso intra-sesión para flashcards.
// ----------------------------------------------------------------------------
// Basado en la evidencia (ver investigación): el modelo correcto para repaso
// DENTRO de una sesión son los "learning steps" de Anki + aprendizaje a
// criterio (Karpicke 2017):
//   - "No me lo sé"  → la tarjeta vuelve a aparecer PRONTO, pero NO de
//                      inmediato: se reinserta unas pocas posiciones más
//                      adelante (intercalando otras), porque repetir una
//                      tarjeta fallada back-to-back baja la retención.
//   - "Medio"        → reaparece más adelante que una fallada (intercalando
//                      más tarjetas), pero sigue en la ronda.
//   - "Me lo sé"     → se "gradúa": sale de la ronda.
// La sesión termina cuando todas las tarjetas se han graduado (criterio:
// cada una acertada al menos una vez como "me lo sé").
// ============================================================================

// A qué distancia (en nº de tarjetas por delante) se reinserta cada nivel.
// "No" reaparece antes que "Medio". Si la cola es más corta que el gap,
// se reinserta al final (intercalando todo lo que quede).
export const GAPS = {
  no: 2, // "no me lo sé": vuelve tras ~2 tarjetas
  medio: 5, // "medio": vuelve tras ~5 tarjetas
}

// Crea el estado inicial de una sesión a partir de una lista de tarjetas.
// Cada tarjeta del deck se identifica por su índice; guardamos el orden de la
// cola y cuántas calificaciones se han hecho (para el progreso).
export function initSession(cards, order) {
  // order: array opcional con el orden inicial (p. ej. barajado). Si no, 0..n-1.
  const queue = order ? [...order] : cards.map((_, i) => i)
  return {
    queue, // índices de tarjetas pendientes, en orden
    graduated: [], // índices ya dominados ("me lo sé")
    total: cards.length,
    seen: 0, // nº de calificaciones hechas (para progreso)
  }
}

// La tarjeta actual es la primera de la cola.
export function currentCard(session) {
  return session.queue.length ? session.queue[0] : null
}

// Aplica una calificación ('no' | 'medio' | 'se') a la tarjeta actual y
// devuelve un NUEVO estado de sesión (inmutable).
export function rate(session, grade) {
  if (!session.queue.length) return session
  const [cardIdx, ...rest] = session.queue
  const next = {
    ...session,
    seen: session.seen + 1,
    queue: rest,
    graduated: [...session.graduated],
  }

  if (grade === 'se') {
    // Se gradúa: fuera de la cola.
    next.graduated.push(cardIdx)
    return next
  }

  // 'no' o 'medio': reinsertar más adelante, intercalando otras tarjetas.
  const gap = grade === 'no' ? GAPS.no : GAPS.medio
  const pos = Math.min(gap, next.queue.length) // si no hay suficientes, al final
  next.queue = [...next.queue.slice(0, pos), cardIdx, ...next.queue.slice(pos)]
  return next
}

// ¿Ha terminado la sesión? (todas graduadas)
export function isDone(session) {
  return session.queue.length === 0
}

// Progreso 0..1 para la barra (tarjetas graduadas / total).
export function progress(session) {
  if (!session.total) return 0
  return session.graduated.length / session.total
}
