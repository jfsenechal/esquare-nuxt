export default (pageId = null) => {
    const nuxtApp = useNuxtApp()
    const config = useRuntimeConfig()
    console.log('fetch http://localhost/notion-php/getPage.php?page_id=' + pageId)
    const {status, data, error} =
        useFetch(`http://localhost/notion-php/getPage.php`, {
            query: {page_id: pageId},
            key: 'page-' + pageId,
        })
    return {
        status,
        data,
        error
    }
}