let count = 0;

export default defineEventHandler((event) => {
  return {
    data: {
      count: count++,
    },
  };
});
