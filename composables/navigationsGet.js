import spaces from "~/composables/spacesStatic.js";
const additems = [
    {name: 'SERVICES DE LA VILLE', link: '/services', id: 'services'},
    {name: 'CONTACT', link: '/contact', id: 'contact'}
]
const items = [...spaces, ...additems]
export default items
