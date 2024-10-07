<script setup>
defineProps({
  block: {
    type: Object,
    required: true,
    default:null
  }
})
</script>
<template>
  <div v-if="block">
    <DatabasesBlocksRichtText :block v-if="block.type === 'rich_text'"/>
    <DatabasesBlocksFile :block v-else-if="block.type === 'files'"/>
    <DatabasesBlocksTitle :block v-else-if="block.type === 'title'"/>
    <DatabasesBlocksUnsupported :block v-else/>
  </div>
</template>