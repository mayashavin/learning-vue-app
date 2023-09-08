<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 class="heading">{{ message }}</h2>
    <input type="text" v-model="message" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const title = "My Message Component";
const message = ref("Welcome to Vue 3!");
</script>
