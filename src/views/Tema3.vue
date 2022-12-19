<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Oferta comercial
    .row.justify-content-center.mt-2
      .col-lg-8.col-sm-4
        .cajon-b.contenido.p-3.mb-5
          p.mb-0 Otro documento esencial en la selección de proveedores es la oferta comercial. Esta es entregada de vendedor a cliente, realizando la presentación general de la empresa, en la que se resalta la información relevante del producto mientras se definen las características y condiciones (en caso de que aplique) que tiene la compañía para sus ventas.
          p.mt-3 Es importante aclarar que las ofertas comerciales son utilizadas principalmente en ventas mayoristas, empresariales e institucionales, ya que en ventas al cliente final o al detal el proceso es más informal, debido a que el vendedor presenta su portafolio esperando una aceptación rápida por parte del cliente y no requiere mediar una propuesta.
      .col-lg-4.col-sm-6
        img(src='@/assets/curso/temas/t3/img-1.png', alt='img1')
    .row
      .col-lg-4.col-sm-3
        img(src="@/assets/curso/temas/t3/img-2.png")
      .col-lg-8.col.sm-6        
        .cajon-b.color-secundario1.p-3.mb-5
          p.mb-0 La oferta o propuesta comercial es importante por distintas razones: formaliza el proceso comercial, es decir, muestra una estructura a seguir por parte de la empresa y el vendedor; sirve de soporte para cada una de las partes (empresa - cliente) en el momento de tener inquietudes respecto a lo ofrecido/adquirido y permite realizar una comparación adecuada entre las alternativas por parte del cliente. Es importante referenciar que en algunas empresas, según su organización, se cuenta con <i>templates</i> (plantillas) o proformas, las cuales estandarizan la información y facilitan la labor comercial.
          p.mt-3 Se recomienda ver el siguiente video para reconocer algunos de los aspectos a tener en cuenta en la elaboración de una propuesta comercial.
    .row.justify-content-center
      .col-lg-10
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p <b>Se relacionan algunas estrategias para tener en cuenta en el diseño de una oferta o propuesta comercial.</b>
    p.mt-4 Dentro de estos aspectos se encuentran:
    .row.justify-content-center.mt-2
      .col-12
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-acento-primario--borde.p-4(titulo="Diseño y presentación")
            h4 Diseño y presentación
            .row.justify-content-center.mt-2
              .col-lg-4.col-sm-6
                img(src='@/assets/curso/temas/t3/img-3.png', alt='img3')
              .col-lg-8.col-sm-6
                p Uno de los asuntos de mayor relevancia es la parte visual. Presentar una propuesta de servicios en una carpeta con el logotipo de la empresa, al igual que tener un membrete, marcará la diferencia, y así el cliente sabrá que está tratando con un equipo profesional.
                p Además, todos los archivos adjuntos, ya sean gráficos, imágenes u hojas de cálculo, deben tener una buena resolución y ser legibles.
          .tarjeta.color-acento-primario--borde.p-4(titulo="Índice de contenidos")
            h4 Índice de contenidos
            .row.justify-content-center.mt-2
              .col-lg-4.col-sm-6
                img(src='@/assets/curso/temas/t3/img-4.png', alt='img4')
              .col-lg-8.col-sm-6
                p Incluir un índice es fundamental para estructurar la información y permitir al cliente localizar fácilmente los datos de su interés dentro de la propuesta.   
          .tarjeta.color-acento-primario--borde.p-4(titulo="Redacción")
            h4 Redacción
            .row.justify-content-center.mt-2
              .col-lg-4.col-sm-6
                img(src='@/assets/curso/temas/t3/img-5.png', alt='img5')
              .col-lg-8.col-sm-6
                p La presentación de una propuesta es uno de los últimos pasos antes de cerrar una venta, por tal motivo debe ser clara y concisa. 
                p Asegurarse de utilizar un lenguaje sencillo y comprensible es clave para que todos los implicados en el negocio puedan entenderlo sin problema alguno.
                p Destacar los beneficios del producto o servicio en negrita puede ser una gran ayuda para que el cliente se centre en ellos. El uso de gráficos en esta parte hará que la lectura sea más ágil.
          .tarjeta.color-acento-primario--borde.p-4(titulo="Importancia al precio")
            h4 Importancia al precio
            .row.justify-content-center.mt-2
              .col-lg-2.col-lg-6
                img(src='@/assets/curso/temas/t3/img-6.png', alt='img6')
              .col-lg-6.col-sm-6
                p El valor del producto o servicio es uno de los aspectos de mayor interés para un cliente potencial a la hora de tomar una decisión. No debe haber limitaciones al exponer el valor y las formas de pago; es clave explicar con detalle, quizá con un gráfico o una hoja de cálculo, lo que incluye el precio, los recursos utilizados y la carga horaria.
          .tarjeta.color-acento-primario--borde.p-4(titulo="Incluir un calendario")
            h4 Incluir un calendario
            .row.justify-content-center.mt-2
              .col-lg-4.col-sm-6
                img(src='@/assets/curso/temas/t3/img-7.png', alt='img7')
              .col-lg-8.col-sm-6
                p Estipular fechas de entrega de lo acordado es fundamental para que el cliente potencial confíe en la empresa, por lo que se debe ser sincero con estas. 
                p Un cronograma de trabajo bien diseñado dará seriedad y credibilidad a la empresa o proveedor.
          .tarjeta.color-acento-primario--borde.p-4(titulo="Presente más de una opción")
            h4 Presente más de una opción
            .row.justify-content-center.mt-2
              .col-lg-4.col-sm-6 
                img(src='@/assets/curso/temas/t3/img-8.png', alt='img8')
              .col-lg-8.col-sm-6
                p Mostrar al cliente que tiene diferentes opciones para cerrar el trato con la empresa puede ser atractivo, y este se sentirá libre de elegir la que más le convenga. Este tipo de tácticas puede ayudar a ofrecer productos y servicios de diferentes gamas, demostrando así la capacidad de cubrir cualquier escenario.
    .row.justify-content-center
      .col-lg-7.col-sm-12 
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img-9.png' alt='img-9')
          .tarjeta.color-a
            .p-4
              p.mb-0 Una vez claros los detalles y elementos a tener en cuenta en la elaboración de una propuesta comercial, se genera el cuestionamiento sobre cuáles son las ventajas y desventajas de tener una solicitud de oferta.
    .row.justify-content-center
      .col-lg-6
        .cajon-b.contenido.p-3.mb-5
          p.mb-0 Dentro de las ventajas se encuentra que la empresa que adquiere los suministros conocerá la procedencia de la mercancía y a quien se le entrega, por lo que siempre existirá una alta posibilidad sobre la respuesta para las peticiones de una oferta; el número de ofertas recibidas se limita al porcentaje de estas solicitadas a los licitadores, por lo que el tiempo del proceso de selección se reduce considerablemente, al igual que el tiempo del proceso de contratación, ya que no es necesario preparar las condiciones ni anunciar los requisitos, minimizando así el plazo de presentación de las ofertas.
      .col-lg-6
        .cajon-b.color-secundario2.p-3.mb-5
          p.mb-0 Dentro de las desventajas se encuentra el hecho de que la entidad contratante decida a qué proveedores o prestadores de servicios enviar la solicitud de presupuesto, esta acción puede dar lugar a irregularidades, al igual que la competencia entre los proveedores sea limitada, reduciendo así las opciones. Por otra parte, se podría abusar del proceso de petición de oferta como resultado de la división de los requisitos en tamaños más pequeños, solo para aplicar este método de contratación. 

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
