<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El sector turístico a nivel mundial es uno de los que más aporta divisas o ingresos a los países, debido a que este se ha convertido, con el tiempo, en una de las actividades económicas más fortalecidas por los Estados, por esta razón, se han diseñado rutas y recorridos con el apoyo de guiones interpretativos, que entregan a los turistas actividades llenas de fascinación y de aventuras, donde pueden recrear la historia, la cultura y guardar en su memoria la transformación y evolución de su contexto y el de otros. Sabiendo esto y lo tratado en este componente formativo, lo invitamos a ver el siguiente mapa que resume la temática tratada:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo3.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
