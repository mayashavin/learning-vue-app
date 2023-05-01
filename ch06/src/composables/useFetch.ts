import { ref, type Ref, type UnwrapRef } from "vue";

type FetchResponse<T> = {
    data: Ref<UnwrapRef<T> | null>;
    error: Ref<UnwrapRef<Error> | null>;
    loading: Ref<boolean>;
}

export async function useFetch<T>(url: string): Promise<FetchResponse<T>> {
  const data = ref<T | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<Error | null>(null);

  loading.value = true;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      error.value = new Error("Failed to fetch data");
    } else {
      data.value = await response.json();
    }
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }
    return {
      data,
      loading,
      error,
    };

};
