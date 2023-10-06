// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  hooks: {
    ready: (ctx) => {}, // console.log(ctx),
  },
  app: {
    head: {
      title: "Nuxt",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/nuxt", "@pinia/nuxt"],
  ssr: true,
});
