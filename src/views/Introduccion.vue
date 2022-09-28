<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: #FFF")
      h1 Introducción
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        p La escritura constituye uno de los procesos clave en el aprendizaje y una competencia necesaria para el desarrollo comunicativo, aportando a la producción de conocimientos, a la recreación de la realidad y a la configuración del pensamiento; esta importancia se eleva por el valor estético y artístico del texto literario, que, como se sabe, combina la habilidad escritora con la sensibilidad y la subjetividad propia de quien escribe.
        p Es por esto que, cuando se habla de crear un guion turístico, se hace necesario conocer el contexto general, es decir: la población, los servicios que se van a ofrecer, los costos, y otra serie de elementos que le den al turista información clara sobre la ruta turística que se le está ofreciendo, esta debe ser tan llamativa que impacte al cliente y que le lleve a tomar decisiones por la opción. Por lo anterior, le invitamos a ver el siguiente video:
      .col-lg-auto
        figure
          img(src='@/assets/curso/intro/img1.png')    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wdOy3FQabhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
