<template>
    <div class="container-init">
        <h1>Hola, soy Mariana Contreras</h1>
        <p>Frontend Developer en Vue.js</p>
        <img src="../assets/1688149640481.png" alt="">
        <button>MY CV <span><img class="flecha" src="../assets/flecha-correcta.png" alt=""></span>
        </button>
    </div>
    <DescrictionPerson />
    <SoftSkills />
</template>

<script setup>
import DescrictionPerson from './DescrictionPerson.vue';
import SoftSkills from './SoftSkills.vue';
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>