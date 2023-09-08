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
<script lang="ts" setup>
import type { PropType } from 'vue'

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type EmitEvents = {
  (e: 'task-completed-toggle', task: Task): void;
}

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  }
});

const emits = defineEmits<EmitEvents>();

const onTaskCompleted = (event: Event) => {
  emits("task-completed-toggle", {
    id: props.task.id,
    title: props.task.title,
    completed: (event.target as HTMLInputElement)?.checked,
  });
}
</script>