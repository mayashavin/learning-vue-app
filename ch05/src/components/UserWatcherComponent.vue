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
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch } from "vue";

type User = {
  name: string;
  age: number;
};

const user = reactive<User>({
  name: "John",
  age: 30,
});

watch(
    [() => user.name, () => user.age], 
    ([newName, newAge], [oldName, oldAge]) => {
        console.log('user changed from: ', { name: oldName, age: oldAge }, ' to: ', { name: newName, age: newAge })
    }
)
</script>
