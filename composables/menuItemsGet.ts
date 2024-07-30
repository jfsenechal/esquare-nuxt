import {
    IconBadge3d,
    IconBuildingFortress,
    IconCube,
    IconDevices2,
    IconUsersGroup,
    IconYoga,
    IconDeviceGamepad2
} from "@tabler/icons-vue";
//https://picsum.photos/1200/800?6
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
    let t = Array.from(tagColorMap, ([tag, color]) => ({tag, color}));
    t.push({tag: 'Tout', color: ''})
    t.sort((a, b) => (a.tag > b.tag) ? 1 : ((b.tag > a.tag) ? -1 : 0))
    return t
}


export const departments = [
    {
        name: 'CO-WORKING',
        description: 'Notre espace de coworking est l\'endroit idéal pour lancer et développer votre activité.N\'hésitez pas à venir tester !',
        link: '/espace/co-working',
        slug: 'co-working',
        icon: IconUsersGroup,
        color: 'text-green-500',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/301144664_1279736142430422_1166191486178030421_n.jpg',
        id: 1
    },
    {
        name: 'E-CUBE',
        description: 'Un programme conçu spécialement pour accompagner les porteurs de projets, les starters et les entreprises dans leur parcours entrepreneurial et d\'innovation',
        link: '/espace/ecube',
        slug: 'ecube',
        icon: IconCube,
        color: 'text-pink-500',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/245147697_1086988088371896_6787924823663219651_n.jpg',
        id: 2
    },
    {
        name: 'Espace Publique Numérique',
        description: 'Accès à du matériel informatique (PC, imprimante, lecteur de carte d\'identité, scanner...), un accompagnement humain dans vos démarches numériques mais aussi des formations',
        link: '/espace/espace-publique-numerique',
        slug: 'espace-publique-numerique',
        icon: IconDevices2,
        color: 'text-blue-500',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/epn.jpg',
        id: 3
    },
    {
        name: 'FABLAB',
        description: 'Venez donner vie à vos projets dans cet atelier partagé disposant de nombreux outils à commande numérique.Accessible à toutes et à tous !',
        link: '/espace/fablab',
        slug: 'fablab',
        icon: IconBadge3d,
        color: 'text-red-500',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/404456887_18001792097485303_7109058707732543650_n.jpg',
        id: 4
    },
    {
        name: 'GAMING',
        description: 'Un espace gaming dynamique et accueillant où les enfants et adolescents conçu pour encourager l\'apprentissage à travers le jeu',
        link: '/espace/gaming',
        slug: 'gaming',
        icon: IconDeviceGamepad2,
        color: 'text-orange-300',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/380060554_615173910782676_1815093535198738928_n.jpg',
        id: 4
    },
    {
        name: 'SALLES DE REUNION',
        description: 'Vous cherchez un endroit parfaitement équipé pour vos réunions, formations, conférences ? Nous vous proposons un vaste choix à l\'e-Square.',
        link: '/espace/salles-a-louer',
        slug: 'salles-a-louer',
        icon: IconYoga,
        color: 'text-yellow-500',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/382988248_616413873992013_5907336049758704853_n.jpg',
        id: 5
    },
    {
        name: 'SERVICES DE LA VILLE',
        description: 'Plan de cohésion sociale, prévention, transition écologique, Agence de développement local sont parmis nous',
        link: '/espace/services-ville',
        slug: 'services-ville',
        icon: IconBuildingFortress,
        color: 'text-purple-500',
        image: 'https://e-square.marche.be/wp-content/uploads/2024/07/378713924_609300171370050_6618675896686105680_n.jpg',
        id: 6
    },
]