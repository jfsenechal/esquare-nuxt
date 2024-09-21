export default (id = null) => {
    const config = useRuntimeConfig()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/children`, {query: {id: id}})
    return {
        status,
        data,
        error
    }
}