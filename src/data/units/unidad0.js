// ============================================================================
// UNIDAD 0 — Introducción a la investigación científica
// ----------------------------------------------------------------------------
// PLANTILLA para futuras unidades. La forma de los datos es:
//
//   {
//     id, title, subtitle, available,
//     sections: [ { id, title, icon, blocks: [...] } ],
//     exam: [ { id, type, question, ... } ]
//   }
//
// Cada "block" es un trozo de contenido con un `type`. Los tipos disponibles
// están renderizados en src/components/ContentBlock.jsx:
//   - { type: 'p', text }                          → párrafo (admite **negrita** y *cursiva*)
//   - { type: 'h', text }                          → subtítulo dentro de la sección
//   - { type: 'list', items: [] }                  → lista con viñetas
//   - { type: 'steps', items: [{title, text}] }    → pasos numerados
//   - { type: 'key', title, text }                 → caja de "concepto clave"
//   - { type: 'example', title, text }             → caja de ejemplo
//   - { type: 'warning', title, text }             → caja de aviso / error típico
//   - { type: 'quote', text, source }              → cita textual del libro
//   - { type: 'table', headers: [], rows: [[]] }   → tabla
//   - { type: 'phases', items: [...] }             → tarjetas de las fases del método
//   - { type: 'activity', label, question, answer | answerBlocks }
//                                                  → ejercicio con respuesta oculta
//                                                    (answer = texto; answerBlocks = array de bloques)
// ============================================================================

export const unidad0 = {
  id: 0,
  title: 'Introducción a la investigación científica',
  subtitle: 'El método científico, las variables y cómo se construye el conocimiento',
  available: true,

  sections: [
    // ---------------------------------------------------------------- §1
    {
      id: 'que-es-ciencia',
      title: '1. ¿Qué es la ciencia?',
      icon: '🔬',
      blocks: [
        {
          type: 'p',
          text: 'La **ciencia** es una forma de conocer el mundo basada en la **observación** y la **comprobación**, no en la opinión, la tradición o la autoridad. Lo que distingue a una afirmación científica de cualquier otra no es que sea "verdad absoluta", sino que se ha obtenido siguiendo un método que cualquiera podría repetir para comprobarla.',
        },
        {
          type: 'p',
          text: 'En Biología esto es importante: muchas ideas que parecen "de sentido común" resultan ser falsas cuando se ponen a prueba. Por eso el científico no se fía de lo que *parece*, sino de lo que *se puede medir y repetir*.',
        },
        {
          type: 'quote',
          text: 'El método científico es una metodología para obtener nuevos conocimientos, que ha caracterizado históricamente a la ciencia, y que consiste en la observación sistemática, medición, experimentación, y la formulación, análisis y modificación de hipótesis.',
          source: 'Wikipedia (citado en el libro de texto)',
        },
        {
          type: 'key',
          title: 'Concepto clave: objetividad',
          text: 'Las reglas del método científico buscan minimizar la influencia de la subjetividad del científico. Cuanto menos dependa el resultado de quién hace el experimento, más fiable es. Esta es la razón de ser de casi todas las técnicas que veremos (grupos de control, doble ciego, repetición...).',
        },
        {
          type: 'h',
          text: 'Los límites de la ciencia',
        },
        {
          type: 'p',
          text: 'No todo se puede estudiar igual. El libro señala dos límites muy importantes que conviene entender bien porque suelen caer en el examen:',
        },
        {
          type: 'list',
          items: [
            '**No todas las ciencias pueden experimentar.** En la astronomía, la vulcanología o la física teórica no puedes "hacer un experimento" con una estrella o un volcán. Observas, pero no manipulas. En las ciencias humanas (historia, sociología) los fenómenos son irrepetibles: la historia ocurre una sola vez.',
            '**En las ciencias empíricas no existe la verificación perfecta.** Nada queda "probado" al 100 %. Una teoría se acepta mientras funciona y predice bien, pero siempre podría aparecer un experimento futuro que la modifique. La ciencia avanza descartando errores, no acumulando verdades definitivas.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo: "científicamente probado"',
          text: 'Cuando un anuncio dice que algo está "científicamente probado", técnicamente está exagerando. En ciencias empíricas no se "prueba" nada de forma absoluta; lo correcto sería decir que "hay evidencia que lo apoya". La gravedad de Newton funcionó durante 200 años hasta que Einstein la corrigió: no estaba "probada", estaba bien apoyada por los datos de su época.',
        },
        {
          type: 'p',
          text: 'En las **ciencias formales** (matemáticas, lógica) sí hay demostraciones, pero solo dentro del sistema de axiomas que tú mismo defines. Incluso ahí, el **teorema de Gödel** demuestra que ningún sistema aritmético puede ser a la vez completo y consistente. Es decir: ni siquiera las matemáticas pueden demostrarlo absolutamente todo.',
        },
      ],
    },

    // ---------------------------------------------------------------- §2
    {
      id: 'metodo-cientifico',
      title: '2. Las fases del método científico',
      icon: '🧭',
      blocks: [
        {
          type: 'p',
          text: 'El método científico no es una receta rígida, pero sí sigue una secuencia lógica. Estas son las **fases** que debes saber nombrar **en orden** y, sobre todo, saber **reconocer** en un texto (eso es lo que de verdad pregunta el examen del libro).',
        },
        {
          type: 'phases',
          items: [
            {
              n: 1,
              name: 'Observación',
              icon: '👁️',
              text: 'Se detecta un hecho o fenómeno en la naturaleza que llama la atención. Es el punto de partida: algo que vemos y no sabemos explicar.',
              example: 'Observamos que dos jabalíes machos se comportan de forma agresiva al juntarlos.',
            },
            {
              n: 2,
              name: 'Pregunta / Problema',
              icon: '❓',
              text: 'A partir de la observación se plantea una pregunta concreta y respondible. Una buena pregunta científica se puede contestar con datos.',
              example: '¿Tiene el combate algún efecto sobre la química de la sangre del animal?',
            },
            {
              n: 3,
              name: 'Hipótesis',
              icon: '💡',
              text: 'Es una respuesta provisional a la pregunta, formulada de manera que se pueda comprobar (o refutar) con un experimento. Una hipótesis que no se puede poner a prueba no sirve.',
              example: 'El enfrentamiento agresivo aumenta el nivel de glucocorticoides en sangre.',
            },
            {
              n: 4,
              name: 'Experimentación',
              icon: '⚗️',
              text: 'Se diseña y realiza un experimento para poner a prueba la hipótesis, controlando las variables para que el resultado solo dependa de lo que queremos estudiar.',
              example: 'Se mide la concentración de glucocorticoides ANTES y DESPUÉS del combate en condiciones controladas.',
            },
            {
              n: 5,
              name: 'Análisis de resultados',
              icon: '📊',
              text: 'Se recogen y organizan los datos (tablas, gráficas) y se interpretan. Aquí entran las matemáticas y la estadística: los datos hablan, no las opiniones.',
              example: 'La gráfica muestra que la concentración después del combate (B) es claramente mayor que antes (A).',
            },
            {
              n: 6,
              name: 'Conclusión',
              icon: '✅',
              text: 'Se compara el resultado con la hipótesis. Si los datos la apoyan, la hipótesis se refuerza; si la contradicen, se rechaza o se reformula. Refutar una hipótesis también es un resultado válido y útil.',
              example: 'Los datos apoyan la hipótesis: el comportamiento agresivo eleva los glucocorticoides en sangre.',
            },
            {
              n: 7,
              name: 'Comunicación',
              icon: '📢',
              text: 'El trabajo se publica para que la comunidad científica pueda revisarlo y, sobre todo, repetirlo. Sin comunicación no hay ciencia: un descubrimiento que nadie puede comprobar no cuenta.',
              example: 'Se redacta un artículo con introducción, material y métodos, resultados, discusión y bibliografía.',
            },
          ],
        },
        {
          type: 'warning',
          title: 'Error típico en el examen',
          text: 'No confundas HIPÓTESIS con CONCLUSIÓN. La hipótesis se formula ANTES del experimento (es una suposición). La conclusión se obtiene DESPUÉS, a la vista de los datos. Si un texto dice "creemos que pasará X", es hipótesis. Si dice "los datos muestran que pasó X", es conclusión.',
        },
        {
          type: 'key',
          title: 'Concepto clave: la hipótesis debe ser falsable',
          text: 'Una hipótesis científica tiene que poder demostrarse FALSA. "Mañana lloverá o no lloverá" no es una hipótesis científica porque no hay forma de que sea falsa. "Si caliento agua a 100 °C a nivel del mar, hervirá" sí lo es, porque un solo experimento podría contradecirla.',
        },
        {
          type: 'p',
          text: 'El libro recalca que la **reproducibilidad** y la **repetibilidad** son fundamentales en muchas ciencias: un resultado solo se acepta si otros investigadores, repitiendo el experimento, obtienen lo mismo. Esto es lo que separa un resultado fiable de una casualidad.',
        },
      ],
    },

    // ---------------------------------------------------------------- §3
    {
      id: 'variables',
      title: '3. Las variables de un experimento',
      icon: '🎚️',
      blocks: [
        {
          type: 'p',
          text: 'Un experimento consiste en **cambiar una cosa** y **ver qué le pasa a otra**, manteniendo **todo lo demás igual**. Esas "cosas" que cambian o se miden son las **variables**. Entender los tres tipos es la clave para resolver las actividades de esta unidad.',
        },
        {
          type: 'table',
          headers: ['Tipo de variable', 'Qué es', 'En el ejemplo de los jabalíes'],
          rows: [
            ['**Independiente**', 'Lo que el investigador cambia o manipula a propósito. Es la "causa" que queremos estudiar.', 'El combate (que haya enfrentamiento o no).'],
            ['**Dependiente**', 'Lo que se mide para ver si cambia. Es el "efecto" que esperamos observar. Depende de la independiente.', 'La concentración de glucocorticoides en sangre.'],
            ['**Controladas**', 'Todo lo que se mantiene constante para que no influya en el resultado y "ensucie" el experimento.', 'El tamaño de los jabalíes, su especie, las condiciones del cercado.'],
          ],
        },
        {
          type: 'key',
          title: 'Concepto clave: ¿por qué se controlan las variables?',
          text: 'Si los dos jabalíes fueran de tamaños muy distintos, no sabríamos si el cambio en la sangre se debe al combate o a que uno es más grande. Al mantener igual todo lo demás, nos aseguramos de que el ÚNICO factor que cambia es el que estamos estudiando. Así la causa queda aislada.',
        },
        {
          type: 'h',
          text: 'Aplicado al experimento del libro',
        },
        {
          type: 'p',
          text: 'El libro pregunta explícitamente por qué se toman ciertas decisiones de diseño. Aquí está el razonamiento de cada una:',
        },
        {
          type: 'list',
          items: [
            '**¿Por qué jabalíes de tamaño similar?** Para que la diferencia de fuerza no determine el combate y no influya en el estrés. Si uno fuera mucho mayor, ganaría sin pelear y los datos no servirían. → controla la variable "tamaño".',
            '**¿Por qué de dos piaras diferentes?** Para que no se conozcan de antes. Animales de la misma piara ya tienen una jerarquía establecida y quizá no pelearían. → garantiza que el combate ocurra de verdad.',
            '**¿Por qué un cercado desconocido para ambos?** Para que ninguno juegue "en casa". Si uno estuviera en su territorio, tendría ventaja y más motivación, sesgando el resultado. → controla la variable "territorio".',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo extra: ¿la cafeína mejora la memoria?',
          text: 'Independiente: la dosis de cafeína (0 mg, 100 mg, 200 mg). Dependiente: la puntuación en un test de memoria. Controladas: la edad de los participantes, las horas de sueño, la dificultad del test, la hora del día. Si no controlas el sueño, alguien que durmió mal puntuará bajo aunque tome cafeína, y arruinará el experimento.',
        },
        {
          type: 'warning',
          title: 'Truco para identificarlas',
          text: 'Independiente = la que YO decido y cambio. Dependiente = la que MIDO al final (la que "depende" del resultado). Pregúntate siempre: "¿qué cambio yo?" (independiente) y "¿qué observo para ver el efecto?" (dependiente).',
        },
      ],
    },

    // ---------------------------------------------------------------- §4
    {
      id: 'control-doble-ciego',
      title: '4. Grupo de control y doble ciego',
      icon: '🧪',
      blocks: [
        {
          type: 'h',
          text: 'El grupo de control',
        },
        {
          type: 'p',
          text: 'Para saber si un tratamiento funciona, necesitas algo con qué comparar. El **grupo de control** es un grupo idéntico al experimental pero que NO recibe el tratamiento. Si los dos grupos acaban igual, el tratamiento no hace nada; si difieren, el tratamiento es la causa.',
        },
        {
          type: 'example',
          title: 'Ejemplo: probar una medicina nueva',
          text: 'Grupo experimental: 100 enfermos que toman la medicina. Grupo de control: otros 100 enfermos parecidos que toman una pastilla sin principio activo (placebo). Si mejora el 80 % del grupo experimental pero solo el 30 % del control, la diferencia (50 %) se debe a la medicina.',
        },
        {
          type: 'key',
          title: 'Concepto clave: el efecto placebo',
          text: 'Las personas a veces mejoran solo por CREER que están recibiendo un tratamiento. Por eso el grupo de control toma un placebo: así, esa mejora "psicológica" ocurre en ambos grupos y se cancela. Lo que sobra es el efecto real del fármaco.',
        },
        {
          type: 'h',
          text: 'El experimento de doble ciego',
        },
        {
          type: 'p',
          text: 'El **doble ciego** es una técnica para eliminar la subjetividad de raíz. En un experimento de doble ciego, **ni el participante ni el investigador** que toma las medidas saben quién recibe el tratamiento real y quién el placebo. Esa información está guardada y solo se revela al analizar los datos.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Simple ciego', text: 'El participante no sabe qué recibe, pero el investigador sí. Problema: el investigador puede influir sin querer (trata distinto, interpreta los síntomas con sesgo).' },
            { title: 'Doble ciego', text: 'Ni el participante ni el investigador lo saben. Así se elimina el sesgo por ambos lados. Es el estándar de oro en ensayos de medicamentos.' },
          ],
        },
        {
          type: 'example',
          title: '¿Por qué importa que el investigador tampoco sepa?',
          text: 'Imagina un médico convencido de que su medicina funciona. Sin querer, al evaluar a un paciente del grupo tratado podría anotar "tiene mejor cara" y al del control "sigue igual", aunque estén iguales. Si el médico NO sabe quién es quién, no puede sesgar la medida. Eso es el doble ciego.',
        },
        {
          type: 'p',
          text: 'Esto conecta directamente con la idea del principio: todas estas técnicas (control, placebo, doble ciego, repetición) existen por una sola razón — **reducir al máximo la subjetividad** para que el resultado sea fiable y reproducible.',
        },
      ],
    },

    // ---------------------------------------------------------------- §5
    {
      id: 'razonamiento',
      title: '5. Deducción e inducción',
      icon: '🔗',
      blocks: [
        {
          type: 'p',
          text: 'La ciencia razona de dos maneras complementarias. El libro pide saber distinguirlas, así que vamos con la diferencia clara y ejemplos.',
        },
        {
          type: 'table',
          headers: ['', 'Inducción', 'Deducción'],
          rows: [
            ['Dirección', 'De lo particular → a lo general', 'De lo general → a lo particular'],
            ['Parte de...', 'Muchos casos observados', 'Una ley o principio general'],
            ['Llega a...', 'Una ley o regla general', 'Una predicción sobre un caso concreto'],
            ['Seguridad', 'Probable (podría haber excepciones)', 'Segura (si las premisas son ciertas)'],
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo de INDUCCIÓN',
          text: 'Observo que este cisne es blanco, y este otro también, y otros mil más. INDUZCO la regla general: "todos los cisnes son blancos". Ojo: la inducción nunca es 100 % segura — de hecho existen cisnes negros en Australia. Por muchos casos que veas, siempre podría aparecer una excepción.',
        },
        {
          type: 'example',
          title: 'Ejemplo de DEDUCCIÓN',
          text: 'Parto de la ley general "todos los mamíferos respiran con pulmones". Sé que la ballena es un mamífero. DEDUZCO que la ballena respira con pulmones. Si las dos premisas son verdaderas, la conclusión es necesariamente verdadera.',
        },
        {
          type: 'key',
          title: 'Concepto clave: cómo se combinan en la ciencia',
          text: 'El científico INDUCE una hipótesis general a partir de observaciones, y luego DEDUCE qué debería pasar en un experimento concreto si esa hipótesis fuera cierta. Después comprueba si ocurre. Las dos formas de razonar trabajan juntas en el método científico.',
        },
      ],
    },

    // ---------------------------------------------------------------- §6
    {
      id: 'trabajo-cientifico',
      title: '6. Estructura de un trabajo científico',
      icon: '📄',
      blocks: [
        {
          type: 'p',
          text: 'Cuando un científico publica una investigación, no escribe lo que quiere como quiere: sigue una **estructura fija** que todo el mundo conoce. El libro te pide redactar un trabajo con estos apartados (en la actividad del colirrojo real), así que debes saber qué va en cada uno.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Introducción', text: 'Presenta el tema y el problema. ¿Qué se sabe ya? ¿Por qué es interesante? Aquí se plantea la pregunta y la hipótesis. Es el "de qué va y por qué importa".' },
            { title: 'Material y métodos', text: 'Describe EXACTAMENTE qué se usó y cómo se hizo, con tanto detalle que cualquiera podría repetirlo. Es lo que garantiza la reproducibilidad.' },
            { title: 'Resultados', text: 'Presenta los datos obtenidos de forma objetiva (tablas, gráficas), SIN interpretarlos todavía. Solo los hechos: "se observó X".' },
            { title: 'Discusión', text: 'Aquí sí se interpretan los resultados. ¿Qué significan? ¿Apoyan la hipótesis? ¿Concuerdan con otros estudios? ¿Qué limitaciones hubo?' },
            { title: 'Conclusiones', text: 'Las ideas principales que se extraen, de forma breve y clara. La respuesta final a la pregunta inicial.' },
            { title: 'Bibliografía', text: 'La lista de fuentes y trabajos consultados. Da rigor y permite a otros seguir el rastro de la información.' },
          ],
        },
        {
          type: 'warning',
          title: 'No confundas Resultados con Discusión',
          text: 'En RESULTADOS solo dices lo que pasó ("la concentración subió de 5 a 15 µg"). En DISCUSIÓN explicas qué significa ("esto sugiere que el estrés del combate activa la respuesta hormonal"). Mezclarlos es el error más típico al redactar un trabajo científico.',
        },
        {
          type: 'key',
          title: 'Concepto clave: por qué esta estructura',
          text: 'Esta estructura no es un capricho: refleja el método científico. Introducción = pregunta e hipótesis. Material y métodos = experimentación. Resultados = análisis de datos. Discusión y conclusiones = interpretación y respuesta. Bibliografía = conexión con la ciencia previa.',
        },
        {
          type: 'h',
          text: 'La actividad del colirrojo real',
        },
        {
          type: 'p',
          text: 'En el libro, el ejercicio del **colirrojo real** (*Phoenicurus phoenicurus*) te da datos de 4 parcelas forestales (dos pinares y dos pinsapares) y te pide plantear una hipótesis sobre su hábitat ideal y redactar un trabajo completo con esta estructura. La idea es que apliques TODO lo de la unidad: formular hipótesis, relacionar variables, interpretar una tabla de datos y comunicar los resultados correctamente.',
        },
      ],
    },

    // ---------------------------------------------------------------- §7
    {
      id: 'vocabulario',
      title: '7. Vocabulario esencial',
      icon: '📖',
      blocks: [
        {
          type: 'p',
          text: 'Estos son los términos que el libro pide buscar y que debes saber definir con tus palabras. Repásalos hasta que puedas explicarlos sin mirar.',
        },
        {
          type: 'table',
          headers: ['Término', 'Definición'],
          rows: [
            ['**Hipótesis**', 'Suposición o explicación provisional de un fenómeno, formulada para poder comprobarse mediante experimentos. Se plantea ANTES de experimentar.'],
            ['**Deducción**', 'Razonamiento que va de lo general a lo particular: de una ley se extrae una conclusión segura sobre un caso concreto.'],
            ['**Inducción**', 'Razonamiento que va de lo particular a lo general: a partir de muchos casos observados se formula una regla general (probable, no segura).'],
            ['**Doble ciego**', 'Experimento en el que ni el participante ni el investigador saben quién recibe el tratamiento real y quién el placebo, para evitar sesgos.'],
            ['**Glucocorticoides**', 'Hormonas producidas por la corteza de las glándulas suprarrenales, relacionadas con la respuesta al estrés. Suben cuando el organismo se enfrenta a una situación de tensión.'],
            ['**Variable independiente**', 'Factor que el investigador manipula o cambia a propósito en un experimento (la causa).'],
            ['**Variable dependiente**', 'Factor que se mide para ver si resulta afectado (el efecto).'],
            ['**Grupo de control**', 'Grupo idéntico al experimental pero que no recibe el tratamiento, usado como referencia para comparar.'],
            ['**Placebo**', 'Sustancia sin efecto real (sin principio activo) que se da al grupo de control para detectar el efecto psicológico de "creer" que se recibe tratamiento.'],
            ['**Reproducibilidad**', 'Propiedad de un resultado científico de poder obtenerse de nuevo si otros repiten el experimento. Es lo que hace fiable a la ciencia.'],
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- §8
    {
      id: 'actividades',
      title: '8. Actividades resueltas',
      icon: '✏️',
      blocks: [
        {
          type: 'p',
          text: 'Aquí tienes **todos los ejercicios del libro** de esta unidad. Intenta responder cada uno por tu cuenta y, cuando lo tengas, pulsa **«Ver respuesta»** para autocorregirte. Son respuestas orientativas: lo importante es que la tuya recoja las mismas ideas.',
        },

        // ----- Bloque 1: preguntas iniciales de teoría -----
        { type: 'h', text: 'Preguntas iniciales' },
        {
          type: 'activity',
          label: 'Pregunta',
          question: '¿Qué significa que algo está "científicamente probado"?',
          answer: 'En sentido estricto, en las ciencias empíricas (como la biología) **nada queda "probado" de forma absoluta**. Lo que llamamos "científicamente probado" significa en realidad que *hay muchas pruebas y evidencias que apoyan una afirmación*, y que esta ha superado numerosos experimentos sin ser refutada. Pero siempre podría aparecer en el futuro un experimento que la modifique o corrija. Por eso es más correcto decir que algo "está bien apoyado por la evidencia" que decir que está "probado".',
        },
        {
          type: 'activity',
          label: 'Vocabulario',
          question: 'Busca el significado de: hipótesis, deducción, inducción y doble ciego.',
          answerBlocks: [
            {
              type: 'table',
              headers: ['Término', 'Significado'],
              rows: [
                ['**Hipótesis**', 'Suposición o explicación provisional de un fenómeno, formulada de manera que se pueda comprobar mediante experimentos. Se plantea antes de experimentar.'],
                ['**Deducción**', 'Razonamiento que va de lo general a lo particular: a partir de una ley o principio general se obtiene una conclusión segura sobre un caso concreto.'],
                ['**Inducción**', 'Razonamiento que va de lo particular a lo general: a partir de muchos casos observados se formula una regla general (probable, no segura).'],
                ['**Doble ciego**', 'Experimento en el que ni el participante ni el investigador saben quién recibe el tratamiento real y quién el placebo, para evitar sesgos en los resultados.'],
              ],
            },
          ],
        },

        // ----- Bloque 2: experimento de los jabalíes -----
        { type: 'h', text: 'Experimento de los jabalíes' },
        {
          type: 'quote',
          text: 'Se seleccionan dos jabalíes machos de tamaño similar, provenientes de dos piaras que ocupan dos zonas de encinar diferentes, y se les sitúa juntos en un cercado desconocido para ambos. Se comprueba que presentan un comportamiento agresivo recíproco que acaba produciendo un enfrentamiento entre ambos. Antes y después del combate se toman muestras de su sangre para medir la cantidad de glucocorticoides.',
          source: 'Enunciado del libro',
        },
        {
          type: 'activity',
          label: 'Pregunta 1',
          question: 'Busca en el libro o diccionario el significado de glucocorticoides.',
          answer: 'Los **glucocorticoides** son hormonas producidas por la **corteza de las glándulas suprarrenales** (situadas sobre los riñones). Intervienen en el metabolismo de los glúcidos y, sobre todo, están relacionadas con la **respuesta al estrés**: sus niveles en sangre aumentan cuando el organismo se enfrenta a una situación de tensión, esfuerzo o peligro. El cortisol es el más conocido.',
        },
        {
          type: 'activity',
          label: 'Pregunta 2',
          question: '¿A qué fase del método científico corresponde este párrafo?',
          answer: 'Corresponde a la fase de **experimentación** (y de recogida/observación de datos). El párrafo describe el diseño del experimento: cómo se seleccionan los sujetos, en qué condiciones se les coloca y qué se mide (los glucocorticoides antes y después). No es una hipótesis (no propone una explicación) ni una conclusión (todavía no interpreta resultados): es el montaje experimental con el que se van a obtener los datos.',
        },
        {
          type: 'activity',
          label: 'Pregunta 3',
          question: '¿Qué variables utilizan?',
          answerBlocks: [
            {
              type: 'p',
              text: 'Se distinguen los tres tipos de variables:',
            },
            {
              type: 'list',
              items: [
                '**Variable independiente** (la causa, lo que se manipula): **el combate** o enfrentamiento agresivo entre los dos jabalíes. Se compara la situación antes y después de él.',
                '**Variable dependiente** (el efecto, lo que se mide): **la concentración de glucocorticoides en sangre** (en µg/100 ml de plasma).',
                '**Variables controladas** (lo que se mantiene constante): el **tamaño** de los jabalíes (similar), la **especie** y el **sexo** (machos), el **territorio** (cercado desconocido para ambos) y que provengan de **piaras diferentes**.',
              ],
            },
            {
              type: 'p',
              text: 'En resumen: se estudia cómo **el combate** afecta a **los glucocorticoides en sangre**, manteniendo controlado todo lo demás.',
            },
          ],
        },
        {
          type: 'activity',
          label: 'Pregunta 4',
          question: '¿Por qué se seleccionan jabalíes de tamaño similar? ¿Por qué de dos piaras diferentes? ¿Por qué el cercado es desconocido para ambos?',
          answerBlocks: [
            {
              type: 'list',
              items: [
                '**De tamaño similar:** para que ninguno tenga ventaja física clara. Si uno fuera mucho mayor, ganaría sin apenas pelea y no sabríamos si el cambio en la sangre se debe al combate o a la diferencia de tamaño. Así se *controla la variable tamaño*.',
                '**De piaras diferentes:** para que **no se conozcan de antes**. Dos jabalíes de la misma piara ya tienen establecida una jerarquía y quizá no llegarían a enfrentarse. Al ser de piaras distintas, se garantiza que el combate se produzca de verdad.',
                '**Cercado desconocido para ambos:** para que **ninguno juegue "en casa"**. Si uno estuviera en su propio territorio, tendría ventaja y más motivación para pelear, lo que sesgaría el resultado. Un terreno neutro *controla la variable territorio*.',
              ],
            },
            {
              type: 'p',
              text: 'Las tres decisiones tienen el mismo objetivo: **eliminar factores que puedan influir** en el resultado, para que el único factor en juego sea el combate.',
            },
          ],
        },
        {
          type: 'activity',
          label: 'Pregunta 5',
          question: 'Explica con tus palabras el resultado obtenido.',
          answer: 'La gráfica representa la tasa de glucocorticoides en sangre antes (A) y después (B) del combate. Se observa que **la concentración después del combate (B) es claramente mayor que antes (A)**. Es decir, tras el enfrentamiento agresivo, el nivel de glucocorticoides en la sangre de los jabalíes ha aumentado de forma notable.',
        },
        {
          type: 'activity',
          label: 'Pregunta 6',
          question: 'En vista de la gráfica, emite una posible conclusión que relacione comportamiento agresivo y concentración de glucocorticoides.',
          answer: 'Como los glucocorticoides aumentan tras el combate, se puede concluir que **existe una relación entre el comportamiento agresivo y el nivel de glucocorticoides en sangre**: las situaciones de enfrentamiento y agresividad (que son situaciones de estrés) provocan un aumento de la secreción de estas hormonas. Dicho de otro modo, el estrés del combate desencadena la liberación de glucocorticoides.',
        },
        {
          type: 'activity',
          label: 'Pregunta 7',
          question: 'Propón otro experimento que pueda confirmar la conclusión anterior.',
          answerBlocks: [
            {
              type: 'p',
              text: 'Cualquier experimento que provoque otra situación de estrés/agresividad y vuelva a medir los glucocorticoides sirve. Por ejemplo:',
            },
            {
              type: 'list',
              items: [
                'Medir los glucocorticoides en jabalíes sometidos a otra situación de estrés sin combate (por ejemplo, presencia de un depredador o un ruido fuerte) y comprobar si también suben.',
                'Repetir el experimento con un **grupo de control**: dos jabalíes que se colocan juntos pero que NO llegan a pelear (por ejemplo separados por una valla). Si en ellos los glucocorticoides no suben tanto, se confirma que es el combate lo que los eleva.',
                'Medir varias veces a lo largo del tiempo para ver si, tras el combate, los niveles vuelven a bajar cuando el animal se calma.',
              ],
            },
            {
              type: 'p',
              text: 'Lo importante es que el nuevo experimento **vuelva a poner a prueba la misma idea** controlando las variables, y que sus resultados sean reproducibles.',
            },
          ],
        },

        // ----- Bloque 3: trabajo científico del colirrojo real -----
        { type: 'h', text: 'Trabajo científico: el colirrojo real' },
        {
          type: 'p',
          text: 'El libro propone un estudio sobre el **colirrojo real** (*Phoenicurus phoenicurus*) en 4 parcelas forestales (Pinar 1, Pinar 2, Pinsapar 1 y Pinsapar 2), con datos sobre el grosor de los árboles, su densidad, la cobertura del suelo y los árboles muertos en pie. Estas actividades son más abiertas, así que las respuestas son una **guía de cómo enfocarlas**.',
        },
        {
          type: 'activity',
          label: 'Actividad',
          question: 'Plantea una hipótesis acerca de cuál es el hábitat ideal para la reproducción del colirrojo real.',
          answerBlocks: [
            {
              type: 'p',
              text: 'Una hipótesis razonable, observando los datos, sería:',
            },
            {
              type: 'quote',
              text: 'El colirrojo real se reproduce mejor en bosques maduros y bien desarrollados, con árboles de gran diámetro, alta cobertura del suelo y presencia de árboles muertos en pie (que le ofrecen huecos donde anidar).',
              source: 'Hipótesis de ejemplo',
            },
            {
              type: 'p',
              text: 'La idea clave es fijarse en que los **pinsapares** (bosques más densos y maduros) presentan, en general, mayores porcentajes de árboles gruesos, más cobertura y más árboles muertos en pie que los pinares. La hipótesis debe poder comprobarse correlacionando esas características con el número de parejas reproductoras.',
            },
          ],
        },
        {
          type: 'activity',
          label: 'Actividad',
          question: 'Imagina un número de parejas de colirrojo en cada parcela. ¿Por qué importa la correlación y no el número en sí?',
          answer: 'Porque lo que se busca **no es el dato concreto, sino la tendencia**: si asignas a cada parcela un número de parejas coherente con tu hipótesis (más parejas donde el bosque es más maduro), lo importante es que ese número *aumente o disminuya a la vez* que las características del hábitat (diámetro de los árboles, cobertura, árboles muertos en pie). Esa relación entre dos variables que cambian juntas es lo que se llama **correlación**. Un número aislado no demuestra nada; lo que apoya la hipótesis es ver que las parcelas con mejor hábitat tienen sistemáticamente más parejas.',
        },
        {
          type: 'activity',
          label: 'Actividad',
          question: 'Redacta un trabajo de investigación breve con todos sus apartados.',
          answerBlocks: [
            {
              type: 'p',
              text: 'El trabajo debe tener esta estructura (la misma de la sección 6). Aquí va qué incluir en cada apartado para este caso:',
            },
            {
              type: 'steps',
              items: [
                { title: 'Introducción', text: 'Presenta al colirrojo real, dónde vive y por qué interesa estudiar su hábitat. Plantea la pregunta (¿qué bosque le favorece más?) y tu hipótesis.' },
                { title: 'Material y métodos', text: 'Describe las 4 parcelas, los datos recogidos (diámetro de árboles, densidad, cobertura, árboles muertos) y cómo se contaron las parejas reproductoras.' },
                { title: 'Resultados', text: 'Presenta los datos en tablas/gráficas, incluyendo el número de parejas que has asignado a cada parcela, sin interpretarlos todavía.' },
                { title: 'Discusión', text: 'Interpreta: relaciona el número de parejas con las características del bosque y comenta si los datos apoyan la hipótesis. Compara pinares y pinsapares.' },
                { title: 'Conclusiones', text: 'Responde a la pregunta inicial de forma breve: cuál es el hábitat ideal según tus datos.' },
                { title: 'Bibliografía', text: 'Lista las fuentes consultadas para informarte sobre el colirrojo y su reproducción.' },
              ],
            },
            {
              type: 'warning',
              title: 'Recuerda',
              text: 'No mezcles Resultados con Discusión: en Resultados solo dices lo que hay; en Discusión explicas qué significa. Este ejercicio es el "examen práctico" de toda la unidad: aplica las fases del método y la estructura del trabajo científico.',
            },
          ],
        },
      ],
    },
  ],

  // ==========================================================================
  // EXAMEN FINAL — banco de preguntas de la Unidad 0
  // ==========================================================================
  exam: [
    {
      id: 'u0-q1',
      type: 'mc',
      question: '¿Cuál es el objetivo principal de las reglas del método científico?',
      options: [
        'Hacer los experimentos más rápidos',
        'Minimizar la influencia de la subjetividad del científico',
        'Demostrar las cosas de forma absoluta y definitiva',
        'Evitar tener que repetir los experimentos',
      ],
      answer: 1,
      explanation: 'Las reglas del método buscan reducir la subjetividad para que el resultado no dependa de quién hace el experimento, reforzando su validez.',
    },
    {
      id: 'u0-q2',
      type: 'mc',
      question: 'Una hipótesis científica debe ser, ante todo:',
      options: [
        'Verdadera con seguridad',
        'Complicada y técnica',
        'Comprobable / falsable',
        'Aceptada por la mayoría',
      ],
      answer: 2,
      explanation: 'Una hipótesis tiene que poder ponerse a prueba y, en principio, poder demostrarse falsa. Si no se puede comprobar, no es científica.',
    },
    {
      id: 'u0-q3',
      type: 'order',
      question: 'Ordena las fases del método científico:',
      items: ['Observación', 'Hipótesis', 'Experimentación', 'Análisis de resultados', 'Conclusión'],
      answer: [0, 1, 2, 3, 4],
      explanation: 'Se observa un fenómeno, se formula una hipótesis, se experimenta, se analizan los datos y se concluye.',
    },
    {
      id: 'u0-q4',
      type: 'tf',
      question: 'En las ciencias empíricas (como la biología) el conocimiento puede quedar "probado" de forma absoluta y definitiva.',
      answer: false,
      explanation: 'Falso. En ciencias empíricas no existe la verificación perfecta; una teoría se acepta mientras funcione, pero siempre podría modificarse.',
    },
    {
      id: 'u0-q5',
      type: 'mc',
      question: 'En el experimento de los jabalíes, la concentración de glucocorticoides en sangre es la variable:',
      options: ['Independiente', 'Dependiente', 'Controlada', 'Constante'],
      answer: 1,
      explanation: 'Es lo que se MIDE para ver el efecto del combate, así que es la variable dependiente.',
    },
    {
      id: 'u0-q6',
      type: 'mc',
      question: '¿Por qué se eligen dos jabalíes de tamaño similar?',
      options: [
        'Para que quepan en el cercado',
        'Para controlar la variable tamaño y que no influya en el resultado',
        'Porque es más barato',
        'Para que el combate dure más',
      ],
      answer: 1,
      explanation: 'Si fueran de tamaños distintos, no sabríamos si el cambio en la sangre se debe al combate o a la diferencia de tamaño. Se controla esa variable.',
    },
    {
      id: 'u0-q7',
      type: 'tf',
      question: 'En un experimento de doble ciego, el investigador que toma las medidas sí sabe quién recibe el tratamiento real.',
      answer: false,
      explanation: 'Falso. En el doble ciego NI el participante NI el investigador lo saben, precisamente para evitar el sesgo del investigador.',
    },
    {
      id: 'u0-q8',
      type: 'mc',
      question: 'Observar mil cisnes blancos y concluir "todos los cisnes son blancos" es un ejemplo de:',
      options: ['Deducción', 'Inducción', 'Hipótesis nula', 'Experimentación'],
      answer: 1,
      explanation: 'Es inducción: se va de casos particulares a una regla general. Y por eso no es 100 % segura (existen cisnes negros).',
    },
    {
      id: 'u0-q9',
      type: 'mc',
      question: 'Partir de "todos los mamíferos respiran por pulmones" y concluir que una ballena lo hace, es:',
      options: ['Inducción', 'Deducción', 'Observación', 'Correlación'],
      answer: 1,
      explanation: 'Es deducción: de una ley general se extrae una conclusión segura sobre un caso concreto.',
    },
    {
      id: 'u0-q10',
      type: 'mc',
      question: 'En un trabajo científico, ¿en qué apartado se INTERPRETAN los datos y se discute qué significan?',
      options: ['Resultados', 'Material y métodos', 'Discusión', 'Introducción'],
      answer: 2,
      explanation: 'En Resultados solo se presentan los datos; la interpretación va en la Discusión.',
    },
    {
      id: 'u0-q11',
      type: 'mc',
      question: '¿Cuál es la función del grupo de control en un experimento?',
      options: [
        'Recibir una dosis doble del tratamiento',
        'Servir de referencia: es igual pero no recibe el tratamiento',
        'Vigilar que el experimento se haga bien',
        'Repetir el experimento en otro laboratorio',
      ],
      answer: 1,
      explanation: 'El grupo de control es idéntico al experimental pero sin tratamiento, para poder comparar y aislar el efecto real.',
    },
    {
      id: 'u0-q12',
      type: 'tf',
      question: 'La reproducibilidad (que otros puedan repetir el experimento y obtener lo mismo) es fundamental para que un resultado se acepte.',
      answer: true,
      explanation: 'Verdadero. Un resultado solo se considera fiable si es reproducible; es uno de los pilares del método científico.',
    },
    {
      id: 'u0-q13',
      type: 'mc',
      question: 'Los glucocorticoides son hormonas relacionadas principalmente con:',
      options: [
        'La digestión de los alimentos',
        'La respuesta al estrés',
        'El crecimiento de los huesos',
        'La visión nocturna',
      ],
      answer: 1,
      explanation: 'Son hormonas de la corteza suprarrenal asociadas a la respuesta al estrés; por eso suben tras un combate.',
    },
    {
      id: 'u0-q14',
      type: 'mc',
      question: 'En el experimento de los jabalíes, "que haya combate o no" representa la variable:',
      options: ['Dependiente', 'Independiente', 'Controlada', 'Aleatoria'],
      answer: 1,
      explanation: 'Es lo que se manipula a propósito para ver su efecto: la variable independiente.',
    },
    {
      id: 'u0-q15',
      type: 'tf',
      question: 'La frase "mañana lloverá o no lloverá" es una hipótesis científica válida.',
      answer: false,
      explanation: 'Falso. No es falsable: pase lo que pase será cierta. Una hipótesis científica debe poder demostrarse falsa.',
    },
    {
      id: 'u0-q16',
      type: 'mc',
      question: 'El efecto placebo consiste en que:',
      options: [
        'El fármaco deja de funcionar con el tiempo',
        'Una persona mejora solo por creer que recibe tratamiento',
        'El control recibe una dosis mayor',
        'El investigador se equivoca al medir',
      ],
      answer: 1,
      explanation: 'Es la mejora producida por la creencia de estar recibiendo tratamiento; por eso al control se le da un placebo, para cancelarlo.',
    },
    {
      id: 'u0-q17',
      type: 'order',
      question: 'Ordena los apartados de un trabajo científico:',
      items: ['Introducción', 'Material y métodos', 'Resultados', 'Discusión', 'Bibliografía'],
      answer: [0, 1, 2, 3, 4],
      explanation: 'Introducción → material y métodos → resultados → discusión → bibliografía (las conclusiones van entre discusión y bibliografía).',
    },
    {
      id: 'u0-q18',
      type: 'mc',
      question: '¿Por qué se sitúa a los jabalíes en un cercado desconocido para ambos?',
      options: [
        'Para que ninguno tenga ventaja de "jugar en casa" (territorio)',
        'Para que se pierdan',
        'Porque es más grande',
        'Para poder grabarlos mejor',
      ],
      answer: 0,
      explanation: 'Si uno estuviera en su territorio tendría ventaja y motivación extra, sesgando el resultado. Se controla la variable territorio.',
    },
    {
      id: 'u0-q19',
      type: 'tf',
      question: 'Refutar (demostrar falsa) una hipótesis se considera un fracaso sin ningún valor científico.',
      answer: false,
      explanation: 'Falso. Refutar una hipótesis es un resultado válido y útil: la ciencia avanza descartando explicaciones equivocadas.',
    },
    {
      id: 'u0-q20',
      type: 'mc',
      question: 'En la actividad del colirrojo real, ¿qué se te pide hacer principalmente con los datos de las parcelas?',
      options: [
        'Memorizar los números de cada parcela',
        'Plantear una hipótesis sobre su hábitat ideal y redactar un trabajo científico',
        'Dibujar cada tipo de árbol',
        'Calcular el peso de los pájaros',
      ],
      answer: 1,
      explanation: 'Se pide formular una hipótesis sobre el hábitat ideal, relacionar las variables de las parcelas y redactar un trabajo con todos sus apartados.',
    },
  ],
}
