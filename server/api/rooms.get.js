//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const rooms_id = "30a7b69078854847994e94c86eb09e1c";
let payload = [];

async function getRooms() {
    console.log("room id " + rooms_id);
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
        console.log("error" + JSON.stringify(data));
        if (data.results.length > 0) {
            payload = data.results
        }
    })
    .catch((err) => {
        console.log("error" + err);
    })

function getProperties(results) {
    let properties = [];
    results.forEach((result) => {
        properties.push(result.properties)
    })
    return properties;
}

export default defineEventHandler(() => getProperties(payload));