// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts", {
      families: {
          Roboto: true
      }
  }
  ]],

  app: {
      rootId: 'app',
      pageTransition: {name: 'page', mode: 'out-in'}
  },

  runtimeConfig: {
      public: {
          API_URL: process.env.API_URL,
      },
  },

  compatibilityDate: '2024-07-03',
})