export function isBold(block) {
    return block[block.type].rich_text[0].annotations.bold
}

export function isItalic(block) {
    return block[block.type].rich_text[0].annotations.italic
}

export function extractColor(block) {
    const color = block[block.type].rich_text[0].annotations.color;
    return color === 'default' ? '' : color;
}

export function strikethrough(block) {
    return block[block.type].rich_text[0].annotations.strikethrough
}

export function underline(block) {
    return block[block.type].rich_text[0].annotations.underline
}

export function annotations(block) {
    return block[block.type].rich_text[0].annotations.annotations
}

export function extractText(block) {
  return   block[block.type].rich_text[0].text.content
}

export function extractHref(block) {
  return   block[block.type].rich_text[0].text.content
}

export function extractLink(block) {
  return   block[block.type].rich_text[0].text.link
}