<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import { gsap } from "gsap";

const beforeEnter = (el: HTMLElement) => {
  el.style.transform = "translateX(100px)";
  el.style.opacity = "0";
};

const enter = (el: HTMLElement, done: gsap.Callback) => {
  gsap.to(el, {
    duration: 1,
    x: 0,
    opacity: 1,
    onComplete: done,
  });
};

const afterEnter = (el: HTMLElement) => {
  el.style.transform = "";
  el.style.opacity = "";
};

const beforeLeave = (el: HTMLElement) => {
  el.style.transform = "";
  el.style.opacity = "";
};

const leave = (el: HTMLElement, done: gsap.Callback) => {
  gsap.to(el, {
    duration: 1,
    x: -100,
    opacity: 0,
    onComplete: done,
  });
}


const afterLeave = (el: HTMLElement) => {
  el.style.transform = "translateX(20px)";
  el.style.opacity = "0";
};

</script>
<template>
  <NavBar />
  <!-- <router-view v-slot="{ Component }">
    <transition name="slidein">
        <component :is="Component" />
    </transition>
</router-view> -->
<router-view v-slot="{ Component }">
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <component :is="Component" />
  </transition>
</router-view>
</template>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}


.slidein-enter-to {
  transform: translateX(0);
}

.slidein-enter-from {
  transform: translateX(-100%);
}

.slidein-leave-to {
  transform: translateX(100%);
}

.slidein-leave-from {
  transform: translateX(0);
}

.slidein-enter-active,
.slidein-leave-active {
  transition: transform 0.5s;
}
</style>
