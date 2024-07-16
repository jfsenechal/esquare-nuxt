//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const rooms_id = process.env.NOTION_ROOMS_ID;
console.log(process.env.NOTION_API_KEY)
console.log(process.env.NOTION_ROOMS_ID)
let payload = [];

async function getRooms() {
    return await notion.databases.query({
        database_id: rooms_id,
    });
}

getRooms().then((data) => {
    console.log(data)
    payload = data.results
});

function getUrls(results) {
    let urls = [];
    results.forEach((result) => {
        urls.push(result.properties)
    })
    return urls;
}

export default defineEventHandler(() => getUrls(payload));