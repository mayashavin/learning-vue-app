<template>
  <div class="user-profile" v-if="user">
    <img :src="user.avatar_url" alt="`${user.name} Avatar`" width="200" />
    <div>
      <h1>{{ user.name }}</h1>
      <p>{{ user.bio }}</p>
      <p>Twitter: {{ user.twitter_username }}</p>
      <p>Blog: {{ user.blog }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";

type User = {
  name: string;
  bio: string;
  avatar_url: string;
  twitter_username: string;
  blog: string;
};

type Data = {
  user?: User;
  error?: Error;
};

export default {
  name: "UserProfile",
  data(): Data {
    return {
      user: undefined,
      error: undefined,
    };
  },
  async created() {
    console.log('created')
    try {
      const response = await axios.get(
        "https://api.github.com/users/mayashavin"
      );

      (this as Data).user = response.data as User;
      console.log('User', (this as Data).user?.name)
    } catch (error) {
      (this as Data).error = error as Error;
    }
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated")
  }
};
</script>
