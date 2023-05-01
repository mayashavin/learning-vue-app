<template>
    <div>
      <p>Product: {{ name }}</p>
      <p>Price: {{ price }}</p>
    </div>
</template>
<script lang="ts">
export default {
    name: 'ProductComp',
    props: {
        name: String,
        price: Number
    },
    inject: {
        currentSelectedIds: {
        from: 'selectedIds',
        default: []
        },
    },
}
</script>