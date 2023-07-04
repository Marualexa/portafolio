<template>
    <div class="container-init">
        <h1>Hola, soy Mariana Contreras</h1>
        <p>Frontend Developer en Vue.js</p>
        <button>MY CV <span><img class="flecha" src="../assets/flecha-correcta.png" alt=""></span>
        </button>
    </div>
    <DescrictionPerson />
    <SoftSkills />
    <Knowledge />
    <ProyectPortal />
    <ContactsInfo />
</template>

<script setup>
import DescrictionPerson from './DescrictionPerson.vue';
import SoftSkills from './SoftSkills.vue';
import Knowledge from './Knowledge.vue';
import ProyectPortal from './ProyectPortal.vue';
import ContactsInfo from './ContactsInfo.vue';
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>