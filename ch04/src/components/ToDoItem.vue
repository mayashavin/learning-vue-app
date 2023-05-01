<template>
  <div>
    <input 
      type="checkbox" 
      :checked="task.completed" 
      @change="onTaskCompleted"
    />
    <span>{{ task.title }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default defineComponent({
  name: 'ToDoItem',
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    }
  },
  emits: ['task-completed-toggle'],
  methods: {
    onTaskCompleted(event: Event) {
      this.$emit("task-completed-toggle", {
        ...this.task,
        completed: (event.target as HTMLInputElement)?.checked,
      });
    },
  }
})
</script>