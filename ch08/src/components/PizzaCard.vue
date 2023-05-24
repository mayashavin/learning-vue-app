<template>
  <article class="pizza--details-wrapper">
    <img :src="pizza.image" :alt="pizza.title" height="200" width="300" />
    <p>{{ pizza.description }}</p>
    <div class="pizza--inventory">
      <div class="pizza--inventory-price">$ {{ pizza.price }}</div>
      <span v-if="isInCart">In cart</span>
    </div>
    <button class="pizza--add" @click="addToCart">Add to cart</button>
  </article>
</template>
<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import type { Pizza } from "@/types/Pizza";
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  pizza: {
    type: Object as PropType<Pizza>,
    required: true,
  },
});

const cart = useCartStore();
const addToCart = () => {
  cart.add({ id: props.pizza.id, quantity: 1 });
};

const isInCart = computed(():boolean => {
  return !!cart.items.find((item) => item.id === props.pizza.id);
});
</script>
<style scoped>
.pizza--details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 0 1rem;
}

img {
    object-fit: cover;
}

.pizza--inventory {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.pizza--add {
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
