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
import { WatchStopHandle, defineComponent } from "vue";

type User = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
  };
};

export default defineComponent({
  name: "UserWatcherComponent",
  data(): { user: User; stopWatchingAddressCity?: WatchStopHandle } {
    return {
      user: {
        name: "John",
        age: 30,
        address: {
          street: "123 Main St",
          city: "New York",
          country: "USA",
          zip: "10001",
        },
      },
      stopWatchingAddressCity: undefined,
    };
  },
  created() {
    if (this.user.address) {
      this.stopWatchingAddressCity = this.$watch(
        "user.address.city",
        (newValue: string, oldValue: string) => {
          console.log({ newValue, oldValue });
        }
      );
    }
  },
  beforeUnmount() {
    if (this.stopWatchingAddressCity) {
      this.stopWatchingAddressCity();
    }
  },
  watch: {
    user: {
      handler(newValue: User, oldValue: User) {
        console.log({ newValue, oldValue });
      },
      deep: true,
    },
    'user.name': {
      handler(newValue: string, oldValue: string) {
        console.log({ newValue, oldValue })
      },
    },
  },
});
</script>
