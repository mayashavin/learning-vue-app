<template>
  <div id="app">
    <!-- <ListLayout v-slot="{ item }">
      <img
        v-if="item.thumbnail"
        class="list-layout__item__thumbnail"
        :src="item.thumbnail"
        :alt="item.name"
        width="200"
      />
      <div class="list-layout__item__name">{{ item.name }}</div>
    </ListLayout> -->
    <ListLayout>
      <template #thumbnail="{ item }">
        <img
          v-if="item.thumbnail"
          class="list-layout__item__thumbnail"
          :src="item.thumbnail"
          :alt="item.name"
          width="200"
        />
      </template>
      <template #main="{ item, price }">
        <div class="list-layout__item__name">{{ item.name }}</div>
        <div class="list-layout__item__description">{{ item.description }}</div>
        <div class="list-layout__item__price">{{ price }}</div>
      </template>
      <template #actions>
        <div class="list-layout__item__footer">
          <button class="list-layout__item__footer__button">Add to cart</button>
        </div>
      </template>
    </ListLayout>
  </div>
</template>
<script>
import ListLayout from "./ListLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductItemList",
  components: [ListLayout],
  data() {
    return {
      price: 100,
    };
  },
});
</script>
