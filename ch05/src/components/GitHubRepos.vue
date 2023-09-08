<script lang="ts" setup>
import { useGitHubRepos } from "@/composables/useGitHubRepos";
const { data: repos } = useGitHubRepos("mayashavin");
</script>
<template>
  <h2>Repos</h2>
  <ul>
    <li v-for="repo in repos" :key="repo.id">
      <article>
        <header>{{ repo.name }}</header>
        <p>{{ repo.description }}</p>
      </article>
    </li>
  </ul>
</template>
