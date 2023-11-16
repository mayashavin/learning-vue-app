<template>
  <teleport
    to="#modal"
  >
    <dialog ref="dialog">
      <header>
      <slot name="m-header">
        <h2>{{ title }}</h2>
        <button @click="close" >X</button>
      </slot>
      </header>
      <main>
        <slot name="m-main" />
      </main>
      <footer>
        <slot name="m-footer">
          <button @click="close" >Close</button>
        </slot>
      </footer>
    </dialog>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Dialog',
    },
  },
  emits: ["closeDialog"],
  methods: {
    close() {
      this.$emit("closeDialog", false);
    },
  },
  watch: {
    open(newValue) {
      const element = this.$refs.dialog as HTMLDialogElement;
      if (newValue) {
        element.showModal();
      } else {
        element.close();
      }
    },
  },
})
</script>
<style>
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
  dialog {
    position: fixed;
    z-index: 999;
    inset-block-start: 30%;
    inset-inline-start: 50%;
    width: 300px;
    margin-left: -150px;
  }
</style>