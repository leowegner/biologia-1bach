// ============================================================================
// REGISTRO CENTRAL DE UNIDADES
// ----------------------------------------------------------------------------
// Esto es lo único que hay que tocar para añadir una unidad nueva:
//   1. Crea src/data/units/unidadN.js exportando un objeto con la misma forma
//      que unidad0.js (ver ese archivo como plantilla).
//   2. Impórtalo aquí abajo y añádelo al array `units`.
//   3. Pon `available: true` cuando esté listo para mostrarse.
// El resto de la app (índice, rutas, examen, repaso) se adapta sola.
// ============================================================================

import { unidad0 } from './unidad0.js'
import { unidad1 } from './unidad1.js'
import { unidad2 } from './unidad2.js'

// Las unidades que aún no existen se declaran como "placeholders": aparecen
// bloqueadas en el índice para que se vea el plan completo del curso.
const placeholder = (id, title) => ({
  id,
  title,
  available: false,
  sections: [],
  exam: [],
})

export const units = [
  unidad0,
  unidad1,
  unidad2,
  placeholder(3, 'Célula'),
  placeholder(4, 'Funcionamiento celular'),
  placeholder(5, 'Tejidos'),
  placeholder(6, 'Taxonomía'),
  placeholder(7, 'Nutrición (I)'),
  placeholder(8, 'Nutrición (II)'),
  placeholder(9, 'Reproducción'),
  placeholder(10, 'Relación'),
  placeholder(11, 'Genética'),
]

export function getUnit(id) {
  return units.find((u) => String(u.id) === String(id)) || null
}
