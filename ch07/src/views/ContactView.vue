<template>
  <div class="contact-view--container">
    <h1>This is the contact page</h1>
    <nav>
      <router-link to="/contact/faq">FAQs</router-link>
      <router-link to="/contact/form">Contact Us</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";

onBeforeRouteLeave((to, from, next) => {
  const answer = window.confirm("Are you sure you want to leave?");

  next(!!answer);
});
</script>
<style scoped>
nav {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.contact-view--container {
    margin: 3rem auto;
}
</style>
