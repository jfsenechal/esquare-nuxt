export function getCoverPage(data) {
    if (data.cover) {
        if (data.cover.type === 'file') {
            return data.cover?.file?.url
        }
        return data.cover?.external?.url
    }
    return null
}

export function getNamePage(data) {
    return data.properties.title.title[0].text.content
}

export function getIconPage(data) {
    if (data.icon) {
        if (data.icon.type === 'external') {
            return data.icon.external.url
        }
        if (data.icon.type === 'file') {
            return data.icon.file.url
        }
    }
    return null
}

export function getEmojiPage(data) {
    if (data.icon) {
        if (data.icon.emoji) {
            return data.value?.icon?.emoji
        }
        if (data.icon.emoji) {
            return data.value?.icon?.emoji
        }
    }
    return null
}