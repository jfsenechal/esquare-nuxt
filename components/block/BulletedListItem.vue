<script setup>
defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <li
      class="prose lg:prose-xl"
      v-if="block">
    <BlockRichText :texts="block[block.type].rich_text"/>
  </li>
</template>