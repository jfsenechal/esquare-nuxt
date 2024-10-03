//https://dev.to/trentbrew/using-notion-as-a-headless-cms-with-nuxt-3mk
import {Client} from "@notionhq/client"

const notion = new Client({auth: process.env.NOTION_API_KEY})
let payload = []

async function getDatabase(event) {
    const query = getQuery(event)
    const database_id = query.id
    console.log('load database http://localhost:3000/api/database/?id=' + database_id)
    if (database_id) {
        return await notion.databases.query({
            database_id: database_id,
        })
    } else {
        return []
    }
}

async function execute(event) {
    try {
        payload = await getDatabase(event)
    } catch (err) {
        console.log("Error: " + JSON.stringify(err))
        throw createError({
            statusCode: 500,
            statusMessage: 'Error loading database: ' + err,
        })
    }
    return payload
}

export default defineEventHandler((event) => execute(event))