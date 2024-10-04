<script setup>
defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <li
      class="prose lg:prose-xl list-decimal "
      v-if="block">
    <BlockRichText :texts="block[block.type].rich_text"/>
  </li>
</template>