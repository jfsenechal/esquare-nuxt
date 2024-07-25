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
  <blockquote
      class="prose lg:prose-xl"
      :class="[isBold(block) ? 'font-semibold' : '',isItalic(block) ? 'italic' : '', underline(block) ? 'underline':'',strikethrough(block) ? 'line-through':'']"
      :style="[color ? 'color:' + color : '']"
      v-if="block">
    <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
         fill="currentColor" viewBox="0 0 18 14">
      <path
          d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p>{{ text }}</p>
  </blockquote>
</template>