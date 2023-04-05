<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center
      .col-lg-6.mb-5
        p <b>¡Bienvenido aprendiz!</b>, con el estudio de este componente de formación tendrá la oportunidad de desarrollar los conocimientos y habilidades requeridos para la elaboración de cotizaciones, el diseño de la estructura para un cuadro comparativo, la presentación de ofertas comerciales y modelos de certificación de proveedores, teniendo en cuenta un desarrollo sostenible y la aplicación de buenas prácticas para la selección de los mismos, con el fin de lograr un mejor desempeño laboral en las áreas relacionadas. 
      .col-lg-4.mb-5
        img(src='@/assets/curso/temas/introduccion/img-1.png' alt='introduccion')
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Todo coordinador de eventos debe tener claridad en la contratación de los proveedores requeridos, eligiendo las mejores propuestas, por lo tanto, requiere del manejo de estos temas para garantizar una adecuada organización de su trabajo y  el de su equipo de apoyo; le recomendamos tener presente que desde otra perspectiva, usted se convertirá  en proveedor de las personas u organizaciones que le contraten, por lo tanto, manejar estos conceptos le ayudará a destacarse cuando presente sus propias ofertas o cotizaciones.
    .row.justify-content-center
      .col-lg-10
        P Para mayor claridad de las temáticas a trabajar, lo invitamos a ver el siguiente video y realizar una adecuada organización del tiempo, con el fin de desarrollar esta experiencia de aprendizaje con éxito.
        
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rVryhN5ivbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
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
