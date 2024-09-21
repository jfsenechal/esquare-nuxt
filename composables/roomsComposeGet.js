export default () => {
    const config = useRuntimeConfig()
    const {status, data, error} =
        useFetch(`${config.public.API_URL_SERVER}/api/rooms`, {})
    return {
        status,
        data,
        error
    }
}