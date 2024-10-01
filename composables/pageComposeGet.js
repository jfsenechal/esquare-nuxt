import {getCachedData} from "~/composables/cacheUtil.js";
export default (pageId = null) => {
    const nuxtApp = useNuxtApp()
    const config = useRuntimeConfig()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/page`, {
            query: {page_id: pageId},
            key: 'page-' + pageId,
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