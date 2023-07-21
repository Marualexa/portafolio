<template>
  <div :class="styleProyect" @click="redirectToUrl(url)">
    <p>{{ title }}</p>
    <p>{{ information }}</p>
    <img :src="imgProyect" alt="" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const itemsProyect = defineProps({
  title: {
    type: String,
  },
  information: {
    type: String,
  },
  imgProyect: {
    type: String,
  },
  styleProyect: {
    type: String,
  },
  url: {
    type: String,
  },
});

function redirectToUrl(url) {
  window.open(url, "_blank");
}
</script>
