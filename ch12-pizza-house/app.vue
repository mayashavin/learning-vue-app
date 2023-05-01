<template>
  <NuxtLayout :name="isPizzasLayout ? 'pizzas' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { computed } from "vue";

const isPizzasLayout = computed(
  () => useRoute().path.startsWith("/pizzas/")
);
</script>
<style scoped>
@import './assets/main.css';

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>