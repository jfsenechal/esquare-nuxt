import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
let payload = [];

async function getPage(event) {
    const query = getQuery(event);
    const page_id = query.page_id;
    console.log("Load page: http://localhost:3000/api/page/?page_id=" + page_id);
    if (page_id) {
        return await notion.pages.retrieve({
            page_id: page_id,
        });
    } else {
        throw createError({
            statusCode: 500,
            statusMessage: 'No page ID',
        });
    }
}

async function getBlocks(pageId) {
    const response = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 50,
    });
    return response.results;
}

async function fetchChildPages(blocks) {
    let childPages = []
    for (let block of blocks) {
        if (block.type === 'child_page') {
            const page = await notion.pages.retrieve({
                page_id: block.id,
            });
            childPages.push(page)
        }
    }
    return childPages;
}

async function fetchDatabases(blocks) {
    for (let block of blocks) {
        block.database = null
        if (block.type === 'child_database') {
            block.database =await notion.databases.query({
                database_id: block.id,
            })
        }
    }
    return blocks;
}

async function execute(event) {
    try {
        const page = await getPage(event);
        if (page) {
            page.blocks = await getBlocks(page.id);
            page.childPages = await fetchChildPages(page.blocks);
            page.blocks = await fetchDatabases(page.blocks);
            payload = page;
        }
    } catch (err) {
        console.log("Error: " + JSON.stringify(err));
        throw createError({
            statusCode: 500,
            statusMessage: 'Error loading page: ' + err,
        });
    }
    return payload;
}

export default defineEventHandler((event) => execute(event));
