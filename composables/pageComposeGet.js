export default (pageId = null) => {
    const config = useRuntimeConfig()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/page`, {query: {page_id: pageId}})
    return {
        status,
        data,
        error
    }
}