<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/AD/img-1.png", alt="img-1")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Completar la frase
        p.mb-4 #[b Objetivo] Apreciado aprendiz, a continuación encontrará una actividad didáctica para afianzar los conceptos y aprendizajes del componente de formación. 
        | Se debe completar la frase con la palabra que falta, acorde a la definición de cada enunciado propuesto. ¡Adelante y mucho ánimo!
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
