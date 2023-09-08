<template>
  <h1>{{ $truncate('My truncated long text') }}</h1>
  <h2>{{ truncatedText }}</h2>
</template>
<script setup lang="ts">
import { inject } from 'vue';

const { truncate } = inject('plugins');
const truncatedText = truncate('My 2nd truncated text');
</script>