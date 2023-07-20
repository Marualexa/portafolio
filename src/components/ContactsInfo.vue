<template>
  <div class="infor-contact">
    <div class="container-items">
      <div class="items-1">
        <img src="@img/correo.png" alt="" />
        <p>contrerasomanam@gmail.com</p>
      </div>
      <div class="items-2">
        <div class="items-img">
          <img @click="gitHub" src="@img/gitHub.png" alt="" />
          <img @click="linkeding" src="@img/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function gitHub() {
  const urlGit = "https://github.com/Marualexa?tab=repositories";
  window.open(urlGit, "_blank");
}

function linkeding() {
  const urlLin = "https://www.linkedin.com/in/mariana-contreras-034b6b251/";
  window.open(urlLin, "_blank");
}
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
