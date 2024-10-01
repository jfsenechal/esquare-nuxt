import {getCachedData} from "~/composables/cacheUtil.js";

export default (pageId = null) => {
    const nuxtApp = useNuxtApp()
    const config = useRuntimeConfig()
    const {status, data, error, refresh} =
        useFetch(`${config.public.API_URL_SERVER}/api/database`, {
            query: {id: pageId},
            key: 'database-' + pageId,
            getCachedData: (key) => {
                return getCachedData(nuxtApp, key)
            },
        })
    return {
        status,
        data,
        error
    }
}