<script setup>
const { data: count, pending, refresh } = useFetch("/api/count", {
  transform: (_data) => _data.data.count,
});

const title = ref("My amazing site.");
</script>

<template>
  <Head>
    <Title>{{ title || "Nuxt" }}</Title>
  </Head>
  <div class="mb-2">Count {{ count }}</div>
  <input type="text" v-model="title" class="text-black" />
  <button :disabled="pending" class="btn" @click="refresh">Get</button>
</template>
