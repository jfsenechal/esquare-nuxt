export default ( ) => {
    const config = useRuntimeConfig()
    console.log(`fetch ${config.public.API_URL}/notion-php/getMenu.php`)
    const {status, data, error} =
        useFetch(`${config.public.API_URL}/notion-php/getMenu.php`, {
            key: 'menu',
        })
    return {
        status,
        data,
        error
    }
}