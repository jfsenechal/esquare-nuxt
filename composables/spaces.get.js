import pageComposeGet from "~/composables/pageComposeGet.js";
export default () => {
    const {
        pending,
        data,
        error
    } = pageComposeGet(process.env.NOTION_ESPACE_ID)
    const spaces = ref([])
    spaces.value = extractSpaces(data)
    return {
        pending,
        data: spaces,
        error
    }
}

function extractSpaces(data) {
    const items = []
    data.value?.children.forEach(space => {
        if (space.type === 'child_page') {
            let texts = []
            space.children.forEach(child => {
                if (child.type === 'paragraph') {
                    texts.push(child.paragraph.rich_text)
                }
            })
            const item = {
                id: space.id,
                emoji: space.page.icon.emoji,
                name: space.child_page.title,
                description1: texts,
                description: "blabla",
                link: `/espace/${slugify(space.child_page.title)}/${slugify(space.id)}`,
                color: 'red'
            }
            items.push(item)
        }
    })
    return items
}