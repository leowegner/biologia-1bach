// Lógica de corrección de preguntas, separada para reutilizarla en el examen
// y en el repaso.

// ¿Es correcta la respuesta `value` para la pregunta `q`?
export function isCorrect(q, value) {
  switch (q.type) {
    case 'mc':
      return value === q.answer
    case 'tf':
      return value === q.answer
    case 'order': {
      // Si el alumno no mueve nada, `value` llega undefined, pero en pantalla
      // SÍ se muestra un orden por defecto [0,1,2,...]. Hay que evaluar ESE
      // orden, no rechazarlo: si el orden inicial ya es el correcto, es válido.
      const current = Array.isArray(value) ? value : q.items.map((_, i) => i)
      return (
        current.length === q.answer.length &&
        current.every((v, i) => v === q.answer[i])
      )
    }
    default:
      return false
  }
}

// Para las preguntas de ordenar, el valor inicial (sin tocar) ya viene
// "ordenado por defecto". Consideramos que el alumno no ha respondido si:
//   - mc/tf: el valor es undefined
//   - order: nunca lo tocó (lo tratamos como respondido siempre, porque
//     siempre hay un orden visible; si lo deja como está, cuenta como su respuesta)
export function isAnswered(q, value) {
  if (q.type === 'order') return true
  return value !== undefined && value !== null
}
