export default ( ) => {
    const config = useRuntimeConfig()
    console.log('fetch http://localhost/notion-php/getMenu.php')
    const {status, data, error} =
        useFetch(`http://localhost/notion-php/getMenu.php`, {
            key: 'menu',
        })
    return {
        status,
        data,
        error
    }
}