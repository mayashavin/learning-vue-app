<template>
    <div class="cart">
        <span class="cart__total" @click="toggleCartDetails">Cart: {{ cart.total }}</span>
        <div class="cart__list" v-show="showCartDetails">
            <div v-if="cart.total === 0">No items in cart</div>
            <div v-else>
                <ul>
                    <li v-for="(item, index) in cart.detailedItems" :key="item.id" class="cart__list-item">
                        <span>{{index + 1}}. {{ item.title }}</span>
                        <span>${{ item.price }}</span> x
                        <span>{{ item.quantity }}</span>
                        <span>= ${{ item.total }}</span>
                        <button @click="cart.remove(item.id)">Remove</button>
                    </li>
                </ul>                
                <button @click="cart.clear">Remove all</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'

const cart = useCartStore();
const showCartDetails = ref(false);

const toggleCartDetails = () => {
    showCartDetails.value = !showCartDetails.value;
}
</script>
<style scoped>
.cart__list {
    position: absolute;
    list-style: none;
    box-shadow: 2px 2px 3px #e3e0e0;
    border: 1px solid #e3e0e0;
    padding: 10px;
    inset-inline-end: 0;
    background-color: white;
    min-width: 500px
}

.cart {
    position: relative;
}

.cart__total {
    cursor: pointer;
    text-decoration: underline;
}

.cart__list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
</style>