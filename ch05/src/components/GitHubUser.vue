<script lang="ts" setup>
import { shallowRef } from "vue";

type User = {
  name: string;
  bio: string;
  avatar_url: string;
  twitter_username: string;
  blog: string;
};

const user = shallowRef<User>({
  name: "",
  bio: "",
  avatar_url: "",
  twitter_username: "",
  blog: "",
});

const error = shallowRef<Error | undefined>();

const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/mayashavin");

    if (response.ok) {
      user.value = (await response.json()) as User;
    }
  } catch (e) {
    error.value = e as Error;
  }
};

fetchData();
</script>
