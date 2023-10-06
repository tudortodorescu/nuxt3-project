import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(2);
  const name = ref("Tudor");

  const doubleCount = computed(() => count.value * 2);

  const increment = function () {
    console.log(count.value);
    count.value++;
  };

  return {
    count,
    name,
    doubleCount,
    increment,
  };
});
