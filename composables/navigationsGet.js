export default () => {
    const {
        pending,
        data,
        error
    } = spacesGet()
    const additems = [
        {name: 'SERVICES DE LA VILLE', link: '/services', id: 'services'},
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
