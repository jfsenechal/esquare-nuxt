export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();
    let payload = [];

    try {
        const data = await $fetch(`http://localhost/notion-php/contact.php`, {
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
