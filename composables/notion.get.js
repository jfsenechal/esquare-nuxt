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