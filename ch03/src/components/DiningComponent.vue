<template>
  <!-- components/DiningComponent.vue -->
  <h1>{{ title }}</h1>
  <button @click="getDressCode">getDressCode</button>
  <button @click="makeReservation">Make a reservation</button>
  <button @click="acceptPayment">Accept a payment</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { restaurantMixin } from "@/mixins/restaurantMixin";

export default defineComponent({
  name: "DiningComponent",
  mixins: [restaurantMixin],
  data() {
    return {
      title: "Dining",
      menu: [
        { id: "menu01", name: "Steak" },
        { id: "menu02", name: "Salad" },
        { id: "menu03", name: "Pizza" },
      ],
    };
  },
  methods: {
    getDressCode() {
      console.log("Dress code: Casual");
    },
  },
  created() {
    console.log("DiningComponent component created!");
  },
});
</script>
