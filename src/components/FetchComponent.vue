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

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

type FetchComponentData = {
  loading: boolean;
  data: any;
  error?: Error;
};

export default defineComponent({
  name: "FetchComponent",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data(): FetchComponentData {
    return {
      loading: true,
      error: undefined,
      data: undefined,
    };
  },
  async created() {
    try {
      const response = await axios(this.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.data = response.data;
    } catch (error) {
      this.error = error as Error;
    } finally {
      this.loading = false;
    }
  },
});
</script>
