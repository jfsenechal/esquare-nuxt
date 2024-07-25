//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const page_id = process.env.NOTION_PAGE_ID;
let payload = [];

async function getPage() {
    if (page_id) {
        return await notion.pages.retrieve({
            page_id: page_id,
        });
    } else {
        return [];
    }
}

async function getChildren(page) {
    page.children = await notion.blocks.children.list({
        block_id: page_id,
        page_size: 50,
    })
    return page
}

getPage()
    .then((data) => {
        console.log(data);
        if (data) {
            payload = data
        }
    })
    .catch((err) => {
        console.log("error" + err);
    })

export default defineEventHandler(() => getChildren(payload));