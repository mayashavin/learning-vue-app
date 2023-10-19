<template>
  <article class="pizza--details-wrapper" :data-testid="pizza.title">
    <img :src="pizza.image" :alt="pizza.title" height="200" width="300" />
    <p>{{ pizza.description }}</p>
    <div class="pizza--inventory">
      <div class="pizza--inventory-stock">Stock: {{ pizza.quantity || 0 }}</div>
      <div class="pizza--inventory-price">$ {{ pizza.price }}</div>
    </div>
    <button @click="addCart">Add to cart</button>
  </article>
</template>
<script setup lang="ts">
import type { Pizza } from "@/types/Pizza";
import { type PropType } from "vue";

const props = defineProps({
  pizza: {
    type: Object as PropType<Pizza>,
    required: true,
  },
});

const emits = defineEmits(['add-to-cart'])

const addCart = () => {
  emits('add-to-cart', { id: props.pizza.id, quantity: 1 })
}
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
</style>
