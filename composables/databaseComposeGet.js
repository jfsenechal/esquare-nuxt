export default (pageId = null) => {
    const nuxtApp = useNuxtApp()
    const config = useRuntimeConfig()
    const {status, data, error, refresh} =
        useFetch(`${config.public.API_URL_SERVER}/api/database`, {
            query: {id: pageId},
            key: 'database-' + pageId,
            transform: (input) => {
                return {
                    ...input,
                    fetchedAt: new Date()
                }
            },
            getCachedData: (key) => {
                const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
                console.log('database payload ' + key)

                if (!data) {
                    return
                }
                const expirationDate = new Date(data.fetchedAt)
                expirationDate.setTime(expirationDate.getTime() + 10 * 1000)
                const isExpired = expirationDate.getTime() < Date.now()
                if (isExpired) {
                    return
                }
                return data
            },
        })
    return {
        status,
        data,
        error
    }
}