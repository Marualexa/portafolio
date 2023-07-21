<template>
  <div :class="mainClass">
    <img :src="imageSrc" alt="" />
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <span class="span">
      <img :src="arrowSrc" alt="" class="imagen" />
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  imageSrc: {
    type: String,
  },
  items: {
    type: Array,
  },
  arrowSrc: {
    type: String,
  },
  mainClass: {
    type: String,
  },
});
</script>

<style lang="sass">
@import "../sass/importGlobal.scss"
</style>
