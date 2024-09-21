<script setup>
const propos = defineProps({
  block: {
    type: Object,
    required: true
  }
})
const {
  status,
  data,
  error
} = childrenComposeGet(propos.block.id)
</script>
<template>
  <div class="min-h-20 prose lg:prose-xl flex flex-row items-center">
    <WidgetsError :error v-if="error"/>
    <WidgetsLoader v-if="status === 'pending'"/>
    <div class="" v-else>
      <div v-for="block in data" :key="block.id">
        <ArticleBlockNotion :block/>
      </div>
    </div>
  </div>
</template>