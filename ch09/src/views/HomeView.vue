<template>
    <h1>This is the home view of the Pizza stores</h1>
    <span>{{ router.query.id }}</span>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>