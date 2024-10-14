export default (id = null) => {
    const config = useRuntimeConfig()
    console.log(`${config.public.API_URL}/notion-php/coworkersDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`${config.public.API_URL}/notion-php/coworkersDatabase.php`, {
            query: {id: id},
            key: 'database-activities-' + id,
        })
    return {
        status,
        data,
        error
    }
}