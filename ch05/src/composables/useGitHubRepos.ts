// src/composables/useGitHubRepos.ts
import { useFetch } from "@/composables/useFetch";

type Repo = {
  name: string;
  id: string;
  description: string;
};

export const useGitHubRepos = (username: string) => {
  return useFetch<Repo[]>(`https://api.github.com/users/${username}/repos`);
};
