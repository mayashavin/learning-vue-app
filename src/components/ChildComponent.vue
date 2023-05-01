<template>
    <div>{{childMessage}}</div>
</template>
<script lang="ts">
export default {
  name: 'ChildComponent',
  inject: {
    childMessage: {
      from: 'message',
      default: 'Hello from a descendant component'
    },
  },
}
</script>