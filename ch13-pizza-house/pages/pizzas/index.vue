<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <ul>
      <li v-for="pizza in pizzas" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { usePizzas } from "@/composables/usePizzas";
import PizzaCard from "@/components/PizzaCard.vue";

const { pizzas } = usePizzas();
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.pizzas-view--container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
