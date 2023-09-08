<script lang="ts" setup>
import { ref } from 'vue'

const message = ref("Hello World");
console.log(message.value);
</script>

<template>
  <div>{{ message }}</div>
</template>