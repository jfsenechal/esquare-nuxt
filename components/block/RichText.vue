<script setup>
defineProps({
  texts: {
    type: Array
  }
})
let color = null

function getColor(text) {
  color = extractColor(text)
  return color
}

function hasLink(text) {
  return text.text.link !== null
}
</script>
<template>
  <template v-for="text in texts" :key="text">
    <a :href="text.text.link?.url"
       :class="[isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
       :style="[getColor(text) ? 'color:' + color : '']"
       v-if="hasLink(text)">
      {{ text.text.content }}
    </a>
    <span v-else
          :class="[isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
          :style="[getColor(text) ? 'color:' + color : '']">
    {{ text.text.content }}
    </span>
  </template>
</template>