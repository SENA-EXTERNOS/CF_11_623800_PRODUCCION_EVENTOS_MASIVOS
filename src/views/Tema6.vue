<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Buenas prácticas de selección de proveedores
    .row
      .col-3.col.col-sm-5
        img(src="@/assets/curso/temas/t6/img-1.png")
      .col-9
        p Mantener una buena relación con los clientes es esencial en cada etapa de la selección, incluso después de una venta. Ofrecer un servicio posventa demuestra valor a sus clientes, generando una posible recompra. Además, un cliente satisfecho puede actuar como promotor de los productos y servicios, aumentando así la visibilidad de la empresa. Por lo tanto, ofrecer un buen servicio posventa es tan importante como conseguir otros nuevos clientes.
        p Existen diversas métricas que deben ser monitoreadas por los empresarios, y una de ellas es la recompra, es decir, el número de personas que han adquirido un producto o servicio y lo hacen de nuevo.
    .row.mt-2
      .col-7.col-sm-6
        p Ahora bien, entrando en la definición de una buena práctica, es una norma o conjunto de directrices que producen resultados positivos de ser aplicados correctamente. Las buenas prácticas están relacionadas con la forma de llevar a cabo una tarea o configuración. Las directrices estrictas de las mejores prácticas pueden ser establecidas por un órgano del gobierno y de forma interna en una organización, estableciéndose en las orientaciones del fabricante o en directrices publicadas.
        p En algunos sectores puede existir un requisito legal para seguir las directrices de las buenas prácticas; sin embargo, en muchos campos tecnológicos una buena práctica suele presentar la forma óptima de trabajar, como por ejemplo, la forma correcta de utilizar un producto o el conjunto de ideales a los que se aspira. Aunque no sea obligatorio seguir una mejor práctica, se recomienda que la organización la implemente en sus procesos.
        p Las buenas prácticas son creadas por una organización o un fabricante a través de la investigación, con el fin de establecer directrices o puntos de referencia que puedan ser referentes en otras organizaciones.
      .col-5
        img(src="@/assets/curso/temas/t6/img-2.png")
      p.text-center.mt-3 Algunas pautas para crear buenas prácticas son: 
      .tarjeta.color-adicional-3.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-4.mb-0.mb-md-0
              p Cuando una empresa establece y comunica sus directrices de buenas prácticas internas, permitiendo dar lugar a un producto de trabajo más coherente, mayor eficiencia y satisfacción de los empleados.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t6/img-3.png', alt='img3')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              p Identificar las áreas que se beneficiarían del establecimiento de las buenas prácticas. Es necesario buscar funciones o grupos con un producto de trabajo donde se presenten opiniones diferentes sobre cómo llevar a cabo una tarea.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t6/img-4.png', alt='img4')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              p Buscar las mejores prácticas existentes, consultando la existencia sobre orientaciones escritas internas o externas de cómo llevar a cabo una tarea.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t6/img-5.png', alt='img5')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              p Preguntar a los trabajadores qué les parece útil para captar el conocimiento de la organización. Si un grupo tiene más éxito que otros, es clave analizar qué hacen de forma diferente e intentar aplicarlo a todos los grupos.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t6/img-6.png', alt='img6')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              p Comunicar las recientes buenas prácticas. Se debe lograr que las nuevas directrices sean claras, para que luego sean publicadas en un lugar de fácil acceso.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t6/img-7.png', alt='img7')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              p Medir el impacto de las buenas prácticas nuevas. Es posible que el establecimiento de dichas directrices no siempre tenga el efecto deseado, por esta razón, se debe programar un examen de seguimiento y realizar los cambios necesarios.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t6/img-8.png', alt='img8')
      .row.justify-content-center
        .col-md-4.mb-4.mb-md-0.col-sm-7
          img(src='@/assets/curso/temas/t6/img-9.png', alt='img9')
        .col-md-8.col-sm-5
          p Las mejores prácticas surgen de manera natural a medida que el colaborador ejerce su trabajo, identificando cómo algunas formas de desarrollar un proceso o actividad producen mejores resultados que otras. También pueden provenir de un individuo o grupos que intercambian ideas y experiencias. A menudo, estas mejores prácticas se escriben, ya sea en un libro o en línea, para compartirlas con otros.
          p Suelen ser similares a una norma o política, pero su cumplimiento es opcional. Puede llegar a ser un punto de referencia con el que una organización compare sus propias prácticas.
    .row.justify-content-center.mt-4
      .col-md-8.mb-4.mb-md-0
        .cajon.color-acento-contenido.p-4.mb-4
          p Para un estudio completo del tema, se recomienda explorar los recursos disponibles en este componente formativo, tales como material complementario, actividad didáctica, glosario, entre otros. 
              

 
</template>

<script>
export default {
  name: 'Tema6',
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
