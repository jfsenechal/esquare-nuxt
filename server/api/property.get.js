import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
let payload = [];

async function getAllParentPages(page_id) {
    let currentPageId = page_id;
    let pages = [];

    while (currentPageId) {
        if (currentPageId === process.env.NOTION_ROOT_ID) {
            return pages;
        }
        const page = await notion.pages.retrieve({
            page_id: currentPageId
        });
        pages.push(page);
        if (page.parent && page.parent.type === 'page_id') {
            currentPageId = page.parent.page_id;
        } else {
            currentPageId = null;
        }
    }

    return pages;
}

async function execute(event) {
    try {
        const query = getQuery(event);
        const page_id = query.page_id;

        if (!page_id) {
            throw createError({
                statusCode: 500,
                statusMessage: 'No page ID provided',
            });
        }

        const parentPages = await getAllParentPages(page_id);

        payload = parentPages;
    } catch (err) {
        console.log("Error: " + JSON.stringify(err));
        throw createError({
            statusCode: 500,
            statusMessage: 'Error loading property: ' + err,
        });
    }
    return payload;
}

export default defineEventHandler((event) => execute(event));