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
                    fetchedAt: new Date() //input.last_edited_time "2024-09-19T09:58:00.000Z",
                }
            },
            getCachedData: (key) => {
                if (!nuxtApp.isHydrating) {
                    console.log('no hydrating database' + nuxtApp.isHydrating)
                    return
                }
                const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
                if (!data) {
                    console.log('no data database ')
                    return
                }
                console.log('database payload ' + key)
                const expirationDate = new Date(data.fetchedAt)
                expirationDate.setTime(expirationDate.getTime() + 30 * 1000)
                const isExpired = expirationDate.getTime() < Date.now()
                if (isExpired) {
                    console.log('expired database')
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