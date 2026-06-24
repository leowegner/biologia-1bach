// ============================================================================
// Plan de repaso espaciado POR UNIDADES (inter-sesión).
// ----------------------------------------------------------------------------
// Distinto de las flashcards (que es intra-sesión). Aquí cada unidad que
// marcas como "estudiada" entra en un ciclo de repasos a intervalos
// crecientes. La app te dice qué unidades toca repasar hoy.
//
// Según la investigación: lo que de verdad importa es VOLVER otro día
// (el espaciado entre sesiones tiene efecto grande, g≈0.74); la curva exacta
// de intervalos da casi igual (los expansivos no superan a los fijos). Usamos
// intervalos crecientes razonables porque son intuitivos y conocidos.
//
// Avance ADAPTATIVO: tras repasar, según cómo te fue avanzas o retrocedes
// en la escala de intervalos.
//
// Guardado en localStorage (clave 'bio1bach.plan'):
//   { "0": { unitId:0, step:2, due: <epochDay>, lastReview: <epochDay> }, ... }
//   step = índice dentro de INTERVALS; due = día en que toca el próximo repaso.
// ============================================================================

// Intervalos en días: tras estudiar, repasar al día 1, luego 3, 7, 14, 30, 50.
export const INTERVALS = [1, 3, 7, 14, 30, 50]

const KEY = 'bio1bach.plan'

// --- Utilidades de fecha: trabajamos en "días epoch" (enteros) ---
// Días enteros desde 1970, en hora local. Así dos momentos del mismo día
// dan el mismo número y las comparaciones son limpias.
export function todayEpochDay(now = new Date()) {
  const local = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.floor(local.getTime() / 86400000)
}

function readAll() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeAll(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    /* incógnito, etc. */
  }
  try {
    window.dispatchEvent(new CustomEvent('plan-actualizado'))
  } catch {
    /* sin window */
  }
}

// Marca una unidad como "estudiada hoy": arranca su ciclo en el primer
// intervalo (repasar mañana, día +1). Sobrescribe si ya existía.
export function markStudied(unitId, today = todayEpochDay()) {
  const all = readAll()
  all[unitId] = {
    unitId: Number(unitId),
    step: 0,
    due: today + INTERVALS[0],
    lastReview: today,
  }
  writeAll(all)
}

// Registra un repaso hoy con un resultado:
//   'bien'  → avanza al siguiente intervalo
//   'mal'   → retrocede un intervalo (mínimo el primero), para repasar antes
//   'normal'→ se queda en el mismo intervalo (lo repite)
export function recordReview(unitId, outcome, today = todayEpochDay()) {
  const all = readAll()
  const entry = all[unitId]
  if (!entry) return
  let step = entry.step
  if (outcome === 'bien') step = Math.min(step + 1, INTERVALS.length - 1)
  else if (outcome === 'mal') step = Math.max(step - 1, 0)
  // 'normal' deja step igual.
  all[unitId] = {
    ...entry,
    step,
    due: today + INTERVALS[step],
    lastReview: today,
  }
  writeAll(all)
}

// Saca una unidad del plan (dejar de seguirla).
export function removeFromPlan(unitId) {
  const all = readAll()
  delete all[unitId]
  writeAll(all)
}

// Estado de una unidad concreta (o null si no está en el plan).
export function getPlanEntry(unitId) {
  return readAll()[unitId] || null
}

// Todas las entradas del plan.
export function getPlan() {
  return Object.values(readAll())
}

// Unidades que toca repasar HOY o antes (vencidas). due <= hoy.
export function getDueToday(today = todayEpochDay()) {
  return getPlan().filter((e) => e.due <= today)
}

// Nº de unidades pendientes de repasar hoy (para el badge).
export function countDueToday(today = todayEpochDay()) {
  return getDueToday(today).length
}

// Texto legible de cuándo toca el próximo repaso de una unidad.
export function dueLabel(entry, today = todayEpochDay()) {
  const diff = entry.due - today
  if (diff < 0) return `Atrasado ${-diff} día${-diff !== 1 ? 's' : ''}`
  if (diff === 0) return 'Hoy'
  if (diff === 1) return 'Mañana'
  return `En ${diff} días`
}
