export default (page_id = null) => {
    if (page_id === null) {
        return {
            status: 'success',
            data: [],
            error: null
        };
    }
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/property`, {
                query: {page_id: page_id},
                key: 'property-' + page_id,
                getCachedData: (key) => {
                    if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
                        console.log('property payload ' + key)
                        return nuxtApp.payload.data[key]
                    }
                    if (nuxtApp.static.data[key]) {
                        console.log('property static ' + key)
                        return nuxtApp.static.data[key]
                    }
                    return null
                },
            }
        )
    return {
        status,
        data,
        error
    }
}