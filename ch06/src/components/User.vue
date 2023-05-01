<template>
  <!-- <h1>{{ title }}</h1> -->
  <h2>Name: {{ user?.name }}</h2>
  <p>Age: {{ user?.bio }}</p>
  <ul>
    <li v-for="repo in repos" :key="repo.id">
      {{ repo }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { useGitHubUser } from "@/composables/useGitHubUser";
import { useGitHubRepos } from "@/composables/useGitHubRepos";

const props = defineProps({
  username: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
});

const { user, loading, error } = useGitHubUser(props.username);
const { repos } = useGitHubRepos(props.username);
</script>
