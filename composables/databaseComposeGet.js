export default (id = null) => {
    const config = useRuntimeConfig()
    console.log(`${config.public.API_URL}/notion-php/getDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`${config.public.API_URL}/notion-php/getDatabase.php`, {
            query: {id: id},
            key: 'database-' + id,
        })
    return {
        status,
        data,
        error
    }
}