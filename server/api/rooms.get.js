//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const rooms_id = process.env.NOTION_ROOMS_ID;
let payload = [];

async function getRooms() {
    if (rooms_id) {
        console.log("room is " + rooms_id)
        return await notion.databases.query({
            database_id: rooms_id,
        });
    } else {
        return [];
    }
}

getRooms().then((data) => {
    console.log("zeze" + JSON.stringify(data))
    if (data.length > 0) {
        payload = data.results
    }
});

function getUrls(results) {
    let urls = [];
    results.forEach((result) => {
        urls.push(result.properties)
    })
    return urls;
}

export default defineEventHandler(() => getUrls(payload));