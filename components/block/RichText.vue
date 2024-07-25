<script setup>
const propos = defineProps({
  texts: {
    type: Array
  }
})
let color = null
function getColor (text) {
  color = extractColor(text)
  return color
}
</script>
<template>
  <span
      v-for="text in texts" :key="text"
      :class="[isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
      :style="[getColor(text) ? 'color:' + color : '']">
    {{ text.text.content }}
  </span>
</template>