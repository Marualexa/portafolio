<template>
  <div class="infor-contact">
    <h2>Contactos</h2>
    <div class="container-items">
      <div class="items-1">
        <p class="correo">Correo:</p>
        <p>contrerasomanam@gmail.com</p>
      </div>
      <div class="items-2">
        <h5>Sígueme en redes sociales</h5>
        <div class="items-img">
          <img @click="gitHub" src="../assets/gitHub.png" alt="" />
          <img @click="linkeding" src="../assets/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function gitHub() {
  window.location.href = "https://github.com/Marualexa?tab=repositories";
}

function linkeding() {
  window.location.href = "https://www.linkedin.com/in/mariana-contreras-034b6b251/";
}
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
