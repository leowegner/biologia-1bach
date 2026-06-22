# Biología 1º Bachillerato — Guía de estudio

App de estudio interactiva. Empieza con la **Unidad 0** (introducción a la
investigación científica) y está preparada para ir añadiendo el resto de
unidades del curso.

## Cómo arrancarla

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:5173
```

Para generar la versión final (carpeta `dist/`, lista para subir a cualquier
hosting estático como GitHub Pages, Netlify, etc.):

```bash
npm run build
npm run preview  # para ver el resultado del build
```

## Qué incluye la Unidad 0

- **Teoría completa** en 7 secciones (qué es la ciencia, las fases del método
  científico, variables, control y doble ciego, deducción/inducción, estructura
  de un trabajo científico y vocabulario), con ejemplos y conceptos clave.
- **Examen final** de 20 preguntas (opción múltiple, verdadero/falso y ordenar)
  con cronómetro y corrección automática.
- **Imprimir examen**: botón que abre el diálogo de impresión con una hoja
  limpia en A4. Se puede imprimir **en blanco** (para hacer en papel) o **con
  soluciones** (plantilla de corrección).
- **Repaso**: las preguntas que fallas se guardan en el navegador
  (localStorage) y aparecen en la sección «Repaso» para practicarlas. Cuando
  aciertas una, desaparece de la lista.

## Cómo añadir una unidad nueva (cuando la des en clase)

Todo el contenido vive en `src/data/units/`. La app se adapta sola; no hay que
tocar componentes.

1. **Copia** `src/data/units/unidad0.js` a `unidad1.js` (o el número que toque).
   Ese archivo está comentado y sirve de plantilla: explica todos los tipos de
   bloque de contenido disponibles (`p`, `h`, `list`, `steps`, `key`,
   `example`, `warning`, `quote`, `table`, `phases`) y el formato de las
   preguntas del examen.
2. **Rellena** su teoría (`sections`) y su examen (`exam`).
3. En `src/data/units/index.js`, **importa** la nueva unidad y **sustituye** su
   `placeholder(...)` por el objeto importado (o pon `available: true`).

Listo: la unidad aparece desbloqueada en el índice, con su contenido, su examen
imprimible y su repaso.

## Estructura del proyecto

```
src/
  data/units/        ← TODO el contenido (lo único que crece al añadir unidades)
    index.js         ← registro central de unidades
    unidad0.js       ← contenido + examen de la Unidad 0 (plantilla)
  components/        ← piezas de interfaz reutilizables
  pages/             ← las 4 pantallas (inicio, unidad, examen, repaso)
  lib/               ← utilidades (localStorage, corrección, formato de texto)
  styles/global.css  ← diseño visual + estilos de impresión
```
