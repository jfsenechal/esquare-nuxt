//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
let payload = [];

/**
 * block column_list
 * get children http://localhost:3000/api/children/?id=58a65b3f-91ec-4a29-af8b-f5fe2068aa7d
 * foreach results get (type  column)
 * http://localhost:3000/api/children/?id=285b5c5e-08ea-4da2-942e-251af0e8f18b
 * http://localhost:3000/api/children/?id=25fecf38-7f9a-4ebd-8cf0-818ae85ea1ce
 * column get block give list
 *
 */
async function getBlocks(blockId) {
    return await notion.blocks.children.list({
        block_id: blockId,
    });
}

async function fetchChildren(results) {
    let blocks = []
    for (let block of results) {
        const result2 = await notion.blocks.retrieve({
            block_id: block.id,
        });
        blocks.push(result2)
    }
    return blocks
}

async function execute(event) {
    const query = getQuery(event)
    const id = query.id
    console.log("Load blocks: http://localhost:3000/api/children/?id=" + id);
    try {
        const result = await getBlocks(id)
        const blocks = await fetchChildren(result.results)
        payload = blocks
    } catch (err) {
        console.log("Error: " + JSON.stringify(err))
        throw createError({
            statusCode: 500,
            statusMessage: 'Error loading page: ' + err,
        })
    }
    return payload
}

export default defineEventHandler((event) => execute(event));