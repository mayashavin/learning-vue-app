<template>
  <!-- <ChildComponent :name="children[0]" /> -->
<!-- <ChildComponent name="Red Sweater" /> -->
    <ChildComponent name="Child component" />
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