//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const rooms_id = process.env.NOTION_ROOMS_ID;
let payload = [];

async function getRooms() {
    if (rooms_id) {
        return await notion.databases.query({
            database_id: rooms_id,
        });
    } else {
        console.log("vide");
        return [];
    }
}

getRooms()
    .then((data) => {
        if (data.results.length > 0) {
            payload = data.results
        }
    })
    .catch((err) => {
        console.error("error" + err);
    })

function getProperties(results) {
    let properties = [];
    results.forEach((result) => {
        properties.push(result.properties)
    })
    return properties;
}

export default defineEventHandler(() => getProperties(payload));