<template>
  <div class="container-proyect">
    <h2 class="title">PROYECTOS</h2>
    <div class="proyect">
      <ProyectCart
        v-for="(item, index) in items"
        :key="index"
        :styleProyect="item.styleProyect"
        :title="item.title"
        :information="item.information"
        :imgProyect="item.imgProyect"
        :url="item.url"
      />
    </div>
  </div>
</template>

<script setup>
import ProyectCart from "./ProyectCart.vue";
import imgGithu from "@img/gitSearchh.png";
import imgCons from "@img/consumoApi.png";
import imgUser from "@img/userMain.png";
import imgPet from "@img/proyect.png";
import imgWeb from "@img/web-genesis.png"

const items = [
  {
    styleProyect: "git-search",
    title: "GitSearch",
    information:
      "Fue una de las primeras maquetaciones con JavaScript puro, se realizó un buscador para imágenes de GIT para cualquier gusto y colores.",
    imgProyect: imgGithu,
    url: "https://github.com/Marualexa/ejercicio-2/tree/master"
  },
  {
    styleProyect: "consumo-api",
    title: "ConsumoApi",
    information:
      "Este sistema es un catálogo de películas el cual trae detalles de la misma de una API pública",
    imgProyect: imgCons,
    url: "https://github.com/Marualexa/consumo-api"
  },
  {
    styleProyect: "user-main",
    title: "UserMain",
    information:
      "Este proyecto fue mi entrada a un framework por primera vez, se realizó una base de datos como prueba, tiene dos lógicas de paginación y con scroll infinito.",
    imgProyect: imgUser,
    url: "https://github.com/Marualexa/userMain/tree/master"
  },
  {
    styleProyect: "pet-show",
    title: "PetShow",
    information:
      "Proyecto personal el cual se realizó para practicar mis habilidades, mi objetivo es lograr que se pareciera una tienda virtual de compras.",
    imgProyect: imgPet,
    url: "https://github.com/Marualexa/Pet-Shop/tree/Pet-show"
  },
  {
    styleProyect: "travel-agent",
    title: "Travel Agent",
    information:
      "Esta web se creó con el objetivo de brindarle a la empresa un proceso de recolección de información. El proyecto se realizó en conjunto con un colaborador que se encargó de Backend.",
    imgProyect: imgWeb,
    url: "https://genesissuarez.github.io/Web-genesis/#/"
  },
];
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
