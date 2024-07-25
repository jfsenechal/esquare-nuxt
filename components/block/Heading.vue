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
</script>
<template>
  <component :is="h"
             v-if="h">
    <BlockRichText :texts="block[block.type].rich_text"/>
  </component>
</template>