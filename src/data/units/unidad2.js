// ============================================================================
// UNIDAD 2 — La materia viva: biomoléculas (II)
// ----------------------------------------------------------------------------
// Proteínas (aminoácidos, estructura, propiedades y funciones), ácidos
// nucleicos (nucleótidos, ADN y ARN) y el ATP.
// Misma estructura que unidad0.js (ver ese archivo para la lista completa de
// tipos de bloque disponibles).
// ============================================================================

export const unidad2 = {
  id: 2,
  title: 'Biomoléculas (II)',
  subtitle: 'Proteínas, aminoácidos, ácidos nucleicos (ADN y ARN) y el ATP',
  available: true,

  // Repaso exprés: resumen condensado a medida + IDs del mini-test.
  review: {
    summary: [
      {
        title: 'Proteínas',
        points: [
          'Cadenas lineales de **aminoácidos**. Hay **20** (se diferencian en la cadena lateral -R); **8 son esenciales** (hay que tomarlos en la dieta).',
          '**4 niveles de estructura:** primaria (secuencia; la 1ª conocida fue la *insulina*) → secundaria (hélice/lámina, por *puentes de hidrógeno*) → **terciaria (la funcional)** → cuaternaria (varias subunidades; ej. *hemoglobina*, 4).',
          '**Desnaturalización:** pérdida de la estructura terciaria (pierde la función). Causas: **temperatura** y **pH**. Si no se daña la primaria, puede ser reversible.',
          'Funciones: enzimática, hormonal (insulina), defensiva (anticuerpos), **transporte (hemoglobina)**, estructural (queratina, colágeno), contráctil (actina/miosina), reserva (ovoalbúmina).',
        ],
      },
      {
        title: 'Ácidos nucleicos: ADN y ARN',
        points: [
          '**Nucleótido** = pentosa + base nitrogenada + ácido fosfórico. (Sin el fosfórico = *nucleósido*.)',
          'Bases **púricas** (2 anillos): adenina, guanina. **Pirimidínicas** (1 anillo): citosina, timina, uracilo.',
          '**ADN:** desoxirribosa + timina; doble hélice (Watson-Crick, 1953); complementariedad **A-T (2 puentes)** y **G-C (3 puentes)**; cadenas antiparalelas. Empaquetamiento: nucleosoma → cromatina → solenoide → cromosoma.',
          '**ARN:** ribosa + **uracilo** (no timina); una sola cadena. Tres tipos: **ARNm** (lleva la info), **ARNr** (forma ribosomas), **ARNt** (lleva aminoácidos al ribosoma).',
        ],
      },
      {
        title: 'El ATP',
        points: [
          'Nucleótido **no nucleico**: la **moneda de intercambio de energía** de la célula.',
          '**ATP = 3 fosfatos; ADP = 2.** La energía se guarda en los enlaces entre fosfatos.',
          '**Fosforilación:** ADP + fosfórico → ATP (guarda la energía de los procesos exergónicos/catabólicos).',
          '**Hidrólisis:** ATP → ADP + fosfórico (libera energía para los procesos endergónicos/anabólicos).',
        ],
      },
    ],
    questions: ['u2-q1', 'u2-q3', 'u2-q4', 'u2-q6', 'u2-q8', 'u2-q13', 'u2-q15', 'u2-q18', 'u2-q19', 'u2-q20'],
  },

  sections: [
    // ---------------------------------------------------------------- §1
    {
      id: 'proteinas-aminoacidos',
      title: '1. Proteínas y aminoácidos',
      icon: '🧬',
      blocks: [
        {
          type: 'p',
          text: 'Las **proteínas** son, probablemente, el grupo de biomoléculas **más importante**: destacan por su **variedad, abundancia, número y tipo de funciones**. Casi todo lo que ocurre en una célula pasa por las proteínas. Su estructura básica es sencilla de enunciar: son una **cadena lineal de aminoácidos**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: la proteína es una cadena de aminoácidos',
          text: 'Una proteína no es más que una larga cadena de pequeñas unidades llamadas aminoácidos, unidas una detrás de otra como las cuentas de un collar. Toda la complejidad de una proteína nace de qué aminoácidos hay y en qué orden están.',
        },
        {
          type: 'h',
          text: 'Los aminoácidos',
        },
        {
          type: 'p',
          text: 'Los **aminoácidos** son pequeños compuestos orgánicos que, al unirse, forman las proteínas (son sus monómeros). Su nombre lo dice todo: **siempre** tienen un **grupo amino** (H₂N-) y un **grupo ácido o carboxilo** (-COOH). De ahí *amino* + *ácido*.',
        },
        {
          type: 'p',
          text: 'La estructura general de un aminoácido es: **grupo amino** + un **carbono central** (que lleva un hidrógeno y un **radical -R** o cadena lateral) + **grupo ácido**. Todos los aminoácidos comparten esa misma estructura básica y solo se diferencian en su **cadena lateral (-R)**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: 20 aminoácidos, 8 esenciales',
          text: 'En las proteínas hay 20 aminoácidos distintos. Todos tienen la misma estructura básica y se diferencian en la cadena lateral (-R). De esos 20, hay 8 que NO podemos sintetizar en nuestro metabolismo, así que tenemos que tomarlos en la dieta: son los AMINOÁCIDOS ESENCIALES.',
        },
        {
          type: 'p',
          text: 'Según cómo sea su cadena lateral (-R), los 20 aminoácidos se agrupan en tres tipos:',
        },
        {
          type: 'table',
          headers: ['Grupo (según el -R)', 'Aminoácidos'],
          rows: [
            ['**Hidrofóbicos**', 'Valina, leucina, isoleucina, metionina, fenilalanina'],
            ['**Hidrofílicos**', 'Asparagina, glutámico, glutamina, histidina, lisina, arginina, aspártico'],
            ['**Intermedios**', 'Glicina, alanina, serina, treonina, tirosina, triptófano, cisteína, prolina'],
          ],
        },
        {
          type: 'warning',
          title: 'Error típico: "esencial = el más importante"',
          text: 'Un aminoácido ESENCIAL no es el "más importante", sino el que NO podemos fabricar y debemos tomar en la dieta (son 8 de los 20). Es la misma idea que en las vitaminas: esencial = imprescindible tomarlo, porque el cuerpo no lo sintetiza.',
        },
        {
          type: 'activity',
          label: 'Practica',
          question: '¿Cuántos aminoácidos forman las proteínas, cuántos son esenciales y en qué se diferencian unos de otros?',
          answer: 'Las proteínas están formadas por **20 aminoácidos** distintos. De ellos, **8 son esenciales** (no podemos sintetizarlos y hay que tomarlos en la dieta). Todos tienen la **misma estructura básica** (grupo amino + carbono central con H y -R + grupo ácido) y solo se diferencian en su **cadena lateral (-R)**.',
        },
      ],
    },

    // ---------------------------------------------------------------- §2
    {
      id: 'estructura-proteinas',
      title: '2. Estructura de las proteínas',
      icon: '🪢',
      blocks: [
        {
          type: 'p',
          text: 'La cadena de aminoácidos no se queda estirada: se pliega y se organiza en el espacio. Distinguimos **cuatro niveles de estructura**, cada uno construido sobre el anterior.',
        },
        {
          type: 'table',
          headers: ['Nivel', 'Qué es', 'Detalle clave'],
          rows: [
            ['**Primaria**', 'El orden o secuencia lineal de los aminoácidos', 'Condiciona todas las demás estructuras. La 1ª conocida fue la de la INSULINA'],
            ['**Secundaria**', 'La forma que adquiere la cadena estirada en el espacio', 'Favorecida por PUENTES DE HIDRÓGENO. Dos formas: hélice o lámina'],
            ['**Terciaria**', 'La forma plegada en el espacio (la MÁS importante)', 'Es la estructura natural en la que la proteína cumple su función'],
            ['**Cuaternaria**', 'Unión de varias cadenas (solo algunas proteínas)', 'Cada cadena = una SUBUNIDAD. Ej.: HEMOGLOBINA (4 subunidades)'],
          ],
        },
        {
          type: 'h',
          text: 'Estructura primaria',
        },
        {
          type: 'p',
          text: 'Es el **orden o secuencia lineal** de los aminoácidos de la cadena. Es la base de todo: **condiciona el resto de las estructuras**. Como hay 20 aminoácidos y pueden repetirse, el número de combinaciones posibles es enorme (miles y miles).',
        },
        {
          type: 'example',
          title: 'Dato de examen: la insulina',
          text: 'La primera proteína de la que se conoció la estructura primaria (la secuencia exacta de sus aminoácidos) fue la INSULINA. Es un dato que cae a menudo.',
        },
        {
          type: 'h',
          text: 'Estructura secundaria',
        },
        {
          type: 'p',
          text: 'Es la **forma que adquiere la cadena estirada** en el espacio. Los enlaces entre aminoácidos tienen siempre un **ángulo igual**, lo que da una **geometría determinada**. Este plegamiento está favorecido por los **puentes de hidrógeno**. Hay dos formas fundamentales: una en **hélice** y otra en **lámina**.',
        },
        {
          type: 'h',
          text: 'Estructura terciaria',
        },
        {
          type: 'p',
          text: 'Es la **más importante**: es la **estructura natural** en la que la proteína **cumple su función**. La cadena se pliega en el espacio formando una forma tridimensional concreta, estabilizada por enlaces y fuerzas atractivas que se establecen **en el interior de la cadena**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: la terciaria es la funcional',
          text: 'Recuerda esta idea porque es clave: la estructura TERCIARIA es la forma plegada en la que la proteína funciona. Si una proteína pierde su estructura terciaria, deja de hacer su trabajo (esto es la desnaturalización, que veremos enseguida).',
        },
        {
          type: 'h',
          text: 'Estructura cuaternaria',
        },
        {
          type: 'p',
          text: 'Solo la tienen **algunas** proteínas. Aparece cuando se **unen varias cadenas polipeptídicas**; cada una de esas cadenas se llama **subunidad**. El ejemplo clásico es la **hemoglobina**, formada por **4 subunidades**.',
        },
        {
          type: 'warning',
          title: 'Error típico: confundir los niveles',
          text: 'No confundas la PRIMARIA (solo el orden de los aminoácidos, una lista) con la TERCIARIA (la forma plegada en 3D que funciona). Y ojo: la CUATERNARIA solo existe si hay VARIAS cadenas unidas; una proteína de una sola cadena (como muchas) NO tiene estructura cuaternaria. Hemoglobina = cuaternaria (4 subunidades).',
        },
        {
          type: 'activity',
          label: 'Practica',
          question: '¿Qué nivel de estructura es la "más importante" y por qué? ¿Y qué proteína es el ejemplo típico de estructura cuaternaria?',
          answer: 'La **estructura terciaria** es la más importante porque es la **forma natural plegada en la que la proteína cumple su función**. El ejemplo típico de **estructura cuaternaria** es la **hemoglobina**, que está formada por **4 subunidades** (4 cadenas polipeptídicas unidas).',
        },
      ],
    },

    // ---------------------------------------------------------------- §3
    {
      id: 'propiedades-funciones-proteinas',
      title: '3. Propiedades y funciones de las proteínas',
      icon: '⚙️',
      blocks: [
        {
          type: 'h',
          text: 'Propiedades de las proteínas',
        },
        {
          type: 'list',
          items: [
            '**Especificidad:** cada proteína cumple su función, y solo esa. No es intercambiable por otra.',
            '**Desnaturalización:** la **pérdida de la estructura terciaria**, que provoca que la proteína **no pueda cumplir su función**.',
          ],
        },
        {
          type: 'key',
          title: 'Concepto clave: desnaturalización',
          text: 'Desnaturalizar una proteína es romper su estructura terciaria (su forma plegada). Como esa forma es la que le permite funcionar, una proteína desnaturalizada queda inutilizada. Las causas principales son el AUMENTO DE TEMPERATURA y las variaciones de pH (medios ácidos o básicos); también ciertos productos químicos.',
        },
        {
          type: 'p',
          text: 'Si la **estructura primaria no se ve afectada** (es decir, no se rompe la cadena, solo se desordena su plegamiento), la desnaturalización puede ser **reversible**: la proteína podría recuperar su forma.',
        },
        {
          type: 'example',
          title: 'Ejemplo cotidiano: el huevo frito',
          text: 'Cuando fríes un huevo, la clara pasa de transparente y líquida a blanca y sólida. Eso es la desnaturalización de sus proteínas por el aumento de temperatura: pierden su estructura terciaria. Y ya no hay vuelta atrás, no puedes "des-freír" el huevo.',
        },
        {
          type: 'warning',
          title: 'Error típico: ¿qué nivel se pierde al desnaturalizar?',
          text: 'En la desnaturalización se pierde la estructura TERCIARIA (y por tanto la función), NO la primaria. La primaria (el orden de los aminoácidos) suele conservarse; por eso, si no se daña, la desnaturalización puede ser reversible.',
        },
        {
          type: 'h',
          text: 'Funciones de las proteínas',
        },
        {
          type: 'quote',
          text: 'Ante la duda, proteína.',
          source: 'Postulado de Sánchez nº 7',
        },
        {
          type: 'p',
          text: 'Las proteínas hacen de casi todo. Estas son sus principales funciones:',
        },
        {
          type: 'table',
          headers: ['Función', 'Proteínas / ejemplos'],
          rows: [
            ['**Enzimática / catalítica**', 'Las enzimas: regulan el metabolismo y aumentan la velocidad de las reacciones'],
            ['**Reguladora / hormonal**', 'Algunas hormonas: insulina, tiroxina, hormona del crecimiento'],
            ['**Defensiva / inmunológica**', 'Las inmunoglobulinas (anticuerpos) de la sangre'],
            ['**Transporte**', 'La hemoglobina (transporta el oxígeno por la sangre de los vertebrados)'],
            ['**Estructural**', 'Colágeno y elastina (tejido conjuntivo); queratina (uñas, pelos, escamas, plumas)'],
            ['**Contráctil**', 'Actina y miosina (contracción muscular)'],
            ['**Reserva**', 'Ovoalbúmina (huevo), caseína (leche)'],
          ],
        },
        {
          type: 'activity',
          label: 'Practica',
          question: 'Relaciona cada proteína con su función: hemoglobina, queratina, anticuerpos, actina y miosina, insulina.',
          answerBlocks: [
            {
              type: 'table',
              headers: ['Proteína', 'Función'],
              rows: [
                ['**Hemoglobina**', 'Transporte (de oxígeno por la sangre)'],
                ['**Queratina**', 'Estructural (uñas, pelos, escamas, plumas)'],
                ['**Anticuerpos (inmunoglobulinas)**', 'Defensiva / inmunológica'],
                ['**Actina y miosina**', 'Contráctil (contracción muscular)'],
                ['**Insulina**', 'Reguladora / hormonal'],
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- §4
    {
      id: 'acidos-nucleicos-nucleotidos',
      title: '4. Ácidos nucleicos: los nucleótidos',
      icon: '🔗',
      blocks: [
        {
          type: 'p',
          text: 'Los **ácidos nucleicos** son macromoléculas formadas por **cadenas lineales de nucleótidos** (sus monómeros). Hay **dos tipos**: el **ADN** y el **ARN**. Antes de ver cada uno, hay que conocer la pieza con la que se construyen: el nucleótido.',
        },
        {
          type: 'key',
          title: 'Concepto clave: el nucleótido nucleico',
          text: 'Un nucleótido nucleico es una molécula orgánica formada por la unión de TRES cosas: un MONOSACÁRIDO (una pentosa) + una BASE NITROGENADA + un ÁCIDO FOSFÓRICO (H₃PO₄, que es siempre el mismo). Pentosa + base + fosfórico: esos son los tres componentes.',
        },
        {
          type: 'h',
          text: 'Las bases nitrogenadas',
        },
        {
          type: 'p',
          text: 'Las **bases nitrogenadas** son compuestos cíclicos que contienen nitrógeno. Hay dos tipos según su número de anillos:',
        },
        {
          type: 'table',
          headers: ['Tipo', 'Anillos', 'Bases'],
          rows: [
            ['**Pirimidínicas**', 'Un anillo', 'Citosina, timina, uracilo'],
            ['**Púricas**', 'Dos anillos', 'Adenina, guanina'],
          ],
        },
        {
          type: 'h',
          text: 'La pentosa',
        },
        {
          type: 'p',
          text: 'La **pentosa** (monosacárido de 5 carbonos) puede ser de dos tipos, y de ahí vienen los nombres de los dos ácidos nucleicos:',
        },
        {
          type: 'list',
          items: [
            '**Ribosa** → en el **ARN** (ácido **ribo**nucleico).',
            '**Desoxirribosa** → en el **ADN** (ácido **desoxirribo**nucleico).',
          ],
        },
        {
          type: 'p',
          text: 'La ribosa y la desoxirribosa se diferencian solo en **un átomo de oxígeno** (la desoxirribosa tiene uno menos: "desoxi" = sin oxígeno).',
        },
        {
          type: 'h',
          text: 'Nucleósido y nucleótido',
        },
        {
          type: 'p',
          text: 'Conviene distinguir bien estas dos piezas:',
        },
        {
          type: 'list',
          items: [
            '**Nucleósido** = base nitrogenada + pentosa (SIN el ácido fosfórico).',
            '**Nucleótido** = nucleósido + ácido fosfórico (es decir, base + pentosa + fosfórico).',
          ],
        },
        {
          type: 'warning',
          title: 'Error típico: nucleósido vs nucleótido',
          text: 'No los confundas: el NUCLEÓTIDO (con "T") tiene los TRES componentes, incluido el fosfórico, y es el monómero de los ácidos nucleicos. El NUCLEÓSIDO (con "S") es solo base + pentosa, le FALTA el fosfórico. Truco: nucleóTido = con fosfaTo.',
        },
        {
          type: 'activity',
          label: 'Practica',
          question: 'Indica los tres componentes de un nucleótido y di qué diferencia hay entre un nucleósido y un nucleótido.',
          answer: 'Un **nucleótido** está formado por tres componentes: una **pentosa** (monosacárido), una **base nitrogenada** y un **ácido fosfórico**. La diferencia con el **nucleósido** es que este último es solo **base + pentosa**, es decir, **le falta el ácido fosfórico**. Nucleótido = nucleósido + fosfórico.',
        },
      ],
    },

    // ---------------------------------------------------------------- §5
    {
      id: 'adn',
      title: '5. El ADN',
      icon: '🧬',
      blocks: [
        {
          type: 'p',
          text: 'El **ADN** (ácido **desoxirribo**nucleico) es un **polímero lineal formado por dos cadenas** de nucleótidos de **desoxirribosa**. Sus bases nitrogenadas son: **adenina, guanina, citosina y timina**. Es la **molécula más grande** de la materia viva.',
        },
        {
          type: 'p',
          text: 'El ADN tiene niveles estructurales, igual que las proteínas (es una analogía útil):',
        },
        {
          type: 'h',
          text: 'Estructura primaria',
        },
        {
          type: 'p',
          text: 'Es el **orden o secuencia de los nucleótidos** a lo largo de la cadena.',
        },
        {
          type: 'h',
          text: 'Estructura secundaria (Watson y Crick, 1953)',
        },
        {
          type: 'p',
          text: 'Es la forma que adquiere la cadena. La describieron **Watson y Crick en 1953**. Son **dos cadenas** unidas por las bases nitrogenadas, con los ácidos fosfóricos hacia fuera, formando una **doble hélice** girada a la derecha.',
        },
        {
          type: 'key',
          title: 'Concepto clave: bases complementarias',
          text: 'Las bases de las dos cadenas se unen por PUENTES DE HIDRÓGENO y son COMPLEMENTARIAS: la adenina siempre se empareja con la timina (A-T, 2 puentes) y la guanina siempre con la citosina (G-C, 3 puentes). Por eso en el ADN hay igual cantidad de A que de T, y de G que de C.',
        },
        {
          type: 'p',
          text: "Además, las dos cadenas son **antiparalelas**: van en sentidos opuestos (una en sentido 3'-5' y la otra 5'-3').",
        },
        {
          type: 'warning',
          title: 'Error típico: A-T son 2 puentes, G-C son 3',
          text: 'Memoriza el emparejamiento y el número de puentes: Adenina-Timina con 2 puentes de hidrógeno; Guanina-Citosina con 3 puentes de hidrógeno. Y ojo: en el ADN la adenina va con TIMINA (no con uracilo: el uracilo es del ARN).',
        },
        {
          type: 'h',
          text: 'Estructura terciaria',
        },
        {
          type: 'p',
          text: 'En las células **eucariotas**, el ADN se enrolla en torno a unas proteínas llamadas **histonas**. El conjunto de las histonas con un trozo de cadena forma un **nucleosoma**. La cadena de nucleosomas es la **cromatina** (la forma del ADN en el núcleo), que tiene aspecto de **"collar de perlas"**.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Histonas + cadena = nucleosoma', text: 'El ADN se enrolla alrededor de proteínas (histonas). Cada conjunto de histonas con su trozo de cadena es un nucleosoma.' },
            { title: 'Nucleosomas = cromatina', text: 'La sucesión de nucleosomas forma la cromatina, con aspecto de collar de perlas. Es la forma del ADN en el núcleo.' },
            { title: 'Solenoide', text: 'La cromatina se empaqueta todavía más enrollándose en forma de solenoide.' },
            { title: 'Cromosomas', text: 'Al dividirse la célula (mitosis o meiosis), el ADN se compacta al máximo formando los cromosomas (unas 10000 veces más compacto que la cromatina).' },
          ],
        },
        {
          type: 'h',
          text: 'Función del ADN',
        },
        {
          type: 'p',
          text: 'El ADN es el **portador del mensaje o información genética**. Para transmitir esa información a las células hijas antes de dividirse, el ADN se **replica** (se hace una copia exacta); y también se **transcribe** y se **traduce** (para fabricar proteínas).',
        },
        {
          type: 'activity',
          label: 'Practica',
          question: 'En una cadena de ADN tenemos la secuencia A-G-C-T-A. ¿Cuál será la secuencia de la cadena complementaria? ¿Cuántos puentes de hidrógeno unen cada pareja?',
          answer: 'Por la complementariedad de bases (A con T, G con C), la cadena complementaria será **T-C-G-A-T**. Los puentes de hidrógeno de cada pareja: A-T → **2 puentes**, G-C → **3 puentes**, C-G → **3 puentes**, T-A → **2 puentes**, A-T → **2 puentes**.',
        },
      ],
    },

    // ---------------------------------------------------------------- §6
    {
      id: 'arn',
      title: '6. El ARN',
      icon: '📩',
      blocks: [
        {
          type: 'p',
          text: 'El **ARN** (ácido **ribo**nucleico) es un polímero de nucleótidos **más sencillo que el ADN**. Su pentosa es la **ribosa** y sus bases son **adenina, guanina, citosina y URACILO** (el uracilo ocupa el lugar de la timina). Su complementariedad es: **guanina-citosina** y **adenina-uracilo**.',
        },
        {
          type: 'p',
          text: 'A diferencia del ADN, el ARN tiene **una sola cadena**, mucho más corta.',
        },
        {
          type: 'key',
          title: 'Concepto clave: ADN vs ARN',
          text: 'Las dos diferencias que SIEMPRE hay que recordar: la PENTOSA (ADN = desoxirribosa; ARN = ribosa) y una BASE (ADN = timina; ARN = uracilo en su lugar). Además, el ADN es doble cadena (doble hélice) y el ARN es una sola cadena.',
        },
        {
          type: 'table',
          headers: ['', 'ADN', 'ARN'],
          rows: [
            ['Pentosa', 'Desoxirribosa', 'Ribosa'],
            ['Bases', 'A, G, C, **timina**', 'A, G, C, **uracilo**'],
            ['Cadenas', 'Dos (doble hélice)', 'Una sola, más corta'],
            ['Complementariedad', 'A-T, G-C', 'A-U, G-C'],
            ['Tamaño', 'La molécula más grande', 'Más sencillo y corto'],
          ],
        },
        {
          type: 'warning',
          title: 'Error típico: A-T (ADN) frente a A-U (ARN)',
          text: 'No mezcles las complementariedades. En el ADN la adenina va con TIMINA (A-T). En el ARN no hay timina: la adenina va con URACILO (A-U). La pareja G-C es igual en ambos.',
        },
        {
          type: 'h',
          text: 'Los tres tipos de ARN',
        },
        {
          type: 'table',
          headers: ['Tipo', 'Función', 'Estructura'],
          rows: [
            ['**ARNm (mensajero)**', 'Copia de un fragmento de ADN; lleva la información para fabricar proteínas. Se fabrica en el núcleo y va a los ribosomas', 'Lineal (sin terciaria)'],
            ['**ARNr (ribosómico)**', 'Estructural: forma los ribosomas junto a proteínas', 'Con plegamientos (parecido a una proteína globular)'],
            ['**ARNt (transferencia)**', 'Transporta selectivamente los aminoácidos al ribosoma para la síntesis de proteínas', 'Forma propia con zonas determinadas'],
          ],
        },
        {
          type: 'activity',
          label: 'Practica',
          question: '¿Cuáles son las dos diferencias químicas fundamentales entre el ADN y el ARN, y para qué sirve cada uno de los tres tipos de ARN?',
          answerBlocks: [
            {
              type: 'p',
              text: 'Las **dos diferencias químicas fundamentales**: (1) la pentosa (ADN = desoxirribosa, ARN = ribosa) y (2) una base (ADN tiene timina, ARN tiene uracilo en su lugar).',
            },
            {
              type: 'list',
              items: [
                '**ARNm (mensajero):** copia un fragmento del ADN y lleva la información para fabricar proteínas desde el núcleo hasta los ribosomas.',
                '**ARNr (ribosómico):** función estructural, forma los ribosomas junto a proteínas.',
                '**ARNt (transferencia):** transporta los aminoácidos al ribosoma para la síntesis de proteínas.',
              ],
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- §7
    {
      id: 'atp',
      title: '7. ATP: la moneda energética',
      icon: '⚡',
      blocks: [
        {
          type: 'p',
          text: 'No todos los nucleótidos forman ácidos nucleicos. Hay **nucleótidos no nucleicos** con otras funciones; el más importante es el **ATP** (adenosín trifosfato), que actúa como la **moneda de intercambio de energía** de la célula.',
        },
        {
          type: 'key',
          title: 'Concepto clave: el ATP es la moneda energética',
          text: 'Igual que usamos dinero para pagar cosas, la célula usa el ATP para "pagar" la energía que necesita. La energía se almacena en los enlaces entre sus grupos fosfato. El ATP tiene 3 grupos fosfato (adenosina + 3 PO₄); el ADP solo tiene 2.',
        },
        {
          type: 'h',
          text: 'Cómo se carga y se gasta la energía',
        },
        {
          type: 'list',
          items: [
            '**Cargar (formar ATP):** la energía que se libera en los procesos **exergónicos** (catabólicos) se usa para formar ATP a partir de **ADP + fosfórico**. Esto se llama **fosforilación**.',
            '**Gastar (hidrolizar ATP):** la energía que requieren los procesos **endergónicos** (anabólicos) se obtiene de la **hidrólisis del ATP**, que lo rompe en **ADP + fosfórico**, liberando la energía guardada.',
          ],
        },
        {
          type: 'table',
          headers: ['Proceso', '¿Energía?', 'Qué pasa con el ATP'],
          rows: [
            ['**Exergónico** (catabólico)', 'Libera energía', 'Se forma ATP: ADP + fosfórico → ATP (fosforilación)'],
            ['**Endergónico** (anabólico)', 'Requiere energía', 'Se gasta ATP: ATP → ADP + fosfórico (hidrólisis)'],
          ],
        },
        {
          type: 'warning',
          title: 'Error típico: confundir cargar y gastar',
          text: 'Para FORMAR ATP (cargar la pila) se necesita energía, que sale de los procesos exergónicos/catabólicos: ADP + fosfórico → ATP. Para usar esa energía, se HIDROLIZA el ATP (se gasta la pila): ATP → ADP + fosfórico. La energía se guarda en los enlaces entre fosfatos.',
        },
        {
          type: 'activity',
          label: 'Practica',
          question: '¿Por qué se dice que el ATP es la "moneda de energía" de la célula? ¿Cuántos fosfatos tiene el ATP y cuántos el ADP?',
          answer: 'Se dice que el ATP es la **moneda de intercambio de energía** porque sirve para almacenar y ceder energía en la célula: los procesos que liberan energía (exergónicos/catabólicos) la usan para **formar ATP** a partir de ADP + fosfórico, y los procesos que la necesitan (endergónicos/anabólicos) la obtienen **hidrolizando el ATP** a ADP + fosfórico. El **ATP** tiene **3 grupos fosfato** y el **ADP** tiene **2**; la energía se almacena en los enlaces entre fosfatos.',
        },
      ],
    },

    // ---------------------------------------------------------------- §8
    {
      id: 'flashcards-unidad',
      title: '8. Flashcards de la unidad',
      icon: '🃏',
      blocks: [
        {
          type: 'p',
          text: 'Tarjetas de los conceptos clave de toda la unidad. Elige un mazo, lee la pregunta, **piensa la respuesta**, pulsa para voltear y califícate (No / Medio / Me lo sé). Las que falles vuelven a salir hasta que las domines.',
        },
        {
          type: 'flashcards',
          deckLabel: 'Proteínas',
          cards: [
            // --- Aminoácidos ---
            { front: '¿Qué es un aminoácido?', back: 'Pequeño compuesto orgánico que, al unirse con otros, forma las proteínas (que son cadenas lineales de aminoácidos).' },
            { front: '¿Qué dos grupos químicos tiene siempre un aminoácido (y de dónde viene su nombre)?', back: 'Un grupo amino (H₂N-) y un grupo ácido o carboxilo (-COOH). De ahí su nombre: amino + ácido.' },
            { front: 'Estructura general de un aminoácido', back: 'Grupo amino + carbono central (con un H y un radical -R, la cadena lateral) + grupo ácido (carboxilo).' },
            { front: '¿Cuántos aminoácidos forman las proteínas y en qué se diferencian entre sí?', back: 'Hay 20 aminoácidos. Todos tienen la misma estructura básica y se diferencian únicamente en la cadena lateral (radical -R).' },
            { front: '¿Qué es un aminoácido esencial y cuántos hay?', back: 'Es un aminoácido que NO podemos sintetizar en nuestro metabolismo, así que hay que tomarlo en la dieta. Son 8.' },
            // --- Estructura: los 4 niveles ---
            { front: 'Estructura PRIMARIA de una proteína', back: 'El orden o secuencia lineal de los aminoácidos. Condiciona el resto de estructuras y puede haber miles de combinaciones.' },
            { front: 'Estructura SECUNDARIA de una proteína', back: 'Forma que adquiere la cadena estirada en el espacio (geometría determinada, ángulos siempre iguales). El plegamiento se favorece por puentes de hidrógeno. Dos formas: hélice o lámina.' },
            { front: 'Estructura TERCIARIA de una proteína (¿por qué es la más importante?)', back: 'Es la forma plegada en el espacio, estabilizada por fuerzas atractivas internas. Es la MÁS IMPORTANTE porque es la estructura natural en la que la proteína cumple su función.' },
            { front: 'Estructura CUATERNARIA de una proteína', back: 'Solo la tienen algunas proteínas. Es la unión de varias cadenas polipeptídicas; cada cadena es una subunidad. Ejemplo: la hemoglobina (4 subunidades).' },
            { front: '¿Qué favorece el plegamiento de la estructura secundaria?', back: 'Los puentes de hidrógeno.' },
            { front: '¿Qué proteína fue la primera de la que se conoció la estructura primaria?', back: 'La insulina.' },
            { front: '¿Qué nivel estructural tiene la hemoglobina y cuántas subunidades?', back: 'Estructura cuaternaria, con 4 subunidades (4 cadenas polipeptídicas).' },
            // --- Propiedades ---
            { front: '¿Qué es la especificidad de las proteínas?', back: 'Que cada proteína cumple su función, y solo esa.' },
            { front: '¿Qué es la desnaturalización de una proteína?', back: 'La pérdida de la estructura terciaria, que provoca que la proteína no pueda cumplir su función.' },
            { front: '¿Cuáles son las causas principales de la desnaturalización?', back: ['Aumento de temperatura.', 'Variaciones de pH (ácido o básico).', 'También productos químicos. Si no se afecta la estructura primaria, puede ser reversible.'] },
            // --- Funciones (con ejemplo) y sus inversas ---
            { front: 'Función enzimática/catalítica de las proteínas: ¿qué hacen y con qué ejemplo?', back: 'Las enzimas son proteínas que regulan el metabolismo y aumentan la velocidad de las reacciones.' },
            { front: 'Función reguladora/hormonal de las proteínas: ejemplos', back: 'Algunas hormonas son proteínas: insulina, tiroxina y hormona del crecimiento.' },
            { front: 'Función defensiva/inmunológica de las proteínas: ejemplo', back: 'Las inmunoglobulinas (anticuerpos) de la sangre.' },
            { front: 'Función de transporte de las proteínas: ¿qué proteína y qué transporta?', back: 'La hemoglobina, que transporta oxígeno por la sangre de los vertebrados.' },
            { front: '¿Qué función tiene la hemoglobina?', back: 'Función de transporte: lleva el oxígeno por la sangre de los vertebrados.' },
            { front: 'Función estructural de las proteínas: ejemplos', back: ['Colágeno y elastina (fibras del tejido conjuntivo).', 'Queratina (uñas, pelos, escamas, plumas).'] },
            { front: '¿Qué función tienen la actina y la miosina?', back: 'Función contráctil: la contracción muscular.' },
            { front: 'Función de reserva de las proteínas: ejemplos', back: 'Ovoalbúmina (del huevo) y caseína (de la leche).' },
            { front: '¿Qué proteínas se encargan de la contracción muscular?', back: 'La actina y la miosina (función contráctil).' },
          ],
        },
        {
          type: 'flashcards',
          deckLabel: 'Ácidos nucleicos y ATP',
          cards: [
            // --- Nucleótido y sus componentes ---
            { front: '¿Cuáles son los tres componentes de un nucleótido nucleico?', back: ['Un monosacárido (una pentosa).', 'Una base nitrogenada.', 'Un ácido fosfórico (H₃PO₄, siempre el mismo).'] },
            { front: '¿Qué son los nucleótidos respecto a los ácidos nucleicos?', back: 'Son sus monómeros: el ADN y el ARN son cadenas lineales de nucleótidos.' },
            { front: '¿Qué es un nucleósido y en qué se diferencia de un nucleótido?', back: 'Nucleósido = base nitrogenada + pentosa (SIN ácido fosfórico). Nucleótido = nucleósido + ácido fosfórico.' },
            // --- Bases nitrogenadas ---
            { front: '¿Qué bases nitrogenadas son PÚRICAS (dos anillos)?', back: 'Adenina y guanina (A y G).' },
            { front: '¿Qué bases nitrogenadas son PIRIMIDÍNICAS (un anillo)?', back: 'Citosina, timina y uracilo (C, T, U).' },
            { front: '¿Son la adenina y la guanina púricas o pirimidínicas? ¿Cuántos anillos?', back: 'Púricas: tienen dos anillos.' },
            { front: '¿La citosina, timina y uracilo son púricas o pirimidínicas?', back: 'Pirimidínicas: tienen un solo anillo.' },
            // --- Pentosas ---
            { front: '¿Qué pentosa lleva el ADN y cuál el ARN?', back: 'ADN: desoxirribosa. ARN: ribosa. Se diferencian en un átomo de oxígeno. De ahí los nombres: ácido desoxirribonucleico y ácido ribonucleico.' },
            { front: 'La desoxirribosa, ¿en qué ácido nucleico está?', back: 'En el ADN (ácido desoxirribonucleico).' },
            // --- ADN: Watson-Crick y estructura ---
            { front: '¿Qué bases nitrogenadas tiene el ADN?', back: 'Adenina, guanina, citosina y timina.' },
            { front: '¿Quiénes y en qué año describieron la estructura secundaria del ADN, y qué forma es?', back: 'Watson y Crick, en 1953. Es una doble hélice girada a la derecha: dos cadenas unidas por las bases nitrogenadas, con los fosfóricos hacia fuera.' },
            { front: 'Complementariedad de bases en el ADN (y nº de puentes de hidrógeno)', back: ['Adenina–Timina: 2 puentes de hidrógeno.', 'Guanina–Citosina: 3 puentes de hidrógeno.', 'Por eso hay igual cantidad de A que de T, y de G que de C.'] },
            { front: '¿Con cuántos puentes de hidrógeno se unen A-T y G-C?', back: 'A-T con 2 puentes de hidrógeno; G-C con 3 puentes de hidrógeno.' },
            { front: '¿Qué significa que las dos cadenas del ADN son antiparalelas?', back: "Que van en sentidos opuestos: una es 3'-5' y la otra 5'-3'." },
            // --- Empaquetamiento del ADN ---
            { front: '¿Qué son las histonas y qué forman con el ADN?', back: 'Son las proteínas en torno a las cuales se enrolla el ADN en eucariotas (estructura terciaria). Histonas + un trozo de cadena de ADN = un nucleosoma.' },
            { front: 'Ordena el empaquetamiento del ADN: nucleosoma → ... → cromosoma', back: 'Nucleosoma (histonas + ADN) → cromatina (collar de perlas de nucleosomas) → solenoide (más empaquetado) → cromosoma (compactación máxima en la división celular, ~10000 veces la cromatina).' },
            { front: '¿Qué es la cromatina?', back: 'La cadena de nucleosomas (forma del ADN en el núcleo), con aspecto de "collar de perlas".' },
            { front: '¿Cuándo y cómo se forman los cromosomas?', back: 'Al dividirse la célula (mitosis/meiosis), el ADN se compacta al máximo (unas 10000 veces la cromatina) formando los cromosomas.' },
            { front: 'Función del ADN', back: 'Es el portador del mensaje o información genética. Se replica (copia exacta) para transmitirla a las células hijas antes de la división, y se transcribe y se traduce.' },
            // --- ARN ---
            { front: '¿En qué se diferencia el ARN del ADN (pentosa, bases, nº de cadenas)?', back: 'El ARN lleva ribosa (no desoxirribosa), usa uracilo en vez de timina, y es una sola cadena, mucho más corta y sencilla.' },
            { front: 'Complementariedad de bases en el ARN', back: 'Guanina–Citosina y Adenina–Uracilo (el uracilo sustituye a la timina).' },
            { front: '¿Qué función tiene el ARN mensajero (ARNm)?', back: 'Es una copia de un fragmento de ADN; lleva la información para fabricar proteínas. Se fabrica en el núcleo y va a los ribosomas. Tiene estructura lineal.' },
            { front: '¿Qué función tiene el ARN ribosómico (ARNr)?', back: 'Función estructural: forma los ribosomas junto a proteínas. Tiene plegamientos (parecido a una proteína globular).' },
            { front: '¿Qué función tiene el ARN de transferencia (ARNt)?', back: 'Transporta selectivamente los aminoácidos hasta el ribosoma para la síntesis de proteínas. Tiene una forma propia con zonas determinadas.' },
            { front: '¿Qué tipo de ARN transporta los aminoácidos al ribosoma?', back: 'El ARN de transferencia (ARNt).' },
            // --- ATP / ADP ---
            { front: '¿Qué papel cumple el ATP en la célula?', back: 'Actúa como la moneda de intercambio de energía. El ATP es el adenosín trifosfato.' },
            { front: '¿En qué se diferencian el ATP y el ADP, y dónde se almacena la energía?', back: 'El ATP tiene 3 grupos fosfato (adenosina + 3 PO₄) y el ADP tiene 2. La energía se almacena en los enlaces entre los fosfatos.' },
            { front: '¿Qué es la fosforilación y de dónde sale su energía?', back: 'Es formar ATP a partir de ADP + ácido fosfórico. Usa la energía liberada en los procesos exergónicos (catabólicos).' },
            { front: '¿Cómo se obtiene energía del ATP para los procesos endergónicos (anabólicos)?', back: 'Por la hidrólisis del ATP, que lo rompe en ADP + ácido fosfórico y libera la energía almacenada en el enlace.' },
          ],
        },
      ],
    },
  ],

  // ==========================================================================
  // EXAMEN FINAL — banco de preguntas de la Unidad 2
  // ==========================================================================
  exam: [
    {
      id: 'u2-q1',
      type: 'mc',
      question: '¿Qué dos grupos químicos tienen SIEMPRE todos los aminoácidos?',
      options: [
        'Un grupo amino (H₂N-) y un grupo ácido/carboxilo (-COOH)',
        'Un grupo fosfato y una base nitrogenada',
        'Un grupo hidroxilo y un grupo metilo',
        'Dos grupos amino',
      ],
      answer: 0,
      explanation: 'Todos los aminoácidos llevan un grupo amino (H₂N-) y un grupo ácido o carboxilo (-COOH). De ahí su nombre: amino + ácido.',
    },
    {
      id: 'u2-q2',
      type: 'mc',
      question: 'Hay 20 aminoácidos en las proteínas. ¿En qué se diferencian entre sí?',
      options: [
        'En el grupo amino',
        'En el grupo carboxilo',
        'En su cadena lateral o radical (-R)',
        'En el número de carbonos centrales',
      ],
      answer: 2,
      explanation: 'Los 20 aminoácidos comparten la misma estructura básica (grupo amino + carbono central con H + grupo ácido) y solo se diferencian en la cadena lateral o radical (-R).',
    },
    {
      id: 'u2-q3',
      type: 'tf',
      question: 'Los aminoácidos esenciales son aquellos que nuestro metabolismo NO puede sintetizar y debemos tomar en la dieta. Son 8.',
      answer: true,
      explanation: 'Verdadero. De los 20 aminoácidos, 8 no podemos fabricarlos en el metabolismo, así que hay que tomarlos en los alimentos: son los aminoácidos esenciales.',
    },
    {
      id: 'u2-q4',
      type: 'mc',
      question: 'La estructura PRIMARIA de una proteína es:',
      options: [
        'La forma plegada en la que cumple su función',
        'El orden o secuencia lineal de sus aminoácidos',
        'La unión de varias cadenas polipeptídicas',
        'La hélice o lámina estabilizada por puentes de hidrógeno',
      ],
      answer: 1,
      explanation: 'La estructura primaria es el orden o secuencia lineal de los aminoácidos. Es la que condiciona todas las demás estructuras. La primera proteína de la que se conoció fue la insulina.',
    },
    {
      id: 'u2-q5',
      type: 'mc',
      question: '¿Qué tipo de enlace favorece el plegamiento de la estructura SECUNDARIA de las proteínas (hélice o lámina)?',
      options: [
        'El enlace O-glucosídico',
        'Los puentes de hidrógeno',
        'El enlace fosfodiéster',
        'Los enlaces iónicos del grupo amino',
      ],
      answer: 1,
      explanation: 'La estructura secundaria es la forma que adquiere la cadena estirada en el espacio (hélice o lámina), y su plegamiento se ve favorecido por los puentes de hidrógeno.',
    },
    {
      id: 'u2-q6',
      type: 'mc',
      question: '¿Cuál es la estructura MÁS IMPORTANTE de una proteína, en la que cumple su función natural?',
      options: ['Primaria', 'Secundaria', 'Terciaria', 'Cuaternaria'],
      answer: 2,
      explanation: 'La estructura terciaria es la más importante: es la forma plegada y estable en el espacio en la que la proteína cumple realmente su función.',
    },
    {
      id: 'u2-q7',
      type: 'tf',
      question: 'La hemoglobina tiene estructura cuaternaria porque está formada por la unión de 4 subunidades (cadenas polipeptídicas).',
      answer: true,
      explanation: 'Verdadero. La estructura cuaternaria solo aparece en algunas proteínas: es la unión de varias cadenas (subunidades). La hemoglobina tiene 4 subunidades.',
    },
    {
      id: 'u2-q8',
      type: 'mc',
      question: 'La desnaturalización de una proteína consiste en:',
      options: [
        'La rotura de su estructura primaria',
        'La pérdida de su estructura terciaria y, con ella, de su función',
        'La unión de varias subunidades',
        'La fabricación de aminoácidos esenciales',
      ],
      answer: 1,
      explanation: 'La desnaturalización es la pérdida de la estructura terciaria, lo que impide a la proteína cumplir su función. Si la estructura primaria no se afecta, puede ser reversible.',
    },
    {
      id: 'u2-q9',
      type: 'mc',
      question: '¿Cuáles son las dos causas principales de la desnaturalización de las proteínas?',
      options: [
        'El frío y la luz',
        'El aumento de temperatura y las variaciones de pH (ácido o básico)',
        'La falta de oxígeno y el agua',
        'La presión y el sonido',
      ],
      answer: 1,
      explanation: 'Las causas principales de la desnaturalización son el aumento de temperatura y las variaciones de pH (ácido o básico). También pueden hacerlo ciertos productos químicos.',
    },
    {
      id: 'u2-q10',
      type: 'mc',
      question: 'La hemoglobina lleva oxígeno por la sangre, la queratina forma uñas y pelos, y la actina y la miosina contraen el músculo. ¿Qué función cumple cada una, respectivamente?',
      options: [
        'Transporte / estructural / contráctil',
        'Estructural / transporte / contráctil',
        'Contráctil / transporte / estructural',
        'Transporte / contráctil / estructural',
      ],
      answer: 0,
      explanation: 'La hemoglobina es de transporte (oxígeno), la queratina es estructural (uñas, pelos, escamas, plumas) y la actina y la miosina son contráctiles (contracción muscular).',
    },
    {
      id: 'u2-q11',
      type: 'mc',
      question: '¿Cuál de estas asociaciones función–ejemplo está MAL?',
      options: [
        'Defensiva → inmunoglobulinas (anticuerpos)',
        'Estructural → colágeno y elastina',
        'Enzimática → ovoalbúmina y caseína',
        'Reguladora/hormonal → insulina y tiroxina',
      ],
      answer: 2,
      explanation: 'La ovoalbúmina (huevo) y la caseína (leche) son proteínas de RESERVA, no enzimas. Las enzimas son proteínas que aceleran las reacciones del metabolismo.',
    },
    {
      id: 'u2-q12',
      type: 'tf',
      question: 'La especificidad de las proteínas significa que cada proteína cumple su función, y solo esa.',
      answer: true,
      explanation: 'Verdadero. La especificidad es la propiedad por la que cada proteína realiza una función concreta, y únicamente esa.',
    },
    {
      id: 'u2-q13',
      type: 'mc',
      question: 'Un nucleótido nucleico está formado por la unión de tres componentes:',
      options: [
        'Aminoácido + base nitrogenada + agua',
        'Pentosa (monosacárido) + base nitrogenada + ácido fosfórico',
        'Glucosa + ácido graso + fosfato',
        'Ribosa + dos bases nitrogenadas',
      ],
      answer: 1,
      explanation: 'Un nucleótido nucleico = una pentosa (monosacárido) + una base nitrogenada + un ácido fosfórico (H₃PO₄, siempre el mismo). Sin el fosfórico tendríamos un nucleósido.',
    },
    {
      id: 'u2-q14',
      type: 'mc',
      question: 'Las bases nitrogenadas PÚRICAS (dos anillos) son:',
      options: [
        'Citosina y timina',
        'Adenina y guanina',
        'Uracilo y citosina',
        'Timina y uracilo',
      ],
      answer: 1,
      explanation: 'Las bases púricas tienen dos anillos: adenina y guanina. Las pirimidínicas (un anillo) son citosina, timina y uracilo.',
    },
    {
      id: 'u2-q15',
      type: 'mc',
      question: 'En el ADN, la complementariedad de bases por puentes de hidrógeno es:',
      options: [
        'Adenina–citosina y guanina–timina',
        'Adenina–timina (2 puentes) y guanina–citosina (3 puentes)',
        'Adenina–uracilo y guanina–citosina',
        'Todas las bases con todas',
      ],
      answer: 1,
      explanation: 'En el ADN, la adenina se une a la timina (2 puentes de hidrógeno) y la guanina a la citosina (3 puentes). Por eso hay igual cantidad de A que de T, y de G que de C.',
    },
    {
      id: 'u2-q16',
      type: 'tf',
      question: 'La estructura secundaria del ADN (Watson y Crick, 1953) es una doble hélice de dos cadenas antiparalelas unidas por sus bases nitrogenadas.',
      answer: true,
      explanation: 'Verdadero. Watson y Crick (1953) describieron la doble hélice: dos cadenas antiparalelas (una 3´-5´ y la otra 5´-3´) unidas por las bases nitrogenadas, con los fosfóricos hacia fuera.',
    },
    {
      id: 'u2-q17',
      type: 'mc',
      question: 'En la estructura terciaria del ADN de eucariotas, ¿qué se forma al unirse un trozo de cadena de ADN con las histonas?',
      options: ['Un cromosoma', 'Un nucleosoma', 'Un solenoide', 'Un ribosoma'],
      answer: 1,
      explanation: 'Las histonas con un trozo de cadena de ADN forman un nucleosoma. La cadena de nucleosomas (aspecto de "collar de perlas") es la cromatina, que se empaqueta en solenoide y, al máximo, en cromosoma.',
    },
    {
      id: 'u2-q18',
      type: 'mc',
      question: '¿En qué se diferencia el ARN del ADN en cuanto a pentosa y bases?',
      options: [
        'El ARN tiene desoxirribosa y timina',
        'El ARN tiene ribosa y, en lugar de timina, uracilo',
        'El ARN tiene ribosa y timina',
        'El ARN tiene desoxirribosa y uracilo',
      ],
      answer: 1,
      explanation: 'El ARN lleva ribosa como pentosa y usa uracilo en lugar de timina. El ADN lleva desoxirribosa y timina. En el ARN, la complementariedad es adenina–uracilo y guanina–citosina.',
    },
    {
      id: 'u2-q19',
      type: 'mc',
      question: '¿Qué tipo de ARN transporta selectivamente los aminoácidos al ribosoma para la síntesis de proteínas?',
      options: [
        'ARN mensajero (ARNm)',
        'ARN ribosómico (ARNr)',
        'ARN de transferencia (ARNt)',
        'ADN',
      ],
      answer: 2,
      explanation: 'El ARN de transferencia (ARNt) lleva selectivamente los aminoácidos al ribosoma. El ARNm copia la información del ADN y el ARNr forma los ribosomas.',
    },
    {
      id: 'u2-q20',
      type: 'order',
      question: 'Ordena los niveles de compactación del ADN, de menos a más empaquetado:',
      // items barajados; answer apunta al orden correcto de ESTOS items.
      // items: [Cromatina(0), Nucleótido(1), Cromosoma(2), Doble hélice(3), Nucleosoma(4), Solenoide(5)]
      // orden correcto: Nucleótido→Doble hélice→Nucleosoma→Cromatina→Solenoide→Cromosoma = [1,3,4,0,5,2]
      items: ['Cromatina', 'Nucleótido', 'Cromosoma', 'Doble hélice', 'Nucleosoma', 'Solenoide'],
      answer: [1, 3, 4, 0, 5, 2],
      explanation: 'De menos a más compactado: nucleótido → doble hélice (Watson-Crick) → nucleosoma (ADN + histonas) → cromatina (collar de perlas) → solenoide → cromosoma (máxima compactación durante la división).',
    },
  ],
}
