<template>
    <!-- <ProductComp :name="product.name" :price="product.price" /> -->
    <ProductComp v-bind="product" />
</template>
<script lang="ts">
import ProductComp from './ProductComp.vue'
export default {
    name: 'ProductList',
    components: {
        ProductComp
    },
    provide: {
        selectedIds: [1]
    },
    data() {
        return {
            product: {
                name: 'Red Sweater',
                price: 19.99,
                id: 1
            }
        }
    }
}
</script>