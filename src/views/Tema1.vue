<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 1
      h1 Producción textual en la escritura creativa
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El escrito o texto es la estructura o cuerpo con enunciados organizados gramaticalmente y configurados con signos lingüísticos según las reglas de un idioma; el resultado se considera la máxima expresión de la comunicación; es decir, es una competencia lingüística del hablante, dado que esta requiere alto nivel de desarrollo de aplicación de normas escriturales y elementos conceptuales. El texto es para ser leído o escuchado, comprendido y comentado, de tal manera que existe una relación entre las acciones de escribir y leer.
    Separador
    .row.bg-color1
      .col-12.p-5
        #t_1_1
        .titulo-segundo.color-acento-contenido
          h2 1.1 Lectura: tipos, niveles, identificación de secuencias
        .row.bg-color2.shadow
          .col-12.p-5
            .row.align-items-center.bg-color3.mb-5(data-aos="fade-down")
              .col-lg.p-4.mb-4.mb-lg-0
                p.mb-0 La lectura es un proceso que relaciona varios aspectos intelectivos y funciones orgánicas de los ojos y cerebro. Se trata de tener la intención o interés de observar signos, símbolos o códigos expresados de forma escrita, en un orden, los cuales llegan al cerebro, donde son decodificados, interpretados y comprendidos, dejando un mensaje a quien lo lee, ya sea mental u oralmente.
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img2.png' style="width:350px").m-auto
            p.mb-5 Por otro lado, de la calidad y técnica de comprensión, surgen habilidades, las cuales son:
            .row.justify-content-center.mb-5(data-aos="fade-left")
              .col-lg-8
                figure
                  img(src='@/assets/curso/tema1/img4.svg')
            .row.align-items-center.mb-4
              .col-auto.pe-0
                figure
                  img(src='@/assets/curso/tema1/img3.svg')
              .col
                h4.mb-0 #[b.txt-l1 Tipos]
            p.mb-5 Dado que la lectura es una actividad exclusiva de los seres humanos y que esta se considera importante porque permite interpretar un texto, encontrarle un sentido y enriquecer nuestro intelecto, todo a través de la asimilación de la información desde diferentes perspectivas, se hace necesario identificar cuáles tipos de lectura hay y cómo pueden influir en el proceso del lector:
            TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
              .p-2.p-lg-5.py-md-5(titulo="Lectura literal" :icono="require('@/assets/curso/tema1/img5.svg')")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h4 Lectura literal
                    p Se basa en la identificación de ideas básicas...
                    p La lectura literal se basa en la identificación de las ideas, ya sea la principal o secundarias, o de los detalles, como: nombres, tiempos, hechos, secuencias, relaciones causa-efecto, razones, relaciones, entre otras.
                    p Consiste en que el lector decodifica las palabras e ideas explícitas del escritor, y que, en un momento dado, las utiliza para crear textos propios; caracterizada porque el lector y el escritor tienen lenguajes comunes o porque el lector tiene algún interés en conocer las ideas del escritor.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img6.svg' style="width:350px").m-auto
              .p-2.p-lg-5.py-md-5(titulo="Lectura inferencial" :icono="require('@/assets/curso/tema1/img5.svg')")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h4 Lectura inferencial
                    p Se usa mucho en la investigación...
                    p La lectura implícita se encuentra en la lectura inferencial, que consiste en que el lector:
                    ul.lista-ul
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Realiza abstracción, es decir, cualifica los objetos y los clasifica por características, luego...
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Propone significados del texto, por medio de ideas, frases, proposiciones, juicios y rasgos;  para   llegar a...
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | La construcción de una conclusión coherente, clara y concisa sobre el tema.
                    p Es muy usada en investigación para citar referencias de autores y construir marcos conceptuales, entre otros.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img7.svg' style="width:350px").m-auto
              .p-2.p-lg-5.py-md-5(titulo="Lectura crítica" :icono="require('@/assets/curso/tema1/img5.svg')")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h4 Lectura crítica
                    p El lector crítico va más allá de comprender el texto, lo investiga, lo analiza... duda de él.
                    p Para trascender la comprensión de lectura y adentrarse en la comparación, la contrastación de ideas y contraposición, se hace la lectura crítica, que además posibilita la duda del lector en lo que lee y permite que se generen opiniones propias que sirven para leer con profundidad.  
                    p Ser un lector crítico implica hacer lectura comprensiva, dedicando tiempo al:
                    ul.lista-ul
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Análisis.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Reconocer contextos temporales.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Conocer contextos históricos o el de interés.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        |Saber usar herramientas que le permitan asimilar la información, como: subrayar y tomar notas.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Reflexionar sobre el autor y, por qué no,  contrastar sus opiniones con otros autores.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img8.svg' style="width:350px").m-auto
              .p-2.p-lg-5.py-md-5(titulo="Lectura mecánica" :icono="require('@/assets/curso/tema1/img5.svg')")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h4 Lectura mecánica
                    p Leer, sin profundizar...
                    p Por otro lado, la  lectura realizada en voz alta, es decir, pasar del grafema al fonema, de forma simple y rápida, se denomina lectura mecánica;  en ella, hay una identificación previa de términos, sin profundizar en ellos, puede compararse con la lectura de salteo.
                    p Pero, ¿cómo mejorar este tipo de lectura?... Es la pregunta que se debe responder:
                    p Si bien es cierto que el desarrollo de una competencia lectora que fortalezca la comprensión es un objetivo de los planes lectores a lo largo de la vida, también es verdad que existen técnicas que, a través de lectura  permanente y pausada, el uso del diccionario, el  análisis de la estructura parrafal y el desarrollo de juegos alrededor de la temática llevan al desarrollo de dichas habilidades, por lo que se hace necesario: leer… leer… y leer, para:
                    ul.lista-ul
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Adquirir fluidez.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Entender cómo es la cohesión de un escrito.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF5900")
                        | Desarrollar la memoria funcional y la atención, para, finalmente, comprender.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img9.svg' style="width:350px").m-auto
            .row.align-items-center.mb-4
              .col-auto.pe-0
                figure
                  img(src='@/assets/curso/tema1/img3.svg')
              .col
                h4.mb-0 #[b.txt-l1 Niveles]
            p.mb-5(data-aos="fade-right") Los niveles se relacionan con el pensamiento que se desarrolla junto con la lectura, y están enumerados de acuerdo con la complejidad y el proceso asumido desde la perspectiva del lector y el cómo usa y para qué usa lo que lee, lo cual podrá conocer en el siguiente recurso:
            figure.mb-5(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img10.svg')
            .row.align-items-center.mb-4
              .col-auto.pe-0
                figure
                  img(src='@/assets/curso/tema1/img3.svg')
              .col
                h4.mb-0 #[b.txt-l1 Identificación de secuencias]
            .row.align-items-center.mb-5
              .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
                p El prototipo de proposiciones, la organización según tipo de textos y los modos de encadenamiento están relacionados directamente con los lenguajes para la narración, descripción, exposición, explicación, argumentación o instrucción, son los elementos que conforman una secuencia.
                .cajon.color-primario.p-4
                  h5.mb-0 Importante...
                  p.mb-0 La tarea del lector es identificar la estructura, para lo cual necesita habilidades cognitivas y capacidad de jerarquizar información y caracterizar el texto según el tipo; en cuanto al escritor, tiene como posibilidad la estructuración de cada texto con la técnica escritural del nivel.
              .col-lg-auto(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/tema1/img3.png' style="width: 350px").m-auto
            p Para la identificación de la secuencia, además de leer el texto, se debe hacer la identificación de los pasos que este tiene, por ejemplo: determinar las causas y consecuencias de los hechos, el orden de los acontecimientos y hacer la verificación de que los sucesos estén dispuestos y acordes con el tipo de texto. 
            p En adición, se pueden presentar varias secuencias en un mismo texto; un ejemplo es la biografía, en la cual se pueden encontrar: narraciones, descripciones y diálogos explicativos.
        Separador
        #t_1_2
        .titulo-segundo.color-acento-contenido
          h2 1.2 Comprensión textual y literaria
        p.mb-5 Fruto de la interacción con el texto, el lector, después de elaborar el análisis de ideas e interrelacionarlas con otros componentes, emite una #[b.txt-c1 conclusión desde el análisis, que puede ser textual o con gráfica]. Lograrlo, requiere del uso de las siguientes estrategias:
        .row.justify-content-center(data-aos="fade-right")
          .col-md-10.col-lg-5.mb-4.mb-lg-0
            .row.align-items-center
              .col-auto
                .fig-p1
                  figure
                    img(src='@/assets/curso/tema1/img4.png', style="width: 150px")
              .col-6.col-md-5.bg-color29.p-4
                .row.align-items-center
                  .col-12
                    h4.text-center.my-3 De lectura
          .col-md-10.col-lg-5
            .row.align-items-center
              .col-auto
                .fig-p1
                  figure
                    img(src='@/assets/curso/tema1/img5.png', style="width: 150px")
              .col-6.col-md-5.bg-color30.p-4
                .row.align-items-center
                  .col-12
                    h4.text-center.my-3 De escritura
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.align-items-center.bg-color4
          .col-lg-auto
            figure.mt-4.mt-lg-0
              img(src='@/assets/curso/tema1/img6.png' style="width: 350px").m-auto
          .col-lg.p-4
            h5.mb-0 Importante...
            p.mb-0 Estas herramientas ayudan a encontrar el significado de lo que lee, como también las formas de estructurar el texto y cómo puede interactuar con él.
    p.mb-5 Por otro lado, es necesario revisar los procesos mentales que se necesitan para la comprensión textual y su origen, los cuales son:
    .row.justify-content-center.mb-6
      .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla
            .p-4.h-100
              .row.align-items-center.h-100
                .col-12
                  p.mb-0 Los conocimientos previos.
      .col-md-8.col-lg-4(data-aos="fade-down")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla
            .p-4.h-100
              .row.align-items-center.h-100
                .col
                  p.mb-0 Los datos que el mismo texto entrega para la comprensión.
    .row.bg-color5
      .col-12.p-5
        p.mb-5 Ahora bien, es indispensable hacer un proceso de preparación para realizar un buen proceso de lectura que le sirva para conectarse con el autor; por medio del siguiente contenido, conocerá dicho proceso:
        .row.bg-color2.shadow.mb-5
          .col-12.p-4.p-lg-5
            p.mb-5 Antes de iniciar la lectura, es de vital importancia tener presentes algunos elementos que le permitirán definir con claridad el objetivo lector que tiene, por lo que debe realizar con anterioridad los siguientes pasos:
            PasosA.color-primario.mb-5(tipo="n")(data-aos="fade-right")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Activación de conocimientos previos.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Determinar la finalidad de la lectura.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Definir el tipo de discurso.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Planificar el proceso lector.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img7.png' style="width: 350px").m-auto
              .row.align-items-center.txt-f1
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img8.png' style="width: 350px").m-auto
                .col-lg
                  p En adición, antes de iniciar la lectura, debe definir qué es lo que va a buscar al realizar la lectura:
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Los textos narrativos y su estructura secuencial: ambiente, evento inicial, respuesta interna, acción, consecuencia y reacción, entre otros.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Los subtipos, en función de la intención del discurso, los cuales pueden ser:
                    li
                      ul
                        li 
                          i.fas.fa-circle(style="color: #FF5900")
                          | Datos, con la intención de informar.
                        li 
                          i.fas.fa-circle(style="color: #FF5900")
                          | Fábulas, para persuadir.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Desarrollar capacidades para detectar el tipo de texto a leer y qué tipo de información se espera.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p Cuando esté realizando la lectura, es importante tener presentes los siguientes elementos:
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Reconocer las distintas estructuras textuales.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Construir una representación mental del texto escrito.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Hacer seguimiento al proceso lector.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img9.png' style="width: 350px").m-auto
              .row.align-items-center.txt-f1
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img10.png' style="width: 350px").m-auto
                .col-lg
                  p Por otro lado, es vital tener en cuenta:
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Identificar palabras que necesitan diccionario porque no conoce el significado o porque requiere saber sinónimos o antónimos, etc.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Releer, parafrasear y resumir entidades textuales.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Usar ayudas visuales o representaciones gráficas, que le permitan:
                    li
                      ol.ms-4
                        li
                          span.text-bold a. 
                          | Sintetizar información en la memoria operativa,
                        li
                          span.text-bold b. 
                          | Establecer relaciones entre ideas y conceptos,
                        li
                          span.text-bold c. 
                          | Mejorar la calidad de la memoria explícita,
                        li
                          span.text-bold d. 
                          | Organizar la información de forma clara y sencilla.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p Al finalizar la lectura, es de vital importancia realizar las siguientes actividades, con el fin de organizar la información:
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Controlar nivel de comprensión alcanzado.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Corregir los errores de comprensión.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Hacer representación  global y propia del texto escrito.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Ejercitar procesos de transferencia y ampliar el conocimiento.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img11.png' style="width: 350px").m-auto
              .row.align-items-center.txt-f1
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img12.png' style="width: 350px").m-auto
                .col-lg
                  p En este punto de la lectura, también es importante tener presentes elementos que le facilitarán la comprensión del documento leído:
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Realizar la revisión del proceso lector: chequear las preguntas, inferencias y predicciones que  se realizaron antes de leer y durante la lectura, usando para ello toda la información del texto.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Verificar  el grado de satisfacción del propósito establecido antes del inicio de la lectura.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Valorar el nivel de comprensión que considera que ha alcanzado.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Revisar la construcción global de representación mental: finalidad expresiva.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Representar la información global textual en una o varias ilustraciones conectadas, como el uso de mapas conceptuales para organizar y conectar la información.
        p En adición a lo anterior, es necesario tener presente que existen otros elementos que también son importantes en el proceso de construcción de escritos creativos, ya que un buen escritor es también un muy buen lector; por lo anterior, se hace necesario revisar cuáles son las estrategias de comprensión lectora planteadas en el siguiente recurso de aprendizaje:
    .row.bg-color6(data-aos="fade-right")
      .p-5
        .col-12.d-none.d-lg-block
          figure.py-5
            img(src='@/assets/curso/tema1/img16.svg')
        .col-12.d-block.d-lg-none
          .row.justify-content-center
            .col-5.pb-4
              figure
                img(src='@/assets/curso/tema1/img21.svg')
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img22.svg')
    p Las estrategias son amplias y ricas en lectura, por lo que practicándolas con frecuencia no solo logrará mejorar la lectura, sino que el nivel de escritura y de construcción de contenidos le será mucho más fácil, ágil, mejorará el estilo y la calidad del documento.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Etapas en la producción de textos
    p.mb-5 Para la producción de textos escritos, es necesario tener claros algunos aspectos antes de iniciar el proceso de construcción del documento, ya que, de esta manera, tendrá ganado un alto porcentaje, debido a que ya sabe hacia dónde va y qué quiere expresar; estos elementos son:
    .row.align-items-center.bg-color7.mb-5(data-aos="fade-left")
      .col-lg.mb-4.mb-lg-0
        .p-4
          ul.lista-ul
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Hacer un ordenamiento de las ideas escribiendo con frases cortas, claras y concisas, que le permitan llegar a tocar el corazón del lector, esto es, escribir con intencionalidad y creatividad.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Escribir usando adjetivos, ya que estos le permiten describir las situaciones, lugares, personas, etc.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Revisar permanentemente; al realizar esta actividad, va depurando el contenido, de modo que, al final, logrará tener un escrito según las condiciones de calidad y estilo deseado.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Pensar para escribir, no para hablar, ya que es diferente, porque cuando usted habla se ayuda con los gestos a expresar pensamientos o sentimientos; sin embargo, cuando escribe, debe incluir cada uno de estos detalles, de modo que el lector quede impactado al ser tan vívido lo que está leyendo.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Tener presente la gramática, porque un texto que no tiene en cuenta los diferentes elementos gramaticales no aporta sentido al lector.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | No usar palabras rebuscadas o descontextualizadas, ya que debe tener en cuenta la población a la cual va dirigido el contenido, el nivel educativo y el manejo del idioma, entre otras cosas.
      .col-lg-auto
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/img13.png' style="width: 350px").m-auto
    p.mb-5 Cuando se hace la producción de un texto, se deben tener en cuenta algunas pautas, para que tenga una estructura clara, para darle coherencia, cohesión y sentido al documento; dichas pautas son:
    .row.align-items-center.bg-color8.mb-5(data-aos="fade-right")
      .col-lg-auto.mb-4.mb-lg-0
        figure.mt-4.mb-lt-0
          img(src='@/assets/curso/tema1/img14.png' style="width: 350px").m-auto
      .col-lg
        .p-4
          ul.lista-ul
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Planificar el texto, escribiendo la idea principal, algunas ideas secundarias claves y una posible conclusión, que le permitan tener un norte de lo que va a escribir.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Identificar el público objetivo. Esto es importante porque, dependiendo del tipo de población, debe ir escrito el texto.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Seleccionar el tema propicio. El tema debe llamar la atención, el título debe ser corto e interesante, debe tener relación con el contexto; para el caso de un guion turístico, esto es vital.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Definir las palabras claves a desarrollar, su uso define con claridad el objetivo del texto escrito y el tipo de impacto que se quiere hacer.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Leer previamente sobre el tema, porque, para escribir, lo primero que se debe hacer es leer, leer y leer, de modo que, cuando se siente a escribir, las palabras fluyan del interior de su mente, con la intencionalidad de llegar al oyente o al lector, según sea el caso.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Escribir y revisar el texto permanentemente, con el fin de ir depurando el contenido; esto permite ir cambiando y mejorando el texto según se requiera.
            li 
              i.fas.fa-location-arrow(style="color: #FF5900")
              | Completar lo que corresponde al estilo de escritura usado.
    p.mb-5 En adición, se hace necesario conocer las etapas de la escritura y comprender por qué estas son cíclicas y qué función cumple este ritmo (ciclo) en la construcción creativa de textos, lo que podrá aprender a continuación:
    .row.mb-5(data-aos="fade-right")
      .col-12.bg-color9
        .p-1.p-lg-5
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img20.svg')
            .tarjeta.color-acento-contenido.p-3(x="7%" y="12%" numero="+")
              .h5.mb-2 1. Planificación
              p Etapa inicial de la creación del texto, selección y organización de las ideas, así como recopilación de información.
            .tarjeta.color-acento-contenido.p-3(x="90%" y="12%" numero="+")
              .h5.mb-2 2. Textualización
              p Las ideas establecidas en la planificación se ponen en operación para cumplir con el objetivo de obtener textos cohesivos, coherentes y con sentido.  Se elige el tipo de estructura a utilizar y se definen las reglas gramaticales.
            .tarjeta.color-acento-contenido.p-3(x="7%" y="74%" numero="+")
              .h5.mb-2 4. Edición
              p Finalmente, se examina y relee el texto para obtener la versión final con la calidad exigida.
            .tarjeta.color-acento-contenido.p-3(x="90%" y="74%" numero="+")
              .h5.mb-2 3. Revisión
              p Revisión del texto, con la intención de corregirlo, mejorarlo y reflexionar sobre los ajustes, de acuerdo con normas o reglas.  Esta etapa requiere autocrítica y reescritura.
    p Hay que tener en cuenta otros factores que influyen en el ciclo de la escritura, como son el estilo personal, que reconoce que no todos los autores o escritores usan las mismas etapas para escribir, sin que ninguna sea errónea; o el dominio del tema que debe tener el escritor sobre lo que va a escribir, sugiere estudio e investigación de su parte, lo cual se manifiesta en el dominio de la escritura, desde lo técnico hasta lo gramatical, que se obtiene de practicar la escritura y el ciclo de forma permanente.

</template>

<script>
export default {
  name: 'Tema1',
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
