import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
let payload = [];

async function getPage(event) {
    const query = getQuery(event);
    const page_id = query.page_id;
    console.log("Load page " + page_id);
    if (page_id) {
        return await notion.pages.retrieve({
            page_id: page_id,
            filter_properties: ['last_edited_time']
        });
    } else {
        throw createError({
            statusCode: 500,
            statusMessage: 'No page ID',
        });
    }
}

async function execute(event) {
    try {
        const page = await getPage(event);
        if (page) {
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
