<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Certificación de proveedores
    .row
      .col-lg-4.col-sm-6
        img(src="@/assets/curso/temas/t4/img-1.png")
      .col-lg-8.col-sm-6
        p Una vez el organizador de eventos o la empresa ha estudiado la propuesta comercial y cotización, se analizan por medio de un cuadro comparativo las diferentes alternativas, con el objetivo de aplicar una estrategia más amplia en gestión de calidad para proveedores. 
        p Se trata de un proceso mediante el cual una organización puede administrar sus relaciones con los proveedores para coordinar actividades en una sola unidad, y así crear valor para todas las partes interesadas, conocido como el ´ganar/ganar´. La certificación de proveedores establece los requisitos mínimos para que un proveedor sea elegible. El fin de este proceso es la mejora continua.
    p.mt-5 La importancia de establecer este proceso se encuentra en: 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t4/img_2.png', alt='img-2')
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
        p Ayudar a la organización para servir mejor a sus clientes.
      .tarjeta.color-acento-botones1.p-3(x="86%" y="65%" numero="8")
        p Facilitar el alcance de los objetivos en mejora de la empresa, a través de la colaboración.
    .row
      .col-12
        .cajon-b.color-secundario3.p-3.mb-3
          p.mb-0 Este proceso es importante para lograr una sólida relación entre empresa y proveedor. Aunque pueda parecer que es la empresa la mayor beneficiada, a continuación, se pueden observar algunas de las ventajas que ofrece para las dos partes.
    .row.justify-content-center.mt-2
      .col-lg-7.col-sm-10
        .cajon.color-primario.p-3.mb-0
          p Dentro de los beneficios que aporta la implementación del proceso, se encuentran:
    .row.justify-content-center.mt-5
      .col-lg-5.col-sm-7
        img(src="@/assets/curso/temas/t4/img-3.png")
      .col-lg-3.col-sm-3
        img(src="@/assets/curso/temas/t4/img-4.png")
    .row.justify-content-center.mt-5
      .col-lg-5.col-sm-6
        img(src="@/assets/curso/temas/t4/img-5.png")
      .col-lg-6.col-sm-6
        p La mayoría de estos beneficios se pueden conseguir estableciendo objetivos mutuos en las áreas de control de calidad total y control estadístico del proceso SPC, contando con menos reprocesos, desechos, errores de especificación, dibujo, recepción y facturación. Con este también se puede disminuir el coste total del producto.
        p.color.p-4 Con la garantía de cero defectos se reducen los inventarios, el <i>stock</i> de seguridad, y se puede eliminar la inspección, logrando tamaños de lotes más pequeños y entregas con mayor frecuencia, además de una configuración reducida y un papeleo administrativo racionalizado.
    .row.justify-content-center.mt-2
      p.text-center Actividades necesarias para implementar una certificación de proveedores:
    .row.justify-content-center.mt-5
      .col-lg-10.col-sm-12
        img(src="@/assets/curso/temas/t4/img-6.png")
    .row.justify-content-center.mt-5
      .col-lg-3
        p Estas actividades se encuentran sujetas a las siguientes condiciones: todos los proveedores con los que se firma un contrato deben estar registrados en la base de datos de proveedores en la empresa, cumpliendo con los requisitos comerciales y legales de los documentos solicitados. 
        img(src="@/assets/curso/temas/t4/img-7.png")
      .col-lg-4
        p Existen principalmente tres tipos de certificación:
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | La ISO 9000, que se presenta como el programa de certificación de calidad de la Organización Internacional de Normalización, la cual se centra también en la parte documentada.
          li
          li 
            i.fas.fa-check
            | Equivalentes industriales como la ISO 14000, que se utiliza en la industria automotriz.
          li
          li 
            i.fas.fa-check
            | Certificaciones diseñadas por la propia empresa.
          li
      .col-lg-3.col-sm-5
        img(src="@/assets/curso/temas/t4/img-8.png")
    .row.justify-content-center.mt-5
      .col-8
        .cajon-b.color-secundario4.p-3.mb-3
          p.mb-0 Descargar el <b>Anexo: <i>2_CHECK LIST</i> DE EVALUACIÓN PARA PROVEEDORES</b>, esta lista de comprobación se diligencia cada vez que se realiza una evaluación inicial del proveedor, o si se evalúa de nuevo a un proveedor bloqueado para su aprobación.
    
    .row.mt-5.justify-content-center
      .col-lg-8.col-sm-12 
        .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-4.col-sm-4.col-lg-2
                img(src="@/assets/curso/temas/t1/img-13.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 PDF - Anexo 2
                    p.text-small <i>Check list</i> de evaluación para proveedores
                  .col-sm-auto
                    a.boton.color-adicional-2.texto-blanco(:href="obtenerLink('downloads/ANEXO 2_ CHECK LIST DE EVALUACION PARA PROVEEDORES-1.pdf' )" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

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
