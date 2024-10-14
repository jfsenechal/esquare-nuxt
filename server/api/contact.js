export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig();
    let payload = [];

    try {
        const data = await $fetch(`${config.public.API_URL}/notion-php/contact.php`, {
            method: "POST",
            body: body,
            headers: {"Content-Type": "application/json"},
        })
            .then((data) => {
                console.log(data)
                console.log('here')
                payload = {data: data}
            });
    } catch (err) {
        console.log(err)
    }
    return payload
});
