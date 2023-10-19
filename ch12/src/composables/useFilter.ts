import { ref, computed, type Ref } from 'vue'

export type ArrayObject = { [key: string]: string | number };

export function useFilter(arr: Ref<ArrayObject[]>, key: string, term: string) {
  const filterBy = ref(key)
  const filterTerm = ref(term)
  const order = ref('asc')

  const filteredArray = computed(() =>
    arr.value.filter((item) =>
      item[filterBy.value]?.toString().toLowerCase().includes(filterTerm.value.toLowerCase())
    ).sort((a, b) => {
      if (order.value === 'asc') {
        return a[filterBy.value] > b[filterBy.value] ? 1 : -1
      } else {
        return a[filterBy.value] < b[filterBy.value] ? 1 : -1
      }
    })
  );

  return {
    filterBy,
    filterTerm,
    filteredArray,
    order,
  }
}