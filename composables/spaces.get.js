export default () => {
    const config = useRuntimeConfig()
    const {
        pending,
        data,
        error
    } = pageComposeGet(config.public.NOTION_ESPACE_ID)
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
                    texts.push(...child.paragraph.rich_text)
                }
            })
            const item = {
                id: space.id,
                emoji: space.page.icon.emoji,
                name: space.child_page.title,
                texts: texts,
                link: `/espace/${slugify(space.child_page.title)}/${slugify(space.id)}`,
                color: 'red'
            }
            items.push(item)
        }
    })

    items.push(
        {
            id: 'room',
            emoji: null,
            image: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5e3-fe0f.svg',
            name: 'Salles de réunion',
            texts: [
                {
                    "type": "text",
                    "text": {
                        "content": "Vous cherchez un endroit parfaitement équipé pour vos réunions, formations, conférences ? Nous vous proposons un vaste choix à l'e-Square.",
                        "link": null
                    },
                    "annotations": {
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "code": false,
                        "color": "default"
                    },
                    "plain_text": "Vous cherchez un endroit parfaitement équipé pour vos réunions, formations, conférences ? Nous vous proposons un vaste choix à l'e-Square.",
                    "href": null
                }
            ],
            link: `/salles-a-louer`,
            color: 'red'
        })
    return items
}