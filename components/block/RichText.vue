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

//<component :is="href ? 'a' : 'span'"></component>

</script>
<template>
  <template v-for="text in texts" :key="text" v-if="texts.length > 0">
    <component :is="hasLink(text) ? 'a' : 'span'"
               :class="[isBold(text) ? 'font-semibold' : '',isItalic(text) ? 'italic' : '', underline(text) ? 'underline':'',strikethrough(text) ? 'line-through':'']"
               :style="[getColor(text) ? 'color:' + color : '']"
               :href="text.text.link?.url">
      {{ text.text.content }}
    </component>
<!--
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
    </span>-->
  </template>
</template>