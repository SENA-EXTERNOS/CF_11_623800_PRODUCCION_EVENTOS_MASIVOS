<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cotizaciones de proveedores
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1/img-1.png' alt='img-1')
          .tarjeta.color-b
            .p-4
              p Cuando una empresa, persona en general u organizador de eventos, requiere contratar un servicio o producto de un tercero, deberá solicitarle a este una cotización, es decir, un documento comercial donde se establezcan los costos a pagar. Dicha información se podría entender como el ‘presupuesto’ que establece el proveedor, el cual indica al comprador el precio final de determinada cantidad de productos o servicios solicitados.
    h5 Elementos de una cotización
    .row.justify-content-center
      .col-12
        SlyderF.mb-5(columnas="col-lg-8 col-xl-4")
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-2.png' alt='img2')
              p.text-center Lista detallada de los bienes y/o servicios solicitados por el cliente o consumidor.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-3.png' alt='img3')
                p.text-center Referencia para identificar cada tipo de producto o servicio.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-4.png' alt='img4')
                p.text-center Breve descripción o ficha técnica del bien o servicio.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-5.png' alt='img5')
            p.text-center Precios de cada artículo, incluidos los costos de mano de obra, impuestos, descuentos y valor total.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-6.png' alt='img6')
                p.text-center Fecha de elaboración y lugar de expedición de la cotización.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-7.png' alt='img7')
              p.text-center Exenciones de responsabilidad sobre el alcance del producto o proyecto.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-8.png' alt='img8')
            p.text-center La marca de la empresa en forma de logotipo o membrete.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-9.png' alt='img9')
            p.text-center Fecha y lugar de entrega.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-10.png' alt='img10')
            p.text-center Fecha límite del cliente para aceptar cotización.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-11.png' alt='img11')
            p.text-center Persona a quien se dirige dentro de la empresa.
          .tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t1/img-12.png' alt='img12')
            p.text-center Observaciones adicionales según sean requeridas, como otros descuentos, promociones, etcétera.
    .row.justify-content-center
      .col-10
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto.color_2
            p.mb-0 Para ver un formato sencillo, se recomienda descargar el <b>Anexo 1: Modelo Cotización Simple</b>. Una vez se tenga claro cómo puede verse el formato, es necesario observar que toda cotización deberá presentar información clara y precisa sobre los ítems que la conforman, ya que cada uno de estos tiene un objetivo de comunicación específico.
        

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
