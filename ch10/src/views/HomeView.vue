<template>
    <h1>This is the home view of the Pizza stores</h1>
    <span>{{ router.query.id }}</span>
    <button class="button">Pulse</button>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>
<style scoped>
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }

}
.button {
  animation: pulse 2s infinite;
  box-shadow: 0px 0px 1px 1px #0000001a;
}

.button {
  transition: background-color 0.5s ease-in-out;
}

.button:hover {
  background-color: #ff0000;
}
</style>