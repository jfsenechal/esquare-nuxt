export function getCachedData(nuxtApp, key) {
    if (!nuxtApp.isHydrating) {
        console.log('no hydrating', key)
        return
    }
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    if (!data) {
        console.log('no caches data', key)
        return
    }
    const lasEditTime = new Date(data.last_edited_time)
    console.log("last edit " + lasEditTime)
    console.log('page payload ' + key)
    const today = new Date()
    const isExpired = lasEditTime.getTime() > today.getTime()
    if (isExpired) {
        console.log('expired date ', lasEditTime, 'today', today)
        return
    }

    return data
}