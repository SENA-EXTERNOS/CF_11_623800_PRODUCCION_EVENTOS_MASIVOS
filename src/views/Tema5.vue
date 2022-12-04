<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Desarrollo sostenible
    .row
      .col-lg-6
        p La sostenibilidad es otro de los aspectos que se debe considerar tanto en el desarrollo del evento, como en la selección de proveedores, aplicando dentro de su organización procesos que aporten a la sostenibilidad en las dimensiones ambientales, sociales, económicas, etcétera.    
        .cajon.color-acento-contenido.p-4.mb-4
          p Las empresas ecológicas, también llamadas empresas sostenibles, tratan de equilibrar los beneficios con la salud del planeta y sus diversas poblaciones. Hay una gran variedad de servicios y productos que ofrecen las empresas de esta categoría. 
      .col-lg-6.col.sm-6
        img(src="@/assets/curso/temas/t5/img-1.png")
    p <b> LA SOSTENIBILIDAD </b>
    .tarjeta.color-adicional-3.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-5.mb-0.mb-md-0
            p El grado de adopción y aplicación de prácticas sostenibles varía en diversas condiciones, como la concienciación pública, la economía, el nivel de industrialización, el grado de apoyo, la regulación gubernamental e incluso la edad de los empresarios y los responsables de la toma de decisiones en una determinada región.
            p Considerando lo anteriormente mencionado, la economía de las empresas verdes se ha expandido de manera exponencial en la última década, y sigue haciéndolo hoy en día, ya que cada vez más es adoptada por diversos empleados, consumidores, inversores y otras partes interesadas, especialmente a la luz de la reciente evaluación de la amenaza inminente del cambio climático para el planeta.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t5/img-2.png', alt='img2')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p La importancia presenta recursos generales sobre los negocios verdes, abordando su pasado, presente y futuro. Se ofrecen diferentes medios sobre diversas iniciativas ecológicas y orientaciones sobre este; también se incluyen recursos, estrategias para las empresas con objetivos sustentables para los consumidores interesados en cambiar su estilo de vida y sus pautas de consumo.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t5/img-3.png', alt='img3')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p El mercado de productos ecológicos se ha expandido rápidamente en la última década, pero la mayoría de los consumidores necesitan algo más que los beneficios ofrecidos por este para motivar sus compras. Muchos de estos productos brindan un ‘paquete verde’ que marca la casilla del medio ambiente, también un mejor rendimiento, beneficios para la salud, ahorro y estatus. Para ayudar a los consumidores a abrirse paso entre el ruido y tomar las mejores decisiones, se necesitan nuevas estrategias. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t5/img-4.png', alt='img4')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p El paquete verde ofrece algunas de las mejores y más eficaces técnicas de comunicación para empujar a los consumidores en la dirección correcta. La clave está en enmarcar los beneficios del producto para motivar el comportamiento, combinando las ideas de negocio sostenibles con su economía. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t5/img-5.png', alt='img5')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Un número cada vez mayor de consumidores se fijan en lo que consumen y los efectos que tienen sobre el planeta, en respuesta de lo cual optan por las marcas sostenibles, desde bolsas de basura hasta vestidos de cóctel.  
            p Los recursos de esta sección serán útiles tanto para los consumidores que se plantean un cambio de estilo de vida, como para las empresas que exploran el mercado e intentan comprender a los consumidores con mentalidad sostenible. Para encontrar marcas específicas de productos sostenibles, se recomienda la búsqueda de palabras como: ecológico, respetuoso con la tierra, biodegradable, verde o sostenible, junto con las categorías de los productos.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t5/img-6.png', alt='img6')
    .row.justify-content-center
      .col-lg-8.col-sm-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img-7.png' alt='img-7')
          .tarjeta.color-a
            .p-3
              p.mb-5 Cuando se esté en la búsqueda de los proveedores de productos y servicios que requiera para la organización de eventos, se debe tener en cuenta el criterio de la sostenibilidad, prefiriendo a aquellos pequeños y medianos empresarios que con sus organizaciones dan trabajo a las comunidades locales y menos favorecidas, aquellos que cuenten con iniciativas puntuales de aporte social y ecológico, buscando así productos que sean amigables con el medio ambiente y alimentos orgánicos. Son muchas las alternativas que existen hoy en día en pro de crear experiencias significativas en este sentido. 

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
