// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "nuxt-primevue",
    "@nuxt/eslint",
  ],

  css: ["primeflex/primeflex.css", "primeicons/primeicons.css", "primevue/resources/themes/rhea/theme.css"],

  primevue: {
    usePrimeVue: true,
    components: {
      include: "*",
    },
    directives: {
      include: "*",
    },
    composables: {
      include: "*",
    },
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
});
