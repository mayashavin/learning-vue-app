<template>
  <search class="pizzas-view--container">
    <h1>Pizzas</h1>
    <p v-if="pizzaId">Pizza ID: {{ pizzaId }}</p>
    <input type="search" v-model="search" placeholder="Search for a pizza" />
  </search>
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
      </li>
    </ul>
</template>
<script lang="ts" setup>
import {
  useRouter,
  useRoute
} from "vue-router";
import { usePizzas } from "@/composables/usePizzas";
import PizzaCard from "@/components/PizzaCard.vue";
import { useSearch } from "@/composables/useSearch";
import type { Pizza } from "@/types/Pizza";
import { watch, type Ref } from "vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: "",
  },
});

const route = useRoute();
const pizzaId = route.query?.id;
const router = useRouter();

const { pizzas } = usePizzas();

type PizzaSearch = {
  search: Ref<string>;
  searchResults: Ref<Pizza[]>;
};

const { search, searchResults }: PizzaSearch = useSearch({
  items: pizzas,
  defaultSearch: props.searchTerm,
});

watch(search, (value, prevValue) => {
  if (value === prevValue) return;
  router.replace({ query: { search: value } });
});
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
