export default (pageId = null) => {
    const config = useRuntimeConfig()
    const {status: status, data: data, error: error} =
        useFetch(`${config.public.API_URL_SERVER}/api/database`, {query: {id: pageId}})
    return {
        status,
        data,
        error
    }
}