import data from "~/data/products.json";

export default defineEventHandler((event) => {
  return {
    ...data,
  };
});
