<script setup>
const propos = defineProps({
  block: {
    type: Object
  }
})
const h = computed(() => {
  const match = propos.block.type.match(/heading_(\d+)/);
  return match ? `h${match[1]}` : null;
})
const text = computed(() => extractText(propos.block))
const url = computed(() => extractLink(propos.block))
const color = computed(() => extractColor(propos.block))
</script>
<template>
  <component :is="h"
             class="prose lg:prose-xl"
             :class="[isBold(block) ? 'font-semibold' : '',isItalic(block) ? 'italic' : '', underline(block) ? 'underline':'',strikethrough(block) ? 'line-through':'']"
             :style="[color ? 'color:' + color : '']"
             v-if="h">
    {{ text }}
  </component>
</template>