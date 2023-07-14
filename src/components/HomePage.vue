<template>
  <div class="container-init">
    <img src="/1688585306268.png" alt="" />
    <h1>Hola, soy Mariana Contreras</h1>
    <p>Frontend Developer en Vue.js</p>
    <button @click="myCurricula">
      <a>
        MY CV
        <span><img class="flecha" src="/flecha-correcta.png" alt="" /></span>
      </a>
    </button>
  </div>
  <DescrictionPerson />
  <SoftSkills />
  <Knowledge />
  <ProyectPortal />
  <ContactsInfo />
</template>

<script setup>
import DescrictionPerson from "./DescrictionPerson.vue";
import SoftSkills from "./SoftSkills.vue";
import Knowledge from "./Knowledge.vue";
import ProyectPortal from "./ProyectPortal.vue";
import ContactsInfo from "./ContactsInfo.vue";

function myCurricula() {
  fetch("https://public-joel.s3.amazonaws.com/Curriculum+CV.pdf")
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Curriculum CV.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error al descargar el archivo PDF:", error);
    });
}
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
