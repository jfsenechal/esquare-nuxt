<script setup>
const propos = defineProps({
  block: {
    type: Object,
    required: true
  }
})
const {
  pending,
  data,
  error
} = childrenComposeGet(propos.block.id)
</script>
<template>
  <div class="min-h-20 prose lg:prose-xl flex flex-row items-center">
    <div class="text-red-500" v-if="error">{{ error }}</div>
    <div v-for="child in data?.results" :key="child.id">
      <BlockColumn :block="child" v-if="child.type === 'column'"/>
    </div>
  </div>
</template>