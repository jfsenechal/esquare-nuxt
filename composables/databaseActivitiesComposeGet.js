export default (id = null) => {
    const config = useRuntimeConfig()
    console.log(`http://localhost/notion-php/activitiesDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`http://localhost/notion-php/activitiesDatabase.php`, {
            query: {id: id},
            key: 'database-activities-' + id,
        })
    return {
        status,
        data,
        error
    }
}