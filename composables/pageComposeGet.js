export default (pageId = null) => {
    const nuxtApp = useNuxtApp()
    const config = useRuntimeConfig()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/page`, {
            query: {page_id: pageId},
            key: 'page-' + pageId,
            transform: (input) => {
                return {
                    ...input,
                    fetchedAt: new Date()
                }
            },
            getCachedData: (key) => {
                if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
                    console.log('page payload ' + key)
                    return nuxtApp.payload.data[key]
                }
                if (nuxtApp.static.data[key]) {
                    console.log('page static ' + key)
                    return nuxtApp.static.data[key]
                }
                return null
            },
        })
    return {
        status,
        data,
        error
    }
}