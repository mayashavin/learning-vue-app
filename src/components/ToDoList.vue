<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <ToDoItem :task="task" @task-completed-toggle="onTaskCompleted" />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ToDoItem from "./ToDoItem.vue";
import type { Task } from "./ToDoItem.vue";

export default defineComponent({
  name: "ToDoList",
  components: {
    ToDoItem,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: "Learn Vue", completed: false },
        { id: 2, title: "Learn TypeScript", completed: false },
        { id: 3, title: "Learn Vite", completed: false },
      ],
    };
  },
  methods: {
    onTaskCompleted(task: Task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks[index].completed = task.completed;
    },
  },
});
</script>
