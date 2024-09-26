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
                if (!nuxtApp.isHydrating) {
                    console.log('no hydrating page' + nuxtApp.isHydrating)
                    return
                }
                const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
                if (!data) {
                    console.log('no data page ')
                    return
                }
                console.log('page payload ' + key)
                const expirationDate = new Date(data.fetchedAt)
                expirationDate.setTime(expirationDate.getTime() + 30 * 1000)
                const isExpired = expirationDate.getTime() < Date.now()
                if (isExpired) {
                    console.log('expired page')
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