<template>
  <div>
    <input v-model="message" placeholder="Enter your message" />
    <p>Reversed message: {{ reversedMessage }}</p>
    <p>Is palindrome: {{ isPalindrome }}</p>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";

const message = ref("Hello World");
const reversedMessage = computed<string>(() =>
  message.value.split("").reverse().join("")
);
const isPalindrome = computed<boolean>(
  () => message.value === reversedMessage.value
);
</script>
