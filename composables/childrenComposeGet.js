import {getCachedData} from "~/composables/cacheUtil.js";

export default (id = null) => {
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/children`, {
            query: {id: id},
            key: 'children-' + id,
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