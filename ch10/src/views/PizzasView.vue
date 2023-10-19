<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <input v-model="search" placeholder="Search for a pizza" />
    <transition name="slidein" leave-active-class="rotate" tag="section">
      <ul class="pizza-list" v-show="showList">
        <li v-for="pizza in searchResults" :key="pizza.id">
          <PizzaCard :pizza="pizza" />
        </li>
      </ul>
    </transition>
    <!-- <transition name="slidein" leave-active-class="rotate" appear tag="section">
      <ul class="pizza-list">
        <li v-for="pizza in searchResults" :key="pizza.id">
          <PizzaCard :pizza="pizza" />
        </li>
      </ul>
    </transition> -->
  <!-- <transition-group name="fadein" tag="ul" appear>
    <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
    </li>
</transition-group> -->
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { usePizzas } from "@/composables/usePizzas";
import PizzaCard from "@/components/PizzaCard.vue";
import { useSearch } from "@/composables/useSearch";
import type { Pizza } from "@/types/Pizza";
import { watch, type Ref, ref } from "vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: "",
  },
});

const showList = ref(true);

// setTimeout(() => {
  // showList.value = true;
  setTimeout(() => {
    showList.value = false;
  }, 1000);
// }, 1000);

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

.slidein-enter-to {
  transform: translateX(0);
}

.slidein-enter-from {
  transform: translateX(-100%);
}

.slidein-leave-to {
  transform: translateX(100%);
}

.slidein-leave-from {
  transform: translateX(0);
}

.slidein-enter-active,
.slidein-leave-active {
  transition: transform 0.5s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(45deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.rotate {
  animation: rotate 5s;
}

.fadein-enter-active,
.fadein-leave-active {
  transition: all 2s;
}

.fadein-enter-from,
.fadein-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* li {
  opacity: 1;
} */
</style>
