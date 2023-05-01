// src/composables/useGitHubRepos.ts
import { useFetch } from "@/composables/useFetch";
import { onBeforeMount, ref } from "vue";

type Repo = {};

export const useGitHubRepos = (username: string) => {
  const repos = ref<Repo[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<Error | null>(null);

  onBeforeMount(async () => {
    const response = await useFetch<Repo[]>(
      `https://api.github.com/users/${username}/repos`
    );

    repos.value = response.data.value;
    error.value = response.error.value;
    loading.value = response.loading.value;
  });

  return {
    repos,
    loading,
    error,
  };
};
