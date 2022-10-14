<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 6
      h1 Referentes rutas temáticas en Colombia y en el exterior
    .bloque-texto-g.color-secundario.bloque-img-text-1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/tema6/img1-1.png").img-mascara
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ruta turística está definida como un recorrido organizado, que tiene por objetivo mostrar atractivos destacados en el ejercicio del turismo, tales como: los lugares naturales a visitar, los sitios culturales o históricos de alto reconocimiento social por la importancia o interés generado por acontecimientos que lo hacen relevante en el inconsciente colectivo local, regional, nacional o internacional.
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-auto
        figure
          img(src='@/assets/curso/tema6/img1.svg')
      .col
        p.mb-0 Aquí es importante hablar de las rutas temáticas, las cuales se relacionan con los tipos de turismo y con la amplia oferta de las regiones; en adición, se tienen en cuenta los elementos que se listan a continuación:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.bg-color21
        .row.align-items-center
          .col-lg-auto.mb-4.mb-lg-0
            figure.mt-4.mt-lg-0
              img(src='@/assets/curso/tema6/img2.png' style="width: 350px").m-auto
          .col-lg
            .p-4
              .row
                .col-lg-6
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | La teoría turística.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Los estudios de mercado.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | La caracterización de recursos.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Los destinos.
                .col-lg-6
                  ul.lista-ul
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Las tendencias.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | El factor de la seguridad.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | Las motivaciones del turista.
                    li 
                      i.fas.fa-location-arrow(style="color: #FF5900")
                      | El precio.
                .col-12
                  p Todos estos juegan un papel muy importante en la determinación del itinerario y, por ende, de las rutas.
    p.mb-5 Teniendo en cuenta lo anterior, por lo general, las rutas se clasifican por su función o finalidad, en:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-10.col-md-7.col-lg.m-1.m-lg-3.p-4.bg-color23
        .row.justify-content-center.mb-5
          .col-8.col-lg-7.bg-color22.shadow-sm
            .p-4
              figure
                img(src='@/assets/curso/tema6/img3.svg')
        p Temática, centrada en conocimiento, de tipo excursión.
      .col-10.col-md-7.col-lg.m-1.m-lg-3.p-4.bg-color23
        .row.justify-content-center.mb-5
          .col-8.col-lg-7.bg-color22.shadow-sm
            .p-4
              figure
                img(src='@/assets/curso/tema6/img4.svg')
        p Senderismo, turismo activo, reconocimiento de la cultura y el territorio.
      .col-10.col-md-7.col-lg.m-1.m-lg-3.p-4.bg-color23
        .row.justify-content-center.mb-5
          .col-8.col-lg-7.bg-color22.shadow-sm
            .p-4
              figure
                img(src='@/assets/curso/tema6/img5.svg')
        p Bienestar, con el interés de descanso, contemplación, deporte, aire libre.
    p.mb-5 Todos estos elementos se pueden combinar para ofrecer varias posibilidades de acuerdo con el interés del viajero y las posibilidades del producto.
    .row.align-items-center.mb-5
      .col-lg.order-2.order-lg-1(data-aos="fade-right")
        .tarjeta.tarjeta--amarilla3.p-4.p-lg-5
          SlyderA
            .row
              .col-12.p-4
                p Las rutas se deben caracterizar por lo siguiente:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | De fácil acceso.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Deben ofrecer una excelente y completa información de todos los aspectos: paisaje, climas, cambios según temporadas, riesgos, mapas, entre otros.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Deben ofrecer todos los servicios de alojamiento, indicando accesibilidad y precios.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Deben ofrecer una gran variedad de información gastronómica de calidad de la zona, que sea llamativa y que interese al turista.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Deben ofrecer todos los servicios de seguridad para proteger la vida del turista y sus bienes.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Es importante que la ruta cumpla una función educativa de formar al turista en diferentes aspectos con relación al respeto hacia los espacios y las personas, sus costumbres y formas de vida en su entorno.
            .row
              .col-12.p-4
                p Las rutas pueden realizarse:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Caminando.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | En desplazamiento con animales.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Tren.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Ruta acuática.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Aérea.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Combinando varias.
      .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img3.png' style="width: 350px").m-auto
    .row
      .col-lg-auto.mb-4.mb-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img4.png' style="width: 550px").m-auto
      .col-lg(data-aos="fade-left")
        p En Colombia, las rutas ofrecen todos los climas y las actividades son tan variadas que van desde el mar sobre el pacífico hasta el atlántico, o desde las montañas hasta la selva, pasando por supuesto por el eje cafetero; desde las tradiciones indígenas hasta la rumba caleña; también cruzando por la naturaleza de la selva del Amazonas, de la Orinoquia o del Chocó, hasta las islas de San Andrés y Providencia.
        p Aquí, se encuentran diferentes tipos de culturas, tales como la indígena, la del Caribe, la del interior, la paisa, entre otras, y todas forman parte de Colombia, pero cada una es diferente. En adición, nuestro país es el segundo con mayor biodiversidad, por lo que se pueden visitar rutas para el avistamiento de aves, ballenas y otros animales exóticos.

</template>

<script>
export default {
  name: 'Tema6',
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
