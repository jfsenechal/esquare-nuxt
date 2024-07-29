export default () => {
    const {
        pending,
        data,
        error
    } = spacesGet()
    const additems = [
        {name: 'SALLES DE REUNION', link: '/salles-a-louer', id: 'rooms'},
        {name: 'CONTACT', link: '/contact', id: 'contact'}
    ]
    const items = ref([])
    items.value = [...data.value, ...additems]
    return {
        pending,
        data: items,
        error
    }
}
