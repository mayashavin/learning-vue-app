<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(props, context) {
    const message = 'Welcome to Vue 3!'
    return () => h('div', message)
  }
})
</script>