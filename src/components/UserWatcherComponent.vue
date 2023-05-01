<template>
  <div>
    <div>
      <label for="name"
        >Name:
        <input v-model="user.name" placeholder="Enter your name" id="name" />
      </label>
    </div>
    <div>
      <label for="age"
        >Age:
        <input v-model="user.age" placeholder="Enter your age" id="age" />
      </label>
    </div>
    <div v-if="user.address">
      <label for="age"
        >City:
        <input
          v-model="user.address.city"
          placeholder="Enter your city"
          id="age"
        />
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

type User = {
  name: string;
  age: number;
};

export default defineComponent({
  name: "UserWatcherComponent",
  data() {
    return {
      user: {
        name: "John",
        age: 30,
      },
    };
  },
  watch: {
    user: {
      handler(newValue: User, oldValue: User) {
        console.log({ newValue, oldValue });
      },
      deep: true,
    },
  },
});
</script>
