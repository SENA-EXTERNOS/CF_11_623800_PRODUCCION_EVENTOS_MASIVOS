<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cuadros comparativos
    .row
      .col-lg-4.col-sm-6
        img(src="@/assets/curso/temas/t2/img-3.png")
      .col-lg-8.col-sm-6
        .cajon-b.color-primario.p-3.mb-0
          p.mb-0 Una vez se cuenta con varias cotizaciones (lo ideal es contar con mínimo 3 en cada proceso), se debe analizar la opción más acertada a través de un cuadro comparativo. Como su nombre lo indica, estos cuadros ofrecen una representación visual de varias opciones que pueden compararse entre sí. Puede tener pros, contras y características claves que describan las diferencias vitales entre varias opciones.
          | Dado que no hay una regla general con los gráficos de comparación, estos pueden representar características tanto cuantitativas como cualitativas. En general, son fáciles de hacer y pueden ayudar en la toma de decisiones basadas en datos. 
        .cajon-b.color-secundario.p-3.mb-4
          p.mb-0 Los cuadros comparativos sirven para organizar la información, facilitando la identificación de características similares y diferentes en los conceptos. Por eso son útiles en la adquisición de conocimientos y la memorización de contenidos.
    p Observar los siguientes ejemplos:
    .tarjeta.color-adicional-3.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-5.mb-0.mb-md-0
            h4 Ejemplo 1:
            p Un estudiante debe realizar un examen sobre estudios sociales, que girará en torno a los países de América del Sur. Mientras estudia, decide crear un cuadro comparativo.
            p En las columnas pone los nombres de los países: Colombia, Brasil y Argentina. Debajo de la columna correspondiente a cada nación empieza a escribir diferentes datos, uno por fila, para poder comparar: 
            p Capital: Bogotá D.C. / Brasilia / Buenos Aires.
            p Superficie: 1.964.375 KM2 / 9.371.174 KM2 / 9.984.670 KM2
            p Sistema de gobierno: República presidencial / República Federal / Democrática representativa, republicana y federal.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t2/img_5.png', alt='img5')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Ejemplo 2:
            p Por su parte, una joven que está planificando sus vacaciones decide elaborar un cuadro comparativo para definir qué hotel le conviene más: 
            p Hotel Estelar / Hotel Sonesta.
            p 4 estrellas / 3 estrellas.
            p Incluye desayuno / Incluye desayuno y cena.
            p Tiene piscina / No tiene piscina.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/img_6.png', alt='img6')
    .row.justify-content-center.mt-2
      .col-7.col-sm-6
        p De acuerdo con los ejemplos anteriores, se concluye que este tipo de herramientas permite sintetizar la información recolectada sobre la marcha, por lo que puede considerarse una de las principales ventajas de los recursos visuales.  Igualmente, permite agrupar uno o más textos en un marco, siendo útil para estudiar antes de un examen, exposición o presentación, así como para presentar partes de un trabajo académico, como una tesis, monografía, disertación e informes comerciales, pues permite el análisis global sintetizando las características de los datos.
      .col-lg-5.mb-3.col-sm-6
        img(src="@/assets/curso/temas/t2/img-7.png")
    p.mt-2 Presentación de las ventajas y desventajas de los cuadros comparativos:
    .row.justify-content-center.mt-2
      .col-lg-4.col-sm-6
        img(src="@/assets/curso/temas/t2/img-8.png")
      .col-lg-6.col-sm-6
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-acento-primario--borde.p-4(titulo="Ventajas")
            h4 Ventajas
            .row.mt-5
              .col-12
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | La mayoría, son sencillos de construir e interpretar.
                  li 
                    i.fas.fa-check
                    | Las estimaciones son rápidas y fáciles de entender.
                  li
                  li 
                    i.fas.fa-check
                    | Son accesibles para una amplia gama de público.
                  li
                  li 
                    i.fas.fa-check
                    | Permiten a los espectadores obtener la comparación de datos en una primera apreciación.
                  li
                  li 
                    i.fas.fa-check
                    | Ayudan a resumir una gran cantidad de datos.
                  li 

          .tarjeta.color-acento-primario--borde.p-4(titulo="Desventajas")
            h4 Desventajas
            .row.mt-5
              .col-12
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Pueden llegar a ser largos y pesados de leer.
                  li 
                    i.fas.fa-check
                    | Con un mal diseño, se vuelven complicados e incomprensibles.
                  li
                  li 
                    i.fas.fa-check
                    | Todos los gráficos de comparación no ofrecen una perspectiva visual de los datos.
                  li
                  li 
                    i.fas.fa-check
                    | Los datos en los cuadros de comparación pueden manipularse fácilmente.
                  li            
    .row.justify-content-center.mt-2
      .col-12
        .cajon-b.color-acento-contenido.p-3.mb-0
          p.mb-0 Es importante destacar que el cuadro comparativo no solo se utiliza para contrastar grupos de datos, sino también fenómenos, recibiendo así la información una vez realizada la comparación. Los datos obtenidos mediante el uso de un cuadro comparativo pueden ser de naturaleza cualitativa o cuantitativa, según el caso, siendo una herramienta ideal para examinar dos o más objetos de forma visual. Suele utilizarse en la investigación para evaluar varios modelos, descartar los menos viables y ofrecer una imagen relativamente detallada de las posibilidades. A continuación, se observan los tipos básicos de cuadros comparativos:
    .row.justify-content-center.mt-5
      .col-lg-10.col-sm-12
        img(src="@/assets/curso/temas/t2/img_9.png")
    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Consiste en información descriptiva, es decir, en estos la información no se puede presentar de manera numérica. En algunos casos, suele componerse de contenidos subjetivos, como las opiniones y experiencias de dos autores pioneros del arte contemporáneo. 
    .row.justify-content-center.mt-5
      .col-lg-10.col-sm-12
        img(src="@/assets/curso/temas/t2/img-10.png")
    .row.justify-content-center.mt-5
      .col-lg-7.col-sm-6
        p Este cuadro contiene variables medibles sistemáticas, con el fin de comprender patrones y frecuencias. Se diseña con información objetiva, utilizando datos estadísticos, como el número de personas en un país, los resultados de encuestas y sondeos, permitiendo así que los datos sean comparados y analizados.
        .cajon.color-acento-contenido.p-3.mb-0
          p Ya se ha mencionado el concepto, utilidad, ventajas y desventajas de esta herramienta, ahora es momento de conocer los aspectos que se deben tener en cuenta al momento de elaborar un cuadro comparativo. Al realizar una tabla o gráfico de este tipo, es importante tener una idea clara de lo que se desea plasmar o identificar, ya que esto permite reconocer las variables y su correcta organización para optimizar todo el proceso.
      .col-lg-5.col-sm-6
        img(src="@/assets/curso/temas/t2/img-11.png")
    p.mt-3 Aspectos para tener en cuenta en su elaboración.
    .row.justify-content-center.mt-5
      .col-lg-10.col-sm-12
        img(src="@/assets/curso/temas/t2/img-12.png")
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t2/img-13.png', alt='img-13')
        h2.text-center Especificar los elementos a comparar:
        p Identificar los datos que serán estudiados, analizar sus similitudes, diferencias y ventajas.
        p Antes de crear una tabla de comparación, es necesario tener presente que esta debe ser clara respecto a las características de cada producto, bien o servicio, y los parámetros que se desea comparar.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t2/img-14.png', alt='img-14')
        h2.text-center Crear un diseño útil:
        p Al momento de preparar el cuadro se inicia con la creación de una tabla o cuadrícula con el número requerido de columnas y filas, según los elementos o variables que se deseen comparar. Se añade un diseño atractivo y profesional. 
      .col-md.tarjeta.color-acento-botones.text-white.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t2/img-15.png', alt='img-15')
        h2.text-center Diligenciar el cuadro:
        p Con el diseño listo, se procede a llenar la tabla con los datos de la información suministrada. Se recomienda ser breve, específico y claro.
      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/t2/img_15.png', alt='img-15')
        h2.text-center Escribir una conclusión:
        p Es importante que al completar la tabla de comparación se obtengan conclusiones apropiadas para las unidades que se comparan.
    .row.justify-content-center.mt-5
      .col-lg-6-col-sm-8
        .cajon.color-acento-contenido.p-3.mb-0
          p <b>Cuadro comparativo sencillo de las ventajas y desventajas de los eventos masivos.</b>
    .row.justify-content-center.mt-5
      .col-lg-10.col-sm-12
        img(src='@/assets/curso/temas/t2/img-16.png', alt='img-16')
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img-17.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Al tomar una decisión sobre cuál proveedor, cotización, producto o servicio se desea adquirir para un evento, se recomienda elaborar un cuadro comparativo donde se analicen los aspectos más relevantes y significativos, basado en esto, se podrá tomar la decisión más acertada. 
          

      

</template>

<script>
export default {
  name: 'Tema2',
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
