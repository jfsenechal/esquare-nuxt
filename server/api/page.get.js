//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
let payload = [];
let page_id = null

async function getPage(event) {
    const query = getQuery(event)
    page_id = query.page_id
    console.log(page_id)
    if (page_id) {
        return await notion.pages.retrieve({
            page_id: page_id,
        });
    } else {
        return [];
    }
}

async function getChildren(page) {
    if (page_id) {
        page.children = await notion.blocks.children.list({
            block_id: page_id,
            page_size: 50,
        })
    } else
        page.children = []
}

async function execute(event) {
    try {
        const data = await getPage(event);
        if (data) {
            await getChildren(data)
            payload = data;
        }
    } catch (err) {
        console.log("error ici" + JSON.stringify(err));
        throw createError({
            statusCode: 500,
            statusMessage: 'ID should be an integer' + err,
        })
    }
    return payload
}

export default defineEventHandler((event) => execute(event));