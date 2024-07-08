//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_API_KEY});
const image_database_id = process.env.NOTION_DATABASE_ID;

let payload = [];

async function getImages() {
    const data = await notion.databases.query({
        database_id: image_database_id,
    });
    return data;
}

async function getPages() {
    const data = await notion.pages.retrieve({
        page_id: image_database_id,
    });
    return data;
}

getImages().then((data) => {
    //console.log(data)
    payload = data.results;
});

function getUrls(results) {
    let urls = [];
    console.log("rest " + results)
    results.forEach((result) => {
        console.log(result.properties);
        //urls.push(result.properties.files[0].file(url));
        urls.push(result.properties);
    })
    console.log(urls)
    return urls;
}

export default defineEventHandler(() => getUrls(payload));