// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    app: {
        rootId: 'app',
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
        },
    },
})