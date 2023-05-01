<template>
  <div class="contact-view--container">
    <h1>This is the contact page</h1>
    <nav>
      <router-link to="/contact/faq">FAQs</router-link>
      <router-link to="/contact/form">Contact Us</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fadein" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";
import { gsap } from "gsap";

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

.fadein-enter-active,
.fadein-leave-active {
  transition: all 2s;
}

.fadein-enter-from,
.fadein-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
