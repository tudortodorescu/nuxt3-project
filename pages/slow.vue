<script setup>
const { data: products, pending, refresh } = useFetch("/api/slow", {
  transform: (_data) => _data.products,
});
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else>
    {{ products?.[10] }}
  </div>
  <div class="my-2" />
  <button :disabled="pending" class="btn" @click="refresh">Refresh</button>
</template>
