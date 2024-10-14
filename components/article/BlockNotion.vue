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
    <BlockParagraph :block v-if="block.type === 'paragraph'"/>
    <BlockRichText :texts="block.title" v-else-if="block.type === 'title'"/>
    <BlockRichText :texts="block.rich_text" v-else-if="block.type === 'rich_text'"/>
    <BlockImage :block v-else-if="block.type === 'image'"/>
    <BlockHeading :block v-else-if="block.type?.includes('heading')"/>
    <BlockFile :block v-else-if="block.type === 'file'"/>
    <BlockVideo :block v-else-if="block.type === 'video'"/>
    <BlockBulletedListItem :block v-else-if="block.type === 'bulleted_list_item'"/>
    <BlockNumberedListItem :block v-else-if="block.type === 'numbered_list_item'"/>
    <BlockQuote :block v-else-if="block.type === 'quote'"/>
    <BlockDivider :block v-else-if="block.type === 'divider'"/>
    <BlockColumnList :block v-else-if="block.type === 'column_list'"/>
    <BlockCallout :block v-else-if="block.type === 'callout'"/>
    <BlockEmbed :block v-else-if="block.type === 'embed'"/>
    <BlockDatabase :block v-else-if="block.type === 'child_database'"/>
    <BlockChildPage :block v-else-if="block.type === 'child_page'"/>
    <BlockUnsupported :block v-else/>
  </div>
</template>