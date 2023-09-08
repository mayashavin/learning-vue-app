<template>
  <!-- components/CafeComponent.vue -->
  <h1>{{ title }}</h1>
  <p>Open time: 8am - 4pm</p>
  <ul>
    <li v-for="menuItem in menu" :key="menuItem.id">
      {{ menuItem.name }}
    </li>
  </ul>
  <button @click="acceptPayment">Pay</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { restaurantMixin } from "../mixins/restaurantMixin";

export default defineComponent({
  name: "CafeComponent",
  mixins: [restaurantMixin],
  data() {
    return {
      title: "Cafe",
      menu: [
        {
          id: "menu01",
          name: "Coffee",
          price: 5,
        },
        {
          id: "menu02",
          name: "Tea",
          price: 3,
        },
        {
          id: "menu03",
          name: "Cake",
          price: 7,
        },
      ],
    };
  },
  created() {
    console.log("CafeComponent component created!");
  },
});
</script>
