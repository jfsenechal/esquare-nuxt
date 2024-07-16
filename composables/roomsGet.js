import {Client} from '@notionhq/client'

export const useNotion = () => {
    const notion = ref(null)
    const databaseId = process.env.NOTION_ROOMS_ID;

    const initializeNotion = (authToken) => {
        notion.value = new Client({auth: process.env.NOTION_API_KEY});
    }

    const getDatabase = async (databaseId) => {
        if (!notion.value) {
            throw new Error('Notion client is not initialized')
        }

        try {
            const response = await notion.value.databases.query({
                database_id: databaseId,
            })
            return response
        } catch (error) {
            console.error('Error fetching database:', error)
        }
    }

    return {
        initializeNotion,
        getDatabase,
    }
}