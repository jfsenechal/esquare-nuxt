export default (id = null) => {
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/children`, {
            query: {id: id},
            key: 'children-' + id,
            getCachedData: (key) => {
                if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
                    console.log('children payload ' + key)
                    return nuxtApp.payload.data[key]
                }
                if (nuxtApp.static.data[key]) {
                    console.log('children static ' + key)
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