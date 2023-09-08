<template>
  <input
    ref="inputRef"
    v-model="message"
    type="text"
    placeholder="Enter your name"
  />
</template>
<script>
import { ref } from "vue";
import { onUpdated, onMounted } from "vue";

const inputRef = ref(null);
const message = ref("");

onMounted(() => {
  console.log("DOM instance: ", inputRef.value);
});

onUpdated(() => {
  console.log("DOM instance after updated: ", inputRef.value);
});
</script>
