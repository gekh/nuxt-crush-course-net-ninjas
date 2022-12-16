<template>
  <div>
    <h1>{{ id }} — {{ product.title }}</h1>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
});

const { id } = useRoute().params;
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id });
</script>

<style scoped>

</style>