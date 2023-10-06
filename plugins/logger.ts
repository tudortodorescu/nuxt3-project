export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      log: (...args: any[]) => console.log(...args),
    },
  };
});
