<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cuadros comparativos
    .row
      .col-4
        img(src="@/assets/curso/temas/t2/img-3.png")
      .col-8
        .cajon-b.color-primario.p-3.mb-5
          
          p.mb-0 Una vez se cuenta con varias cotizaciones (lo ideal es contar con mínimo 3 en cada proceso), se debe analizar la opción más acertada a través de un cuadro comparativo. Como su nombre lo indica, estos cuadros ofrecen una representación visual de varias opciones que pueden compararse entre sí. Puede tener pros, contras y características claves que describan las diferencias vitales entre varias opciones.
            br
            br
            | Dado que no hay una regla general con los gráficos de comparación, estos pueden representar características tanto cuantitativas como cualitativas. En general, son fáciles de hacer y pueden ayudar en la toma de decisiones basadas en datos. 
            br
            br
            | Los cuadros comparativos sirven para organizar la información, facilitando la identificación de características similares y diferentes en los conceptos. Por eso son útiles en la adquisición de conocimientos y la memorización de contenidos.
    p Observar los siguientes ejemplos:
    .tarjeta.color-primario.p-4.mb-5
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
              img(src='@/assets/curso/temas/t2/img-5.png', alt='img5')
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
              img(src='@/assets/curso/temas/t2/img-6.png', alt='img6')
      


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
