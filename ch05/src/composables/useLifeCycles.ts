import {
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  ref,
} from "vue";

export const useLifeCycles = (defaultVal?: string) => {
  const message = ref(defaultVal || "");
  const inputRef = ref(null);

  onMounted(() => {
    console.log('DOM instance: ', inputRef.value)
})

onUpdated(() => {
    console.log('DOM instance after updated: ', inputRef.value)
})

    return {
        message,
        inputRef,
    }
};
