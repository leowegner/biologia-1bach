// ============================================================================
// UNIDAD 1 — La materia viva: biomoléculas (I)
// ----------------------------------------------------------------------------
// Misma estructura que unidad0.js (ver ese archivo para la lista completa de
// tipos de bloque disponibles).
// ============================================================================

export const unidad1 = {
  id: 1,
  title: 'Biomoléculas (I)',
  subtitle: 'Bioelementos, agua, sales minerales, glúcidos, lípidos y vitaminas',
  available: true,

  sections: [
    // ---------------------------------------------------------------- §1
    {
      id: 'bioelementos',
      title: '1. Bioelementos',
      icon: '⚛️',
      blocks: [
        {
          type: 'p',
          text: 'Para entender cómo funcionan los seres vivos, primero hay que saber **de qué están hechos**. Los seres vivos están formados por una serie de elementos químicos de la tabla periódica que llamamos **bioelementos**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: bioelemento',
          text: 'Un bioelemento es cualquier elemento químico que forma parte de la materia viva. No son elementos "especiales": son los mismos de la tabla periódica, pero seleccionados por la vida porque sus propiedades los hacen útiles.',
        },
        {
          type: 'p',
          text: 'Los bioelementos se clasifican según **lo abundantes que son** en la materia viva. Esta es la clasificación que debes conocer:',
        },
        {
          type: 'h',
          text: 'Elementos biogénicos mayoritarios',
        },
        {
          type: 'p',
          text: 'Son los que están **siempre presentes** en la materia viva. Se dividen en dos grupos:',
        },
        {
          type: 'list',
          items: [
            '**Bioelementos primarios:** carbono (C), hidrógeno (H), oxígeno (O), nitrógeno (N), azufre (S) y fósforo (P). Son los componentes esenciales con los que se construye la materia viva. Los cuatro primeros (C, H, O, N) son los más abundantes; junto con P y S forman aproximadamente el **97 % de casi toda la materia viva**.',
            '**Bioelementos secundarios:** magnesio (Mg), calcio (Ca), potasio (K), sodio (Na) y cloro (Cl). Son menos abundantes, pero desempeñan funciones vitales en la fisiología celular (impulso nervioso, contracción muscular, etc.).',
          ],
        },
        {
          type: 'h',
          text: 'Oligoelementos',
        },
        {
          type: 'list',
          items: [
            '**Oligoelementos esenciales:** son esenciales para la vida pero se encuentran en cantidades muy pequeñas, que **no superan el 0,1 %**. Son: hierro (Fe), manganeso (Mn), cobre (Cu), zinc (Zn), flúor (F), yodo (I), boro (B), silicio (Si), vanadio (V), cromo (Cr), cobalto (Co), selenio (Se), molibdeno (Mo) y estaño (Sn).',
            '**Oligoelementos no esenciales:** el resto de elementos que, aun no siendo esenciales para todos los organismos, a menudo desempeñan funciones importantes.',
          ],
        },
        {
          type: 'warning',
          title: 'Error típico: "está en poca cantidad, así que no importa"',
          text: 'Que un oligoelemento esté en cantidad mínima NO significa que se pueda prescindir de él. Necesitas cantidades diminutas, pero son imprescindibles: su falta provoca enfermedades. Por ejemplo, sin yodo (que necesitas en miligramos) el tiroides no funciona bien.',
        },
        {
          type: 'h',
          text: 'Mención especial: el carbono',
        },
        {
          type: 'p',
          text: 'De todos los bioelementos, el **carbono** merece mención especial. No porque sea más importante que los demás, sino porque sus características atómicas le permiten **formar largas cadenas de átomos unidos**, que sirven de esqueleto para grandes biomoléculas. Puede hacer **4 enlaces covalentes** con otros átomos (incluido otro carbono), creando cadenas lineales y ramificadas con infinidad de combinaciones posibles. Lo veremos en detalle más adelante.',
        },
        {
          type: 'p',
          text: 'Un apunte importante: para aislar los bioelementos de una muestra biológica hay que **romper sus moléculas** mediante procedimientos químicos. Por eso, un simple análisis elemental (saber qué átomos hay) da una visión muy parcial de la materia viva: lo interesante es cómo se combinan.',
        },
      ],
    },

    // ---------------------------------------------------------------- §2
    {
      id: 'biomoleculas',
      title: '2. Las biomoléculas',
      icon: '🧩',
      blocks: [
        {
          type: 'p',
          text: 'Los bioelementos se agrupan y enlazan para formar **biomoléculas** (también llamadas *principios inmediatos*). Una biomolécula es una molécula que forma parte de los seres vivos.',
        },
        {
          type: 'key',
          title: 'Concepto clave: principio inmediato',
          text: 'Si tratas un material biológico solo con procedimientos físicos (sin cambiar su composición molecular), consigues aislar diversas sustancias sin alterarlas. Esas sustancias son los principios inmediatos: las moléculas y los iones que integran la materia viva.',
        },
        {
          type: 'h',
          text: 'Orgánicas vs inorgánicas',
        },
        {
          type: 'p',
          text: 'Las biomoléculas se dividen en dos grandes grupos según **dos criterios** que conviene no confundir:',
        },
        {
          type: 'list',
          items: [
            '**Criterio biológico (exclusividad):** las **inorgánicas** (agua, sales minerales y gases) NO son exclusivas de los seres vivos — también las hay en la materia inerte. Las **orgánicas** (glúcidos, lípidos, proteínas y nucleótidos) SÍ son exclusivas: solo las fabrican los organismos.',
            '**Criterio químico (el carbono):** las biomoléculas **orgánicas** están formadas por estructuras de **al menos dos átomos de carbono unidos**, llegando a ser cadenas de cientos o miles. Las inorgánicas no cumplen eso.',
          ],
        },
        {
          type: 'table',
          headers: ['Inorgánicas', 'Orgánicas'],
          rows: [
            ['Agua', 'Glúcidos'],
            ['Sales minerales', 'Lípidos'],
            ['Gases (O₂ y CO₂)', 'Proteínas'],
            ['', 'Nucleótidos y ácidos nucleicos'],
          ],
        },
        {
          type: 'warning',
          title: 'Ojo con los gases y las sales',
          text: 'El agua, las sales minerales y los gases (O₂, CO₂) son biomoléculas INORGÁNICAS, pero siguen siendo biomoléculas (forman parte de los seres vivos). "Inorgánico" no quiere decir "no biológico": quiere decir que no es exclusivo de la vida y que no tiene esqueleto de carbono.',
        },
        {
          type: 'p',
          text: 'En esta unidad veremos las **inorgánicas** (agua, sales, gases) y dos grupos de **orgánicas** (glúcidos y lípidos). Las proteínas y los ácidos nucleicos se ven en la Unidad 2.',
        },
      ],
    },

    // ---------------------------------------------------------------- §3
    {
      id: 'agua',
      title: '3. El agua',
      icon: '💧',
      blocks: [
        {
          type: 'p',
          text: 'El **agua es la molécula más abundante de la materia viva**. Nuestro cuerpo es un 60-70 % agua: una persona de 70 kg tiene unos 40 litros. El contenido varía desde el 20 % en tejidos óseos hasta el 85 % en células como las cerebrales, y es mayor en células embrionarias (disminuye con el envejecimiento).',
        },
        {
          type: 'p',
          text: 'Los organismos obtienen agua del medio (**agua exógena**) o la generan a partir de otras moléculas en reacciones bioquímicas (**agua endógena o metabólica**).',
        },
        {
          type: 'h',
          text: 'Estructura: la molécula polar',
        },
        {
          type: 'p',
          text: 'La molécula de agua son **dos hidrógenos y un oxígeno** unidos por enlaces covalentes simples. Aunque es eléctricamente neutra, sus átomos tienen distinta **electronegatividad** (capacidad de atraer electrones): el oxígeno es mucho más electronegativo que el hidrógeno.',
        },
        {
          type: 'p',
          text: 'Por eso los electrones se desplazan hacia el oxígeno, creando un "exceso de carga" negativa sobre el oxígeno y positiva sobre los hidrógenos (la **densidad o diferencial de carga**, representada con la letra griega delta, δ). Esta distribución de cargas hace que la molécula sea un **dipolo**: tiene dos polos sin carga neta. Decimos que el agua es una molécula **polar**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: de la polaridad sale TODO',
          text: 'El carácter polar del agua es la propiedad de la que se derivan todas las demás. Casi todo lo que hace el agua en los seres vivos se explica porque es un dipolo. Si entiendes esto, entiendes el resto de la sección.',
        },
        {
          type: 'h',
          text: 'Los puentes de hidrógeno',
        },
        {
          type: 'p',
          text: 'Gracias a su carácter polar, las moléculas de agua se atraen entre sí por **atracciones electrostáticas**, formando enlaces llamados **puentes de hidrógeno**: el oxígeno (con carga negativa) de una molécula atrae a los hidrógenos (con carga positiva) de otras. Cada molécula de agua puede formar hasta **4 puentes de hidrógeno**.',
        },
        {
          type: 'p',
          text: 'Cada puente de hidrógeno es **débil** por separado, pero como se forman **millones**, le dan al agua una estabilidad y una estructura interna que explican sus propiedades. Estos enlaces se debilitan al subir la temperatura, pero en el agua **a 100 °C todavía están presentes**.',
        },
        {
          type: 'h',
          text: 'Propiedades del agua',
        },
        {
          type: 'steps',
          items: [
            { title: 'Disolvente de sustancias polares', text: 'Por su carácter polar, el agua disuelve otras sustancias polares o con carga iónica (alcoholes, azúcares, aminoácidos, sales...). Rodea sus moléculas o iones y los reparte por el volumen de agua. Condiciones para disolverse: tener carácter polar y ser de pequeño tamaño. NO es un "disolvente universal" literal: no lo disuelve todo.' },
            { title: 'Elevado calor específico y de vaporización', text: 'El calor específico es el calor que hay que añadir para subir 1 grado la temperatura de una masa. El agua lo tiene elevado por los puentes de hidrógeno: al calentarla, primero hay que romper muchísimos enlaces, así que absorbe mucho calor antes de calentarse o evaporarse.' },
            { title: 'Elevada fuerza de adhesión', text: 'El agua atrae a lo que esté en contacto con ella, siempre que sea polar (una membrana, las paredes de un recipiente o de un capilar).' },
            { title: 'Elevada fuerza de cohesión', text: 'Las moléculas de agua se unen entre sí (puentes de hidrógeno), formando un líquido muy estable y difícilmente comprimible.' },
          ],
        },
        {
          type: 'example',
          title: 'Hidrófilo vs hidrófobo',
          text: 'Las sustancias HIDRÓFILAS sienten atracción por el agua (las polares, como el azúcar). Las HIDRÓFOBAS la repelen (las apolares, como el aceite). Esto depende de su naturaleza química: si son polares o no.',
        },
        {
          type: 'h',
          text: 'Funciones del agua',
        },
        {
          type: 'p',
          text: 'Las funciones se derivan directamente de las propiedades anteriores:',
        },
        {
          type: 'list',
          items: [
            '**Función termorreguladora.** Relacionada con el calor específico y de vaporización. Ayuda a regular la temperatura de los seres vivos (por eso sudar enfría: evaporar agua absorbe mucho calor).',
            '**Función de transporte.** Relacionada con la propiedad de disolvente. Transporta sustancias disueltas o en suspensión por los líquidos internos. Incluye los fenómenos osmóticos.',
            '**Soporte o medio de las reacciones químicas.** Por su estabilidad y poca reactividad, cientos de reacciones del metabolismo ocurren en el citoplasma (que es mayoritariamente agua).',
            '**Protección física** de células u órganos, por su volumen y estado (por ejemplo, el líquido amniótico).',
            '**Ascenso de líquidos por capilaridad.** Por la fuerza de adhesión. Las moléculas de agua se adhieren a las paredes del capilar y el líquido asciende. Así sube la savia por el xilema de las plantas.',
            '**Ayuda al mantenimiento del pH interno**, por su grado de ionización estable (se verá con las sales minerales).',
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- §4
    {
      id: 'gases',
      title: '4. Gases',
      icon: '🫧',
      blocks: [
        {
          type: 'p',
          text: 'No se suele pensar en ellos como biomoléculas, pero los **gases son muy importantes** y son biomoléculas **inorgánicas**. Los principales son el **oxígeno (O₂)** y el **dióxido de carbono (CO₂)**. El nitrógeno (N₂) también es importante como fuente de nitrógeno, aunque muy pocos organismos (algunas bacterias) pueden usarlo directamente.',
        },
        {
          type: 'key',
          title: 'Concepto clave: por qué son gases',
          text: 'Las moléculas de O₂ y CO₂ son compuestos covalentes y APOLARES. Al ser apolares, casi no se atraen entre ellas, así que se separan: por eso son gases a temperatura ambiente. (Compáralo con el agua, que es polar, se atrae mucho y por eso es líquida.)',
        },
        {
          type: 'h',
          text: 'Funciones (se ven a fondo en el tema de metabolismo)',
        },
        {
          type: 'list',
          items: [
            'El **oxígeno** interviene en la **respiración celular**, que sirve para obtener energía.',
            'El **dióxido de carbono** interviene en la **fotosíntesis**, en la fase oscura, para la síntesis de monosacáridos.',
            'Ambos aparecen también como **desecho metabólico**: el oxígeno se desprende en la fase lumínica de la fotosíntesis, y el CO₂ en el ciclo de Krebs (en la mitocondria).',
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- §5
    {
      id: 'sales-osmosis',
      title: '5. Sales minerales y ósmosis',
      icon: '🧂',
      blocks: [
        {
          type: 'p',
          text: 'Las **sales minerales** son un grupo de sales inorgánicas. Se clasifican según su **solubilidad en agua** en insolubles y solubles.',
        },
        {
          type: 'h',
          text: 'Sales insolubles',
        },
        {
          type: 'p',
          text: 'Forman **agregados sólidos**, con función **estructural y protectora**. Ejemplos:',
        },
        {
          type: 'list',
          items: [
            '**Carbonato de calcio:** en los caparazones de los moluscos o los endoesqueletos de equinodermos. (Los silicatos, parecidos pero con silicio, están en los caparazones de las diatomeas o en paredes de algunas células vegetales.)',
            '**Fosfatos de calcio:** en los huesos de los vertebrados. El **fluoruro de calcio** está en los dientes.',
          ],
        },
        {
          type: 'h',
          text: 'Sales solubles',
        },
        {
          type: 'p',
          text: 'Se encuentran **disociadas en sus iones** (cationes y aniones), que son los responsables de su actividad biológica. Sus funciones:',
        },
        {
          type: 'list',
          items: [
            '**Función osmótica:** intervienen en el movimiento del agua entre el interior celular y el medio.',
            '**Regulación del pH.**',
            '**Ayuda a la transmisión del impulso nervioso** y a la **contracción muscular.**',
          ],
        },
        {
          type: 'h',
          text: 'La ósmosis',
        },
        {
          type: 'p',
          text: 'La **ósmosis** es el paso (difusión) de un **disolvente** a través de una **membrana semipermeable**, desde la solución más diluida hasta la más concentrada, hasta alcanzar un equilibrio. En los seres vivos, el disolvente es el **agua** y la membrana es la **de la célula**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: membrana semipermeable',
          text: 'Una membrana semipermeable deja pasar el DISOLVENTE (agua) pero NO el SOLUTO (las sales). Como las sales no pueden cruzar para igualar las concentraciones, lo que se mueve es el agua: pasa hacia el lado más concentrado para diluirlo.',
        },
        {
          type: 'p',
          text: 'El agua atraviesa la membrana para entrar o salir de las células. Esto depende de la diferencia de concentración entre los líquidos de dentro y de fuera, determinada por las sales disueltas. Cuando hay un **gradiente** (una diferencia de concentración), hay energía acumulada: es parecido a la diferencia de altura del agua en una presa. Esa energía empuja al agua a través de la membrana, siempre en el mismo sentido, y se llama **presión osmótica**.',
        },
        {
          type: 'p',
          text: 'Dos medios separados por una membrana semipermeable pueden tener distintas concentraciones. Se nombran así:',
        },
        {
          type: 'table',
          headers: ['Tipo de medio', 'Concentración de solutos', 'Respecto al otro medio'],
          rows: [
            ['**Hipertónico** (hiperosmótico)', 'Más concentrado', 'Tiene MÁS solutos'],
            ['**Hipotónico** (hipoosmótico)', 'Más diluido', 'Tiene MENOS solutos'],
            ['**Isotónico** (isoosmótico)', 'Igual', 'Tiene la MISMA concentración'],
          ],
        },
        {
          type: 'p',
          text: 'El agua pasará de la solución **hipotónica** (más diluida) a la **hipertónica** (más concentrada), hasta equilibrarlas. **Entre dos soluciones isotónicas no hay ósmosis** (no hay diferencia que igualar).',
        },
        {
          type: 'example',
          title: 'Ejemplo: ¿por qué se arruga una célula en agua salada?',
          text: 'Si pones una célula en un medio HIPERTÓNICO (más salado que su interior), el agua SALE de la célula hacia el medio más concentrado, y la célula se arruga (se deshidrata). Si la pones en un medio HIPOTÓNICO (agua casi pura), el agua ENTRA y la célula se hincha (incluso puede estallar). En un medio ISOTÓNICO, ni entra ni sale: la célula está estable.',
        },
        {
          type: 'warning',
          title: 'Truco para no confundir hiper/hipo',
          text: 'HIPER = más (hipertónico = más solutos). HIPO = menos (hipotónico = menos solutos). El agua siempre va hacia donde hay MÁS sal (hacia el hipertónico), para diluirla.',
        },
      ],
    },

    // ---------------------------------------------------------------- §6
    {
      id: 'carbono-glucidos',
      title: '6. El carbono y los glúcidos',
      icon: '🍬',
      blocks: [
        {
          type: 'h',
          text: 'Ese carbono...',
        },
        {
          type: 'p',
          text: 'El átomo de carbono es pequeño. Su número atómico es 6: tiene 6 protones y 6 electrones. Su configuración electrónica deja **4 electrones en la última capa**, y la forma más estable de completarla es haciendo **4 enlaces covalentes** del mismo tipo (gracias a la hibridación de sus orbitales). Lo importante ahora: **el carbono puede hacer 4 enlaces**, y por eso puede formar cadenas largas que son el esqueleto de las biomoléculas orgánicas.',
        },
        {
          type: 'key',
          title: 'Concepto clave: la química del carbono',
          text: 'A la química orgánica se la llama también "química del carbono", porque este elemento es la base de todas las moléculas orgánicas. Hay más moléculas orgánicas distintas que cualquier otra combinación posible de elementos: esa versatilidad viene de los 4 enlaces del carbono.',
        },
        {
          type: 'h',
          text: 'Glúcidos',
        },
        {
          type: 'p',
          text: 'Los **glúcidos** (del griego *glicos*, "dulce"), también llamados **azúcares** o **hidratos de carbono**, son el primer grupo de biomoléculas orgánicas. Como toda biomolécula orgánica: son exclusivos de los seres vivos y están formados por estructuras de átomos de carbono unidos.',
        },
        {
          type: 'p',
          text: 'Están compuestos de **carbono, hidrógeno y oxígeno**, en la proporción **Cₙ H₂ₙ Oₙ** (de ahí "hidratos de carbono": parece carbono con agua).',
        },
        {
          type: 'h',
          text: 'Monosacáridos (los más simples)',
        },
        {
          type: 'p',
          text: 'La estructura de los glúcidos se basa en su molécula más simple, el **monosacárido**: una cadena de entre **3 y 6 átomos de carbono**. Según el número de carbonos se nombran: triosas (3), tetrosas (4), pentosas (5) y hexosas (6).',
        },
        {
          type: 'list',
          items: [
            'Ejemplos de **pentosas** (5 C): la **ribosa** y la **desoxirribosa** (forman parte de los ácidos nucleicos).',
            'Ejemplos de **hexosas** (6 C): la **glucosa**, la **galactosa** y la **fructosa**.',
          ],
        },
        {
          type: 'p',
          text: '**Propiedades de los monosacáridos:**',
        },
        {
          type: 'list',
          items: [
            'Son **polares y solubles en agua** (por sus grupos hidroxilo -OH, que se polarizan igual que el agua). Son solubles porque son polares y pequeños.',
            'Son **sólidos cristalinos de color blanco** y dulces (de ahí el nombre de glúcido).',
            'Son **muy energéticos**: la ruptura de sus enlaces proporciona abundante energía.',
          ],
        },
        {
          type: 'p',
          text: '**Funciones de los monosacáridos:**',
        },
        {
          type: 'list',
          items: [
            '**Estructural:** forman parte de otras moléculas (la ribosa/desoxirribosa en los ácidos nucleicos, la glucosa en los polisacáridos).',
            '**Energética:** es la más importante y conocida. Son una de las fuentes de energía inmediata más importantes del metabolismo. La reserva no es muy grande: en un ejercicio intenso la glucosa se agota en pocos segundos.',
          ],
        },
        {
          type: 'h',
          text: 'Oligosacáridos',
        },
        {
          type: 'p',
          text: 'Están formados por la **unión de varios monosacáridos** mediante **enlaces O-glucosídicos**. Los más comunes son los **disacáridos** (2 monosacáridos): la **sacarosa** (el azúcar de mesa), la **maltosa** y la **lactosa**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: el enlace O-glucosídico',
          text: 'Cuando dos monosacáridos se unen, se forma un enlace O-glucosídico y se libera una molécula de agua. En las representaciones de estos azúcares (los polígonos), recuerda que cada VÉRTICE del polígono representa un átomo de carbono.',
        },
        {
          type: 'list',
          items: [
            '**Propiedades:** los disacáridos son polares y solubles en agua, como los monosacáridos. Otros oligosacáridos son polares e hidrófilos, pero no se habla de su solubilidad porque nunca están sueltos: van unidos a otras estructuras.',
            '**Funciones:** los disacáridos tienen función **energética**. Otros oligosacáridos (en la membrana externa de las células) tienen función de **reconocimiento celular**.',
          ],
        },
        {
          type: 'h',
          text: 'Polisacáridos',
        },
        {
          type: 'p',
          text: 'Formados al unirse **muchos monosacáridos** en cadenas largas (enlaces O-glucosídicos), lineales o ramificadas, con monómeros iguales o distintos. La celulosa y la quitina son lineales; el almidón y el glucógeno son ramificados.',
        },
        {
          type: 'p',
          text: '**Propiedades:** son moléculas polares, pero por su gran tamaño **NO son solubles en agua**. Tienen enlaces muy energéticos y forman en algunos casos estructuras rígidas.',
        },
        {
          type: 'warning',
          title: 'Ojo: monosacárido soluble, polisacárido no',
          text: 'Aunque están hechos de los mismos "ladrillos" (monosacáridos solubles), los polisacáridos NO se disuelven en agua por su enorme tamaño. El tamaño cambia la propiedad: un azúcar pequeño se disuelve, una cadena gigantesca no.',
        },
        {
          type: 'p',
          text: '**Funciones de los polisacáridos:**',
        },
        {
          type: 'table',
          headers: ['Función', 'Polisacárido', 'Dónde está'],
          rows: [
            ['**Estructural y protectora**', 'Celulosa', 'Pared de la célula vegetal'],
            ['', 'Quitina', 'Pared de hongos y exoesqueleto de artrópodos'],
            ['', 'Peptidoglicano', 'Pared celular de bacterias'],
            ['**Reserva energética**', 'Almidón', 'Plantas (trigo, mijo, papas)'],
            ['', 'Glucógeno', 'Animales (hígado y músculo estriado)'],
          ],
        },
        {
          type: 'example',
          title: 'Almidón vs glucógeno: la misma idea en plantas y animales',
          text: 'Tanto el almidón (plantas) como el glucógeno (animales) son la "despensa" de glucosa del organismo: almacenan azúcar para cuando haga falta energía. La diferencia es de quién: almidón = reserva vegetal, glucógeno = reserva animal (lo guardas en el hígado y los músculos).',
        },
      ],
    },

    // ---------------------------------------------------------------- §7
    {
      id: 'lipidos',
      title: '7. Lípidos',
      icon: '🧈',
      blocks: [
        {
          type: 'p',
          text: 'Los **lípidos** son un conjunto de moléculas **heterogéneas** (muy variadas) que tienen en común: ser **insolubles en agua**, solubles en disolventes apolares, de aspecto oleoso y untuosos al tacto. Según su estructura se clasifican en **saponificables** e **insaponificables**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: saponificable',
          text: 'Saponificable = contiene ácidos grasos y puede hacer la reacción de saponificación (la ruptura del enlace éster con una sal básica). Esa reacción es la que se usa para fabricar JABÓN, y de ahí viene el nombre ("sapo" = jabón en latín). Insaponificable = NO contiene ácidos grasos.',
        },
        {
          type: 'h',
          text: 'Lípidos saponificables (con ácidos grasos)',
        },
        {
          type: 'p',
          text: '**1. Triacilglicéridos** (también triglicéridos o grasas):',
        },
        {
          type: 'list',
          items: [
            '**Propiedades:** son muy apolares, por tanto insolubles en agua. Son moléculas muy energéticas.',
            '**Funciones:** sobre todo **reserva energética**, en animales y plantas. Las plantas los almacenan en semillas (pipas, soja) y frutos (aceitunas); los animales, en el tejido adiposo. También función **protectora** en animales: térmica (del frío) y mecánica.',
          ],
        },
        {
          type: 'p',
          text: 'Las grasas se clasifican según su **punto de fusión**:',
        },
        {
          type: 'table',
          headers: ['Origen', 'Punto de fusión', 'A temperatura ambiente'],
          rows: [
            ['**Vegetal**', 'Bajo', 'Líquidas → se llaman aceites (girasol, oliva)'],
            ['**Animal**', 'Más alto', 'Sólidas'],
          ],
        },
        {
          type: 'p',
          text: '**2. Ceras:**',
        },
        {
          type: 'list',
          items: [
            '**Propiedades:** muy apolares e hidrófobas.',
            '**Funciones:** protección y revestimiento. En plantas recubren hojas o frutos (el brillo de una manzana es cera; aísla y evita la pérdida de agua). En animales recubren pelo o plumas. La cera de algunas ovejas (lanolina) tiene usos industriales.',
          ],
        },
        {
          type: 'p',
          text: '**3. Fosfolípidos:**',
        },
        {
          type: 'list',
          items: [
            '**Propiedad clave:** son moléculas **anfipáticas**. Tienen una zona polar (la del fosfórico, "cabeza") y una zona apolar (las colas hidrocarbonadas).',
          ],
        },
        {
          type: 'key',
          title: 'Concepto clave: anfipático y la bicapa',
          text: 'Una molécula anfipática tiene una parte que ama el agua (hidrófila) y otra que la repele (hidrófoba). Al meterla en agua, las moléculas se ordenan solas: las cabezas polares hacia el agua y las colas apolares juntas, escondidas del agua. Así se forma la BICAPA de las membranas celulares. ¡Esta es la base de toda membrana biológica!',
        },
        {
          type: 'h',
          text: 'Lípidos insaponificables (sin ácidos grasos)',
        },
        {
          type: 'p',
          text: 'No contienen ácidos grasos. Su estructura es más variada y son menos abundantes, pero tienen funciones muy importantes (vitamínica u hormonal). Los principales son los terpenos y los esteroides.',
        },
        {
          type: 'list',
          items: [
            '**Terpenos:** proporcionan aromas (mentol, geraniol) o color (carotenos, xantofilas) a las plantas. Otros son vitaminas, como la A, E y K.',
            '**Esteroides:** el **colesterol** tiene función estructural en las membranas (mantiene la fluidez frente a los cambios de temperatura) y en la sangre se une a las lipoproteínas. Otros esteroides tienen función vitamínica (vitamina D), hormonal (estrógenos y progesterona) o forman los ácidos biliares (que ayudan a digerir las grasas en el intestino).',
          ],
        },
        {
          type: 'example',
          title: 'El colesterol no es "malo" sin más',
          text: 'El colesterol tiene mala fama, pero es imprescindible: da fluidez a las membranas de tus células y es el punto de partida de hormonas como los estrógenos, la progesterona y la vitamina D. El problema es el exceso en sangre, no el colesterol en sí.',
        },
      ],
    },

    // ---------------------------------------------------------------- §8
    {
      id: 'vitaminas',
      title: '8. Vitaminas',
      icon: '💊',
      blocks: [
        {
          type: 'p',
          text: 'Las **vitaminas** son un grupo **heterogéneo** de moléculas (de distinta naturaleza química). Una vitamina es una molécula **necesaria en cantidad muy pequeña** que, por lo general, **no podemos fabricar** en nuestro metabolismo, por lo que **debemos tomarla en la dieta**.',
        },
        {
          type: 'key',
          title: 'Concepto clave: liposolubles vs hidrosolubles',
          text: 'Las vitaminas se agrupan según en qué se disuelven. Las LIPOSOLUBLES (A, D, E, K) tienen estructura lipídica y se disuelven en grasas. Las HIDROSOLUBLES (C y grupo B) se disuelven en agua. Truco: "liPOsoluble" → se disuelve en líPidos.',
        },
        {
          type: 'warning',
          title: 'Más vitaminas NO es mejor',
          text: 'Al contrario de la creencia popular, no es bueno tomar más vitaminas de la cuenta. Igual que hay enfermedades por FALTA de vitaminas (carenciales), puede haber problemas por EXCESO de alguna. Por lo general, el exceso de las hidrosolubles se elimina por la orina, pero las liposolubles se acumulan. El ejemplo más conocido de enfermedad carencial es el escorbuto, por falta de vitamina C.',
        },
        {
          type: 'h',
          text: 'Vitaminas liposolubles (A, D, E, K)',
        },
        {
          type: 'table',
          headers: ['Vit.', 'Fuente', 'Función', 'Carencia'],
          rows: [
            ['**A**', 'Hortalizas verdes, hígado, huevos', 'Ciclo visual, crecimiento, protección y mantenimiento del tejido epitelial', 'Ceguera nocturna, desecación epitelial, detención del crecimiento'],
            ['**D**', 'Verduras, aceites animales, mantequilla, hígado, huevos', 'Formación de huesos, dientes y funcionamiento de músculos', 'Raquitismo en niños y deformaciones óseas en adultos'],
            ['**E**', 'Aceites vegetales, huevos y mantequilla', 'Evita la esterilidad; refuerza las paredes de los capilares', 'Esterilidad, abortos, envejecimiento celular'],
            ['**K**', 'Verduras', 'Interviene en la coagulación sanguínea', 'Hemorragias subcutáneas e intramusculares'],
          ],
        },
        {
          type: 'h',
          text: 'Vitaminas hidrosolubles (C y grupo B)',
        },
        {
          type: 'table',
          headers: ['Vit.', 'Fuente', 'Función', 'Carencia'],
          rows: [
            ['**C**', 'Leche, frutas (cítricos) y hortalizas', 'Síntesis de colágeno y mantenimiento de las mucosas', 'Escorbuto (encías sangrantes, infecciones cutáneas, trastornos digestivos)'],
            ['**B1**', 'Envolturas de cereales y legumbres. Bacterias y levaduras', 'Metabolismo de glúcidos y lípidos en músculos y neuronas', 'Beri-beri (degeneración nerviosa, parálisis)'],
            ['**B2**', 'Hígado, queso, leche, huevos, vegetales de hoja verde', 'Cadena de transporte de electrones', 'Detención del crecimiento, cansancio, dermatitis, labios resquebrajados'],
            ['**B3**', 'Hongos, levaduras, leche y carnes', 'Cadena de transporte de electrones', 'Pelagra (vómitos, diarreas, piel áspera), trastornos nerviosos'],
            ['**B8**', 'Bacterias intestinales, chocolate, yema de huevo', 'Desarrollo de glándulas sexuales, sudoríparas y sebáceas', 'Dermatitis, caída del pelo, anemia'],
            ['**B12**', 'Bacterias intestinales', 'Síntesis de proteínas y nucleótidos; formación de glóbulos rojos', 'Anemia (disminución de glóbulos rojos), trastornos neurológicos'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------ §8-bis
    {
      id: 'flashcards-vitaminas',
      title: '8b. Flashcards de vitaminas',
      icon: '🃏',
      blocks: [
        {
          type: 'p',
          text: 'Tarjetas para memorizar las vitaminas en **las dos direcciones**: de la vitamina a sus datos (fuentes, funciones, carencias) y al revés (de una carencia, función o fuente, decir qué vitamina es). Elige una baraja, lee la pregunta, piensa la respuesta y **pulsa la tarjeta para voltearla**. Usa «Todas» para que te salgan mezcladas.',
        },
        {
          type: 'flashcards',
          // Datos de las dos tablas de vitaminas del libro.
          // Cada función/fuente/carencia se separa en elementos para poder
          // generar las barajas inversas (de un dato → qué vitaminas).
          data: [
            {
              vit: 'A',
              fuentes: ['Hortalizas verdes', 'Hígado', 'Huevos'],
              funciones: ['Ciclo visual', 'Crecimiento', 'Protección y mantenimiento del tejido epitelial'],
              carencias: ['Ceguera nocturna', 'Desecación epitelial', 'Detención del crecimiento'],
            },
            {
              vit: 'D',
              fuentes: ['Verduras', 'Aceites animales', 'Mantequilla', 'Hígado', 'Huevos'],
              funciones: ['Formación de huesos y dientes', 'Funcionamiento de músculos'],
              carencias: ['Raquitismo (en niños)', 'Deformaciones óseas (en adultos)'],
            },
            {
              vit: 'E',
              fuentes: ['Aceites vegetales', 'Huevos', 'Mantequilla'],
              funciones: ['Evita la esterilidad', 'Refuerza las paredes de los capilares'],
              carencias: ['Esterilidad', 'Abortos', 'Envejecimiento celular'],
            },
            {
              vit: 'K',
              fuentes: ['Verduras'],
              funciones: ['Coagulación sanguínea'],
              carencias: ['Hemorragias subcutáneas e intramusculares'],
            },
            {
              vit: 'C',
              fuentes: ['Leche', 'Frutas (cítricos)', 'Hortalizas'],
              funciones: ['Síntesis de colágeno', 'Mantenimiento de las mucosas'],
              carencias: ['Escorbuto (encías sangrantes, infecciones cutáneas, trastornos digestivos)'],
            },
            {
              vit: 'B1',
              fuentes: ['Envolturas de cereales y legumbres', 'Bacterias y levaduras'],
              funciones: ['Metabolismo de glúcidos y lípidos en músculos y neuronas'],
              carencias: ['Beri-beri (degeneración nerviosa, parálisis)'],
            },
            {
              vit: 'B2',
              fuentes: ['Hígado', 'Queso', 'Leche', 'Huevos', 'Vegetales de hoja verde'],
              funciones: ['Cadena de transporte de electrones'],
              carencias: ['Detención del crecimiento', 'Cansancio', 'Dermatitis', 'Labios resquebrajados'],
            },
            {
              vit: 'B3',
              fuentes: ['Hongos', 'Levaduras', 'Leche', 'Carnes'],
              funciones: ['Cadena de transporte de electrones'],
              carencias: ['Pelagra (vómitos, diarreas, piel áspera)', 'Trastornos nerviosos'],
            },
            {
              vit: 'B8',
              fuentes: ['Bacterias intestinales', 'Chocolate', 'Yema de huevo'],
              funciones: ['Desarrollo de glándulas sexuales, sudoríparas y sebáceas'],
              carencias: ['Dermatitis', 'Caída del pelo', 'Anemia'],
            },
            {
              vit: 'B12',
              fuentes: ['Bacterias intestinales'],
              funciones: ['Síntesis de proteínas y nucleótidos', 'Formación de glóbulos rojos'],
              carencias: ['Anemia (disminución de glóbulos rojos)', 'Trastornos neurológicos'],
            },
          ],
        },
        {
          type: 'warning',
          title: 'Ojo: hay datos que se repiten en varias vitaminas',
          text: 'Algunas funciones, carencias o fuentes son compartidas. Por ejemplo, "cadena de transporte de electrones" la hacen la B2 y la B3; la "anemia" aparece en la B8 y la B12; el "hígado" es fuente de A, D, B2... Por eso, en las barajas inversas (dato → vitamina) la respuesta a veces incluye más de una vitamina.',
        },
      ],
    },

    // ---------------------------------------------------------------- §9
    {
      id: 'actividades',
      title: '9. Actividades resueltas',
      icon: '✏️',
      blocks: [
        {
          type: 'p',
          text: 'Aquí tienes **los ejercicios del libro** de esta unidad. Intenta responder cada uno por tu cuenta y, cuando lo tengas, pulsa **«Ver respuesta»** para autocorregirte. Son respuestas orientativas: lo importante es que la tuya recoja las mismas ideas.',
        },

        { type: 'h', text: 'Ejercicio 1 — Definiciones' },
        {
          type: 'activity',
          label: 'Definiciones',
          question: 'Define: bioelemento, biomolécula, puente de hidrógeno, polar/apolar, ósmosis, hipotónico/hipertónico/isotónico, membrana semipermeable, hidrófilo/hidrófobo, glúcido/monosacárido/disacárido/polisacárido, lípido, saponificable, vitamina.',
          answerBlocks: [
            {
              type: 'table',
              headers: ['Término', 'Definición'],
              rows: [
                ['**Bioelemento**', 'Elemento químico que forma parte de la materia viva.'],
                ['**Biomolécula**', 'Molécula que forma parte de los seres vivos (principio inmediato).'],
                ['**Puente de hidrógeno**', 'Enlace débil por atracción electrostática entre el oxígeno (carga δ-) de una molécula de agua y el hidrógeno (carga δ+) de otra.'],
                ['**Polar / apolar**', 'Polar: molécula con distribución desigual de cargas (un dipolo, como el agua). Apolar: sin esa separación de cargas (como el O₂ o las grasas).'],
                ['**Ósmosis**', 'Paso de disolvente (agua) a través de una membrana semipermeable desde la solución más diluida a la más concentrada, hasta el equilibrio.'],
                ['**Hipotónico / hipertónico / isotónico**', 'Según los solutos respecto a otro medio: hipotónico = menos; hipertónico = más; isotónico = igual.'],
                ['**Membrana semipermeable**', 'Membrana que deja pasar el disolvente (agua) pero no el soluto (sales).'],
                ['**Hidrófilo / hidrófobo**', 'Hidrófilo: tiene atracción por el agua (polar). Hidrófobo: la repele (apolar).'],
                ['**Glúcido**', 'Biomolécula orgánica (azúcar) de C, H y O en proporción CₙH₂ₙOₙ.'],
                ['**Monosacárido**', 'Glúcido más simple, de 3 a 6 carbonos (glucosa, ribosa...).'],
                ['**Disacárido**', 'Dos monosacáridos unidos por enlace O-glucosídico (sacarosa, lactosa...).'],
                ['**Polisacárido**', 'Muchos monosacáridos unidos en cadenas largas (almidón, celulosa...).'],
                ['**Lípido**', 'Biomolécula orgánica heterogénea, insoluble en agua y soluble en disolventes apolares.'],
                ['**Saponificable**', 'Lípido que contiene ácidos grasos y puede hacer la saponificación (fabricar jabón).'],
                ['**Vitamina**', 'Molécula necesaria en cantidad muy pequeña que no se fabrica y hay que tomar en la dieta.'],
              ],
            },
          ],
        },

        { type: 'h', text: 'Ejercicios 2 a 9' },
        {
          type: 'activity',
          label: 'Ejercicio 2',
          question: '¿Cuál es el criterio de clasificación de los bioelementos? ¿Cuáles son los bioelementos primarios?',
          answer: 'El criterio es **la abundancia** en la materia viva (cómo de abundantes son proporcionalmente). Los **bioelementos primarios** son: carbono (C), hidrógeno (H), oxígeno (O), nitrógeno (N), azufre (S) y fósforo (P). Son los más abundantes y forman cerca del 97 % de la materia viva.',
        },
        {
          type: 'activity',
          label: 'Ejercicio 3',
          question: 'Para mejorar su salud, Carmen ha dejado de tomar alimentos con Mn (manganeso). Razona que no hay problema, pues solo necesita unos 0,002 g al día, una cantidad despreciable. ¿Estás de acuerdo? ¿Qué ocurre si se deja de tomar Mn u otro bioelemento análogo?',
          answer: '**No estoy de acuerdo.** El manganeso es un **oligoelemento esencial**: aunque se necesite en cantidad mínima (esos 0,002 g), es imprescindible. Que la cantidad sea pequeña no significa que se pueda eliminar: los oligoelementos cumplen funciones vitales (muchos forman parte de enzimas). Si se deja de tomar Mn u otro oligoelemento esencial, aparece una **enfermedad carencial** por su falta, con trastornos en las funciones donde interviene. La clave del error de Carmen es confundir "poca cantidad" con "prescindible".',
        },
        {
          type: 'activity',
          label: 'Ejercicio 4',
          question: 'Una serpiente tiene un veneno hemotóxico (tóxico para las células sanguíneas) porque hidroliza los fosfolípidos de esas células (hidrólisis = ruptura de una molécula con ayuda del agua). ¿Qué consecuencias sufriríamos si nos muerde? Explícalo en detalle.',
          answerBlocks: [
            {
              type: 'p',
              text: 'Los **fosfolípidos** son el componente principal de la **membrana** de las células (forman la bicapa, gracias a su carácter anfipático). Si el veneno **hidroliza (rompe) los fosfolípidos**, está destruyendo la membrana de las células sanguíneas.',
            },
            {
              type: 'p',
              text: 'Consecuencia: sin membrana, las células sanguíneas (por ejemplo los glóbulos rojos) **se rompen y mueren** (se destruyen, se "lisan"). Eso provoca la destrucción de la sangre: anemia, hemorragias y graves problemas, porque la sangre deja de poder transportar oxígeno y cumplir sus funciones. En definitiva, atacar los fosfolípidos = atacar las membranas = matar las células.',
            },
          ],
        },
        {
          type: 'activity',
          label: 'Ejercicio 5',
          question: 'Nombra dos funciones del agua de importancia biológica y relaciónalas con su estructura.',
          answerBlocks: [
            {
              type: 'p',
              text: 'Dos ejemplos (vale cualquier par bien relacionado):',
            },
            {
              type: 'list',
              items: [
                '**Función de transporte / disolvente:** el agua disuelve y transporta sustancias. Se relaciona con su **carácter polar** (es un dipolo), que le permite rodear y disolver otras moléculas polares o iones.',
                '**Función termorreguladora:** el agua ayuda a regular la temperatura. Se relaciona con los **puentes de hidrógeno**: hay que romper muchísimos para calentarla o evaporarla, así que absorbe mucho calor (alto calor específico y de vaporización).',
              ],
            },
          ],
        },
        {
          type: 'activity',
          label: 'Ejercicio 6',
          question: '¿Cómo se transformaría una solución hipotónica en isotónica?',
          answer: 'Una solución **hipotónica** tiene MENOS solutos que la otra. Para hacerla **isotónica** (misma concentración) hay que **aumentar su concentración de solutos** hasta igualarla: o bien **añadiendo soluto** (sales) a la solución hipotónica, o bien **quitándole agua** (disolvente) para concentrarla. Cualquiera de las dos sube su concentración hasta igualar la del otro medio.',
        },
        {
          type: 'activity',
          label: 'Ejercicio 7',
          question: 'Una célula se coloca a tiempo 0 en un medio con alta concentración de sales y a los 10 min se pasa a agua pura. La gráfica muestra el volumen: baja hasta los 10 min y luego sube. (a) ¿Por qué disminuye el volumen a los 5 min? (b) ¿Por qué aumenta a los 15 min? (c) ¿Cómo se llama el fenómeno?',
          answerBlocks: [
            {
              type: 'list',
              items: [
                '**(a) A los 5 min baja el volumen:** la célula está en un medio **hipertónico** (más concentrado en sales que su interior). Por ósmosis, el agua **SALE** de la célula hacia el medio más concentrado, así que la célula pierde agua y **se encoge** (disminuye su volumen).',
                '**(b) A los 15 min sube el volumen:** ahora la célula está en **agua pura** (medio **hipotónico**, sin solutos). El agua **ENTRA** en la célula hacia su interior, más concentrado, así que la célula se hincha y **aumenta su volumen**.',
                '**(c) El fenómeno** observado es la **ósmosis** (el movimiento de agua a través de la membrana semipermeable según la concentración).',
              ],
            },
          ],
        },
        {
          type: 'activity',
          label: 'Ejercicio 8',
          question: '¿Qué papel desempeña el colesterol en las células animales?',
          answer: 'El **colesterol** es un esteroide (lípido insaponificable) con función **estructural en las membranas** de las células animales: se inserta entre los fosfolípidos y **mantiene la fluidez** de la membrana frente a las fluctuaciones de temperatura (evita que se vuelva demasiado rígida con el frío o demasiado fluida con el calor). Además, en la sangre se une a las lipoproteínas del plasma, y es el punto de partida de hormonas y de la vitamina D.',
        },
        {
          type: 'activity',
          label: 'Ejercicio 9',
          question: '¿Cuál es el principal papel de las grasas? Clasifica en saponificable o insaponificable: triacilglicéridos, esteroides y glicerofosfolípidos.',
          answerBlocks: [
            {
              type: 'p',
              text: 'El principal papel de las grasas (triacilglicéridos) es la **reserva energética** (son moléculas muy energéticas que almacenan energía a largo plazo). Clasificación:',
            },
            {
              type: 'table',
              headers: ['Lípido', '¿Saponificable?', 'Por qué'],
              rows: [
                ['**Triacilglicéridos**', 'Saponificable', 'Contienen ácidos grasos'],
                ['**Glicerofosfolípidos**', 'Saponificable', 'Contienen ácidos grasos'],
                ['**Esteroides**', 'Insaponificable', 'NO contienen ácidos grasos'],
              ],
            },
          ],
        },
      ],
    },
  ],

  // ==========================================================================
  // EXAMEN FINAL — banco de preguntas de la Unidad 1
  // ==========================================================================
  exam: [
    {
      id: 'u1-q1',
      type: 'mc',
      question: '¿Cuáles son los SEIS bioelementos primarios?',
      options: [
        'C, H, O, N, P, S',
        'C, H, O, Na, Cl, K',
        'Fe, Cu, Zn, I, F, Mn',
        'C, O, Ca, Mg, Na, K',
      ],
      answer: 0,
      explanation: 'Los bioelementos primarios son carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre (C, H, O, N, P, S).',
    },
    {
      id: 'u1-q2',
      type: 'mc',
      question: '¿Cuál es el criterio para clasificar los bioelementos?',
      options: [
        'Su masa atómica',
        'Su abundancia en la materia viva',
        'Su color',
        'Su número de enlaces',
      ],
      answer: 1,
      explanation: 'Los bioelementos se clasifican según lo abundantes que sean en la materia viva (primarios, secundarios, oligoelementos).',
    },
    {
      id: 'u1-q3',
      type: 'tf',
      question: 'Como los oligoelementos se necesitan en cantidades mínimas, se puede prescindir de ellos sin consecuencias.',
      answer: false,
      explanation: 'Falso. Aunque se necesiten en cantidad mínima, los oligoelementos esenciales son imprescindibles; su falta provoca enfermedades.',
    },
    {
      id: 'u1-q4',
      type: 'mc',
      question: '¿Por qué el carbono puede formar el esqueleto de las biomoléculas orgánicas?',
      options: [
        'Porque es muy abundante',
        'Porque puede hacer 4 enlaces covalentes y formar cadenas largas',
        'Porque es polar',
        'Porque se disuelve en agua',
      ],
      answer: 1,
      explanation: 'El carbono tiene 4 electrones en su última capa y hace 4 enlaces covalentes, lo que le permite formar cadenas lineales y ramificadas.',
    },
    {
      id: 'u1-q5',
      type: 'mc',
      question: 'El agua, las sales minerales y los gases (O₂, CO₂) son biomoléculas:',
      options: ['Orgánicas', 'Inorgánicas', 'Exclusivas de los seres vivos', 'Con esqueleto de carbono'],
      answer: 1,
      explanation: 'Son biomoléculas inorgánicas: no son exclusivas de los seres vivos y no tienen esqueleto de carbono.',
    },
    {
      id: 'u1-q6',
      type: 'mc',
      question: 'La propiedad del agua de la que se derivan casi todas las demás es:',
      options: [
        'Su color',
        'Su carácter polar (es un dipolo)',
        'Su temperatura',
        'Su sabor',
      ],
      answer: 1,
      explanation: 'El carácter polar (dipolo) del agua es el origen de los puentes de hidrógeno y de casi todas sus propiedades.',
    },
    {
      id: 'u1-q7',
      type: 'tf',
      question: 'En la molécula de agua, el oxígeno es más electronegativo que el hidrógeno, por lo que queda con carga parcial negativa.',
      answer: true,
      explanation: 'Verdadero. El oxígeno atrae más los electrones, quedando con carga δ- y los hidrógenos con carga δ+. Eso hace al agua un dipolo.',
    },
    {
      id: 'u1-q8',
      type: 'mc',
      question: 'La función termorreguladora del agua se relaciona con:',
      options: [
        'Su carácter polar',
        'Su elevado calor específico y de vaporización (puentes de hidrógeno)',
        'Su fuerza de adhesión',
        'Su poca reactividad',
      ],
      answer: 1,
      explanation: 'Hay que romper muchos puentes de hidrógeno para calentar o evaporar el agua, por eso absorbe mucho calor y regula la temperatura.',
    },
    {
      id: 'u1-q9',
      type: 'mc',
      question: 'Una membrana semipermeable deja pasar...',
      options: [
        'El soluto pero no el disolvente',
        'El disolvente (agua) pero no el soluto (sales)',
        'Todo',
        'Nada',
      ],
      answer: 1,
      explanation: 'La membrana semipermeable deja pasar el disolvente (agua) pero no el soluto. Por eso lo que se mueve en la ósmosis es el agua.',
    },
    {
      id: 'u1-q10',
      type: 'tf',
      question: 'En la ósmosis, el agua pasa de la solución hipertónica (más concentrada) a la hipotónica (más diluida).',
      answer: false,
      explanation: 'Falso. Es al revés: el agua pasa de la hipotónica (más diluida) a la hipertónica (más concentrada), para igualar las concentraciones.',
    },
    {
      id: 'u1-q11',
      type: 'mc',
      question: 'Si pones una célula en un medio HIPERTÓNICO (más salado que su interior), ¿qué le pasa?',
      options: [
        'Se hincha porque entra agua',
        'Se arruga porque sale agua',
        'No le pasa nada',
        'Estalla',
      ],
      answer: 1,
      explanation: 'En un medio hipertónico el agua sale de la célula hacia el medio más concentrado, y la célula se arruga (se deshidrata).',
    },
    {
      id: 'u1-q12',
      type: 'mc',
      question: '¿Por qué el O₂ y el CO₂ son gases a temperatura ambiente?',
      options: [
        'Porque son polares y se atraen',
        'Porque son apolares y apenas se atraen entre sí',
        'Porque son muy pesados',
        'Porque tienen carbono',
      ],
      answer: 1,
      explanation: 'Son moléculas apolares: casi no se atraen entre ellas, así que se separan y forman un gas.',
    },
    {
      id: 'u1-q13',
      type: 'mc',
      question: 'Los monosacáridos son solubles en agua, pero los polisacáridos no. ¿Por qué?',
      options: [
        'Porque los polisacáridos son apolares',
        'Por el gran tamaño de los polisacáridos',
        'Porque los polisacáridos no tienen carbono',
        'Porque los monosacáridos son inorgánicos',
      ],
      answer: 1,
      explanation: 'Los polisacáridos son polares, pero su enorme tamaño impide que se disuelvan en agua.',
    },
    {
      id: 'u1-q14',
      type: 'mc',
      question: 'El enlace que une dos monosacáridos se llama:',
      options: ['Enlace peptídico', 'Enlace O-glucosídico', 'Puente de hidrógeno', 'Enlace éster'],
      answer: 1,
      explanation: 'Los monosacáridos se unen mediante enlaces O-glucosídicos (liberando una molécula de agua).',
    },
    {
      id: 'u1-q15',
      type: 'mc',
      question: 'El polisacárido de reserva energética en los ANIMALES es:',
      options: ['Almidón', 'Celulosa', 'Glucógeno', 'Quitina'],
      answer: 2,
      explanation: 'El glucógeno es la reserva animal (hígado y músculo). El almidón es la reserva vegetal.',
    },
    {
      id: 'u1-q16',
      type: 'mc',
      question: 'Un lípido SAPONIFICABLE es aquel que:',
      options: [
        'No contiene ácidos grasos',
        'Contiene ácidos grasos (puede hacer jabón)',
        'Es soluble en agua',
        'Tiene función hormonal',
      ],
      answer: 1,
      explanation: 'Saponificable = contiene ácidos grasos y puede hacer la saponificación (fabricar jabón). Ej.: triacilglicéridos, fosfolípidos.',
    },
    {
      id: 'u1-q17',
      type: 'tf',
      question: 'Los fosfolípidos son moléculas anfipáticas: tienen una zona polar (cabeza) y una apolar (colas), y forman la bicapa de las membranas.',
      answer: true,
      explanation: 'Verdadero. Su carácter anfipático hace que se ordenen en bicapa, la base de las membranas celulares.',
    },
    {
      id: 'u1-q18',
      type: 'mc',
      question: '¿Qué función tiene el colesterol en las membranas de las células animales?',
      options: [
        'Función energética',
        'Mantener la fluidez de la membrana frente a los cambios de temperatura',
        'Transportar oxígeno',
        'Digerir las grasas',
      ],
      answer: 1,
      explanation: 'El colesterol es estructural: mantiene la fluidez de la membrana frente a las fluctuaciones de temperatura.',
    },
    {
      id: 'u1-q19',
      type: 'mc',
      question: 'Las vitaminas A, D, E y K son:',
      options: [
        'Hidrosolubles (se disuelven en agua)',
        'Liposolubles (se disuelven en grasas)',
        'Glúcidos',
        'Sales minerales',
      ],
      answer: 1,
      explanation: 'A, D, E y K son liposolubles (estructura lipídica). Las hidrosolubles son la C y las del grupo B.',
    },
    {
      id: 'u1-q20',
      type: 'mc',
      question: 'El escorbuto es una enfermedad carencial causada por la falta de:',
      options: ['Vitamina A', 'Vitamina C', 'Vitamina D', 'Vitamina K'],
      answer: 1,
      explanation: 'El escorbuto se debe a la falta de vitamina C (encías sangrantes, infecciones, trastornos digestivos).',
    },
    {
      id: 'u1-q21',
      type: 'order',
      question: 'Ordena los glúcidos de menor a mayor número de unidades (de más simple a más complejo):',
      // items barajados; answer apunta al orden correcto de ESTOS items.
      // items: [Polisacárido(0), Monosacárido(1), Disacárido(2)]
      // orden correcto: Monosacárido→Disacárido→Polisacárido = [1,2,0]
      items: ['Polisacárido', 'Monosacárido', 'Disacárido'],
      answer: [1, 2, 0],
      explanation: 'Monosacárido (1 unidad) → disacárido (2 unidades) → polisacárido (muchas unidades).',
    },
    {
      id: 'u1-q22',
      type: 'tf',
      question: 'Tomar muchas más vitaminas de las necesarias siempre es bueno y nunca tiene efectos negativos.',
      answer: false,
      explanation: 'Falso. El exceso puede ser perjudicial; las liposolubles se acumulan. No es bueno tomar más de la cuenta.',
    },
  ],
}
