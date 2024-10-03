export default defineNuxtRouteMiddleware((to, from) => {
        if (from.path == '/services/salles-de-reunion') {
            console.log(to.path)
            return navigateTo('/')
        } else if (to.path == '/services/salles-de-reunion') {
            console.log(from.path)
            return navigateTo('/')
        } else if (to.path == '/services/fablab') {
            console.log(from.path)
            return navigateTo('/')
        } else if (to.path == '/services/coworking') {
            console.log(from.path)
            return navigateTo({
                    path: '/',
                    query: {
                        id: process.env.NOTION_PARTNERS_ID
                    }
                }
            )
            console.log('routing')
            //process.env.NOTION_API_KEY
        }
    }
)