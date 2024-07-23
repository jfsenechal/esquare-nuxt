export default (roomId = 0) => {
    const config = useRuntimeConfig()
    const {pending: pending, data: data, error: error} =
        useFetch(
            `${config.public.API_URL_SERVER}/api/44`, {}
        )
    return {
        pending,
        data,
        error
    }
}