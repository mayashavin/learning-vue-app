<script setup lang="ts">
import ParentComponent from './components/ParentComponent.vue';
import ProductList from './components/ProductList.vue';
import BadPizzaUsage from './components/BadPizzaUsage.vue';
import ToDoList from './components/ToDoList.vue';
import House from './components/House.vue';
import WithModalComponent from './components/WithModalComponent.vue';

</script>

<template>
  <!-- <section id="sky" />
  <section class="wrapper">
      <House />
  </section> -->
  <main>
    <!-- <ParentComponent /> -->
    <!-- <ToDoList /> -->
    <!-- <ProductList /> -->
  <WithModalComponent />
    <!-- <BadPizzaUsage /> -->
  </main>
</template>

<style scoped>
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
