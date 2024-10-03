import {getCachedData} from "~/composables/cacheUtil.js";

export default (page_id = null) => {
    if (page_id === null || page_id === 'null') {
        return {
            status: 'success',
            data: [],
            error: null
        };
    }
    console.log('property id:' + page_id)
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/property`, {
                query: {page_id: page_id},
                key: 'property-' + page_id,
                getCachedData: (key) => {
                    return getCachedData(nuxtApp, key)
                },
            }
        )
    return {
        status,
        data,
        error
    }
}