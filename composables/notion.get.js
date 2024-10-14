export function isBold(text) {
    return text?.annotations.bold
}

export function isItalic(text) {
    return text?.annotations.italic
}

export function strikethrough(text) {
    return text?.annotations.strikethrough
}

export function underline(text) {
    return text?.annotations.underline
}

export function extractText(block) {
    const color = text?.annotations.color;
    return color === 'default' ? false : color;
}

export function extractColor(text) {
    const color = text?.annotations.color;
    return color === 'default' ? false : color;
}

export function annotations(block) {
    return block[block.type].rich_text[0]?.annotations.annotations
}

export function extractHref(block) {
    return block[block.type].rich_text[0]?.text.content
}

export function extractLink(block) {
    return block[block.type].rich_text[0]?.text.link
}

export function slugify(string) {
    const {$slugify} = useNuxtApp()
    return $slugify(string, {lower: true})
}

export function getCoverPage(data) {
    if (data) {
        if (data.cover) {
            if (data.cover.type === 'file') {
                return data.cover?.file?.url
            }
            return data.cover?.external?.url
        }
    }
    return null
}

export function getNamePage(data) {
    return data?.properties?.title?.title[0]?.text?.content
}

export function getIconPage(data) {
    if (data) {
        if (data.icon) {
            if (data.icon.type === 'external') {
                return data.icon.external.url
            }
            if (data.icon.type === 'file') {
                return data.icon.file.url
            }
        }
    }
    return null
}

export function getEmojiPage(data) {
    if (data) {
        if (data.icon) {
            if (data.icon.emoji) {
                return data.value?.icon?.emoji
            }
            if (data.icon.emoji) {
                return data.value?.icon?.emoji
            }
        }
    }
    return null
}