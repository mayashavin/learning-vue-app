<template>
  <div>
    <div>
      <div>{{ user }}</div>
      <div>{{ test }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import { shallowRef, onBeforeMount, reactive } from "vue";

type User = {
  name: string;
  bio: string;
  avatar_url: string;
  twitter_username: string;
  blog: string;
};

const user2 = shallowRef<User>({
  name: "",
  bio: "",
  avatar_url: "",
  twitter_username: "",
  blog: "",
});

const user = reactive({
    name: "Maya",
    age: 20
})

user.value = { name: "John" };

const error = shallowRef<Error | undefined>();

onBeforeMount(async () => {
  try {
    const response = await axios.get("https://api.github.com/users/mayashavin");

    user2.value = response.data as User;
  } catch (e) {
    error.value = e as Error;
  }
});
</script>
