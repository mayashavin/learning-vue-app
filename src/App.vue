<script setup lang="ts">
import UserProfile from "@/components/UserProfile.vue";
import Pokemons from "./components/Pokemons.vue";
import ParentComponent from "./components/ParentComponent.vue";
import ToDoList from "./components/ToDoList.vue";
import House from './components/House.vue'
import MyFirstComponent from './components/MyFirstComponent.vue'
import UserWatcherComponent from './components/UserWatcherComponent.vue'
import TaskListComponent from './components/TaskListComponent.vue'
import DiningComponent from './components/DiningComponent.vue'
import CafeComponent from './components/CafeComponent.vue'
import HeadingComponentVue from "./components/HeadingComponent.vue";
import ListLayout from "./components/ListLayout.vue";
import ProductItemList from "./components/ProductItemList.vue";
import TheWelcome from "./components/TheWelcome.vue";

</script>
<template>
  <section class="wrapper">
    <!-- <ProductItemList /> -->
    <TheWelcome />
    <!-- <span class="heading">This is a span element in App.vue component</span> -->
  </section>
  <div id="modal"></div>
</template>
<style>
@import "@/assets/base.css";


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
