export default (pageId = null) => {
    const config = useRuntimeConfig()
    console.log('fetch http://localhost/notion-php/getPage.php?page_id=' + pageId)
    const {status, data, error} =
        useFetch(`http://localhost/notion-php/getPage.php`, {
            query: {page_id: pageId},
            key: 'page-' + pageId,
        })
    console.log(status.value, data.value, error.value)

    return {
        status,
        data,
        error
    }
}