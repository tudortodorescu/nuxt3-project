<script setup>
const { data: products } = useFetch("/api/products", {
  transform: (_data) => _data.products,
});
</script>

<template>
  <div>
    {{ products?.[0] }}
  </div>
</template>
