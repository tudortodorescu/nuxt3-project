<script setup>
import { useCounterStore } from "~/stores/counter.store";
import { onClickOutside } from "@vueuse/core";
const { sayHello } = useUtils();

onMounted(() => {
  sayHello();
});

const el = ref();

const { $log } = useNuxtApp();

onClickOutside(el, () => {
  $log("clicked outside", "yeai");
});

const store = useCounterStore();

const response = await $fetch("/api/hello");
console.log(response);

const { data, pending } = useFetch("/api/hello");

useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  
  <div class="px-1">
    data.api = {{ pending ? "loading..." : data.api }} <br />
    <div ref="el">Click outside me</div>
    <ProfileHeader />
    <Profile />
    <Alert />
    counter {{ store.count }} <br />
    doubleCount {{ store.doubleCount }} <br />
    name {{ store.name }} <br />
    <button @click="store.increment()">click me</button>
    <input type="text" class="text-black" autofocus />
    <img src="/images/3.webp" alt="" />
  </div>
</template>
