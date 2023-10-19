<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/pizzas">Pizzas</NuxtLink>
    </nav>
    <main>
        <slot />
    </main>
</template>
<style scoped>
nav {
    display: flex;
    gap: 20px;
    justify-content: center;
}
  </style>