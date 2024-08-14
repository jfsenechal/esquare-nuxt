// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxt/image", "@nuxt/ui",["@nuxtjs/google-fonts", {
        families: {
            Roboto: true,
            Montserrat: true,
        }
    }]],
    app: {
        rootId: 'app',
        head: {
            htmlAttrs: {
                lang: 'fr',
            },
        },
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    runtimeConfig: {
        public: {
            API_URL_SERVER: process.env.API_URL_SERVER,
            API_URL_GRR: process.env.API_URL_GRR,
            NOTION_ESPACE_ID: process.env.NOTION_ESPACE_ID,
            NOTION_ROOMS_ID: process.env.NOTION_ROOMS_ID,
            NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL || '/',
        },
    },
    nitro: {
        prerender: {
            routes: [],
        },
    },
    compatibilityDate: '2024-07-03',
})