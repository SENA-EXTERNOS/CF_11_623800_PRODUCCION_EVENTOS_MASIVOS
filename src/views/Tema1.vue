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
    SlyderF.mb-5(columnas="col-lg-8 col-xl-4")
      .tarjeta.color-adicional-1.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/t1/img-2.png' alt='img2')
          p.text-center.flex-nowrap Lista detallada de los bienes y/o servicios solicitados por el cliente o consumidor.
      .tarjeta.color-adicional-1.p-4.flex-nowrap
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/img-3.png' alt='img3')
          p.text-center.flex-nowrap Referencia para identificar cada tipo de producto o servicio.                       
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
            .col-md.col-lg-6
    .row.mt-5.justify-content-center
      .col-8
        .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-4.col-sm-4.col-lg-2
                img(src="@/assets/curso/temas/t1/img-13.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 PDF - Anexo 1
                    p.text-small Modelo Cotización Simple
                  .col-sm-auto
                    a.boton.color-adicional-2.texto-blanco(:href="obtenerLink('downloads/Anexo 1_ Modelo Cotización Simple.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
    p Dentro de dicha información se encuentra:
    .row
      .col-md-5
        img(src='@/assets/curso/temas/t2/img-2.png', alt='img2')
      .col-md-7     
        AcordionA.mb-5(tipo="a" clase-tarjeta="faa")
          .row(titulo="Datos del comercio")
            .col-md-12.mb-4.mb-md-0
              p Información para que el prospecto o comprador sepa de qué organización está recibiendo la cotización. Es indispensable integrar el nombre de la compañía o del prestador de servicio, página web, dirección, redes sociales y medios de contacto.
          .row(titulo="Datos del comprador")
            .col-md-12.mb-4.mb-md-0
              p Información del comprador o prospecto, nombre del representante de la organización, cargo y compañía a la que pertenece.
          .row(titulo="Concepto")
            .col-md-12.mb-4.mb-md-0
              p Es la especificación de los productos y/o servicios que se están cotizando, esto debe escribirse de forma breve y bastante clara. 
          .row(titulo="Valor total")
            .col-md-12.mb-4.mb-md-0
              p Este componente es determinante, pues la base del objetivo de una cotización es informar al cliente cuánto cuesta el producto o servicio solicitado. Podría ser una porción total o parcial, según corresponda al proceso del servicio. El documento debe ser descriptivo, ordenado y coherente, indicando, adicionalmente, la moneda con la cual se le da valor.
          .row(titulo="Métodos o procedimientos de pago")
            .col-md-12.mb-4.mb-md-0
              p Es fundamental poner en claro los procedimientos de pago requeridos, o si tiene alguna restricción. Además, se deben especificar ciertas condiciones, por ejemplo impuestos, descuentos particulares por el pago total, posibilidades de división del costo total en mensualidades, etcétera.  
          .row(titulo="Entrega")
            .col-md-12.mb-4.mb-md-0
              p Hace referencia al tiempo en el cual se proporcionan los productos y los plazos para desarrollar o concretar el servicio, una vez confirmada la compra que se ha planteado en la cotización. 
          .row(titulo="Garantías y soporte")
            .col-md-12.mb-4.mb-md-0
              p Aunque es un componente que depende del producto o servicio que se cotiza, es fundamental añadir el tipo de garantía o soporte que se ofrece sobre estos. 
          .row(titulo="Políticas o términos legales")
            .col-md-12.mb-4.mb-md-0
              p Se debe incluir toda la información requerida sobre políticas de devolución, cambios, garantías, entre otros. Todos los parámetros tienen que permanecer claros para el comprador y vendedor.
          .row(titulo="Comentarios extras")
            .col-md-12.mb-4.mb-md-0
              p Incluir observaciones, comentarios, notas o precisiones que sean necesarias.
    p Con la información anterior se genera un formato de cotización personalizado con las técnicas de uso para el comercio de productos y bienes, siendo esta información eficaz para cada una de las partes que intervienen.

      
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
