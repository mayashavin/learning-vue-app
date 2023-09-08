<template>
    <h1>Hello {{ name }}!</h1>
</template>
<!--<script lang="ts">
// export default {
//   name: 'ChildComponent',
//   props: {
//     // name: String
//     name: {
//       type: String,
//     //   default: 'Hello from the child component.'
//       required: true, 
//       validator: value => value !== "Child component"
//     }
//   }
// }
// </script>-->
<script lang="ts" setup>
import { defineProps } from 'vue'

type ChildProps = {
  name?: string
}

const props = withDefaults(defineProps<ChildProps>(), {
  name: 'Hello from the child component.'
})
</script>