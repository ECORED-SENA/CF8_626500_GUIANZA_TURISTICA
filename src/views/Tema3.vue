<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Esquema y estructuras narrativas
    .row.justify-content-center.mb-5
      .col-lg-10.bg-color14.p-4
        .row.align-items-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img1.png')
          .col-lg
            p.mb-0 La estructura del texto está formada por diferentes situaciones que suceden a los personajes. Las acciones se relacionan entre sí, porque cada una promueve que ocurran otras. Así, se van formando cadenas de hechos que podemos definir como secuencias narrativas.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img3.svg')
      .col
        p.mb-0 #[b Planteamiento, nudo y desenlace]
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        p El #[b.txt-c1 planteamiento] es el primer acto de todo texto narrativo y sirve como #[b.txt-c1 introducción para el lector]. Es el acto de presentar al protagonista, su objetivo y el contexto en el que se desarrolla. Eso incluye la atmósfera y el resto de los personajes relevantes para la historia. Dentro del primer acto, tienen lugar el motivo y el primer punto de giro, que marcarán los sucesos de la narración.
        p El #[b.txt-c1 nudo o trama] es la segunda parte del texto, #[b.txt-c1 aparecen los conflictos] que tendrá que enfrentar el protagonista si quiere alcanzar su objetivo final. En ese momento, tienen lugar la mayoría de los acontecimientos y se desarrollan los conflictos o dificultades de la narración.
        p El #[b.txt-c1 desenlace es el final]. En este instante, se presenta un sentimiento de urgencia. Todo el momento del que nos hemos deleitado en el nudo desaparece en el desenlace. Enfrenta al protagonista a su mayor obstáculo, si desea alcanzar su objetivo, y sucede el crecimiento del personaje dejando una reflexión a la audiencia.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema3/img2.svg')
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img3.svg')
      .col
        p.mb-0 #[b Elaboración del esquema]
    .row.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img2.png')
      .col-lg
        .row.mb-4
          .col-12.bg-color11
            .p-4
              p.mb-0 En la elaboración del esquema de un texto, #[b.txt-c1 es importante el resumen para apreciar la estructura], es decir, su composición. Esta es la síntesis de lo más significativo, contiene las ideas principales, las ideas secundarias y los detalles del texto, en un orden razonable. Se trata de un resumen abreviado y esbozado del contenido, debidamente jerarquizado.
        p Hay varios sistemas generalizados para elaborar los esquemas, pero los más frecuentes son los #[b.txt-c1 alfanuméricos], que combinan letras y números según la importancia de cada uno, y los #[b.txt-c1 numéricos], donde solamente se utilizan números.
        p #[b.txt-c1 El esquema contempla internamente la trama o desarrollo del argumento] en diferentes escenas, el #[b.txt-c1 conflicto], que es la problemática que opone a los personajes y permite que la narración avance; el #[b.txt-c1 clímax] es el punto más alto o el punto máximo de conflicto, desde el cual el autor propone soluciones de este y #[b.txt-c1 el desenlace o resolución] del conflicto, en cualquier sentido, es decir, positivo o no.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img3.svg')
      .col
        p.mb-0 #[b Superestructura narrativa]
    p.mb-5 La estructura formal que representa las partes en que se organiza el contenido del texto se llama superestructura, la cual organiza las secuencias de frases asignando una función específica en la comunicación, y se compone de los siguientes elementos:
    .row
      .col-lg.m-1.m-lg-3.bg-color15
        .p-5
          .row.justify-content-center.mb-5
            .col-8
              figure
                img(src='@/assets/curso/tema3/img3.png')
          h4.text-center Situación inicial
          p.text-center Presenta el lugar, el tiempo y los personajes; da inicio al problema o la  complicación, hecho que da como resultado un cambio respecto de la situación inicial.
      .col-lg.m-1.m-lg-3.bg-color16
        .p-5
          .row.justify-content-center.mb-5
            .col-8
              figure
                img(src='@/assets/curso/tema3/img4.png')
          h4.text-center La resolución 
          p.text-center Resuelve la situación compleja de manera positiva o negativa para los personajes.
      .col-lg.m-1.m-lg-3.bg-color17
        .p-5
          .row.justify-content-center.mb-5
            .col-8
              figure
                img(src='@/assets/curso/tema3/img5.png')
          h4.text-center La situación final o final de la historia
          p.text-center Es la que exhibe las variaciones que se han elaborado de la situación original.

</template>

<script>
export default {
  name: 'Tema3',
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
