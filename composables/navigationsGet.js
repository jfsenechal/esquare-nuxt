export default () => {
    const {pending: pending, data: data, error: error} =
        useFetch(`${process.env.API_URL_SERVER}/api/navigation`, {})
    return {
        pending,
        data,
        error
    }
}