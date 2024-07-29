<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div>
    {{ data }}
    <div v-for="block in data.children" :key="block.id">
      <BlockParagraph :block v-if="block.type === 'paragraph'"/>
      <BlockImage :block v-else-if="block.type === 'image'"/>
      <BlockHeading :block v-else-if="block.type.includes('heading')"/>
      <BlockFile :block v-else-if="block.type === 'file'"/>
      <BlockVideo :block v-else-if="block.type === 'video'"/>
      <BlockBulletedListItem :block v-else-if="block.type === 'bulleted_list_item'"/>
      <BlockNumberedListItem :block v-else-if="block.type === 'numbered_list_item'"/>
      <BlockQuote :block v-else-if="block.type === 'quote'"/>
      <BlockDivider :block v-else-if="block.type === 'divider'"/>
      <BlockColumnList :block v-else-if="block.type === 'column_list'"/>
      <BlockCallout :block v-else-if="block.type === 'callout'"/>
      <BlockUnsupported :block v-else/>
    </div>
  </div>
</template>