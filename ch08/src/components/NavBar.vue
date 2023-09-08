<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <!-- <router-link :to="{ name: 'pizzas', query: { id: 1 } }">Pizza 1</router-link> -->
    <router-link :to="{ name: 'pizzas' }">Pizzas</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </nav>
</template>
<style scoped>
nav {
    display: flex;
    gap: 30px;
    justify-content: center;
}

.router-link-active, .router-link-exact-active {
    text-decoration: underline;
}
</style>
