<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Certificación de proveedores
    .row
      .col-4
        img(src="@/assets/curso/temas/t4/img-1.png")
      .col-8
        p Una vez el organizador de eventos o la empresa ha estudiado la propuesta comercial y cotización, se analizan por medio de un cuadro comparativo las diferentes alternativas, con el objetivo de aplicar una estrategia más amplia en gestión de calidad para proveedores. 
        p Se trata de un proceso mediante el cual una organización puede administrar sus relaciones con los proveedores para coordinar actividades en una sola unidad, y así crear valor para todas las partes interesadas, conocido como el ´ganar/ganar´. La certificación de proveedores establece los requisitos mínimos para que un proveedor sea elegible. El fin de este proceso es la mejora continua.
    p.mt-5 La importancia de establecer este proceso se encuentra en: 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t4/img_2.png/', alt='img-2')
          figcaption Leyenda de la imagen
      .tarjeta.color-acento-botones1.p-3(x="14%" y="65%" numero="1")
        p Permitir la identificación a los proveedores que pueden cumplir los requisitos de la empresa.
      .tarjeta.color-acento-botones1.p-3(x="18%" y="47%" numero="2")
        p Facilitar la manera de obtener una estimación justa del potencial de los proveedores para tomar decisiones seguras en términos de inversión y dinero.
      .tarjeta.color-acento-botones1.p-3(x="25%" y="25%" numero="3")
        p Evitar algunos procesos como la inspección.
      .tarjeta.color-acento-botones1.p-3(x="44%" y="14%" numero="4")
        p Regular y formar métodos coherentes de gestión de los proveedores.
      .tarjeta.color-acento-botones1.p-3(x="61%" y="14%" numero="5")
        p Establecer relaciones abiertas y sólidas con los proveedores.
      .tarjeta.color-acento-botones1.p-3(x="77%" y="33%" numero="6")
        p Proporcionar una mayor comunicación y un mejor intercambio de información. 
      .tarjeta.color-acento-botones1.p-3(x="81%" y="46%" numero="7")
        p Facilitar el alcance de los objetivos en mejora en la empresa, a través de la colaboración.
      .tarjeta.color-acento-botones1.p-3(x="86%" y="65%" numero="8")
        p Ayudar a la organización para servir mejor a sus clientes.
    .row
      .col-4
        .cajon-b.color-secundario1.p-3.mb-5
          p.mb-0 La oferta o propuesta comercial
  
    
  </template>

<script>
export default {
  name: 'Tema4',
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
