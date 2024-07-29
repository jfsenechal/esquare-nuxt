export default (pageId = null) => {
    const config = useRuntimeConfig()
    const {pending: pending, data: data, error: error} =
        useFetch(`${config.public.API_URL_SERVER}/api/children`, {query: {page_id: pageId}})
    return {
        pending,
        data,
        error
    }
}