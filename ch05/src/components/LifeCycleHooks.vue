<template>
  <h2 class="heading">I am {{ message }}</h2>
  <input ref="inputRef" v-model="message" type="text" placeholder="Enter your name" />
</template>
<script setup lang="ts">
import { useLifeCycles } from "../composables/useLifeCycles";
const { message, inputRef } = useLifeCycles();
</script>
