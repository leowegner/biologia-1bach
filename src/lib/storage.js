// ============================================================================
// Gestión de los fallos del examen en localStorage.
// ----------------------------------------------------------------------------
// Cuando el alumno falla una pregunta en el examen, se guarda aquí para que
// luego pueda repasarla en la sección "Repaso". Si más tarde la acierta en el
// repaso, se elimina de la lista.
//
// Estructura guardada (clave 'bio1bach.fallos'):
//   {
//     "u0-q3": { unitId: 0, questionId: "u0-q3", fails: 2, lastFailed: 173... },
//     ...
//   }
// Guardamos solo el ID de la pregunta (no el texto), y al repasar buscamos la
// pregunta viva en los datos. Así, si corriges el contenido, el repaso se
// actualiza solo.
// ============================================================================

const KEY = 'bio1bach.fallos'

function readAll() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    // Si localStorage está deshabilitado o el JSON está corrupto, no rompemos la app.
    return {}
  }
}

function writeAll(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // Modo incógnito con cuota 0, etc. Fallamos en silencio.
  }
  // Avisamos a la interfaz (p. ej. el badge de la navbar) de que los fallos
  // han cambiado, para que se actualice sin esperar a un cambio de página.
  try {
    window.dispatchEvent(new CustomEvent('fallos-actualizados'))
  } catch {
    // En entornos sin window (SSR/tests) no hacemos nada.
  }
}

// Registra un fallo (o incrementa su contador si ya existía).
export function recordFail(unitId, questionId, timestamp) {
  const all = readAll()
  const prev = all[questionId]
  all[questionId] = {
    unitId,
    questionId,
    fails: (prev?.fails || 0) + 1,
    lastFailed: timestamp ?? prev?.lastFailed ?? 0,
  }
  writeAll(all)
}

// Quita una pregunta de la lista de repaso (cuando se acierta al repasar).
export function clearFail(questionId) {
  const all = readAll()
  delete all[questionId]
  writeAll(all)
}

// Devuelve los registros de fallos, opcionalmente filtrados por unidad.
export function getFails(unitId = null) {
  const all = Object.values(readAll())
  if (unitId === null) return all
  return all.filter((f) => String(f.unitId) === String(unitId))
}

// Número total de preguntas pendientes de repasar.
export function countFails(unitId = null) {
  return getFails(unitId).length
}

// Borra TODOS los fallos (botón "limpiar repaso").
export function clearAllFails() {
  writeAll({})
}
