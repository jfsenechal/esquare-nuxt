<script setup>
const props = defineProps({
  column: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="min-h-20 prose lg:prose-xl flex flex-row items-center">
    <div v-for="block in column.blocks" :key="block.id">
      <ArticleBlockNotion :block/>
    </div>
  </div>
</template>