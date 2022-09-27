<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 El guion
    .row.align-items-center.bg-color24.mb-5
      .col-lg.mb-lg-0.p-4.p-lg-5
        p El esquema que guía y orienta el desarrollo o la trama de un tema, discurso, presentación, que contiene indicaciones de la realización del recorrido, obra, película, novela o texto de producción artística o de adaptación, se llama guion.
        p Como se ha estudiado, el guion sirve para realizar la presentación de una ruta turística, por lo que es indispensable saber o conocer:
        ul.lista-ul
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | El título, que casi siempre es provisional; en español, también se utiliza la palabra concepto o premisa, y ha de resumir la historia en una frase, ayudando a determinar el nombre.
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Información de la temática, por lo que se debe hacer una investigación previa para generar un documento inicial.
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Creación inicial de los personajes: quiénes son, qué hacen, cómo se van a caracterizar y cuál es el rol, entre otros elementos.
      .col-lg-auto
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema7/img1.png')
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.bg-color4
          .col-lg-auto
            figure.mt-4.mt-lg-0
              img(src='@/assets/curso/tema1/img6.png')
          .col-lg.p-4
            h5.mb-0 Importante...
            p.mb-0 A cada personaje se le da un orden de aparición, la historia de cada uno se va mezclando en el inicio y en el nudo, los conflictos van apareciendo creando la trama; al final, se van desenredando, por decirlo así, dando lugar al cierre o conclusión de este.
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        p De este proceso sale un borrador de diálogos, con el cual se busca verificar que la información está completa, que todos los personajes tienen un rol y que cada uno tiene acciones específicas; luego, se hace el ajuste o segundo borrador.
        p Se sugiere que el primer guion o el plan se escriba a mano, para que fluyan las ideas de manera ágil y genuina; para los más diestros en el manejo del Word, pueden trabajar directamente en el computador; para otros, una excelente herramienta es el dictado por voz.
        p En cuanto al nombre que se pone al inicio sobre el guion a escribir, es temporal, solo al final de la obra se repasa y se define cuál queda. En adición, se revisan los personajes: cuáles son, nombres, características, qué rol asumen, si sufren; además, se sugiere que cada uno tenga un color, con el fin de controlar el diálogo y la intervención según el papel; al final, todo va en negro. Una ayuda para creación de personajes se encuentra en preguntas que sugieren los expertos, tales como las que se muestran en el siguiente recurso:
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema7/img2.svg')
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img3.svg')
      .col
        p.mb-0 #[b El guion]
    p.mb-5 Elementos que se deben tener en cuenta para construir el nudo  o el desarrollo de los hechos en un documento creativo.
    .row
      .col-12.bg-color25
        .p-4
          .row.justify-content-center
            .col-lg-11
              figure
                img(src='@/assets/curso/tema7/img2.png')
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Teniendo estas respuestas, se sugiere, además, escribir el logline de la historia, que consiste en un breve resumen con la esencia de la historia.
        br
        br
        | Este texto servirá posteriormente como una motivación o "gancho" emocional para estimular el interés en el guion y el contenido de este; es vital no olvidar la importancia de este aspecto durante la elaboración del escrito, debe producir emociones.
    p.mb-5 Por eso es importante tener en cuenta la creación de los personajes; para ello, se deben hacer una serie de preguntas que le den forma a cada uno de ellos, las cuales puede revisar en el siguiente contenido:
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img3.svg')
      .col
        p.mb-0 #[b Evolución  o transformación del personaje dentro de la trama]
    .row.mb-5
      .col-lg.m-1.m-lg-3.bg-color15
        .p-5
          .row.justify-content-center.mb-5
            .col-8
              figure
                img(src='@/assets/curso/tema7/img4.png')
          h4.text-center ¿Qué pasó antes?
          p.text-center Muestra el estado inicial del personaje.
      .col-lg.m-1.m-lg-3.bg-color16
        .p-5
          .row.justify-content-center.mb-5
            .col-8
              figure
                img(src='@/assets/curso/tema7/img5.png')
          h4.text-center ¿Qué pasa ahora?
          p.text-center En este espacio, muestra la transformación del personaje a través del tiempo debido a diferentes situaciones.
      .col-lg.m-1.m-lg-3.bg-color17
        .p-5
          .row.justify-content-center.mb-5
            .col-8
              figure
                img(src='@/assets/curso/tema7/img6.png')
          h4.text-center ¿Qué pasará?
          p.text-center En este momento, se piensa en el estado final del personaje; en la medida en que ha pasado diferentes situaciones, él o ella  han cambiado, pero interesa saber  cómo estás le afectarán.
    p.mb-5 Para darle #[b.txt-c1 orden o secuencia a la historia], en el #[b.txt-c1 nudo se arman una serie de sucesos] con los personajes, que van marcando momentos de clímax, de conflictos, de situaciones graves, tristes, de soledad o de dolor, etc. Es allí donde el escritor, al pensar en la estructura del guion, debe hacerse una serie de preguntas que le den un norte y que le permitan clarificar la idea general, la cual se va a detallar posteriormente mediante los actos, las escenas y la caracterización de cada momento; estas preguntas son:
    .row.mb-5
      .col-12.p-4.bg-color26
        figure
          img(src='@/assets/curso/tema7/img7.png')
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema7/img8.png')
      .col-lg
        p Estas respuestas ayudan a crear la sinopsis al escribir el esqueleto o estructura de la trama; por lo anterior, no hay un número de preguntas definidas, ya que estas surgirán a medida que avance la escritura y que los personajes crezcan dentro de la historia; de esa misma forma, las respuestas dan nacimiento a nuevas situaciones o sucesos paralelos, por ello, cada personaje se alimenta a medida que pasa la historia.
        p Para que la historia se amplíe, se usan técnicas como la de mezclar líneas de las historias, surgiendo otras más, que pueden ser extravagantes, divertidas, tristes, o sorprendentes. La idea es que, a medida que avanza la historia, la tensión, emoción y el clímax crezcan, recordando que la historia tiene la estructura de inicio, desarrollo y final o conclusión.
        p Con toda la información de los personajes a la mano, se construye el desarrollo, con base en los miniespacios o actos, como en una obra, en los cuales se inician las problemáticas de la trama, que envuelven poco a poco los personajes. El acto, técnicamente como escrito, tiene las siguientes funcionalidades:
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img3.svg')
      .col
        p.mb-0 #[b ¿ Cómo construyo los actos en el guion..?]
    .row.mb-5
      .col-12
        figure
          img(src='@/assets/curso/tema7/img5.svg')

</template>

<script>
export default {
  name: 'Tema7',
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
