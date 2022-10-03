<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 8
      h1 Guiones turísticos
    p.mb-4 En turismo, la elaboración e interpretación de guiones agrega otros fundamentos a lo visto en el apartado anterior. Los guiones turísticos se definen como una técnica de planificación y de comunicación, así como una herramienta metodológica que compendia los atractivos turísticos, los servicios y productos, para la coordinación de estos; y, para realizarse, se tiene en cuenta el destino.
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        p El guion permite la organización sistematizada y adaptada de los servicios del turismo, de acuerdo con las necesidades de la demanda, por lo que quien lo elabora requiere:
        SlyderF(columnas="col-12")
          .tarjeta.tarjeta--amarilla.p-4
            .row.justify-content-center
              .col-12
                p Campo de actuación en el que el guía puede ofrecer sus servicios como independiente directamente al turista, pasajero o visitante, también a empresas del sector, tales como:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow
                    | Tener conocimiento del territorio, próximo y lejano, con el fin de hacer una análisis DOFA de los servicios que se pueden ofrecer.
                  li 
                    i.fas.fa-location-arrow
                    | Es importante hacer un análisis de los proveedores de otros servicios similares y diferentes en la zona, con el fin de permanentemente estar haciendo un análisis e investigación del mercado, para estar a la vanguardia y ser competente.
                  li 
                    i.fas.fa-location-arrow
                    | Otro factor que debe tener en cuenta es conocer proveedores de servicios adicionales, que pueda incluir u ofrecer como parte de su ruta turística en la zona.
                  li 
                    i.fas.fa-location-arrow
                    | El conocimiento de la comunidad es vital, ya que permite que esta participe en el proceso de construcción del proyecto, hace que se vuelva parte del inconsciente colectivo y motiva a la gente a trabajar en forma comunitaria para lograr el éxito del mismo a nivel local, regional, nacional e internacional, si es necesario.
          .tarjeta.tarjeta--amarilla.p-4
            .row.justify-content-center
              .col-12
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow
                    | La prestación de servicios atractivos, que atraigan a las personas por la buena calidad del servicio, hace que el voz-a-voz funcione y el proyecto o ruta turística se posicione en el mercado turístico.
                  li 
                    i.fas.fa-location-arrow
                    | Por último, pero no menos importante, está la descripción del producto turístico, entre otros factores, pero, ¿por qué es clave? Porque es lo que usted está vendiendo y es lo que el cliente final va a comprar. Por lo anterior, debe hacer una investigación continua de las necesidades o requerimientos del cliente y de los servicios que se pueden ofrecer en la zona, esto lo puede conocer mediante el apoyo de las alcaldías, las secretarías de cultura y turismo, las organizaciones de turismo y la investigación permanente en Internet sobre el tema. A eso se le llama vigilancia tecnológica o curación de contenido, que para el caso es turismo.
      .col-lg-auto
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema8/img1.png')
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema2/img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-0 Matriz DOFA
                  p.mb-0 Este video hace parte de la Complementaria Planeación para procesos administrativos.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=84fuGpQeYg0" target="_blank")
                    span Ver video 
                    i.fas.fa-video
    Separador
    #t_8_1
    .titulo-segundo.color-acento-contenido
      h2 8.1 Tipos
    .bloque-texto-g.color-secundario1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La escritura de guiones para el sector turístico varía según varios factores que se deben tener en cuenta al momento en que se va a escribir y de acuerdo con la población a la cual van dirigidos. Es por eso que, en el siguiente recurso de aprendizaje, se muestran algunos tipos, junto con las características que los definen:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2893N6lISyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_8_2
    .titulo-segundo.color-acento-contenido
      h2 8.2 La interpretación en el guion
    .row.align-items-center.bg-color28.mb-5
      .col-lg.mb-4.mb-lg-0.p-4
        p La interpretación o puesta en escena del guion inicia por reconocer los componentes repartidos en segmentos, según el tipo de guion que se trabaja en equipo, los cuales se encuentran en la siguiente lista:
        ul.lista-ul
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Presentación (segmento 1).
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Introducción al recorrido (segmento 2).
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Desarrollo (puede estar mediado por personajes o hacerse solo por narración - segmentos 3 a 5).
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Conclusiones (segmento 6).
      .col-lg-auto
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema8/img3.png')
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema8/img4.png')
      .col-lg
        .tarjeta.tarjeta--amarilla3.p-4.p-lg-5
          SlyderA
            .row
              .col-12.p-4
                p Para llegar a interpretar el guion, sea por empresa o individual, inicialmente, lo que se hace es un estudio del material; por lo anterior, se deben tener en cuenta los siguientes elementos:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | El interés de la demanda.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | La capacidad de respuesta.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Las reproducciones geográficas.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Las reproducciones históricas del recorrido.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | El presupuesto existente.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | El equipo humano.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Los materiales requeridos.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Los tiempos programados.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | El alcance.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Entre otros elementos.
            .row
              .col-12.p-4
                p Para llegar a interpretar el guion, sea por empresa o individual, inicialmente, lo que se hace es un estudio del material; por lo anterior, se deben tener en cuenta los siguientes elementos:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Contar con el estudio geográfico de la región.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Tener a mano planes de desarrollo regional y turístico.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Inventarios de atractivos y servicios.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Diseño de producto.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Mapas de travesía.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Costo inicial del recorrido.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Necesidades de coordinación en la operación.
            .row
              .col-12.p-4
                p Por otro lado, se analizan las fichas levantadas para producto o ruta, las cuales deben contar con la siguiente información:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | La identificación completa de tipo de producto.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Población objetivo.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Segmento de mercado.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Municipios o lugares que abarca el recorrido.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Promedio de duración.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Proveedores.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Posibles valores y costos.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Los insumos del producto turístico.
            .row
              .col-12.p-4
                p Dentro de la información construida de la ruta de acuerdo con el análisis del producto turístico, se encuentra #[b el itinerario], el cual debe ser detallado, incluyendo, por lo menos:
                ul.lista-ul
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | El día.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Las horas de las actividades.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | El tiempo asignado a cada una.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Los proveedores regionales.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | La descripción de valores de cada servicio.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Lo que incluye o no el servicio.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Las tarifas y su vigencia.
                  li 
                    i.fas.fa-location-arrow(style="color: #406834")
                    | Las recomendaciones del recorrido.
    p Esta información hace parte de la interpretación, porque se integra al discurso del guía.
    Separador
    #t_8_3
    .titulo-segundo.color-acento-contenido
      h2 8.3 Análisis de ejemplos
    .row.align-items-center.bg-color28.mb-5
      .col-lg.mb-4.mb-lg-0.p-4
        p Para analizar los guiones que se han diseñado y evaluar la viabilidad de los que se construyen, se deben tener en cuenta los siguientes elementos:
        ul.lista-ul
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Concepto.
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | La historia.
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | La estructura.
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Los personajes.
          li 
            i.fas.fa-location-arrow(style="color: #FF5900")
            | Los diálogos.
      .col-lg-auto
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema8/img2.svg')
    p.mb-5 En adición, para verificar la sincronía de estos elementos y si el guion funciona, se deben revisar algunas variables e indicadores, los cuales dan valores a los diferentes elementos de los guiones literarios, los cuales se describen a continuación:
    .row.justify-content-center.mb-5
      .col-lg-auto
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Tabla elementos de los guiones literarios
    p.mb-5 Por otro lado, el guion interpretativo contiene las siguientes variables e indicadores, los cuales deben ser incluidos con el fin de cumplir con el estándar para hacer guiones creativos para el turismo:
    .row.justify-content-center
      .col-lg-auto
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. estándar para hacer guiones creativos para el turismo
    Separador
    #t_8_4
    .titulo-segundo.color-acento-contenido
      h2 8.4 Propuesta y estructuración
    p.mb-5 El modelo de la ruta interpretativa del Camino del Gaucho en Argentina modela las propuestas en América Latina, aquí el resultado de un diseño de ciudad:
    .row.mb-5
      .col-lg.mb-4.mb-lg-0
        .bloque-texto-f.color-secundario.pt-4.px-4.px-lg-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto “Aun cuando el Camino del Gaucho es un territorio relativo a una cultura rural funcional bajo las necesidades productivas de la economía ganadera del siglo XVII; correspondiente a un subsistema regional perteneciente al Mercosur y compuesto por territorios compartidos entre Brasil, Uruguay y Argentina; fue este último país quien apostó fuertemente por aprovechar la gran concentración de valores paisajísticos y culturales del bioma pampeano y en especial de la zona más vinculada al litoral costero entre el mar argentino en el océano atlántico y la desembocadura del Río de la Plata, el cual vivía hacia el año de 1995 una compleja situación con sus ecosistemas naturales.
          p.text-regular.bloque-texto-f__texto Este delicado equilibrio se veía amenazado principalmente por la desarticulación de sus poblados, el abandono de sus estaciones de ferrocarril, o las necesidades sociales insatisfechas de sus cascos de estancia; pero también por la escasa valoración de las históricas tecnologías campestres utilizadas en sus labores cotidianas, tan apropiadas para el manejo de pastizales, aguadas, y caminos de tropas; por la difícil transición que suponía la lógica evolución tecnológica de sus procesos productivos tras la paulatina introducción del alambrado, el molino, la agricultura tradicionalmente extractiva, hasta llegar al actual y obligado modelo de agroindustria sostenible.
          p.text-regular.bloque-texto-f__texto Acorde con la problemática, la puesta en marcha del corredor turístico Camino del Gaucho significa en la actualidad una contribución a la conservación y evolución del paisaje, y a la ordenación y desarrollo del territorio, desde una mirada eminentemente cultural: el territorio como paisaje o el arte del paisaje al servicio del territorio¨
          .bloque-texto-f__autor.mb-3
            h4.mb-0 (Bernárdez, 2012).
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema8/img5.png')
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1]. #[i Red de Ecomuseos del Camino del Gaucho y sus diferentes circuitos según actividades]
        figure
          img(src='@/assets/curso/tema8/img6.png')
      .col-lg
        p La principal apuesta con enfoque territorial del programa Camino del Gaucho supuso la adopción de un modelo de “Red de Ecomuseos”, definiendo esta unidad de negocio estrella como un sitio donde palpita la identidad y la vida del lugar; museo de la vida, testimonio de la cultura, la producción y la naturaleza; manejado por sus propios pobladores (comerciantes, artesanos, productores, educadores), para canalizar en forma de red todos los recursos alojados en el territorio y distribuir equitativamente todo el excedente económico que este generase.
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p “Esta estructura de valorización del inmenso territorio y su gente terminó propiciando procesos de organización social (redes y alianzas) que han movilizado la participación de todos los actores, transformándolos en verdaderos autores participativos de un gran proyecto de turismo y biodiversidad a escala regional”.
            br
            br
            | #[b (Badillo y Amézquita, 2015)]
            i.fas.fa-quote-right.d-flex.justify-content-end
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.bg-color4
          .col-lg-auto
            figure.mt-4.mt-lg-0
              img(src='@/assets/curso/tema1/img6.png')
          .col-lg.p-4
            h5.mb-0 Importante...
            p.mb-0 Las propuestas en Colombia y, en general, para América Latina se estructuran con base en inventarios y documentos de estudio de caracterización urbana o rural desde el enfoque territorial, de  accesibilidad y estudio de estructuras de transporte, que tienen un alto componente de emprendimiento y encadenamiento económico.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema2/img25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como parte de su aprendizaje autónomo, le invitamos a ver el video de la Uned, que maneja la Cátedra de Turismo Sostenible en España con el nombre "#[i Inventario del ICT]", el cual menciona algunos elementos que se deben tener en cuenta para diseñar un recorrido turístico, que se encuentra en la sección de material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=NGCB9JE4ftw" target="_blank")
                    span Ver video 
                    i.fas.fa-video
    p.mb-5 En Colombia, se han venido realizando varios trabajos para fortalecer el turismo, por lo que a continuación se muestran algunos ejemplos que le ayudarán a entender el proceso y los formularios que se han ido aplicando:
    .row
      .col-lg
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo4.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. El guion interpretativo, un producto del plan interpretativo, componente formativo del programa guianza turística.
      .col-lg
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo5.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. MinComercio Industria y Turismo. Inventario y caracterización del alojamiento. San Antero. 2017.
      .col-lg
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo6.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. MinComercio Industria y Turismo. Inventario y caracterización de restaurantes. San Antero. 2017
    .row.justify-content-center
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo7.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p #[b Anexo]. MinComercio Industria y Turismo. Formulario único para la elaboración de inventarios turísticos
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('downloads/anexo8.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. MinComercio Industria y Turismo. Diseño de producto turístico: ruta náutica

</template>

<script>
export default {
  name: 'Tema8',
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
