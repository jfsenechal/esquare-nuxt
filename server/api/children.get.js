//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const rooms_id = process.env.NOTION_ROOMS_ID;
let payload = [];

async function getBlocks() {
    if (rooms_id) {
        console.log('children ' + rooms_id)
        return await notion.databases.query({
            block_id: rooms_id,
        });
    } else {
        return ['!!'];
    }
}

getBlocks()
    .then((data) => {
        if (data.results.length > 0) {
            payload = data.results
        }
    })
    .catch((err) => {
        console.log("error" + err);
    })

function getProperties(results) {
    return results
    let properties = [];
    results.forEach((result) => {
        properties.push(result.properties)
    })
    return properties;
}

export default defineEventHandler(() => getProperties(payload));