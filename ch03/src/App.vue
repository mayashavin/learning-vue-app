<script lang="ts">
import { defineComponent } from 'vue';
// import MyFirstComponent from './components/MyFirstComponent.vue';
import MyFirstComponent from './components/MyFirstComponentWithHook.vue';
import StaticMessage from './components/StaticMessage.vue';
import ReversedMessage from './components/ReversedMessage.vue';
import ProductItemList from './components/ProductItemList.vue';
import DiningComponent from './components/DiningComponent.vue';
import CafeComponent from './components/CafeComponent.vue';
import HeadingComponent from './components/HeadingComponent.vue';

export default defineComponent({
 components: {
    MyFirstComponent,
    StaticMessage,
    ReversedMessage,
    ProductItemList,
    DiningComponent,
    CafeComponent,
    HeadingComponent,
}
})
</script>
<template>
  <!-- <my-first-component />
  <MyFirstComponent /> -->
  <!-- <StaticMessage /> -->
  <!-- <ReversedMessage /> -->
  <!-- <ProductItemList /> -->
  <!-- <DiningComponent /> -->
  <!-- <CafeComponent /> -->
  <section class="wrapper">
    <HeadingComponent />
    <span class="heading">This is a span element in App.vue component</span>
  </section>
 </template>
 <style scoped>
 .wrapper :deep(p) {
   color: #000;
 }
 </style>