<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Desarrollo sostenible
    .row
      .col-6
        p La sostenibilidad es otro de los aspectos que se debe considerar tanto en el desarrollo del evento, como en la selección de proveedores, aplicando dentro de su organización procesos que aporten a la sostenibilidad en las dimensiones ambientales, sociales, económicas, etcétera.    
        .cajon.color-acento-contenido.p-4.mb-4
          p Las empresas ecológicas, también llamadas empresas sostenibles, tratan de equilibrar los beneficios con la salud del planeta y sus diversas poblaciones. Hay una gran variedad de servicios y productos que ofrecen las empresas de esta categoría. 
      .col-6
        img(src="@/assets/curso/temas/t5/img-1.png")
    
</template>
<script>
export default {
  name: 'Tema5',
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
