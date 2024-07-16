export default () => {
    const config = useRuntimeConfig()
    const {pending: pending, data: data, error: error} =
        useFetch(
            `${config.public.API_URL}/api/rooms`, {}
        )
    return {
        pending,
        data,
        error
    }
}