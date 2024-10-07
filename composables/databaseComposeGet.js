export default (id = null) => {
    const config = useRuntimeConfig()
    console.log(`http://localhost/notion-php/getDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`http://localhost/notion-php/getDatabase.php`, {
            query: {id: id},
            key: 'database-' + id,
        })
    return {
        status,
        data,
        error
    }
}