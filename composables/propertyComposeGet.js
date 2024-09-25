export default (page_id = null) => {
    if(page_id === null) {
        return {
            status: 'success',
            data: [],
            error: null
        };
    }
    const config = useRuntimeConfig()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/property`, {query: {page_id: page_id}})
    return {
        status,
        data,
        error
    }
}