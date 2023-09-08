<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = 'Welcome to Vue 3!'
    return {
      message
    }
  }
})
</script> -->

<!-- <script setup lang='ts'>
const message = 'Welcome to Vue 3!'
</script>
<template>
  <h1>{{ message }}</h1>
</template> -->

<script lang='ts'>
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    const message = 'Welcome to Vue 3!'
    return () => h('div', message)
  }
})
</script>