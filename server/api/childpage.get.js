import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
let payload = [];

async function getPage(event) {
    const query = getQuery(event);
    const page_id = query.page_id;
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

async function getChildren(block_id) {
    let children = [];
    let cursor;
    do {
        const response = await notion.blocks.children.list({
            block_id: block_id,
            page_size: 50,
            start_cursor: cursor,
        });
        children = children.concat(response.results);
        cursor = response.has_more ? response.next_cursor : null;
    } while (cursor);
    return children;
}

async function fetchAllChildren(blocks) {
    for (let block of blocks) {
        if (block.has_children) {
            block.children = await getChildren(block.id);
            await fetchAllChildren(block.children);
        }
        //to get icon and cover
        if (block.type === 'child_page') {
            block.page = await notion.pages.retrieve({
                page_id: block.id,
            });
            block.page.children = await getChildren(block.page.id);
            await fetchAllChildren(block.page.children);
        }
    }
}

async function execute(event) {
    try {
        const page = await getPage(event);
        if (page) {
            page.children = await getChildren(page.id);
          //  await fetchAllChildren(page.children);
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
