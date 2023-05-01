<template>
  <div>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
  </div>
</template>
<script lang="ts">
import type { PropType } from "vue";

interface User {
  name: string;
  age: number;
}

export default {
  name: "UserComponent",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
};
</script>
