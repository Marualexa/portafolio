<template>
  <div class="container">
    <h2>Conocimientos</h2>

    <div class="container-main">
      <GenericCards
        v-for="(section, index) in sections"
        :key="index"
        :imageSrc="section.image"
        :items="section.items"
        :arrowSrc="section.arrowImg"
        :mainClass="section.mainClass"
      />
    </div>
  </div>
</template>

<script setup>
import GenericCards from "./GenericCards.vue";
import arrowImg from "@img/down-arrow.svg";
import imgMaquetacion from "@/assets/maquetacion.png";
import imgCss from "@img/logo-css.png";
import imgJava from "@img/logo-js.png";
import imgVue from "@img/vue.svg";
const sections = [
  {
    image: imgMaquetacion,
    items: ["HTML", "Responsive design", "Mobile first", "Uso básico de Figma"],
    arrowImg: arrowImg,
    mainClass: "maquetacion",
  },
  {
    image: imgCss,
    items: [
      "Stylus, SASS, SCSS, LESS",
      "Flexbox",
      "Css-Grid",
      "Animaciones y transformaciones",
    ],
    arrowImg: arrowImg,
    mainClass: "css",
  },
  {
    image: imgJava,
    items: [
      "Manipulación del DOM",
      "Composition API",
      "Manejo de estado (vuex, pinia)",
      "Asincronismo (Aysnc/await, promesas)",
      "Testing (TDD, jest)",
      "POO",
      "NPM",
      "Estructuras de datos",
      "Web Components",
    ],
    arrowImg: arrowImg,
    mainClass: "javascript",
  },
  {
    image: imgVue,
    items: [
      "Vue router",
      "Composition API",
      "Manejo de estado (vuex, pinia)",
      "Reactividad",
      "Vite.Js",
      "Vue Testing (E2E, Unit Tests)",
    ],
    arrowImg: arrowImg,
    mainClass: "vue-js",
  },
];
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
