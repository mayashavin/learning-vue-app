<script setup lang="ts">
import LifeCycleHooksVue from "./components/LifeCycleHooks.vue";
import MyMessageComponent from "./components/MyMessageComponent.vue";
import  StaticMessage from "./components/StaticMessage.vue";
import UserVue from "./components/User.vue";
import UserComposition from "./components/UserComposition.vue";
</script>

<template>
  <UserVue username="mayashavin" />
  <StaticMessage />
</template>

<style scoped></style>
