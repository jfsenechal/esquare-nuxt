import {Client} from "@notionhq/client"

const notion = new Client({auth: process.env.NOTION_API_KEY})
let payload = []

async function getPage(event) {
    const query = getQuery(event)
    const page_id = query.page_id
    console.log("Load page: http://localhost:3000/api/page/?page_id=" + page_id)
    if (page_id) {
        try {
            return await notion.pages.retrieve({
                page_id: page_id,
            })
        } catch (e) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Error get page',
            })
        }
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'No page ID',
        })
    }
}

async function fetchBlocks(pageId) {
    try {
        const response = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 50,
        })
        return response.results
    } catch (err) {
        console.log("Error get blocks: " + JSON.stringify(err))
        return []
    }
}

async function fetchChildPages(blocks) {
    let childPages = []
    for (let block of blocks) {
        if (block.type === 'child_page' && block.id) {
            try {
                const page = await notion.pages.retrieve({
                    page_id: block.id,
                })
                if (page) {
                    childPages.push(page)
                }
            } catch (err) {
                console.log("Error get child page: " + JSON.stringify(err))
                return []
            }
        }
    }
    return childPages
}

async function fetchDatabases(blocks) {
    let databases = []
    for (let block of blocks) {
        block.database = null
        if (block.type === 'child_database') {
            try {
                const database = await notion.databases.query({
                    database_id: block.id,
                })
                if (database) {
                    databases.push(database)
                }
            } catch (err) {
                console.log("Error get database: " + JSON.stringify(err))
            }
        }
    }
    return databases
}

async function execute(event) {
    const page = await getPage(event)

    if (page) {
        page.blocks = await fetchBlocks(page.id)
        page.child_pages = await fetchChildPages(page.blocks)
        page.databases = await fetchDatabases(page.blocks)
        payload = page
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page not found',
        })
    }

    return payload
}

export default defineEventHandler((event) => execute(event))
