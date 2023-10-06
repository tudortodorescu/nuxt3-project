import data from "~/data/products.json";

export default defineEventHandler(async (event) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ ...data });
    }, 2000);
  });
});
