<template>
  <ChildComponent :name="children[0]" />
  <ChildComponent />
<!-- <ChildComponent name="Red Sweater" /> -->
</template>
<script lang="ts">
import ChildComponent from './ChildComponent.vue'

export default {
    name: 'ParentComponent',
    components: {
        ChildComponent
    },
    data() {
        return {
        children: ['Red Sweater', 'Blue T-Shirt', 'Green Hat']
        }
    }
}
</script>