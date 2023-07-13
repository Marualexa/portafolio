<template>
  <div class="container-proyect">
    <h2 class="title">PROYECTOS</h2>
    <div class="proyect">
      <div class="git-search" @click="gitSearch">
        <p class="item-1">GitSearch</p>
        <p>
          Fue una de las primeras maquetaciones con JavaScript puro, se realizó un
          buscador para imágenes de GIT para cualquier gusto y colores.
        </p>
        <img class="item-img" src="../assets/gitSearch.PNG" alt="" />
      </div>

      <div class="consumo-api" @click="consumoApi">
        <p class="item-2">ConsumoApi</p>
        <p>
          Este sistema es un catálogo de películas el cual trae detalles de la misma de
          una API pública.
        </p>
        <img class="item-img2" src="../assets/consumoApi.PNG" alt="" />
      </div>

      <div class="user-main" @click="userMain">
        <p class="item-3">UserMain</p>
        <p>
          Este proyecto fue mi entrada a un framework por primera vez, se realizó una base
          de datos como prueba, tiene dos lógicas de paginación y con scroll infinito.
        </p>
        <img class="item-img3" src="../assets/userMain.PNG" alt="" />
      </div>

      <div class="pet-show" @click="petShow">
        <p class="item-4">PetShow</p>
        <p>
          Proyecto personal el cual se realizó para practicar mis habilidades, mi objetivo
          es lograr que se pareciera una tienda virtual de compras.
        </p>
        <img class="item-img4" src="../assets/proyect.PNG" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
