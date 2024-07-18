// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts", {
        families: {
            Roboto: true,
            Montserrat: true,
        }
    }], "@nuxt/image"],
    app: {
        rootId: 'app',
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    runtimeConfig: {
        public: {
            API_URL_SERVER: process.env.API_URL_SERVER,
            API_URL_GRR: process.env.API_URL_GRR,
            NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL || '/',
        },
    },
    compatibilityDate: '2024-07-03',
})