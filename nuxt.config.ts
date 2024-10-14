// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    experimental: {
        payloadExtraction: true
    },
    modules: ['@nuxtjs/tailwindcss', "@nuxt/image", ["@nuxtjs/google-fonts", {
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
            DEFAULT_COVER: '/images/cover-e-Square.png',
            DEFAULT_ICON: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg',
            NOTION_ROOT_ID: process.env.NOTION_ROOT_ID,
            NOTION_PARTNERS_ID: process.env.NOTION_PARTNERS_ID,
            NOTION_RGPD_ID: process.env.NOTION_RGPD_ID,
            NOTION_SERVICES_ID: process.env.NOTION_SERVICES_ID,
            NOTION_ROOMS_PAGE_ID: process.env.NOTION_ROOMS_PAGE_ID,
            NOTION_ROOMS_DATABASE_ID: process.env.NOTION_ROOMS_DATABASE_ID,
            NOTION_MACHINES_DATABASE_ID: process.env.NOTION_MACHINES_DATABASE_ID,
            NOTION_COWORKING_MEMBERS_DATABASE_ID: process.env.NOTION_COWORKING_MEMBERS_DATABASE_ID,
            NOTION_CONTACT_DATABASE_ID: process.env.NOTION_CONTACT_DATABASE_ID,
            NOTION_MACHINES_PAGE_ID: process.env.NOTION_MACHINES_PAGE_ID,
            NOTION_CONTACT_ID: process.env.NOTION_CONTACT_ID,
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