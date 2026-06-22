// Convierte texto con marcas sencillas **negrita** y *cursiva* en JSX.
// Suficiente para los apuntes; evita meter una librería de markdown entera.
import { Fragment } from 'react'

export function rich(text) {
  if (!text) return null
  // Partimos por **...** y *...* conservando los delimitadores.
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
