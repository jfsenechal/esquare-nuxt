export default () => {
    const config = useRuntimeConfig()
    console.log(`http://localhost/notion-php/activitiesDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`http://localhost/notion-php/activitiesDatabase.php`, {
            key: 'database-activities',
        })
    return {
        status,
        data,
        error
    }
}