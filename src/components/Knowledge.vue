<template>
  <div class="container">
    <h2>Conocimientos</h2>

    <div class="container-main">
      <div class="maquetacion">
        <img src="public/maquetacion.png" alt="" />
        <ul>
          <li>HTML</li>
          <li>Responsive desing</li>
          <li>Mobile firts</li>
          <li>Uso básico de figma</li>
        </ul>
      </div>

      <div class="css">
        <img src="public/logo-css.png" alt="" />
        <ul>
          <li>Stylus, SASS, SCSS, LESS</li>
          <li>Flexbox</li>
          <li>Css-Grid</li>
          <li>Animaciones y transformaciones</li>
        </ul>
      </div>

      <div class="javascript">
        <img src="public/logo-js.png" alt="" />
        <ul>
          <li>Manipulacion del DOM</li>
          <li>Api rest (Axios, fetch)</li>
          <li>Clousure y scope</li>
          <li>Asuncronimo (Aysnc/await, promesas)</li>
          <li>Testing (TDD, jest)</li>
          <li>POO</li>
          <li>NPM</li>
          <li>Estructuras de datos</li>
          <li>Web Components</li>
        </ul>
      </div>

      <div class="vue-js">
        <img src="public/vue.svg" alt="" />
        <ul>
          <li>Vue router</li>
          <li>Composition API</li>
          <li>Manejo de estado (vuex, pinia)</li>
          <li>Reactividad</li>
          <li>Vite.Js</li>
          <li>Vue Testing (E2E, Unit Tests)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
