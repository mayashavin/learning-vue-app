<template>
  <div>
    <h2>Bad usage of Pizza component</h2>
    <pizza-component :pizza="{ name: 'Pinia', description: 'Hawaiian pizza' }" />
  </div>
</template>
<script lang="ts">
import PizzaComponent from './PizzaComponent.vue'

export default {
  name: 'BadPizzaUsage',
  components: {
    PizzaComponent
  }
}
</script>