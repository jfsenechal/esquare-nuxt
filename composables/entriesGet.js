export default (id) => {
    const config = useRuntimeConfig()
    const {pending: pendingGrr, data: dataGrr, error: errorGrr} =
        useFetch(
            `${config.public.API_URL_GRR}/api/?id=${id}`, {}
        )
    return {
        pendingGrr,
        dataGrr,
        errorGrr
    }
}