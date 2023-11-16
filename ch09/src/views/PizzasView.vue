<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <!-- <input v-model="search" placeholder="Search for a pizza" /> -->
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import {
  useRouter,
} from "vue-router";
import PizzaCard from "@/components/PizzaCard.vue";
import { useSearch } from "@/composables/useSearch";
import type { Pizza } from "@/types/Pizza";
import { watch, onBeforeMount, type Ref } from "vue";
import { usePizzasStore } from "@/stores/pizzas";
import { storeToRefs } from "pinia";

const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: "",
  },
});

const router = useRouter();

const pizzasStore = usePizzasStore();

type PizzaSearch = {
  search: Ref<string>;
  searchResults: Ref<Pizza[]>;
};

const { pizzas } = storeToRefs(pizzasStore);

const { search, searchResults }: PizzaSearch = useSearch({
  items: pizzas, 
  defaultSearch: props.searchTerm,
});

watch(search, (value, prevValue) => {
  if (value === prevValue) return;
  router.replace({ query: { search: value } });
});

onBeforeMount(() => {
  pizzasStore.fetchPizzas()
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
