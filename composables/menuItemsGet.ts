export const items = [
    {name: 'CO-WORKING', link: '#', icon: '', color: '', id: 1},
    {name: 'E-CUBE', link: '#', icon: '', color: '', id: 2},
    {name: 'EPN', link: '#', icon: '', color: '', id: 3},
    {name: 'FABLAB', link: '#', icon: '', color: '', id: 4},
    {name: 'SALLES DE REUNION', link: '#', icon: '', color: '', id: 5},
    {name: 'INFOS PRATIQUES', link: '#', icon: '', color: '', id: 6},
    {name: 'CONTACT', link: '#', icon: '', color: '', id: 7},
]
export const news = [
    {
        name: 'Edite votre livre pour pas un balle (ou presque)',
        link: '#',
        image: '/images/news/book.jpg',
        tag: 'esquare',
        excerpt: 'Presque parce que cette formation a un coût (que vous aurez vite amorti avec quelques livres vendus).',
        color: '',
        id: 1
    },
    {
        name: 'Forum Mind &  Market',
        link: '#',
        image: '/images/news/market.jpg',
        tag: 'esquare',
        excerpt: 'A la rencontre des entrepreneurs locaux porteurs d\'idées novatrices, qui méritent d’être mises en lumière et soutenues par la communauté Mind & Market.',
        color: '',
        id: 2
    },
    {
        name: 'Ateliers RécréaTIC',
        link: '#',
        image: '/images/news/recreatic.jpg',
        tag: 'epn',
        excerpt: 'Voici le programme des prochains ateliers numériques RécréaTIC.',
        color: '',
        id: 3
    },
    {
        name: 'Formaction-Commerce',
        link: '#',
        image: '/images/news/adl.jpg',
        tag: 'adl',
        excerpt: 'Participez gratuitement à ce programme d’accompagnement et mettez en œuvre rapidement les leviers de votre croissance commerciale !',
        color: '',
        id: 4
    },
    {
        name: 'Découverte et installation de Linux',
        link: '#',
        image: '/images/news/linux.jpg',
        tag: 'epn',
        excerpt: 'Atelier gratuit le jeudi 06 juin de 9h30 à 12h00: découverte et installation de Linux sur votre ancien ordinateur!',
        color: '',
        id: 5
    },
    {
        name: 'Inauguration de l\E-square',
        link: '#',
        image: '/images/news/inauguration.jpg',
        tag: 'esquare',
        excerpt: 'L\'e-Square, c’est le pôle dédié à la créativité des Marchoises et des Marchois et au numérique de la ville. N\'hésitez pas à franchir les portes, avec vos idées, vos projets... !',
        color: '',
        id: 6
    },
    {
        name: 'e-Procurement',
        link: '#',
        image: '/images/news/Eprocurement.jpeg',
        tag: 'adl',
        excerpt: 'Une formation gratuite consacrée à la plateforme de marchés publics e-Procuremen',
        color: '',
        id: 7
    },
]

export const tags = () => {
    const tagColorMap = new Map();
    news.forEach(item => {
        if (!tagColorMap.has(item.tag)) {
            tagColorMap.set(item.tag, item.color)
        }
    });
    let t =  Array.from(tagColorMap, ([tag, color]) => ({ tag, color }));
    t.push({tag: 'Tout',color: ''})
    t.sort((a,b) => (a.tag > b.tag) ? 1 : ((b.tag > a.tag) ? -1 : 0))
    return t
}