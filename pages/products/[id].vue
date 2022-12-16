<template>
  <div>
    <Head>
      <Title>Net Ninja | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
});

const { id } = useRoute().params;
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}
</script>

<style scoped>

</style>