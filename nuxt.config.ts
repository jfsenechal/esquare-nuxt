// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts", {
        families: {
            Roboto: true,
            Montserrat: true,
        }
    }]
    ],
    devServer: {
        port: 3001
    },
    app: {
        rootId: 'app',
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
            NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL || '/'
        },
    },
    compatibilityDate: '2024-07-03',
})