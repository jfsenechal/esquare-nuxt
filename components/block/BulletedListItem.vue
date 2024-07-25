<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const text = computed(() => extractText(propos.block))
const url = computed(() => extractLink(propos.block))
const color = computed(() => extractColor(propos.block))
</script>
<template>
  <li
      class="prose lg:prose-xl"
      :class="[isBold(block) ? 'font-semibold' : '',isItalic(block) ? 'italic' : '', underline(block) ? 'underline':'',strikethrough(block) ? 'line-through':'']"
      :style="[color ? 'color:' + color : '']"
      v-if="block">
    {{ text }} {{color}}
  </li>
</template>