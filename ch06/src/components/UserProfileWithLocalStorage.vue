<template>
    <div v-if="loading">Loading...</div>
    <div class="user-profile" v-else-if="user">
      <img :src="user.avatar_url" alt="`${user.name} Avatar`" width="200" />
      <div>
        <h1>{{ user.name }}</h1>
        <p>{{ user.bio }}</p>
        <p>Twitter: {{ user.twitter_username }}</p>
        <p>Blog: {{ user.blog }}</p>
      </div>
    </div>
    <div class="error" v-else-if="error">
      {{ error.message }}
  </div>
  </template>
  <script lang="ts" setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import type { User } from "../types/User.type";
  
  const user = ref<User | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref<boolean>(false);

  async function getUser() {
    loading.value = true;
  
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) return user.value = user;

      const response = await axios.get<User>('https://api.github.com/users/mayashavin');
      user.value = response.data;
      localStorage.setItem('user', JSON.stringify(user.value));
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }
  
  getUser();
  </script>
  