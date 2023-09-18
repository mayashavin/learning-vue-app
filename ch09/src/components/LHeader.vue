<template>
    <header>
        <div>Pizza House</div>
        <!-- <NavBar /> -->
        <Cart />
    </header>
</template>
<script setup lang="ts">
// import NavBar from './NavBar.vue';
import Cart from './Cart.vue';
</script>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 0;
}
</style>