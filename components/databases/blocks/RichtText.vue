<script setup>
defineProps({
  block: {
    type: Object
  }
})
</script>
<template>
  <div class="prose lg:prose-xl">
    <BlockRichText :texts="block.rich_text"/>
  </div>
</template>