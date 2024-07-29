//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
let payload = [];
let page_id = null

async function getChildren2(event) {
    const query = getQuery(event)
    page_id = query.page_id
    console.log(page_id)

    if (page_id) {
        return await notion.blocks.children.list({
            block_id: page_id,
            page_size: 50,
        })
    } else
        return []
}

async function execute2(event) {
    try {
        const data = await getChildren2(event);
        if (data) {
            payload = data;
        }
    } catch (err) {
        console.log("error la" + JSON.stringify(err));
        throw createError({
            statusCode: 500,
            statusMessage: 'error message: ' + err,
        })
    }
    return payload
}

export default defineEventHandler((event) => execute2(event));