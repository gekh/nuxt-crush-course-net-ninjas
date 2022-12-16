<template>
  <div>
    <ProductDetails :product="product" />
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