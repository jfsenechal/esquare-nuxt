<script setup>
defineProps({
  block: {
    type: Object,
    required: true,
    default: null
  }
})
</script>
<template>
  <div v-if="block">
    <BlockRichText :texts="block.texts" v-if="block.type === 'rich_text'"/>
    <BlockFiles :files="block.files" v-else-if="block.type === 'files'"/>
    <BlockRichText :texts="block.title" v-else-if="block.type === 'title'"/>
    <BlockUnsupported :block v-else/>
  </div>
</template>