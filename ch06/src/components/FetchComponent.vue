<template>
  <slot name="loader" v-if="loading">
    <div class="loading">Loading...</div>
  </slot>
  <slot :data="data" v-if="data"></slot>
  <slot name="error" :error="error" v-if="error">
    <div class="error">
      <p>Error: {{ error.message }}</p>
    </div>
  </slot>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

const data = ref<Object | undefined>();
const error = ref<Error | undefined>();
const loading = ref<boolean>(false);

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        default: "GET",
    },
});

async function fetchData () {
    try {
        loading.value = true;
        const response = await axios(props.url, { 
            method: props.method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        data.value = response.data;
    } catch (error) {
        error.value = error as Error;
    } finally {
      loading.value = false;
    } 
};

fetchData();
</script>
