// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss',"@nuxt/image", ["@nuxtjs/google-fonts", {
        families: {
            Roboto: true,
            Montserrat: true,
            'Hanken+Grotesk': {wght: '100..900', ital: true},
            //'Hanken+Grotesk': true
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
            NOTION_ROOT_ID: process.env.NOTION_ROOT_ID,
            NOTION_PARTNERS_ID: process.env.NOTION_PARTNERS_ID,
            NOTION_SERVICES_ID: process.env.NOTION_SERVICES_ID,
            NOTION_ROOMS_ID: process.env.NOTION_ROOMS_ID,
            NOTION_CONTACT_ID: process.env.NOTION_CONTACT_ID,
            NOTION_ACTIVIES_ID: process.env.NOTION_ACTIVIES_ID,
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