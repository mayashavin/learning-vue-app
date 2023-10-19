<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <input v-model="search" placeholder="Search for a pizza" data-testid="search-input" />
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import {
  useRoute,
  type RouteLocationNormalizedLoaded,
  useRouter,
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

// const route: RouteLocationNormalizedLoaded = useRoute();
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
