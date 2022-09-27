<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 2
      h1 Técnicas para escribir
    .row.justify-content-center
      .col-lg-10.bg-color10.p-4
        .row.align-items-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img1.png')
          .col-lg
            p.mb-0 La escritura, y especialmente la creativa, representa un reto para los escritores, desde una novela hasta un anuncio de promoción exigen calidad y contenidos universales, para llegar a muchas personas de acuerdo con la intencionalidad.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Escritura correcta
    .row.align-items-center.mb-4
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img2.png')
      .col-lg
        p Seguir las etapas de la estructuración del escrito no asegura que quede perfecto, cada una de las fases propuestas tiene consideraciones técnicas o metodológicas que las hacen específicas en unos factores, como el de corrección, que es complejo y de alto nivel de conocimiento de temas poco conocidos.
        .row.mb-4
          .col-12.bg-color11
            .p-4
              h4.txt-c1 Importante...
              p La corrección de textos, de fondo y forma, presenta varias aristas de comprensión, como: la existencia de tipos de corrección:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | Ortográfica,
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | Ortotipográfica,
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | Léxico - semántica,
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | De estilo y reescritura.
              p.mb-0 Con una característica, y es que entre todas se entrelazan, así cada una se ocupe de una tarea específica y cada una con un nivel de especialización.
        p Es importante tener en cuenta algunos aspectos sobre el alcance de la corrección, si bien es cierto que en todo escrito se #[b.txt-c1 esperan cero errores], se recuerda que, en los textos con intención costumbrista o regional, existe una limitación y es que el idiolecto o lenguaje autóctono tiene una función que, para este caso, es mostrar temas culturales y no hay corrección de ninguna clase.
    p.mb-5 Por lo tanto, quien asuma el papel de corrector debe discriminar y tomar decisiones sobre el tipo de función lingüística a corregir, establecer claramente la frontera, ser prudente y equilibrado en la tarea, por lo que debe tener en cuenta todos y cada uno de los elementos que a continuación se describen:
    .row.mb-4
      .col-auto.bg-color12
        .p-4
          h4.mb-0 Elementos para una escritura correcta
    .tarjeta.tarjeta--amarilla2.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img2.svg')
        .row(titulo="2")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img3.svg')
        .row(titulo="3")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img4.svg')
        .row(titulo="4")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img5.svg')
        .row(titulo="5")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img6.svg')
        .row(titulo="6")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img7.svg')
        .row(titulo="7")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img8.svg')
        .row(titulo="8")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img9.svg')
        .row(titulo="9")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img10.svg')
        .row(titulo="10")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img11.svg')
        .row(titulo="11")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img12.svg')
        .row(titulo="12")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img13.svg')
        .row(titulo="13")
          .col-12
            figure
              img(src='@/assets/curso/tema2/img14.svg')
    p.mb-5 En la construcción creativa de escritos, también es importante tener como referente los errores que generalmente ocurren y que se deben corregir, los cuales se mencionan en el siguiente recurso, según lo expresado por Díaz-Arnáez (2006):
    .row
      .col-12.bg-color13
        .p-1.p-lg-5
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img16.svg')
            .tarjeta.color-acento-contenido.p-3(x="28%" y="18%" numero="+")
              .h5.mb-2 Coherencia
              p.mb-0 Selección de la información (ideas claras y relevantes).
              p.mb-0 Progresión de la información (orden lógico, tema/rema).
              p.mb-0 Estructura del texto (partes, introducción, conclusión).
              p.mb-0 Estructura del párrafo (extensión, unidad).
            .tarjeta.color-acento-contenido.p-3(x="66%" y="2.5%" numero="+")
              .h5.mb-2 Cohesión
              p.mb-0 Puntuación, nexos (marcadores textuales, conjunciones).
              p.mb-0 Anáforas (pronombres, sinónimos, hiperónimos, elisiones).
              p.mb-0 Otros (verbos, determinantes, orden de los elementos en la frase).
            .tarjeta.color-acento-contenido.p-3(x="83.5%" y="31%" numero="+")
              .h5.mb-2 Normativa
              p.mb-0 Ortografía.
              p.mb-0 Morfología y sintaxis.
              p.mb-0 Léxico (pasivo o activo; cultismo, estándar, coloquialismo o vulgarismo, según el registro lingüístico empleado).
              p.mb-0 Dialectalismo (si pertenece al habla propia de una región).
            .tarjeta.color-acento-contenido.p-3(x="12%" y="43%" numero="+")
              .h5.mb-2 Adecuación
              p.mb-0 Selección de la variedad (dialectal o estándar).
              p.mb-0 Selección del registro (formal/informal, objetivo/subjetivo).
              p.mb-0 Fórmulas y giros estilísticos propios de cada comunicación.
            .tarjeta.color-acento-contenido.p-3(x="47%" y="75.5%" numero="+")
              .h5.mb-2 Otros
              p.mb-0 Disposición del texto en la hoja (cabecera, márgenes).
              p.mb-0 Tipografía (negrita, cursiva, subrayado).
              p.mb-0 Estilística (complejidad sintáctica, repetición léxica).
              p.mb-0 Variación (riqueza de léxico, complejidad sintáctica).
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Las técnicas de la escritura
    .row.align-items-center.mb-4
      .col-lg.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-color11
            .p-4
              p.mb-0 La técnica escrita se basa en la redacción de las ideas, el cumplimiento de reglas y normas del lenguaje para la calidad de los documentos y consecución del objetivo comunicativo.
        p.mb-0 Las habilidades para la redacción en el campo de lo técnico o lo estético tienen como fin que el lector lo comprenda y, en el caso de los lectores de campo profesional o del trabajo, minimicen la probabilidad de riesgos y queden claros los resultados esperados.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img3.png')
    p.mb-5 Para iniciar la redacción, en general, se consideran unos pasos sencillos en los momentos de la construcción del documento, obsérvelos:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-primario(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h4 La pre - redacción
              p Ayuda a la delimitación del tema, a identificar las herramientas precisas para trabajarlo y para redactarlo, de acuerdo con las necesidades y objetivos.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/img4.png')
          .row.align-items-center.txt-f1
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.png')
            .col-lg
              h4 La redacción
              p Es difícil para quien no está acostumbrado a escribir; para superarlo, se usan técnicas de desbloqueo, como, por ejemplo:
              ul.lista-ul
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | Esquematizar la oración temática,
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | Definir las oraciones principales y secundarias junto con algunas para su desarrollo,
                li 
                  i.fas.fa-location-arrow(style="color: #FF5900")
                  | Identificar las conclusiones o recomendaciones, y  Definir las frases de cierre.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h4 El desarrollo o proceso de la escritura
              p Ayuda a la estructuración de un esquema para conectar entre sí todas estas ideas.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/img6.png')
          .row.align-items-center.txt-f1
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img7.png')
            .col-lg
              h4 La revisión
              p Este proceso de corrección, como se estudió anteriormente, ayuda a que los documentos sean coherentes,  con un lenguaje cohesivo y  con excelente calidad en su contenido.
    p.mb-5 Es importante hablar de las técnicas a la hora de escribir, ya que conocerlas y saber dónde, cuándo y cómo aplicarlas es clave para la construcción de documentos en general. En el siguiente cuadro, podrá comparar algunas que se van a mencionar:
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Escritura de documentos técnicos
            th Escritura de documentos creativos o estéticos
        tbody
          tr
            td En la escritura técnica, los documentos son: informes, procesos, procedimientos y manuales.
            td En la escritura estética, están las narraciones, cuentos, descripciones, guiones, fábulas y sistematización de experiencias, entre otros.
          tr
            td La redacción técnica es diferente según sus reglas: en cuanto a la población objetivo, es un error considerar que todos tienen conocimientos previos y, al presentar los documentos, se obvia información que es importante, lo que no permite la compresión y cumplimiento del objetivo; la regla dice que siempre debe haber un contexto de soporte.<br><br>Otra regla importante es usar imágenes e iconos acompañados de palabras o frases que se integren a la información específica.
            td En cuanto a la redacción de textos estéticos o creativos, existen normas específicas, las cuales se deben analizar para cuando se trabajen los guiones de recorridos de la guianza turística, por ejemplo.<br><br>En las historias, como las novelas, existe un recurso llamado elipsis, que consiste en mostrar imágenes o descripciones de acontecimientos sin un orden, omitiendo detalles, pero permitiendo que la mente del receptor o escucha llene esos huecos de información con datos creados.<br><br>Esta técnica permite, en poco tiempo, contar toda una vida, sin caer en el aburrimiento.
          tr
            td El uso del lenguaje debe ser claro, directo y neutral en el documento, lo que lo hace accesible.<br><br>Se recomienda revisarlo con otros compañeros para verificar la veracidad de la información.<br><br>Se debe presentar la información organizada y con una estructura dada por la empresa, lo que le da identidad.<br><br>Siempre se deben usar normas de presentación de trabajos, con tabla de contenidos y bibliografía o enunciación de fuentes utilizadas.<br><br>Dada la importancia de los documentos técnicos, es relevante revisarlos, hacer las correcciones y confirmar que los datos son correctos.
            td
    p Otra técnica corresponde a la escritura de diálogos entre personajes, una conversación o monólogo como parte de una narración, por lo que la trama que se le dé enriquece con información a los personajes y ayuda a avanzar en la historia a través de ello.  
    p.mb-5 Aquí, es importante tener presente que el diálogo es ágil, presenta la evolución de los personajes, y por su lenguaje y forma de hablar, se demuestra la personalidad o sus estados de ánimo, así como las relaciones con otros personajes. Observe el siguiente video, que explica un poco al respecto:
    .row.mb-4
      .col-auto.bg-color12
        .p-4
          h4.mb-0 Técnica de diálogo
    .tarjeta.tarjeta--amarilla2.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1")
          .col-12
            .p-2.p-lg-4
              p.mb-4 En un diálogo interesante, los personajes cambian de ánimo, lo que muestra evolución en la historia;  el estilo del diálogo dependerá de si es narración, teatro, guion de cine o guion de recorrido, escrito en estilo directo o de modo literal, o en estilo indirecto, el cual se caracteriza por usar conjunciones como:  “que”...
              .row.justify-content-center
                .col-lg-8
                  figure
                    img(src='@/assets/curso/tema2/img17.svg')
        .row(titulo="2")
          .col-12
            .p-2.p-lg-4
              .row
                .col-lg
                  p Al escribir el diálogo, se inicia después de punto y aparte, se da espacio de sangría y se usa una  raya  larga (—), a continuación se colocan los comentarios del narrador después de otra raya.  
                  p Para obtener la raya, ojo, no es la normal,  se puede usar:  la que encuentra en la pestaña insertar + Símbolo de Word, o escribirla usando el teclado numérico Alt + 0151.
                  p Un diálogo escrito técnicamente debe ser natural, creíble y de interés para el lector, lo que se logra a través del conocimiento de cada personaje, pues dos personajes nunca hablan o se expresan de igual forma; la carencia de identidad del personaje debe evitarse.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/img18.svg')
        .row(titulo="3")
          .col-12
            .p-2.p-lg-4
              .row
                .col-lg
                  p El diálogo nunca debe llevar frases de relleno o sin función, esto aburre al lector o público; debe  ser escrito con lenguaje de avance permanente en la historia, por lo que a través de él se influye en el personaje y su situación, utilizando estrategias escritas, como mentiras o diferentes situaciones, que varíen la percepción de este y que lo llevan a tomar decisiones o animan a hacer algo, entre otras acciones.
                  p Es muy importante no saturar el diálogo; la información no debe ser excesiva, y no escribir de más, el ambiente, el lugar, la hora del contexto y de la conversación son importantes, junto con el equilibrio entre la voz del narrador  y el uso de los mismos.
                  p Para corregir y mejorar el escrito del diálogo, se debe leer en voz alta y ajustar. Por otro lado, para afinar la escritura de diálogos, haga ejercicios como entrevistas a personajes famosos, lo que le permite practicar las preguntas y respuestas.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/img19.svg')
        .row(titulo="4")
          .col-12
            .p-2.p-lg-4
              .row
                .col-lg
                  p Para que los diálogos sean reales, se debe recordar que la gente no siempre dice lo que piensa; por diferentes motivos, los personajes ocultan sus sentimientos o deseos. Al construir el personaje, tenga en cuenta definir a qué se dedica y qué le gusta o apasiona, lo que influye en su forma de hablar y actuar.
                  p Igualmente,  se debe tener en cuenta que el silencio también comunica, así que no siempre será necesario estar creando diálogos, también pueden reemplazarse por actitudes, emociones, o gestos, como:  bajar la cabeza, mirar al horizonte, estar triste, mostrar ira,  entre otras opciones.
                  p Los diálogos no siempre tienen que ser reales, de hecho, muchas obras importantes cuentan con conversaciones casi inverosímiles, breves, con palabras exactas, precisas y con posibilidad de usar técnicas como  alegorías, repeticiones y otras que los hacen interesantes.
                  p También se pueden utilizar técnicas como elegir una característica del personaje y mostrarla de manera exagerada en todas las formas, un buen ejercicio para dar esa identidad mencionada.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/img20.svg')
        .row(titulo="5")
          .col-12
            .p-2.p-lg-4
              p La forma de hablar del personaje es importante, ya que en un momento puede ser el más optimista y en otro, estar negativo y pesado, sin que se exagere, esta es una forma interesante de exponer la identidad de los personajes.
              p.mb-4 Muy importante: evite utilizar palabras rebuscadas, inusuales, excesivamente literarias; busque que los personajes se expresen de igual forma, lo cual se soluciona caracterizando a cada personaje, es decir, dándole un lugar de nacimiento, nivel educativo, personalidad, trabajo o uso del tiempo y experiencias relevantes de vida.
              .row.justify-content-center
                .col-lg-8
                  figure
                    img(src='@/assets/curso/tema2/img21.svg')
        .row(titulo="6")
          .col-12
            .p-2.p-lg-4
              p Siempre alejarse de diálogos inútiles o demasiado obvios, estos aburren; usar indebidamente las rayas del guion o demasiados monólogos y frases muy largas, ya que estas también le quitan interés al escrito. En adición, carecer de gestos y exagerar las manifestaciones de ánimo muestran mala construcción de los contenidos.
              p.mb-5 Por otro lado, no dar información nueva en frases, pues el aporte de información permanente y diferente es clave para mantener el interés.  Para un resultado más ágil y natural en los diálogos, se pueden integrar tres elementos:  diálogos, acciones y descripciones.
              .row.justify-content-center
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img24.svg')
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img22.svg')
        .row(titulo="7")
          .col-12
            .p-2.p-lg-4
              .row
                .col-lg
                  p Se reitera la importancia de recordar que, aunque los personajes tienen una identidad, también se pueden integrar sentimientos, emociones o elementos temporales que los influyen, como, por ejemplo: si interactúan con un jefe, o están estresados, tristes o enojados, si tienen que decirle algo a otra persona que sea difícil, todo esto lo puede mostrar un personaje en cualquier momento.
                  p Por otro lado, estos personajes enfrentan situaciones y tienen motivaciones porque han actuado con maldad o asumen situaciones indebidas.  Cada uno tiene una identidad no estereotipada, única, y debe dársele  una personalidad apasionada, combativa o antagónica, según sea el caso.
                  p Por último, es importante recordar que, en la construcción del guion, es vital tener claridad  sobre cuáles son los personajes, cómo se van a caracterizar, qué los diferencia, cómo son los diálogos, cómo mantener a los lectores y oyentes interesados en el tema… Eso es escribir creativamente y es fundamental cuando se usa en la construcción de guiones para el sector turístico.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/img23.svg')
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema2/img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como parte de su aprendizaje, le invitamos a ver el video "Cómo escribir diálogos en literatura" , que se encuentra en la sección de materiales complementarios.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=utYWBsD7pps" target="_blank")
                    span Ver vídeo 
                    i.fas.fa-video

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
