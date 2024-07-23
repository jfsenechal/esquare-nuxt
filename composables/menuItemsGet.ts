import {
    IconBadge3d,
    IconBuildingFortress,
    IconCube,
    IconDevices2,
    IconUsersGroup,
    IconYoga,
    IconDeviceGamepad2
} from "@tabler/icons-vue";

export const items = [
    {name: 'CO-WORKING', link: '/espace/co-working', icon: '', color: '', id: 1},
    {name: 'E-CUBE', link: '/espace/ecube', icon: '', color: '', id: 2},
    {name: 'EPN', link: '/espace/espace-publique-numerique', icon: '', color: '', id: 3},
    {name: 'FABLAB', link: '/espace/fablab', icon: '', color: '', id: 4},
    {name: 'GAMING', link: '/espace/gaming', icon: '', color: '', id: 5},
    {name: 'SALLES DE REUNION', link: '/salles-a-louer', icon: '', color: '', id: 6},
    {name: 'CONTACT', link: '/contact', icon: '', color: '', id: 7},
]
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

export const socialIcons = [
    {
        name: 'X',
        svg: ' <svg class="bi bi-twitter-x inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>',
        svgWithFill: ' <svg class="bi bi-twitter-x inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="#0f1419" viewBox="0 0 16 16" aria-hidden="true"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>',
        color: '#0f1419',
        colorBg: 'bg-[#0f1419]',
        ringColor: 'hover:ring-[#0f1419]/25',
        link: 'https://x.com/lesquaremarche',
        shareLink: 'https://twitter.com/intent/tweet?url',
        id: 1
    },
    {
        name: 'Facebook',
        svg: ' <svg class="bi bi-facebook inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>',
        svgWithFill: ' <svg class="bi bi-facebook inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="#1877f2" viewBox="0 0 16 16" aria-hidden="true"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>',
        color: '#1877f2',
        colorBg: 'bg-[#1877f2]',
        ringColor: 'hover:ring-[#1877f2]/25',
        link: 'https://www.facebook.com/LeSquareMarche/',
        shareLink: 'https://www.facebook.com/sharer/sharer.php?u=',
        id: 2
    },
    {
        name: 'Instagram',
        svg: '<svg class="bi bi-instagram inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>',
        svgWithFill: '<svg class="bi bi-instagram inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="#e1306c" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>',
        color: '#e1306c',
        colorBg: 'bg-[#e1306c]',
        ringColor: 'hover:ring-[#e1306c]/25',
        link: 'https://www.instagram.com/fablab_lesquare/',
        shareLink: null,
        id: 3
    },
    {
        name: 'Youtube',
        svg: '  <svg class="bi bi-youtube inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>',
        svgWithFill: '  <svg class="bi bi-youtube inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>',
        color: '#FF0000',
        colorBg: 'bg-[#FF0000]',
        ringColor: 'hover:ring-[#FF0000]/25',
        link: 'https://www.youtube.com/@VilledeMarche',
        shareLink: null,
        id: 4
    },
    {
        name: 'Linkedin',
        svg: ' <svg class="bi bi-linkedin inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>',
        svgWithFill: ' <svg class="bi bi-linkedin inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="#0a66c2" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>',
        color: '#0a66c2',
        colorBg: 'bg-[#0a66c2]',
        ringColor: 'hover:ring-[#0a66c2]/25',
        link: 'https://www.linkedin.com/company/e-square-marche-en-famenne',
        shareLink: 'https://www.linkedin.com/sharing/share-offsite/?url=',
        id: 5
    },
]

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